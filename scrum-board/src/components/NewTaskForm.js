import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewTaskForm(props){

  const firestore = useFirestore();
  function addTaskToFirestore(event) {
    event.preventDefault();
    props.onNewTaskCreation();
    return firestore.collection('tasks').add(
      {
        title: event.target.title.value,
        description: event.target.description.value,
        columnCounter: 0
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addTaskToFirestore}
        buttonText="Add Task" />
    </React.Fragment>
  );
}

NewTaskForm.propTypes = {
  onNewTaskCreation: PropTypes.func
};

export default NewTaskForm;