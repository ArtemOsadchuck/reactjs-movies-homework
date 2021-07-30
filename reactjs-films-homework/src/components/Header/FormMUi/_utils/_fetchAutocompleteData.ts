const fetchAutoCompleteData = async (movieSearch: string) => {
  if (movieSearch.length >= 1) {
    const queryFromForm = movieSearch !== '' ? `&query=${movieSearch}` : '';
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-EN&${queryFromForm}&page=1`
    );
    const movies = await response.json();
    return movies.results;
  }
};

export default fetchAutoCompleteData;
