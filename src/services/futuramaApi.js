export const getQuotes = (count = 10) => {
  return fetch(`futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch results';

      return res.json();
    });
};
