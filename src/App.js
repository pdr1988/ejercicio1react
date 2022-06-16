import './App.css';
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
    <Navbar/>
    <ItemListContainer mensaje = "HOLA" user= "CODERHOUSE" compra="zapatillas" precio ="10000"/>
    </div>
  );
}
export default App;