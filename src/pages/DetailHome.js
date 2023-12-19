import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Footer from '../components/Footer'

const detailHomeData = [
    {
        id: 0,
        route: "Secure Transactions",
        title: "Ensuring Security in Every Transaction: The Role of Escrow Accounts at BharatEscrow.com",
        shortDesc: "In the dynamic realm of online transactions, where trust and security are paramount, BharatEscrow.com emerges as a pioneer, redefining the landscape of secure financial transactions. As a content writer delving into the world of secure transaction means, let's explore how BharatEscrow.com, as a leading player in the fintech market, acts as the intermediary ensuring that every transaction processed through its escrow accounts is fortified with security.",
        key1: "The Essence of Secure Transactions:",
        key1desc: "Secure transactions go beyond the exchange of funds; they encapsulate trust, transparency, and a seamless process. BharatEscrow.com recognizes this essence and has strategically positioned itself as t he guardian of secure transactions in the fintech ecosystem.",
        questions: [
            {
                id: 0,
                ques: "Escrow Accounts: The Sentinel of Security:",
                ans: "At the heart of BharatEscrow.com's commitment to secure transactions lies the concept of escrow accounts. These specialized accounts act as the custodian, holding funds securely until predefined conditions are met. It's not just a financial tool; it's a sentinel that ensures both parties involved in a transaction can proceed with confidence."
            },
            {
                id: 1,
                ques: "The Intermediary Role:",
                ans: "BharatEscrow.com steps into the transaction arena as a neutral third party, assuming the role of an intermediary. This role is pivotal; it ensures that neither the buyer nor the seller has undue control over the funds until the terms of the agreement are fulfilled. This equitable approach adds a layer of security that transcends traditional payment methods."
            }
            ,
            {
                id: 2,
                ques: "Trust in Every Transaction",
                ans: "Trust is the cornerstone of secure transactions, and BharatEscrow.com understands its significance. By offering escrow services, the platform cultivates an environment where both parties can engage in transactions with a heightened sense of trust. The buyer is assured that the funds are safeguarded, and the seller gains confidence in delivering the agreed-upon goods or services."
            },
            {
                id: 3,
                ques: " Transparent Process:",
                ans: "Security thrives in transparency. BharatEscrow.com prioritizes a transparent transaction process, allowing both parties to track the progress of the transaction. From initiation to completion, stakeholders are informed, ensuring that there are no hidden surprises and promoting a secure and open financial ecosystem."
            },
            {
                id: 4,
                ques: "Fraud Prevention Measures:",
                ans: "In the age of digital transactions, the threat of fraud looms large. BharatEscrow.com employs robust fraud prevention measures within its escrow accounts, utilizing cutting-edge technology to identify and mitigate potential risks. This proactive stance is instrumental in fortifying the security of every transaction."
            }
        ],
        key2: "BharatEscrow.com: A Beacon of Security in Fintech:",
        key2desc: "BharatEscrow.com isn't merely a player in the fintech market; it's a beacon of security, illuminating the path for secure financial transactions. As a content writer, it's refreshing to explore a platform that goes beyond the conventional and embraces innovation to redefine how transactions are conducted.",
        conclusion: 'In conclusion, the concept of secure transaction means finds its epitome in the escrow accounts offered by BharatEscrow.com. This fintech trailblazer has not just adapted to the evolving needs of secure transactions but has set the standard for others to follow, ensuring that every transaction is not just a transfer of funds but an exchange fortified with trust and security.'
    },
    {
        id: 1,
        route: "Reliable Intermediary",
        title: "The Pillars of Reliability: BharatEscrow.com as Your Trusted Escrow Intermediary",
        shortDesc: "In the dynamic landscape of online transactions, where trust is the currency and security is paramount, BharatEscrow.com stands tall as a beacon of reliability. As a content writer, let's delve into the realm of escrow accounts and explore how BharatEscrow.com, a distinguished player in the fintech market, acts as a reliable intermediary, ensuring that every transaction processed through its platform is not just secure but built on the pillars of trust.",
        key1: "The Essence of Reliability:",
        key1desc: "Reliability in escrow accounts goes beyond mere functionality; it embodies a commitment to consistency, integrity, and the assurance that every party involved can rely on a seamless and trustworthy process. BharatEscrow.com, with its unwavering dedication to reliability, emerges as a game-changer in the fintech ecosystem.",
        questions: [
            {
                id: 0,
                ques: "Trustworthy Intermediary Role:",
                ans: "At the core of BharatEscrow.com's reliability lies its role as a trustworthy intermediary. In the intricate dance of online transactions, the platform steps in as a neutral third party, ensuring that both the buyer and the seller can rely on an equitable and secure process. This intermediary role is not just a service; it's a commitment to reliability in every transaction."
            },
            {
                id: 1,
                ques: "Consistent Security Measures:",
                ans: "Reliability and security are inseparable twins. BharatEscrow.com prioritizes consistent and robust security measures within its escrow accounts. This reliability ensures that every transaction is shielded from potential threats, setting the stage for a secure financial exchange."
            }
            ,
            {
                id: 2,
                ques: "Transparent and Predictable Process:",
                ans: "Reliability thrives in transparency. BharatEscrow.com champions a transparent and predictable transaction process, providing a roadmap that all stakeholders can rely on. From the initiation of the transaction to its completion, the platform ensures that every party is well-informed, fostering an environment of trust and reliability."
            },
            {
                id: 3,
                ques: "Unbiased Neutrality:",
                ans: "The reliability of an intermediary is often measured by its neutrality. BharatEscrow.com embraces unbiased neutrality, steering clear of favoritism towards either party involved in a transaction. This commitment to impartiality reinforces the reliability of the platform, creating an atmosphere where every user can place their trust."
            },
            {
                id: 4,
                ques: " Track Record of Success:",
                ans: "Reliability is earned through a track record of success. BharatEscrow.com proudly showcases a history of successful transactions, becoming a testament to its unwavering commitment to reliability. Businesses and individuals alike can rely on this platform based on its proven ability to facilitate secure and smooth transactions."
            }
        ],
        key2: "BharatEscrow.com: Your Rock-Solid Escrow Intermediary:",
        key2desc: "In the vast sea of fintech options, BharatEscrow.com emerges not just as a participant but as a rock-solid escrow intermediary you can rely on. Its dedication to reliability is a testament to its understanding of the evolving needs of online transactions and the necessity for a platform that users can trust.",
        conclusion: 'In conclusion, as a content writer exploring the dynamics of reliable intermediary means in escrow accounts, BharatEscrow.com sets a new standard. It goes beyond the expected, redefining reliability in the fintech market. For businesses and individuals seeking a platform they can rely on for secure transactions, BharatEscrow.com stands as a paragon of trustworthiness and reliability.'
    }
]

