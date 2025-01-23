import { useState } from "react";
import "./App.css";
import "./components/auth/auth.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/auth/Landing";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
// import Comfirm_code from "./components/auth/Comfirm_code";
import Reset_pwd from "./components/auth/Reset_pwd";
import Setup_pwd from "./components/auth/Setup_pwd";
import Mytest from "./components/Mytest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        {/* <Route path="/Comfirm_code" element={<Comfirm_code />} /> */}
        <Route path="/Mytest" element={<Mytest />} />
      </Routes>

      <Reset_pwd />
      <Setup_pwd />
    </>
  );
}

export default App;
