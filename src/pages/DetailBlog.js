import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useLocation } from 'react-router';

const DetailBlog = ({ data }) => {
  const [displayData , setData ] = useState();
  const [faqRow , setRow] = useState(null)
  const location = useLocation()
  const localStorageData = JSON.parse(localStorage.getItem("detailItem"))
  const detailItem = data.data == null ? { data: localStorageData } : data



  const dataMap = [
    {
      id: 0,
      title: "A Step-by-Step Guide to Escrow Accounts with BharatEscrow",
      question1: "What is an escrow account?",
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

    }
  ]

  useEffect(()=>{
    console.log(location.pathname.toLowerCase());
    setData(dataMap.filter((item)=>`/${item.title}`?.replaceAll(' ' , '-').toLowerCase()===  location.pathname.toLowerCase())[0])
  },[data])


  return (
    <section>
      {
        console.log(displayData)
      }
      <div className='mb-10 mx-auto pb-12 flex flex-col justify-center items-center mt-32 border '>

        <div className='font-bold text-3xl mb-12 sm:text-4xl md:text-5xl mt-4 w-full text-center text-blue-900'>
          {detailItem?.data.title}
        </div>

        <div className="grid grid-cols-1 gap-4 w-full h-full">

          <div key={detailItem?.data.id} className="bg-white container mx-auto p-4 shadow-md rounded-md max-w-[1000px]">

            <div className='flex justify-center mb-10'>
              <img
                src={detailItem?.data.img}
                alt={detailItem?.data.title}
                className="w-[400px] h-[300px] object-cover rounded-md mb-4"
              />
            </div>
            <h2 className='text-xl font-bold mb-4'>Important bits</h2>
            <ul className="list-disc pl-4 gap-y-3 text-lg text-slate-700 flex flex-col">
              {detailItem?.data.bulletPoints?.map((point, index) => (
                <li className='font-thin' key={index}>{point.data}</li>
              ))}
            </ul>

            <h2 className="text-xl mt-7 mb-4 font-bold ">{detailItem?.data.title}</h2>
            <p className="text-slate-700 mb-4 text-lg">{detailItem?.data.description}</p>
          </div>
        </div>
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on
              top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
              more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top of
              Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software
              so everything you see in the library has a design equivalent in our
              Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>What are the differences between Flowbite and Tailwind UI?</span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open
              source under the MIT license, whereas Tailwind UI is a paid product.
              Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and
              even Tailwind UI as there is no technical reason stopping you from using
              the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>


  )
}

export default DetailBlog