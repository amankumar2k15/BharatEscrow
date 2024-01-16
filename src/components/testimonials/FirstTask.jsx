import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonials = () => {
    const msg =  [
        
          " I am thrilled to write a testimonial for Castler, a company that has truly transformed the way we handle digital payments and escrow agreements. Thanks to Castler, making digital payments has become incredibly easy and convenient for us. Their platform is intuitive, user-friendly, and secure, making it an ideal choice for anyone looking for a hassle-free payment experience. And I also liked the features like, Unified Dashboard, Multi-Bank Option, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective, Help you Save Time, Money & Effort."
        
       
        
           , "And I also liked the features like, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective"
        
       , "Castler's team of skilled professionals quickly understands the latest digital strategies, enabling us with tailored solutions to our unique needs. Their team was always available to answer any questions or concerns. And I also liked the features like, Unified Dashboard, Modular Product, Fully Customizable, Any Industry Any Use-Case, Team Responsiveness, End-to-End Support, Efficient & Effective."
    
          , "I am thrilled to write a testimonial for Castler, a company that has truly transformed the way we handle digital payments and escrow agreements. Thanks to Castler, making digital payments has become incredibly easy and convenient for us. Their platform is intuitive, user-friendly, and secure, making it an ideal choice for anyone looking for a hassle-free payment experience. And I also liked the features like, Unified Dashboard, Multi-Bank Option, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective, Help you Save Time, Money & Effort."
       
        
            ,"And I also liked the features like, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective."
      
      
         ,  "And I also liked the features like, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective"
       
        , "Castler's team of skilled professionals quickly understands the latest digital strategies, enabling us with tailored solutions to our unique needs. Their team was always available to answer any questions or concerns. And I also liked the features like, Unified Dashboard, Modular Product, Fully Customizable, Any Industry Any Use-Case, Team Responsiveness, End-to-End Support, Efficient & Effective."
        
       ,  "I am thrilled to write a testimonial for Castler, a company that has truly transformed the way we handle digital payments and escrow agreements. Thanks to Castler, making digital payments has become incredibly easy and convenient for us. Their platform is intuitive, user-friendly, and secure, making it an ideal choice for anyone looking for a hassle-free payment experience. And I also liked the features like, Unified Dashboard, Multi-Bank Option, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective, Help you Save Time, Money & Effort."
        
        , "And I also liked the features like, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective."
      
       
         , "And I also liked the features like, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective"
       
     , "Castler's team of skilled professionals quickly understands the latest digital strategies, enabling us with tailored solutions to our unique needs. Their team was always available to answer any questions or concerns. And I also liked the features like, Unified Dashboard, Modular Product, Fully Customizable, Any Industry Any Use-Case, Team Responsiveness, End-to-End Support, Efficient & Effective."
       
         , "I am thrilled to write a testimonial for Castler, a company that has truly transformed the way we handle digital payments and escrow agreements. Thanks to Castler, making digital payments has become incredibly easy and convenient for us. Their platform is intuitive, user-friendly, and secure, making it an ideal choice for anyone looking for a hassle-free payment experience. And I also liked the features like, Unified Dashboard, Multi-Bank Option, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective, Help you Save Time, Money & Effort."
       
       
           ,"And I also liked the features like, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective."
        
       
           , "And I also liked the features like, 100% Security through Escrow Agreement, Modular Product, Fully Customizable, Any Industry Any Use-Case, Standardized Pricing, Team Responsiveness, End-to-End Support, Efficient & Effective"
       
          , "Castler's team of skilled professionals quickly understands the latest digital strategies, enabling us with tailored solutions to our unique needs. Their team was always available to answer any questions or concerns. And I also liked the features like, Unified Dashboard, Modular Product, Fully Customizable, Any Industry Any Use-Case, Team Responsiveness, End-to-End Support, Efficient & Effective."
       
    ] 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  
        slidesToScroll: 1
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className='text-2xl font-bold text-center mb-[30px]'>Testimonials</h1>
            <Slider {...settings}>
                {msg.map((item,index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg min-h-96">
                            <svg
                                className="w-10 h-10 me-auto mb-3 text-green-500 dark:text-green-500 rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p className='text-gray-400 text-[12px]'>{item}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;