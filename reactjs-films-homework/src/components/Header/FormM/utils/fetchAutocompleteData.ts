const fetchAutoCompleteData = async (movieSearch: string, lang: string) => {
  if (movieSearch.length >= 1 && lang) {
    try {
      const queryFromForm = movieSearch !== '' ? `&query=${movieSearch}` : '';
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&${queryFromForm}&page=1`
      );
      const movies = await response.json();
      return movies.results;
    } catch (error) {
      console.error('fetchAutoCompleteData', error);
    }
  }
};

export default fetchAutoCompleteData;
