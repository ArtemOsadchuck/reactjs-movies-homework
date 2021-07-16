import { ITopBilledCastProp } from '../TopBilledCast/TopBilledCast';

const sortCastBySix = (cast: Array<ITopBilledCastProp>) => {
  const castLength = 6;
  const resultCast = [...cast].sort((a, b) => {
    return a.popularity > b.popularity ? -1 : 1;
  });
  return resultCast.slice(0, castLength);
};

export default sortCastBySix;
