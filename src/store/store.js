import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = ({getState}) => (nextDispatch) => (action) => {
  console.log(action.type, getState());

  return nextDispatch(action);
}

const stringMiddleware = () => (nextDispatch) => (action) => {

  if (typeof action === `string`) {
    return nextDispatch({type: action});
  }

  return nextDispatch(action);
}


const store = createStore(reducer, compose(
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const delayedActionCreator = (delay) => (dispatch) => {
  setTimeout(() => dispatch({type: `DELAYED_ACTION`}), delay);
}

store.dispatch(`STRING_ACTION`);
store.dispatch(delayedActionCreator(2000));

export default store;