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
// outputs: "I own a pet armadillo."`
};

const Javascript = ({ subSectionName }) => {
  switch (subSectionName) {
    case 'variables': {
      return (
        <div>
          <p><samp>var</samp> : variable. Scope is global or locall to an entire function (regardless of block scope)</p>
          <p><samp>let</samp> : variable that can be reassigned. Limited to the scope of a the block statement</p>
          <p><samp>const</samp> : variablethat can't be reassigned. (But value it holds can change, for example if its an object)</p>
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
      return <div>Hello Sub Section2</div>;
    }
    default: {
      return 'nada';
    }
  }
};

export default Javascript;
