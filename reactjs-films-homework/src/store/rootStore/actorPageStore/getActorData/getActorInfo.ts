import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetActorInfo {
  id: string;
  lang: string;
}

const getActorInfo = createAsyncThunk(
  'getActorInfo/setActorInfo',
  async (props: IGetActorInfo) => {
    try {
      const { lang, id } = props;
      const baseUrl = `https://api.themoviedb.org/3/person/${id}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}`;
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getActorInfo', error);
    }
  }
);

export default getActorInfo;
