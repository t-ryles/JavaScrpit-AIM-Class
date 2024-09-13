// Notes:
// Recursion : a fuction that calls itself.

// function resurse() {
//   -Basecase : stops the funtions rfrom running forever.
//   if (baseCondition) {
//   } else {
//     resurse();
//   }
// }

function orderPizza(pizzaType, ...toppings) {
  let total = 0;

  switch(pizzaType) {
    case "Margherita" :
      total += 7;
      break;
    case "Caprese" :
      total += 7;
      break;
    case "Formaggio" :
      total += 10;
      break;
  }

  if (toppings.length === 0) {
    return total
  } else {
    orderPizza(undefined, i = 0 ,...toppings[i + 1])
    if (toppings[i] == "ExtraSauce") { 
      total += 1 ;
    } else {
      total += 2;
    }
  }
  return total;
}
//console.log(orderPizza("Margherita", 'ExtraSauce', 'ExtraToppings'));
