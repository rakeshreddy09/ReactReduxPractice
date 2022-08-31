import axios from 'axios';
export default axios.create({
  baseURL:'http://localhost:3003/',
  // baseURL:'https://jsonplaceholder.typicode.com/',
  headers: {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
