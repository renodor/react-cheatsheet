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
}`,

  fontFace: `
@font-face {
  font-family: "Roboto";
  src: url(fonts/Roboto.woff2) format('woff2'),
       url(fonts/Roboto.woff) format('woff'),
       url(fonts/Roboto.tff) format('truetype');
}`,

  gridColumns: `
.grid {
  display: grid;
  width: 500px;
  grid-template-columns: 200px 300px;
}`,

  gridTemplate: `
.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template: 200px 300px / 20% 10% 70%;
}`,

  gridItem: `
.item {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}`,

  gridExampleHtml: `
<div class="container">
  <header>Wielcom!</header>
  <nav>Links</nav>
  <section class="info">Info!</section>
  <section class="services">Services!</section>
  <footer>Contact us!</footer>
</div>`,

  gridExampleCss: `
.container {
  display: grid;
  max-width: 900px;
  position: relative;
  margin: auto;
  grid-template-areas: "head head"
                       "nav nav"
                       "info services"
                       "footer footer";
  grid-template-rows: 300px 120px 800px 120px;
  grid-template-columns: 1fr 3fr;
}

header {
  grid-area: head;
}

nav {
  grid-area: nav;
}

.info {
  grid-area: info;
}

.services {
  grid-areas: services;
}

footer {
  grid-area: footer;
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
            <li><Ic code="none" /> : the element will be completely removed from the page. (Different with <Ic code="visibility: hidden" />, that will make the element invisible, but the space reserved for it will stay.</li>
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
    case 'colors': {
      return (
        <div>
          <p><b>RGB Model:</b></p>
          <ul>
            <li><b>RGB</b> = red, green, blue. Each parameter defines the intensity of that color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%). Synthax: <Ic code="rgb(red, green, blue);" /></li>
            <li><b>RGBA</b> = red, green, blue, alpha. Alows you to add a forth value between 0.0 and 1.0 define the transparency/opacity of your color. So <Ic code="color:transparent" /> = <Ic code="color: rgba(0, 0, 0, 0);" /></li>
          </ul>
          <p>In RGB system, if you put the same value for the 3 colors, you are on the grey scale. At 0 you are totally black and at 255 you are totally white. And in between you have greyscales:</p>
          <img alt="rgb grayscale" src="../../assets/images/rgb-greyscale.png" />
          <p><b>HSL Model:</b></p>
          <p>HSL = hue, saturation, lightness. Synthax: <Ic code="color: hsl(120, 60%, 70%)" /> :</p>
          <ul>
            <li>first number = the degree of the hue (= an angle on a color wheel. Red = 0, Green = 120, Blue = 240)</li>
            <li>second number = the saturation % = intensity or purity of the color (0% = grey, 100% = richest color)</li>
            <li>third number = lightness % = how light or dark the color is (0% = black, 50% = normal, 100% = white)</li>
          </ul>
          <p>Useful if you just want to change the lightness or saturation of a color (more complex in RGB). Also usfull if you whant to have a set of colors that work well together: same saturation and lightness.</p>
          <p>As for RGB you also have the <b>HSLA</b> model with transparency.</p>
          <img alt="hsl wheel" src="../../assets/images/hsl-wheel.png" />
        </div>
      );
    }
    case 'typography': {
      return (
        <div>
          <p>In CSS you have the system of fallback fonts:</p>
          <PrismCode code={code.typography} language={language} />
          <p>sThis says "use Garamond, if not available, use Times, if not available, any serif font pre-installed on the user device".</p>
          <p><b>Font types are:</b></p>
          <ul>
            <li><Ic code="serif" /></li>
            <li><Ic code="san-serif" /></li>
            <li><Ic code="monospace" /></li>
          </ul>
          <p><b>Font weight</b> values range from 100 to 900 and can only be multiples of 100 (100, 200, 500...)</p>
          <p><b>Font proprieties:</b></p>
          <ul>
            <li><Ic code="font-style: italic;" /></li>
            <li><Ic code="word-spacing: Xem;" /> (by default = 0.25em)</li>
            <li><Ic code="letter-spacing: Xem;" /></li>
            <li><Ic code="text-transform:" />
              <ul>
                <li><Ic code="uppercase" /></li>
                <li><Ic code="lowercase" /></li>
                <li><Ic code="capitalize" /></li>
              </ul>
            </li>
            <li><Ic code="line-height" /> (modify the leading of the text):
              <ul>
                <li>can take an unitless value, like "1.2". (It will define line height according to font size)</li>
                <li>can take a unite value in px, %, em, rem...</li>
              </ul>
            </li>
          </ul>
          <img alt="css line height" src="../../assets/images/line-height.png" />
          <p><b>Font-face:</b></p>
          <p>You can use <Ic code="font-face" /> to load any font you want into the browser of your user. You can use it with your own font in your own server or with an external source. You need to specify :</p>
          <ul>
            <li>the name of the font</li>
            <li>the direction of the font file</li>
            <li>the format of the font file (Different browsers support different font types, so providing multiple font file options will support more browsers).</li>
          </ul>
          <PrismCode code={code.fontFace} language={language}/>
        </div>
      );
    }
    case 'grid': {
      return (
        <div>
          <p>To work, a CSS grid needs a grid container and grid items.</p>
          <p>Grid containers: must have the propriety: <Ic code="display: grid;" /></p>
          <p>Inside containers you define <b>columns:</b></p>
          <ul>
            <li>By default grids contain 1 column</li>
            <li>Then you can define the columns of a grid with the propriety: <Ic code="grid-template-columns: 200px 300px;" /> (This means there will be 2 columns, the first one of 300px and the second one of 300px)</li>
            <li>You can define column width in px or % (of the total grid width), and you can mix between units in the same grid</li>
          </ul>
          <PrismCode code={code.gridColumns} language={language} />
          <p>Inside containers you also define rows:</p>
          <ul>
            <li>Work the same way as columns, with the propriety : <Ic code="grid-template-rows: 200px 300px;" /> (only that it defines the height instead of the width. So if you define it in %, it is according to grid height)</li>
            <li>By default, rows are sized to fit inside the grid</li>
          </ul>
          <p>You can also use one propriety for <b>both rows and columns:</b> <Ic code="colums: grid-template;" /></p>
          <PrismCode code={code.gridTemplate} language={language} />
          <p>(Before the / are rows, after are columns)</p>
          <p><b>Fractions:</b> the <Ic code="fr" /> unit define the size of columns and rows as a fraction of grid length.</p>
          <p><u>Ex:</u> <Ic code="grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;" /> >>> first row will be 2/4 of the grid, second row 1/4, third row 1/4. First column will be 1/5, second 3/5, third 1/5.</p>
          <p>(If you use fr combined with other units ; the fr will represent a fraction of the available space.)</p>
          <p><b>Repeat:</b> You can use the repeat fonction like that: <Ic code="grid-template-columns: repeat(3, 100px);" /> >>> is the same as writting : <Ic code="grid-template-columns: 100px 100px 100px;" /></p>
          <p><b>Minmax:</b> <Ic code="grid-template-columns: 100px minmax(100px, 500px) 100px;" /> >>> the 2nd column will vary between 100px and 500px depending on the size of the overall grid. (For minmax to work your grid can't have a fixed size).</p>
          <p><b>Grid Gap:</b></p>
          <ul>
            <li><Ic code="grid-row-gap: 10px" /> will add 10px between your rows</li>
            <li><Ic code="grid-column-gap: 10px" /> will add 10px between your columns</li>
            <li><Ic code="grid-gap: 20px 10px" /> will add 20px between rows and 10px between columns</li>
          </ul>
          <p><b>Grid items:</b></p>
          <p><Ic code="grid-row-start" /> and <Ic code="grid-row-end" /> make a single grid items take up multiple rows. Same for <Ic code="grid-column-start" /> and <Ic code="grid-column-end" />.</p>
          <PrismCode code={code.gridItem} language={language} />
          <p>>>> The element .item will starts at row 1 and stops at row 3 (so it will take the space of 2 rows). Same for columns.</p>
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Css;
