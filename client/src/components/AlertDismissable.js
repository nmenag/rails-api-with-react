import React, { Component } from 'react'
import { Alert } from 'reactstrap'

class AlertDismissable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertVisible: true
    }

    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss() {
    this.setState({alertVisible: false});
  }

  render() {
    return (
      <Alert color="danger" isOpen={this.state.alertVisible} toggle={this.onDismiss}>
        <p>{this.props.message}</p>
      </Alert>
    )
  }

}

export default AlertDismissable
