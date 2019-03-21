import React, { Component } from 'react';
import Search from '../Search/Search';
import Result from '../Result/Result';
import './Container.css';
import axios from 'axios';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      settings: [
        { min: 0, max: 19, msg: 'Needs Work!', color: 'red' },
        { min: 20, max: 49, msg: 'A decent start...', color: 'orange' },
        { min: 50, max: 99, msg: 'Could be better', color: 'black' },
        { min: 100, max: 199, msg: 'Great Job!', color: 'green' },
        { min: 200, max: null, msg: 'Github Elite!', color: 'blue' },
      ]
    }
  }

  searchUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then((response) => {
        let score = 0;
        score += parseInt(response.data.followers);
        score += parseInt(response.data.public_repos);
        this.setState({
          score
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          score: -1,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Search search={this.searchUser} />
        <Result score={this.state.score} settings={this.state.settings} />
      </div>
    );
  }

}

export default Container;