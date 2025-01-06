import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Reset_pwd() {
  const [regInp, setRegInp] = useState({ email: "", pwd: "" });

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

          <form className="h-72 max-md:h-48">
            <header className=" text-pri-green text-xl font-medium mb-14 max-md:mb-5 max-md:text-xs">
              RESET PASSWORD
            </header>
            {/* input block */}
            <p className="input-ctn flex text-white justify-between px-3 h-10 items-center  max-md:h-8">
              <input
                onChange={(e) =>
                  setRegInp({ ...regInp, email: e.target.value })
                }
                value={regInp.email}
                type="email"
                placeholder="Enter Email you used to sign up"
                className="bg-transparent w-full outline-none"
              />{" "}
              <FaAngleRight className="emailBtn text-white cursor-pointer   " />
            </p>

            <h1>{/* {regInp.email} {regInp.pwd} */}</h1>
          </form>
        </div>
      </main>
    </>
  );
}
