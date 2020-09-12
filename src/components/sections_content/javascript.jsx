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
          <p>In JS an Array is defined with the <samp>[]</samp> notation:  <samp>const hobbies = ['surf', 'teuf', 'sex']</samp> (here it is 3 strings but it can be all sorts of elements)</p>
          <p><b>Index:</b> you can then use each elements of an arrays calling its index. The first one have the index "0": <samp>hobbies[1]</samp> >> will return "teuf"</p>
          <p><b>Length:</b> return the number of elements in the array. <samp>hobbies.length</samp> == 3</p>
          <p>(Btw you can use the same logic to return letters of a string: <samp>'renodor'[2]</samp> >> will return "n")</p>
          <p><b>COmon array functions</b></p>
          <ul>
            <li><samp>.push(x)</samp> : add the value x at the end of the array</li>
            <li><samp>.pop()</samp> : remove the last element of the array (doesn't take any argument, will only remove the last element)</li>
            <li><samp>.shift()</samp> : remove the first element of the array (doesn't take any argument, will only remove the first element)</li>
            <li><samp>.unshift(x)</samp> : add the value x at the beginning of an array</li>
            <li><samp>.indexOf(x)</samp> : return the index of the <b>first</b> element x found in the array. (return -1 if the value is not present)</li>
            <li><samp>.splice(x, 1)</samp> : remove the element at the x position</li>
            <li><samp>.splice(x, y, z)</samp> > : x = where to start removing/relacing elements. y = how many elements to remove. z = element to add. So for <samp>.splice(x, y, 'item1', 'item2')</samp> > if y = 0, it will just add the 2 'items' to the array. And if y = 1, it will replace 1 element etc...)</li>
          </ul>
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Javascript;
