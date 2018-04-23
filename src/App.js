import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fab';
let defaultStyle = {
  color:defaultTextColor,
}
class App extends Component {

  render() {
    let name = 'juan'
    return (
      <div className="App">
      <h1 style={{...defaultStyle, 'font-size':'54px'}}>Title</h1>
      <Agg />
      <Agg />
      <Filter />
      <PlayList />
      <PlayList />
      <PlayList />
      <PlayList />
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text"/>
      </div>
    )
  }
}

class PlayList extends Component {
  render(){
    return(
      <div style={{...defaultStyle, display: 'inline-block', width:'25%'}}>
        <img />
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}

class Agg extends Component{
  render(){
    return (
      <div style={{...defaultStyle, width: '40%',display:'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

export default App;
