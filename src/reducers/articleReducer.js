import { ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL, 
        ARTICLE_DETAIL_REQUEST, ARTICLE_DETAIL_SUCCESS, ARTICLE_DETAIL_FAIL, COMMENT_LIST_FAIL, COMMENT_LIST_SUCCESS, COMMENT_LIST_REQUEST, ORDER_ARTICLE_BY, ARTICLE_COUNT_VIEWS, ARTICLE_SAVE_REQUEST, ARTICLE_SAVE_SUCCESS, ARTICLE_SAVE_FAIL, ARTICLE_LIST_USER_REQUEST, ARTICLE_LIST_USER_SUCCESS, ARTICLE_LIST_USER_FAIL, ARTICLE_DELETE_REQUEST, ARTICLE_DELETE_SUCCESS, ARTICLE_DELETE_FAIL } from "../constatnts/articleConstants";

function articleListReducer(state = { articles:[],filteredItems:[], sort:'' }, action){
    switch(action.type){
        case ARTICLE_LIST_REQUEST:
            return {loading:true, articles:[]}
        case ARTICLE_LIST_SUCCESS:
            return {...state, loading:false, articles: action.payload, filteredItems: action.payload}
        case ARTICLE_LIST_FAIL:
            return {loading:false, error:action.payload}
        case ORDER_ARTICLE_BY:
            return {
                ...state,
                sort:action.payload.sort,
                filteredItems: action.payload.articles
            }
        default: return state;
    }
}

const articleListByUserIdReducer = (state = { articlesUserId:[] }, action ) => {
    switch(action.type){
        case ARTICLE_LIST_USER_REQUEST: 
            return {...state, loading:true}
        case ARTICLE_LIST_USER_SUCCESS:
            return { loading:false, articlesUserId: action.payload}
        case ARTICLE_LIST_USER_FAIL:
            return {...state, loading:false, error:action.payload}
        default: return state;
    }
}

const articleDetailReducer = (state = { article_detail:[], comments:[] }, action ) => {
    switch(action.type){
        case ARTICLE_DETAIL_REQUEST: 
            return {...state, loading:true}
        case ARTICLE_DETAIL_SUCCESS:
            return {...state, loading:false, article_detail: action.payload}
        case ARTICLE_DETAIL_FAIL:
            return {...state, loading:false, error:action.payload}
        case COMMENT_LIST_REQUEST: 
            return {...state, loading_com:true}
        case COMMENT_LIST_SUCCESS:
            return {...state, loading_com:false, comments: action.payload}
        case COMMENT_LIST_FAIL:
            return {...state,loading_com:false, error:action.payload}
        default: return state;
    }
}

const articleSaveReducer = (state = {article:[]}, action ) => {
    switch(action.type){
        case ARTICLE_SAVE_REQUEST: 
            return { loading:true}
        case ARTICLE_SAVE_SUCCESS:
            return {...state, loading:false, article: action.payload, success:true}
        case ARTICLE_SAVE_FAIL:
            return {loading:false, error:action.payload}
        default: return state;
    }
}
const articleDeleteReducer = (state= {article:{}},action) => {
    switch(action.type){
        case ARTICLE_DELETE_REQUEST:
            return{ loading:true, article:action.payload}
        case ARTICLE_DELETE_SUCCESS: 
            return { ...state, loading:false, article:action.payload, success:true}
        case ARTICLE_DELETE_FAIL:
            return { loading:false, error:action.payload}
        default: return state
    }
}
export {articleListReducer, articleDetailReducer, articleSaveReducer,articleListByUserIdReducer,articleDeleteReducer}