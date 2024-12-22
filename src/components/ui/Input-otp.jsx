// App.js or pages/index.js (for Next.js)
import React, { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./components/InputOTP";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Enter OTP</h1>
      <InputOTP
        value={value}
        onChange={(e) => setValue(e)}
        length={6} // Number of OTP slots
        renderSeparator={<InputOTPSeparator />}
        renderSlot={(props, index) => <InputOTPSlot {...props} index={index} />}
      />
      <p className="mt-4">OTP Value: {value}</p>
    </div>
  );
}
