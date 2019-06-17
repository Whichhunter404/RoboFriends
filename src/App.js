import React,{Component} from 'react';
import './App.css';
import Cardlist from "./components/Cardlist";
import {robots} from "./robots";
import Searchbox from './components/Searchbox';
import Scroll_layout from "./components/Scroll";
import Errorborder from "./components/Errorborder";

class App extends Component {
  constructor(){
    super()
    this.state={
      robots: [],
      searchfield: ''
    }
  }
  onSearchchange = (event) =>{
    this.setState({searchfield: event.target.value})
  }
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}))
  }

  render() {
    const robots = this.state.robots;
    const filterrobots = robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     });
    return (
        <div className="App">
          <header>
            <h1 className={''}>RoboFriends</h1>
          </header>
          <Searchbox searchchange={this.onSearchchange}/>
          <Errorborder>
          <Scroll_layout>
          <Cardlist robots={filterrobots}/>
          </Scroll_layout>
          </Errorborder>
        </div>
    );
  }
}

export default App;
