import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import { Outlet } from "react-router-dom";
// import Location from './components/Location';
import './style.css'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header />
          <App/>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>,
document.getElementById('root'));
