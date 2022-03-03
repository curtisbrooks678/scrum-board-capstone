import React from "react";
import PropTypes from "prop-types";

function TaskDetail(props){
  const { task, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Task Detail</h1>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><em>{task.issue}</em></p>
      <button onClick={ props.onClickingEdit }>Update Task</button>
      <button onClick={()=> onClickingDelete(task.id) }>Delete Task</button>
      <hr/>
    </React.Fragment>
  );
}

TaskDetail.propTypes = {
  task: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TaskDetail;