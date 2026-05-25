import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BrandCard = ({ img, id }) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-3 d-flex justify-content-center"
        >
            <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
            >
                <Link
                    to={`/products/brand/${id}`}
                    className="block w-full h-[100px] bg-white border border-borderColor/60 rounded-premium shadow-premium hover:shadow-premium-hover transition-all duration-300 overflow-hidden flex items-center justify-center p-4 hover:border-primaryAccent/20"
                >
                    <img
                        className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-2xl"
                        src={img}
                        alt="Featured Brand"
                    />
                </Link>
            </motion.div>
        </Col>
    );
};

export default BrandCard;
