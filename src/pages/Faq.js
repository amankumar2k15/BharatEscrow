import React from 'react'
import faq from "../assets/Faqs/faq.jpg"
import { RiAccountCircleLine } from "react-icons/ri"
import { MdOutlineApi } from "react-icons/md"
import { BsFillFileEarmarkPostFill } from "react-icons/bs"
import { AiFillEye, AiOutlineTransaction } from "react-icons/ai"
import { MdOutlineSecurity } from "react-icons/md"
import buySell from "../assets/Faqs/buySell.jpg"
import fees from "../assets/Faqs/fees.jpg"
import paymentImg from "../assets/Faqs/payment.jpg"
import Footer from '../components/Footer'
import { AiOutlineProfile } from "react-icons/ai";
import { ImProfile } from "react-icons/im";


const FAQItem = ({ question, answer }) => (
    <div className='mt-8 justify-center flex flex-col'>
        <div className='flex  items-center'>
            <details >
                <summary className='text-lg font-semibold  md:text-2xl text-gray-700'>{question} </summary>
                <div className='text-gray-500'>{answer}</div>
            </details>
        </div>
    </div>
);

const worksItems = [
    {
        iconHeading: "Agree",
        icon: <AiOutlineProfile size={40} />,
        mainHeading: "Offline and Online", subHeading: "Parties AGREE to the terms",
        para: "Buyer, seller and agent, if present, agree to the terms of the transaction.",
        iconImg: <ImProfile size={40} />,
        iconImgHeading: "SETUP ESCROW ONLINE"
    },
    {
        iconHeading: "Agree",
        icon: <AiOutlineProfile size={40} />,
        mainHeading: "MULTI PARTY ESCROW", subHeading: "Money SECURED in Trust account ",
        para: "Verified buyers commits to a transaction by paying money into a secure escrow account",
        iconImg: <ImProfile size={40} />,
        iconImgHeading: "SIGN AGREEMENT DIGITALLY"
    },
    {
        iconHeading: "Agree",
        icon: <AiOutlineProfile size={40} />,
        mainHeading: "CONFIRMATION", subHeading: "Parties confirm on delivery",
        para: "Verified seller arranges delivery of the products or services, as agreed with all the parties.",
        iconImg: <ImProfile size={40} />,
        iconImgHeading: "CHECK YOUR GOODS"
    },
    {
        iconHeading: "Agree",
        icon: <AiOutlineProfile size={40} />,
        mainHeading: "Offline and Online", subHeading: "WHEN APPROVED",
        para: "Escrow releases money to the seller and/or agent once approved by the buyer",
        iconImg: <ImProfile size={40} />,
        iconImgHeading: "OR THE INSPECTION TIME PASSES"
    }
]

const FAQQuestions = [
    {
        id: 0,
        question: "3. How long does the escrow process take?",
        answer: "The duration varies based on the complexity of the transaction and how quickly the agreed-upon conditions are met. BharatEscrow provides timely updates throughout the process.",
        img: buySell
    },
    {
        id: 1,
        question: "4. Can I use BharatEscrow for international transactions?",
        answer: "Yes, BharatEscrow supports both domestic and international transactions, offering a seamless and secure experience globally.",
        img: null
    },
    {
        id: 2,
        question: "5. What happens if there is a dispute during the transaction?",
        answer: " BharatEscrow provides a dispute resolution mechanism. The platform carefully investigates and mediates disputes to ensure fair outcomes.",
        img: fees
    },
    {
        id: 3,
        question: "6. Are there any hidden fees associated with using BharatEscrow?",
        answer: " BharatEscrow is transparent about its fee structure, and there are no hidden fees. Users are informed of any applicable charges upfront.",
        img: paymentImg
    }
]

