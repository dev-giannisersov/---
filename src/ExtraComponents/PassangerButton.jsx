import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export class PassangerButton extends Component {
  render() {
    return (

        <Link to="/PassangerPage" className='Go-Back'>
               GO BACK
            </Link>
    )
  }
}

export default PassangerButton
