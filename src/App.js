import './App.css';
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Itemcount from "./components/Itemcount/Itemcount";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import TestEvent from './components/TestEvent/TestEvent';
import Footer from './components/Footer/Footer';



function App() {
  function onAdd(count){
    alert("AGREGO " + count + " PRODUCTOS AL CARRITO")

  }
  return (
    <div style={{ background: '#2E3B55' }}>
      
           
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
{/*             <TestEvent/>
 */}        
            {/* <Itemcount stock={5} initial = {1} onAdd={onAdd}/> */}
            
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}
export default App;