import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Box = ({ text, src, id, item, handleSetIndustryRoutes }) => {
    const { pathname } = useLocation()

    return (
        <>
            {pathname === "/" ?
                (
                    <div key={id} onClick={() => handleSetIndustryRoutes(item)} className='font-bold pt-4 pb-6 w-[350px] h-[320px] border border-1 border-solid z-0 flex flex-col  shadow-[#26292e] hover:shadow-black shadow-lg rounded-xl transition-all ease-in-out duration-300 sm:hover:-translate-y-1  max-w-sm mx-auto text-center  text-black text-xl  bg-white '>
                        <div className='text-2xl   px-4 py-4 rounded-xl'>
                            <h3>{text}</h3>
                        </div>
                        <div className='rounded-xl  h-[220px] object-cover overflow-hidden '>
                            <img className='rounded-xl object-cover mx-auto border  h-[200px]' width={240} src={src} alt='img1' />
                        </div>
                    </div>
                )
                : (
                    <div key={id} className='font-bold pt-4 pb-6 w-[350px] h-[320px] border border-1 border-solid z-0 flex flex-col  shadow-[#26292e] hover:shadow-black shadow-lg rounded-xl transition-all ease-in-out duration-300 sm:hover:-translate-y-1  max-w-sm mx-auto text-center  text-black text-xl  bg-white '>
                        <div className='text-2xl   px-4 py-4 rounded-xl'>
                            <h3>{text}</h3>
                        </div>
                        <div className='rounded-xl  h-[220px] object-cover overflow-hidden '>
                            <img className='rounded-xl object-cover mx-auto border  h-[200px]' width={240} src={src} alt='img1' />
                        </div>
                    </div>
                )

            }
        </>
    )
}

export default Box