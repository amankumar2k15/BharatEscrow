import React, { useState } from 'react'
import Box from '../components/Box'
import domain1 from "../assets/buyorsell/Domain1.png"
import domain2 from "../assets/buyorsell/Domain2.png"
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

    const categoryData = [
        { id: 0, title: "Web Design", img: domain1, category: "Domain" },
        { id: 2, title: "Graphics", img: domain2, category: "Domain" },
        { id: 3, title: "Logo Design", img: domain2, category: "Domain" },
        { id: 4, title: "Advertising", img: Websites1, category: "Websites" },
        { id: 5, title: "Video Content", img: Websites2, category: "Websites" },
        { id: 6, title: "Viral Tweet", img: Websites3, category: "Websites" },
        { id: 7, title: "Car", img: Car1, category: "Car or Trucks" },
        { id: 8, title: "Ship", img: Ship1, category: "Car or Trucks" },
        { id: 9, title: "Truck", img: Truck1, category: "Car or Trucks" },
        { id: 10, title: "Mobile Phones", img: Gadget1, category: "Gadgets" },
        { id: 11, title: "Ear Phones", img: Gadget2, category: "Gadgets" },
        { id: 12, title: "Head Phones", img: Gadget3, category: "Gadgets" },
        { id: 10, title: "Sell", img: Cycle1, category: "Motorcycles" },
        { id: 11, title: "In Stock", img: Cycle2, category: "Motorcycles" },
        { id: 12, title: "Buy", img: Cycle3, category: "Motorcycles" },

    ]

    return (
        <>
            <section className='buySell my-4 mt-10 border-y-2 border-white'>
                <div className=' flex pt-28 pb-[83px] font-roboto flex-col gap-5 px-2 ' >
                    <div className='font-bold text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-blue-900'>
                        Buy or sell items
                    </div>
                    <ul className=' uppercase font-bold text-sm sm:text-md md:text-lg w-full text-center leading-tight mt-5  flex justify-evenly flex-wrap'>
                        {["Domain", "Websites", "Car or Trucks", "Gadgets", "Motorcycles"].map((item, index) => {

                            return (
                                <li key={index}
                                    className={`${selectCategory === item && "bg-slate-300"} inline-block px-4 py-2 rounded-lg transition-all duration-150 ease-in-out text-blue-900 cursor-pointer`}
                                    onClick={() => setSelectCategory(item)}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                    <div className='flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  '>
                        {
                            categoryData.filter((item) => item.category === selectCategory).map((item, index) => {
                                return (
                                    <Box key={index} text={item.title} src={item.img} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BuySell