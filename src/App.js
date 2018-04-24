import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fab';
let defaultStyle = {
  color:defaultTextColor,
}

let fakeServerData = {
  user: {
    name:'John',
    playlist: [
      {
        name: 'My favorites',
        songs:[
              {name:'loose yourself', duration:134}, 
              {name:'jesus walks', duration: 134},
              {name:'till i collapse', duration: 231}
              ]
      },
      {
        name: 'Discover',
        songs:[
              {name:'puke', duration:134}, 
              {name:'lollipop', duration: 134},
              {name:'swag surfing', duration: 231}
              ]
      },
      {
        name: 'Weekly best',
        songs:[
              {name:'belive', duration:134}, 
              {name:'memories', duration: 134},
              {name:'I belive I can fly', duration: 231}
              ]
      },
      {
        name: 'Rap caviar',
        songs:[
              {name:'Ala hechala', duration:134}, 
              {name:'night call', duration: 134},
              {name:'Power trip', duration: 231}
              ]
      }
    ]
  }
}
class App extends Component {
  constructor(){
    super()
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeServerData})
    }, 1000)
  }

  render() {
    let name = 'Juan'
    return (
      <div className="App">
      
      {this.state.serverData.user ?
      <div>
        {this.state.serverData.user &&
        <h1 style={{...defaultStyle, 'font-size':'54px'}}>
        {this.state.serverData.user.name}'s Playlist
        </h1>}
        <PlaylistCounter playlist={this.state.serverData.user.playlist}/>
        <HoursCounter playlist={this.state.serverData.user.playlist}/>

        <Filter />
        <PlayList />
        <PlayList />
        <PlayList />
        <PlayList />
      </div> : <h1 style= {{...defaultStyle}}>'Loading...'</h1>
      }
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

class PlaylistCounter extends Component{
  render(){
    return (
      <div style={{...defaultStyle, width: '40%',display:'inline-block'}}>
        <h2>{this.props.playlist.length} Playlist</h2>
      </div>
    );
  }
}

class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlist.reduce((songs, eachPlaylist) =>{
      return songs.concat(eachPlaylist.songs)
    },[])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: '40%',display:'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} Hours</h2>
      </div>
    );
  }
}

export default App;
