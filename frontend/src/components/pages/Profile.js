import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <Fragment>
        <div className="card card-body">
          <h2 className="text-center">Your Profile</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Username: {user.username}</li>
            <li className="list-group-item">First Name: {user.first_name}</li>
            <li className="list-group-item">Last Name: {user.last_name}</li>
            <li className="list-group-item">Email: {user.email}</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
