const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

const calculate = (n1, operator, n2) => {
  let result = '';

  if (operator === 'add') result = parseFloat(n1) + parseFloat(n2);
  if (operator === 'subtract') result = parseFloat(n1) - parseFloat(n2);
  if (operator === 'multiply') result = parseFloat(n1) * parseFloat(n2);
  if (operator === 'divide') result = parseFloat(n1) / parseFloat(n2);

  return result;
}



// Adding eventListener
keys.addEventListener('click', e => {
  // target = whatever we clicked on
  if (e.target.matches('button')) {
    console.log('number key!');
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action ) {
      if ( displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }

      calculator.dataset.previousKeyType = 'number';
    }

    if ( action === 'add' ||
         action === 'subtract' ||
         action == "divide" ||
         action == "multiply"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && previousKeyType !== 'operator') {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }
      console.log('operator key!');
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.operator = action;
  

    if ( action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      } 
      
      if (previousKeyType === 'operator') {
        display.textContent = '0.';
      }
      calculator.dataset.previousKeyType = 'decimal';
    }

    if ( action === 'clear') {
      calculator.dataset.previousKeyType = 'clear';
      console.log('clear!');
    }

    if ( action === 'calculate') {
      console.log('equal key!');
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue) {
        display.textContent = calculate(firstValue, operator, secondValue);
      }
      calculator.dataset.previousKeyType = 'calculate';
    }

    Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))
  }
}})