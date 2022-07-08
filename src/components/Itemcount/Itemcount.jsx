import * as React from 'react';
import Box from '@mui/material/Box';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";

//desde linea 15 hasta 53 son propiedades del icono del carrito y del supraindice de cuenta de items sacadas de la pagina de material UI
const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 40px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #07f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
`;
//desde linea 55 hasta 90 son propiedades del boton 'agregar al carrito' sacadas de la pagina de material UI
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
  

const Itemcount = ({ stock, initial, onAdd}) => {
  const [count, setCount] = React.useState(initial);
  const sumar = ()=>{
    setCount(count +1);
  }

  const restar = ()=>{
    setCount(count -1);
  }
    return(
        <Box
        sx={{
          color: 'action.active',
          display: 'flex',
          flexDirection: 'column',
          '& > *': {
            marginBottom: 2,
          },
          [`& .${badgeUnstyledClasses.root}`]: {
            marginRight: 4,
          },
        }}
      >
        <div>
          <StyledBadge badgeContent={count}>
  
            <ShoppingCartIcon/>
             
          </StyledBadge>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={restar} 
              disabled={count === initial}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={sumar} 
              disabled={count === stock}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <div>

            <Stack spacing={2} direction="row">
                <CustomButton component="span"
                 onClick={() => {
                    onAdd(count);
                  }}>AGREGAR AL CARRITO
                </CustomButton>
      
            </Stack>
        </div>
        
      </Box>
        
    )    
}

export default Itemcount;


