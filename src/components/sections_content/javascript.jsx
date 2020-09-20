/* eslint-disable max-len, react/jsx-one-expression-per-line, react/no-unescaped-entities, react/jsx-no-comment-textnodes */
import React from 'react';
import PrismCode from '../prism_code';

const language = 'javascript';

const code = {
  variables: `
let favFood = "Pizza";
console.log(favFood) // outputs: "Pizza"
favFood = "Pasta"
console.log(favFood); // outputs: "Pasta"

const name = "Renaud";
console.log(name); // outputs: "Renaud"
name = "Pas Renaud"
console.log(favFood); // outputs: "TypeError"`,

  stringInterpolation: `
var myPet = "armadillo";
console.log(\`I own a pet $\{myPet}.\`);
// outputs: "I own a pet armadillo."`,

  conditionalStatements: `
let numberOfApples = 0;
if (numberOfApples) {
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
// outputs: "No Apples Left !"`,

  shortCircuitEvaluation: `
let defaultName;
if (username) {
   defaultName = username;
} else {
defaultName = 'Stranger';
}

// is the same as
let defaultName = username || 'Stranger'`,

  functions: `
// To declare it
function functionName() {
  console.log('blablabla');
}

// To call it
functionName();`,

  functionDefaultParameter: `
function greeting(name = 'stranger') {
  console.log(\`Hello, $\{name}!\`);
}
// Will return "Stranger" if name is not defined`,

  functionReturn: `
function calculateArea(width, height) {
  const area = width*height ;
  return area ;
}`,

  functionReturnKw: `
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

getRectArea(3, 4); // return 12

getRectArea(-3, 4); // return 0`,

  functionExpression: `
Const variableA = function(arg1, arg2) {
  Blablabla;
};
variableA(arg1, arg2)`,

  arrowFunctions: `
const rectangleArea = (width, height) => {
  return width*height;
};`,

  forLoop: `
const grades = [10, 5, 13, 20, 18];
let sum = 0
for (let i = 0; i < grades.length; i++) {
  sum = sum + grades[i];
}
console.log(sum) // outputs 66 >> (10 + 5 + 13 + 20 + 18)`,

  whileLoop: `
const grades = [10, 5, 13, 20, 18];
let sum = 0
let i = 0

while (i < grades.length) {
  sum = sum + grades[i];
  i++;
}
console.log(sum) // outputs 66 >> (10 + 5 + 13 + 20 + 18)`,

  doWhileLoop: `
const grades = [10, 5, 13, 20, 18];
let sum = 0
let i = 0

do {
  sum = sum + grades[i];
    i++;
} while (i < grades.length);
console.log(sum) // output 66 >> (10 + 5 + 13 + 20 + 18)`,

  highOrderFunctions: `
const functionA = () => {
  code;
};
const variableA = functionA; // >> You do it without parenthesis;`,

  forEach: `
const fruits = ['pommes', 'poires', 'oranges', 'kiwi']

fruits.forEach(fruit => {
  console.log(\`- #{fruit}\`);
});`,

  map: `
const numbers = [1, 2, 3, 4, 5];
const bigNumbers = numbers.map(number => {
  return number * 10;
});
// bigNumbers == [10, 20, 30, 40, 50]`,

  filter: `
const words = ['chien', 'chat', 'poussin', 'trotinette', 'hiiiibou'];
const smallWords = words.filter(word => {
  return word.length < 6;
}); // smallWords == ['chien', 'chat']`,

  findIndex: `
const numbers = [40, 500, 230, 4, 9, 1] ;
const smallNumbers = numbers.findIndex(number => {
  return number < 10;
});
// smallNumbers will return 3 because this is the index of "4",
// the first number inferior to 10 it finds.`,

  reduce: `
const numbers = [1, 2, 4, 10];
const summedNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});`,

  reduce2: `
const numbers = [1, 2, 4, 10];
const summedNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
 }, 100)`,

  objects: `
const spaceship = {
  'Fuel Type' : 'diesel', // need ' ' here because there is a space on the property name
  color: 'silver'
};`,

  objectWithMethod: `
const alienShip = {
  invade: function () {
  console.log('Hello! We have come to dominate your planet!');
  }
};`,

  objectWithMethod2: `
const alienShip = {
  invade () {
  console.log('Hello! We have come to dominate your planet!');
  }
};`,

  passByReference: `
// First you define your object:
const spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};`,

  passByReference2: `
const greenEnergy = obj => {
  obj['Fuel Type'] = 'Avocado Oil';
};

const remotelyDisable = obj => {
  obj.disabled = true;
};`,

  passByReference3: `
const spaceship = {
  'Fuel Type': 'Avocado Oil',
  homePlanet: 'Earth',
  disabled: true
};`
};

