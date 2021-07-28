import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGetFilmsWithActorList } from '../types';

const getFilmsWithActor = createAsyncThunk(
  'getFilmsWithActor/setFilmsWithActor',
  async ({ lang, id }: IGetFilmsWithActorList) => {
    try {
      const baseUrl = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}`;
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getFilmsWithActor', error);
    }
  }
);

export default getFilmsWithActor;
