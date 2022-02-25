import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function ScrumBoard(props){
  
  useFirestoreConnect([
    { collection: 'tasks' }
  ]);

  const tasks = useSelector(state => state.firestore.ordered.tasks);
  
  if (isLoaded(tasks)) {
  return (
    <React.Fragment>
      <hr/>
      {tasks.map((task) => {
        return <Task
          whenTaskClicked = { props.onTaskSelection }
          title={task.title}
          description={task.description}
          id={task.id}
          key={task.id}/>
      })}
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

ScrumBoard.propTypes = {
  onTaskSelection: PropTypes.func
};

export default ScrumBoard;