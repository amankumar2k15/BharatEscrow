import React from 'react'
import Footer from '../components/Footer'
import blogImg from "../assets/blog/blog.jpg"
import tailwindImg from "../assets/blog/Tailwind css.jpg"
import moneyBack from "../assets/blog/moneyBack.jpg"
import { useNavigate } from 'react-router-dom'

const Blog = ({ setDetailRoutes }) => {
  const navigate = useNavigate()

  const BlogData = [
    {
      id: 0,
      title: "No ChargeBack vs Traditional Payment Processors",
      description: "Bunzo is a VUE JS Blog Template that is perfect for any type of blog. It’s based on the VueJS and Nuxt JS platforms and utilizes the Tailwind CSS Framework. It also has no jQuery dependency, making it fast and lightweight.",
      img: blogImg,
      bulletPoints: [
        {
          id: 0,
          data: "Uses Eleventy"
        },
        {
          id: 1,
          data: "Includes all demo images"
        },
        {
          id: 2,
          data: "Includes 5 pages: Homepage, Blog, Blog Post, About, Contact"
        }
      ]
    },
    {
      id: 1,
      title: "Money Back",
      description: "An agreement between a business and customer in which the customer's money will be returned if they are not satisfied with the product or service.",
      img: moneyBack,
      bulletPoints: [
        {
          id: 0,
          data: "1st point"
        },
        {
          id: 1,
          data: "1st point"
        }
      ]
    },
    {
      id: 2,
      title: "Tailwind Nextjs Starter Blog",
      description: "This is a Next.js, Tailwind CSS blogging starter template. Probably the most feature-rich Next.js markdown blogging template out there. Comes out of the box configured with the latest technologies to make technical writing a breeze. Easily configurable and customizable. Perfect as a replacement to existing Jekyll and Hugo individual blogs.",
      img: tailwindImg,
      bulletPoints: [
        {
          id: 0,
          data: "Uses Next.js"
        },
        {
          id: 1,
          data: "It has a light and dark theme"
        },
        {
          id: 2,
          data: "It has a near-perfect lighthouse score"
        },
      ]
    }
  ]


  const handleSetRoutes = (item) => {
    console.log(item)
    localStorage.setItem("detailItem", JSON.stringify(item))
    localStorage.setItem("detailRoute", item?.title?.split(" ").join("").toUpperCase())
    setDetailRoutes({ route: item?.title?.split(" ").join("").toUpperCase(), data: item })
    navigate(`/${item?.title?.split(" ").join("").toUpperCase()}`)
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
                  <div key={item.id} className='bg-[#a3c7de] relative rounded-lg shadow-lg shadow-black hover:-translate-y-1 transition-all duration-300 ease-in-out text-black h-[430px] md:h-[450px] max-w-[330px] px-4 flex flex-col gap-y-4'>
                    <h2 className='text-md mt-5 text-blue-900 font-bold'>{item.title}</h2>
                    <div className='md:h-[200px] max-w-[345px]' >
                      <img className='md:h-[200px] w-[345px] object-cover' src={item.img} alt='blogImg' />
                    </div>
                    <p className='text-md mt-4'>{item.description.slice(0, 150)}</p>
                    <button className='text-right text-blue-900 hover:text-black absolute right-4 bottom-4 ' onClick={() => handleSetRoutes(item)}>Read more</button>
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