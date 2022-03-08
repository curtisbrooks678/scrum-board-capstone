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
  
  // console.log(tasks);
  // const columnsArr = [].concat(tasks);
  // tasks.sort(function(a,b) { return a.columnCounter - b.columnCounter; });
  // console.log(columnsArr);
  // console.log(columnsArr[0].columnCounter);

  function sortColumn(inputArr) { 
    let columnOneArr = [];
    let columnTwoArr = [];
    let columnThreeArr = [];
    let columnFourArr = [];
    let columnFiveArr = [];
    let allColumnArr = [];
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i].columnCounter === "1"){
        columnOneArr.push(inputArr[i]);
      } else if (inputArr[i].columnCounter === "2"){
        columnTwoArr.push(inputArr[i]);
      } else if (inputArr[i].columnCounter === "3"){
        columnThreeArr.push(inputArr[i]);
      } else if (inputArr[i].columnCounter === "4"){
        columnFourArr.push(inputArr[i]);
      } else if (inputArr[i].columnCounter === "5"){
        columnFiveArr.push(inputArr[i]);
      } else {
        columnOneArr.push(inputArr[i]);
        console.log("here" + inputArr[i].columnCounter);
      }
    }
    allColumnArr = [ columnOneArr, columnTwoArr, columnThreeArr, columnFourArr, columnFiveArr ];
    return allColumnArr; 
  }

  // console.log(sortColumn(columnsArr))
  const newArr = sortColumn(tasks);
  console.log(newArr)

  if (isLoaded(tasks)) {
  return (
    <React.Fragment>
      <hr/>
      {(newArr[0]).map((task) => {
        return <Task
            whenTaskClicked = { props.onTaskSelection }
            title={task.title}
            description={task.description}
            columnCounter={task.columnCounter}
            id={task.id}
            key={task.id}/>
      })}
      {(newArr[1]).map((task) => {
        return <Task
            whenTaskClicked = { props.onTaskSelection }
            title={task.title}
            description={task.description}
            columnCounter={task.columnCounter}
            id={task.id}
            key={task.id}/>
      })}
      {(newArr[2]).map((task) => {
        return <Task
            whenTaskClicked = { props.onTaskSelection }
            title={task.title}
            description={task.description}
            columnCounter={task.columnCounter}
            id={task.id}
            key={task.id}/>
      })}
      {(newArr[3]).map((task) => {
        return <Task
            whenTaskClicked = { props.onTaskSelection }
            title={task.title}
            description={task.description}
            columnCounter={task.columnCounter}
            id={task.id}
            key={task.id}/>
      })}
      {(newArr[4]).map((task) => {
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