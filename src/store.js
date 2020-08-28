import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {articleListReducer, articleDetailReducer, articleSaveReducer, articleListByUserIdReducer, articleDeleteReducer, } from './reducers/articleReducer'
import thunk from 'redux-thunk'

const initialState = {articleList:{articles:[]}}

const reducers = combineReducers({
    articleList: articleListReducer,
    articleDetail: articleDetailReducer,
    articleSave: articleSaveReducer,
    artilesByUserId: articleListByUserIdReducer,
    articleDelete: articleDeleteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
export default store;