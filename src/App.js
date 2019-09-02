import React,{Component} from 'react';
import './App.css';
import Cardlist from "./components/Cardlist";
import Searchbox from './components/Searchbox';
import ScrollLayout from "./components/Scroll";
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
    const filteredrobots = robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     });
    return (
        <div className="App">
          <header>
            <h1>RoboFriends</h1>
          </header>
          <Searchbox searchchange={this.onSearchchange}/>
          <Errorborder>
          <ScrollLayout>
          <Cardlist robots={filteredrobots}/>
          </ScrollLayout>
          </Errorborder>
        </div>
    );
  }
}

export default App;
