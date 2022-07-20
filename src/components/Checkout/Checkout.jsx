import React, { useState } from 'react'
import { cartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



export default function Checkout() {
   
    const {cart, removeItem, clear} = useContext(cartContext);
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();

    const pedido = {buyer: {name, phone, email}, carrito: cart, total:100}

    function handleClickComprar (){
        console.log(pedido)


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














