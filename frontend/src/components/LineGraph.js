import React, { Component } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

class LineGraph extends Component {
  static propTypes = {
    habits: PropTypes.array.isRequired,
  };
  render() {
    const waters = this.props.habits
      .map((habit) => habit.water)
      .slice(-this.props.length);
    const sleeps = this.props.habits
      .map((habit) => habit.sleep)
      .slice(-this.props.length);
    const mealss = this.props.habits
      .map((habit) => habit.meals)
      .slice(-this.props.length);
    const sweetss = this.props.habits
      .map((habit) => habit.sweets)
      .slice(-this.props.length);
    const junkfoods = this.props.habits
      .map((habit) => habit.junkfood)
      .slice(-this.props.length);
    const crosstrainings = this.props.habits
      .map((habit) => habit.crosstraining)
      .slice(-this.props.length);
    const cores = this.props.habits
      .map((habit) => habit.core)
      .slice(-this.props.length);
    const liftings = this.props.habits
      .map((habit) => habit.lifting)
      .slice(-this.props.length);
    const stretchings = this.props.habits
      .map((habit) => habit.stretching)
      .slice(-this.props.length);
    const moods = this.props.habits
      .map((habit) => habit.mood)
      .slice(-this.props.length);
    const created_at = this.props.habits
      .map((habit) => habit.created_at)
      .slice(-this.props.length);

    //automatically makes the length (labels) for the x axis
    var numbers = [];
    for (var i = 0; i < this.props.length; i++) {
      numbers.push(i);
    }

    var moment = require("moment");
    var enddate = "";
    var range = [];
    var startdate = "";
    if (created_at.length < this.props.length) {
      startdate = moment(created_at[0]);
      enddate = moment(created_at[0]).add(this.props.length, "days");
    } else {
      startdate = moment(created_at[0]).subtract(this.props.length, "days");
      enddate = moment(created_at[0]);
    }

    while (startdate < enddate) {
      range.push(startdate.format("YYYY-MM-DD")); //.toDate()
      startdate = startdate.clone().add(1, "d");
    }

    var data = {
      labels: range,
      datasets: [
        {
          label: "Water",
          fill: false,
          data: waters,
          backgroundColor: "rgba(0, 0,255,0.2)",
          borderColor: "rgba(0, 0,255,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(0, 0,255,0.4)",
          hoverBorderColor: "rgba(0, 0,255,1)",
        },
        {
          label: "Sleep",
          fill: false,
          data: sleeps,
          backgroundColor: "rgba(127, 0,255,0.2)",
          borderColor: "rgba(127, 0,255,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(127, 0,255,0.4)",
          hoverBorderColor: "rgba(127, 0,255,1)",
        },
        {
          label: "Meals",
          fill: false,
          data: mealss,
          backgroundColor: "rgba(204, 0, 0,0.2)",
          borderColor: "rgba(204, 0, 0,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(204, 0, 0,0.4)",
          hoverBorderColor: "rgba(204, 0, 0,1)",
        },
        {
          label: "Sweets",
          fill: false,
          data: sweetss,
          backgroundColor: "rgba(255, 0, 127,0.2)",
          borderColor: "rgba(255, 0, 127,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(255, 0, 127,0.4)",
          hoverBorderColor: "rgba(255, 0, 127,1)",
        },
        {
          label: "Junk Food",
          fill: false,
          data: junkfoods,
          backgroundColor: "rgba(255,128, 0,0.2)",
          borderColor: "rgba(255,128, 0,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(255,128, 0,0.4)",
          hoverBorderColor: "rgba(255,128, 0,1)",
        },
        {
          label: "Cross Training",
          fill: false,
          data: crosstrainings,
          backgroundColor: "rgba(0, 102, 51,0.2)",
          borderColor: "rgba(0, 102, 51,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(0, 102, 51,0.4)",
          hoverBorderColor: "rgba(0, 102, 51,1)",
        },
        {
          label: "Core",
          fill: false,
          data: cores,
          backgroundColor: "rgba(0, 255, 0,0.2)",
          borderColor: "rgba(0, 255, 0,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(0, 255, 0,0.4)",
          hoverBorderColor: "rgba(0, 255, 0,1)",
        },
        {
          label: "Lifitng",
          fill: false,
          data: liftings,
          backgroundColor: "rgba(0, 128, 255,0.2)",
          borderColor: "rgba(0, 128, 255,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(0, 128, 255,0.4)",
          hoverBorderColor: "rgba(0, 128, 255,1)",
        },
        {
          label: "Stretching",
          fill: false,
          data: stretchings,
          backgroundColor: "rgba(255,0, 255,0.2)",
          borderColor: "rgba(255,0, 255,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(255,0, 255,0.4)",
          hoverBorderColor: "rgba(255,0, 255,1)",
        },
        {
          label: "Mood",
          fill: false,
          data: moods,
          backgroundColor: "rgba(0, 0, 0,0.2)",
          borderColor: "rgba(0, 0, 0,1)",
          borderWidth: 1,
          spanGaps: false,
          hoverBackgroundColor: "rgba(0, 0, 0,0.4)",
          hoverBorderColor: "rgba(0, 0, 0,1)",
        },
      ],
    };

    return (
      <div>
        <Line
          data={data}
          options={{
            legend: {
              display: true,
              position: "right",
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    unit: "day",
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits.habits,
});

export default connect(mapStateToProps)(LineGraph);
