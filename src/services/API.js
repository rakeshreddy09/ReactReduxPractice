import axios from 'axios';
export default axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',
  headers: {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
