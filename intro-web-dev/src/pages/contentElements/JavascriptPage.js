import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./JavaScript.css";

function JavaScript() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <nav className="nav nav-pills flex-column">
              <a className="nav-link" href="#intro">
                Intro
              </a>
              <a className="nav-link" href="#howToUse">
                How To Use
              </a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1" href="#createFiles">
                  Creating JavaScript Files
                </a>
                <a className="nav-link ms-3 my-1" href="#formatFiles">
                  Formatting JavaScript Files
                </a>
              </nav>
              <a className="nav-link" href="#whyUse">
                Why Use JavaScript?
              </a>
              <a className="nav-link" href="#examples">
                JavaScript Examlpes
              </a>
              <a className="nav-link" href="#resources">
                Extra Resources On JavaScript
              </a>
            </nav>
          </nav>
        </div>

        <div className="col-10">
          <div
            data-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2"
            tabindex="0"
          >
            <div id="intro">
              <h4>Intro</h4>
              <p>
                JavaScript is a programming language frequently used in web
                development to design the behavior of webpages. It can be
                implemented within HTML and run in a browser. One of the
                defining features of JS is its ability to be executed within a
                user's web browser rather than on a server. Therefore,
                JavaScript can be used for various applications including:{" "}
                <b>but not limited to</b> creating animations, manipulating
                usage of HTML elements, event handling, and communicating
                amongst different severs.{" "}
              </p>
            </div>
            <div id="howToUse">
              <h4>How To Use</h4>
              <p>
                Using JavaScript is simple. Through Visual Studio Code,
                JavaScript is built-in, allowing users to begin wriitng
                JavaScript code automatically. involves script tags that are
                imbedded within HTML or an external file. Like other programming
                languages such as Python, JavaScript has language specific
                syntax used to execute differnt functions. This includes
                strings, arrays, events, functions, objects, etc. In-depth
                examples of these will be discussed later on.{" "}
              </p>
            </div>
            <div id="createFiles">
              <h5>Creating JavaScript files</h5>
              <p>
                To create a JavaScript file, open an editor such as Visual
                Studio Code and create a file ending with the .js file type.
              </p>
            </div>
            <div id="jsSyntax">
              <h5>JavaScript Syntax</h5>
              <p>
                Like any other programming language, JavaScript has a set of
                rules and conventions that dictate how its written. Here are
                some of the most common examples of JS syntax:
              </p>
              <ol>
                <li>
                  Variables/Data Types: the abbreviations 'var', 'let' and
                  'const' are used to declare variables. As aforementioned, JS
                  includes a wide range of data types{" "}
                  <b>including but not limited to</b>: numbers, booleans,
                  strings, arrays, objects, functions, and more.
                </li>
                <li>
                  Comments: Comments are written to provide clarity to the
                  viewer and programmers. They are written within two forward
                  slashes for a single line, '//', or with asteriks inbetween,
                  '/* */' for comments over multiple lines.
                </li>
                <li>
                  Functions: Functions are either declared by the word function,
                  or arrow function: a parenthesis followed by an equal sign and
                  greater than to make an arrow, followed by curly braces.
                  Functions can take on parameters and return values.{" "}
                </li>
                <li>
                  Conditional Statements: The conditional statements in
                  JavaScript are: 'if', 'else', and 'else if'. If the condition
                  is true, 'if' will execute the code, 'else' if it's false.
                  'else if' is used if the first condition is false, and a new
                  condition needs to be specified.{" "}
                </li>
                <li>
                  Objects and Arrays: Objects are declared with curly braces.
                  They can be accessed through dot notation or bracket notation.
                  Arrays use bracket notation and are accessed by index.
                </li>
                <li>
                  Loops: 'for', 'while', and 'do-while' loops are used to
                  iterate over arrays, objects, or any other repititive tasks.
                  Iteration methods such as 'forEach', 'map', 'filter', and
                  'reduce' are alternatives used on arrays for looping.
                </li>
                <li>
                  Operators: JavaScript uses the '+', '-', '*'', '/', signs for
                  addition, subtraction, multiplication, and division
                  respectively. Assignment is done with '=','+=', '-='.
                  Comparison is done with '==', '===', '!=', '!=='.{" "}
                </li>
                <li>
                  Scope: When variables are declared within a function in
                  JavaScript, they are local to that function.{" "}
                </li>
              </ol>
            </div>
            <div id="whyUse">
              <h4>Why Use JavaScript?</h4>
              <p>
                In comparison to HTML, JavaScript is more complex, but it's
                worth it to learn, as it leads to more effiecient coding, as
                well as more appealing effects such as:
              </p>
              <ul>
                <li>
                  Allows for interactive web-development that responds to
                  real-time changes.
                </li>
                <li>
                  Easily accessible and available across almost all platforms
                </li>
                <li>
                  JavaScript benefits the User Experience through more engaging
                  functions on websites, such as buttons, animations,
                  transitions, and other effects that make interacitng with the
                  site more fun and enjoyable.{" "}
                </li>
              </ul>
            </div>
            <div id="resources">
              <h4>Extra Resources On JavaScript</h4>
              <ul>
                <li>
                  <a href="https://www.w3schools.com/js/default.asp">
                    W3schools JavaScript tutorial
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/js/js_examples.asp">
                    W3schools JavaScript examples
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaScript;
