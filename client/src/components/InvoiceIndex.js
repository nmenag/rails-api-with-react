import React, { Component } from 'react'
import {Table} from 'reactstrap';
// import { Redirect } from 'react-router-dom'
import { invoiceRequest } from '../helpers/invoicesRequestHelper';
import cookies from 'react-cookies';


class InvoiceIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invoices: [],
      number: '',
      createdAt:'',
      updateAt: '',
      items: '',
      redirectToReferrer: false
    }
  }

  componentDidMount() {
    invoiceRequest.getInvoices()
    .then((response) => {
      this.setState({ invoices: response.data })
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        cookies.remove('userId')
        cookies.remove('userEmail')
        cookies.remove('userAuthToken')
        cookies.remove('userRole')
        cookies.remove('userCaloriesGoal')
        this.setState({ redirectToReferrer: true })
      }
    })
  }

  render () {

    var records = this.state.invoices.map(function(record, index){
      return  <tr >
                <td>{index}</td>
                <td>{record.number}</td>
                <td>{record.invoice_date}</td>
                <td>{record.created_at}</td>
                <td>{record.updated_at}</td>
                <td></td>
              </tr>
    })

    return (
      <div class= 'container-form'>
        <h1>Invoices</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Number</th>
              <th>invoice date</th>
              <th>Created At</th>
              <th>updated At</th>
              <th>Items quantity</th>
            </tr>
          </thead>
          <tbody>
            {records}
          </tbody>
        </Table>;
      </div>
    );
  }
};

export default InvoiceIndex