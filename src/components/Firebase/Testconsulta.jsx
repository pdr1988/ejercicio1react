//@ts-check

import React, { useEffect } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useState } from 'react';

export default function Testconsulta() {
    const [item, setItem] = useState({});

    useEffect(()=>{

        const db = getFirestore ();
        const heladera = doc(db, 'items', 'hvsSAwe5piTgdunChtS6');
        getDoc(heladera).then((res)=>{
            
            /* const item = res.data();
            item.id = res.id */
            
            setItem ({...res.data(), id: res.id});
            console.log(item)
        })
    }, [])
  return (
    <div>
        {item && <>{JSON.stringify(item)}</>}
    </div>
  )
}
