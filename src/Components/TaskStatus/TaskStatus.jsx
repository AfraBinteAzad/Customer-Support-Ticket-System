import React from 'react'

export default function TaskStatus({updateresolve, tasklist,deletetask,updatesolved,removeticket}) {
  return (
    <div className='flex flex-col gap-3'>
    {tasklist.map((task,index) => (
      <div key={index} >
    <div className="card card-dash bg-base-100 w-96 shadow-sm">
     <div className="card-body">
    <h2 className="card-title">{task}</h2>
   
    <div className="card-actions justify-end">
      <button onClick={()=>{updateresolve(); deletetask(index); updatesolved(task); removeticket(task); }} className="btn w-full bg-green-500 text-white">Complete</button>
    </div>
  </div>
</div>
            </div>
          ))}
       
   
      
    </div>
  )
}
