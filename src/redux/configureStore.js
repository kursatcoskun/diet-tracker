import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = composeEnhancers(
    applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
  );

  const store = createStore(rootReducer, initialState, middlewares);
  sagaMiddleware.run(rootSaga);
  return store;
}
