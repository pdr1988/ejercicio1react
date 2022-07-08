import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';
import Itemcount from '../Itemcount/Itemcount';
import { useState } from 'react';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { Link } from 'react-router-dom';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };
  
  const CustomButton = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;


const ItemDetail = ({producto}) => {
const [addCart, setAddCart] = useState(true);

  function onAdd(count){


/*     alert("AGREGO " +  count + " " + producto.name + " AL CARRITO")
 */    setAddCart(false);
  
  }
  return (

<Paper
      sx={{
        p: 15,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 10,
          backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }} 
    >
      <Grid container spacing={2} >
        <Grid item >
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={producto.picURL}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {producto.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {producto.desc}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {producto.id}             
              </Typography>
            </Grid>
            <Grid item>
                {addCart?
                    (<Itemcount stock={producto.stock} initial = {1} onAdd={onAdd}/>)
                 : 
                    (<CustomButton component="span">
                        <Link to={`/cart`} >
                          FINALIZAR COMPRA
                        </Link>
                    </CustomButton>)
                } 
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${producto.precio}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>











  )
}

export default ItemDetail






