function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  let neighbors = [];
  let directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  for (const direction of directions) {
    let curRow = row + direction[0];
    let curCol = col + direction[1];
    if (curRow >= 0 && curRow < graph.length && curCol >= 0 && curCol < graph[0].length && graph[curRow][curCol] === 1) {
      neighbors.push([curRow, curCol]);
    }
  }

  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add([row, col].join(','));
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let curNode = stack.pop();
    // DO THE THING (increment size by 1)
    size += 1;
    // Then push all the UNVISITED neighbors on top of the stack
    for (const neighbor of getNeighbors(curNode[0], curNode[1], graph)) {
      if (!(visited.has(neighbor.join(',')))) {
        visited.add(neighbor.join(','));
        stack.push(neighbor);
      }
    }
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  // return size
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];
