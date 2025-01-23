// import React from "react";

// import { InputOTPGroup, InputOTP, InputOTPSlot } from "../ui/input-otp.jsx";



// import { Link } from "react-router-dom";
// import { InputOTP } from '../../ui/input-otp'

// export default function Comfirm_code() {
//   const [value, setValue] = React.useState("");
//   return (
//     <>
//       <main className=" h-screen text-center content-center ">
//         <select
//           name=""
//           id=""
//           className="bg-transparent text-cyan-50 outline-none mb-10 cursor-pointer max-md:text-xs max-md:mb-3"
//         >
//           <option value="default">choose language</option>
//           <option value="eng">English</option>
//         </select>

//         <div className="flex w-5/6 m-auto  max-md:block">
//           <img
//             src="src/assets/nun-logo2.png"
//             alt=""
//             className="w-2/4 m-auto max-md:w-3/4 "
//           />

//           <form
//             action=""
//             // className="max-md:w-10/12 max-md:h-48 max-md:text-xs "
//           >
//                <header className="mb-10 max-md:mb-5 max-md:text-xs">
//               <Link
//                 to="/Signup"
//                 className=" text-pri-green font-bold cursor-default "
//               >
//                 SIGN UP
//               </Link>
//               <span className="text-teal-200 "> / </span>
//               <Link to="/Login" className=" text-teal-green  cursor-pointer">
//                 LOGIN
//               </Link>
//             </header>

//             <h3 className="text-pri-green text-base max-md:text-sm max-sm:text-xs">
//               INPUT YOUR COMFIRMATION CODE
//             </h3>
//             <p className="text-pri-green text-xs px-10 max-md:px-5 max-sm:px-3">
//               Almost there.. please enter the verification code sent to your
//               email
//             </p>

//             <div className="space-y-2">
//               <InputOTP
//                 maxLength={6}
//                 value={value}
//                 onChange={(value) => setValue(value)}            
//               >
//                 <InputOTPGroup className="otp-ctn m-auto">
//                   <InputOTPSlot index={0} className="otp-inp" />
//                   <InputOTPSlot index={1} className="otp-inp" />
//                   <InputOTPSlot index={2} className="otp-inp" />
//                   <InputOTPSlot index={3} className="otp-inp" />
//                   <InputOTPSlot index={4} className="otp-inp" />
//                   <InputOTPSlot index={5} className="otp-inp" />
//                 </InputOTPGroup>
//               </InputOTP>
//               <p className="text-pri-green hover:text-teal-green text-sm max-md:text-xs cursor-pointer">click to resend code</p>
//             </div>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// }
