import React, { Component } from 'react'

class FooterLinks extends Component {
  render() {
    return (
        <>
        {this.props.linkPath.map((el,i) => (
          <li key={i}><a href={el.path}>{el.name}</a></li>
        ))}
      </>
    )
  }
}

export default FooterLinks