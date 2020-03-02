import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import KegList from './components/KegList';
import NavBar from './components/NavBar';
import NewKeg from './components/NewKeg';
import { connect } from 'react-redux';

class App extends React.Component {
  handleAddingNewKegToList(newKeg) {
    this.props.dispatch({
      type: 'ADD_KEG',
      newKeg: this.newKeg,
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/taplist"
            render={() => <KegList kegList={this.props.masterKegList} />}
          />
          <Route
            path="/newkeg"
            render={() => (
              <NewKeg onNewKegCreation={this.handleAddingNewKegToList} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  masterKegList: state.masterKegList,
});

export default withRouter(connect(mapStateToProps)(App));
