import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addHabit, updateHabits, getHabits } from "../../actions/habits";
import store from "../../store";

class LogHabits extends Component {
  state = {
    water: "140",
    sleep: "8",
    meals: "3",
    sweets: "0",
    junkfood: "0",
    crosstraining: "0",
    core: "1",
    lifting: "0",
    stretching: "15",
    mood: "100",
  };

  static propTypes = {
    addHabit: PropTypes.func.isRequired,
    updateHabits: PropTypes.func.isRequired,
    habits: PropTypes.array.isRequired,
  };

  componentDidMount() {
    store.dispatch(getHabits());
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      water,
      sleep,
      meals,
      sweets,
      junkfood,
      crosstraining,
      core,
      lifting,
      stretching,
      mood,
    } = this.state;

    const habit = {
      water,
      sleep,
      meals,
      sweets,
      junkfood,
      crosstraining,
      core,
      lifting,
      stretching,
      mood,
    };

    var moment = require("moment");
    const date = this.props.habits.map((habit) => habit.created_at).slice(-1);
    const dates = moment(date[0]).isSame(moment().format("YYYY-MM-DD"));
    const lastID = this.props.habits.map((habit) => habit.id).slice(-1);
    if (dates == true) {
      this.props.updateHabits(lastID, habit);
      store.dispatch(getHabits());
    } else {
      this.props.addHabit(habit);
    }
  };

  //changes the number to display a more relateable value
  //instead for sweets and junkfood
  scale = (num) => {
    switch (num) {
      case "0":
        return "No";
      case "1":
        return "A Little";
      case "2":
        return "Some";
      case "3":
        return "A Lot of";
      default:
        return "No";
    }
  };

  render() {
    const {
      water,
      sleep,
      meals,
      sweets,
      junkfood,
      crosstraining,
      core,
      lifting,
      stretching,
      mood,
    } = this.state;

    return (
      <Fragment>
        <div>
          <h2 className="text-center mt-0">Log Habits</h2>
          <form onSubmit={this.onSubmit}>
            <table className="table table-bordered">
              <thead>
                <tr className="table-secondary">
                  <th scope="col">Habits</th>
                  <th scope="col">Enter Amount</th>
                  <th scope="col-xs-3">Totals For The Day</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-primary">
                    Water
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="200"
                      min="0"
                      step="10"
                      name="water"
                      onChange={this.onChange}
                      value={water}
                    ></input>
                  </td>
                  <td> {water} Oz</td>
                </tr>
                <tr>
                  <th scope="row" className="table-primary">
                    Sleep
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="12"
                      min="0"
                      name="sleep"
                      onChange={this.onChange}
                      value={sleep}
                    ></input>
                  </td>
                  <td> {sleep} Hours</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    3 Meals
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="5"
                      min="0"
                      name="meals"
                      onChange={this.onChange}
                      value={meals}
                    ></input>
                  </td>
                  <td> {meals} Meals</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Sweets
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="3"
                      min="0"
                      name="sweets"
                      onChange={this.onChange}
                      value={sweets}
                    ></input>
                  </td>
                  <td>{this.scale(sweets)} Sweets</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Junk Food
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="3"
                      min="0"
                      name="junkfood"
                      onChange={this.onChange}
                      value={junkfood}
                    ></input>
                  </td>
                  <td> {this.scale(junkfood)} Junk Food</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Cross Training
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="120"
                      min="0"
                      step="5"
                      name="crosstraining"
                      onChange={this.onChange}
                      value={crosstraining}
                    ></input>
                  </td>
                  <td> {crosstraining} Minutes</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Core
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="1"
                      min="0"
                      name="core"
                      onChange={this.onChange}
                      value={core}
                    ></input>
                  </td>
                  <td> {core == "1" ? "Yes" : "No"} </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Lifting
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="40"
                      min="0"
                      step="5"
                      name="lifting"
                      onChange={this.onChange}
                      value={lifting}
                    ></input>
                  </td>
                  <td>{lifting} Minutes</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Stretching
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="40"
                      min="0"
                      step="5"
                      name="stretching"
                      onChange={this.onChange}
                      value={stretching}
                    ></input>
                  </td>
                  <td>{stretching} Minutes</td>
                </tr>
                <tr>
                  <th scope="row" className="table-success">
                    Mood
                  </th>
                  <td>
                    <input
                      type="range"
                      className="custom-range"
                      id="customRange1"
                      max="100"
                      min="0"
                      name="mood"
                      onChange={this.onChange}
                      value={mood}
                    ></input>
                  </td>
                  <td>{mood} out of 100</td>
                </tr>
              </tbody>
            </table>
            <div className="form-group text-center">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
          <p className="text-center">
            Move the sliders in the middle column to change the values of your
            habits. You can not log a habit for a past date. You can only log
            for today. Whenever you reclick the submit button, your habits will
            update. Any unlogged days will not be incorporated in any of the
            tabs or features.{" "}
          </p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits.habits,
});

export default connect(mapStateToProps, { addHabit, updateHabits })(LogHabits);
