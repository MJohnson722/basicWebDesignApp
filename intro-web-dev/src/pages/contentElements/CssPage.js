import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./CssPage.css"


function CssPage() {
  return (
    <div>
        <div className="row">
            <div className="col-2">
                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link" href="#intro">Intro</a>
                        <a className="nav-link" href="#howToUse">How To Use</a>
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ms-3 my-1" href="#createFiles">Creating CSS Files</a>
                            <a className="nav-link ms-3 my-1" href="#formatFiles">Formatting CSS Files</a>
                            <a className="nav-link ms-3 my-1" href="#linkFiles">Linking CSS Files</a>
                        </nav>
                        <a className="nav-link" href="#whyUse">Why Use CSS Files?</a>
                        <a className="nav-link" href="#examples">CSS File Examlpes</a>
                        <a className="nav-link" href="#resources">Extra Resources On CSS Files</a>
                    </nav>
                </nav>
            </div>

            <div className="col-10">
                <div data-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
                    <div id="intro">
                        <h4>Intro</h4>
                        <p>CSS files, short for <b>cascading style sheet</b> files, are used as an external source for a webpage's styling attributes. By using a CSS file, the author of a website can dictate how the code from a file, like an HTML file, will show up on a site in a browser. While this can be done within the webpage's file itself, it is reccomended to keep them seperate for both clarity and ease of use. Styling can be done for any type of code, and are linked between files through class names and ids.</p>
                    </div>
                    <div id="howToUse">
                        <h4>How To Use</h4>
                        <p>Using CSS files follows two easy steps: creating a CSS file and then linking it to its parent file.</p>
                        
                    </div>
                    <div id="createFiles">
                        <h5>Creating CSS Files</h5>
                        <p>To create a CSS file, simply create a new text file and then save it with the suffix .css, like you would for a .html file. Now you can start styling every aspect of your webpage!</p>
                        
                    </div>
                    <div id="formatFiles">
                        <h5>Formatting CSS Files</h5>
                        <p>CSS files function by targeting specific areas of a webpage file and changing how it will appear when opened on a browser. There are three main ways to link these elements:</p>
                        <ol>
                          <li>Element Name: if an element name is used on a CSS file, like "div" or "a", all standard versions of these elements on the coorespoding HTML page will follow the same styling</li>
                          <li>Class Names: if a class name is used with a period before it, like .headerOne, it will link to every element with that specific class name. The cooresponding HTML element must have the same class name for them to be linked, specifically "class='headerOne'". Additionally, by using a class name with an element name, only those elements with the cooresponding class name will be changed, like saying "h1.headerOne"</li>
                          <li>IDs: if an ID is used with a # before it, like #headerOne, it will link to every element with that specific ID, similar to how class names work. The cooresponding HTML element must have the same ID for them to be linked, specifically "id='headerOne'"</li>
                        </ol>
                        <p>In addition, further specifications on all three can be added using the : marker after either the element name, class name, or ID. This is used to distinguish certain actions like hovering or clicking onto the webpage element.</p>
                        
                    </div>
                    <div id="linkFiles">
                        <h5>Linking CSS Files</h5>
                        <p>Finally, CSS files must be linked to their parent file before they can be properly used. This is done at the top of the webpage, but differs depending on what style of code you are writing. For HTML, in the header of the page, use "&lt;link rel="stylesheet" href="STYLESHEETNAME.css"/&gt;". For JavaScript, use "import "DIRECTORY/STYLESHEETNAME.css". Now your webpage should be stylized!</p>
                        
                    </div>
                    <div id="whyUse">
                        <h4>Why Use CSS Files?</h4>
                        <p>CSS may be tedious to learn and remember at first, but they are exremely important for every type of webpage. Here are a few reasons why you should use CSS files for your projects:</p>
                        <ul>
                          <li>Easily stylize your webpage extensively</li>
                          <li>Makes it more efficient to style many elements in the same way</li>
                          <li>Keeps code clean and more readable</li>
                          <li>Allows for changes to be made quicker</li>
                          <li>It's the industry standard!</li>
                        </ul>
                        
                    </div>
                    <div id="examples">
                        <h4>CSS File Examples</h4>
                        <p>Here are a few examples of how CSS files are used and how it affects the main webpage:</p>
                        <table>
                          <tr>
                            <th>HTML</th>
                            <th>CSS</th>
                            <th>Result</th>
                          </tr>
                          <tr>
                            <td>
                              <div>&lt;div className='example1'&gt;Hello World!&lt;/div&gt;</div>
                            </td>
                            <td>
                              <div>.example1 &#123;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;background-color: violet;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;border: 2px solid black;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;color: white;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;display: inline;</div>
                              <div>&#125;</div>
                            </td>
                            <td>
                              <div className='example1' id='results'>Hello World!</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div>&lt;button className='example2'&gt;This is a button&lt;/button&gt;</div>
                            </td>
                            <td>
                              <div>.example2 &#123;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;background-color: lightblue;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;border: 2px solid black;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;display: inline;</div>
                              <div>&#125;</div>
                              <div></div>
                              <div>.example2:hover &#123;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;background-color: lightgreen;</div>
                              <div>&nbsp;&nbsp;&nbsp;&nbsp;border: font-size: 20px;</div>
                              <div>&#125;</div>
                            </td>
                            <td>
                              <button className='example2' id='results'>This is a button</button>
                            </td>
                          </tr>
                        </table>

                    </div>
                    <div></div>
                    <div id="resources">
                        <h4>Extra Resources On CSS Files</h4>
                        <ul>
                          <li><a href='https://www.w3schools.com/w3css/defaulT.asp'>W3schools CSS tutorial</a></li>
                          <li><a href='https://www.w3schools.com/w3css/w3css_examples.asp'>W3schools CSS examples</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CssPage