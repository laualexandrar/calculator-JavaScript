class Calculator {
  constructor (previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();

  }
  chooseOperation(operation) {
    if(this.currentOperand == '') return
    if(this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ''
  }
  compute() {
  let computation 
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if(isNaN(prev) || isNaN(current)) return
  switch (this.operation){
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
      default:
        return
    }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
  }
 
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}
const numberButtons = document.querySelectorAll('[data-button-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const dataClearButton = document.querySelector('[data-clear]');
const dataDeleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
  });
});

operationButton.forEach(button => {
  button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
})

dataClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})
dataDeleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})






// function mathematicalOperation (number1, symbol, number2) {
//     if (symbol === "+") {
//         return number1 + number2;
//     } else if(symbol === "-"){
//         return number1 - number2;
//     } else if (symbol === "/") {
//         return number1 / number2;
//     } else if(symbol == "x") {
//         return number1 * number2;
//     }
// }

// console.log(mathematicalOperation(3, "x", 3));

// const numberButtons = document.querySelectorAll('[data-button-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const dotButton = document.querySelectorAll('[data-dot]');
// const equalsButton = document.querySelectorAll('[data-equals]');

// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }
// }

// function clear() {
//     this.currentOperand = ''
//     this.previousOperand = ''
//     this.operation = undefined 
// }

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       calculator.appendNumber(button.innerText)
//       calculator.updateDisplay()
//     })
//   });

// function appendNumber(number) {
//     appendNumber(number) {
//         if (number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = this.currentOperand.toString() + number.toString()
// }
// }

// function chooseOperation(operation) {
//     operationButtons.forEach(button => {
//         button.addEventListener('click', () => {
//           calculator.chooseOperation(button.innerText)
//           calculator.updateDisplay()
//         })
//       })

//       if (this.currentOperand === '') return
//       if (this.previousOperand !== '') {
//         this.compute()
//       }
//       this.operation = operation
//       this.previousOperand = this.currentOperand
//       this.currentOperand = ''
// }

// function compute() {
//     equalsButton.addEventListener('click', button => {
//         calculator.compute()
//         calculator.updateDisplay()
//       })

//       let computation
//       const prev = parseFloat(this.previousOperand)
//       const current = parseFloat(this.currentOperand)
//       if (isNaN(prev) || isNaN(current)) return
//       switch (this.operation) {
//         case '+':
//           computation = prev + current
//           break
//         case '-':
//           computation = prev - current
//           break
//         case '*':
//           computation = prev * current
//           break
//         case '÷':
//           computation = prev / current
//           break
//         default:
//           return
//       }
//       this.currentOperand = computation
//       this.operation = undefined
//       this.previousOperand = ''
    
// }

// function updateDisplay() {
//     if (this.operation != null) {
//         this.previousOperandTextElement.innerText =
//           `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     }
//     this.currentOperandTextElement.innerText =
//       this.getDisplayNumber(this.currentOperand)
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     } else {
//       this.previousOperandTextElement.innerText = ''
//     }
// }

// function getDisplayNumber(number) {
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay
//     if (isNaN(integerDigits)) {
//       integerDisplay = ''
//     } else {
//       integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`
//     } else {
//       return integerDisplay
//     }
//   }

//   updateDisplay() {
//     this.currentOperandTextElement.innerText =
//       this.getDisplayNumber(this.currentOperand)
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     } else {
//       this.previousOperandTextElement.innerText = ''
//     }
//   }