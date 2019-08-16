import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteElements = quotes.map(({ image, character, quote }) => (
    <li key={quote}>
      <Quote 
        image={image}
        character={character}
        quote={quote} />
    </li>
  ));
  
  return (
    <ul>
      {quoteElements}
    </ul>
  )
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Quotes;
