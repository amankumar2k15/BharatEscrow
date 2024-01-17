import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
// import Box from '../components/Box'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Ecommerce from '../assets/Home/Ecommerce.jpeg'
import MMSE from '../assets/Home/MSME.jpeg'
const industryDEtail = [
    {
        id: 0,
        route: "ECOMMERCE",
        image: Ecommerce,
        title: "Transforming eCommerce Transactions:The Role of Digital Escrow in India",
        shortdesc: " The eCommerce landscape in India has witnessed unprecedented growth, with more businesses transitioning to online platforms to reach a wider customer base. However, amidst the flourishing opportunities, the sector grapples with significant challenges, notably in terms of payment security. BharatEscrow.com addresses this concern by introducing an intuitive dashboard, streamlining transactions and providing a solution to the vital question of why an eCommerce business needs a digital escrow account.",
        key1: "Payment Security Challenges in Indian eCommerce: ",
        key1desc: "Payment security remains a major concern for eCommerce businesses in India, primarily due to the prevalence of Cash on Delivery (COD) transactions. This poses risks such as fraudulent orders, delayed payments, and potential disputes, hindering the growth potential of online merchants.",
        key2: "BharatEscrow.com's Solution: ",
        key2desc: "BharatEscrow.com's intuitive dashboard revolutionizes the payment security landscape for eCommerce merchants. By offering a centralized platform for all transactions, the dashboard provides real-time insights, ensuring transparency and control over financial dealings.",
        key3: "The Need for a Digital Escrow Account in eCommerce:",
        key3desc: "One of the pivotal questions that arise is why an eCommerce business needs a digital escrow account. BharatEscrow.com addresses this by developing a system that allows merchants to break the barriers of Cash on Delivery. By utilizing our digital platform, eCommerce merchants can request payments securely, significantly enhancing their monthly revenue streams.",
        point: [{
            id: 1,
            key: "Onboarding Process for eCommerce Merchants: ",
            process: [{
                id: 1,
                key: "Engagement:",
                value: "eCommerce merchants initiate the onboarding process by expressing interest, leading to collaborative engagement with the Bharat Escrow team."
            },
            {
                id: 2,
                key: "Agreement:",
                value: "Clear terms are established through agreements, defining the scope of services and the terms of engagement."
            },
            {
                id: 3,
                key: "Fund Transfer:",
                value: "Secure fund transfers are facilitated through BharatEscrow.com's escrow services."
            },
            {
                id: 4,
                key: "Verification and Compliance: ",
                value: "Each transaction undergoes a thorough verification and compliance process to ensure adherence to legal and regulatory standards."
            },
            {
                id: 5,
                key: "Release of Funds or Assets:",
                value: "Upon successful completion, funds or assets are released, marking the conclusion of the transaction."
            },
            ]
        }

        ],

        faqs: [{
            id: 1,
            doubt: "Why is payment security a critical concern for eCommerce businesses in India?",
            solution: "Payment security is crucial to mitigate risks associated with COD transactions, ensuring a safe and transparent payment environment."

        },
        {
            id: 2,
            doubt: "How does BharatEscrow.com's dashboard enhance transaction transparency for eCommerce merchants?",
            solution: "The intuitive dashboard provides real-time insights, offering transparency and control over financial transactions."

        },
        {
            id: 3,
            doubt: "What advantages does breaking the COD barrier bring to eCommerce merchants?",
            solution: "Breaking the COD barrier allows merchants to request payments via the digital platform, fostering increased monthly revenue."

        },
        {
            id: 4,
            doubt: "How does BharatEscrow.com's onboarding process benefit eCommerce merchants?",
            solution: "The structured onboarding process ensures secure transactions, providing a reliable and efficient platform for eCommerce merchants. "
        },
        {
            id: 5,
            doubt: "Can eCommerce merchants customize their escrow accounts based on their specific needs?",
            solution: "Yes, BharatEscrow.com's platform is flexible, allowing eCommerce merchants to tailor their escrow accounts to meet unique requirements."
        },
        {
            id: 6,
            doubt: "How does BharatEscrow.com address the challenges of delayed payments in eCommerce transactions?",
            solution: "Through its escrow services, BharatEscrow.com ensures timely and secure fund transfers, minimizing the risk of delayed payments."
        },
        {
            id: 7,
            doubt: "What measures does BharatEscrow.com take to ensure regulatory compliance in eCommerce transactions?",
            solution: "BharatEscrow.com incorporates thorough verification and compliance processes in each transaction to adhere to legal and regulatory standards."
        },
        {
            id: 8,
            doubt: "BharatEscrow.com incorporates thorough verification and compliance processes in each transaction to adhere to legal and regulatory standards.",
            solution: "By engaging with BharatEscrow.com, merchants can seamlessly transition from COD, request payments via the digital platform, and boost their monthly revenue. "
        },
        ],
        conclusion: "In conclusion, BharatEscrow.com emerges as a transformative force in the Indian eCommerce sector, offering a secure and efficient solution to the payment security challenges faced by online merchants. The digital escrow platform, coupled with an intuitive dashboard, not only ensures transaction transparency but also empowers eCommerce businesses to unlock new revenue streams by breaking free from the limitations of Cash on Delivery."
    },
    {
        id: 1,
        route: "MSME",
        image: MMSE,
        title: "Empowering MSMEs in India: Streamlining Financial Transactions with BharatEscrow's Digital Solutions",
        key1: "In the dynamic landscape of the Indian MSME sector, efficient financial transactions are the lifeblood of growth and sustainability. At BharatEscrow, we recognize the unique challenges faced by Micro, Small, and Medium Enterprises (MSMEs) and have tailored our in-house digital escrow solution to cater specifically to their needs. In this article, we delve into how BharatEscrow's platform facilitates key financial processes for MSMEs, including IPO and public issues, rights issues and follow-on public offerings, open offers and takeovers, and buybacks.",
        key2: "Let's delve deeper into the concepts of IPO, public issue, rights issue, follow-on public offering, open offer, takeover, and buybacks. ",
        point: [{
            id: 1,
            key: " 1. IPO (Initial Public Offering) and Public Issues: ",
            process: [{
                id: 1,
                key: "Engagement:",
                value: "An IPO marks the transition of a privately held company to a public one. It involves engaging with financial institutions, underwriters, and regulatory bodies to prepare for the issuance of shares to the public.",
            },
            {
                id: 2,
                key: "Agreement: ",
                value: "During the IPO, agreements are made between the company and underwriters, detailing the terms of the offering, including the number of shares, pricing, and other essential conditions.",
            },
            {
                id: 3,
                key: "Fund Transfer:",
                value: "Investors transfer funds to the company in exchange for newly issued shares, contributing to the capital raised through the public offering.",
            },
            {
                id: 4,
                key: "Verification and Compliance:",
                value: "Rigorous verification and compliance processes are undertaken to ensure adherence to regulatory requirements and to build investor confidence.",
            },
            {
                id: 5,
                key: "Release of Funds and Assets:",
                value: "Upon successful completion of the IPO, funds are released to the company, and shares are distributed to investors."
            },

            ],
        },
        {
            id: 2,
            key: "2. Rights Issue and Follow-On Public Offering:",
            process: [{
                id: 1,
                key: "Engagement: ",
                value: "Rights issues involve engaging with existing shareholders to offer them the opportunity to purchase additional shares. Follow-on public offerings extend the opportunity to new and existing investors.",
            },
            {
                id: 2,
                key: "Agreement:",
                value: "Agreements are established to outline the terms and conditions of the rights issue or follow-on public offering, including the pricing and allocation of shares."
            },

            {
                id: 3,
                key: "Fund Transfer: ",
                value: "Funds are transferred by shareholders or new investors to participate in the rights issue or follow-on public offering."
            },

            {
                id: 4,
                key: "Verification and Compliance:",
                value: "Robust verification and compliance processes are in place to ensure adherence to regulatory standards and to maintain the integrity of the offering."
            },

            {
                id: 5,
                key: "Release of Funds and Assets:",
                value: "Upon successful completion, funds are released as per the agreed terms, and additional shares are allocated to the participating investors."
            },


            ]
        },
        {
            id: 3,
            key: "3. Open Offers and Takeovers:",
            process: [{
                id: 1,
                key: "Engagement:",
                value: "Open offers and takeovers involve engaging with the target company's shareholders to acquire a significant stake or gain control of the company.",

            },
            {
                id: 2,
                key: "Agreement:",
                value: "Agreements are made between the acquiring company and the target company's shareholders, outlining the terms of the offer and the conditions for acquisition.",

            },
            {
                id: 3,
                key: "Fund Transfer:",
                value: "Funds are transferred to the target company's shareholders as per the acquisition agreement.",

            },

            {
                id: 4,
                key: "Verification and Compliance:",
                value: "Comprehensive verification and compliance processes are conducted to ensure adherence to legal and regulatory requirements.",

            },

            {
                id: 5,
                key: "Release of Funds and Assets:",
                value: "Upon successful completion, funds are released, and the acquiring company gains control or a significant stake in the target company.",

            },



            ]
        },
        {
            id: 4,
            key: "4. Buybacks:",
            process: [{
                id: 1,
                key: "Engagement:",
                value: "Buybacks involve a company repurchasing its own shares from existing shareholders.",

            },
            {
                id: 2,
                key: "Agreement:",
                value: "Agreements are established between the company and shareholders, detailing the terms of the buyback, including the price and quantity of shares to be repurchased.",

            },
            {
                id: 3,
                key: "Fund Transfer:",
                value: "Shareholders receive funds in exchange for selling their shares back to the company.",

            },

            {
                id: 4,
                key: "Verification and Compliance:",
                value: "Stringent verification and compliance processes are in place to ensure the legality and adherence to regulatory standards.",

            },

            {
                id: 5,
                key: "Release of Funds and Assets:",
                value: "Upon successful completion, funds are released, and the company acquires the repurchased shares.",

            },



            ]
        },
        {
            id: 5,
            key: "Process for Onboarding MSMEs:",
            process: [{
                id: 1,
                key: "Engagement:",
                value: "MSMEs can initiate the onboarding process by expressing interest through our platform, kickstarting a collaborative engagement with our team.",

            },
            {
                id: 2,
                key: "Agreement:",
                value: "Draft and finalize agreements outlining the scope of services and terms of engagement, establishing a clear framework for the partnership.",

            },
            {
                id: 3,
                key: "Fund Transfer:",
                value: "Securely transfer the onboarding fee, leveraging BharatEscrow's escrow services to ensure that funds are held securely until the onboarding process is initiated.",

            },

            {
                id: 4,
                key: "Verification and Compliance:",
                value: "MSMEs undergo a thorough verification and compliance process to ensure adherence to legal and regulatory requirements.",

            },

            {
                id: 5,
                key: "Release of Funds and Assets:",
                value: "Upon successful onboarding, funds are released to BharatEscrow, marking the official commencement of the partnership.",

            },
            ]
        },
        ],

        faq: [{
            id: 1,
            doubt: "1. How does BharatEscrow.com ensure the security of funds during financial transactions?",
            solution: "",
        },
        {
            id: 2,
            doubt: "",
            solution: "",
        },
        {
            id: 3,
            doubt: "",
            solution: "",
        },
        {
            id: 4,
            doubt: "",
            solution: "",
        },
        {
            id: 5,
            doubt: "",
            solution: "",
        },
        {
            id: 6,
            doubt: "",
            solution: "",
        },
        {
            id: 7,
            doubt: "",
            solution: "",
        },
        {
            id: 8,
            doubt: "",
            solution: "",
        },
    ],
    }
]

