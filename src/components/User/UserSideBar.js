import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserSideBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        {
            name: "Order Management",
            path: "/user/allorders",
            icon: (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
            )
        },
        {
            name: "Favorite Products",
            path: "/user/favoriteproducts",
            icon: (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                </svg>
            )
        },
        {
            name: "Saved Addresses",
            path: "/user/addresses",
            icon: (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                </svg>
            )
        },
        {
            name: "My Profile",
            path: "/user/profile",
            icon: (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-4 select-none">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-secondaryText/60 uppercase tracking-widest px-3 mb-2.5 block">
                    Personal Settings
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

export default UserSideBar;
