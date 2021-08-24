import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch , Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from '../src/components/Logout';
import MainPage from '../src/components/Mainpage';


const App = () =>
 {
  return (
    <Switch>
      <Route exact path ="/" component={Login}/>
      <Route path ="/logout" component={Logout}/>
      <Route path ="/main" component ={MainPage}/>
    </Switch>
  );
}



export default App;
