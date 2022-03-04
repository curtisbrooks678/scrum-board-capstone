import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
// import BackLog from "./BackLog";
// import ToDo from "./ToDo";
// import InProgress from "./InProgress";
// import Review from "./Review";
// import Done from "./Done";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function ScrumBoard(props){
  
  useFirestoreConnect([
    { collection: 'tasks' }
  ]);

  const tasks = useSelector(state => state.firestore.ordered.tasks);
  
  const sortIntoColumns = [].concat(tasks);
  sortIntoColumns.sort(function(a,b) { return a.columnCounter - b.columnCounter; });
  // console.log("sort array" + sortIntoColumns);
  // console.log(sortIntoColumns);
  // const testArr = [ 3, 1, 4, 2, 5 ];
  // console.log("test array");
  // console.log(testArr.sort(function(a,b) { return a - b; }));

  // sortIntoColumns.sort((a,b) => a.columnCounter - b.columnCounter ? 1 : -1);

  if (isLoaded(tasks)) {
  return (
    <React.Fragment>
      <hr/>
      {sortIntoColumns.map((task) => {
        return <Task
            whenTaskClicked = { props.onTaskSelection }
            title={task.title}
            description={task.description}
            columnCounter={task.columnCounter}
            id={task.id}
            key={task.id}/>
      })}
      {/* {tasks.map((task) => {
        return <Task
            whenTaskClicked = { props.onTaskSelection }
            title={task.title}
            description={task.description}
            columnCounter={task.columnCounter}
            id={task.id}
            key={task.id}/>
      })} */}
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