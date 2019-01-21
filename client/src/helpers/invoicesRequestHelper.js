import axios from 'axios';
import cookies from 'react-cookies';

axios.defaults.baseURL = 'http://localhost:3001'

if (cookies.load('userAuthToken')) {
  axios.defaults.headers.common['Authorization'] = cookies.load('userAuthToken')
}

const invoiceRequest = {
  getInvoices: () => {
    return axios.get('/invoices')
  }
}

export { invoiceRequest }