const starships = [];
// fetch('https://swapi.dev/api/people/1/')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.name);
//     return data;
//   })
//   .then((data => {
//     document.getElementById('character-name').textContent = data.name;
//     return data;
//   })
//   .then(data => {
//     data.starships.forEach(element => {
//       fetch(element)
//         .then(response => response.json())
//         .then(shipData => {
//           starships.push(shipData.name)
//         })
//     });
//     console.log(starships);
//   }))
//   .catch(error => console.log(error));

const getPerson = async() => {
  const response = await fetch('https://swapi.dev/api/people/1/');

  if (response.status > 199 && response.status < 300) {
    const data = await response.json();
    return data;
  } else if (response.status === 404){
    throw new Error('People resource not found.');
  } else {
    throw new Error('Cannot process people request.')
  }
};

const getShips = async (data) => {
  console.log(data.starships);
  
  data.starships.forEach((url) => {
    const response = async() => {
      await fetch(url);

      const data = await response.json();
      console.log(data);
      return data;
      

      // if (response.status > 199 && response.status < 300) {
      //   const data = await response.json();        
      //   starships.push(data.name)

      //   //return data;
      // } else if (response.status === 404){
      //   throw new Error('Starship resource not found.');
      // } else {
      //   throw new Error('Cannot starship  process request.')
      // }
    }
    //console.log(starships);
  })
  //return starships;
};

const printShipsOnPage = (data) => {
  starships.forEach((ship) => {
    document.getElementById('ships').innerHTML += `<span> ${ship} </span>`
  })
}

getPerson()
//.then( data => console.log(data))
.then( data => getShips(data))
//.then( starships => printShipsOnPage(starships));