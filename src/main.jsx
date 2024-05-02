import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";


import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyAXOMe-5k4YwCYTQmxTyk8BNg1eBIM8yoc",
  authDomain: "vivirfitness-1f4ad.firebaseapp.com",
  projectId: "vivirfitness-1f4ad",
  storageBucket: "vivirfitness-1f4ad.appspot.com",
  messagingSenderId: "559705081854",
  appId: "1:559705081854:web:10f04a4cf13b6495fe22af"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
