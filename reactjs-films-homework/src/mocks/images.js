const details = {
  id: 278,
  backdrops: [
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/irlfhYtHfhZuYpsq2LAoh308NFe.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.384,
      vote_count: 2,
      width: 1920,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.326,
      vote_count: 7,
      width: 1920,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/9Xw0I5RV2ZqNLpul6lXKoviYg55.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.318,
      vote_count: 3,
      width: 1920,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/6ihu1b2OA0aQY1gp95B7644qeyy.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.312,
      vote_count: 1,
      width: 1920,
    },
    {
      aspect_ratio: 1.779661016949152,
      file_path: '/avedvodAZUcwqevBfm8p4G2NziQ.jpg',
      height: 1180,
      iso_639_1: null,
      vote_average: 5.264,
      vote_count: 8,
      width: 2100,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/gNCqY2Y6e3wV8cnSVy4Xqpdl6oE.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.246,
      vote_count: 2,
      width: 1920,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/1c7EVzpMudkPRwqYU1vjrUnxXX2.jpg',
      height: 720,
      iso_639_1: null,
      vote_average: 5.246,
      vote_count: 2,
      width: 1280,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/72rRSPAZ82p3KXoGLz2ddTioMQl.jpg',
      height: 2160,
      iso_639_1: null,
      vote_average: 5.246,
      vote_count: 2,
      width: 3840,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/gZMgEUYbh0DIBNaRJT0ofxLDJ5T.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.246,
      vote_count: 2,
      width: 1920,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/odJPRSRkfc5M1HpBoIAFe46RlfI.jpg',
      height: 720,
      iso_639_1: null,
      vote_average: 5.172,
      vote_count: 1,
      width: 1280,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/ckaOdcJFlX8KS6ZIwY556Bl97TQ.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 1920,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/rkIG2F13j9VXqs3Pez3yL9iXGBS.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 1920,
    },
  ],
  posters: [
    {
      aspect_ratio: 0.7012622720897616,
      file_path: '/yPGxk3cr5mAKxYAMroKdOyEVwzO.jpg',
      height: 1426,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 1000,
    },
    {
      aspect_ratio: 0.6666666666666666,
      file_path: '/rDqAuJxd1u2PoQ6yT7z8uGd6oCW.jpg',
      height: 900,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 600,
    },
    {
      aspect_ratio: 0.6666666666666666,
      file_path: '/jkgkQtCoNVmmKDzKk3ccQRFkAER.jpg',
      height: 1500,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 1000,
    },
    {
      aspect_ratio: 0.6666666666666666,
      file_path: '/u5hLebzUOBGbnPikIyxI1159lhc.jpg',
      height: 3000,
      iso_639_1: null,
      vote_average: 0,
      vote_count: 0,
      width: 200,
    },
  ],
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
const mockDetails = delay(800).then(() => details);
fetch(imgS)
  .then((res) => {
    return res.json();
  })
  .then((mock) => {
    // JSON.stringify(mock);
    // console.log(mock);
  });

export default mockDetails;