const EscrowAdvantage = [
    {
        id: 0,
        icon: <RiAccountCircleLine className='text-blue-600' size={50} />,
        advantage: " Open digital escrow account within minutes"

    },
    {
        id: 1,
        icon: <MdOutlineApi className='text-blue-600' size={50} />,
        advantage: "Freedom of choice-APIs or white labelled dashboards"

    },
    {
        id: 2,
        icon: <BsFillFileEarmarkPostFill className='text-blue-600' size={50} />,
        advantage: "Easily accessible digital contracts"

    },
    {
        id: 3,
        icon: <AiFillEye className='text-blue-600' size={50} />,
        advantage: " Cut the unpredictability and unwanted surprises"

    },
    {
        id: 4,
        icon: <MdOutlineSecurity className='text-blue-600' size={50} />,
        advantage: "Add the extra layer of trust and transparency"

    },
    {
        id: 5,
        icon: <AiOutlineTransaction className='text-blue-600' size={50} />,
        advantage: "  Customised to your transaction flows"

    }
]


const Faq = () => {

    return (
        <section className='faq'>
            <div className='flex flex-col gap-4'>

                <div className=' mt-24 flex items-end flex-col gap-4 px-4 '>
                    <h1 className='mt-14 w-full  text-blue-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center  font-roboto'>
                        Frequently Asked Questions
                    </h1>
                    <div className='flex flex-col sm:flex-row gap-8 mx-auto'>
                        <div className='flex-1 flex justify-center flex-col space-y-8 px-4 md:px-20 lg:px-32 xl:px-40 '>
                            <FAQItem
                                question="What does “escrow” mean?"
                                answer="An escrow is a financial and legal agreement designed to protect Buyers and Sellers in a transaction. For a fee, an independent third party holds payment until everyone fulfills their responsibilities in the transaction."
                            />
                            <FAQItem
                                question="What can you buy or sell with BharatEscrow.com?"
                                answer="Escrow.com can help you safely buy or sell a variety of goods and services online for example buying or selling cars, watches, domains, refrigerators, ac etc."
                            />
                            <FAQItem
                                question="BharatEscrow.com pays the Seller?"
                                answer="If the merchandise is accepted, BharatEscrow.com releases funds to the Seller from the Escrow Account."
                            />
                        </div>
                        <div className='w-[300px] sm:w-[300px] md:w-[400px]'>
                            <img className='w-full object-cover' src={faq} alt='faqImage' />
                        </div>
                    </div>

                </div>


                {/* Services Section  */}
                {/* first  */}
                <div className='flex flex-col px-4 py-10 w-full rounded-none  sm:rounded-t-[200px]'>

                    <div className='flex flex-col sm:flex-wrap '>
                        <h1 className='text-blue-900 font-bold text-xl sm:text-[30px] text-center font-roboto '>
                            FAQ - Escrow Services by <div>BharatEscrow.com</div>
                        </h1>
                        <div className='my-12 flex flex-col gap-10 justify-center items-center'>
                            <div className=' sm:w-9/12 '>
                                <h2 className='text-xl sm:text-2xl text-black'>
                                    1. How secure is the BharatEscrow platform?
                                </h2>
                                <p className='mt-5 text-md text-slate-800'>
                                    BharatEscrow prioritizes security, leveraging advanced encryption and collaborating with RBI-regulated banking partners to ensure a highly secure platform.
                                </p>
                            </div>

                            <div className='flex w-full justify-center mt-2 flex-col gap-10 items-center'>
                                <h2 className='text-xl text-blue-900 font-semibold sm:text-[26px] text-center'>
                                    Escrow Advantage
                                </h2>

                                <div className=' flex max-w-4xl justify-center gap-12 flex-wrap '>
                                    {
                                        EscrowAdvantage.map((item) => {
                                            return (
                                                <div key={item.id} className='w-56 sm:w-64 h-56 shadow-[#9aa2af]  hover:shadow-blue-600 shadow-xl black rounded-xl transition-all ease-in-out duration-300 sm:hover:-translate-y-1  max-w-sm  text-center  text-black text-xl flex flex-col justify-center items-center gap-4'>
                                                    <div className='flex flex-col gap-4'>
                                                        <div className=' h-full flex flex-col justify-center items-center'>
                                                            <div className='relative border-4 border-blue-600 pt-4 rounded-full w-28 h-28 realtive'>
                                                                <p className='absolute top-7 left-7'>
                                                                    {item.icon}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <h2 className='text-center text-lg px-2 text-black '>
                                                            {item.advantage}
                                                        </h2>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* second  */}
                <div className='flex flex-col w-full px-4 bg-white  '>
                    <div className='mt-5 flex flex-col gap-10 justify-center items-center '>
                        <div className='sm:w-9/12'>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                2. What types of transactions are suitable for escrow services?
                            </h2>
                            <p className=' mt-4 text-md text-slate-800'>
                                Escrow services are suitable for various transactions, including online purchases, real estate transactions, freelance services, and business acquisitions.
                            </p>
                        </div>


                        <div className='flex w-full justify-center flex-col my-4 gap-10 items-center'>
                            <div className=' flex max-w-4xl justify-center gap-12 flex-wrap '>
                                <div className='w-[300px] text-center'>
                                    <h3 className='text-xl uppercase font-medium'>How it works</h3>
                                    <h2 className='text-3xl font-bold '>4 Easy Steps</h2>
                                </div>
                            </div>

                            <div className='flex justify-around flex-wrap gap-4'>

                                {/* //how it works  4 easy steps  */}
                                {worksItems.map((item, index) => {
                                    return (
                                        <div key={index} className='w-[230px] flex-shrink-0 border-2 h-[400px] border-black hover:border-blue-600 rounded-lg  px-1'>
                                            <div className='flex flex-col justify-center gap-y-3 items-center'>
                                                <h3 className='text-blue-900 font-bold text-[12px] mt-2'>{item.iconHeading}</h3>
                                                <div>
                                                    {item.icon}
                                                </div>
                                                <p className='uppercase font-semibold text-[12px]'>{item.mainHeading}</p>
                                            </div>
                                            <p className='text-sm w-full text-center my-6 font-medium'>{item.subHeading}</p>
                                            <p className='text-sm w-full text-center my-6 px-2 font-medium'>{item.para}</p>
                                            <div className='mt-6 mb-2 w-full flex justify-center items-center '>
                                                {item.iconImg}
                                            </div>
                                            <p className='text-md w-full text-center mt-6 mb-0 uppercase font-semibold'>{item.iconImgHeading}</p>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>

                    </div>
                </div>



                <div className='flex flex-col w-full px-4 bg-white  '>
                    <div className='py-4 flex flex-col gap-10 justify-center items-center '>


                        <button className="bg-blue-500 width-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-[#26292e] hover:shadow-blue-600 shadow-lg  transition-all ease-in-out duration-300 hover:translate-y-3">
                            REGISTER NOW
                        </button>


                    </div>
                </div>

                {
                    FAQQuestions.map((item) => {
                        return (
                            <div className='flex flex-col w-full px-4 bg-white' key={item.id}>
                                <div className='pt-14 flex flex-col gap-10 justify-center items-center '>
                                    <div className=' sm:w-9/12   '>
                                        <h2 className='text-xl sm:text-2xl text-black'>
                                            {item.question}
                                        </h2>
                                        <p className=' mt-4 text-md text-slate-800'>
                                            {item.answer}
                                        </p>
                                    </div>
                                    <div className='flex w-full justify-center flex-col gap-10 items-center'>
                                        {
                                            item?.img != null && <div className=' flex max-w-4xl justify-center gap-12 flex-wrap '>
                                                <img className='sm:max-w-xl h-60' src={item?.img} alt={item.question} />
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <p className='text-xl sm:text-lg text-black w-8/12 px-4 bg-green-100 rounded-lg -pt-4 p-6 mb-16 mx-auto container'>
                    "In a world where financial transparency is non-negotiable, BharatEscrow stands as a reliable partner, offering a secure and efficient platform for escrow services. By following this step-by-step guide, users can navigate the escrow process seamlessly, fostering trust and confidence in their financial transactions."
                </p>
            </div>

            <Footer />
        </section>
    )
}

export default Faq;
