import React, { useState } from 'react'
import BeIMg from "../assets/Home/logo.jpg"
import BeIMgSmall from "../assets/Home/logo1.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
    const navigate = useNavigate()
    const [hide, setHide] = useState(false)
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItem = {
        buySell: {
            to: "/buy-sell",
            text: "Buy or Sell"
        },
        howitworks: {
            to: "/how-it-works",
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

            <nav className="fixed px-4 top-0 left-0 right-0 border-gray-200 dark:bg-white-900 border-none py-0 z-50 bg-gradient-to-r from-[#fff] to-[#096aa6]">
                <div className="flex justify-between relative flex-wrap md:flex-nowrap md:whitespace-nowrap items-center p-4">
                    <div className=" hidden sm:flex items-center w-[150px] sm:w-[200px] h-[40px]">
                        <img
                            onClick={() => navigate('/')}
                            src={BeIMg}
                            className="w-[150px] h-[50px] mr-3 rounded-lg cursor-pointer"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex sm:hidden items-center w-[150px] sm:w-[200px] h-[30px]">
                        <img
                            onClick={() => navigate('/')}
                            src={BeIMgSmall}
                            className="w-[40px] sm:w-[200px] h-[40px] mr-3 rounded-lg cursor-pointer"
                            alt="Logo"
                        />
                    </div>

                    {/* -----End Text ----- */}
                    <div className="flex md:hidden items-center md:order-2 gap-1">

                        <button data-collapse-toggle="navbar-user" type="button"
                            className="inline-flex items-center z-50 p-2 w-10 h-10 absolute right-0 top-4 justify-center text-sm  text-white rounded-lg md:hidden focus:outline-none  dark:text-black-400  " aria-controls="navbar-user" aria-expanded="false"
                            onClick={() => setHide(!hide)}
                        >
                            {
                                hide ?
                                    <RxCross2 size={20} />
                                    :
                                    <GiHamburgerMenu size={20} />
                            }
                        </button>
                    </div>

                    {/* ----Middle Text---- */}
                    <div className={`${hide ? "visible absolute md:relative  md:top-auto top-16 transition-all duration-700 ease-in-out " : "-top-[400px] md:right-auto"} block w-full right-[2px] `}>
                        <div className={` ${hide ? "visible" : "hidden"} justify-end bg-white md:bg-transparent w-full items-center mt-4 border border-1 border-solid border-black shadow-black shadow-lg rounded-lg md:border-none md:shadow-none md:flex md:w-auto md:order-1`} id="navbar-user">
                            <ul className={` text-[17px] flex flex-col font-medium p-4 md:p-0 mt-4 border border-none rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700 `}>
                                <li>
                                    <Link
                                        to="/"
                                        className={`${currentPath === "/" ? "text-blue-900" : " hover:text-white md:hover:text-blue-900  md:text-white"} text-black hover:text-white md:hover:text-blue-900 block py-2 pl-3 pr-4 hover:bg-[#096aa6] md:hover:bg-transparent text-[16px] rounded md:bg-transparent md:p-0 `}
                                        aria-current="page"
                                        onClick={() => setHide(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                {
                                    Object.values(menuItem).map((item, index) => (
                                        <li
                                            onClick={() => setHide(false)}
                                            className={`${currentPath === item.to ? "md:text-blue-800 hover:text-white md:hover:text-blue-900" : "text-black hover:text-white md:hover:text-blue-900  md:text-white "} text-black block py-2 pl-3 pr-4 text-[16px] rounded md:hover:text-blue md:hover:bg-transparent md:p-0 hover:bg-[#096aa6] md:dark:hover:bg-transparent dark:border-gray-700" `}
                                            key={index}>
                                            <Link className='block' to={item.to}>{item.text}</Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section >

    )
}

export default Navbar