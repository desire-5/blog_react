import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortArticles } from '../actions/articleActions';
import Cookie from 'js-cookie';


const Sort = () => {

    const sort = Cookie.getJSON('sort') || '';
    const dispatch = useDispatch()
    const articleList = useSelector(state => state.articleList)
    const {filteredItems} = articleList;    
    if(!filteredItems )return <div>Loading...</div>
    return (
        <div>
            <div className="sort">
                Articles - {filteredItems.length} <br/>
                Order:<select value={sort} onChange={(e)=> dispatch(sortArticles(filteredItems, e.target.value))}>
                    <option value="">Choice</option>
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    </select> 
            </div>
        </div>
    )
}

export default Sort
