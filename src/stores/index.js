import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// importing your root reducer
import app from '../reducers';


// importing your root saga
import rootSaga from '../saga/contacts';

// creating saga middleware instance
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware)); //configuring saga
  sagaMiddleware.run(rootSaga);
  return store;
}
