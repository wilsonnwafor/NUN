import { usePrivy } from "@privy-io/react-auth";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const { ready, authenticated, login } = usePrivy()
  const navigate = useNavigate();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);  

  useEffect(()=>{
    console.log("Auth=>",authenticated)
    console.log("Ready=>",ready)
  },[])
  useEffect(()=>{
    console.log("Auth=>",authenticated)
    console.log("Ready=>",ready)
  },[authenticated, ready])

  return (
    <>
        <main className="h-screen text-center content-center">
          <select
            name=""
            id=""
            className="bg-transparent text-cyan-50 outline-none cursor-pointer max-md:text-xs max-md:m-10"
          >
            <option value="default">choose language</option>
            <option value="eng">English</option>
          </select>
          <img
            src="src/assets/nun-logo2.png"
            alt=""
            className="w-2/4 m-auto max-md:w-3/4"
          />
          {/* <Link to="/Signup">
            <button className="text-teal-50 border-2  border-teal-green rounded-xl hover:bg-teal-green  w-28 p-1 m-3 max-md:p-0 max-md:w-24">
              {" "}
              SIGN UP
            </button>
          </Link> */}
          <Link>
            <button 
              className="text-teal-50 border-2 border-teal-green rounded-xl hover:bg-teal-green w-28 p-1 m-3 max-md:p-0 max-md:w-24"
              disabled={disableLogin} onClick={login}
            >
              {" "}
              LOGIN
            </button> 
          </Link>
        </main>

    </>
  );
}
