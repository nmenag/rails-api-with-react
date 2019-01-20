import axios from 'axios';
import cookies from 'react-cookies';

axios.defaults.baseURL = 'http://localhost:3001'

if (cookies.load('userAuthToken')) {
  axios.defaults.headers.common['Authorization'] = cookies.load('userAuthToken')
}

const userRequest = {
  register: (email, password, passwordConfirm) => {
    return axios.post('/registrations', {
      user: {
        email: email,
        password: password,
        password_confirmation: passwordConfirm
      }
    })
  }
}

export { userRequest }
