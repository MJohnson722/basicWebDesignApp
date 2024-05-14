import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./ReactPage.css";

function ReactPage() {
  return (
    <div>
        <div className="row">
            <div className="col-2">
                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link" href="#intro">Introduction</a>
                        <a className="nav-link" href="#components">Components</a>
                        <a className="nav-link" href="#props">Props</a>
                        <a className="nav-link" href="#state">State</a>
                        <a className="nav-link" href="#lifecycle">Lifecycle Methods</a>
                        <a className="nav-link" href="#hooks">Hooks</a>
                        <a className="nav-link" href="#vite">Creating a React App with Vite</a>
                        <a className="nav-link" href="#appeal">What Makes React Appealing</a>
                        <a className="nav-link" href="#resources">Resources</a>
                    </nav>
                </nav>
            </div>

            <div className="col-10">
                <div data-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
                    <div id="intro">
                        <h4>Introduction:</h4>
                        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
                    </div>
                    <div id="components">
                        <h4>Components</h4>
                        <p>Components are the building blocks of any React application. A component is a JavaScript class or function that optionally accepts inputs, called props, and returns a React element that describes how a section of the UI should appear.</p>
                    </div>
                    <div id="props">
                        <h4>Props</h4>
                        <p>Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes.</p>
                    </div>
                    <div id="state">
                        <h4>State</h4>
                        <p>State is a set of data that determines the component's rendering and behavior. It is managed within the component (similar to variables declared within a function).</p>
                    </div>
                    <div id="lifecycle">
                        <h4>Lifecycle Methods</h4>
                        <p>Lifecycle methods are special methods each component can have that allow you to run code at particular times in the process. For example, mounting, updating, and unmounting phases.</p>
                    </div>
                    <div id="hooks">
                        <h4>Hooks</h4>
                        <p>Hooks are a new addition in React 16.8 that allow you to use state and other React features without writing a class. Hooks are functions that let you “hook into” React state and lifecycle features from function components.</p>
                    </div>
                    <div id="vite">
                        <h4>Creating a React App with Vite</h4>
                        <p>Vite is a modern build tool that significantly improves the startup time for React projects by leveraging modern JavaScript features. Creating a new React project with Vite is simple:</p>
                        <code>npx create-vite my-react-app --template react</code>
                        <p>After running this command, change into the directory and start the development server:</p>
                        <code>cd my-react-app &amp;&amp; npm install &amp;&amp; npm run dev</code>
                    </div>
                    <div id="appeal">
                        <h4>What Makes React Appealing</h4>
                        <p>React's modular design encourages reusability of components, making it easier to maintain and scale large applications. Its virtual DOM implementation enhances UI rendering performance, making it ideal for high-performance applications. Furthermore, React's ecosystem, including tools like Redux for state management and React Router for navigation, provides developers with a comprehensive suite for building robust applications.</p>
                    </div>
                    <div id="resources">
                        <h4>Resources</h4>
                        <p>For more information on installing and starting with React, visit the official React documentation:</p>
                        <a href="https://reactjs.org/docs/getting-started.html">React Documentation</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ReactPage;
