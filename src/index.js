import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6h-OQpgXsbjVyAy3Jk4Y7mU5VrKUvXIU",
  authDomain: "shop-local-hawaii.firebaseapp.com",
  projectId: "shop-local-hawaii",
  storageBucket: "shop-local-hawaii.appspot.com",
  messagingSenderId: "132414023135",
  appId: "1:132414023135:web:410b297a1fb89ad23c506a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
