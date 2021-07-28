import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getActorPhotos = createAsyncThunk(
  'getActorPhotos/setActorPhotos',
  async (id: string) => {
    try {
      const baseUrl = `https://api.themoviedb.org/3/person/${id}/images?api_key=8fa5bc53bb4a09dfb6560253edf33030`;
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getActorPhotos', error);
    }
  }
);

export default getActorPhotos;
