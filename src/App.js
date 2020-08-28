import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Article from './components/Article';
import Navbar from './components/Navbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Resume from './components/Resume';
import Blog from './components/Blog';
import { Articles } from './components/admin/Articles';

function App() {

  return (
    <>
    <BrowserRouter>
    <CssBaseline/>
    <div >
      <Navbar/>
    </div>
    <Switch>
          <Route path='/article/:id' component={Article} />
          <Route path='/blog/' component={Blog} />
          <Route path="/admin/articles/" component={Articles} />
          <Route path='/' exact={true} component={Header}  />
          <Route path='/resume'  component={Resume} />
    </Switch>
    </BrowserRouter>
    </  >
  );
}

export default App;
