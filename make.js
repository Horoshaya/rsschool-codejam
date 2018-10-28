export default function make(...makeArgs) {
  const solveArray = [];
  function solve(...solveArgs) {
    if (typeof (solveArgs[0]) === 'function') {
      return solveArray.reduce(...solveArgs);
    }
    solveArray.push(...solveArgs);
    return solve;
  }
  return solve(...makeArgs);
}
