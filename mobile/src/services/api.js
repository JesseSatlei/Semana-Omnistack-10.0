import axios from 'axios';
let myIp = 'http://192.168.100.7:3333';
// a porta utilizada, é a que está configurada no Node.
const api = axios.create({
  baseURL: myIp,
})

export default api;