const DetailHome = ({ data }) => {
    const location = useLocation()
    const [displayData, setData] = useState();


    useEffect(() => {
        setData(detailHomeData.filter((item) => `/${item.route}`.replaceAll(' ', '-') === location.pathname)[0]);
    }, [data])



    return (
        <>
            <div className='flex flex-col py-10 w-full px-10 rounded-none  sm:rounded-t-[200px]'>

                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-32 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-8/12 '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                {displayData?.title}
                            </h2>
                            <p className='mt-5 text-md text-slate-800'>
                                {displayData?.shortDesc}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-8/12 '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                {displayData?.key1}
                            </h2>
                            <p className='mt-5 text-md  text-slate-800'>
                                {displayData?.key1desc}
                            </p>
                        </div>
                    </div>
                </div>

                {/* //Mapping Data  */}
                {displayData?.questions?.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col sm:flex-wrap '>
                            <div className='mt-12 flex flex-col gap-10 justify-center items-center'>
                                <div className=' sm:w-8/12 '>
                                    <h2 className='text-xl sm:text-2xl text-black'>
                                        {`${item.id + 1}. ${item?.ques}`}
                                    </h2>
                                    <p className='mt-5 text-md  text-slate-800'>
                                        {item?.ans}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className='flex flex-col sm:flex-wrap '>
                    <div className='mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-8/12 '>
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
                    <div className='mt-16 flex flex-col gap-10 justify-center items-center'>
                        <div className=' sm:w-8/12 '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                Conclusion
                            </h2>
                            <p className='mt-5 text-md  text-slate-800'>
                                {displayData?.conclusion}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>

            </div>

            <Footer />
        </>
    )
}

export default DetailHome