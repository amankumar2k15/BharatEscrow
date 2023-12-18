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


    const INDUSTRIESData = [
        {
            id: 0,
            title: "MSME",
            image: MSME
        },
        {
            id: 1,
            title: "ECOMMERCE",
            image: domain2
        },
        {
            id: 2,
            title: "DIGITAL SERVICES",
            image: domain3
        },
        {
            id: 3,
            title: "FREELANCER SERVICE",
            image: Websites1
        },
        {
            id: 4,
            title: "PROPERTY DEALING SERVICE",
            image: Websites2
        },
        {
            id: 5,
            title: "ECOMMERCE",
            image: domain2
        },
        {
            id: 6,
            title: "APP DEVELOPMENT",
            image: MSME
        },
        {
            id: 7,
            title: "FIRA",
            image: Car1
        },
        {
            id: 8,
            title: "WEBSITE DEVELOPMENT",
            image: websiteDevelopment
        }
    ]




    return (
        <section className='home'>
            <div className='background-image-opacity h-[652px] m-auto flex justify-center px-8 gap-5 flex-wrap ' >
                <div className='flex justify-center content-start flex-col gap-1 '>
                    <div className='flex gap-0 flex-col leading-tight '>
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


            <div className='flex justify-center md:py-6 px-4 sm:px-10 gap-2 mx-auto md:gap-6 flex-wrap md:flex-nowrap ' >

                <div className=' w-full md:w-[320px] h-full md:h-[350px]   md:w-[390px] row from-[hsl(203,98%,21%)] to-[#096aa6] border border-1 border-solid border-black shadow-[#26292e] hover:shadow-black text-white px-8 py-4 rounded-2xl flex gap-2 flex-col transition-all ease-in-out duration-200 sm:hover:-translate-y-2 shadow-lg' >
                    <div className='text-xl sm:text-2xl font-semibold text-blue-900 p-2'>
                        Secure Transactions
                    </div>
                    <div className='md:text-s  sm:text-xl text-blue-700'>
                        Our goal is to make sure that financial transactions take place quickly, securely, and openly. You may rely on BharatEscrow.com to deliver your funds on scheduled time frame and in accordance with the terms that were agreed between both parties.
                    </div>

                </div>

                <div className='bgIm row from-[#096aa6] [rgb(1,66,106)]  md:w-[390px] width[200px] to-[rgb(1,66,106)]  border border-1 border-solid border-black shadow-[#26292e] hover:shadow-black text-white px-8 py-4 rounded-2xl flex gap-2 flex-col transition-all ease-in-out duration-200 sm:hover:-translate-y-2 shadow-lg'  >
                    <div className='text-xl sm:text-2xl font-semibold  text-blue-900'>
                        Reliable Intermediary
                    </div>
                    <div className='md:text-s sm:text-xl text-blue-700 ' >
                        Our platform acts as a reliable intermediary, holding funds securely through our RBI regulated banking partner until the terms of the transaction are met and confirmed by both parties. We ensure that both parties have peace of mind, knowing that 
                    </div>
                </div>
            </div>

            {/* --Third section start-- */}
            <div className=' flex pt-28 pb-[83px]   font-roboto flex-col gap-5 px-2 ' >
                <div className='font-bold uppercase mb-10 text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-blue-900'>
                    Industries we serve
                </div>

                <div className='flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  '>
                    {INDUSTRIESData.map((item) => <Box text={item.title} src={item.image} />)}


                </div>
            </div>
            {/* --Third section end-- */}

            <Footer />

        </section>
    )
}

export default Home