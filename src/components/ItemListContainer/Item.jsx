import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function item({producto}) {
  return (
    <Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      height="250"
      image={producto.picURL}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {producto.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {producto.desc}
      </Typography>
      <Typography gutterBottom variant="h7" component="div">
        PRECIO LISTA: ${producto.precio}
      </Typography>
    </CardContent>
    <CardActions>
      {/*  <Button size="small">Share</Button>*/}
      <Button size="small">Ver detalle del producto</Button>
    </CardActions>
  </Card>
  )
}



