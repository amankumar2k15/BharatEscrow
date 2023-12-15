import React from 'react'
import BeImg from "../assets/Home/logo.jpg"
import { Link } from 'react-router-dom'

const Footer = () => {

    const linkList = [
        {
            to: "/disclaimer",
            text: "Disclaimer"
        },
        {
            to: "/Home",
            text: "Home",
        },
        {
            to: "/howitworks",
            text: "How it works"
        },
        {
            to: "/faqs",
            text: "Faqs",
        },
        {
            to: "/contact",
            text: "Contact",
        },
        {
            to: "/privacy",
            text: "Privacy"
        },
    ]


    const optionList = ["English", "Thai", "Myanmar", "Arabic"]

    return (
        <section className='footer max-[380px]' >
            <div className='flex justify-around border-b-2 border-[#e3e1dc] flex-col md:flex-row flex-wrap gap-4 p-4 md:p-10 mx-auto bg-gradient-to-r from-[#01426a] to-[#096aa6]'>

                {/* left  */}
                <div className="flex pt-6 sm:pt-0 w-[200px] h-[80px] ">
                    <img
                        src={BeImg}
                        className="w-[300px] mr-3 rounded-lg"
                        alt="Flowbite Logo"
                    />
                </div>

                {/* right */}
                <div className='flex flex-col md:flex-row gap-4 text-white font-bold  '>
                    {/* <div className='px-0 flex-wrap  flex  gap-10 text-white font-bold '> */}
                    <div className='flex flex-col gap-2 text-2xl sm:text-3xl px-2 sm:px-10'>
                        Resources
                        <div className='flex flex-col gap-0 text-[16px]  sm:text:2xl text-white '>
                            {linkList.map((links, index) => {
                                return (
                                    <Link to={links.to} key={index} className='hover:text-yellow-600'>{links.text}</Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-xl sm:text-3xl px-2 sm:px-10'>
                        Information
                        <div className='flex flex-col gap-0 text-lg sm:text:2xl'>
                            <p>Terms & Conditions</p>
                            <a className='hover:text-yellow-600' href='tel:+8368436501'>836-843-6501</a>
                            <a className='hover:text-yellow-600' href='https://bharat-escrow.netlify.app/'>Info@bharatescrow.com</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 px-0 sm:px-10'>
                        <select className='py-4 px-2 rounded-lg bg-yellow-600 border-none  text-white'>
                            {optionList.map((lang, index) => <option key={index}>{lang}</option>)}
                        </select>
                    </div>
                </div>

            </div>
            <div className='bg-gradient-to-r from-[#01426a] to-[#096aa6] text-[#e3e1dc] py-2 text-center '>
                Copyright &copy; 2023 BharatEscrow
            </div>
        </section>
    )
}

export default Footer