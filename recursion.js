module.exports = function recursion(tree) {
  const result = [];
  function solve(currentTree, depth) {
    const currentDepth = depth || 0;
    if (currentTree.left || currentTree.right) {
      solve(currentTree.left, currentDepth + 1);
      solve(currentTree.right, currentDepth + 1);
    }
    if (!result[currentDepth]) { result[currentDepth] = []; }
    result[currentDepth].push(currentTree.value);
    return result;
  }
  return solve(tree);
};
