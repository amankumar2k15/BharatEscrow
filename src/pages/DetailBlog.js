import React from 'react'
import Footer from '../components/Footer'
import { CgProfile } from "react-icons/cg";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbBrandFacebook } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { RiSkypeLine } from "react-icons/ri";
import detailblogImg from "../assets/blog/detailBlog.jpg"

const DetailBlog = ({ data }) => {

  const socialIcon = [
    { icon: <TbBrandFacebook /> },
    { icon: <RiTwitterXFill /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaWhatsapp /> },
    { icon: <PiTelegramLogoBold /> },
    { icon: <RiSkypeLine /> },
  ]

  const localStorageData = JSON.parse(localStorage.getItem("detailItem"))
  const detailItem = data.data == null ? { data: localStorageData } : data

  return (
    <section>
      <div className='mb-10 pb-12 flex flex-col justify-center items-center mt-32 border '>

        <div className='font-bold text-3xl mb-12 sm:text-4xl md:text-5xl mt-4 w-full text-center text-blue-900'>
          {detailItem?.data.title}
        </div>

        {/* <div className="grid grid-cols-1 gap-4 w-full h-full">

          <div key={detailItem?.data.id} className="bg-white container mx-auto p-4 shadow-md rounded-md max-w-[1000px]">

            <div className='flex justify-center mb-10'>
              <img
                src={detailItem?.data.img}
                alt={detailItem?.data.title}
                className="w-[400px] h-[300px] object-cover rounded-md mb-4"
              />
            </div>
            <h2 className='text-xl font-bold mb-4'>Important bits</h2>
            <ul className="list-disc pl-4 gap-y-3 text-lg text-slate-700 flex flex-col">
              {detailItem?.data.bulletPoints?.map((point, index) => (
                <li className='font-thin' key={index}>{point.data}</li>
              ))}
            </ul>

            <h2 className="text-xl mt-7 mb-4 font-bold ">{detailItem?.data.title}</h2>
            <p className="text-slate-700 mb-4 text-lg">{detailItem?.data.description}</p>
          </div>
        </div> */}

        {/* pulished */}
        <div className='container mx-auto max-w-4xl ' >
          <div className='flex gap-2 items-center mb-4'>
            <div>
              <CgProfile size={30} className='text-gray-600' />
            </div>
            <div className='flex flex-col'>
              <div className='inline-flex text-[12px]'>
                <div className='text-gray-500 '>Pulished On -</div> <div className='text-gray-500'>December 7, 2023</div>
              </div>
              <div className='inline-flex text-[12px]'>
                <div className='text-gray-500 '>Bharat Escrow -</div> <div className='text-gray-500'>Bharat Escrow Gateway</div>
              </div>
            </div>
          </div>

          {/* img  */}
          <div className='w-[700px] h-[400px] relative flex items-center justify-center'>
            <img src={detailblogImg} alt='imggDetailBlog' className='w-[700px] h-[400px]' />
            <p className='text-center text-4xl absolute text-white'>
              Tailwind Nextjs Starter Blog
            </p>
          </div>

          <div className=' mt-4 '>
            <div className='font-bold'>
              Share and Enjoy!
            </div>

            <div className='flex'>
              <button className='mr-2'>
                <IoShareSocialOutline />
                <div className=' text-[8px] uppercase'>Shares</div>
              </button>

              <div className='flex'>
                {socialIcon.map((item, index) => {
                  return (
                    <button key={index} className='w-[80px] h-[25px] bg-blue-600 flex justify-center items-center text-white'>
                      {item.icon}
                    </button>
                  )
                })}
              </div>

            </div>

          </div>


        </div>

      </div>


      <div>


      </div>

      <Footer />
    </section >


  )
}

export default DetailBlog