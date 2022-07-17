import React, { useState } from 'react'
import { createContext } from 'react';

export const cartContext = createContext();

export default function CartContext({children}) {
    let [cart, setCart] = useState([]);
    let [refresh, setRefresh] = useState(true)   

    function addItem(item, quantify){

      if(isInCart(item.id)){
        const productUpdate =cart.map((product)=> product.id ===item.id ? {...product, cantidad:product.cantidad + quantify} : product)
        setCart([...productUpdate])

      } 
      else{
        setCart([...cart, {...item, "cantidad":quantify}])
      }
      

    } 
    function removeItem(item){
           
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
    function isInCart (id) {
      return cart.some((product)=> product.id === id)
      
        
    }
  return (
    <div>
        <cartContext.Provider value ={{addItem, removeItem, clear, isInCart, cart}}>{children}</cartContext.Provider>
    </div>
  )
}
