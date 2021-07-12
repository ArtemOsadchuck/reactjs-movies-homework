const getPagesFromTotal = (totalPages: number, neededPages: number) => {
  const resultArr: string[] = [];
  for (let i = 1; i <= totalPages; i += 1) {
    resultArr.push(`${i}`);
  }
  return resultArr.slice(0, neededPages);
};

export default getPagesFromTotal;
