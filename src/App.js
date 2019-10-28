import React from 'react';
import DisplayCitations from './Components/DisplayCitations'
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      citations : quotes,
    }
  }

getCitations =() => {
  Axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
  .then(response => response.data)
  .then(data => {
    console.log(data)
    this.setState({
      citations : data[0],
    });
  });
}

  render () { return (
    <div className="App">
      <header className="App-header">
        <DisplayCitations citations={this.state.citations}/>
       <button type = "button" onClick = {this.getCitations}>Citations</button>
      </header>
    </div>
  );
}
}

const quotes = {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  };

export default App;
