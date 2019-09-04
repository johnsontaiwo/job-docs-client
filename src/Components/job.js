import React, { Component } from 'react';
import { fetchJob } from '../Actions/job_actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Job extends Component {

  componentDidMount() {
    this.props.fetchJob(this.props.match.params.id)
  }
  
  render() {
    //debugger
  const job = this.props.job 
    return(
      <div>
       <h4>Title: {job.title}</h4>
      </div>
      )
  
  }
}


const mapStateToProps = state => ({
  job: state.jobs.current
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchJob}, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Job)