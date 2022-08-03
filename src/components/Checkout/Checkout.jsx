import React, { useState } from 'react'
import { cartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { getFirestore, collection, addDoc } from 'firebase/firestore';




export default function Checkout() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
   
    const {cart, preciototal} = useContext(cartContext);
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    
    function handleClickComprar (){
        const pedido = {buyer: {name, phone, email}, carrito: cart, date: hoy.toISOString(), total: preciototal()}
        const db = getFirestore();
        const collectionRef = collection(db, 'pedido');
        addDoc(collectionRef, pedido).then(({id})=>alert(id))
    }
  return (
    <div>
    <h3>INGRESE DATOS PARA FINALIZAR COMPRA</h3>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e)=>setName(e.target.value)} id="name" label="Nombre" variant="outlined" />
      <TextField onChange={(e)=>setPhone(e.target.value)} id="name" label="Telefono" variant="outlined" />
      <TextField onChange={(e)=>setEmail(e.target.value)} id="name" label="Email" variant="outlined" />

    </Box>

    <br />
    <Stack direction="row" spacing={2}>
      <Button onClick={handleClickComprar} variant="contained" endIcon={<SendIcon />}>
        ENVIAR
      </Button>
    </Stack>
    </div>
  )
}


