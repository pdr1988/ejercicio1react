import React from "react";
import './ItemListContainer.css'



const ItemListContainer = ({mensaje, user, compra, precio}) => {
    
    return(
        <div>
            <p className="msj">{mensaje}</p>
            <p className="msj">{user}</p>
            <p className="msj">{compra}</p>
            <p className="msj">{precio}</p>
        </div>
    
    )
    
}
export default ItemListContainer;