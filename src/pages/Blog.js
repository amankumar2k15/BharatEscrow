import React from 'react'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
    <section >
        <div className='flex flex-col sm:flex-row'>
            <div className='relative  md:block'>
                {/* <img src={contactImg} alt='contactImg1' /> */}
                <p className='uppercase absolute left-20 bottom-16 text-xl sm:text-2xl md:text-5xl'>Contact us</p>
            </div>
        </div>
        <div className='' style={{height:"100vh"}}>

        </div>

    </section>
    <Footer />
</>
  )
}

export default Blog