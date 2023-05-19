import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class HeaderLinks extends Component {
  render() {
    return (
      <>
        {this.props.linkPath.map((el,i) => (
          <li key={i} className="nav-item"><Link className="nav-link js-scroll-trigger" to={el.path}>{el.name}</Link></li>
        ))}
      </>
    )
  }
}
export default HeaderLinks