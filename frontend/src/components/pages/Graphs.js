import React, { Component } from "react";
import { connect } from "react-redux";
import { default as LineGraph } from "../LineGraph";
import PropTypes from "prop-types";
import store from "../../store";
import { getHabits } from "../../actions/habits";

class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = { length: 7 };
    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    habits: PropTypes.array,
  };

  componentDidMount() {
    store.dispatch(getHabits());
  }

  onClick = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Graphs</h2>
        <div className="text-center">
          <div className="btn-group mb-5">
            <button
              className="btn btn-outline-secondary"
              name="length"
              value={7}
              onClick={this.onClick}
            >
              {" "}
              7 days
            </button>
            <button
              className="btn btn-outline-secondary"
              name="length"
              value={30}
              onClick={this.onClick}
            >
              30 days
            </button>
            <button
              className="btn btn-outline-secondary"
              name="length"
              value={180}
              onClick={this.onClick}
            >
              {" "}
              180 days
            </button>
            <button
              className="btn btn-outline-secondary"
              name="length"
              value={365}
              onClick={this.onClick}
            >
              {" "}
              365 days
            </button>
          </div>
        </div>
        <LineGraph length={this.state.length} />
        <p className="text-center mt-5">
          This is a graph of your habits. Habits that have not been logged do
          not show up. Please click the legend at the side of the graph in order
          to focus on certain habits.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits.habits,
});

export default connect(mapStateToProps, { getHabits })(Graphs);
