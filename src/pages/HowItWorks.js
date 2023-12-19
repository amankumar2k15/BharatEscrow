import React from 'react';
import loginSignup from "../assets/howitworks/LoginSignUp.jpg";
import CertifyingBuyer from "../assets/howitworks/CertifyingBuyer.jpg";
import MultiplePayment from "../assets/howitworks/MultiplePaymentMethods.jpg"
import Security from "../assets/howitworks/Security.jpg"
import Services from "../assets/howitworks/Services.jpg"
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const sections = [
    {
        id: 0,
        title: "Registration with BharatEscrow",
        content: "Begin by registering on the BharatEscrow platform. Users can easily create an account, providing necessary details for identity verification. This initial step establishes the foundation for secure and transparent financial transactions. We generally ask for the basic KYC and KYB documents from each clients to completed the verfication process.",
        image: loginSignup,
        reversed: false
    },
    {
        id: 1,
        title: "Agreement Initiation",
        content: "Once registered, initiate an agreement on the BharatEscrow platform. Clearly outline the terms and conditions of the transaction, including payment details, milestones, and delivery expectations. This agreement serves as the blueprint for the entire escrow process wherein each information from beginning of the project to completeion of the project.",
        image: CertifyingBuyer,
        reversed: true
    },
    {
        id: 2,
        title: "Fund Transfer to Escrow Account",
        content: "Upon agreement finalization, the buyer transfers the agreed-upon funds to the RBI-regulated escrow account facilitated by BharatEscrow. This step ensures that the funds are securely held in escrow until all conditions are met, instilling confidence in both parties. There would be few instances where the settlement would be based on the milestone and such case will be only occured in freelanceing projects done either by freelancer or a small firms.",
        image: MultiplePayment,
        reversed: false
    },
    {
        id: 3,
        title: "Verification and Approval",
        content: "BharatEscrow, in collaboration with its banking partners, conducts thorough verification processes. This includes confirming the authenticity of the funds transferred and validating the compliance of the transaction with regulatory standards. Once verified, the funds are approved for release upon fulfillment of the agreed conditions. we need to make sure that the funds are transferred through a designated account.",
        image: Security,
        reversed: true
    },
    {
        id: 4,
        title: "Milestone Tracking and Updates",
        content: "Throughout the transaction, BharatEscrow provides a transparent milestone tracking system. Regular updates are communicated to both the buyer and seller, ensuring everyone is informed about the progress and any necessary actions required to move the transaction forward. This sort of payment will only occurs where a firm/freelancers are developing a project for a sepicifc needs .",
        image: Services,
        reversed: false
    },
    {
        id: 5,
        title: "Conditional Release of Funds",
        content: "Upon successful completion of the agreed-upon conditions, the funds held in escrow are released to the seller. This step ensures that both parties adhere to their commitments, creating a secure and fair transaction environment.",
        image: MultiplePayment,
        reversed: true
    },

];

const Section = ({ title, id, content, image, reversed }) => {
    return (
        <div className={`flex flex-col justify-center items-center ${reversed ? "sm:flex-row-reverse" : "sm:flex-row"} px-6 sm:flex-wrap md:flex-nowrap gap-y-4 sm:justify-evenly`}>
            <div className='flex flex-col justify-center gap-4 mb-8 w-11/12  md:w-[500px] mx-2 md:px-6'>
                <h2 className='text-lg inline-flex font-semibold sm:text-xl md:text-2xl whitespace-nowrap text-blue-900'>
                    <div className='no-underline '>{`Step ${id + 1}: `}</div>
                    &nbsp;{title}
                </h2>
                <h3 className='text-md text-justify  text-slate-800'>{content}</h3>
            </div>
            <div className='sm:w-[400px] md:w-[450px] h-[250px] md:h-[400px] px-5 sm:px-0'>
                <img className='object-cover sm:w-[400px] md:w-[450px] h-[250px] md:h-[400px]' src={image} alt={title} />
            </div>
        </div>
    )
};

const HowItWorks = () => (
    <section className='howItWork'>
        <div className='max-w-5xl mt-[104px] flex flex-col mx-auto text-black md:px-3 '>
            <div className='mt-14 mb-4'>
                <h1 className=' text-blue-900 font-bold text-2xl  sm:text-3xl md:text-4xl lg:text-5xl text-center font-roboto'>How does BharatEscrow work?</h1>
            </div>

            <div className='px-10 py-8'>
                <h2 className='text-lg font-semibold sm:text-xl md:text-2xl underline text-blue-900'>What is an Escrow Account?</h2>
                <p className=' mt-2 text-md  text-justify text-slate-800'>It is an intermittent account that is only active till the transaction is completed. The account is closed once all of the criteria between the buyer and seller have been met. Escrows often involve the deposit of a monetary-valued document. These documents could be deeds, written instruments, payment pledges, licenses, patents, cheques, bonds, or mortgages.</p>
            </div>

            <div className='px-10 py-4'>
                <h2 className='text-lg font-semibold sm:text-xl md:text-2xl underline text-blue-900'>Details about Escrow Account?</h2>
                <p className=' mt-2 text-md  text-justify text-slate-800'>In an era where financial transparency is paramount, the use of escrow accounts has become a cornerstone for secure transactions. BharatEscrow, in collaboration with multiple RBI-regulated banking partners, is at the forefront of delivering unparalleled financial transparency between buyers and sellers. This comprehensive guide outlines the step-by-step process of utilizing an escrow account with BharatEscrow, aligning with the vision of providing financial transparency to everyone.</p>
            </div>


            {/* sections mapping data  */}
            {sections.map((section, index) => <Section key={index} {...section} />)}
        </div>
        <GetInTouch />
        <Footer />

    </section>

);

export default HowItWorks;


