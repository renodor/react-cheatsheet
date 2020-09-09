/* eslint-disable max-len, react/jsx-one-expression-per-line */

import React from 'react';
import PrismCode from '../prism_code';
import { InlineCode as Ic } from '../inline_code';

const language = 'markup';

const code = {
  naming: '<tag attribute(name)="attribute(value)"> content </tag>',

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
    <meta property="og:url" content="https://www.myurl.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <meta property="og:locale" content="en_US" />

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
</form>`
  }
};

const Html = (props) => {
  switch (props.subSectionName) {
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
          <p>A form is defined by a <Ic code="<form>" /> tag. Inside you define :</p>
          <ul>
            <li>An <Ic code="action" /> : where to send the info</li>
            <li>A <Ic code="method" /> : the HTTP request type (GET, POST, PUT, PATCH, DELETE)</li>
          </ul>
          <PrismCode code={code.forms.form} language={language} />
          <p><Ic code="<input>" /> tags allows to create fields where visitors can type information. Input tags must have different attributes:</p>
          <ul>
            <li>name = that is how you will identify it when the form is send</li>
            <li>value = the value of the field & the placeholder value before the user type it (will be paired with the name).</li>
            <li>type = determine how it will render :
              <ul>
                <li>text = normal text field</li>
                <li>password = field where what you type is hidden</li>
                <li>number = restrict to number. You can add attributes:</li>
              </ul>
            </li>
            <li>name = that is how you will identify it when the form is send</li>
            <li>name = that is how you will identify it when the form is send</li>
            <li>name = that is how you will identify it when the form is send</li>
            <li>name = that is how you will identify it when the form is send</li>
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
