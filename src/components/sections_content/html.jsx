/* eslint-disable max-len, react/jsx-one-expression-per-line, react/no-unescaped-entities */

import React from 'react';
import PrismCode from '../prism_code';

const language = 'markup';

const code = {
  naming: '<tag attribute(name)="attribute(value)">content</tag>',

  boilerplate: `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">


    <!-- Facebook Open Graph data -->
    <meta property="og:url" content="https://www.myurl.com/'}</samp>
    <meta property="og:type" content="website'}</samp>
    <meta property="og:title" content="'}</samp>
    <meta property="og:description" content="'}</samp>
    <meta property="og:image" content="'}</samp>
    <meta property="og:locale" content="en_US'}</samp>

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="">
    <meta name="twitter:site" content="@mywebsite">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:creator" content="@mywebsite">
    <meta name="twitter:image:src" content="">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/ae46c9edb9.js" crossorigin="anonymous"></script>

    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>`,

  tables: `
<table>
   <thead> <!-- table head -->
      <tr>
         <th>xxx</th>
         <th>xxx</th>
      </tr> <!-- table row -->
   </thead>
   <tbody> <!-- table body -->
      <tr>
         <td>xxx</td> <!-- cell -->
         <td colspan="2">xxx</td> <!-- merge 2 columns -->
         <td rowspan="2">xxx</td> <!-- merge 2 rows -->
      </tr>
   </tbody>
   <tfoot> <!-- table footer -->
      <tr>
         <td>xxx</td>
      </tr>
   </tfoot>
</table>`,

  forms: {
    form: `
<form action="/example.html" method="POST">
</form>`,

    input: `
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <input type="text" name="food" value="Already pre-filled" id="meal">
  <input type="submit" value="Submit">
</form>`,

    select: `
<form action="/example.html">
    <label for="lunch">What's for lunch?</label>
    <select name="lunch" id="lunch">
      <option value="pizza">Pizza</option>
      <option value="pizza">Curry</option>
      <option value="pizza">Salad</option>
      <option value="pizza">Ramen</option>
      <option value="pizza">Tacos</option>
    </select>
    <input type="submit" value="Submit">
</form>`,

    datalist: `
<form action="/example.html">
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">
  <datalist id="cities">
    <option value="New Yor City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico"></option>
    <option value="Bandol"></option>
  </datalist>
  <input type="submit" value="Submit">
</form>`
  }
};

const Html = ({ subSectionName }) => {
  switch (subSectionName) {
    case 'naming': {
      return (
        <div><PrismCode code={code.naming} language={language} /></div>
      );
    }
    case 'boilerplate': {
      return (
        <div>
          <p>HTML Boilerplate with facebook meta-tags, twitter meta-tags, Bootstrapp (CSS CDN, JS and JS dependencies jQuery & Popper.js) and fontawesome</p>
          <PrismCode code={code.boilerplate} language={language} />
        </div>
      );
    }
    case 'tables': {
      return (
        <div><PrismCode code={code.tables} language={language} /></div>
      );
    }
    case 'forms': {
      return (
        <div>
          <p>A form is defined by a <samp>{'<form>'}</samp> tag. Inside you define :</p>
          <ul>
            <li>An <samp>action</samp> : where to send the form data when submited</li>
            <li>A <samp>method</samp> : the HTTP request type (GET, POST, PUT, PATCH, DELETE)</li>
          </ul>
          <PrismCode code={code.forms.form} language={language} />
          <p><samp>{'<input>'}</samp> tags allows to create fields where visitors can type information. Input tags must have different attributes:</p>
          <ul>
            <li><samp>name</samp> : that is how you will identify it when the form is send</li>
            <li><samp>value</samp> : the value of the field & the placeholder value before the user type it (will be paired with the name).</li>
            <li><samp>type</samp> : determine how it will render :
              <ul>
                <li><samp>text</samp> : normal text field</li>
                <li><samp>password</samp> : field where what you type is hidden</li>
                <li><samp>number</samp> : restrict to number. You can add attributes:</li>
                <ul>
                  <li><samp>step=1</samp> : will create arrows inside the input and allows the user to increase/decrease numbers 1 by 1</li>
                </ul>
              </ul>
            </li>
            <li><samp>range</samp> : will create a slider. You can add attributes:
              <ul>
                <li><samp>min</samp></li>
                <li><samp>max</samp></li>
                <li><samp>step</samp></li>
              </ul>
            </li>
            <li><samp>checkbox</samp> don't forget to put a value! (it will be invisible but this is what will be send to the form). And then to associate it to a label (so the user knows what this checkbox correspond to)</li>
            <li><samp>radio</samp> : to group radio together they must have the same name (and thus you can only select one)</li>
            <li><samp>text</samp> and <samp>list=id</samp> = will pair the input to a datalist with the same id</li>
            <li><samp>submit</samp> : the "value" will be the displayed text. When clicked, it will trigger the form action</li>
          </ul>
          <p><samp>label</samp> tags are paired with input and serve as their "display name". You pair label with an input thanks to the attribute <samp>for</samp>:</p>
          <ul>
            <li>The input must have an <samp>id</samp>, and the label must have the same <samp>for</samp></li>
            <li>Important when using checkbox or radio button. Because when you click on the label it will check the box</li>
          </ul>
          <PrismCode code={code.forms.input} language={language} />
          <p><samp>{'<select>'}</samp> tag allows you to create dropdown lists. Inside the select tags you need <samp>{'<options>'}</samp> tags each with a value with your different options:</p>
          <ul>
            <li>The <samp>value</samp> of <samp>{'<option>'}</samp> is the text that will be send to the form</li>
            <li>The text between the opening and closing <samp>{'<options>'}</samp> tag is the displayed text</li>
          </ul>
          <PrismCode code={code.forms.select} language={language} />
          <p><samp>{'<datalist>'}</samp> tag also create a dropdown but inside a text field, so that users can type into it to easily find options. Inside the datalist you put <samp>{'<options>'}</samp> tags. The <samp>{'<input>'}</samp> tag where the <samp>{'<datalist>'}</samp> is must have a <samp>list</samp> attribute with the value of the datalist id</p>
          <PrismCode code={code.forms.datalist} language={language} />
          <p><samp>{'<textarea>'}</samp> tags are used to create a bigger text field. If you want a default text you need to include it between the opening and closing textarea tags. This field can take arguments:</p>
          <ul>
            <li><samp>rows</samp> : determine the width of the field</li>
            <li><samp>cols</samp> :  determine the height</li>
          </ul>
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Html;
