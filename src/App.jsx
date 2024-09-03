import React from 'react';
import './App.css'
import Header from './components/Header';
import Routers from './components/Routers';
import Footer from './components/Footer';
import WhatsAppButton, { CallButton } from './components/WhatsAppButton';
const App = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
      <WhatsAppButton />               
      <CallButton />                 
    </>
  );
};

export default App;
