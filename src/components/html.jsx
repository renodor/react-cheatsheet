import React from 'react';
import Prism from "prismjs";

const Html = () => {
  return (
          <div id="html-container">
            <h1>HTML</h1>

            <section id="html-naming">
              <h2 class="section-title">Naming</h2>

              <div class="code-block">
                <pre><code id="html-naming-code" class="language-html">&lt;tag attribute(name)="attribute(value)"&gt; content &lt;/tag&gt;</code></pre>
                <button class="btn btn-light copy-btn" data-clipboard-target="#html-naming-code">COPY</button>
              </div>
            </section>

            <section id="html-boilerplate">
              <h2 class="section-title">HTML Boilerplate</h2>

              <div class="code-block">
                <pre><code id="html-boilerplate-code" class="language-markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;!-- Required meta tags --&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
    &lt;meta name="description" content=""&gt;


    &lt;!-- Facebook Open Graph data --&gt;
    &lt;meta property="og:title" content="" /&gt;
    &lt;meta property="og:type" content="website" /&gt;
    &lt;meta property="og:url" content="https://www.myurl.com/" /&gt;
    &lt;meta property="og:image" content="" /&gt;
    &lt;meta property="og:description" content="" /&gt;
    &lt;meta property="og:site_name" content="" /&gt;

    &lt;!-- Twitter Card data --&gt;
    &lt;meta name="twitter:card" content=""&gt;
    &lt;meta name="twitter:site" content="@mywebsite"&gt;
    &lt;meta name="twitter:title" content=""&gt;
    &lt;meta name="twitter:description" content=""&gt;
    &lt;meta name="twitter:creator" content="@mywebsite"&gt;
    &lt;meta name="twitter:image:src" content=""&gt;

    &lt;!-- Bootstrap CSS --&gt;
    &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"&gt;

    &lt;!-- Font Awesome --&gt;
    &lt;script src="https://kit.fontawesome.com/ae46c9edb9.js" crossorigin="anonymous"&gt;&lt;/script&gt;

    &lt;!-- My CSS --&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;

    &lt;title&gt;Hello, world!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;

    &lt;!-- jQuery first, then Popper.js, then Bootstrap JS --&gt;
    &lt;script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"&gt;&lt;/script&gt;
    &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"&gt;&lt;/script&gt;
    &lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
                </code></pre>

                <button class="btn btn-light copy-btn" data-clipboard-target="#html-boilerplate-code">
                 COPY
                </button>

              </div>

            </section>

            <section id="html-tables">
              <h2 class="section-title">HTML Tables</h2>

              <div class="code-block">
                <pre><code id="html-tables-code" class="language-markup">&lt;table&gt;
   &lt;thead&gt; &lt;!-- table head --&gt;
      &lt;tr&gt;
         &lt;th&gt;xxx&lt;/th&gt;
         &lt;th&gt;xxx&lt;/th&gt;
      &lt;/tr&gt; &lt;!-- table row --&gt;
   &lt;/thead&gt;
   &lt;tbody&gt; &lt;!-- table body --&gt;
      &lt;tr&gt;
         &lt;td&gt;xxx&lt;/td&gt; &lt;!-- cell --&gt;
         &lt;td colspan="2"&gt;xxx&lt;/td&gt; &lt;!-- merge 2 columns --&gt;
         &lt;td rowspan="2"&gt;xxx&lt;/td&gt; &lt;!-- merge 2 rows --&gt;
      &lt;/tr&gt;
   &lt;/tbody&gt;
   &lt;tfoot&gt;
      &lt;tr&gt;
         &lt;td&gt;xxx&lt;/td&gt;
      &lt;/tr&gt;
   &lt;/tfoot&gt; &lt;!-- table footer --&gt;
&lt;/table&gt;</code></pre>

                <button class="btn btn-light copy-btn" data-clipboard-target="#html-tables-code">
                 COPY
                </button>

              </div>

            </section>

            <section id="html-forms">
              <h2 class="section-title">HTML Forms</h2>

              <p>A form is defined by a <span class="simple-code">&lt;form&gt;</span> tag. Inside you define :
                  <ul>
                    <li>An <span class="simple-code">action</span> = where to send the info</li>
                    <li>A <span class="simple-code">method</span> = what to do when the form is submitted</li>
                  </ul>
              </p>
              <div class="code-block">
                <pre><code id="html-forms-code" class="language-markup">&lt;form action="/example.html" method="POST"&gt;
&lt;/form&gt;</code></pre>
                <button class="btn btn-light copy-btn" data-clipboard-target="#html-forms-code">
                 COPY
                </button>
              </div>
              <br />
              <p><span class="simple-code">&lt;input&gt;</span> tags allows to create fields where visitors can type information. Input tags must have different attributes:
                  <ul>
                    <li><span class="simple-code">name</span> = that is how you will identify it when the form is send</li>
                    <li><span class="simple-code">value </span> = the value of the field & the placeholder value before the user type it (will be paired with the name).</li>
                    <li><span class="simple-code">type</span> = determine how it will render :
                      <ul>
                        <li><span class="simple-code">text</span> = normal text field</li>
                        <li><span class="simple-code">password</span> = field where what you type is hidden</li>
                        <li><span class="simple-code">number</span> = restrict to number. You can add attributes:
                          <ul>
                            <li><span class="simple-code">step=1</span> = will create arrows inside the input and allows the user to increase/decrease numbers 1 by 1</li>
                          </ul>
                        </li>
                        <li><span class="simple-code">range</span> = will create a slider. You can add attributes:</li>
                          <ul>
                            <li><span class="simple-code">min</span></li>
                            <li><span class="simple-code">max</span></li>
                            <li><span class="simple-code">step</span></li>
                          </ul>
                        <li><span class="simple-code">checkbox</span> = don't forget to put a value! (it will be invisible but this is what will be send to the form).  And then to associate it to a label (so that the user knows what this checkbox correspond to)</li>
                        <li><span class="simple-code">radio</span> = to group radio together they must have the same name (and thus you can only select one)</li>
                        <li><span class="simple-code">text</span> and <span class="simple-code">list=id</span> = will pair the input to a datalist with the same id</li>
                        <li><span class="simple-code">submit</span> = the value argument will be the display text of the button</li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <p><span class="simple-code">&lt;label&gt;</span> tags are paired with input and serve as their "display name". You type the name of the label between the opening and closing tag and you pair it with an input with the attribute <span class="simple-code">for</span>:
                  <ul>
                    <li>The input must have an <span class="simple-code">id</span>, and the label must have the same <span class="simple-code">for</span></li>
                    <li>Important for ex when using checkbox or radio button. Because when you click on the label it will check the box</li>
                  </ul>
                </p>
                <div class="code-block">
                <pre><code id="html-forms-label-code" class="language-markup">&lt;form action="/example.html" method="POST"&gt;
  &lt;label for="meal"&gt;What do you want to eat?&lt;/label&gt;
  &lt;input type="text" name="food" value="Already pre-filled" id="meal"&gt;
&lt;/form&gt;</code></pre>
                <button class="btn btn-light copy-btn" data-clipboard-target="#html-forms-label-code">COPY</button>
                </div>
                <br />
                <p><span class="simple-code">&lt;select&gt;</span> tag allows you to create dropdown lists. Inside the select tags you need <span class="simple-code">&lt;options&gt;</span> tags each with a <span class="simple-code">value</span> with your different options:
                  <ul>
                    <li>The <span class="simple-code">value</span> of<span class="simple-code">&lt;option&gt;</span> is the text that will be send to the form</li>
                    <li>The text between the opening and closing <span class="simple-code">&lt;options&gt;</span> tag is the displayed text</li>
                  </ul>
                </p>
                <div class="code-block">
                  <pre><code id="html-form-select-code" class="language-markup">&lt;form action="/example.html"&gt;
    &lt;label for="lunch"&gt;What's for lunch?&lt;/label&gt;
    &lt;select name="lunch" id="lunch"&gt;
      &lt;option value="pizza"&gt;Pizza&lt;/option&gt;
      &lt;option value="pizza"&gt;Curry&lt;/option&gt;
      &lt;option value="pizza"&gt;Salad&lt;/option&gt;
      &lt;option value="pizza"&gt;Ramen&lt;/option&gt;
      &lt;option value="pizza"&gt;Tacos&lt;/option&gt;
    &lt;/select&gt;
&lt;/form&gt;</code></pre>

                  <button class="btn btn-light copy-btn" data-clipboard-target="#html-form-select-code">COPY</button>
                </div>
                <br />
                <p><span class="simple-code">&lt;datalist&gt;</span> tag also create a dropdown but inside an text field, so that users can type into it to easily find options. Inside the datalist you put  <span class="simple-code">&lt;options&gt;</span> tags. The <span class="simple-code">&lt;input&gt;</span> tag where the <span class="simple-code">&lt;datalist&gt;</span> is must have a <span class="simple-code">list</span> attribute with the value of the datalist id
                </p>

                <div class="code-block">
                  <pre><code id="html-form-datalist-code" class="language-markup">&lt;form action="/example.html"&gt;
&lt;label for="city"&gt;Ideal city to visit?&lt;/label&gt;
  &lt;input type="text" list="cities" id="city" name="city"&gt;
  &lt;datalist id="cities"&gt;
    &lt;option value="New Yor City"&gt;&lt;/option&gt;
    &lt;option value="Tokyo"&gt;&lt;/option&gt;
    &lt;option value="Barcelona"&gt;&lt;/option&gt;
    &lt;option value="Mexico"&gt;&lt;/option&gt;
    &lt;option value="Bandol"&gt;&lt;/option&gt;
  &lt;/datalist&gt;
&lt;/form&gt;</code></pre>
                  <button class="btn btn-light copy-btn" data-clipboard-target="#html-form-datalist-code">COPY</button>
                </div>

                <br />
                <p><span class="simple-code">&lt;textarea&gt;</span> tags are used to create a bigger text field. If you want a default text you need to include it between the opening and closing textarea tags. This field can take arguments:
                </p>
                <ul>
                  <li><span class="simple-code">rows</span>: determine the width of the field</li>
                  <li><span class="simple-code">cols</span>: determine the height</li>
                </ul>

            </section>
          </div>
  );
};

export default Html;
