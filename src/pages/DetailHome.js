import React, { useEffect } from 'react'

const DetailHome = ({data}) => {
    useEffect(()=>{
console.log(data , "data");
    },[data])
  return (
    <div>DetailHome</div>
  )
}

export default DetailHome