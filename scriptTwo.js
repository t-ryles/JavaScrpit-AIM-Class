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

  // while(Number.isNaN(dinnerChoice) || dinnerChoice <= 0 || dinnerChoice > menu.length ) {
  //   console.log(`That is a invalid choice, try again.`);
  //   dinnerChoice = parseInt(prompt(`
  //     Please select your choice of meal:\n${menuList}`
  //   ));
  // }

  if (!Number.isNaN(dinnerChoice) && dinnerChoice > 0 && dinnerChoice <= menu.length) {
    console.log(`You have selected the ${menu[dinnerChoice - 1].dishName}.`);
  }

  const preTipTotal = parseFloat(menu[dinnerChoice - 1].price);
  console.log(`The pre-tip total is: $${preTipTotal.toFixed(2)}`);
  const tipPercentage = 0.095;

  const tipCost = (preTip, tipPercent) => {
    const tipResult = (preTip * tipPercent);
    console.log(`The tip comes to: $${(Math.round(tipResult * 100) / 100).toFixed(2)}`)
    return Math.round(tipResult * 100) / 100;
  }

  const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
  console.log(`You total bill is $${totalBill.toFixed(2)}`)

};

goToDinner();