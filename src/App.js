import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textInput: ''
  }

  textChangeHandler = (event) => {
    this.setState({
      textInput: event.target.value
    })
  }

  deleteCharHandler = (charIndex) => {
    const charArray = this.state.textInput.split("");
    charArray.splice(charIndex, 1);
    this.setState({textInput: charArray.join("")})
  }

  render() {
    let charComponents = null;

    if (this.state.textInput.length > 0) {
      const charArray = this.state.textInput.split("");

      charComponents = (
        <div className="charComponents">
          { charArray.map((char, index) => {
            return <CharComponent
              char={char}
              click={() => this.deleteCharHandler(index)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.textChangeHandler(event)} value={this.state.textInput}/>
        <p> {this.state.textInput.length}</p>
        <ValidationComponent textLength={this.state.textInput.length} />
        {charComponents}
      </div>
    );
  }
}

export default App;
