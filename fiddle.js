const Client = require('./Carter');
const fs = require('fs');
const client = new Client('TPPjkQbNJE1oyxSCJZ3e5oo7l0OJJn9G');

getData = async () => {
  return await client.downvote('123');
}

getData().then(data => console.log(data));
