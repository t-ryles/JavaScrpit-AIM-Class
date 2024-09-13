//? Create an object called myFamily. myFamily will have the properties lastName, city, state, and familyMembers. familyMembers will be an array of objects, each object being a family member. Create three family members in that array, which will have the following properties: firstName, profession, age, familyRole (Father, Mother, or Son/Daughter), and hobbies. There should be one mother and one father and either a son or daughter. Hobbies should be an array, and each family member should have three hobbies. For the child, the profession should be student. 

let myFamily = {
  lastName: 'Ryles',
  city: 'Lincoln',
  state: 'Nebraska',
  familyMembers: [
    {
      firstName: 'Sheryl',
      profession: 'Baker',
      age: '55',
      familyRole: 'Mother',
      hobbies: ['Travel','Volunteer','Gardening']
    },
    {
      firstName: 'Ronald',
      profession: 'Conrtractor',
      age: '61',
      familyRole: 'Father',
      hobbies: ['Fishing','Travel','Camping']
    },
    {
      firstName: 'Vincent',
      profession: 'Student',
      age: '23',
      familyRole: 'Son',
      hobbies: ['Swimming','Curling','Studying']
    }
  ]
}

//? Add a property of gradeLevel to the child
myFamily.familyMembers.forEach(
  memmber => {
    if (memmber.familyRole === 'Son' || memmber.familyRole == 'Daughter') {
      memmber.gradeLevel = '';
    }
  }
);
//console.log(myFamily);


//? Add a new hobby to the father’s list of hobbies
myFamily.familyMembers.forEach(
  memmber => {
    if (memmber.familyRole === 'Father') {
      memmber.hobbies.push('Swimming');
  
    }
  }
);
//console.log(myFamily);

//? Remove one of the mother’s hobbies
myFamily.familyMembers.forEach (
  memmber => {
    if (memmber.familyRole === 'Mother') {
      memmber.hobbies.pop();
    }
  }
)
//console.log(myFamily);

//? Sort the child’s hobbies
myFamily.familyMembers.forEach(
  memmber => {
    if (memmber.familyRole === 'Son' || memmber.familyRole == 'Daughter') {
      memmber.hobbies.sort();
    }
  }
);
//console.log(myFamily);


//? Add a property of zip code (two words) with a value of 68124 to the myFamily object (same level as city and state)
myFamily['zip code'] = '68124';
//console.log(myFamily);

//? Print out the keys for the myFamily object (hint: it will only print the top-level keys, not the nested keys)
console.log(Object.keys(myFamily));

//? Remove the state property on the myFamily object
delete myFamily.state
console.log(Object.keys(myFamily));

//? Change the value of the zip code property to 68134
myFamily['zip code'] = '68134'
//console.log(myFamily);

//? Create an anonymous function that copies the first n elements of an array into a new array.
// Use the following as your test array: [2, 9, 7, 6, 8, 4, 3, 5, 1];
// Expected output:
// For 1 element: [2]
// For 3 elements: [2, 9, 7]
// For 4 elements: [2, 9, 7, 6]

let arrNum = [2, 9, 7, 6, 8, 4, 3, 5, 1];

const copyFirstElements = function(n,arr) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    let element = arr[i];
    newArr.push(element);
  }
  console.log(newArr)
}
copyFirstElements(4,arrNum);

//?For the array in problem #10, remove the first element from the array 

arrNum.shift()
//console.log(arr);

//? Create an anonymous function that copies the last n elements of an array into a new array in reverse order.

const copyLastElements = function(n,arr) {
  let newArr = [];
  for (let i = arr.length - n; i < arr.length; i++) {
    let element = arr[i];
    newArr.push(element);
  }
  console.log(newArr);
}
copyLastElements(2,arrNum);

//? Use the following as your test array: [“Bill”, “John”, “Jackson”, “Derrick”, “Brad”, “Walter”, “Kevin”, “Lance”];
let arrNames = ['Bill', 'John', 'Jackson', 'Derrick', 'Brad', 'Walter', 'Kevin', 'Lance'];
// Expected output:
// For 1 element: [“Lance”]
// For 3 elements: [“Lance”, “Kevin”, “Walter”]
// For 4 elements: [“Lance”, “Kevin”, “Walter”, “Brad”]

//? For the array in problem 12, add the name “Alan” to the beginning of the array
arrNames.unshift('Alan');
//console.log(arrNames);

//? Create a while loop that will prompt the user for a letter of the alphabet (“a secret letter”). Assign whatever letter you want to a variable. When the person types a letter in the prompt box, check whether it is the right letter. If not, print “Wrong” to the console and prompt the user again. If it is the right letter, print “Right” to the console and stop prompting the user.

//let guessedLetter = prompt('Can you guess the secret letter?').toLowerCase();
const secretLetter = 'v';

while( secretLetter != guessedLetter) {
  console.log('Wrong.');
  guessedLetter = prompt('Guess again?').toLowerCase();
}
  console.log('Right!');

