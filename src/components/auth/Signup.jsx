import React, { useState } from "react";
import { FaAngleRight, FaWallet } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Comfirm_code from "./Comfirm_code";
{
  /* <Comfirm_code/> */
}
// import { FaAnglesRight } from "react-icons/fa6";

export default function Signup() {
  const [regInp, setRegInp] = useState({ email: "", pwd: "" });
  const [regPwd, setRegPwd] = useState(false);
  const [error, setError] = useState("");
  const navi = useNavigate();

  function signup_validator() {
    if (regInp.pwd == "") {
      setError("Enter a password");
    } else if (regInp.pwd.length <= 8) {
      setError("password must be 8 characters");
    } else {
      navi("/Comfirm_code");
    }
  }

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
            className="w-2/4 m-auto max-md:w-3/4"
          />

          <form action="">
            <header className="mb-10 max-md:mb-5 max-md:text-xs">
              <Link to="/Signup" className=" text-teal-200 cursor-default">
                SIGN UP
              </Link>
              <b className="text-white ">/ </b>
              <Link to="/Login" className=" text-teal-500  cursor-pointer">
                LOGIN
              </Link>
            </header>

            {/* input blocks */}
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
                type="password"
                placeholder="Password"
                className="bg-transparent w-full outline-none"
              />{" "}
              <FaAngleRight
                onClick={(e) => {
                  signup_validator();
                }}
                className="text-white cursor-pointer"
              />
            </p>
            <div className="text-red-600 text-xs">{error}</div>
            <fieldset>
              <legend className="">or</legend>
            </fieldset>

            <button className="flex bg-white w-3/4 justify-between px-3 h-10 items-center m-auto rounded-xl border-2 border-teal-950 mt-1 max-md:h-8 max-md:text-xs">
              Sign up with wallet <FaWallet />{" "}
            </button>

            {/* <h1>
              {regInp.email} {regInp.pwd}
            </h1> */}
          </form>
        </div>
      </main>
    </>
  );
}
