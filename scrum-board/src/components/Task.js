import React from "react";
import PropTypes from "prop-types";

function Task(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTaskClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenTaskClicked: PropTypes.func
};

export default Task;