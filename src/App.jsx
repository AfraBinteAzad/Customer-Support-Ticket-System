import './App.css'
import twitter from "./assets/twitter.png"
import link from "./assets/link.png"
import facebook from "./assets/facebook.png"
import email from "./assets/email.png"
import { Suspense, useState } from 'react'
import vector from "./assets/vector1.png"
import CustomerTicket from './Components/CustomerTickets/CustomerTicket'
import { ToastContainer} from 'react-toastify';
import TaskStatus from './Components/TaskStatus/TaskStatus'
import ResolvedTasks from './Components/ResoledTasks/ResolvedTasks'

const fetchticket = async()=>{
  const res = await fetch("/tickets.json")
  return res.json();
};

function App() {
  const [progress,setprogress]=useState(0)
  const [resolved,setresolve]=useState(0)
  const [tasklist,settask]=useState([])
  const [resolvelist,setsolved]=useState([])
  const [tickets,setticket]=useState([])

  useState(() =>{
    fetchticket().then((data) => setticket(data));
  }, []);

  const removeticket = (title) => {
    setticket(tickets.filter((t) => t.title!==title));
  };



  const updatesolved=(solution)=>{
    const newsol=[...resolvelist,solution]
    setsolved(newsol)
    console.log(resolvelist)
  }

  const updatetask=(task)=>{
    const newlist=[...tasklist,task]
    settask(newlist)
  }

  const deletetask=(taskindex) =>{
  const updatetask=tasklist.filter((task, currentIndex) => {
    return currentIndex !== taskindex;
  });
  settask(updatetask);
};
  
  const updateprogress=()=>{
    const newprog=progress+1;
    setprogress(newprog)
  }

   const updateresolve=()=>{
    const newres=resolved+1
    setresolve(newres)
    const updatepr=progress-1;
    setprogress(updatepr)
  }
  
  
  
  return (

    <>
      <div className='mx-auto'>
       <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1 pl-0 md:pl-3">
    <a className="text-xl font-bold">CS — Ticket System</a>
  </div>
  <div className="flex flex-row gap-5 pr-0 md:pr-3 justify-center items-center">
    <p className='hidden md:block'>Home</p>
    <p className='hidden md:block'>FAQ</p>
   <p className='hidden md:block'>Changelog</p>
   <p className='hidden md:block'>Blog</p>
   <p className='hidden md:block'>Download</p>
   <p className='hidden md:block'>Contact</p>
   <button className="btn btn-active text-white hover:scale-105 font-bold 
   bg-gradient-to-r from-[#422AD5] to-[#6A5CF2]">
    + New Ticket</button>
  </div>
</div>
      </div>
      <div className='mx-auto  p-5 m-3 flex gap-2.5 justify-center items-center'>
      <div className='w-full flex justify-center md:justify-between items-center p-3 md:p-0 bg-gradient-to-r from-[#7B61FF] to-[#9C6AFF] rounded-[5px] text-center text-white'>
        <img src={vector} alt="" className='w-[300px] hidden md:block'/>
        <div className='flex flex-col'>
          <p className="text-sm">In-Progress</p>
          <p className="text-3xl font-bold">{progress}</p>
        </div>
      <img src={vector} alt="" className='rotate-180 w-[300px] hidden md:block'/>  
      </div>
      <div className='w-full flex justify-center md:justify-between items-center p-3 md:p-0 bg-gradient-to-r from-[#7AD56C] to-[#0BB8A0] rounded-[5px] text-center text-white'>
        <img src={vector} alt="" className='w-[300px] hidden md:block'/>
        <div className='flex flex-col'>
          <p className="text-sm">Resolved</p>
          <p className="text-3xl font-bold">{resolved}</p>
        </div>
      <img src={vector} alt="" className='rotate-180 w-[300px] hidden md:block'/>  
      </div>
      </div>

      <div className='mx-auto m-4 flex flex-col-reverse md:flex-row justify-between'>
      <div className='w-full'>
        <p className='font-bold text-xl m-3 '>Customer Tickets</p>
        <div>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <CustomerTicket tickets={tickets} updateprogress={updateprogress} updatetask={updatetask}></CustomerTicket>
          </Suspense>
        </div>

      </div>
      <div className='flex flex-row md:flex-col w-full items-center gap-4 md:items-start'>
        <div className='m-3'>
        <p className='font-bold text-xl'>Task Status</p>
        {tasklist.length===0 ? (<p className='text-gray-500 text-sm'>Select a ticket to add to Task Status</p>
          ) : (<TaskStatus updateresolve={updateresolve} tasklist={tasklist} deletetask={deletetask} updatesolved={updatesolved}
          removeticket={removeticket}></TaskStatus>)}
        
        </div>
        <div className='m-3'>
        <p className='font-bold text-xl'>Resolved Task</p>
        {resolvelist.length===0 ? (<p className='text-gray-500 text-sm'>No resolved tasks yet.</p>
          ) : ( <ResolvedTasks resolvelist={resolvelist}> </ResolvedTasks>   )}
         
        </div>
      </div>

      </div>




     <footer  className='mx-auto m-6 mb-0'>
 <footer className="footer border-b-amber-50 mx-auto sm:footer-horizontal bg-black text-white text-base-content p-10">
  <aside>
    <p className='text-2xl font-bold'>CS — Ticket System</p>
    <p className='leading-[1.1]'>
      Our platform helps businesses manage customer inquiries with ease, <br /> 
      organize support requests in one place, and provide timely resolutions. <br /> 
      From the first message to ticket closure, we make every interaction smooth, <br />
      efficient, and customer-friendly.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Sale</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex gap-1 justify-center items-center">
    <img src={twitter} alt="" />
    @CS — Ticket System</a>
    <a className="link link-hover flex gap-1 justify-center items-center">
    <img src={link} alt="" />
    @CS — Ticket System</a>
    <a className="link link-hover flex gap-1 justify-center items-center">
    <img src={facebook} alt="" />
    @CS — Ticket System</a>
    <a className="link link-hover flex gap-1 justify-center items-center">
    <img src={email} alt="" />
    support@cst.com</a>
  </nav>
</footer>
<footer className="footer sm:footer-horizontal border-t-1 border-grey bg-black text-white footer-center text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
     </footer>
     <ToastContainer />
    </>
  )
}

export default App
