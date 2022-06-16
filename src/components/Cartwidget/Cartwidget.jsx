import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';




const Cartwidget = () => {
    function print() {
        console.log("producto agregado")
    }

    return(
        
        <IconButton size="x-large"  onClick={print}>
            <ShoppingCartIcon fontSize="x-large"/>
        </IconButton>
        
    )    
}
export default Cartwidget;
