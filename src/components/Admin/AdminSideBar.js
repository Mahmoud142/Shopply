import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSideBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        {
            name: "Orders List",
            path: "/admin/allorders",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
            )
        },
        {
            name: "Products List",
            path: "/admin/products-list",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
                </svg>
            )
        },
        {
            name: "Add Brand",
            path: "/admin/add-brand",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            name: "Add Category",
            path: "/admin/add-category",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.38.055.774.101 1.172.14m1.828.18a16.894 16.894 0 005 0m1.828-.18c.398-.039.792-.085 1.172-.14m-12 0a17.262 17.262 0 000 4.17m12-4.17a17.262 17.262 0 010 4.17m-12 0c.38.045.774.081 1.172.108m1.828.136a17.228 17.228 0 005 0m1.828-.136c.398-.027.792-.063 1.172-.108m-12 0V18a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18v-6.944m-12 0c.38-.05.774-.093 1.172-.13m1.828-.168a17.067 17.067 0 005 0m1.828.168c.398.037.792.08 1.172.13"></path>
                </svg>
            )
        },
        {
            name: "Add Subcategory",
            path: "/admin/add-subcategory",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.182 0l5.136-5.136a2.25 2.25 0 000-3.182L12.01 3.659A2.25 2.25 0 0010.59 3z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path>
                </svg>
            )
        },
        {
            name: "Add Product",
            path: "/admin/add-product",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.482-3.482-7.705 7.705zm0 0L3 9l3.482-3.482 3.33 3.33M3 16.5h.008v.008H3v-.008zm3-3H6v-.008h.008v.008zm-3 6h.008v.008H3v-.008zm9-9h.008v.008H12V10.5z"></path>
                </svg>
            )
        },
        {
            name: "Add Coupon",
            path: "/admin/add-coupon",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.75h-15A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.25 21h15a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25zm-10.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-4 select-none">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-secondaryText/60 uppercase tracking-widest px-3 mb-2.5 block">
                    Admin Dashboard
                </span>
                {navItems.map((item, idx) => {
                    const isActive = currentPath === item.path;
                    return (
                        <Link key={idx} to={item.path} className="no-underline">
                            <div className={`flex items-center gap-3 px-3.5 py-3 text-xs font-extrabold rounded-xl transition-all duration-300 ${
                                isActive 
                                    ? "bg-primaryText text-white shadow-sm" 
                                    : "text-secondaryText hover:text-primaryText hover:bg-brandBg"
                            }`}>
                                <span className={isActive ? "text-white" : "text-secondaryText"}>
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default AdminSideBar;
