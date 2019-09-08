import React, { Component } from 'react';
import { fetchJob, updateJob } from '../Actions/job_actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Job extends Component {

  state = {

    editable: false
  }

  componentDidMount() {
    this.props.fetchJob(this.props.match.params.id)
  }
  
  handleEdit = event => {
    event.preventDefault()
    if (this.state.editable) {
        let job_id = this.props.job.id;
        let company_name = this.refs.company.value;
        let job_title = this.refs.title.value;
        let application_date = this.refs.date_applied.value;
        let job_status = this.refs.status.value;
        let application_feedback = this.refs.feedback.value
        let application_outcome = this.refs.outcome.value
        let job_applied = {id: job_id , company: company_name , title: job_title, date_applied: application_date, status: job_status, feedback: application_feedback, outcome: application_outcome};
        this.props.updateJob(job_applied)}

        this.setState({
      editable: !this.state.editable
    })

  }
        
  render() {
  const  job   = this.props.job 
  var company = this.state.editable ? <input type="text" ref="company" defaultValue={ job.company }/> : <h5>{ job.company }</h5>
  var title = this.state.editable ? <input type="text" ref="title" defaultValue={ job.title } /> : <h5>{ job.title }</h5>
  var date_applied = this.state.editable ? <input type="text" ref="date_applied" defaultValue={ job.date_applied } /> : <h5>{ job.date_applied }</h5>
  var status = this.state.editable ? <input type="text" ref="status" defaultValue={ job.status } /> : <h5>{ job.status }</h5>
  var feedback = this.state.editable ? <input type="text" ref="feedback" defaultValue={ job.feedback } /> : <h5>{ job.feedback }</h5>
  var outcome = this.state.editable ? <input type="text" ref="outcome" defaultValue={ job.outcome } /> : <h5>{ job.outcome }</h5>

    return(
      <div>
       <h4>Company: {job.company}</h4>
       <h4>Title: {job.title}</h4>
       <h4>Application date: {job.date_applied}</h4>
       <h4>Status: {job.status}</h4>
       <h4>Feedback: {job.feedback}</h4>
       <h4>Outcome: {job.outcome}</h4>
       <button onClick={this.handleEdit}>{" "}
        {this.state.editable ? "Submit" : "Edit"}{" "}
        </button>
      </div>
      )
  
  }
}


const mapStateToProps = state => ({
  job: state.jobs.current
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchJob, updateJob}, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Job)