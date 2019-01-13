import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Diane', age: 26 },
      { name: 'Leo', age: 26 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1> Hi from react! </h1>
        <p> This is really working! </p>
        <button> Switch Name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Hobbies: Programmer
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies: Programmer
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Hobbies: Programmer
        </Person>
      </div>
    );
  }
}

export default App;
