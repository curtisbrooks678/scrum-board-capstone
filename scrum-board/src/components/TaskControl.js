import React from 'react';
import NewTaskForm from './NewTaskForm';
import ScrumBoard from './ScrumBoard';
import TaskDetail from './TaskDetail';
import EditTaskForm from './EditTaskForm';
import { connect } from 'react-redux';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class TaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTask: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTask != null) {
      this.setState({
        selectedTask: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewTaskToList = (newTask) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedTask = (id) => {
    this.props.firestore.get({collection: 'tasks', doc: id}).then((task) => {
      const firestoreTask = {
        title: task.get("title"),
        description: task.get("description"),
        id: task.id
      }
      this.setState({selectedTask: firestoreTask });
    });
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTaskInList = () => {
    this.setState({
      editing: false,
      selectedTask: null
    });
  }

  handleDeletingTask = (id) => {
    this.props.firestore.delete({collection: 'tasks', doc: id});
    this.setState({selectedTask: null});
  }

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the Scrum Board.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing ) {      
        currentlyVisibleState = <EditTaskForm task = {this.state.selectedTask} onEditTask = {this.handleEditingTaskInList} />
        buttonText = "Return to Scrum Board";
      } else if (this.state.selectedTask != null) {
        currentlyVisibleState = 
        <TaskDetail 
          task = {this.state.selectedTask} 
          onClickingDelete = {this.handleDeletingTask} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Scrum Board";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewTaskForm onNewTaskCreation = {this.handleAddingNewTaskToList}  />;
        buttonText = "Return to Scrum Board";
      } else {
        currentlyVisibleState = <ScrumBoard scrumBoard={this.props.mainTicketList} onTaskSelection={this.handleChangingSelectedTask} />;
        //NEED TO EDIT LINE ABOVE, TAKE OUT mainTicketList
        buttonText = "Add Task";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );  
    }
  } 
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TaskControl = connect(mapStateToProps)(TaskControl);

export default withFirestore(TaskControl);