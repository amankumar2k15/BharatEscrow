import { useLocation } from 'react-router';
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { CgProfile } from "react-icons/cg";
import { IoShareSocialOutline } from "react-icons/io5";
import detailblogImg from "../assets/blog/blog1.jpg"
import detailblogImg1 from "../assets/blog/blog2.jpg"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";


const DetailBlog = ({ data }) => {
  const [displayData, setData] = useState();

  const [faqRow, setFaqRow] = useState({ index: null, isOpen: false })
  const location = useLocation()

  const socialIcon = [
    {
      icon:
        <>
          <FacebookShareButton url='https://bharatescrow.com/'>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </>
    },
    {
      icon:
        <>
          <TwitterShareButton url='https://bharatescrow.com/'>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </>
    },
    {
      icon:
        <>
          <WhatsappShareButton url='https://bharatescrow.com/'>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </>
    },
    {
      icon:
        <>
          <LinkedinShareButton url='https://bharatescrow.com/'>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </>
    },
    {
      icon:
        <>
          <TelegramShareButton url='https://bharatescrow.com/'>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
        </>
    }
  ]


  const dataMap = [
    {
      id: 0,
      img: detailblogImg,
      title: "A Step-by-Step Guide to Escrow Accounts with BharatEscrow",
      question1: "What is an Escrow Account?",
      answer1: "It is an intermittent account that is only active till the transaction is completed. The account is closed once all of the criteria between the buyer and seller have been met. Escrows often involve the deposit of a monetary-valued document. These documents could be deeds, written instruments, payment pledges, licenses, patents, cheques, bonds, or mortgages.",
      detail: { key: "Details about Escrow Account", value: "In an era where financial transparency is paramount, the use of escrow accounts has become a cornerstone for secure transactions. BharatEscrow, in collaboration with multiple RBI-regulated banking partners, is at the forefront of delivering unparalleled financial transparency between buyers and sellers. This comprehensive guide outlines the step-by-step process of utilizing an escrow account with BharatEscrow, aligning with the vision of providing financial transparency to everyone." },
      steps: [
        {
          id: 0,
          key: "Registration with BharatEscrow",
          value: "Begin by registering on the BharatEscrow platform. Users can easily create an account, providing necessary details for identity verification. This initial step establishes the foundation for secure and transparent financial transactions. We generally ask for the basic KYC and KYB documents from each clients to completed the verfication process."
        },
        {
          id: 1,
          key: "Agreement Initiation",
          value: "Once registered, initiate an agreement on the BharatEscrow platform. Clearly outline the terms and conditions of the transaction, including payment details, milestones, and delivery expectations. This agreement serves as the blueprint for the entire escrow process wherein each information from beginning of the project to completeion of the project."
        },
        {
          id: 2,
          key: " Fund Transfer to Escrow Account",
          value: "Upon agreement finalization, the buyer transfers the agreed-upon funds to the RBI-regulated escrow account facilitated by BharatEscrow. This step ensures that the funds are securely held in escrow until all conditions are met, instilling confidence in both parties. There would be few instances where the settlement would be based on the milestone and such case will be only occured in freelanceing projects done either by freelancer or a small firms."
        },
        {
          id: 3,
          key: "Verification and Approval",
          value: "BharatEscrow, in collaboration with its banking partners, conducts thorough verification processes. This includes confirming the authenticity of the funds transferred and validating the compliance of the transaction with regulatory standards. Once verified, the funds are approved for release upon fulfillment of the agreed conditions. we need to make sure that the funds are transferred through a designated account. "
        },
        {
          id: 4,
          key: "Milestone Tracking and Updates",
          value: "Throughout the transaction, BharatEscrow provides a transparent milestone tracking system. Regular updates are communicated to both the buyer and seller, ensuring everyone is informed about the progress and any necessary actions required to move the transaction forward. This sort of payment will only occurs where a firm/freelancers are developing a project for a sepicifc needs ."
        },
        {
          id: 5,
          key: "Conditional Release of Funds",
          value: "Upon successful completion of the agreed-upon conditions, the funds held in escrow are released to the seller. This step ensures that both parties adhere to their commitments, creating a secure and fair transaction environment."
        }
      ],
      examples: [
        {
          id: 0,
          case: "Assume that firm A acquires company B. Now, company A does not want to pay company B in full until the changeover is complete. Company A will transfer the payment into a third-party account in this situation. This third party serves as an escrow agent. The escrow will release the amount once firm B transfers control of all assets, properties, and documents."
        },
        {
          id: 1,
          case: "Assume a government gets into a coal extraction arrangement with C business. According to the contract terms, C firm will cover all expenses. Furthermore, the government's and C company's income sharing percentages will be 30% and 70%, respectively. In this situation, the C business will bear the entire expense of coal extraction. When money is earned, it is put into a central account. This is the property of an escrow agent. The escrow will transfer revenue to both parties in accordance with the agreed-upon 30/70 split.."
        }
      ],
      faqs: [
        {
          id: 0,
          doubt: "How secure is the BharatEscrow platform?",
          solution: "BharatEscrow prioritizes security, leveraging advanced encryption and collaborating with RBI-regulated banking partners to ensure a highly secure platform."
        },
        {
          id: 1,
          doubt: "What types of transactions are suitable for escrow services?",
          solution: "Escrow services are suitable for various transactions, including online purchases, real estate transactions, freelance services, and business acquisitions"
        },
        {
          id: 2,
          doubt: "How long does the escrow process take?",
          solution: "The duration varies based on the complexity of the transaction and how quickly the agreed-upon conditions are met. BharatEscrow provides timely updates throughout the process."
        },
        {
          id: 3,
          doubt: "Can I use BharatEscrow for international transactions?",
          solution: " Yes, BharatEscrow supports both domestic and international transactions, offering a seamless and secure experience globally."
        },
        {
          id: 4,
          doubt: "What happens if there is a dispute during the transaction?",
          solution: " BharatEscrow provides a dispute resolution mechanism. The platform carefully investigates and mediates disputes to ensure fair outcomes."
        },
        {
          id: 5,
          doubt: "Are there any hidden fees associated with using BharatEscrow?",
          solution: "BharatEscrow is transparent about its fee structure, and there are no hidden fees. Users are informed of any applicable charges upfront."
        }
      ],
      conclusion: "In a world where financial transparency is non-negotiable, BharatEscrow stands as a reliable partner, offering a secure and efficient platform for escrow services. By following this step-by-step guide, users can navigate the escrow process seamlessly, fostering trust and confidence in their financial transactions.",
      timeStamp: "19-9-2023"

    },
    {

      id:1,
      img:detailblogImg1,
      title: "Your Business in B2B Transactions safeguarded by BHARATESCROW",
      question1: "Elevate Your B2B Transactions with BharatEscrow ",
      answer1:"In the intricate landscape of B2B transactions, establishing a foundation of trust is essential. With increasing complexities and risks, businesses need a reliable solution to protect their interests and ensure fair dealings. BharatEscrow emerges as a game-changer, offering a secure and neutral ground for B2B transactions.",
      faqs:[
         { id:1,
          doubt:"Is BharatEscrow only suitable for large transactions?",
          solution:"BharatEscrow caters to businesses of all sizes, offering scalable solutions tailored to the transactional needs of each business.",
        },
         { id:2,
          doubt:"How does BharatEscrow handle international transactions?",
          solution:"BharatEscrow complies with global regulatory standards, facilitating secure and compliant cross-border transactions.",
        },
         { id:3,
          doubt:"What happens in case of a dispute between the transacting parties?",
          solution:"BharatEscrow employs a robust dispute resolution mechanism to ensure fair and impartial resolutions in case of disagreements.",
        },
         { id:4,
          doubt:"Is BharatEscrow compliant with industry-specific regulations?",
          solution:"Yes, BharatEscrow adheres to industry-specific regulations, providing businesses with a secure and legally compliant escrow service.",
        },
         { id:5,
          doubt:"How quickly can businesses onboard with BharatEscrow?",
          solution:"The onboarding process with BharatEscrow is efficient, allowing businesses to quickly integrate escrow services into their transactions.          ",
        },
         { id:6,
          doubt:"Can BharatEscrow be used for recurring transactions?",
          solution:"Yes, BharatEscrow supports both one-time and recurring transactions, providing flexibility for businesses with varying transaction needs.",
        },
         { id:7,
          doubt:"What security measures does BharatEscrow employ to protect sensitive information?",
          solution:"BharatEscrow utilizes advanced encryption and security protocols to safeguard sensitive information, ensuring a secure transaction environment.",
        },
         { id:8,
          doubt:"Does BharatEscrow charge fees for its services?",
          solution:"BharatEscrow's fee structure is transparent, with businesses only paying for the escrow services they utilize. The platform aims to provide cost-effective solutions for all. ",
        },
      
      ],
      conclusion:"Elevate your B2B transactions to new heights with BharatEscrow. As the fintech industry evolves, trust and security remain at the forefront of successful business dealings. BharatEscrow empowers businesses to engage in secure and transparent transactions, fostering trust, and paving the way for mutually beneficial partnerships. Explore the future of B2B transactions with BharatEscrow — where security meets seamless transactions.",
      timeStamp: "19-9-2023"
    }
  ]

  useEffect(() => {
    setData(dataMap.filter((item) => `/${item.title}`?.replaceAll(' ', '-').toLowerCase() === location.pathname.toLowerCase())[0])
    // eslint-disable-next-line
  }, [data, location.pathname])


  return (
    <section>
      <div className='mb-10 pb-12 flex flex-col justify-center items-center mt-32 border '>

        <div className='shadingEffect font-bold text-3xl mb-12 sm:text-4xl md:text-5xl mt-4 w-full text-center text-blue-900'>
          {displayData?.title}

        </div>

        <div className='container mx-auto items-center flex justify-center flex-col px-4' >
          <div className='flex gap-2 items-center mb-4'>
            <div>
              <CgProfile size={30} className='text-gray-600' />
            </div>
            <div className='flex flex-col'>
              <div className='inline-flex text-[12px]'>
                <div className='text-gray-500 '>Pulished On -</div> <div className='text-gray-500'>{displayData?.timeStamp}</div>
              </div>
              <div className='inline-flex text-[12px]'>
                <div className='text-gray-500 '>Bharat Escrow -</div> <div className='text-gray-500'>Bharat Escrow Gateway</div>
              </div>
            </div>
          </div>


          <div className='md:max-w-[700px] max-h-[400px] relative flex items-center justify-center'>




            <img src={displayData?.img} alt='images' className='md:max-w-[700px] max-h-[400px]' />
          </div>

          <div className='max-w-5xl mt-4 '>
            <div className='font-bold'>
              Share and Enjoy!
            </div>

            <div className='flex'>
              <button className='mr-2'>
                <IoShareSocialOutline />
                <div className=' text-[8px] uppercase'>Shares</div>
              </button>
              <div className='flex gap-x-4'>
                {socialIcon?.map((item, index) => <span className='hover:-translate-y-1 transition-all duration-200 ease-out' key={index}>{item?.icon}</span>)}
              </div>
            </div>
          </div>


          <div className='max-w-5xl mt-[104px] flex flex-col text-black md:px-3 '>
            <div className='-mt-4'>
              <p className=' text-blue-900 font-bold text-2xl font-roboto'>{displayData?.question1}</p>
              <p className='text-gray-600 text-lg font-roboto mt-2'>{displayData?.answer1}</p>
            </div>

            <div className='mt-8'>
              <p className='text-blue-900 font-bold text-2xl font-roboto'>{displayData?.detail?.key}</p>
              <p className='text-gray-600 text-lg font-roboto mt-2'>{displayData?.detail?.value}</p>
            </div>

            <div className='mt-8 flex flex-col gap-0'>
              <p className='text-blue-900 font-bold text-2xl font-roboto underline'>How to operate :-</p>
              <div className='mt-5 flex flex-col gap-8'>
                {displayData?.steps?.map((item) => {
                  return (
                    <div key={item?.id}>
                      <p className='text-blue-900 font-bold text-xl mt-2 font-roboto'>{item?.key}</p>
                      <p className='text-gray-600 text-lg font-roboto mt-2'>{item?.value}</p>
                    </div>
                  )
                })
                }
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
                            {/* icon  */}
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
                              {item?.solution}
                            </p>

                          </div>
                        </div>

                      </div>
                    )
                  })

                }

              </div>


              <div className='mt-8'>
                <p className='text-blue-900 font-bold text-2xl font-roboto'>Conclusion</p>
                <p className='text-gray-600 text-lg font-roboto mt-2'>{displayData?.conclusion}</p>
              </div>
            </div>


          </div>





        </div>

      </div>


      <div>


      </div>

      <Footer />
    </section>


  )
}

export default DetailBlog