import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';

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
  applyMiddleware(stringMiddleware, logMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.dispatch(`HELLO_WORLD`);

export default store;