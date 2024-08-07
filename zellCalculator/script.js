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
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'));

    if (!action ) {
      //console.log('number key!')
      if ( 
        displayedNum === '0' || 
        previousKeyType === 'operator' ||
        previousKeyType === 'calulate'
      ) {
          display.textContent = keyContent;
        } else {
          display.textContent = keyContent;  
      }
      
      if (previousKeyType === 'calculate') {
        delete calculator.dataset.firstValue;
        delete calculator.dataset.operator;
      }
      calculator.dataset.previousKeyType = 'number';
    }

    if ( 
         action === 'add' ||
         action === 'subtract' ||
         action == 'divide' ||
         action == 'multiply'
    ) {
      console.log('operator key!')
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
      //console.log('operator key!');
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.operator = action;
    }

    if ( action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      }
       if (
        previousKeyType === 'operator' || 
        previousKeyType === 'calculate') {
        display.textContent = '0.';
      }
      calculator.dataset.previousKeyType = 'decimal';
    }

    if ( action === 'clear') {
      console.log('clear!');
      calculator.dataset.previousKeyType = 'clear';
    }

    if ( action === 'calculate') {
        console.log('equal key!');
        let firstValue = calculator.dataset.firstValue;
        let operator = calculator.dataset.operator;
        let secondValue = displayedNum;

        if (firstValue) {
          if (previousKeyType === 'calculate') {
            firstValue = displayedNum;
            secondValue = calculator.dataset.modValue;
          }
          display.textContent = calculate(firstValue, operator, secondValue);
        }
        calculator.dateset.modValue = secondValue;
        calculator.dataset.previousKeyType = 'calculate';
    }
  }
})