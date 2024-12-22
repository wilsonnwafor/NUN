import React, { useState } from "react";
// import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/InputOTP";

export default function Confirm_code() {
  const [value, setValue] = useState("");

  return (
    <>
      <main className="auth-main h-screen text-center content-center ">
        <select
          name=""
          id=""
          className="bg-transparent text-cyan-50 outline-none mb-10 max-md:mb-3 max-md:text-sm"
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

          <form
            action=""
            className=" border-2 w-2/5 h-80 rounded-xl  content-center max-md:w-11/12 max-md:h-48 max-md:text-xs max-md:m-auto"
          >
            <header className="mb-10 max-md:mb-3">
              <a className=" text-teal-400 cursor-pointer">SIGN UP</a>{" "}
              <b className="text-white ">/ </b>{" "}
              <a className=" text-teal-600 cursor-pointer">LOGIN</a>
            </header>

            <h1 className="text-teal-100">INPUT YOUR COFIRMATION CODE</h1>

            <div className="space-y-2 text-center ">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup className=" m-auto">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className=" text-sm">
                {value === "" ? (
                  <p>Enter your one-time password.</p>
                ) : (
                  <p>You entered: {value}</p>
                )}
              </div>
            </div>

            <div className="text-teal-100">
              <p className=" max-md:w-10/12 max-md:m-auto ">
                {" "}
                Almost there.. Please enter the verification code we sent your
                email
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
