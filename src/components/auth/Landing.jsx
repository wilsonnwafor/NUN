import React from "react";
import { Button } from "../ui/button";

export default function Landing() {
  return (
    <>
      <body>
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
          <button className="text-cyan-50 border-2 border-teal-50 rounded-xl w-28 p-1 m-3 max-md:p-0 max-md:w-24">
            LOGIN
          </button>
          <button className="text-cyan-50 border-2 border-teal-50 rounded-xl w-28 p-1 m-3 max-md:p-0 max-md:w-24">
            SIGN UP
          </button>

          <Button> Oliver </Button>
        </main>
      </body>
    </>
  );
}
