import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import AddEmployee from './addemployee'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LoginForm from './loginform'
import DashBoard from './dashboard'
import AddEmployee from './addemployee'
import EditEmployee from './editemployee'
import DeleteEmployee from './deleteemployee'

ReactDOM.render(

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm}></Route>
        <Route path="/dashboard" component={DashBoard}></Route>        
        <Route path="/addemployee" component={AddEmployee}></Route>        
        <Route path="/editemployee" component={EditEmployee}></Route>
        <Route path="/deleteemployee" component={DeleteEmployee}></Route>
      </Switch>
    </BrowserRouter>
  ,
  document.getElementById('root')
);


