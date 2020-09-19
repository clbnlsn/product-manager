import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App bg-dark">
      
      <h1 className="bg-dark text-info rounded col-5 mx-auto">Product Manager</h1>
      <div className="d-flex justify-content-around bg-dark text-info col-5 mx-auto">
        <Link to="/new" className="btn btn-info btn-outline-success text-warning">Create Product</Link>
        <Link to="/" className="btn btn-info btn-outline-success text-warning">Home</Link>
      </div>
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Show path="/product/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
