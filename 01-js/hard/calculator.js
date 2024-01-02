/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    console.log(`adding ${number} to ${this.result}`);
    this.result += number;
    console.log(this.result);
  }
  subtract(number) {
    console.log(`subtracting ${number} from ${this.result}`);
    this.result -= number;
    console.log(this.result);
  }

  multiply(number) {
    console.log(`multiplying ${number} to ${this.result}`);
    this.result *= number;
    console.log(this.result);
  }

  divide(number) {
    console.log(`dividing ${this.result} by ${number}`);
    this.result /= number;
    console.log(this.result);
  }

  clear() {
    console.log("clearing...");
    this.result = 0;
    console.log(this.result);
  }

  getResult() {
    return this.result;
  }

  areBracketsPresent(inputString) {
    let flag = false;
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === "(") {
        flag = true;
        break;
      }
    }
    return flag;
  }

  checkValidParens(inputString) {
    // implement a stack;
    const stack = {
      stackArray: [],

      push(parens) {
        this.stackArray.push(parens);
      },

      pop() {
        this.stackArray.pop();
      },

      top() {
        const length = this.stackArray.length;
        return this.stackArray[length - 1];
      },

      isStackEmpty() {
        return !this.stackArray.length;
      },
    };
    // check for valid parenthesis;
    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];

      if (currentChar === "(") {
        stack.push("(");
      } else if (currentChar === ")") {
        if (stack.top() === "(") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.isStackEmpty();
  }

  reverseNumber(num) {
    let reverseNum = 0;
    while (num > 0) {
      let lastDigit = num % 10;
      reverseNum = reverseNum * 10 + lastDigit;
      num = Math.floor(num / 10);
    }
    return reverseNum;
  }

  resolveDivisions(inputString) {
    // console.log("in division fn...");
    let answer = "";
    const fn = (inputString) => {
      // base case
      const isDivisionPresent = inputString.includes("/");
      if (!isDivisionPresent) {
        answer = inputString;
        return;
      }
      // recursive relationship
      //find the index of operator "+";
      const indexOfOperator = inputString.indexOf("/");

      // find number before this index
      let numString = "";
      for (let i = indexOfOperator - 1; i >= 0; i--) {
        numString = numString + inputString[i];
      }
      let tempNum = parseInt("1" + numString);
      let num1 = Math.floor(this.reverseNumber(tempNum) / 10);

      // find number after this index
      const num2 = parseInt(inputString.slice(indexOfOperator + 1));

      // Find starting index and ending index;
      let count1 = 0;
      let temp1 = num1;
      while (temp1 > 0) {
        count1++;
        temp1 = Math.floor(temp1 / 10);
      }

      let count2 = 0;
      let temp2 = num2;
      while (temp2 > 0) {
        count2++;
        temp2 = Math.floor(temp2 / 10);
      }

      const startingIndex = indexOfOperator - count1;
      const endingIndex = indexOfOperator + count2;
      const replacement = num1 / num2;

      // make resolved string
      const answerString =
        inputString.slice(0, startingIndex) +
        replacement +
        inputString.slice(endingIndex + 1);
      fn(answerString);
    };

    fn(inputString);
    return answer;
  }

  resolveMultiplications(inputString) {
    // console.log("in multiplication fn...");
    let answer = "";
    const fn = (inputString) => {
      // base case
      const isMultiplicationPresent = inputString.includes("*");
      if (!isMultiplicationPresent) {
        answer = inputString;
        return;
      }
      // recursive relationship
      //find the index of operator "+";
      const indexOfOperator = inputString.indexOf("*");

      // find number before this index
      let numString = "";
      for (let i = indexOfOperator - 1; i >= 0; i--) {
        numString = numString + inputString[i];
      }
      let tempNum = parseInt("1" + numString);
      let num1 = Math.floor(this.reverseNumber(tempNum) / 10);

      // find number after this index
      const num2 = parseInt(inputString.slice(indexOfOperator + 1));

      // Find starting index and ending index;
      let count1 = 0;
      let temp1 = num1;
      while (temp1 > 0) {
        count1++;
        temp1 = Math.floor(temp1 / 10);
      }

      let count2 = 0;
      let temp2 = num2;
      while (temp2 > 0) {
        count2++;
        temp2 = Math.floor(temp2 / 10);
      }

      const startingIndex = indexOfOperator - count1;
      const endingIndex = indexOfOperator + count2;
      const replacement = num1 * num2;

      // make resolved string
      const answerString =
        inputString.slice(0, startingIndex) +
        replacement +
        inputString.slice(endingIndex + 1);

      fn(answerString);
    };

    fn(inputString);
    return answer;
  }

  resolveAdditions(inputString) {
    // console.log("in addition fn...");
    let answer = "";
    const fn = (inputString) => {
      // base case
      const isAdditionPresent = inputString.includes("+");
      if (!isAdditionPresent) {
        answer = inputString;
        return;
      }
      // recursive relationship
      //find the index of operator "+";
      const indexOfOperator = inputString.indexOf("+");

      // find number before this index
      let numString = "";
      for (let i = indexOfOperator - 1; i >= 0; i--) {
        numString = numString + inputString[i];
      }
      let tempNum = parseInt("1" + numString);
      let num1 = Math.floor(this.reverseNumber(tempNum) / 10);

      // find number after this index
      const num2 = parseInt(inputString.slice(indexOfOperator + 1));

      // Find starting index and ending index;
      let count1 = 0;
      let temp1 = num1;
      while (temp1 > 0) {
        count1++;
        temp1 = Math.floor(temp1 / 10);
      }

      let count2 = 0;
      let temp2 = num2;
      while (temp2 > 0) {
        count2++;
        temp2 = Math.floor(temp2 / 10);
      }

      const startingIndex = indexOfOperator - count1;
      const endingIndex = indexOfOperator + count2;
      const replacement = num1 + num2;

      // make resolved string
      const answerString =
        inputString.slice(0, startingIndex) +
        replacement +
        inputString.slice(endingIndex + 1);

      fn(answerString);
    };

    fn(inputString);
    return answer;
  }

  resolveSubstraction(inputString) {
    // console.log("in subtraction fn...")
    let answer = "";
    const fn = (inputString) => {
      // base case
      const isSubtractionPresent = inputString.includes("-");
      if (!isSubtractionPresent) {
        answer = inputString;
        return;
      }
      // recursive relationship
      //find the index of operator "+";
      const indexOfOperator = inputString.indexOf("-");

      // find number before this index
      let numString = "";
      for (let i = indexOfOperator - 1; i >= 0; i--) {
        numString = numString + inputString[i];
      }
      let tempNum = parseInt("1" + numString);
      let num1 = Math.floor(this.reverseNumber(tempNum) / 10);

      // find number after this index
      const num2 = parseInt(inputString.slice(indexOfOperator + 1));

      // Find starting index and ending index;
      let count1 = 0;
      let temp1 = num1;
      while (temp1 > 0) {
        count1++;
        temp1 = Math.floor(temp1 / 10);
      }

      let count2 = 0;
      let temp2 = num2;
      while (temp2 > 0) {
        count2++;
        temp2 = Math.floor(temp2 / 10);
      }

      const startingIndex = indexOfOperator - count1;
      const endingIndex = indexOfOperator + count2;
      const replacement = num1 - num2;

      // make resolved string
      const answerString =
        inputString.slice(0, startingIndex) +
        replacement +
        inputString.slice(endingIndex + 1);

      fn(answerString);
    };

    fn(inputString);
    return answer;
  }

  simpleExpressionSolver(inputString) {
    console.log(`initialString: ${inputString}`);

    // first resolve all the divisions
    const resolvedDivisions = this.resolveDivisions(inputString);
    console.log(`value after resolving divisions: ${resolvedDivisions}`);

    // then resolve all the multiplications
    const resolvedMultiplications =
      this.resolveMultiplications(resolvedDivisions);
    console.log(
      `value after resolving multiplications: ${resolvedMultiplications}`
    );

    // then resolve subtraction;
    const resolvedSubtractions = this.resolveSubstraction(
      resolvedMultiplications
    );
    console.log(`value after resolving subtractions: ${resolvedSubtractions}`);

    // then resolve addition;
    const finalAnswer = this.resolveAdditions(resolvedSubtractions);
    console.log(`value after resolving additions: ${finalAnswer}`);

    console.log(`finalAnswer: ${finalAnswer}`);
    return finalAnswer;
  }

  resolveParenthesis(inputString) {
    let answer = "";
    const fn = (inputString) => {
      // base case
      if (!this.areBracketsPresent(inputString)) {
        answer = this.simpleExpressionSolver(inputString);
        console.log(`control is here: ${answer}`);
        return;
      }

      // recursive relationship
      let openingIndex = -1;
      let closingIndex = -1;
      for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === "(") {
          openingIndex = i;
        } else if (inputString[i] === ")") {
          closingIndex = i;
          break;
        }
      }
      const replacement = this.simpleExpressionSolver(
        inputString.substring(openingIndex + 1, closingIndex)
      );

      let tempString =
        inputString.slice(0, openingIndex) +
        replacement +
        inputString.slice(closingIndex + 1);

      console.log(tempString);

      // recusively calling fn;
      fn(tempString);
    };
    fn(inputString);
    return answer;
  }

  calculate(string) {
    // clean up the input string by removing extra spaces;
    const cleanedString = string.trim().replace(/ /g, "");

    // check if there are any parenthesis present in the expression
    const isParenthesisPresent = this.areBracketsPresent(cleanedString);

    // if the parenthesis are present check if they valid or not;
    if (isParenthesisPresent) {
      const flag = this.checkValidParens(cleanedString);
      console.log(isParenthesisPresent);
      // if parenthesis are invalid throw an error;
      if (!flag) throw new Error();
      return;
    }
    // resolve the expression that has a valid parenthesis;
    const answer = this.resolveParenthesis(cleanedString);
    this.result = answer;
    return answer;
  }
}

const calculator = new Calculator();
const answer = calculator.resolveParenthesis("(2+3)*(6-(4+1)/2)+7");
console.log({ answer });

module.exports = Calculator;
