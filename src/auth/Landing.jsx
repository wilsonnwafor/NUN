import React from 'react'

export default function Landing() {
  return (
    <>
    <main className='bg-green-950 h-screen text-center content-center'>
        <select name="" id="" className='bg-transparent text-cyan-50 outline-none'>
            <option value="default">choose language</option>
            <option value="eng">English</option>
        </select>
      {/* <form action=""> */}
        <img src="src/assets/nun-logo2.png" alt="" className='w-2/4 m-auto'/>
        <button className='text-cyan-50 border-2 border-teal-200 rounded-xl w-28 p-1 m-3'>LOGIN</button>
         <button className='text-cyan-50 border-2 border-teal-200 rounded-xl w-28 p-1 m-3'>SIGN UP</button>
      {/* </form>         */}
    </main>

    </>
  ) 
}
