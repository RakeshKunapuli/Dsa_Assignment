// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function pairsOfInteger(pairs, n) {
  var arr = [];
  let len =pairs.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (pairs[i] + pairs[j] == n) {
        arr.push([pairs[i], pairs[j]]);
      }
    }
  }
  console.log(arr);
}
var n = 7;
var pairs = [2, 5, 6, 1, 3, 4, 7];
pairsOfInteger(pairs, n);


//================================END=================================

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function reverseAnArray(reverseArray){
    reverseArray.reverse()
    return reverseArray
}
var reverseArray = [2,4,6,8,0,13,4,5,6,8,2,6,90]
console.log(reverseAnArray(reverseArray))

//================================END=================================


// Q3. Write a program to check if two strings are a rotation of each other?

function rotationOfStrings(str1, str2) {
  if (str1.length !== str2.length) {
    return "False ,string is Not a rotation";
  } else {
    (str1 + str1).includes(str2);
    return "True , String is rotation";
  }
}
let str1 = "waterbottle";
let str2 = "tlewaterbot";
console.log(rotationOfStrings(str1, str2));

//================================END=================================

// Q4. Write a program to print the first non-repeated character from a string?

function findFirstNonRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (str.indexOf(char) === str.lastIndexOf(char)) {
        console.log(str.lastIndexOf(char))
        return char;
      }
    }
    return null;
  }
const inputString = "programming";
console.log(findFirstNonRepeatedCharacter(inputString));


//================================END=================================

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage:
const num = 3; // Number of disks
const sourcePeg = 'A';
const auxiliaryPeg = 'B';
const destinationPeg = 'C';

towerOfHanoi(num, sourcePeg, auxiliaryPeg, destinationPeg);

//================================END=================================


// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


function isOperator(char) {
  return ['+', '-', '*', '/', '^'].includes(char);
}

function postfixToPrefix(postfixExpression) {
  const stack = [];
  const operators = new Set(['+', '-', '*', '/', '^']);

  for (let char of postfixExpression) {
      if (!isOperator(char)) {
          stack.push(char);
      } else {
          const operand1 = stack.pop();
          const operand2 = stack.pop();
          const prefix = char + operand2 + operand1;
          stack.push(prefix);
      }
  }

  if (stack.length !== 1) {
      throw new Error("Invalid postfix expression");
  }

  return stack[0];
}

// Example usage:
const postfixExpression = "ab+c*";
const prefixExpressions = postfixToPrefix(postfixExpression);
console.log( prefixExpressions);

// Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
  return "+-*/".includes(char);
}

function prefixToInfix(prefixExpr) {
  const stack = [];
  const tokens = prefixExpr.split(" ");

  for (let i = tokens.length - 1; i >= 0; i--) {

    const token = tokens[i];
    // console.log(token)
    if (/^[a-zA-Z0-9]+$/.test(token)) { // Operand
      stack.push(token);
    } else if (isOperator(token)) { // Operator
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const infixExpr = `(${operand1} ${token} ${operand2})`;
      stack.push(infixExpr);
    }
  }

  if (stack.length === 1) {
    return stack[0];
  } else {
    throw new Error("Invalid prefix expression");
  }
}

// Example usage
const prefixExpression = "* + A B - C D";
const infixExpression = prefixToInfix(prefixExpression);
console.log(infixExpression);


//==================================END=======================================

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  this.insert = function(item) {
    this.items.push(item);
    this.length++;
  }
  this.pop = function(){
    this.length--;
    return this.items.pop();
  }
}
}

function areBracketsBalanced(codeSnippet) {
  const stack = new Stack();

  for (let i = 0; i < codeSnippet.length; i++) {
    const char = codeSnippet.charAt(i);

    if (char === "[" || char === "(" || char === "{") {
      stack.insert(char);
    } else if (char === "]" || char === ")" || char === "}") {
      const poppedItem = stack.pop();
      if (
        (poppedItem === "(" && char === ")") ||
        (poppedItem === "[" && char === "]") ||
        (poppedItem === "{" && char === "}")
      ) {
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const codeSnippet1 = "{[()]})";
console.log(areBracketsBalanced(codeSnippet1));

var reverse = new Stack()
console.log(this.reverse)
 
// ================================END=============================
// Q9. Write a program to reverse a stack.

class ReverseStack{
  constructor(){
    this.item =[]
    this.length =0
    this.insert = function(item){
     this.item.push(item)
   this.length++
    }
    this.pop = function(){
      this.length--
       return this.item.pop()
          }
    this.reverse= function(){
            let reverseStack =[]
            let length = this.length
            for(var i=0 ;i <length ;i++){
              var popedItem=  this.pop()
              reverseStack.push(popedItem)
            }
           this.items = reverseStack
                }
  }
}

var reversed= new ReverseStack()
reversed.insert(2)
reversed.insert(3)
reversed.insert(6)
reversed.insert(9)
reversed.insert(5)
reversed.insert(0)
reversed.insert(2)
reversed.insert(4)
reversed.insert(5)
reversed.reverse()
console.log(reversed.items)

//=======================================

// Q10. Write a program to find the smallest number using a stack.

class SmallNumber{
  constructor(){
    this.item =[]
    this.minstack = []
    this.push = function(stack){
      this.item.push(stack)
      if(this.minstack.length === 0 || stack <= this.minstack[this.minstack.length - 1] ){
        this.minstack.push(stack)
      }
    }
    this.pop = function(){
      if(this.item.length === 0){
return null
      }else{
        var itemPop = this.stack.pop()
        if(itemPop === this.minstack[this.minstack.length -1]){
this.minstack.pop()
        }
        return itemPop
      }
    
  }
  this.getMin = function(){
    if(this.minstack.length === 0){
      return null
    }
    return this.minstack[this.minstack.length - 1]
  }
  }
}

let Minimum = new SmallNumber
Minimum.push(3)
Minimum.push(7)
Minimum.push(2)
Minimum.push(0)
console.log(Minimum.getMin())

//===========================END=======================

