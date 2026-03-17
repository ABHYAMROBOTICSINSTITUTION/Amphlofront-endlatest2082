import React from 'react'

async function page({params}) {
    const {id}=await params;
    console.log(id,"Dsds")
  return (
    <div className='h-96 flex justify-center items-center'>
      aman chor {id}
    </div>
  )
}

export default page
