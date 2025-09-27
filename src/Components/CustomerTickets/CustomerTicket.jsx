import calender from "../../assets/calendar.png"
import { toast } from 'react-toastify'


export default function CustomerTicket({tickets,updateprogress,updatetask}) {
  console.log(tickets)
  const alerttoast=(ticketTitle)=>{
    toast(`${ticketTitle} added to task queue`)
    return
  }
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-4 items-center m-3 p-3'>
   {
    tickets.map(ticket=>(
     <div key={ticket.id} className="card w-96 bg-base-100 card-md shadow-xl">
  <div onClick={()=>{alerttoast(ticket.title); updateprogress(); updatetask(ticket.title) }} className="card-body cursor-pointer">
    <div className='flex mb-2 justify-between'>
     <p className='font-bold text-[15px]'>{ticket.title}</p>
     <div  className={"flex justify-between gap-1 items-center rounded-2xl px-2 py-1 "+(ticket.status === 'Open' ? 'bg-green-300' : 'bg-yellow-200')}>
      <div className={"w-4 h-4 rounded-full "+(ticket.status === 'Open' ? 'bg-green-500' : 'bg-yellow-300')
  }></div>
      <p>{ticket.status}</p>
     </div>

    </div>
    <p className='line-clamp-3 text-gray-500 leading-[1.1] mb-2'>{ticket.description}</p>
    <div className='flex justify-between'>
      <div className='flex gap-2 justify-center items-center'>
       <p className='text-gray-400'>#{ticket.id}</p>
       <p className={
        ticket.priority=='High Priority'? 'text-red-500': ticket.priority=='Medium Priority'? 'text-yellow-300': 'text-green-500'
       }>{ticket.priority}</p>
      </div>
      
      <div className='flex gap-1.5 justify-center items-center'>
      <p className='text-gray-400'>{ticket.customer}</p>
      <img src={calender} alt="" className='w-[15px] h-[15px]'/>
      <p className='text-gray-400'>{ticket.createdAt}</p>
      </div>
    </div>  
  </div>
</div>
))
   }



 
    </div>
  )
}
