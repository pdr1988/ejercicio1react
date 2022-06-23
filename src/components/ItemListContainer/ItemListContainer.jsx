import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'



const ItemListContainer = ({mensaje, user, compra, precio}) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        let pago = new Promise((res,rej)=>{
           setTimeout(()=>{
            res([{id: 0, name: "HELADERA", precio:"1000", desc: "SAMSUNG NO FROST", picURL: "https://rodo.com.ar/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/3/4/348870_1.jpg"},
            {id: 1, name: "MICROONDAS", precio:"500", desc: "ATMA 400W", picURL:"https://rodo.com.ar/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/3/5/352118__2.jpg"},
            {id: 2, name: "HORNO ELECTRICO", precio:"750", desc: "ATMA 1000W", picURL:"https://th.bing.com/th/id/OIP.y2UIBX46QGY6RkMX0PHhIwHaGA?pid=ImgDet&rs=1"}]);
            //rej(404);
           }, 2000)
        });
        pago.then((resultado)=>{
            setProductos(resultado);
            setLoading (false);
        })
        .catch((error)=>{
            console.log(error);
            setError(true);
            setLoading (false);
        })
        .finally(()=>{
            setLoading (false);

        })
    }, []);
    
    
    
    return(
        <div>
            {/*  <p className="msj">{mensaje}</p>
            <p className="msj">{user}</p>
            <p className="msj">{compra}</p>
            <p className="msj">{precio}</p>*/}
            {loading && "Cargando..."}
            {error && "ERROR!!!"}
            {productos && <ItemList productos={productos}/>}
            
        </div>
       
    
    )
    
}
export default ItemListContainer;