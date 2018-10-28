export default function sumOfOther(array) {
  const sumArray = [];
  array.forEach((element) => {
    sumArray.push(array.reduce((a, b) => a + b) - element);
  });
  return sumArray;
};
