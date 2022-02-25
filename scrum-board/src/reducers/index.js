import formVisibleReducer from './form-visible-reducer';
import scrumBoardReducer from './scrum-board-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  scrumBoardReducer: scrumBoardReducer,
  firestore: firestoreReducer
});

export default rootReducer;