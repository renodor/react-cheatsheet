/* eslint-disable max-len, react/jsx-one-expression-per-line, react/no-unescaped-entities */

import React from 'react';
import PrismCode from '../prism_code';

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
          <p><samp>id</samp> > <samp>class</samp> > <samp>element</samp> >>> The most specific is always the one taken into account</p>
          <p>The last CSS sheet style link will have priority against the one placed above. Same for JS. (So for example always put your own CSS after jQuery or Boostrap)</p>
        </div>
      );
    }
    case 'units': {
      return (
        <div>
          <ul>
            <li><samp>vh</samp> : viewport height = screen height (1vh = 1% of screen height, 100vh = 100% of screen height)</li>
            <li><samp>vw</samp> : viewport width = screen width (1vw = 1% of screen width, 100vw = 100% of screen width)</li>
            <li><samp>em</samp> : relative to the font-size of the element (2em = 2 times the size of the current font)</li>
            <li><samp>rem</samp> : relative to the font-size of root element (2em = 2 times the size of the root font)</li>
            <li><samp>%</samp> : relative to the parent element</li>
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
          <p>By default, blocks will stack on top of each other. Then the <samp>position</samp> propriety can take those values:</p>
          <ul>
            <li><samp>static</samp> : default</li>
            <li><samp>relative</samp> : relative to its "static" / "normal" / "default" position. (It is not relative to its parent element). So if I then use a proprieties like top or left, it will move the element from the top and from the left of his default static position. It is also used to pin an element on the page (so that its children elements can be positioned absolute relatively to it)</li>
            <li><samp>absolute</samp> : is absolute compared to its 1st positioned parent. If there are no positioned parent, it will be absolute compared to the body. So you basically remove it from the flow (other elements of the page will ignore it and act like it was not here)</li>
          </ul>
          <p>So a common patern is:</p>
          <ul>
            <li>I create a first div with <samp>position: relative</samp> (not because I want to move it but just because I want to pin it)</li>
            <li>I put an inner div inside my div with <samp>position: absolute</samp>. So it will be positioned relatively to my parent div. And now I can use left and right to position it within my div</li>
          </ul>
          <PrismCode code={code.positioning} language={language} />
          <p><b>Offset properties:</b> <samp>left right top bottom</samp>. Can be set in px, em, or %. Doesn't work on static elements.</p>
          <p><b>Z-index:</b> greater <samp>z-index</samp> will be in front of lower <samp>z-index</samp>. Doesn't work on static elements.</p>
        </div>
      );
    }
    case 'display': {
      return (
        <div>
          <p>Display propriety dictate if an element can share horizontal space with others or not</p>
          <ul>
            <li><samp>inline</samp>: only take the horizontal space of its width (default for tags like <samp>{'<em> <strong> <a>'}</samp> etc…). Inline elements cannot be altered in size by height and width css proprieties.</li>
            <li><samp>block</samp>: will fill the entire horizontal space of the page. Their height by default is the height of their content. But their height and width can by modified by CSS proprieties. (default for tags like <samp>{'<h1> <h6> <p> <div> <footer>'}</samp> …)</li>
            <li><samp>inline-block</samp>: combine properties of both: they will appear next to each other but you can specify their dimensions using width and height (by default for images)</li>
            <li><samp>none</samp> : the element will be completely removed from the page. (Different with <samp>visibility: hidden</samp>, that will make the element invisible, but the space reserved for it will stay.</li>
          </ul>
        </div>
      );
    }
    case 'flexbox': {
      return (
        <div>
          <ul>
            <li>Flexboxs need the <samp>display: flex</samp> property</li>
            <li>Flebox properties:
              <ul>
                <li><samp>justify-content: space-around</samp> : will distributes items equally horizontally</li>
                <li><samp>justify-content: space-between</samp> : will equally distribute the space between my items (the first and last one will stay stick to the flexbox)</li>
                <li><samp>justify-content: center</samp> : will align it vertically (even if they don't have the same height)</li>
              </ul>
            </li>
            <li>You then defines flex-items with the <samp>flex</samp> property that takes 3 values:
              <ul>
                <li><samp>0</samp> = cannot grow / <samp>1</samp> = can grow (if you do it you can put width = auto)</li>
                <li><samp>0</samp> = cannot shrink / <samp>1</samp> = can shrink</li>
                <li><samp>200px</samp> = width</li>
              </ul>
            </li>
            <li>You can then use the <samp>:nth-child</samp> selectors</li>
          </ul>
          <p>Example:</p>
          <PrismCode code={code.flexbox} language={language} />
        </div>
      );
    }
    case 'float': {
      return (
        <div>
          <p><samp>float: left</samp> or <samp>float: right</samp> will move an element as far as left/right as possible. It must have a specified width (otherwise it will have the full width of its containing element and moving it right or left will not have any visible results).</p>
          <p>A floating element will be removed from the flow. Which means for example that if it is inside a div, this div will lose its height.</p>
        </div>
      );
    }
    case 'clear': {
      return (
        <div>
          <p>When an element is floating, if it doesn't take full width of the page, following elements will come next to it. To avoid that you can use the propriety <samp>clear</samp> on the following elements. It will prevent them to go next to the floating element.</p>
          <ul>
            <li><samp>left</samp> : the left side of the element will not touch any other element within the same containing element</li>
            <li><samp>right</samp> : the right side of the element will not touch any other element within the same containing element</li>
            <li><samp>both</samp> : neither sides of the element will touch any other element within the same containing element</li>
            <li><samp>none</samp> : the can touch either sides</li>
          </ul>
        </div>
      );
    }
    case 'the-box-model': {
      return (
        <div>
          <img alt="box model" src="../../../assets/images/boxmodel.svg" />
          <p>Border style values : <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values" rel="noreferrer" target="_blank">Moz doc</a></p>
          <p>If an element with a fixed width has the property: <samp>margin: 0 auto;</samp>, it will center it in its containing elements.</p>
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
          <p>The <samp>overflow</samp> property allows you to control what happens to a content if it spills or overflows outside its box :</p>
          <ul>
            <li><samp>hidden</samp> : any content that overflows will be hidden from view.</li>
            <li><samp>scroll</samp> : scrollbar will be added to the element's box so that the rest of the content can be viewed by scrolling.</li>
            <li><samp>visible</samp> : the overflow content will be displayed outside of the containing element. (This is the default value).</li>
          </ul>
          <p>The overflow is set on a parent element to affect its child elements.</p>
          <p>You can also define <samp>overflow-x</samp> or <samp>overflow-y</samp> to only affect the horizontal or vertical part of the element that overflows the box</p>
        </div>
      );
    }
    case 'reset-default': {
      return (
        <div>
          <p>All web browsers have default stylesheet values (known as "user agent"). Often set a default value for padding and margin for example. So it is useful to reset those values with the <samp>*</samp> propriety:</p>
          <PrismCode code={code.resetDefault} language={language} />
          <p>(When you set a value to 0 in CSS you don't need any unit measurement).</p>
          <p>Other proprieties may be useful to reset: <a href="https://discuss.codecademy.com/t/are-margin-and-padding-values-the-only-ones-that-need-reset/365556" rel="noreferrer" target="_blank">Code Ac</a></p>
        </div>
      );
    }
    case 'box-model-border-box': {
      return (
        <div>
          <p>By setting the default model of all HTML elements to border-box, with the <samp>box-sizing</samp> propriety like that:</p>
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
            <li><b>RGB</b> = red, green, blue. Each parameter defines the intensity of that color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%). Synthax: <samp>rgb(red, green, blue);</samp></li>
            <li><b>RGBA</b> = red, green, blue, alpha. Alows you to add a forth value between 0.0 and 1.0 define the transparency/opacity of your color. So <samp>color:transparent</samp> = <samp>color: rgba(0, 0, 0, 0);</samp></li>
          </ul>
          <p>In RGB system, if you put the same value for the 3 colors, you are on the grey scale. At 0 you are totally black and at 255 you are totally white. And in between you have greyscales:</p>
          <img alt="rgb grayscale" src="../../assets/images/rgb-greyscale.png" />
          <p><b>HSL Model:</b></p>
          <p>HSL = hue, saturation, lightness. Synthax: <samp>color: hsl(120, 60%, 70%)</samp> :</p>
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
            <li><samp>serif</samp></li>
            <li><samp>san-serif</samp></li>
            <li><samp>monospace</samp></li>
          </ul>
          <p><b>Font weight</b> values range from 100 to 900 and can only be multiples of 100 (100, 200, 500...)</p>
          <p><b>Font proprieties:</b></p>
          <ul>
            <li><samp>font-style: italic;</samp></li>
            <li><samp>word-spacing: Xem;</samp> (by default = 0.25em)</li>
            <li><samp>letter-spacing: Xem;</samp></li>
            <li><samp>text-transform:</samp>
              <ul>
                <li><samp>uppercase</samp></li>
                <li><samp>lowercase</samp></li>
                <li><samp>capitalize</samp></li>
              </ul>
            </li>
            <li><samp>line-height</samp> (modify the leading of the text):
              <ul>
                <li>can take an unitless value, like "1.2". (It will define line height according to font size)</li>
                <li>can take a unite value in px, %, em, rem...</li>
              </ul>
            </li>
          </ul>
          <img alt="css line height" src="../../assets/images/line-height.png" />
          <p><b>Font-face:</b></p>
          <p>You can use <samp>font-face</samp> to load any font you want into the browser of your user. You can use it with your own font in your own server or with an external source. You need to specify :</p>
          <ul>
            <li>the name of the font</li>
            <li>the direction of the font file</li>
            <li>the format of the font file (Different browsers support different font types, so providing multiple font file options will support more browsers).</li>
          </ul>
          <PrismCode code={code.fontFace} language={language} />
        </div>
      );
    }
    case 'grid': {
      return (
        <div>
          <p>To work, a CSS grid needs a grid container and grid items.</p>
          <p>Grid containers: must have the propriety: <samp>display: grid;</samp></p>
          <p>Inside containers you define <b>columns:</b></p>
          <ul>
            <li>By default grids contain 1 column</li>
            <li>Then you can define the columns of a grid with the propriety: <samp>grid-template-columns: 200px 300px</samp> (This means there will be 2 columns, the first one of 300px and the second one of 300px)</li>
            <li>You can define column width in px or % (of the total grid width), and you can mix between units in the same grid</li>
          </ul>
          <PrismCode code={code.gridColumns} language={language} />
          <p>Inside containers you also define rows:</p>
          <ul>
            <li>Work the same way as columns, with the propriety : <samp>grid-template-rows: 200px 300px</samp> (only that it defines the height instead of the width. So if you define it in %, it is according to grid height)</li>
            <li>By default, rows are sized to fit inside the grid</li>
          </ul>
          <p>You can also use one propriety for <b>both rows and columns:</b> <samp>colums: grid-template</samp></p>
          <PrismCode code={code.gridTemplate} language={language} />
          <p>(Before the / are rows, after are columns)</p>
          <p><b>Fractions:</b> the <samp>fr'}</samp> unit define the size of columns and rows as a fraction of grid length.</p>
          <p><u>Ex:</u> <samp>grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr</samp> >>> first row will be 2/4 of the grid, second row 1/4, third row 1/4. First column will be 1/5, second 3/5, third 1/5.</p>
          <p>(If you use fr combined with other units ; the fr will represent a fraction of the available space.)</p>
          <p><b>Repeat:</b> You can use the repeat fonction like that: <samp>grid-template-columns: repeat(3, 100px)</samp> >>> is the same as writting : <samp>grid-template-columns: 100px 100px 100px</samp></p>
          <p><b>Minmax:</b> <samp>grid-template-columns: 100px minmax(100px, 500px) 100px</samp> >>> the 2nd column will vary between 100px and 500px depending on the size of the overall grid. (For minmax to work your grid can't have a fixed size).</p>
          <p><b>Grid Gap:</b></p>
          <ul>
            <li><samp>grid-row-gap: 10px'}</samp> will add 10px between your rows</li>
            <li><samp>grid-column-gap: 10px'}</samp> will add 10px between your columns</li>
            <li><samp>grid-gap: 20px 10px'}</samp> will add 20px between rows and 10px between columns</li>
          </ul>
          <p><b>Grid items:</b></p>
          <p><samp>grid-row-start'}</samp> and <samp>grid-row-end'}</samp> make a single grid items take up multiple rows. Same for <samp>grid-column-start'}</samp> and <samp>grid-column-end'}</samp>.</p>
          <PrismCode code={code.gridItem} language={language} />
          <p>>>> The element .item will starts at row 1 and stops at row 3 (so it will take the space of 2 rows). Same for columns.</p>
          <p>You can also use it like that: <samp>grid-row: 1 / 3'}</samp> and <samp>grid-column: 1 / 3'}</samp> >>> Will start at 1 and stop at 3.</p>
          <p>You can also use the span kw: <samp>grid-column: 4 / span 2</samp> >>> means item will starts at column 4 and take 2 spaces. (So stops at 6).</p>
          <p>So all the following statements are exactly the same:</p>
          <ul>
            <li><samp>grid-column: 4 / span 2</samp></li>
            <li><samp>grid-column: 4 / 6</samp></li>
            <li><samp>grid-column-start: span 2; grid-column-end: 6</samp></li>
          </ul>
          <p><b>Grid area:</b> <samp>grid-area: w / x / y / z'}</samp> allows you to define all your rows and columns at the same time:</p>
          <ul>
            <li>w = grid-row-start</li>
          </ul>
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Css;
