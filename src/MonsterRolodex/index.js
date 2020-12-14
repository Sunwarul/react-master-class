import React from 'react';
import './App.css';
import CardList from './card-list/CardList';
import './search-box/SearchBox.component';
import './navbar/Navbar'
import Navbar from './navbar/Navbar';

export class MonsterRolodex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
        this.setState({ loading: false })
      });
  }
  handleChange = event => {
    console.log(event.target.value)
  }
  showMessage() {
    return alert('Show!')
  }
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <Navbar handleSearch={e => this.setState({ searchField: e.target.value })} />

        <div>
          {(this.state.loading) ?
            (<div className="loading">
              <h1>Loading monsters...</h1>
            </div>)
            :
            (<div className="container">
              <div>
                <CardList monsters={filteredMonsters} />
              </div>
            </div>)
          }
        </div>
      </div>
    );
  };
}