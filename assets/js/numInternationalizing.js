const internationalize = (number) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'GBP',
  }).format(number);
};

export default internationalize;
