import React from 'react'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
      <section className='buySell border-y-2 border-white'>
        <div className=' flex pt-28 pb-[83px] bg-gradient-to-r row from-[#fff] to-[#096aa6]  font-roboto flex-col gap-5 px-2 ' >
          <div className='font-bold text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-blue-900'>
            BLOG
          </div>
        </div>
        <div className='px-6'>
          <div className='bg-red-400 h-[400px] w-[400px]'>
            <h2>No ChargeBack vs Traditional Payment Processors</h2>
            <div>
              <img />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog