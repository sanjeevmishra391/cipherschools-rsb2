import React, {Component} from 'react';
import './App.css';

import CardList from './components/cardlist/CardList';

// class components
class App extends Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({usersData: users}))
  }

  render() {
    return (
      <div className='app'>

        <input type='search' placeholder='Search users' 
          onChange={(e) => { 
            this.setState({searchText: e.target.value}, () => {
                console.log(this.state.searchText);
              })
          }} 
        />

        <CardList usersData={this.state.usersData} />
        
      </div>
    );
  }
}


export default App;
