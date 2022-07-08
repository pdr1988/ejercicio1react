import './App.css';
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart';
import CartContext from './components/CartContext/CartContext';
/* import TestEvent from './components/TestEvent/TestEvent';
 */




function App() {

  return (
    <CartContext>
      <div>
     
        <BrowserRouter>
          <Navbar/>
           <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>

{/*             <TestEvent/>
 */}        
            
            </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </CartContext>
  );
}
export default App;