const Javascript = ({ subSectionName }) => {
  switch (subSectionName) {
    case 'variables': {
      return (
        <div>
          <p><samp>var</samp> : variable. Scope is global or locall to an entire function (regardless of block scope)</p>
          <p><samp>let</samp> : variable that can be reassigned. Limited to the scope of a the block statement (block-scoped)</p>
          <p><samp>const</samp> : variablethat can't be reassigned. (But value it holds can change, for example if its an object, you can change elements of the objects but not reassign it to a whole new object)</p>
          <PrismCode code={code.variables} language={language} />
          <p>
            <b>Tips:</b> <samp>x = x + 1</samp> can also be written : <samp>x += 1</samp>
            <br />Same for <samp>-=</samp>, <samp>*=</samp>, <samp>/=</samp>
            <br />Same for <samp>++</samp>, <samp>--</samp>, <samp>//</samp>, <samp>**</samp>, it means adding, subtract, divise or multiply by 1
          </p>
          <p><b>String Interpolation:</b> to insert a variable within a string without using the "+". You need to wrap your string with backticks: <samp>`</samp> and interpolate code with <samp>{'${}'}</samp></p>
          <PrismCode code={code.stringInterpolation} language={language} />
        </div>
      );
    }
    case 'math': {
      return (
        <div>
          <p>
            In JavaScript, to get a random number between 0 and 1, use the <samp>Math.random()</samp> function:
            <br /><samp>console.log(Math.random());</samp> >>> will outputs for ex : 0.5408145050563944
          </p>
          <p>Then if you want a random number between 1 and 10, just multiply the result of Math.random by 10, then round up or down:</p>
          <ul>
            <li><samp>Math.floor(Math.random() * 10)</samp> >> will round down to a whole number</li>
            <li><samp>Math.ceil(Math.random() * 10)</samp> >> will round up to a whole number</li>
            <li><samp>Math.round(Math.random() * 10)</samp> >> will round to the nearest whole number</li>
          </ul>
        </div>
      );
    }
    case 'conditional-statements': {
      return (
        <div>
          <p><b>Truthy / Falsy Values:</b> If you use an <samp>if</samp> on a non-bolean value (a string or a number for example), this value is neither "true" nor "false". But it is "truthy" or "falsy":</p>
          <ul>
            <li>It is "truthy" (so will return <samp>true</samp>) if it exists / is defined</li>
            <li>It is "falsy" (so will return <samp>false</samp>) if:
              <ul>
                <li>it doesn't exist / is not defined : <samp>null</samp></li>
                <li>it is empty : <samp>""</samp></li>
                <li>it is equal <samp>0</samp></li>
                <li>it is equal : <samp>NaN</samp> (Not a Number)</li>
              </ul>
            </li>
          </ul>
          <PrismCode code={code.conditionalStatements} language={language} />
          <p><b>Short-circuit Evaluation:</b> The pipe comparison tool <samp>||</samp> can replace an <samp>if</samp>. Indeed it will return option "A" OR "B". So it will test first the first option. So if "A" exists, it takes "A", otherwise it takes "B". So it works exactly like an <samp>if</samp>.</p>
          <PrismCode code={code.shortCircuitEvaluation} language={language} />
        </div>
      );
    }
    case 'functions': {
      return (
        <div>
          <PrismCode code={code.functions} language={language} />
          <p>Function have "hoisting" caracteristic, meaning you can call it (and use it) before declaring it (even if it is not a good practice).</p>
          <p>Since ES6 you can define a default value of a function parameter.</p>
          <PrismCode code={code.functionDefaultParameter} language={language} />
          <p><b>Return:</b> by default a fonction will always return <samp>undefined</samp>. Even when it work perfectly. In order for a function to return a result you need to use the keword <samp>return</samp>. With that I tell the function what value it has to return.</p>
          <PrismCode code={code.functionReturn} language={language} />
          <p>The <samp>return</samp> kw also allows you to stop the execution of a function. Indeed a function will stop when it meets return</p>
          <PrismCode code={code.functionReturnKw} language={language} />
          <p><b>Function Expression:</b> Allows you to store an anonymous function inside a variable and then call this function by calling the variable. You can also add arguments directly inside the variable (we usually use the <samp>const</samp> kw for that):</p>
          <PrismCode code={code.functionExpression} language={language} />
          <p><b>Warning:</b> a function expression is not "hoisted". You can't call it before declaring it</p>
          <p><b>Arrow functions:</b> Since ES6, arrow functions synthax allows to define a function without using the "function" kw:</p>
          <PrismCode code={code.arrowFunctions} language={language} />
          <p><b>Arrow functions specificities:</b></p>
          <ul>
            <li>Functions with only 1 argument doesn't need parenthesis: <samp>{'const varA = arg1 => { ... };'}</samp> (if there are 0 or more than 1 argument you do need parenthesis).</li>
            <li>Functions that only have 1 statement (one line of code) doesn't need braces nor return (its called "implicit return"): <samp>const sum = number => number + number;</samp></li>
            <li><b>This binding:</b> arrow functions does not have its own binfing to <samp>this</samp>. With traditional functions, if you have a function inside a function, the <samp>this</samp> (referring to the function itself) will be lost in the nested function… So you needed to do : <samp>var that = this</samp> (to store the <samp>this</samp> somewhere to use it afterward). With arrow functions, the "context" of the "this" is preserved. So if you use an arrow function inside another function, the <samp>this</samp> of the arrow function will be the one of the higher function.</li>
          </ul>

        </div>
      );
    }
    case 'scope': {
      return (
        <div>
          <p>It defines a "perimeter" on which you can use a variable. If variable is not define inside a function (outside the <samp>{ }</samp> ), it belongs to the <b>"global scope"</b>. It is then a <b>"global variable"</b>, you can access it everywhere.</p>
          <p>On the contrary if a variable is defined inside a function (inside the block), it belongs to the scope of this function, and you can use it only inside this function. It has a <b>"block scope"</b>. It is then a <b>"local variable"</b>.</p>
          <p>If you have to many global variable, it creates "scope polution". All those variable can have indesirable effect everywhere in your code. It is better to have few global variables and to localize it.</p>
          <p>You can have two identical variable with different values depending on which scope you are looking</p>
        </div>
      );
    }
    case 'arrays': {
      return (
        <div>
          <p>In JS an Array is defined with the <samp>[]</samp> notation:  <samp>const hobbies = ['surf', 'teuf', 'comic books']</samp> (here it is 3 strings but it can be all sorts of elements)</p>
          <p><b>Index:</b> you can then use each elements of an array calling its index. The first one have the index "0": <samp>hobbies[1]</samp> >> will return "teuf"</p>
          <p><b>Length:</b> return the number of elements in the array. <samp>hobbies.length</samp> == 3</p>
          <p>(Btw you can use the same logic to return letters of a string: <samp>'renodor'[2]</samp> >> will return "n")</p>
          <p><b>Common array functions:</b></p>
          <ul>
            <li><samp>.push(x)</samp> : add the value x at the end of the array</li>
            <li><samp>.pop()</samp> : remove the last element of the array (doesn't take any argument, will only remove the last element)</li>
            <li><samp>.shift()</samp> : remove the first element of the array (doesn't take any argument, will only remove the first element)</li>
            <li><samp>.unshift(x)</samp> : add the value x at the beginning of an array</li>
            <li><samp>.indexOf(x)</samp> : return the index of the <b>first</b> element x found in the array. (return -1 if the value is not present)</li>
            <li><samp>.splice(x, 1)</samp> : remove the element at the x position</li>
            <li><samp>.splice(x, y, z)</samp> : x = where to start removing/replacing elements. y = how many elements to remove. z = element to add (can have more than one). <u>Ex:</u>
              <ul>
                <li><samp>.splice(0, 0, 'a', 'b')</samp> : will add 'a' and 'b' at the beginning of array</li>
                <li><samp>.splice(0, 1, 'a', 'b')</samp> : will add 'a' at the beginning of array and replace first element of array with 'b'</li>
                <li><samp>.splice(0, 2, 'a', 'b')</samp> : will replace first element of array with 'a' and 2nd element of array with 'b'</li>
              </ul>
            </li>
            <li><samp>.slice(x, y)</samp> : return only a part of the array. Starts with the elment with index x (included) and stops at the element with index y (not included). It doesn't modify the original array, it just return a shorter copy. (Ex: <samp>array1 = ['pomme', 'bannane', 'fraise', 'chocolat'].slice(1, 3)</samp> will return <samp>['banane', 'fraise']</samp>)</li>
            <li><samp>.join()</samp> : return a string with the concatenate elements of the array separated by comas. Can take an argument that specifies how to separate the elements of array: <u>Ex:</u>
              <ul>
                <li><samp>.join('')</samp> : nothing between elements of array</li>
                <li><samp>.join(' ')</samp> : a space between elements of array</li>
                <li><samp>.join('-')</samp> : a dash between elements of array</li>
              </ul>
            </li>
            <li><samp>array1.concat(array2)</samp> : return a new array with concatenate values of both arrays (don't modify original arrays, create a new one)</li>
            <li><samp>'renodor'.trim()</samp> : remove space before and after a string (not an array method but...)</li>
          </ul>
        </div>
      );
    }
    case 'loops': {
      return (
        <div>
          <p><b>For Loop:</b></p>
          <p>
            <samp>
              {`for (initialisation; stop condition; to execute at the end of each iteration) {
                code to execute;
              }`}
            </samp>
          </p>
          <p>The <b>"stop condition"</b> is a boulean. The loop continues as long as this bolean is true. And it stops when the boulean is false.</p>
          <p><u>Ex:</u></p>
          <PrismCode code={code.forLoop} language={language} />
          <p><b>While Loop:</b></p>
          <p>
            <samp>
              {`while (stop condition) {
                code to execute;
              }`}
            </samp>
          </p>
          <p>You just specify the stop condition. You have to define the initialisation before and the iteration within the code to execute</p>
          <p><u>Ex:</u></p>
          <PrismCode code={code.whileLoop} language={language} />
          <p><b>Do...While Loop</b></p>
          <p>
            <samp>
              {`do {
                code to execute;
              } while (stop condition);`}
            </samp>
          </p>
          <p>It is similar to the while loop but you specify the code to execute before. So it will execute at least one time (and until the stop condition is false). Whereas a normal while loop can sometimes never run if the stop condition is always false.</p>
          <p><u>Ex:</u></p>
          <PrismCode code={code.doWhileLoop} language={language} />
          <p><b>Break:</b> the break kw allows you to force a loop to stop (even if the stop condition is still true). Inside the block code of your loop you have to add an if condition like that : <samp>{'if (condition) { break; }'}</samp></p>
          <p>(A loop within a loop is called a "nested loop").</p>
        </div>
      );
    }
    case 'high-order-functions': {
      return (
        <div>
          <p>You can assign a fonction to a variable:</p>
          <PrismCode code={code.highOrderFunctions} language={language} />
          <p>And so you can then call the function by calling the variable like that: <samp>variableA();</samp> (You can even pass arguments to it.)</p>
          <p>In JS, functions, like variables, are "first class objects", so like other objects you can assign proprieties to it like (<samp>.length()</samp> <samp>.name()</samp>, <samp>.toString()</samp> etc...)</p>
          <p>You can also pass a function as an argument to another function. You call those functions <b>"call back"</b> because they are called during the execution of the high-order function.</p>
          <p>When you pass a function as an argument you don't want to call this function. By calling it you would have the result of the function as an argument (and not the function itself). That is why when you put a function as argument you put it without the parenthesis.</p>
        </div>

      );
    }
    case 'iterators': {
      return (
        <div>
          <p>Iterators are built-in array methods that allows you to iterate (loop) easily on arrays</p>
          <p><b>.forEach() :</b> apply the same function to all the elements of an array.</p>
          <u>Ex:</u>
          <PrismCode code={code.forEach} language={language} />
          <p>>>> Will apply the <samp>console.log()</samp> to each elements of 'fruits'. (So we can say that forEach(); takes a call-back function as an argument.)</p>
          <p>This function doesn't create a new array or change the original array. It just apply the function to each elements of the array. And it doesn't return anything, it always return undefined.</p>
          <p><b>.map()</b> : also apply a function to all elements of an array, but this time it returns a new array (with the new values). So you can assign the map method to a new variable to store the array that will be created during the execution.</p>
          <u>Ex:</u>
          <PrismCode code={code.map} language={language} />
          <p><b>.filter()</b> : Apply a statement to all elements of an array, and return a new array with only the elements for witch this statement returned true</p>
          <u>Ex:</u>
          <PrismCode code={code.filter} language={language} />
          <p><b>.findIndex()</b> : apply a statement to all elements of an array, and return the index of the first element that return true. (It stops at the first it finds).</p>
          <u>Ex:</u>
          <PrismCode code={code.findIndex} language={language} />
          <p>If <samp>.findIndex()</samp> doesn't find any element that fulfill the condition, it will return <samp>-1</samp></p>
          <p><b>.reduce()</b> : apply a function to all elements of an array, and return only one value. It takes 2 parameter: an accumulator and the currentValue.</p>
          <p>Initially the accumulator is the index 0 of the array, and the currentValue is the index 1 of the array. It will then loop over the array and apply a function using this two parameters. So during the second loop for example, the accumulator will be the returned value of the first loop, and the currentValue will be the index 3 of the array, etc...</p>
          <u>Ex</u>
          <PrismCode code={code.reduce} language={language} />
          <p>So here, initially:</p>
          <ul>
            <li>accumulator = <samp>1</samp></li>
            <li>currentValue = <samp>2</samp></li>
          </ul>
          <p>
            So the first operation will be <samp>1 + 2</samp>
            <br />Then the function do it again. The new accumulator is <samp>3</samp> (1 + 2), and the new currentValue is <samp>4</samp>, so the second operation will be <samp>3 + 4</samp>
            <br />Etc...
            <br />So at the end, <samp>summedNumbers</samp> will return <samp>17</samp>.
          </p>
          <p>You can also add a second argument to the reduce method, which will define an initial value to the accumulator. (Other than the index 0 of the array). So it will add a new step to the operation.</p>
          <PrismCode code={code.reduce2} language={language} />
          <p>Instead of starting with accumulator = 1, you start with accumulator = 100. And so initialy, currentValue is 1. After that, it is the same:</p>
          <ul>
            <li>100 + 1 = 101</li>
            <li>101 + 2 = 103</li>
            <li>103 + 4 = 107</li>
            <li>107 + 10 = 117 >>> final value of <samp>summedNumbers</samp></li>
          </ul>
          <p><b>.some()</b> : will look if at least one element of the array fulfill the condition, and will return <samp>true</samp> or <samp>false</samp></p>
          <p><b>.every()</b> : will look if all the elements of the array fulfill the condition, and will return <samp>true</samp> or <samp>false</samp></p>
        </div>
      );
    }
    case 'objects': {
      return (
        <div>
          <p>In JS an Object is defined with the <samp>{'{ }'}</samp> notation : <samp>let spaceship = {'{}'};</samp></p>
          <p>Objects are used to store data thanks to key/value pairs (called properties). Properties can be anything (string, number, functions etc...)</p>
          <PrismCode code={code.objects} language={language} />
          <p>You then access properties with the .dot operator: <samp>spaceship.color</samp> >>> will return <samp>silver</samp></p>
          <p>Or with brackets: <samp>spaceship['Fuel Type']</samp> (You have to use brackets actually if the property name has a space, a number or a special character)</p>
          <p>If you call a property that doesn't existe, it returns <samp>undefined</samp></p>
          <p>You can also add, modify or delete properties:</p>
          <ul>
            <li><samp>spaceship.type = 'alien'</samp> > If the property "type" exists, it will be modified. Otherwise it will be created</li>
            <li><samp>delete spaceship.mission</samp> > Will delete "mission" property</li>
          </ul>
          <p>When you store a function inside an object, you call it a method:</p>
          <ul>
            <li>A property is what an object <b>has</b></li>
            <li>A method is what an object <b>does</b></li>
          </ul>
          <p>When you add a method to an object, the value of the property is an anonymus function:</p>
          <PrismCode code={code.objectWithMethod} language={language} />
          <p>Or shorter like that:</p>
          <PrismCode code={code.objectWithMethod2} language={language} />
          <p>To call a method inside an object you also use the .dot operator, with the function name and parenthesis: <samp>alienShip.invade();</samp></p>
          <p>You can nest objects within objects (pass an object as a parameter of an higher object). And you can then call nested objects with a serie of .dot operators: <samp>spaceship.nanoelectronics['back-up'].battery;</samp></p>
          <p><b>Pass by Reference:</b> is the fact of modifiying an object property directly via a function.</p>
          <p>First you define your object:</p>
          <PrismCode code={code.passByReference} language={language} />
          <p>Then you create functions that will modify/add a property to this objec:</p>
          <PrismCode code={code.passByReference2} language={language} />
          <p>Then if you call those functions on your object:</p>
          <ul>
            <li><samp>greenEnergy(spaceship);</samp></li>
            <li><samp>remomtelyDisable(spaceship);</samp></li>
          </ul>
          <p>It will modify your object like that:</p>
          <PrismCode code={code.passByReference3} language={language} />
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Javascript;
