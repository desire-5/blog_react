import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";


const ArticleCard = props => {
  
  const { id, title, body } = props;
  return (
    
    <Card >
      <CardHeader
        avatar={<Avatar src={'https://c7.hotpng.com/preview/962/950/329/newspaper-computer-icons-icon-hd-news.jpg'} />}
        title={<Link to={"/article/"+id}>{title}</Link>} 
      />
      <CardMedia style={{ height: "150px" } } 
      image={'https://actual.today/wp-content/uploads/2018/06/newspaper.jpg'} 
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {body.substring(1, 150)}...
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={"/article/"+id}><Button size="small">Read more</Button></Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;