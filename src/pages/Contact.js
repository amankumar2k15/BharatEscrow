import React from 'react'
import ContactForm from '../components/Form'
import Footer from '../components/Footer'


const Contact = () => {
    const srcImg = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.41691420396!2d77.07023956511695!3d28.58509706500311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3c51c4211b%3A0xb63fd88ed824d67b!2sDaani%20Plaza!5e0!3m2!1sen!2sin!4v1703165885343!5m2!1sen!2sin"

    return (
        <>
            <section >
                <div className=' mb-10 mx-auto py-5 flex  flex-col justify-center items-center mt-32'>

                    <h1 className='mt-10 shadingEffect text-blue-900 sm:mt-0 hoverEffect text-3xl sm:text-4xl md:text-5xl mb-10 text-center font-bold'>
                        Contact Us
                    </h1>

                    <div className='py-5 flex flex-col sm:flex-row justify-center gap-24 w-full sm:flex-wrap items-center'>

                        <iframe
                            title='map'
                            src={srcImg}
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className=' h-[300px] w-full px-4 md:w-[600px]'
                        />


                        <div className='w-full sm:w-[400px] px-4 sm:px-0 h-[250px] gap-5'>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>

    )
}

export default Contact