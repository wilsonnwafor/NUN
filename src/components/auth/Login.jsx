import React, { useState } from "react";
import {
  FaAngleRight,
  FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaAnglesRight } from "react-icons/fa6";

export default function Login() {
  const [regInp, setRegInp] = useState({ email: "", pwd: "" });
  const [regPwd, setRegPwd] = useState(false);

  return (
    <>
      <main className=" h-screen text-center content-center ">
        <select
          name=""
          id=""
          className="bg-transparent text-cyan-50 outline-none mb-10 cursor-pointer max-md:text-xs max-md:mb-5"
        >
          <option value="default">choose language</option>
          <option value="eng">English</option>
        </select>

        <div className="flex w-5/6 m-auto  max-md:block">
          <img
            src="src/assets/nun-logo2.png"
            alt=""
            className="w-2/4 m-auto max-md:w-3/5"
          />

          <form
            action=""
          >
            <header className="mb-10 max-md:mb-5 max-md:text-xs">
            <Link to="/Signup" className=" text-teal-500 cursor-pointer">SIGN UP</Link >
              <b className="text-white ">/ </b>
              <Link to="/Login" className=" text-teal-200  cursor-pointer">LOGIN</Link>
            </header>
            {/* input block */}
            <p className="input-ctn flex bg-neutral-500 text-white justify-between px-3 h-8 items-center  max-md:h-7">
              <input
                onChange={(e) =>
                  setRegInp({ ...regInp, email: e.target.value })
                }
                value={regInp.email}
                type="email"
                placeholder="Email"
                className="bg-transparent w-full outline-none"
              />{" "}
              <FaAngleRight
                id={regPwd ? "drop" : ""}
                onClick={() => setRegPwd(!regPwd)}
                className="emailBtn text-white cursor-pointer   "
              />
            </p>
            <p
              className="input-ctn regPwd flex bg-neutral-500 text-white justify-between px-3 h-8 items-center max-md:h-7"
              id={regPwd ? "drop" : ""}
            >
              <input
                onChange={(e) => setRegInp({ ...regInp, pwd: e.target.value })}
                value={regInp.pwd}
                type="email"
                placeholder="Password"
                className="bg-transparent w-full outline-none"
              />{" "}
              <FaAngleRight className="text-white cursor-pointer" />
            </p>

                <fieldset >
                  <legend className="">or</legend>
                </fieldset>

            <button className="flex bg-white w-3/4 justify-between px-3 h-10 items-center m-auto rounded-xl border-2 border-teal-950 mt-1 max-md:h-8 max-md:text-xs">
              Sign up with wallet <FaWallet />{" "}
            </button>

            <h1>
              {regInp.email} {regInp.pwd}
            </h1>
          </form>
        </div>
      </main>
    </>
  );
}
