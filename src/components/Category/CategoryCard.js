import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, title }) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-2 d-flex justify-content-center"
        >
            <Link
                to={`/products/category/${id}`}
                className="group w-full no-underline"
            >
                <div className="w-full h-[60px] px-3 rounded-2xl bg-white border border-borderColor/50 shadow-sm flex items-center justify-center transition-all duration-300 ease-out transform group-hover:-translate-y-1.5 group-hover:shadow-premium group-hover:border-primaryAccent/40 hover:bg-gradient-to-r hover:from-white hover:to-brandBg">
                    <span className="font-sans font-bold text-[13px] text-primaryText group-hover:text-primaryAccent transition-colors uppercase tracking-widest text-center line-clamp-2">
                        {title}
                    </span>
                </div>
            </Link>
        </Col>
    );
};

export default CategoryCard;
