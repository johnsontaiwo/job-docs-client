import React, { Component } from 'react';
import Jobs  from  '../Components/jobs';
import JobContainer  from  '../Components/jobContainer';
import Job from '../Components/job';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect, Switch } from 'react-router-dom';

class Routes extends Component {

  render() {

    return(
      <Router >
       <Switch>
      <div>
       <ul>
       <li>
        <Link to='/jobs' className="Jobs">Jobs</Link>
         </li>
       </ul>
      <hr />

      
        <Route path='/jobs' component={JobContainer}/>
        <Route exact path='/jobs/:id' render={(props) => ( <Job key={props.match.params.id} {...props} />)} />
        
        </div>
       </Switch>
      </Router >


    )
  }
}

export default Routes