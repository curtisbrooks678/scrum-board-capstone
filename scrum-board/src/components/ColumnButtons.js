import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function ColumnButtons(props) {
  const firestore = useFirestore();
  const { task } = props;
  
  function handleUpdateColumnCounter(event) {
    event.preventDefault();
    props.onUpdateColumnCounter();
    const propertiesToUpdate = {
      columnCounter: event.target.columnCounter.value
    }
    return firestore.update({collection: 'tasks', doc: task.id }, propertiesToUpdate)
  }

  function handleAddColumnCounter() {
    // code to add to columnCounter
  }

  function handleSubtractColumnCounter() {
    // code to subtract to columnCounter
  }

  return (
    <React.Fragment>
      <button onClick={ handleAddColumnCounter }>Add</button> 
      <button onClick={ handleSubtractColumnCounter }>Subtract</button> 
    </React.Fragment>
  );
}

ColumnButtons.propTypes = {
  onUpdateColumnCounter: PropTypes.func
};

export default ColumnButtons;