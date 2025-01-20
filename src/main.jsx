import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { PrivyProvider } from '@privy-io/react-auth';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PrivyProvider
      appId='cm4r4bh4402sgg4f05rg4z1e9'
      config={{
        loginMethods: ["email", "wallet"],
        appearance: {
          theme: "dark",
          logo: "src/assets/nun-logo2.png"    
        },
      }}
    >
      <App />
    </PrivyProvider>
  </BrowserRouter>
)
