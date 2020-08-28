import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {listArticle} from '../actions/articleActions'
import Grid from '@material-ui/core/Grid';
import ArticleCard from './ArticleCard';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sort from './Sort'

const Content = () => {
    // debugger
    const useStyles = makeStyles(theme => ({
        blogTitle:{
            textAlign:"center",
            color:'#511'
        },
    }))
    const classes = useStyles()
    const articleList = useSelector(state => state.articleList)
    const {articles, loading, error, filteredItems} = articleList;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listArticle());
          return () => {
          };
      }, []);

  const getArticleCard = articleObj => {
    return (
      <Grid item xs={12} sm={3} key={articleObj.id}>
        <ArticleCard {...articleObj} />
      </Grid>
    );
  };
if(!articles.length)return <div>Loading...</div>
  return (
    loading? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <>
    <Box component='h2' className={classes.blogTitle}>Blog</Box>
    <Box component='h4' className={classes.blogTitle}>
        <Sort />
    </Box>
    
    <Grid container spacing={2} >
      {filteredItems.map(articleObj => getArticleCard(articleObj))}
    </Grid>
    </>
  );
};


export default Content