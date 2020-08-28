import { ARTICLE_LIST_REQUEST, ARTICLE_LIST_FAIL, ARTICLE_LIST_SUCCESS, 
    ARTICLE_COUNT_VIEWS,
    ARTICLE_DETAIL_REQUEST,
    ARTICLE_DETAIL_SUCCESS,
    ARTICLE_DETAIL_FAIL,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAIL,
    ORDER_ARTICLE_BY,
    ARTICLE_SAVE_REQUEST,
    ARTICLE_SAVE_FAIL,
    ARTICLE_SAVE_SUCCESS,
    ARTICLE_LIST_USER_REQUEST,
    ARTICLE_LIST_USER_SUCCESS,
    ARTICLE_LIST_USER_FAIL,
    ARTICLE_DELETE_REQUEST,
    ARTICLE_DELETE_SUCCESS,
    ARTICLE_DELETE_FAIL

} from "../constatnts/articleConstants";
import Axios from "axios";
import Cookies from 'js-cookie';

const listArticle = () => async (dispatch)=> {
    try{
        dispatch({type:ARTICLE_LIST_REQUEST});
        const {data} = await Axios.get('https://jsonplaceholder.typicode.com/posts/');
        dispatch({type:ARTICLE_LIST_SUCCESS, payload:data});  
    }catch(error){
        dispatch({type:ARTICLE_LIST_FAIL, payload: error.message})
    }
}
const listArticleByUserId = (id) => async (dispatch)=> {
    try{
        dispatch({type:ARTICLE_LIST_USER_REQUEST});
        const {data} = await Axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`);
        dispatch({type:ARTICLE_LIST_USER_SUCCESS, payload:data});  
    }catch(error){
        dispatch({type:ARTICLE_LIST_USER_FAIL, payload: error.message})
    }
}

const sortArticles = (filterArticles, sortC) => (dispatch,getState)=> {
    // debugger
    const sortedArticles = filterArticles.slice()
    if(sortC === 'latest'){
        sortedArticles.sort((a,b) =>(a.id < b.id ? 1 : -1))
    }
    else if(sortC === 'oldest'){
        sortedArticles.sort((a,b) =>(a.id > b.id ? 1 : -1))
    }
    dispatch({type: ORDER_ARTICLE_BY, 
    payload:{
        sort:sortC,
        articles: sortedArticles
    }})
    const {articleList:{sort}} = getState();
    Cookies.set('sort', JSON.stringify(sort));
}

const addCountView = (id) => (dispatch) => {
    // const sortedArticles = filterArticles.slice()
    dispatch({type: ARTICLE_COUNT_VIEWS, payload:id})
}

const saveArticle = (article) => (dispatch)=> {
try {
    // debugger
    dispatch({type:ARTICLE_SAVE_REQUEST, payload:article})
if(!article.id){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        article
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => 
    dispatch({type:ARTICLE_SAVE_SUCCESS, payload:json})
    )}
else{
    fetch(`https://jsonplaceholder.typicode.com/posts/${article.id}`, {
    method: 'PUT',
    body: JSON.stringify({
        article
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
.then(response => response.json())
.then(json =>  dispatch({type:ARTICLE_SAVE_SUCCESS, payload:json}))
}
} catch (error) {
    dispatch({type:ARTICLE_SAVE_FAIL, payload:error.message})
}
}
const deleteArticle = (articleId) => async(dispatch)=>{
    try{
        dispatch({type:ARTICLE_DELETE_REQUEST, payload:articleId})
        const {data} = await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
        dispatch({type:ARTICLE_DELETE_SUCCESS, payload:data})
    }catch(e){
        dispatch({type:ARTICLE_DELETE_FAIL, payload:e.message})
    }
}

const detailArticle = (id) => async(dispatch)=>{
    // debugger
    try{
        dispatch({type:{ARTICLE_DETAIL_REQUEST}})
        const {data} = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) 
        dispatch({type:ARTICLE_DETAIL_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:ARTICLE_DETAIL_FAIL, payload:error.message})
    }
}

const listComments = (id) => async(dispatch)=>{
    try{
        dispatch({type:{COMMENT_LIST_REQUEST}})
        const {data} = await Axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`) 
        dispatch({type:COMMENT_LIST_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:COMMENT_LIST_FAIL, payload:error.message})
    }
}
export {listArticle, detailArticle, listComments, sortArticles,addCountView,saveArticle,listArticleByUserId, deleteArticle}