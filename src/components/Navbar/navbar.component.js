import React from "react";

import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bond">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
                    AndhraPradesh <BiChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full" />
            </div>
        </div>
        </>
    )
};
const NavMd = () => {
    return (
        <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-sm">
            <BiSearch />
            <input type="search" className="w-full focus-outline:none" placeholder="Search for movies, events, plays, sports and activities"></input>
        </div>
    )
};
const NavLg = () => {
    return (
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2">
                <div className="w-12 h-12">
                    <img 
                    src=""
                    alt="logo"
                    className="w-full h-full" />
                </div>
                <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-sm">
                    <BiSearch />
                    <input type="search" className="w-full focus-outline:none" placeholder="Search for movies, events, plays, sports and activities"></input>
                </div>
            </div>



            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                    AndhraPradesh 
                    <BiChevronDown />
                </span>
                <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
                    Sign in
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>
            </div>
            
        </div>
        </>
    )
};

const Navbar = () => {
    return (
        <>
        <nav className="bg-navCol-700 px-4 py-2">
            <div className="md:hidden">{//hidden for medium and large screens
                /*Mobile screen*/
                <NavSm />
            }
            </div>
            <div className="hidden lg:hidden md:flex">{//hidden for small and large screens and flexible for medium
                /*Ipad or Tablet screen*/
                <NavMd />
            }
            </div>
            <div className="hidden lg:flex">{//hidden for small and medium screens and flexible for large
                /*Desktop screen*/
                <NavLg />
            }
            </div>

        </nav>
        </>
    )
};

export default Navbar;