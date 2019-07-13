import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// importing your root reducer
import app from '../reducers';


// importing your root saga
import dataSaga from '../sagas';

// creating saga middleware instance
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware)); //configuring saga
  sagaMiddleware.run(dataSaga);
  return store;
}
