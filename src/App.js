import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '481aad22cemsh04ecc64e604b285p145327jsn99ad2c97683d',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', options);
      const data = await response.json();
      setMovies(data || []);
      setFilteredMovies(data || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
      setFilteredMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredMovies(movies);
      return;
    }
    
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Navbar onSearch={handleSearch} searchTerm={searchTerm} />
        <MovieList movies={filteredMovies} loading={loading} />
      </div>
    </ThemeProvider>
  );
}

export default App;