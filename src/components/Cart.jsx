import * as React from 'react';
import { cartContext } from './CartContext/CartContext';
import { useContext } from 'react';
import './Cart.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {DataGridPro} from '@mui/x-data-grid-pro';
import { Link } from 'react-router-dom';


export default function Cart() {
  const {cart, removeItem, clear, preciototal} = useContext(cartContext);
  
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
      getActions: () => [],
    },
  ];
  
  let priceAux = preciototal();
  return (
    <div> 
      {rows[0] ? <div style={{ height: 400, width: '100%' }}>
        <DataGridPro
            rows={rows}            
            columns={columns}
        />

      <Stack spacing={2} direction="row">
        <div>
          <b className='total'>PRECIO TOTAL: ${priceAux}.00</b>
        </div>      
        <div className='button'> 
          <Button onClick={clear} variant="outlined" startIcon={<DeleteIcon />}>
            BORRAR CARRITO
          </Button>
        </div>
          <div className='button'>
            <Button variant="contained" endIcon={<SendIcon />}>
              <Link to={`/checkout`} >
                FINALIZAR COMPRA
              </Link>
            </Button>
          </div>
      </Stack>
    </div>
    :
      <Link to= "/"><span className='emptyCart'>Carrito vacio, click aqui para comprar</span></Link>}
     
  </div>
  )
}










