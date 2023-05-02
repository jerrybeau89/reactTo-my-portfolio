import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import App from './App';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
      <Header />
        <App />
      <Footer />
  </React.StrictMode>,
document.getElementById('root'));
