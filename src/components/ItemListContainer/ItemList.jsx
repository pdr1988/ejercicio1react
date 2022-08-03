import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from './Item';
import './Itemlist.css';
import sublogo from '../img/sublogo.png'



const Itemaux = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${sublogo})`,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));

export default function ItemList({productos}) {
  return (
   
        <div className='Itemgral' sx={{ backgroundColor:'#c9e9fc'}} >

          <Box sx={{ flexGrow: 1}} >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}    >

            {productos.map((producto) => (
              
                <Grid item xs={'auto'} sm={'auto'} md={'auto'} >
                  <Itemaux>
                    <Item producto={producto}/>
                  </Itemaux>
                </Grid>
              )
                        
            )}
          </Grid>
        </Box>

      </div>

  );
}



