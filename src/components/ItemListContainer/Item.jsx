import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Item.css'


export default function item({producto}) {
  return (
    <Card sx={{ maxWidth: 250 }} >
    <CardMedia
      component="img"
      height="200"
      image={producto.picURL}
      alt="green iguana"
    />
    <CardContent  height="50">
      <Typography gutterBottom variant="h6" component="div">
        {producto.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {producto.desc}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        PRECIO LISTA: ${producto.precio}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
        <Link to={`/item/${producto.id}`} className="buton-add">
        Ver detalle del producto
        </Link>
      </Button>
    </CardActions>
  </Card>
  )
}



