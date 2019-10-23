import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
// const initialState = {
//     moving: false,
//     loggingIn: false,
//     registering: false,
//     user: {}
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }

const rootReducer = combineReducers({
  player: playerReducer
});

export default rootReducer;
