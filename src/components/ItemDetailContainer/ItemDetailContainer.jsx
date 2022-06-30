import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [producto, setProducto] = useState({});
    let {idItem} = useParams();


    useEffect(()=>{
        let pago = new Promise((res,rej)=>{
           setTimeout(()=>{
            const mock =  [{id: 0, name: "HELADERA", precio:"1000", desc: "SAMSUNG NO FROST", category: "samsung" ,picURL: "https://rodo.com.ar/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/3/4/348870_1.jpg"},
            {id: 1, name: "MICROONDAS", precio:"500", desc: "ATMA 400W", category: "atma" ,picURL:"https://rodo.com.ar/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/3/5/352118__2.jpg"},
            {id: 2, name: "HORNO ELECTRICO", precio:"750", desc: "ATMA 1000W", category: "atma" ,picURL:"https://th.bing.com/th/id/OIP.y2UIBX46QGY6RkMX0PHhIwHaGA?pid=ImgDet&rs=1"},
            {id: 3, name: "TELEVISOR", precio:"200", desc: "TV 55 PULGADAS", category: "samsung" ,picURL:"https://th.bing.com/th/id/R.51e618f291fe6b1b815dfcb68f50e56c?rik=oMJW%2bhDALq%2b6tQ&pid=ImgRaw&r=0"},
            {id: 4, name: "AIRE ACONDICIONADO", precio:"2500", desc: "AIRE FRIO CALOR", category: "sanyo" ,picURL:"https://www.ortigozaequipamientos.com/1804-thickbox_default/aire-ac-split-2400-f-c-sanyo.jpg"}
        
        ]

            res(mock.find((item)=> item.id == idItem));
            //rej(404);
           }, 2000)
        });
        pago.then((resultado)=>{
            setProducto(resultado);

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
    }, [idItem]);
    
    
    
    return(
        <div>
            {loading && "Cargando..."}
            {error && "ERROR!!!"}
            {producto && <ItemDetail producto={producto}/>} 
        </div>
       
    
    )
    
}
export default ItemDetailContainer;