import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMYkBrJbTawHUTWivjrDqOD0ZZI600AHA",
  authDomain: "ecommerce-reactpa.firebaseapp.com",
  projectId: "ecommerce-reactpa",
  storageBucket: "ecommerce-reactpa.appspot.com",
  messagingSenderId: "891009463365",
  appId: "1:891009463365:web:7d2c22d594ca439e739f2c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
