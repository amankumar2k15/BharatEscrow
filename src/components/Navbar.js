import React, { useState } from 'react'
import BeIMg from "../assets/Home/logo.jpg"
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
    const [hide, setHide] = useState(true)
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItem = {
        buySell: {
            to: "/buy-sell",
            text: "Buy or Sell"
        },
        howitworks: {
            to: "/howitworks",
            text: "How it works"
        },
        faq: {
            to: "/faqs",
            text: "Faqs"
        },
        blog: {
            to: "/blog",
            text: "Blog"
        },
        contact: {
            to: "/contact",
            text: "Contact"
        }
    }


    return (
        <section className='navbar'>
            <nav className=" fixed top-0 left-0 right-0 border-gray-200 dark:bg-white-900 border-none py-0 z-50 bg-gradient-to-r from-[#fff] to-[#096aa6]">
                <div className="container justify-between flex flex-wrap items-center sm:justify-between p-4">
                    <div className="flex items-center w-[200px] h-[80px]">
                        <img
                            src={BeIMg}
                            className="w-[300px] h-[70px] mr-3 rounded-lg"
                            alt="Logo"
                        />
                    </div>

                    {/* -----End Text ----- */}
                    <div className="flex items-center md:order-2 gap-1">

                        <button data-collapse-toggle="navbar-user" type="button"
                            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none  dark:text-black-400  " aria-controls="navbar-user" aria-expanded="false"
                            onClick={() => setHide(!hide)}
                        >

                            {
                                hide ?
                                    <GiHamburgerMenu size={20} />
                                    :
                                    <RxCross2 size={20} />
                            }
                        </button>
                    </div>

                    {/* ----Middle Text---- */}
                    <div className={`${hide ? "hidden" : "visible"} bg-white md:bg-transparent text-blue-900 items-center border border-1 border-solid border-black shadow-black shadow-lg rounded-lg md:border-none md:shadow-none justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                        <ul className=" text-[17px] flex flex-col font-medium p-4 md:p-0 mt-4 border border-none rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700 ">
                            <li>
                                <Link
                                    to="/"
                                    className={`${currentPath === "/" ? "text-blue-900" : currentPath === "/buy-sell" ? " md:text-white" : " text-black md:text-white"} text-black hover:text-white block py-2 pl-3 pr-4 hover:bg-[#096aa6] md:hover:bg-transparent text-[16px] rounded md:bg-transparent md:p-0 `}
                                    aria-current="page"
                                    onClick={() => setHide(!hide)}
                                >
                                    Home
                                </Link>
                            </li>

                            {
                                Object.values(menuItem).map((item, index) => (
                                    <li
                                        onClick={() => setHide(!hide)}
                                        className={` ${currentPath === item.to ? "text-blue-900" : "text-black md:text-white"} block py-2 pl-3 pr-4 text-black md:text-white text-[16px] rounded hover:text-white md:hover:text-blue md:hover:bg-transparent md:p-0 hover:bg-[#096aa6]  md:dark:hover:bg-transparent dark:border-gray-700" `}
                                        key={index}>
                                        <Link to={item.to}>{item.text}</Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    )
}

export default Navbar