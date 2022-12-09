
import { composeWithDevTools } from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import contentCounter from './Middlewares/contentCounter';
import rootReducer from './reducers/rootReducer';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(contentCounter, thunk, logger)));

export default store;