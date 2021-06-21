const details = {
  adult: false,
  backdrop_path: '/irlfhYtHfhZuYpsq2LAoh308NFe.jpg',
  belongs_to_collection: null,
  budget: 25000000,
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 80,
      name: 'Crime',
    },
  ],
  homepage: '',
  id: 278,
  imdb_id: 'tt0111161',
  original_language: 'en',
  original_title: 'The Shawshank Redemption',
  overview:
    'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  popularity: 35.625,
  poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  production_companies: [
    {
      id: 97,
      logo_path: '/7znWcbDd4PcJzJUlJxYqAlPPykp.png',
      name: 'Castle Rock Entertainment',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '1994-09-23',
  revenue: 28341469,
  runtime: 142,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: 'Fear can hold you prisoner. Hope can set you free.',
  title: 'The Shawshank Redemption',
  video: false,
  vote_average: 8.7,
  vote_count: 19085,
};

// const url =
//   'https://api.themoviedb.org/3/movie/278/credits?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-US';

// https://api.themoviedb.org/3/person/155/combined_credits?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-US => actor film list
const delay = (ms) => {
  return new Promise((res) =>
    setTimeout(() => {
      res();
    }, ms)
  );
};
const imgS =
  'https://api.themoviedb.org/3/movie/278/images?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-US&include_image_language=null';
const mockDetails = delay(400).then(() => details);
const nnn = fetch(imgS)
  .then((res) => {
    return res.json();
  })
  .then((mock) => {
    // JSON.stringify(mock);
    // console.log(mock);
  });

export default mockDetails;
