import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import {Toaster} from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <div>
          <Toaster position={'top-right'}/>
      </div>
  </StrictMode>,
)
