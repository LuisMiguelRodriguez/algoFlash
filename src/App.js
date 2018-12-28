import React, { Component } from 'react';
import Code from './components/Code';

import  Questions from "./components/Questions";
import logo from './logo.svg';
import Results from './components/Results';
import './App.scss';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      name: '',
      greeting: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resultHandler = this.resultHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  resultHandler(results){

    results = results.obj.map(x => x);
    console.log(results);
    console.log('result handler triggered');
    this.setState({ results })
    
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="code__header" alt="logo" />

            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <section className="coding-area">
          <Code />
          <Questions />
        </section>

        <Code resultHandler={this.resultHandler} something={{obj:'something'}}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
