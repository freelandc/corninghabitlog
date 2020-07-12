import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../../store";
import { getHabits } from "../../actions/habits";

class Challenges extends Component {
  static propTypes = {
    habits: PropTypes.array,
  };

  componentDidMount() {
    store.dispatch(getHabits());
  }

  averageOfHabit = (habitArray) => {
    let sum = habitArray.reduce((a, b) => a + b, 0); //this is like a for loop where for every entry the habit is addeed to the sum
    sum = sum / 7; // this divides the sum by the number to get the average
    sum = Math.round(sum * 10) / 10; //this rounds the average to the tenths place
    return sum;
  };

  sumOfAbs = (core) => {
    return core.reduce((a, b) => a + b, 0);
  };

  eatingHabits = (meals, sweets, junkfood) => {
    let sumOfSweets = sweets.reduce((a, b) => a + b, 0); //gets the sum of sweets
    let sumOfJunkfood = junkfood.reduce((a, b) => a + b, 0); //gets the sum of junkfood
    let sumOfMeals = meals.reduce((a, b) => a + b, 0); //gets the sum of meals
    let points = 0; //initializing points variable
    sumOfMeals = Math.abs(sumOfMeals - 21);
    points = sumOfJunkfood + sumOfSweets + sumOfMeals; //adds all of the points together
    return points;
  };

  render() {
    const waters = this.props.habits.slice(-7).map((habit) => habit.water);
    const sleeps = this.props.habits.slice(-7).map((habit) => habit.sleep);
    const mealss = this.props.habits.slice(-7).map((habit) => habit.meals);
    const sweetss = this.props.habits.slice(-7).map((habit) => habit.sweets);
    const junkfoods = this.props.habits
      .slice(-7) //slice(-7) gets the most recent 7 habits logged
      .map((habit) => habit.junkfood);
    const cores = this.props.habits.slice(-7).map((habit) => habit.core);
    const liftings = this.props.habits.slice(-7).map((habit) => habit.lifting);
    const stretchings = this.props.habits
      .slice(-7)
      .map((habit) => habit.stretching);

    return (
      <Fragment>
        <div>
          <h2 className="text-center">Top 6 Habits List</h2>
          {waters.length < 7 ? (
            <table className="table table-bordered">
              <thead>
                <tr className="table-secondary">
                  <th scope="col">Habits</th>
                  <th scope="col">Goals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-primary">
                    Water
                  </th>
                  <td>140 Oz a day</td>
                </tr>
                <tr>
                  <th scope="row" className="table-primary">
                    Sleep
                  </th>
                  <td>8 hours a day</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Eating Habits
                  </th>
                  <td>0 points</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Abs
                  </th>
                  <td>6 Pack</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Lifting
                  </th>
                  <td>2 times per week (total of 40 minutes)</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Stretching
                  </th>
                  <td>10 minutes a day</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr className="table-secondary">
                  <th scope="col">Habits</th>
                  <th scope="col">My habits for the past 7 days</th>
                  <th scope="col">Goals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-primary">
                    Water
                  </th>
                  <td>{this.averageOfHabit(waters)} Oz</td>
                  <td>140 oz a day</td>
                </tr>
                <tr>
                  <th scope="row" className="table-primary">
                    Sleep
                  </th>
                  <td>{this.averageOfHabit(sleeps)} Hours</td>
                  <td>8 hours a day</td>
                </tr>
                <tr>
                  <th scope="row" className="table-danger">
                    Eating Habits
                  </th>
                  <td>
                    {this.eatingHabits(mealss, sweetss, junkfoods)} Points
                  </td>
                  <td>0 points</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Probably Has Abs
                  </th>
                  <td>{this.sumOfAbs(cores)} Pack</td>
                  <td>6 Pack</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Lifting
                  </th>
                  <td>{this.averageOfHabit(liftings)} Minutes</td>
                  <td>2 times per week (total of 40 minutes)</td>
                </tr>
                <tr>
                  <th scope="row" className="table-warning">
                    Stretching
                  </th>
                  <td>{this.averageOfHabit(stretchings)} Minutes</td>
                  <td>10 minutes a day</td>
                </tr>
              </tbody>
            </table>
          )}
          <p className="text-center">
            This is the top 6 list. The goal of this tab is to encourage you to
            better yourself! Your column will appear once you have logged at
            least 7 times.
          </p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits.habits,
});

export default connect(mapStateToProps, { getHabits })(Challenges);
