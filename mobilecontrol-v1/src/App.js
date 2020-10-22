import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import login from './components/login';
import control from './components/control';

function App() {
  return (
    <React.Fragment>
      <main>
        <switch>
          <Route path="/login" component={login} />
          <Route path="/control" component={control} />
        </switch>
      </main>
    </React.Fragment>
  );
}

export default App;