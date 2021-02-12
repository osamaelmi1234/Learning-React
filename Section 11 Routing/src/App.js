import React, { Component } from 'react';
import {BrowserRouter , Link, Route, Switch} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import'./App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
      <header>
           <nav>
             <ul>
                <li><Link to="/users/">Users</Link></li>
                <li><Link to="/courses/">Courses</Link></li>

             </ul>
           </nav>
      </header>

      <Switch>
       <Route path="/users" component={Users}/>
        <Route path="/courses" component={Courses}/>
        <Route render={() => <h1> Page Not Found</h1>}/>
      </Switch>

       </div>
       </BrowserRouter>
    );
  }
}

export default App;
