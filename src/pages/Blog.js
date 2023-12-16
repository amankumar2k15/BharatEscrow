import React from 'react'
import Footer from '../components/Footer'
import blogImg from "../assets/blog/download.jpg"

const Blog = () => {
  return (
    <>
      <section className='buySell border-y-2 border-white w-full'>
        <div className=' flex mt-40 md:pb-[30px] font-roboto flex-col gap-5 px-2 ' >
          <div className='font-bold text-3xl sm:text-4xl md:text-5xl mt-8 w-full text-center text-blue-900'>
            Blog
          </div>
        </div>
        <div className=' px-4 md:px-6 w-full py-10'>
          <div className=' flex flex-row flex-wrap justify-center gap-12'>

            <div className='bg-[#a3c7de] rounded-lg shadow-lg shadow-black hover:-translate-y-1 transition-all duration-300 ease-in-out text-black h-[430px] md:h-[450px] max-w-[330px] px-4 flex flex-col gap-y-4'>
              <h2 className='text-md mt-5 text-blue-900 font-bold'>No ChargeBack vs Traditional Payment Processors</h2>
              <div className='md:h-[200px] max-w-[345px]' >
                <img className='md:h-[200px] w-[345px] object-cover' src={blogImg} alt='blogImg' />
              </div>
              <p className='text-md mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam itaque repudiandae quia officia similique, libero saepe fugiat.</p>
              <button className='text-right text-blue-900 hover:text-black '>Read more...</button>
            </div>

            <div className='bg-[#a3c7de] rounded-lg shadow-lg shadow-black hover:-translate-y-1 transition-all duration-300 ease-in-out text-black h-[430px] md:h-[450px] max-w-[330px] px-4 flex flex-col gap-y-4'>
              <h2 className='text-md mt-5 text-blue-900 font-bold'>No ChargeBack vs Traditional Payment Processors</h2>
              <div className='md:h-[200px] max-w-[345px]' >
                <img className='md:h-[200px] w-[345px] object-cover' src={blogImg} alt='blogImg' />
              </div>
              <p className='text-md mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam itaque repudiandae quia officia similique, libero saepe fugiat.</p>
              <button className='text-right text-blue-900 hover:text-black '>Read more...</button>
            </div>

            <div className='bg-[#a3c7de] rounded-lg shadow-lg shadow-black hover:-translate-y-1 transition-all duration-300 ease-in-out text-black h-[430px] md:h-[450px] max-w-[330px] px-4 flex flex-col gap-y-4'>
              <h2 className='text-md mt-5 text-blue-900 font-bold'>No ChargeBack vs Traditional Payment Processors</h2>
              <div className='md:h-[200px] max-w-[345px]' >
                <img className='md:h-[200px] w-[345px] object-cover' src={blogImg} alt='blogImg' />
              </div>
              <p className='text-md mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam itaque repudiandae quia officia similique, libero saepe fugiat.</p>
              <button className='text-right text-blue-900 hover:text-black '>Read more...</button>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog