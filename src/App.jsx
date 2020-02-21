import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import KegList from './components/KegList'
import NavBar from './components/NavBar'
import Header from './components/Header'
import NewKeg from './components/NewKeg'

function App(){
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/taplist' component={KegList} />
        <Route exact path='/newkeg' component={NewKeg} />
      </Switch>
    </div>
  );
}

export default App;
