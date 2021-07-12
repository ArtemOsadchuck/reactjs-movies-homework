const getRevenueFormat = (revenue: number) => {
  if (revenue) {
    return revenue
      .toString()
      ?.match(/.{1}/g)
      ?.reverse()
      .join('')
      ?.match(/.{1,3}/g)
      ?.map((el: string) => {
        return el.split('').reverse().join('');
      })
      .reverse()
      .join(' ');
  }
};

export default getRevenueFormat;
