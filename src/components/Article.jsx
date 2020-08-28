
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

import { detailArticle, listComments, addCountView } from '../actions/articleActions';
import { List, ListItemText, Divider, Typography, ListItem, makeStyles } from '@material-ui/core';

const Article = (props)=> {
// debugger
const articleDetail = useSelector(state=>state.articleDetail);
const{loading, article_detail, error, comments, loading_com} = articleDetail;
const dispatch = useDispatch();
useEffect(() => {
  dispatch(detailArticle(props.match.params.id))
  dispatch(listComments(props.match.params.id))
  dispatch(addCountView(props.match.params.id))
  return () => {
  }
}, [dispatch, props.match.params.id])
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '66ch',
    },
    inline: {
      display: 'inline',
    },
  }));
  const classes = useStyles();

    return <div>
    {loading && loading_com ? <div>Loadding...</div>:
      error? <div>{error}</div>:
    <div className="details">
           <h2 className='detailsTitle'> {article_detail.title}</h2>
           <div className='detailsBody'>{article_detail.body}</div>
    <hr/>

    Comments:
    <List className={classes.root}>
    {
        comments.map(comment =>
            <div>
                <ListItem alignItems="flex-start">
                <ListItemText
                  primary={comment.name}
                  secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {comment.email }
                    </Typography>
                      {' - '}{comment.body}
                  </React.Fragment>
          }
        />
              </ListItem>
              <Divider variant="inset" component="li" />
              </div>
            )
        }
    </List>
    <Link to='/blog'>Back to articles</Link>
            </div>
  }
        </div>
}
export default Article;
