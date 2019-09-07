import React, { Component } from 'react';
import { fetchJob } from '../Actions/job_actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Job extends Component {

  componentDidMount() {
    this.props.fetchJob(this.props.match.params.id)
  }
  
  render() {
  const job = this.props.job 
    return(
      <div>
       <h4>Company: {job.company}</h4>
       <h4>Title: {job.title}</h4>
       <h4>Application date: {job.date_applied}</h4>
       <h4>Status: {job.status}</h4>
       <h4>Feedback: {job.feedback}</h4>
       <h4>Outcome: {job.outcome}</h4>
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