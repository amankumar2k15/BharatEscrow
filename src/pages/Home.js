import React from 'react'
import Footer from '../components/Footer'
import Box from '../components/Box'
import MSME from "../assets/Home/MSME.jpg"
import domain2 from "../assets/buyorsell/Domain2.png"
import domain3 from "../assets/buyorsell/Domain3.png"
import Websites1 from "../assets/buyorsell/Websites1.png"
import Websites2 from "../assets/buyorsell/Websites2.png"
import appDevelpment from "../assets/Home/appDevelopment.jpg"
import websiteDevelopment from "../assets/Home/websiteDevelopment.jpg"
import Payment from "../assets/Home/Payment.jpg"
import Car1 from '../assets/buyorsell/Car1.jpg'
import "../input.css"


const Home = () => {

    return (
        <section className='home'>
            <div className='background-image-opacity   h-[652px] m-auto flex justify-center px-8  gap-5 flex-wrap ' >
                <div className='flex justify-center content-start flex-col gap-1 '>
                    <div className='flex gap-0 flex-col leading-tight'>

                        <div className='text-[43px] sm:text-6xl md:text-7xl font-bold text-blue-900 '>
                            Welcome to
                        </div>
                        <div className='text-[43px] sm:text-6xl md:text-7xl text-blue-900 font-bold'>
                            Bharat<span className='text-blue-900'>Escrow</span>
                        </div>
                    </div>
                    <div className=' text-md text-dark pl-2'>
                        We prioritize the protection of both buyers and sellers.
                    </div>
                </div>
            </div>


            <div className='flex justify-center  py-6 px-10 gap-2 md:gap-6 flex-wrap md:flex-nowrap ' >

                <div className=' w-full md:w-[320px] h-full md:h-[500px] row from-[hsl(203,98%,21%)] to-[#096aa6] border border-1 border-solid border-black shadow-[#26292e] hover:shadow-black text-white px-8 py-4 rounded-2xl flex gap-2 flex-col transition-all ease-in-out duration-200 sm:hover:-translate-y-2 shadow-lg' >
                    <div className='text-xl sm:text-2xl font-semibold text-blue-900'>
                        Secure Transactions
                    </div>
                    <div className='text-sm sm:text-xl text-blue-700'>
                        Our goal is to make sure that financial transactions take place quickly, securely, and openly. You may rely on BharatEscrow.com to deliver your funds on scheduled time frame and in accordance with the terms that were agreed between both parties.
                    </div>

                </div>

                <div className='bgIm row from-[#096aa6] [rgb(1,66,106)] to-[rgb(1,66,106)]  border border-1 border-solid border-black shadow-[#26292e] hover:shadow-black text-white w:full  md:w-[500px] px-8 py-4 rounded-2xl flex gap-2 flex-col transition-all ease-in-out duration-200 sm:hover:-translate-y-2 shadow-lg'  >
                    <div className='text-xl sm:text-2xl font-semibold  text-blue-900'>
                        Reliable Intermediary
                    </div>
                    <div className='text-sm sm:text-xl text-blue-700' >
                        Our platform acts as a reliable intermediary, holding funds securely through our RBI regulated banking partner until the terms of the transaction are met and confirmed by both parties. We ensure that both parties have peace of mind, knowing that their financial interests are protected. Whether you are purchasing a product, hiring a service, or engaging in any other transaction, BharatEscrow is your trustworthy companion in this journey.
                    </div>
                </div>
            </div>

            {/* --Third section start-- */}
            <div className=' flex pt-28 pb-[83px]   font-roboto flex-col gap-5 px-2 ' >
                <div className='font-bold uppercase mb-10 text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-blue-900'>
                    Industries we serve
                </div>

                <div className='flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  '>
                    <Box text={"MSME"} src={MSME} />
                    <Box text={"ECOMMERCE"} src={domain2} />
                    <Box text={"DIGITAL SERVICES"} src={domain3} />
                    <Box text={"FREELANCER SERVICE"} src={Websites1} />
                    <Box text={"PROPERTY DEALING SERVICE"} src={Websites2} />
                    <Box text={"APP DEVELOPMENT"} src={appDevelpment} />
                    <Box text={"FIRA"} src={Car1} />
                    <Box text={"ESCROW PAYMENTS"} src={Payment} />
                    <Box text={"WEBSITE DEVELOPMENT"} src={websiteDevelopment} />
                </div>
            </div>
            {/* --Third section end-- */}

            <Footer />

        </section>
    )
}

export default Home