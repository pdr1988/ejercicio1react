import './App.css';
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Itemcount from "./components/Itemcount/Itemcount";

function App() {
  function onAdd(count){
    alert("AGREGO " + count + " PRODUCTOS AL CARRITO")

  }
  return (
    <div>
      <Navbar/>
      <ItemListContainer mensaje = "HOLA" user= "CODERHOUSE" compra="zapatillas" precio ="10000"/>
      <Itemcount stock="5" initial = "1" onAdd={onAdd}/>
    </div>
  );
}
export default App;