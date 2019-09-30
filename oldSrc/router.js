import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Counter from './components/counter';
import Menu from './components/menu';

function AppRouter() {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={Home} />
      <Route path="/counter" component={Counter} />
    </Router>
  );
}

export default AppRouter;