const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  offsetAdd: (num1, num2) => num1 + num2 + 1,
  isNull: () => null,
  returnSame: a => a,
  returnUser: () => ({
    firstName: 'Mister',
    lastName: 'Brother'
  }),
  square: x => x * x,
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/2')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = functions;
