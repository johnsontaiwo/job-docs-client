import React, { Component } from 'react';
import Job from './jobs'
import { fetchJobs } from '../Actions/job_actions'


class JobContainer extends Component {


componentDidMount() {
  this.props.fetchJobs()
}

  render() {

    return(
     <div>
      <Jobs jobs={this.props.jobs} /> 
     </div>

      )
  }


}

const mapStateToProps = (state) => {
  return({
    jobs: state.jobs
  }
  )
}

const mapDispatchToProps = dispatch  => bindActionCxreators({
  fetchJobs}, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(JobContainer)