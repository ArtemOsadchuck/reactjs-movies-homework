import axios from 'axios';

const fetchPopularMovies = (e = '1') => {
  //   const url = axios.get()`https://api.themoviedb.org/3/movie/popular?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-US&page=${e}`;
  return async (dispatch: any) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-US&page=1}`
    );
    const result = await response.data;
    return result;
  };
};

export default fetchPopularMovies;
