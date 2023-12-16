import React, { useState } from 'react'
import Box from '../components/Box'
import domain1 from "../assets/buyorsell/Domain1.png"
import domain2 from "../assets/buyorsell/Domain2.png"
import domain3 from "../assets/buyorsell/Domain3.png"
import Websites1 from "../assets/buyorsell/Websites1.png"
import Websites2 from "../assets/buyorsell/Websites2.png"
import Websites3 from "../assets/buyorsell/Website3.png"
import Gadget1 from "../assets/buyorsell/Gadget1.jpg"
import Gadget2 from "../assets/buyorsell/Gadget2.jpg"
import Gadget3 from "../assets/buyorsell/Gadget3.jpg"
import Car1 from '../assets/buyorsell/Car1.jpg'
import Ship1 from '../assets/buyorsell/Ship1.jpg'
import Truck1 from '../assets/buyorsell/Truck1.jpg'
import Cycle1 from "../assets/buyorsell/cycle1.jpg"
import Cycle2 from "../assets/buyorsell/cycle2.jpg"
import Cycle3 from "../assets/buyorsell/cycle3.jpg"
import Footer from '../components/Footer'

const BuySell = () => {
    const [selectCategory, setSelectCategory] = useState("Domain")

    return (
        <>
            <section className='buySell my-4 mt-20 border-y-2 border-white'>
                <div className=' flex pt-28 pb-[83px] font-roboto flex-col gap-5 px-2 ' >
                    <div className='font-bold text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-blue-900'>
                        BUY OR SELL ITEMS
                    </div>
                    <ul className=' uppercase font-bold text-sm sm:text-md md:text-lg w-full text-center leading-tight mt-5  flex justify-evenly flex-wrap'>
                        {["Domain", "Websites", "Car or Trucks", "Gadgets", "Motorcycles"].map((item) => {
                            return (
                                <li className='inline-block text-white transition-all duration-150 ease-in-out  text-blue-900  hover:text-blue-700  cursor-pointer py-3 px-3 '
                                    onClick={() => setSelectCategory(item)}>
                                    {item}
                                </li>
                            )

                        })}

                    </ul>

                    <div className='flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  '>
                        {selectCategory === "Domain" && (
                            <>
                                <Box text={"Web Design"} src={domain1} />
                                <Box text={"Graphics"} src={domain2} />
                                <Box text={"Logo Design"} src={domain3} />
                            </>
                        )}


                        {selectCategory === "Websites" && (
                            <>
                                <Box text={"Advertising"} src={Websites1} />
                                <Box text={"Video Content"} src={Websites2} />
                                <Box text={"Viral Tweet"} src={Websites3} />
                            </>

                        )}

                        {selectCategory === "Car or Trucks" && (
                            <>
                                <Box text={"Car"} src={Car1} />
                                <Box text={"Ship"} src={Ship1} />
                                <Box text={"Truck"} src={Truck1} />
                            </>

                        )}

                        {selectCategory === "Gadgets" && (
                            <>
                                <Box text={"Mobile Phones"} src={Gadget1} />
                                <Box text={"Ear Phones"} src={Gadget2} />
                                <Box text={"Head Phones"} src={Gadget3} />
                            </>

                        )}

                        {selectCategory === "Motorcycles" && (
                            <>
                                <Box text={"Sell"} src={Cycle1} />
                                <Box text={"In Stock"} src={Cycle3} />
                                <Box text={"Buy"} src={Cycle2} />
                            </>

                        )}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BuySell