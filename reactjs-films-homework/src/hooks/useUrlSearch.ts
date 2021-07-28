import { useLocation } from 'react-router-dom';

const useUrlSSearch = (param: string) => {
  const urlSearch = new URLSearchParams(useLocation().search);
  const myParams = urlSearch.get(param);
  return myParams;
};

export default useUrlSSearch;
