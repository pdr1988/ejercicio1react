import React from 'react'
import { cartContext } from './CartContext/CartContext';
import { useContext } from 'react';

import Button from '@mui/material/Button';

import {
  DataGridPro
} from '@mui/x-data-grid-pro';


export default function Cart() {
  const {cart, removeItem, clear} = useContext(cartContext);
  
  console.log(cart)
  const rows = []
  cart.map((producto) => (
    rows.push({id:producto.id, name: producto.name, cantidad:producto.cantidad, precio:producto.precio, precioTotal: (producto.cantidad*producto.precio)})

  ))

  const renderDetailsButton = (rows) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                removeItem(rows) 
                
                           
            }}
            >
                ELIMINAR 
            </Button>
        </strong>
    )
  }



  const columns = [
    { field: 'id', headerName: 'ID', width: 70, editable: true },
    { field: 'name', headerName: 'Name', width: 260, editable: true },
    { field: 'cantidad', headerName: 'Cantidad', width: 100, editable: true },
    {
      field: 'precio',
      headerName: 'Precio Unitario',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'precioTotal',
      headerName: 'Precio Total por Item',
      type: 'date',
      width: 220,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      renderCell: renderDetailsButton,
      getActions: () => [
  /*       <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
         <GridActionsCellItem icon={<DeleteIcon />} label="Delete"  onClick={console.log(rows.id)}/>,*/
      ],
    },
  ];
  
  console.log(rows)

  return (
    
          

    <div style={{ height: 400, width: '100%' }}>
        
          <DataGridPro
            rows={rows}            
            columns={columns}
          /> 
          <button onClick={clear}>BORRAR CARRITO</button>
    </div>
     
  )}








