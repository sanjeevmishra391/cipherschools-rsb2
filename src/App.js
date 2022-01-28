import React, {Component} from 'react';
import './App.css';
import Searchbox from './components/searchbox/Searchbox';
import CardList from './components/cardlist/CardList';
import './App.css'

// constructor -- render -- componentDidMount (state change - queue render function) -- render

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

  handleChange = (e) => {
    this.setState({searchText: e.target.value}, () => {
        console.log(this.state.searchText);
    })
  }

  render() {

    const {usersData, searchText} = this.state;

    // const usersData = this.state.usersData;
    // const searchText = this.state.searchText;

    const filterUser = usersData.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()))

    // usersData: [list of 10 users],
    // searchText: 'g'
    // filterUser: [list of filtered users having name that contains 'g']

    // ['Jack', 'John', 'George', 'Thomas']
    // 'o' -- ['John', 'George', 'Thomas']
    // Every string contains empty string.

    return (
      <div className='app'>

        <Searchbox placeholder={'Search users'} handleChange={this.handleChange} />

        <CardList usersData={filterUser} />
        
      </div>
    );
  }
}


export default App;
