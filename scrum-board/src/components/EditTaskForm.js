import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditTaskForm (props) {
  const firestore = useFirestore();
  const { task } = props;
  
  function handleEditTaskFormSubmission(event) {
    event.preventDefault();
    props.onEditTask();
    const propertiesToUpdate = {
      title: event.target.title.value, 
      description: event.target.description.value
    }
    return firestore.update({collection: 'tasks', doc: task.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTaskFormSubmission}
        buttonText="Update Task" />
    </React.Fragment>
  );
}

EditTaskForm.propTypes = {
  onEditTask: PropTypes.func
};

export default EditTaskForm;