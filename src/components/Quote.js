import React from 'react';
import PropTypes from 'prop-types';

function Quote({ character, quote, image }) {
  return (
    <>
      <img src={image} />
      <p>{quote}</p>
      <p>{character}</p>
    </>
  );
}

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
