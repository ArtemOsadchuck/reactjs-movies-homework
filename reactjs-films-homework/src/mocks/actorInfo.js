const responseTopRated = {
  adult: false,
  also_known_as: [
    'Morgan Porterfield Freeman Jr.',
    'Morgan J. Freeman',
    'مورغان فريمان',
    '모건 프리먼',
    'モーガン・フリーマン',
    'Морган Фриман',
    'Морган Фримен',
    'มอร์แกน ฟรีแมน',
    '摩根·弗里曼',
    'Μόργκαν Φρίμαν',
    'مورگان فریمن',
    'Морґан Фрімен',
  ],
  biography:
    "Morgan Porterfield Freeman, Jr. is an American actor, film director, and narrator. He is noted for his reserved demeanor and authoritative speaking voice. Freeman has received Academy Award nominations for his performances in Street Smart, Driving Miss Daisy, The Shawshank Redemption and Invictus and won in 2005 for Million Dollar Baby. He has also won a Golden Globe Award and a Screen Actors Guild Award. Morgan Freeman was born in Memphis, Tennessee, the son of Mayme Edna (née Revere) and Morgan Porterfield Freeman, Sr., a barber who died in 1961 from liver cirrhosis. Freeman was sent as an infant to his paternal grandmother in Charleston, Mississippi. He has three older siblings. Freeman's family moved frequently during his childhood, living in Greenwood, Mississippi; Gary, Indiana; and finally Chicago, Illinois. Freeman made his acting debut at age 9, playing the lead role in a school play. He then attended Broad Street High School, currently Threadgill Elementary School, in Mississippi. At age 12, he won a statewide drama competition, and while still at Broad Street High School, he performed in a radio show based in Nashville, Tennessee. In 1955, he graduated from Broad Street High School, but turned down a partial drama scholarship from Jackson State University, opting instead to work as a mechanic in the United States Air Force. Freeman moved to Los Angeles in the early 1960s and worked as a transcript clerk at Los Angeles Community College. During this period, he also lived in New York City, working as a dancer at the 1964 World's Fair, and in San Francisco, where he was a member of the Opera Ring music group. Freeman acted in a touring company version of The Royal Hunt of the Sun, and also appeared as an extra in the 1965 film The Pawnbroker. He made his off-Broadway debut in 1967, opposite Viveca Lindfors in The Nigger Lovers (about the civil rights era 'Freedom Riders'), before debuting on Broadway in 1968's all-black version of Hello, Dolly!, which also starred Pearl Bailey and Cab Calloway. Freeman was married to Jeanette Adair Bradshaw from October 22, 1967, until 1979. He married Myrna Colley-Lee on June 16, 1984. The couple separated in December 2007. Freeman's attorney and business partner, Bill Luckett, announced in August 2008 that Freeman and his wife are in the process of divorce. He has two sons from previous relationships. He adopted his first wife's daughter and the couple also had a fourth child. Freeman lives in Charleston, Mississippi, and New York City. He has a private pilot's license, which he earned at age 65, and co-owns and operates Madidi, a fine dining restaurant, and Ground Zero, a blues club, both located in Clarksdale, Mississippi. He officially opened his second Ground Zero in Memphis, Tennessee on April 24, 2008. Freeman has publicly criticized the celebration of Black History Month and does not participate in any related events, saying, 'I don't want a black history month. Black history is American history.' He says the only way to end racism is to stop talking about it, and he notes that there is no 'white history month'. Freeman once said on an interview with 60 Minutes' Mike Wallace: 'I am going to stop calling you a white man and I'm going to ask you to stop calling me a black man.",
  birthday: '1937-06-01',
  deathday: null,
  gender: 2,
  homepage: null,
  id: 192,
  imdb_id: 'nm0000151',
  known_for_department: 'Acting',
  name: 'Morgan Freeman',
  place_of_birth: 'Memphis, Tennessee, USA',
  popularity: 10.292,
  profile_path: '/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg',
};

// const url = `https://api.themoviedb.org/3/person/192?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=en-US`;

const delay = (ms) => {
  return new Promise((res) =>
    setTimeout(() => {
      res();
    }, ms)
  );
};
const mock = delay(1000).then(() => responseTopRated);

export default mock;
