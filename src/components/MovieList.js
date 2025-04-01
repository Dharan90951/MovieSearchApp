import React from 'react';
import { Grid, CircularProgress, Box } from '@mui/material';
import MovieCard from './MovieCard';

function MovieList({ movies, loading }) {
  const defaultMovies = [
    {
      id: 'default-1',
      title: 'No Movies Found',
      poster_path: '/placeholder.jpg',
      overview: 'Try searching for different movies'
    }
  ];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  const moviesToDisplay = movies && movies.length > 0 ? movies : defaultMovies;

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {moviesToDisplay.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;