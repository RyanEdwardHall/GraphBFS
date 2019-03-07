const graph = {
  0: [1,4,5],
  1: [3,4],
  2: [1],
  3: [2,4],
  4: [],
  5: [],
  6: [5]
}

function bfs(start, end) {
  const queue = [];
  const searched = {};
  let found = false;
  queue.push(start)
  while (queue.length > 0) {
    let searching = queue.shift();
    searched[searching] = true;
    for (let node of graph[searching]) { 
      if (node === end) { return true }
      if (typeof searched[node] === 'undefined') {
        queue.push(node);
      }
    }
  }
  return false;
}

console.log(`expect bfs(0,6) to be false: ${bfs(0,6)}`);
console.log(`expect bfs(0,2) to be true: ${bfs(0,2)}`);
