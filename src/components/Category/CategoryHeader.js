import { Container } from "react-bootstrap";
import AllCategoryHook from "./../../hook/category/all-category-page-hook";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
    const [category] = AllCategoryHook();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (category) setItems(category.data);
    }, [category]);

    return (
        <div className="bg-brandBg/60 border-b border-borderColor/45 py-3.5 overflow-x-auto select-none no-scrollbar">
            <Container>
                <div className="flex items-center justify-start md:justify-center gap-6 md:gap-8 flex-nowrap min-w-max px-2">
                    {items && items.map((item, index) => (
                        <Link
                            key={index}
                            to={`/products/category/${item._id}`}
                            className="no-underline"
                        >
                            <span className="font-sans text-xs font-bold text-secondaryText hover:text-primaryAccent transition-all duration-200 cursor-pointer uppercase tracking-wider hover:scale-105 inline-block">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                    
                    <Link
                        to="/allcategory"
                        className="no-underline"
                    >
                        <span className="font-sans text-xs font-extrabold text-primaryAccent hover:text-accentHover transition-all duration-200 cursor-pointer uppercase tracking-wider hover:scale-105 inline-block border-l border-borderColor/60 pl-6">
                            All Categories
                        </span>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default CategoryHeader;
