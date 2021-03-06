import React from 'react';
import './App.css';
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
