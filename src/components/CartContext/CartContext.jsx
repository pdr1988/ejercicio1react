import React, { useState } from 'react'
import { createContext } from 'react';

export const cartContext = createContext();

export default function CartContext({children}) {
    const [cart, setCart] = useState();
    function addItem(item, quatify){

    }
    function removeItem(item){
        
    }
    function clear(){
        setCart([]);
    }
    const isInCart= (item)=> {
        
    }
  return (
    <div>
        <cartContext.Provider value ={{addItem, removeItem, clear, isInCart}}>{children}</cartContext.Provider>
    </div>
  )
}
