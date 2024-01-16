import React from 'react'
import { useNavigate } from 'react-router-dom'

const Box = ({ text, src, id , setIndustryRoute , item }) => {
    // console.log(item);
    const navigate = useNavigate()
    const handleSetRoutes = (items) => {
        const routeCal = items?.title?.split(' ').map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1, item.length)}`).join(" ").replaceAll(' ', "-")
        localStorage.setItem("industryRoutes", routeCal)
        setIndustryRoute({ route: routeCal })
        // console.log('hkdshkdfhnkdnknf',setIndustryRoute());
        navigate(`/${routeCal}`)
        console.log('dfndkndndk',item)
       
      } 
    
    return (
        <>
            <div key={id}  onClick={() => handleSetRoutes(item)} className='font-bold pt-4 pb-6 w-[350px] h-[320px] border border-1 border-solid z-0 flex flex-col  shadow-[#26292e] hover:shadow-black shadow-lg rounded-xl transition-all ease-in-out duration-300 sm:hover:-translate-y-1  max-w-sm mx-auto text-center  text-black text-xl  bg-white '>
                <div className='text-2xl   px-4 py-4 rounded-xl'>
                    <h3>{text}</h3>
                </div>
                <div className='rounded-xl  h-[220px] object-cover overflow-hidden '>
                    <img className='rounded-xl object-cover mx-auto border  h-[200px]' width={240} src={src} alt='img1' />
                </div>
            </div>
        </>
    )
}

export default Box