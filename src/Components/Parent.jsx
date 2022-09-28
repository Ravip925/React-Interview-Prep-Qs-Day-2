import React, { Component } from 'react'

import { Link } from 'react-router-dom'


export default class Parent extends Component {
  render() {
    return (
      <div><h3>Parent Component</h3>
        <Link to = "/child"><h4>Go to child Component</h4></Link>
      </div>
    )
  }
}
