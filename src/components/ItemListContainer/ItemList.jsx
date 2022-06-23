import React from 'react';
import Item from './Item';
export default function ItemList({productos}) {
  return (
    
      <div>
        {productos.map((producto) => (
            

            <div key={producto.id}> 
                {/*  id {producto.id} nombre {producto.name} precio {producto.precio}*/}
                <Item producto={producto}/>
            </div>
            )
        )}
        </div>
    
  );
}