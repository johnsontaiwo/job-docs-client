import React, { Component } from 'react';
import Job from './job';
import Jobs from './jobs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchJobs } from '../Actions/job_actions'


class JobContainer extends Component {


componentDidMount() {
  this.props.fetchJobs()
}

  render() {
    //debugger
    return(
     <div>
      <Jobs jobs={this.props.jobs} /> 
     </div>

      )
  }


}

const mapStateToProps = (state) => {
  return({
    jobs: state.jobs.jobs
  }
  )
}

const mapDispatchToProps = dispatch  => bindActionCreators({
  fetchJobs}, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(JobContainer)