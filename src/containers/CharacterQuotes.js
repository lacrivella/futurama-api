import React, { Component } from 'react';
import Quotes from '../components/Quotes';
import { characterQuotes } from '../services/futuramaApi';

export default class characterQuotes extends Component {
  state = {
    character: '',
    quotes: []
  }
}