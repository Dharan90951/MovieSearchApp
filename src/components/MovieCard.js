import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function MovieCard({ movie }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={movie.image || 'https://via.placeholder.com/500x750?text=No+Image+Available'}
        alt={movie.title || 'Movie Title'}
        sx={{ height: 500, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {movie.title || 'Unknown Title'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {movie.year || 'N/A'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.rating || 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;