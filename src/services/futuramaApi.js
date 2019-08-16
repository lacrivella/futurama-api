export const getQuotes = (count = 10) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch quote results';
      return res.json();
    });
};

export const characterQuotes = (character, count = 10) => {
  return fetch(`https://https://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch character results';
      return res.json();
    });
};
