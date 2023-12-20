import React from 'react'
import Footer from '../components/Footer'
import blogImg from "../assets/blog/blog1.jpg"
// import tailwindImg from "../assets/blog/Tailwind css.jpg"
// import moneyBack from "../assets/blog/moneyBack.jpg"
import { useNavigate } from 'react-router-dom'

const Blog = ({ setDetailRoutes }) => {
  const navigate = useNavigate()

  const BlogData = [
    {
      id: 0,
      title: "A Step-by-Step Guide to Escrow Accounts with BharatEscrow",
      question1: "What is an escrow account?",
      answer1: "It is an intermittent account that is only active till the transaction is completed. The account is closed once all of the criteria between the buyer and seller have been met. Escrows often involve the deposit of a monetary-valued document. These documents could be deeds, written instruments, payment pledges, licenses, patents, cheques, bonds, or mortgages.",
      img: blogImg,
    }
  ]


  const handleSetRoutes = (item) => {
    const routeCal = item?.title?.split(' ').map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1, item.length)}`).join(" ").replaceAll(' ', "-")
    // localStorage.setItem("detailItemID", item.id)
    localStorage.setItem("detailRoute", routeCal)
    setDetailRoutes({ route: routeCal })
    navigate(`/${routeCal}`)
  }

  return (
    <>
      <section className='buySell border-y-2 border-white w-full'>
        <div className=' flex mt-[118px] md:pb-[30px] font-roboto flex-col gap-5 px-2 ' >
          <div className='font-bold text-3xl sm:text-4xl md:text-5xl mt-8 w-full text-center text-blue-900'>
            Blog
          </div>
        </div>
        <div className=' px-4 md:px-6 w-full py-10'>
          <div className=' flex flex-row flex-wrap justify-center gap-12'>
            {
              BlogData.map((item) => {
                return (
                  <div key={item.id} className='relative rounded-xl  shadow-lg shadow-black hover:-translate-y-1 transition-all duration-300 ease-in-out text-black h-[430px] md:h-[450px] max-w-[330px] px-4 flex flex-col gap-y-4'>
                    <h2 className='text-md mt-5 text-blue-900 font-bold hover:underline ' onClick={() => handleSetRoutes(item)}>{item.title}</h2>
                    <div className='md:h-[200px] max-w-[345px]' >
                      <img className='md:h-[200px] w-[345px] object-cover' src={item.img} alt='blogImg' />
                    </div>
                    <h5 className='text-md mt-5 text-blue-900 font-bold'>{item.question1}</h5>

                    <p className='text-sm'>{item.answer1?.slice(0, 100)}</p>
                    <button className='text-right text-blue-900 hover:text-black absolute right-4 bottom-4  hover:underline ' onClick={() => handleSetRoutes(item)}>Read more</button>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog