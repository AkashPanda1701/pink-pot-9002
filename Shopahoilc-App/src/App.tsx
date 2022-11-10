import React from 'react';
import './App.css';
import AllRoutes from './All-Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SingleProduct from './Pages/Product/SingleProduct';

/*
Dont make any changes to this file
*/

function App() {
  return (
    <>
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </>
  );
}

export default App;
