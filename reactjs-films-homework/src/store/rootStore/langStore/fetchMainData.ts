import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategory = createAsyncThunk(
  'category/getCategory',
  async (category: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-EN&page=2`
    );
    console.log(category);
    return response.data;
  }
);

export interface IFetchMainData {
  category: string;
  lang: string;
  page: string;
}

const fetchMainData = createAsyncThunk(
  'mainData/setMainData',
  async (props: IFetchMainData) => {
    const { category, lang, page } = props;

    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&page=${page}`;
    const response = await axios.get(url);
    console.log(url);
    return response.data;
  }
);

export default fetchMainData;
