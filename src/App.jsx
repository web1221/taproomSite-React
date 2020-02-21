import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import KegList from './components/KegList'
import NavBar from './components/NavBar'
import NewKeg from './components/NewKeg'
import { v4 } from 'uuid'

class App extends React.Components {

  constructor(props){
    super(props);
    this.state = {
      masterKegList: {}
    }
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this)
  }

  handleAddingNewKegToList(newKeg){
    let newKegId = v4()
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList})
  }
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/taplist' component={KegList} />
        <Route path='/newkeg' render={()=> <NewKeg onNewKegCreation={this.handleAddingNewKegToList} /> } />
      </Switch>
    </div>
  );
}

export default App;
