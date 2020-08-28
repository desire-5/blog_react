import React from 'react'
import { Grid } from "@material-ui/core";
import Content from "./Content";

const Blog = () => {
  return (
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
  );
};

export default Blog;