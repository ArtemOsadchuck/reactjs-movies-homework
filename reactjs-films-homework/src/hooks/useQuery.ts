import { useLocation } from 'react-router-dom';

const useQueryHash = (): string => {
  return useLocation().hash.replace(/#/g, '');
};

export default useQueryHash;
