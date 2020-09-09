/* eslint-disable max-len, react/jsx-one-expression-per-line, react/no-unescaped-entities */

import React from 'react';
import PrismCode from '../prism_code';
import { InlineCode as Ic } from '../inline_code';

const language = 'css';

const code = {
  naming: `
selector {
 property: value;
 property: value;
 property: value;
}`,

  import: '@import url("components/avatar.css");',

  gradientFilter: `
background: linear-gradient(135deg,       /* angle */
                            yellow 0%,    /* start-color and start-point */
                            green 50%),   /* end-color and end-point */
            url('background.jpg')`,

  positioning: `
#relative {
  position: relative;
}

#absolute {
  position: absolute;
  top: 10px;
  right: 10px;
}`,

  flexbox: `
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flex-item {
  flex: 0 0 200px;
}`,

  marginCollapse: `
#element-one {
  margin-right: 20px;
  margin-bottom: 30px;
}

#element-two {
  margin-left: 20px;
  margin-top: 20px;
}`,

  resetDefault: `
* {
  margin: 0;
  padding: 0;
}`,

  boxModelBorderBox: `
* {
  box-sizing: border-box;
}`,

  typography: `
h1 {
font-family: "Garamond", "Times", serif;
}`
};

const Css = ({ subSectionName }) => {
  switch (subSectionName) {
    case 'naming': {
      return (
        <div>
          <PrismCode code={code.naming} language={language} />
        </div>
      );
    }
    case 'priority': {
      return (
        <div>
          <p><Ic code="id" /> > <Ic code="class" /> > <Ic code="element" /> >>> The most specific is always the one taken into account</p>
          <p>The last CSS sheet style link will have priority against the one placed above. Same for JS. (So for example always put your own CSS after jQuery or Boostrap)</p>
        </div>
      );
    }
    case 'units': {
      return (
        <div>
          <ul>
            <li><Ic code="vh" /> : viewport height = screen height (1vh = 1% of screen height, 100vh = 100% of screen height)</li>
            <li><Ic code="vw" /> : viewport width = screen width (1vw = 1% of screen width, 100vw = 100% of screen width)</li>
            <li><Ic code="em" /> : relative to the font-size of the element (2em = 2 times the size of the current font)</li>
            <li><Ic code="rem" /> : relative to the font-size of root element (2em = 2 times the size of the root font)</li>
            <li><Ic code="%" /> : relative to the parent element</li>
          </ul>
        </div>
      );
    }
    case 'import-CSS-files': {
      return (
        <div>
          <p>You can import a CSS file within another CSS file (even from an external source):</p>
          <PrismCode code={code.import} language={language} />
          <p>So a good practice is to link your <b>index.html</b> to one <b>home.css</b> or <b>index.css</b> file, and put all the other CSS sheets inside this same file</p>
        </div>
      );
    }
    case 'gradient-filter': {
      return (
        <div>
          <p>The format of a CSS gradient filter:</p>
          <PrismCode code={code.gradientFilter} language={language} />
        </div>
      );
    }
    case 'positioning': {
      return (
        <div>
          <p>By default, blocks will stack on top of each other. Then the <Ic code="position" /> propriety can take those values:</p>
          <ul>
            <li><Ic code="static" /> : default</li>
            <li><Ic code="relative" /> : relative to its "static" / "normal" / "default" position. (It is not relative to its parent element). So if I then use a proprieties like top or left, it will move the element from the top and from the left of his default static position. It is also used to pin an element on the page (so that its children elements can be positioned absolute relatively to it)</li>
            <li><Ic code="absolute" /> : is absolute compared to its 1st positioned parent. If there are no positioned parent, it will be absolute compared to the body. So you basically remove it from the flow (other elements of the page will ignore it and act like it was not here)</li>
          </ul>
          <p>So a common patern is:</p>
          <ul>
            <li>I create a first div with <Ic code="position: relative" /> (not because I want to move it but just because I want to pin it)</li>
            <li>I put an inner div inside my div with <Ic code="position: absolute" />. So it will be positioned relatively to my parent div. And now I can use left and right to position it within my div</li>
          </ul>
          <PrismCode code={code.positioning} language={language} />
          <p><b>Offset properties:</b> <Ic code="left right top bottom" />. Can be set in px, em, or %. Doesn't work on static elements.</p>
          <p><b>Z-index:</b> greater <Ic code="z-index" /> will be in front of lower <Ic code="z-index" />. Doesn't work on static elements.</p>
        </div>
      );
    }
    case 'display': {
      return (
        <div>
          <p>Display propriety dictate if an element can share horizontal space with others or not</p>
          <ul>
            <li><Ic code="inline" />: only take the horizontal space of its width (default for tags like <Ic code="<em> <strong> <a>" /> etc…). Inline elements cannot be altered in size by height and width css proprieties.</li>
            <li><Ic code="block" />: will fill the entire horizontal space of the page. Their height by default is the height of their content. But their height and width can by modified by CSS proprieties. (default for tags like <Ic code="<h1> <h6> <p> <div> <footer>" /> …)</li>
            <li><Ic code="inline-block" />: combine properties of both: they will appear next to each other but you can specify their dimensions using width and height (by default for images)</li>
          </ul>
        </div>
      );
    }
    case 'flexbox': {
      return (
        <div>
          <ul>
            <li>Flexboxs need the <Ic code="display: flex" /> property</li>
            <li>Flebox properties:
              <ul>
                <li><Ic code="justify-content: space-around" /> : will distributes items equally horizontally</li>
                <li><Ic code="justify-content: space-between" /> : will equally distribute the space between my items (the first and last one will stay stick to the flexbox)</li>
                <li><Ic code="justify-content: center" /> : will align it vertically (even if they don't have the same height)</li>
              </ul>
            </li>
            <li>You then defines flex-items with the <Ic code="flex" /> property that takes 3 values:
              <ul>
                <li><Ic code="0" /> = cannot grow / <Ic code="1" /> = can grow (if you do it you can put width = auto)</li>
                <li><Ic code="0" /> = cannot shrink / <Ic code="1" /> = can shrink</li>
                <li><Ic code="200px" /> = width</li>
              </ul>
            </li>
            <li>You can then use the <Ic code=":nth-child" /> selectors</li>
          </ul>
          <p>Example:</p>
          <PrismCode code={code.flexbox} language={language} />
        </div>
      );
    }
    case 'float': {
      return (
        <div>
          <p><Ic code="float: left" /> or <Ic code="float: right" /> will move an element as far as left/right as possible. It must have a specified width (otherwise it will have the full width of its containing element and moving it right or left will not have any visible results).</p>
          <p>A floating element will be removed from the flow. Which means for example that if it is inside a div, this div will lose its height.</p>
        </div>
      );
    }
    case 'clear': {
      return (
        <div>
          <p>When an element is floating, if it doesn't take full width of the page, following elements will come next to it. To avoid that you can use the propriety <Ic code="clear" /> on the following elements. It will prevent them to go next to the floating element.</p>
          <ul>
            <li><Ic code="left" /> : the left side of the element will not touch any other element within the same containing element</li>
            <li><Ic code="right" /> : the right side of the element will not touch any other element within the same containing element</li>
            <li><Ic code="both" /> : neither sides of the element will touch any other element within the same containing element</li>
            <li><Ic code="none" /> : the can touch either sides</li>
          </ul>
        </div>
      );
    }
    case 'the-box-model': {
      return (
        <div>
          <img alt="box model" src="../../../assets/images/boxmodel.svg" />
          <p>Border style values : <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values" rel="noreferrer" target="_blank">Moz doc</a></p>
          <p>If an element with a fixed width has the property: <Ic code="margin: 0 auto;" />, it will center it in its containing elements.</p>
        </div>
      );
    }
    case 'margin-collapse': {
      return (
        <div>
          <p>Horizontal margins (let and right) between two elements are added together to define the space between those elements.</p>
          <p>On the contrary, vertical margin collapse. It means that they are packed together and thus the larger of the two vertical margins will set the distance between two elements:</p>
          <PrismCode code={code.marginCollapse} language={language} />
          <p>>>> There will be 40px of horizontal space between those two elements.</p>
          <p>>>> But There will be 30px of vertical space between those two elements (and not 50px)</p>
        </div>
      );
    }
    case 'overflow': {
      return (
        <div>
          <p>The <Ic code="overflow" /> property allows you to control what happens to a content if it spills or overflows outside its box :</p>
          <ul>
            <li><Ic code="hidden" /> : any content that overflows will be hidden from view.</li>
            <li><Ic code="scroll" /> : scrollbar will be added to the element's box so that the rest of the content can be viewed by scrolling.</li>
            <li><Ic code="visible" /> : the overflow content will be displayed outside of the containing element. (This is the default value).</li>
          </ul>
          <p>The overflow is set on a parent element to affect its child elements.</p>
          <p>You can also define <Ic code="overflow-x" /> or <Ic code="overflow-y" /> to only affect the horizontal or vertical part of the element that overflows the box</p>
        </div>
      );
    }
    case 'reset-default': {
      return (
        <div>
          <p>All web browsers have default stylesheet values (known as "user agent"). Often set a default value for padding and margin for example. So it is useful to reset those values with the <Ic code="*" /> propriety:</p>
          <PrismCode code={code.resetDefault} language={language} />
          <p>(When you set a value to 0 in CSS you don't need any unit measurement).</p>
          <p>Other proprieties may be useful to reset: <a href="https://discuss.codecademy.com/t/are-margin-and-padding-values-the-only-ones-that-need-reset/365556" rel="noreferrer" target="_blank">Code Ac</a></p>
        </div>
      );
    }
    case 'box-model-border-box': {
      return (
        <div>
          <p>By setting the default model of all HTML elements to border-box, with the <Ic code="box-sizing" /> propriety like that:</p>
          <PrismCode code={code.boxModelBorderBox} language={language} />
          <p>You define a new box model called "border-box" that have the following proprieties:</p>
          <ul>
            <li>The border thickness will be included inside the overall width and height of the box</li>
            <li>The padding will be included inside the overall width and height of the box</li>
            <li>So the height and width of the box will remained fixed (even if padding and border changes)</li>
          </ul>
          <img alt="border box model" src="border-box-model.png" />
          <p>Overall it makes that the width and height of your element is not affected by the padding and border.</p>
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Css;
