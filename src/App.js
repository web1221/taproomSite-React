import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NewKeg from './components/NewKeg'
import NavBar from './components/NavBar'
import Header from './components/Header'

function App(){
  return (
    <div>
    <NavBar />
    <Header />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/newKeg' component={NewKeg} />
    </Switch>
    </div>
  );
}

export default App;
