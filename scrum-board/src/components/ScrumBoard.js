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
  
  const columnsArr = [].concat(tasks);
  columnsArr.sort(function(a,b) { return a.columnCounter - b.columnCounter; });
  // console.log(columnsArr);
  // console.log(columnsArr[0].columnCounter);
  // function sortColumn(arr) { 
  //   let columnOneArr = [];
  //   let columnTwoArr = [];
  //   let columnThreeArr = [];
  //   let columnFourArr = [];
  //   let columnFiveArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].columnCounter === 1){
  //       columnOneArr.push(321);
  //     } else if (arr[i].columnCounter === 2){
  //       columnTwoArr.push(arr[i]);
  //     } else if (arr[i].columnCounter === 3){
  //       columnThreeArr.push(arr[i]);
  //     } else if (arr[i].columnCounter === 4){
  //       columnFourArr.push(arr[i]);
  //     } else if (arr[i].columnCounter === 5){
  //       columnFiveArr.push(arr[i]);
  //     } else {
  //       columnOneArr.push(arr[i]);
  //     }
  //   }
  //   return columnOneArr = [ 1, 2, 3 ]; 
  // }

  // console.log(sortColumn(columnsArr));

  if (isLoaded(tasks)) {
  return (
    <React.Fragment>
      <hr/>
      {columnsArr.map((task) => {
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