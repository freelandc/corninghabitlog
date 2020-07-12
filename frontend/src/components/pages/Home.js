import React, { Fragment } from "react";
import { default as LogHabits } from "./LogHabits";

export default function Home() {
  return (
    <Fragment>
      <div>
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
        <LogHabits />
      </div>
    </Fragment>
  );
}
