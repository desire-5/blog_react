import React, { useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listArticle, saveArticle, listArticleByUserId,deleteArticle} from '../../actions/articleActions'
import { TableContainer, Table, TableHead, TableCell, TableBody, Paper, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const Articles = () => {
    const dispatch = useDispatch()
    const [modalVisible, setmodalVisible] = useState(false)
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    
    const saveArticles = useSelector(state => state.articleSave)
    const {loading:loadingSave,success:successSave, error:errorSave} = saveArticles
    const deleteArticleId = useSelector(state => state.articleDelete)
    const {success:successDelete} = deleteArticleId
    const articlesByUser = useSelector(state => state.artilesByUserId)
    const {articlesUserId, loading:loadingUser, error:errorUser} = articlesByUser
    let idUser = React.createRef();
    const articleList = useSelector(state => state.articleList)
    const {articles, loading, error} = articleList;
    const [data, setData] = useState([])
    useEffect(() => {
        if(successSave){
            setmodalVisible(false)
          }
        dispatch(listArticle());
        return () => {
        };
    }, [successSave, successDelete, dispatch]);
   
    const deleteHandler = (article) =>{
        dispatch(deleteArticle(article.id))
    }
    const openModal=(article)=>{
        setmodalVisible(true)
        setId(article.id);
        setTitle(article.title);
        setUserId(article.userId);
        setBody(article.body);
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveArticle({
            id,
            title,
            body,
            userId
        }))
    }
const onHandlerUser = (id) =>{
    dispatch(listArticleByUserId(id))
    setData(articlesUserId)
}
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  
    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
        <>
        <div className="product-header">
          <h3>Articles</h3>
          <button className="button primary" onClick={() => openModal({})}>
            Create Article
          </button>
        </div>
        <div className='product-search'>
            <input type='number' className='userId' ref={idUser} placeholder="enter userId"/> 
            <button onClick={e=>onHandlerUser(idUser.current.value)} className="button primary">Search</button>
            <button onClick={e=> setData(articles)} className="button primary">Show All</button>
        </div>
        {modalVisible && 
        <div className="form">
            <form onSubmit={submitHandler}>
              <ul className="form-container">
                <li>
                  <h2>Create article</h2>
                </li>
                <li>
                  {loadingSave && <div>Loading!...</div>}
                  {errorSave && <div>{errorSave}</div>}
                </li>
    
                <li>
                  <label htmlFor="name">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="price">UserId</label>
                  <input
                    type="text"
                    name="userId"
                    value={userId}
                    id="userId"
                    onChange={(e) => setUserId(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="description">Body</label>
                  <textarea
                    name="body"
                    value={body}
                    id="body"
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="button primary">
                    {id ? 'Update' : 'Create'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setmodalVisible(false)}
                    className="button secondary"
                  >
                    Back 
                  </button>
                </li>
              </ul>
            </form>
          </div>
}
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>ID</TableCell> */}
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">UserId</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Body</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.userId}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.body.substring( 0,150)}...</TableCell>
              <TableCell align="center">
                  <button className="button action" onClick={() => openModal(row)}>
                      Edit
                    </button>{' '}
                    <button
                      className="button action"
                      onClick={() => deleteHandler(row)}
                    >
                      Delete
                    </button> 
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
     
}
