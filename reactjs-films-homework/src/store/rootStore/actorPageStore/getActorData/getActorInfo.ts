import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetActorInfo {
  id: string;
  lang: string;
}

const getActorInfo = createAsyncThunk(
  'getActorInfo/setActorInfo',
  async (props: IGetActorInfo, { rejectWithValue }) => {
    try {
      const { lang, id } = props;
      if (typeof id === 'string' && lang) {
        const baseUrl = `https://api.themoviedb.org/3/person/${id}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}`;
        const response = await axios.get(baseUrl);
        return response.data;
      }
    } catch (error) {
      console.error('getActorInfo', error);
      const statusCode = error.response.data.status_code;
      if (statusCode === 34 || 404) {
        console.error('getMovieDetailsData', error);
        rejectWithValue(error.response);
        throw new Error(error);
      }
    }
  }
);

export default getActorInfo;
