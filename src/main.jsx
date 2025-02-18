import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { PrivyProvider } from '@privy-io/react-auth';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PrivyProvider
      appId={import.meta.env.VITE_PUBLIC_PRIVY_APP_ID}
      config={{
        loginMethods: ["email", "wallet"],
        appearance: {
          theme: "dark",
          logo: "/assets/nun-logo2.png"    
        },
      }}
    >
      <App />
    </PrivyProvider>
  </BrowserRouter>
)
