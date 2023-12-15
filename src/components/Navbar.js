import React, { useEffect, useRef, useState } from 'react'
import BeIMg from "../assets/Home/BE.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
    const [hide, setHide] = useState(true)
    const [user, setUser] = useState(true)
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem("user"))

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
        contact: {
            to: "/contact",
            text: "Contact"
        }
    }

    const handleSignOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }

    const dropdownRef = useRef(null);
    const profileIconRef = useRef(null);

    useEffect(() => {
        function handleDocumentClick(event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target) && !profileIconRef.current.contains(event.target)) {
                setUser(true);
            }
        }

        document.addEventListener('mousedown', handleDocumentClick);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    return (
        <section className='navbar '>
            <nav className=" fixed top-0  left-0 right-0  border-gray-200 dark:bg-white-900 border-none py-3 z-50 bg-gradient-to-r from-[#01426a] to-[#096aa6]">
                <div className="container justify-between flex flex-wrap items-center sm:justify-between mx-auto p-4">
                    <div className="flex items-center">
                        <img
                            src={BeIMg}
                            className="h-8 mr-3 bg-yellow-600 rounded-lg"
                            alt="Flowbite Logo"
                        />
                        <Link to="/home" className="self-center text-2xl font-semibold flex-wrap text-yellow-600 font-roboto ">
                            BHARAT<span className='text-white'>ESCROW</span>
                        </Link>
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
                    <div className={`${hide ? "hidden" : "visible"} items-center border border-1 border-solid border-black shadow-black shadow-lg rounded-lg md:border-none md:shadow-none justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                        <ul className=" text-[17px] flex flex-col font-medium p-4 md:p-0 mt-4 border border-none rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700 ">
                            <li>
                                <Link
                                    to="/"
                                    className={`${currentPath === "/" ? "text-yellow-600" : currentPath === "/buy-sell" ? "text-white" : "text-white"} block py-2 pl-3 pr-4 hover:bg-black  md:hover:bg-transparent  text-[16px] rounded md:bg-transparent  md:p-0 `}
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
                                        className={` ${currentPath === item.to ? "text-yellow-600" : "text-white"} block py-2 pl-3 pr-4 text-white text-[16px] rounded hover:text-yellow-600 md:hover:bg-transparent  md:p-0  md:dark:hover:text-yellow-600 hover:bg-black dark:hover:text-yellow-600 md:dark:hover:bg-transparent dark:border-gray-700" `}
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