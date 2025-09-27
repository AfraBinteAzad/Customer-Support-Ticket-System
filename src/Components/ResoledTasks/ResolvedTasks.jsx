import React from 'react'

export default function ResolvedTasks({resolvelist}) {
  return (
    <div className='flex flex-col gap-2'>
      {
        resolvelist.map((resolve,index)=>
         (
          <div key={index} className='bg-[#E0E7FF] text-black font-semibold p-2 shadow-sm  text-center'>
          {resolve}
         </div>
      
      )
        )
      }
    </div>
  )
}
