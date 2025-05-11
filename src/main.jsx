import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import process from "process";
import { UserProvider } from './context/UserContextApi.jsx';
// import { Buffer } from 'buffer';


// Make Buffer, process, and global available in browser
// if (!window.Buffer) window.Buffer = Buffer;
if (!window.process) window.process = process;
if (!window.global) window.global = window;


createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>
)
