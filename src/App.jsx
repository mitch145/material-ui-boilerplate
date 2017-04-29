import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import './App.css';

// Routes
import Home from './routes/home';
import Test from './routes/test';

function App() {
  return (
    <div>
      <div className="pages">
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Router>
      </div>
    </div>
  );
}

export default App;
