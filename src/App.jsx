import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img src="./images/ironhack-logo.svg" alt="ironhack" />
            <img src="./images/menu-top.svg" alt="menu" />
          </nav>


        </header>
        <body>

          <section id="intro">
            <div>
              <h1>Say hello to <br />ReactJS</h1>
              <p>You will learn a Frontend <br/> 
              framework from scratch, to <br/> 
              become an Ninja Developer</p>
            </div>
            <div>
              <button className="button"> Awesome!</button>
            </div>
          </section>

          <section id="elements">
            <div>
              <img src="./images/icon1.png" alt="Declarative" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div>
              <img src="./images/icon2.png" alt="Components" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state</p>
            </div>
            <div>
              <img src="./images/icon3.png" alt="Single-Way" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
              <img src="./images/icon4.png" alt="JSX" />
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </section>
          
        </body>
      </div>
    );
  }
}

export default App;
