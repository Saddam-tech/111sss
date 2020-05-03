import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',

    showInput: false
  
  }

  togglePerson = () => {
    const doesShow = this.state.showInput;
    this.setState({showInput: !doesShow});
  }



  onChangeHandler = (event) => {
    this.setState( {userInput: event.target.value})
  }
  
  
  
  render() {
    const charList = this.state.userInput.split('').map(ch => {
      return <Char character={ch} />
    }); 



  return (
    <div className="App">

<button onClick={this.togglePerson}>Toggle</button>

       
       {this.state.showInput ?
         <div>
        <Validation
        InputLength={this.state.userInput.length}
       />
        
       
  <input type="text" onChange={this.onChangeHandler} 
  value={this.state.userInput} /> <p>{this.state.userInput}</p>
  </div> : null

  
  }
  {charList}
        
    </div>
  );
}
}

export default App;
