import React from 'react'

export default function Signup() {
  return (
    <>
      <main className='bg-green-950 h-screen text-center content-center '>
      <select name="" id="" className='bg-transparent text-cyan-50 outline-none mb-10'>
            <option value="default">choose language</option>
            <option value="eng">English</option>
        </select>

        <div className='flex w-5/6 m-auto'>
       <img src="src/assets/nun-logo2.png" alt="" className='w-2/4 m-auto'/>      

       <form action="" className=' border-2 w-2/5 h-80 rounded-xl  content-center' >
        <header className='mb-10'>
            <a className=' text-teal-200 cursor-pointer'>SIGN UP</a> <b className='text-white '>/ </b>     <a  className=' text-teal-200 cursor-pointer'>LOGIN</a>
        </header>            
            <p className='flex bg-neutral-500 w-3/4 justify-between px-3 h-10 items-center m-auto rounded-xl border-2 border-teal-950'>
               <input type="email" placeholder='Email' className='bg-transparent w-full outline-none' /> <b>a</b>
            </p> 
            <button  className='flex bg-white w-3/4 justify-between px-3 h-10 items-center m-auto rounded-xl border-2 border-teal-950 mt-5'>Sign up with wallet <b>o</b></button>

        </form>     
        </div>

      
      </main>
    </>
  )
}
