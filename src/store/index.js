import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
  rootReducer,
  __DEV__
    ? compose(
      applyMiddleware(sagaMiddleware),
      console.tron.createEnhancer(),
    )
    : applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
