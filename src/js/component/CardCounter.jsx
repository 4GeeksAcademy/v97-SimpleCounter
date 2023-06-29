import React from "react";
import propTypes from "prop-types";

const SimpleCounter = (props) => {
  return (
    <>
      <div className="bigCounter  d-flex flex-row d-grid gap-2">
        <div className="clockimg">
          <i className="fa-solid fa-clock-rotate-left"></i>
        </div>
        <div className="digitSixth">{props.sixth % 10}</div>
        <div className="digitFifth">{props.fifth % 10}</div>
        <div className="digitFour">{props.fourth % 10}</div>
        <div className="digitThree">{props.third % 10}</div>
        <div className="digitTwo">{props.second % 10}</div>
        <div className="digitOne">{props.first % 10}</div>
      </div>

      <div className="button d-flex flex-row d-grid gap-3">
        <button
          className="start btn btn-primary"
          id="start"
          onClick={props.start}
        >
          Start Up
        </button>
        <button
          className="reset btn btn-warning"
          id="reset"
          onClick={props.reset}
        >
          Reset
        </button>
        <button className="stop btn btn-danger" id="stop" onClick={props.stop}>
          Stop
        </button>
      </div>

      <div className="down row g-3 ">
        <div className="form-group col-3">
          <label>
            <b>Countdown from</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="downNumber"
            name="downNumber"
            placeholder="Number"
          />
        </div>

        <button
          id="downButton"
          type="button"
          className="btn btn btn-info col-1"
        >
          Down
        </button>
      </div>
    </>
  );
};

SimpleCounter.propTypes = {
  sixth: propTypes.number,
  fifth: propTypes.number,
  fourth: propTypes.number,
  third: propTypes.number,
  two: propTypes.number,
  one: propTypes.number,
  reset: propTypes.func,
  start: propTypes.func,
  stop: propTypes.func,
  down: propTypes.func,
};

export default SimpleCounter;
