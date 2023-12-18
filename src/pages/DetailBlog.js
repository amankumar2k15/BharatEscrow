import React from 'react'

const DetailBlog = ({data}) => {
    console.log(data);
  return (
    <section>
   <div className=' mb-10 mx-auto py-5 flex  flex-col justify-center items-center mt-40'>
    <div className="grid grid-cols-1  gap-4 w-full h-full">
     
        <div key={data.data.id} className="bg-white p-4 shadow-md rounded-md">
          <img
            src={data.data.image}
            alt={data.data.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{data.data.title}</h2>
          <p className="text-gray-600 mb-4">{data.description}</p>
          <ul className="list-disc pl-4">
            {data?.data.bulletPoints?.map((point, index) => (
              <li key={index}>{point.data}</li>
            ))}
          </ul>
        </div>
     
    </div>
    </div>
    </section>
 
  
  )
}

export default DetailBlog