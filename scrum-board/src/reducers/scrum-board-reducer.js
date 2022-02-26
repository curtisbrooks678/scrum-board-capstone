// export default (state = {}, action) => {
//   const { title, description, id } = action;
//   switch (action.type) {
//   case 'ADD_TASK':
//     return Object.assign({}, state, {
//       [id]: {
//         title: title,
//         description: description,
//         id: id
//       }
//     });
//   case 'DELETE_TASK':
//     let newState = { ...state };
//     delete newState[id];
//     return newState;
//   default:
//     return state;
//   }
// };