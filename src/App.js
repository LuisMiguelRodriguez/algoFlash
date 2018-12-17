import React, { Component } from 'react';
import Code from './components/Code';
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

        <Code resultHandler={this.resultHandler} something={{obj:'something'}}/>
        <Results results={this.state.results}/>

      </div>
    );
  }
}

export default App;
