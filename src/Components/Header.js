import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
  <div className="input-group ml-auto">
    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
    <div className="input-group-append">
      <button className="btn btn-outline-success" type="submit">Search</button>
    </div>
  </div>
</form>

  </div>
</nav>
    </div>
  )
}
Header.defaultProps = {
  title:"Your Title Here",
  searchBar : true
}
Header.propTypes = {
    title:PropTypes.string,
    searchBar:PropTypes.bool.isRequired
}