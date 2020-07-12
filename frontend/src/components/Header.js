import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/graphs" className="nav-link text-white">
            Graphs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/statistics" className="nav-link text-white">
            Statistics
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/challenges" className="nav-link text-white">
            Challenges
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Settings
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="px-4 py-3">
              <Link
                className="dropdown-item"
                to="/profile"
                className="nav-link"
              >
                Profile
              </Link>
              <Link
                className="dropdown-item"
                to="/members"
                className="nav-link"
              >
                Members
              </Link>
              <button onClick={this.props.logout} className="nav-link">
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/register" className="nav-link text-white">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white">
            Login
          </Link>
        </li>
      </ul>
    );

    const authNoWelcome = <div></div>;

    const guestWelcome = (
      <div className="main">
        <div className="container">
          <div className="jumbotron">
            <div className="text-center">
              <div>
                <h1>Welcome to the Habit Log</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light navbar-inverse">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">
                  <span className="glyphicon glyphicon-home"></span>
                  &nbsp;Habit Log
                </Link>
              </div>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
        {isAuthenticated ? authNoWelcome : guestWelcome}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
