import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fancy-todo-glasgow-server.herokuapp.com'
});

export default instance