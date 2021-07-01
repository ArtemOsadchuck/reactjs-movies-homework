import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IFetchMainData {
  category: string;
  lang: string;
  page: string;
  query?: string;
}

const fetchMainData = createAsyncThunk(
  'mainData/setMainData',
  async (props: IFetchMainData) => {
    const { category, lang, page, query } = props;
    const queryFromForm = query !== '' ? `&query=${query}` : '';

    const baseUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&page=${page}`;

    const searchUrl = `https://api.themoviedb.org/3/search/movie/?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&${queryFromForm}&page=${page}`;

    if (!query?.length) {
      const response = await axios.get(baseUrl);
      return response.data;
    }
    const response = await axios.get(searchUrl);
    return response.data;
  }
);

export default fetchMainData;
