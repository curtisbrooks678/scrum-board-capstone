import React from "react";
import Task from "./Task";
// import BackLog from "./BackLog";
// import ToDo from "./ToDo";
// import InProgress from "./InProgress";
// import Review from "./Review";
// import Done from "./Done";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import PropTypes from "prop-types";

function ScrumBoard(props){
  
  useFirestoreConnect([
    { collection: 'tasks' }
  ]);

  const tasks = useSelector(state => state.firestore.ordered.tasks);

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

  const newArr = sortColumn(tasks);

  // const floatContainer = {
  //   border: "3px solid #fff",
  //   padding: "20px"
  // };

  // const floatChild1 = {
  //   width: "50%",
  //   float: "left",
  //   padding: "20px",
  //   border: "1px solid black"
  // }

  // const floatChild2 = {
  //   width: "50%",
  //   float: "left",
  //   padding: "20px",
  //   border: "1px solid black"
  // }

  if (isLoaded(tasks)) {
  return (
    <React.Fragment>
      <hr/>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridGap: 20 }}>
        <div>
          <h3>BackLog</h3>
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
        </div>
        <div>
        <h3>ToDo</h3>
        <hr/>
          {(newArr[1]).map((task) => {
            return <Task
                whenTaskClicked = { props.onTaskSelection }
                title={task.title}
                description={task.description}
                columnCounter={task.columnCounter}
                id={task.id}
                key={task.id}/>
          })}
        </div>
        <div>
        <h3>InProgress</h3>
        <hr/>
          {(newArr[2]).map((task) => {
            return <Task
                whenTaskClicked = { props.onTaskSelection }
                title={task.title}
                description={task.description}
                columnCounter={task.columnCounter}
                id={task.id}
                key={task.id}/>
          })}
        </div>
        <div>
        <h3>Review</h3>
        <hr/>
          {(newArr[3]).map((task) => {
            return <Task
                whenTaskClicked = { props.onTaskSelection }
                title={task.title}
                description={task.description}
                columnCounter={task.columnCounter}
                id={task.id}
                key={task.id}/>
          })}
        </div>
        <div>
        <h3>Done</h3>
        <hr/>
          {(newArr[4]).map((task) => {
            return <Task
                whenTaskClicked = { props.onTaskSelection }
                title={task.title}
                description={task.description}
                columnCounter={task.columnCounter}
                id={task.id}
                key={task.id}/>
          })}
        </div>
      </div>
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