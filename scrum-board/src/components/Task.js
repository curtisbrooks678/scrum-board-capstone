import React from "react";
import PropTypes from "prop-types";

function Task(props){

  const taskStyle = {
    width: "50%",
    padding: "20px",
    border: "1px solid black"
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenTaskClicked(props.id)} style={taskStyle}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.columnCounter}</p>
      </div>
    </React.Fragment>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  columnCounter: PropTypes.number,
  id: PropTypes.string,
  whenTaskClicked: PropTypes.func
};

export default Task;