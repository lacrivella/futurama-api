import React, { Component } from 'react';
import Quotes from '../components/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class TopQuotes extends Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    getQuotes()
      .then(quotes => {
        this.setState({ quotes });
      });
  }
  render() {
    return <Quotes quotes={this.state.quotes} />;
  }
}