const IndustryDetail = ({ data }) => {
    console.log('checking data ', data);
    const location = useLocation()
    console.log('dknfdksurfncjd', location.pathname)
    const [displayData, setData] = useState();
    console.log("displayData", displayData)
    const [faqRow, setFaqRow] = useState({ index: null, isOpen: false })


    useEffect(() => {
        setData(industryDEtail.filter((item) => `/${item.route}`.replaceAll(' ', '-') === location.pathname)[0]);
    }, [data, location.pathname])

    return (
        <>
            <div className='mb-10 pb-12 flex flex-col justify-center items-center mt-3 bord'>
                <div className='shadingEffect mt-28 font-bold text-3xl sm:text-4xl md:text-5xl w-full sm:text-center text-blue-900'>
                    {displayData?.route}
                </div>
            </div>


            <div className='container mx-auto items-center flex justify-center flex-col px-4' >
                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-8 sm:mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className='sm:w-10/12'>
                            <h2 className='text-lg text-center font-medium sm:text-xl md:text-2xl text-blue-900'>
                                {displayData?.title}
                            </h2>
                            <p className='mt-5 text-md text-slate-800'>
                                {displayData?.shortDesc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:max-w-[700px] max-h-[400px]  flex items-center justify-center'>
                    <img src={displayData?.image} alt='imgg' className='md:max-w-[700px] max-h-[400px]' />
                </div>

                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-8 sm:mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-10/12 '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                {displayData?.key1}
                            </h2>
                            <p className='mt-5 text-md  text-slate-800'>
                                {displayData?.key1desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-8 sm:mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-10/12 '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                {displayData?.key2}
                            </h2>
                            <p className='mt-5 text-md  text-slate-800'>
                                {displayData?.key2desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-8 sm:mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-10/12 '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                {displayData?.key3}
                            </h2>
                            <p className='mt-5 text-md  text-slate-800'>
                                {displayData?.key3desc}
                            </p>

                        </div>
                    </div>
                </div>

                <div className='mt-8  flex flex-col  gap-0 '>
                    {displayData?.point?.map((item) => {
                        return (

                            <div className='mr-60' key={item.id}>
                                <p className='text-blue-900 font-bold text-2xl font-roboto underline'>{item?.key}</p>
                                <div className='mt-5 flex flex-col gap-2'>
                                    {console.log('204', displayData)}
                                    {item.process?.map((processItem) => {
                                        return (
                                            <div key={processItem.id} className='flex flex-col sm:flex-wrap '>
                                                <div className='mt-10 flex flex-col gap-10 justify-center items-center'>
                                                    <div className=' sm:w-10/12 '>
                                                        <h2 className='text-xl sm:text-2xl text-blue-900'>
                                                            {`${processItem?.id}. ${processItem?.key}`}
                                                        </h2>
                                                        <p className='mt-5 text-md  text-slate-800'>
                                                            {processItem?.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>


                        )
                    })}


                </div>


                <div className='mt-8'>
                    <p className='text-blue-900 mb-6 font-bold text-2xl font-roboto'>FAQ's</p>

                    {
                        displayData?.faqs?.map((item, index) => {
                            return (
                                <div id="accordion-collapse" key={index} data-accordion="collapse"
                                    onClick={() => setFaqRow({ index, isOpen: !faqRow.isOpen })}
                                >
                                    <h2 id="accordion-collapse-heading-1">
                                        <button
                                            type="button"
                                            className={`${index === 0 ? "rounded-t-xl border-b-0" : index === displayData.faqs.length - 1 && "rounded-b-xl"} flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3`}
                                            data-accordion-target="#accordion-collapse-body-1"
                                            aria-expanded="true"
                                            aria-controls="accordion-collapse-body-1"
                                        >
                                            <span className='font-bold text-lg text-slate-700'> {item.doubt}</span>
                                            {faqRow.index === index && faqRow.isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </button>
                                    </h2>
                                    <div
                                        id="accordion-collapse-body-1"
                                        className={faqRow.index === index && faqRow.isOpen ? "visible bg-slate-100" : "hidden"}
                                        aria-labelledby="accordion-collapse-heading-1"
                                    >
                                        <div className="p-5 border border-b-0 border-gray-200 ">
                                            <p className="mb-2 text-slate-600 text-md">
                                                {item.solution}
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            )
                        })

                    }

                </div>
                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-8 sm:mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-10/12 '>
                            <h2 className='text-xl sm:text-2xl text-blue-900'>
                                Conclusion
                            </h2>
                            <p className='mt-5 text-md  text-slate-800'>
                                {displayData?.conclusion}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IndustryDetail