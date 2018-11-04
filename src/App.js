import React, { Component } from 'react';
import QuestionType from './components/questionType';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="jumbotron">
           <h1>Welcome to My Quiz App </h1>
           <br/>
           <h5 style={{color:'green'}}> Please select the number of questions, type of questions, category and the difficulty level to get started. </h5>
        </div>
        <div>
          <QuestionType />
        </div>
      </div>
    );
  }
}

export default App;
