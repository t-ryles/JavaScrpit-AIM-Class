// function addTwoNumber(a, b) {
//   try {
//     const c = a + b;
//     console.log('Successful: ' + (c + 5));
//     //console.log('Successful: ' + (c += 5));
//   } catch(e) {
//     console.log('You screwed up and got the following error: ', e);
//   } finally {
//     console.log('This part exectues anyways.');
//   }
// }

// addTwoNumber(5 , 7)

const roads = [
  "Alice's House-Bob's Houses", "Alice's House-Cabin",
  "Alice's House-Post Offie", "Bob's House-Town Hall", 
  "Daria's House-Erine's House", "Daria's House-Town Hall", 
  "Erine's House-Grete's House", "Grete's House-Farm", 
  "Grete's House-Shop", "Marketplace-Shop", 
  "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
  console.log(`Entering buildGraph()`);
  console.log(`buildingGraph edges = ${edges}`);

  let graph = Object.create(null);
  console.log(graph);

  function addEdge(from, to) {
    console.log(graph);
    console.log(`addGraph from = ${from}, to = ${to}`);
    console.log(`is from in graph? ${from in graph}`); //Boolean

    if(from in graph) {
      console.log(`graph[from] = ${graph[from]}`);
      graph[from].push(to);
      console.log(`after push(to), graph[from] = ${graph[from]}`);
    } else {
      graph[from] = [to];
      console.log(`after graph[from] = [to], graph[from] = ${graph[from]}}`);
      console.log(graph);
    }
  }

  for(let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  console.log(graph);
}

const roadGraph = buildGraph(roads);