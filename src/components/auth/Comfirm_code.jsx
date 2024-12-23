import React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Comfirm_code() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <main className=" h-screen text-center content-center ">
        <select
          name=""
          id=""
          className="bg-transparent text-cyan-50 outline-none mb-10 cursor-pointer max-md:text-xs max-md:mb-3"
        >
          <option value="default">choose language</option>
          <option value="eng">English</option>
        </select>

        <div className="flex w-5/6 m-auto  max-md:block">
          <img
            src="src/assets/nun-logo2.png"
            alt=""
            className="w-2/4 m-auto max-md:w-3/4 "
          />

          <form
            action=""
            // className="max-md:w-10/12 max-md:h-48 max-md:text-xs "
          >
            <header className="mb-5 text-sm max-md:mb-3 max-xs:text-xs">
              <a className=" text-teal-200 cursor-pointer">SIGN UP</a>{" "}
              <b className="text-white ">/ </b>{" "}
              <a className=" text-teal-500 cursor-pointer">LOGIN</a>
            </header>

            <h3 className="text-teal-300 text-base max-md:text-sm max-sm:text-xs">
              INPUT YOUR COMFIRMATION CODE
            </h3>
            <p className="text-teal-300 text-xs px-10 max-md:px-5 max-sm:px-3">
              Almost there.. please enter the verification code sent to your
              email
            </p>

            <div className="space-y-2">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup className="otp-ctn m-auto">
                  <InputOTPSlot index={0} className="otp-inp" />
                  <InputOTPSlot index={1} className="otp-inp" />
                  <InputOTPSlot index={2} className="otp-inp" />
                  <InputOTPSlot index={3} className="otp-inp" />
                  <InputOTPSlot index={4} className="otp-inp" />
                  <InputOTPSlot index={5} className="otp-inp" />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-teal-600 text-sm max-md:text-xs">click to resend code</p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
