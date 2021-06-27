import data from './languagesData';

const lang = (language: string) => {
  let globalLang;

  switch (language) {
    case '':
      globalLang = data.EN;
      break;
    case 'EN':
      globalLang = data.EN;
      break;
    case 'RU':
      globalLang = data.RU;
      break;
    default:
      globalLang = data.EN;
      break;
  }
  return globalLang;
};

export default lang;
