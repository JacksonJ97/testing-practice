const analyzeArray = (arr) => {
  const average = arr.reduce((sum, current) => sum + current, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
};

export default analyzeArray;
