import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import KegList from './components/KegList';
import NavBar from './components/NavBar';
import NewKeg from './components/NewKeg';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/taplist"
          render={() => <KegList kegList={props.masterKegList} />}
        />
        <Route path="/newkeg" render={() => <NewKeg />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  masterKegList: state,
});

export default withRouter(connect(mapStateToProps)(App));
