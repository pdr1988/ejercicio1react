//@ts-check

import React, { useEffect } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useState } from 'react';

export default function TestConsColec() {
    const [item, setItem] = useState({});

    useEffect(()=>{

        const db = getFirestore ();
        //trae toda la coleccion
        //const collectionRef = collection(db, 'items');
        //trae la coleccion con un filtro
        const collectionRef = query(collection(db, 'items'), where('categoria', '==', 'linea blanca'));
        getDocs(collectionRef).then((res)=>{
            const auxArray = res.docs.map((item)=> ({...item.data(), id: item.id}))
            setItem(auxArray)
         
        })
    }, [])
  return (
    <div>         {item && <>{JSON.stringify(item)}</>}   </div>
  )
}
