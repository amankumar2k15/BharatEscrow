import React from 'react'

const DetailBlog = ({ data }) => {
  
  const localStorageData = JSON.parse(localStorage.getItem("detailItem"))
  const detailItem = data.data == null ? { data: localStorageData } : data

  console.log("detailITem", detailItem);
  return (
    <section>
      <div className='mb-10 mx-auto pb-12 flex flex-col justify-center items-center mt-32'>

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
    </section>


  )
}

export default DetailBlog