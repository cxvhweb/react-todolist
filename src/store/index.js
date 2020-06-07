import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
//   typeof window === 'object' &&------------------注释掉
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
//    applyMiddleware(...middleware),
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    
    // other store enhancers if any
);
const store=createStore(
    reducer,
    enhancer
);
sagaMiddleware.run(todoSagas);

export default store;