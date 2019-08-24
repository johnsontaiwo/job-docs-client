import React, from 'react';
import Jobs  from  '../Components/jobs';
import Job from '../Components/job';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect, Switch } from 'react-router-dom';

class Routes extends Component {

  render() {

    return(
      <Router >
       <Switch>
      <div>
      
      <hr />

      
        <Route  path='/jobs' component={ArticleContainer}/>
        
        <Route exact path='/jobs/:id' render={(props) => ( <Job key={props.match.params.id} {...props} />)} />

        </div>
       </Switch>
      </Router >


    )
  }
}