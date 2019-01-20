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
  },

  updateInfo: (id, caloriesGoal) => {
    return axios.put(`/registrations/${id}`, {
      user: {
        daily_calories_goal: caloriesGoal
      }
    })
  },

  login: (email, password) => {
    return axios.post('/sessions', {
      session: {
        email: email,
        password: password
      }
    }).then((response) => {
      const user = response.data
      cookies.save('userAuthToken', user.auth_token, { path: '/' })
      axios.defaults.headers.common['Authorization'] = user.auth_token
      return response
    })
  },

  logout: () => {
    return axios.delete('/sessions')
  }
}

export { userRequest }
