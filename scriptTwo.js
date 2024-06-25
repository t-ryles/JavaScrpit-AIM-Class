console.log("New Notes:");

const goToDinner = () => {

  const menu = [
    {
      dishName: "Beef Terderloin",
      price: 14.75
    },
    {
      dishName: "Ribeye",
      price: 17.50
    },
    {
      dishName: "BBQ Chicken",
      price: 13.25
    }
  ];
  let menuList = "";
  for (let i = 0; i < menu.length; i++) {
    menuList += (`${i+1}. is ${menu[i].dishName}: $${menu[i].price.toFixed(2)} \n`)
  }

  let dinnerChoice = prompt(`Please select your choice of meal:\n${menuList}`)

  while(Number.isNaN(dinnerChoice) || dinnerChoice <= 0 || dinnerChoice > menu.length ) {
    console.log(`That is a invalid choice, try again.`);
    dinnerChoice = parseInt(prompt(`
      Please select your choice of meal:\n${menuList}`
    ));
  }
 console.log(`You have selected the ${menu[dinnerChoice - 1].dishName}.`);
};

goToDinner();