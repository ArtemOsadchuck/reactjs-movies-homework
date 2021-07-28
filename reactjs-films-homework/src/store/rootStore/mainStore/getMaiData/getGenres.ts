import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getGenres = createAsyncThunk('genre/getGenre', async (lang: string) => {
  try {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('getGenres', error);
  }
});

export default getGenres;
