import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
// import Box from '../components/Box'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Ecommerce from '../assets/Home/Ecommerce.jpeg'
import MMSE from '../assets/Home/MSME.jpeg'
import FREELANCER from '../assets/Home/Freelance.jpeg'
import Footer from '../components/Footer';

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
        }],

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
        shortDesc: "In the dynamic landscape of the Indian MSME sector, efficient financial transactions are the lifeblood of growth and sustainability. At BharatEscrow, we recognize the unique challenges faced by Micro, Small, and Medium Enterprises (MSMEs) and have tailored our in-house digital escrow solution to cater specifically to their needs. In this article, we delve into how BharatEscrow's platform facilitates key financial processes for MSMEs, including IPO and public issues, rights issues and follow-on public offerings, open offers and takeovers, and buybacks.",
        key1desc: "Let's delve deeper into the concepts of IPO, public issue, rights issue, follow-on public offering, open offer, takeover, and buybacks. ",
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

        faqs: [{
            id: 1,
            doubt: "1.How does BharatEscrow.com ensure the security of funds during financial transactions?",
            solution: "BharatEscrow.com employs advanced encryption and security protocols, providing a secure environment for financial transactions. Our platform acts as an impartial intermediary, ensuring that funds are held safely until all specified conditions are met.",
        },
        {
            id: 2,
            doubt: "2. What sets BharatEscrow.com apart in terms of compliance assistance for MSMEs?",
            solution: "BharatEscrow.com offers a comprehensive compliance module tailored for MSMEs, guiding them through the intricacies of regulatory requirements. Our platform simplifies the compliance process, minimizing the risk of legal complications and ensuring a smooth transaction experience.",
        },
        {
            id: 3,
            doubt: "3. Can MSMEs customize the escrow process based on their specific needs?",
            solution: "Yes, BharatEscrow.com understands the diverse needs of MSMEs. Our platform is highly flexible, allowing MSMEs to customize the escrow process based on their unique requirements, ensuring a personalized and efficient experience.",
        },
        {
            id: 4,
            doubt: "4. How does BharatEscrow.com contribute to the efficiency of financial transactions for MSMEs?",
            solution: "BharatEscrow.com streamlines financial transactions for MSMEs by providing a user-friendly platform that simplifies engagement, agreement drafting, fund transfers, and compliance checks. Our efficient process accelerates the pace of transactions, saving time and resources for MSMEs.",
        },
        {
            id: 5,
            doubt: "5. Is BharatEscrow.com adept at managing intricate financial procedures like IPOs and buybacks??",
            solution: "Absolutely, BharatEscrow.com is designed to handle a spectrum of financial processes, including IPOs, rights issues, open offers, takeovers, and buybacks. Our platform's versatility ensures that MSMEs can rely on a single solution for their diverse financial needs.",
        },
        {
            id: 6,
            doubt: "6. How does BharatEscrow.com contribute to the transparency of financial transactions?",
            solution: "BharatEscrow.com prioritizes transparency throughout the entire transaction lifecycle. Our platform provides real-time updates, documentation transparency, and secure communication channels, enabling all stakeholders to stay informed and confident in their financial dealings.",
        },
        {
            id: 7,
            doubt: "7. What support does BharatEscrow.com offer in case of complications during a financial transaction?",
            solution: "BharatEscrow.com has a dedicated support team ready to address any issues promptly. Our support extends beyond technical assistance to providing guidance and solutions, ensuring a smooth resolution in case of unforeseen complications.",
        },
        {
            id: 8,
            doubt: "8. How does BharatEscrow.com stay competitive in the evolving market of financial services?",
            solution: "BharatEscrow.com remains competitive by continually investing in technology, ensuring our platform is up-to-date with the latest security features and regulatory compliance standards. Our commitment to innovation and customer-centric solutions positions us as a reliable and forward-thinking partner for MSMEs in the financial landscape.",
        },
        ],
        conclusion: "In conclusion, BharatEscrow stands as a reliable ally for MSMEs in India, streamlining their financial transactions and providing a secure, transparent, and efficient platform for various processes. Through our in-house digital escrow solution, we empower MSMEs to navigate the complexities of IPOs, public issues, rights issues, follow-on public offerings, open offers, takeovers, and buybacks, while ensuring a seamless onboarding experience.",
    },
    {
        id: 3,
        route: "FREELANCER",
        image: FREELANCER,
        title: "Empowering Freelancers: Ensuring Fair and Secure Transactions with BharatEscrow",
        shortDesc: "In the constantly shifting environment of independent employment, freelancers play an important role in providing a wide range of talents and services to clients worldwide. However, despite plenty of opportunities, the difficulty of safe and timely fund settlements frequently interferes with the seamless collaboration of freelancers and project providers. At BharatEscrow, we seek to close this gap by ensuring that all parties receive appropriate compensation in accordance with their agreed-upon agreements.",
        key1: "The Role of Freelancers:",
        key1desc: "Freelancers are highly skilled experts that offer project-based services in fields such as writing, graphic design, programming, marketing, and even more. Freelancers are an essential component of today's workforce due to their adaptability and specific talents. While the freelancing environment is full of opportunity, it also presents a number of problems. Regardless of their specialization or skill sets, freelancers frequently face a number of challenges that can have an influence on their entire experience and financial well-being.",
        point: [{
            id: 1,
            key: "Onboarding Process for Freelancers:",
            process: [{
                id: 1,
                key: "Engagement:",
                value: "Freelancers initiate the onboarding process by expressing interest in our services, leading to collaborative engagement with the BharatEscrow team."
            },
            {
                id: 2,
                key: "Agreement: ",
                value: "Clear terms are established through agreements, defining the scope of services, deliverables, and the payment structure."
            },
            {
                id: 3,
                key: "Fund Transfer: ",
                value: "Once the agreement is in place, project providers transfer funds to BharatEscrow's secure escrow account, indicating their commitment to the freelancer's work."
            },
            {
                id: 4,
                key: "Verification and Compliance:",
                value: "Each transaction undergoes thorough verification and compliance checks, ensuring that all agreed-upon terms are met before proceeding."
            },
            {
                id: 5,
                key: "Release of Funds or Assets:",
                value: "Upon successful completion of the project, funds are released to the freelancer, providing fair compensation for their services."
            },


            ]

        },
        {
            id: 2,
            key: "Onboarding Process for Project Providers:",
            process: [{
                id: 1,
                key: "Engagement:",
                value: "Project providers initiate the onboarding process by expressing interest in utilizing BharatEscrow's services, leading to collaborative engagement with our team."
            },
            {
                id: 2,
                key: "Agreement:",
                value: "Clear terms are established through agreements, defining project requirements, timelines, and the payment structure."
            },
            {
                id: 3,
                key: "Fund Transfer:",
                value: "Project providers transfer funds to BharatEscrow's secure escrow account, indicating their commitment to the freelancer's work."
            },
            {
                id: 4,
                key: "Verification and Compliance: ",
                value: "Each transaction undergoes thorough verification and compliance checks, ensuring that all agreed-upon terms are met before proceeding."
            },
            {
                id: 5,
                key: "Release of Funds or Assets: ",
                value: "Upon successful completion of the project, funds are released to the freelancer, providing fair compensation for their services."
            },

            ],
        }
        ],
        faqs: [
            {
                id: 1,
                doubt: "1. How does BharatEscrow ensure that freelancers receive timely payments for their work?",
                solution: "BharatEscrow acts as a neutral third party, holding funds securely in escrow until the freelancer successfully completes the agreed-upon work, ensuring timely payments."
            },
            {
                id: 2,
                doubt: "2. Can freelancers customize their escrow accounts based on the complexity of their projects?",
                solution: "Yes, BharatEscrow's platform is flexible, allowing freelancers to tailor their escrow accounts based on the unique requirements of each project."
            },
            {
                id: 3,
                doubt: "3. What measures does BharatEscrow take to protect the interests of project providers?",
                solution: "BharatEscrow employs robust verification and compliance checks to ensure that project providers receive the deliverables as per the agreed-upon terms before funds are released."
            },
            {
                id: 4,
                doubt: "4. How does BharatEscrow handle disputes between freelancers and project providers?",
                solution: "BharatEscrow provides a dispute resolution mechanism, facilitating fair and unbiased resolutions in case of disagreements between parties."
            },
            {
                id: 5,
                doubt: "5. Can freelancers and project providers track the progress of transactions in real-time?",
                solution: "Yes, BharatEscrow's platform offers a transparent dashboard, allowing both freelancers and project providers to monitor the progress of transactions in real-time."
            },
            {
                id: 6,
                doubt: "6. How does BharatEscrow ensure the security of funds during transactions?",
                solution: "BharatEscrow employs advanced encryption and security protocols, ensuring the safe and secure handling of funds throughout the entire transaction process."
            },
            {
                id: 7,
                doubt: "7. Is BharatEscrow's service limited to specific types of freelancing jobs?",
                solution: "No, BharatEscrow caters to freelancers across various industries, supporting a wide range of freelance jobs and services."
            },
            {
                id: 8,
                doubt: "8. Can project providers request modifications to the initial agreement during the project's progress?",
                solution: "Yes, BharatEscrow allows for flexibility in agreements, enabling project providers and freelancers to request modifications as needed, with proper documentation and consensus."
            },
        ],
        conclusion: "In conclusion, BharatEscrow stands as a reliable partner for freelancers and project providers alike, facilitating fair and secure transactions through our digital escrow platform. The streamlined onboarding process and comprehensive FAQ provide clarity and assurance to both parties, fostering a collaborative and trustworthy freelance ecosystem."
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
            <div className=' pb-5 flex flex-col justify-center items-center mt-14 bord'>
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
                            <p className='mt-5 mb-10 text-md text-slate-800'>
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

                <div className='flex flex-col sm:flex-wrap '>
                    <div className=' flex flex-col gap-10 justify-center items-center '>
                        {displayData?.point?.map((item) => {
                            return (

                                <div className='sm:max-w-[1050px] mt-8' key={item.id}>
                                    <p className='text-blue-900 font-bold text-2xl font-roboto underline'>{item?.key}</p>
                                    <div className='mt-1 flex flex-col gap-2'>
                                        {console.log('204', displayData)}
                                        {item.process?.map((processItem) => {
                                            return (
                                                <div key={processItem.id} className='flex flex-col sm:flex-wrap '>
                                                    <div className='mt-4 flex flex-col gap-10'>
                                                        <div className=' sm:w-12/12 '>
                                                            <h2 className='text-xl text-blue-900'>
                                                                {`${processItem?.id}. ${processItem?.key}`}
                                                            </h2>
                                                            <p className='mt-1 text-md sm:text-[16px] text-slate-800'>
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
                </div>

                <div className='max-w-[1050px] mt-[50px] flex flex-col text-black '>
                    <div className='mt-8 flex flex-col gap-0'>
                        <p className='text-blue-900 mb-6 font-bold text-2xl font-roboto'>FAQ's</p>

                        {
                            displayData?.faqs?.map((item, index) => {
                                // { console.log("amanData==>", displayData.faqs) }
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
                </div>

                <div className='flex flex-col sm:flex-wrap mb-10'>
                    <div className='mt-8 sm:mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-10/12 '>
                            <h2 className='text-xl sm:text-2xl  text-blue-900'>
                                Conclusion
                            </h2>
                            <p className='mt-5 text-md  text-slate-800'>
                                {displayData?.conclusion}
                            </p>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default IndustryDetail