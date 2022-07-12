import React, { useState } from 'react'
import { createContext } from 'react';

export const cartContext = createContext();

export default function CartContext({children}) {
    let [cart, setCart] = useState([]);
    let [refresh, setRefresh] = useState(true)   

    function addItem(item, quantify){
      
      const cartaux = cart.find((itemaux)=> itemaux.id == item.id)
      const aux = Object.assign(item, {"cantidad": quantify})
      if (cartaux == undefined){
        cart.push(aux)
        alert("Se agregaron " + JSON.stringify(quantify) + " " + JSON.stringify(item.name) )

      }
      else {
      alert("Producto existente")
      }
    }
    function removeItem(item){
           
      console.log(item.row.id)
      const cartaux = cart.find((itemaux)=> itemaux.id == item.id)

      const index = cart.indexOf(cartaux);
      cart.splice(index,1);
      setRefresh(!refresh)
      return 
 
    }
    function clear(){
        setCart([]);
        setRefresh(!refresh)
    }
    const isInCart= (item)=> {
        
    }
  return (
    <div>
        <cartContext.Provider value ={{addItem, removeItem, clear, isInCart, cart}}>{children}</cartContext.Provider>
    </div>
  )
}
