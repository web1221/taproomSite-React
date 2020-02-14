import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import TapList from './components/TapList'
import NavBar from './components/NavBar'
import Header from './components/Header'

function App(){
  return (
    <div>
    <NavBar />
    <Header />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/taplist' component={TapList} />
    </Switch>
    </div>
  );
}

export default App;
