import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetMainData {
  category: string;
  lang: string;
  page: string;
  query?: string;
}

const getMainData = createAsyncThunk(
  'mainData/setMainData',
  async (props: IGetMainData) => {
    try {
      const { category, lang, page, query } = props;
      const queryFromForm = query !== '' ? `&query=${query}` : '';
      const baseUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&page=${page}`;
      const searchUrl = `https://api.themoviedb.org/3/search/movie/?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&${queryFromForm}&page=${page}`;

      if (query?.length) {
        try {
          const response = await axios.get(searchUrl);
          return response.data;
        } catch (error) {
          console.error('getMainData_search', error);
        }
        console.log(searchUrl, 'searchUrl');
        console.log(baseUrl, 'baseUrl');
      }
      console.log(searchUrl, 'searchUrl');
      console.log(baseUrl, 'baseUrl');
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getMainData', error);
    }
  }
);

export default getMainData;
