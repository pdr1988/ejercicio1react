import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    let {idItem} = useParams();


    useEffect(()=>{

        const db = getFirestore ();
        const productoAux = doc(db, 'items', idItem);
        getDoc(productoAux).then((res)=>{
                        
            setProducto ({...res.data(), id: res.id});

        })

    }, [idItem]);
    
    
    
    return(
        <div>
            {producto && <ItemDetail producto={producto}/>} 
        </div>
       
    
    )
    
}
export default ItemDetailContainer;