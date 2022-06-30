import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


const ItemDetail = ({producto}) => {
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

                <Button variant="contained" color="success">
                    COMPRAR AHORA
                </Button>
              
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






