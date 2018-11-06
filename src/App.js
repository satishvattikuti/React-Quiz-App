import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuestionType from './components/questionType';
import Questions from './components/question';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
      
            <Route exact path="/" component={QuestionType} />
             <Route path="/questions" component={Questions} />
            {/* <Route path="/topics" component={Topics} />  */}
          </div>
      </Router>
    );
  }
}

export default App;
