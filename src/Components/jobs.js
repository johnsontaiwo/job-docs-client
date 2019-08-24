import React, { Component } from 'react';
import JobContainer from './jobContainer';
import { Link } from 'react-router-dom';

class Jobs extends Component {




  render() {
   const { jobs } = this.props
    return(
     <div>
      <ul>
       {
        jobs.map(job => {
          return <li key={job.id}><Link to={ `/jobs/${ job.id }`}>{job.title}</Link> </li>
        })
       }
       </ul>
     </div>

      )
  }


}



export default Jobs