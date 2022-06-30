import React from 'react';
import Item from './Item';
import './Itemlist.css';

export default function ItemList({productos}) {
  return (
    
      <div className='Itemgral' >
        
          {productos.map((producto) => (
            

            <div key={producto.id} className='Itemlistado'> 
                <Item producto={producto}/>
            </div>
            )
        )}
        </div>
    
  );
}
