export const getQuotes = (count = 10) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch results';
      console.log(res, "res");
      return res.json();
    });
};
