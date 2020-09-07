import React from 'react';
import PrismCode from '../prism_code';

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
    <meta property="og:title" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.myurl.com/" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="" />
    <meta property="og:site_name" content="" />

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="">
    <meta name="twitter:site" content="@mywebsite">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:creator" content="@mywebsite">
    <meta name="twitter:image:src" content="">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/ae46c9edb9.js" crossorigin="anonymous"></script>

    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>`
};

const Html = (props) => {
  switch (props.subSectionName) {
    case 'naming': {
      return (
        <PrismCode code={code.naming} language={language} />
      );
    }
    case 'html-boilerplate': {
      return (
        <div>
          <PrismCode code={code.boilerplate} language={language} />
        </div>
      );
    }
    default: {
      return 'nada';
    }
  }
};

export default Html;
