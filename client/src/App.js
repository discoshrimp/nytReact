import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router'
// import TitleBar from './src/components/pages/TitleBar'
// import Results from './src/compononents/pages/Results'
// import SearchForm from './src/components/pages/SearchForm'
import Articles from './pages/Articles'

class App extends Component{
  render(){
  return(
  <Switch>
    <Route exact path = '/' component={Articles} />
  </Switch>
  )}
}
export default App;
