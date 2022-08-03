import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import sublogo from '../img/sublogo.png';



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    let {idCategory} = useParams();

    useEffect(()=>{
        
        const db = getFirestore ();
        
        if (!idCategory){
            const collectionRef = collection(db, 'items');
            getDocs(collectionRef).then((res)=>{
                const auxArray = res.docs.map((item)=> ({...item.data(), id: item.id}));
                setProductos(auxArray);
            })

        } else{
            const collectionRef = query(collection(db, 'items'), where('category', '==', idCategory));
            getDocs(collectionRef).then((res)=>{
            const auxArray = res.docs.map((item)=> ({...item.data(), id: item.id}));
            setProductos(auxArray);
            })
        }

    }, [idCategory]);
    
    return(
        <div>
            <div>
                <img src={sublogo} alt="consolas" className="sublogo"/>
            </div> 
            <div id="Listado">
                {productos && <ItemList productos={productos}/>} 
            </div>
        </div>
    )
}
export default ItemListContainer;