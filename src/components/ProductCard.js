import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: '#f5f5f5', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price} - {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {product.stock} | Rating: {product.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;