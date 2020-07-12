import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../../store";
import { getHabits } from "../../actions/habits";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 7 };
    this.onChange = this.onChange.bind(this);
  }

  static propTypes = {
    habits: PropTypes.array.isRequired,
  };

  componentDidMount() {
    store.dispatch(getHabits());
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  averageOfHabit = (habitArray, num) => {
    let sum = habitArray.reduce((a, b) => a + b, 0); //this is like a for loop where for every entry the habit is addeed to the sum
    sum = sum / num; // this divides the sum by the number to get the average
    sum = Math.round(sum * 10) / 10; //this rounds the average to the tenths place
    return sum;
  };

  sumOfCore = (num) => {
    let sum = num.reduce((a, b) => a + b, 0); //this is like a for loop where for every entry the habit is addeed to the sum
    return sum;
  };

  //changes the number to display a more relateable value instead
  //for sweets and junkfood
  scale = (num) => {
    num = Math.round(num);
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
    const waters = this.props.habits
      .map((habit) => habit.water)
      .filter((o) => o); //filter removes any null values
    const sleeps = this.props.habits
      .map((habit) => habit.sleep)
      .filter((o) => o);
    const mealss = this.props.habits
      .map((habit) => habit.meals)
      .filter((o) => o);
    const sweetss = this.props.habits
      .map((habit) => habit.sweets)
      .filter((o) => o);
    const junkfoods = this.props.habits
      .map((habit) => habit.junkfood)
      .filter((o) => o);
    const crosstrainings = this.props.habits
      .map((habit) => habit.crosstraining)
      .filter((o) => o);
    const cores = this.props.habits.map((habit) => habit.core).filter((o) => o);
    const liftings = this.props.habits
      .map((habit) => habit.lifting)
      .filter((o) => o);
    const stretchings = this.props.habits
      .map((habit) => habit.stretching)
      .filter((o) => o);
    const moods = this.props.habits.map((habit) => habit.mood).filter((o) => o);

    return (
      <Fragment>
        <h2 className="text-center">My Statistics</h2>
        <div>
          {waters.length == 0 && (
            <table className="table table-bordered">
              <thead>
                <tr className="table-secondary">
                  <th scope="col-2">Habits</th>
                  <th scope="col-2">Totals for the day</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-primary">
                    Water
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-primary">
                    Sleep
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Meals
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Sweets
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Junk Food
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Cross Training
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Core
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Lifting
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Stretching
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
                <tr>
                  <th scope="row" className="table-success">
                    Mood
                  </th>
                  <td>You have not logged yet.</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div>
          {waters.length > 0 && waters.length < 7 && (
            <table className="table table-bordered">
              <thead>
                <tr className="table-secondary">
                  <th scope="col-2">Habits</th>
                  <th scope="col-2">Totals for the day</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-primary">
                    Water
                  </th>
                  <td>{this.props.habits.slice(-1)[0].water} Oz</td>
                </tr>
                <tr>
                  <th scope="row" className="table-primary">
                    Sleep
                  </th>
                  <td>{this.props.habits.slice(-1)[0].sleep} Hours</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Meals
                  </th>
                  <td>{this.props.habits.slice(-1)[0].meals} Meals</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    {" "}
                    Sweets
                  </th>
                  <td>
                    {this.scale(this.props.habits.slice(-1)[0].sweets)} Sweets
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Junk Food
                  </th>
                  <td>
                    {this.scale(this.props.habits.slice(-1)[0].junkfood)} Junk
                    food
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Cross Training
                  </th>
                  <td>
                    {this.props.habits.slice(-1)[0].crosstraining} Minutes
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Core
                  </th>
                  <td>
                    {this.props.habits.slice(-1)[0].core == "1" ? "Yes" : "No"}{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Lifting
                  </th>
                  <td>{this.props.habits.slice(-1)[0].lifting} Minutes</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Stretching
                  </th>
                  <td>{this.props.habits.slice(-1)[0].stretching} Minutes</td>
                </tr>
                <tr>
                  <th scope="row" className="table-success">
                    Mood
                  </th>
                  <td>{this.props.habits.slice(-1)[0].mood} out of 100</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div>
          {waters.length >= 7 && (
            <table className="table table-bordered">
              <thead>
                <tr className="table-secondary">
                  <th scope="col-2">Habits</th>
                  <th scope="col-2">Totals for the day</th>
                  <th scope="col-8">
                    Daily average for the past
                    <form>
                      <select
                        name="time"
                        className="form-control"
                        onChange={this.onChange}
                        className="m-auto"
                      >
                        <option value={7}>7 days</option>
                        <option value={30}>30 days</option>
                        <option value={365}>1 year</option>
                      </select>
                    </form>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-primary">
                    Water
                  </th>
                  <td>{this.props.habits.slice(-1)[0].water} Oz</td>
                  <td>
                    {this.averageOfHabit(waters, this.state.time)} Oz per day
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-primary">
                    Sleep
                  </th>
                  <td>{this.props.habits.slice(-1)[0].sleep} Hours</td>
                  <td>
                    {this.averageOfHabit(sleeps, this.state.time)} Hours per day
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Meals
                  </th>
                  <td>{this.props.habits.slice(-1)[0].meals} Meals</td>
                  <td>
                    {this.averageOfHabit(mealss, this.state.time)} Meals per day
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    {" "}
                    Sweets
                  </th>
                  <td>
                    {this.scale(this.props.habits.slice(-1)[0].sweets)} Sweets
                  </td>
                  <td>
                    {this.scale(this.averageOfHabit(sweetss, this.state.time))}{" "}
                    Sweets
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Junk Food
                  </th>
                  <td>
                    {this.scale(this.props.habits.slice(-1)[0].junkfood)} Junk
                    food
                  </td>
                  <td>
                    {this.scale(
                      this.averageOfHabit(junkfoods, this.state.time)
                    )}{" "}
                    Junk food
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Cross Training
                  </th>
                  <td>
                    {this.props.habits.slice(-1)[0].crosstraining} Minutes
                  </td>
                  <td>
                    {this.averageOfHabit(crosstrainings, this.state.time)}{" "}
                    Minutes per day
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Core
                  </th>
                  <td>
                    {this.props.habits.slice(-1)[0].core == "1" ? "Yes" : "No"}{" "}
                  </td>
                  <td>
                    {this.sumOfCore(cores)} out of {this.state.time} days
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Lifting
                  </th>
                  <td>{this.props.habits.slice(-1)[0].lifting} Minutes</td>
                  <td>
                    {this.averageOfHabit(liftings, this.state.time)} Minutes per
                    day
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Stretching
                  </th>
                  <td>{this.props.habits.slice(-1)[0].stretching} Minutes</td>
                  <td>
                    {this.averageOfHabit(stretchings, this.state.time)} Minutes
                    per day
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-success">
                    Mood
                  </th>
                  <td>{this.props.habits.slice(-1)[0].mood} out of 100</td>
                  <td>
                    {this.averageOfHabit(moods, this.state.time)} out of 100{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div className="mt-3">
          <p className="text-center">
            The purpose of this page is to allow you to compare your habits and
            determine if there is a specific weakness or strength that you need
            to focus on. The averages column will appear once you have logged at
            least 7 times.{" "}
          </p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits.habits,
});

export default connect(mapStateToProps, { getHabits })(Statistics);
