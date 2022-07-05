import './App.css';
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart';
/* import { createContext } from 'react';
import { useState } from 'react'; */
/* import TestEvent from './components/TestEvent/TestEvent';
 */

/* export const cartContext = createContext();
 */

function App() {
/*   const [darkMode, setDarkMode] = useState(false);
 */

  return (
    <div /* style={{ background: '#2E3B55' }} */>
{/*       <cartContext.Provider value={{ darkMode, setDarkMode }}>
 */}
           
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
{/*       </cartContext.Provider>
 */}    </div>

  );
}
export default App;