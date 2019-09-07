import React, { Component } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addJob } from '../Actions/job_actions';

class JobInput extends Component {


   state = {
     
     company: '', 
     title: '', 
     date_applied: '', 
     status: '', 
     feedback: '', 
     outcome: '' 

   };

   handleChange = event => {
    const { name, value } = event.target
    //const rows = [...this.state.rows]
    // rows[idx] = {
    // [name]: value
    // }
    event.preventDefault();
    this.setState({
     [name]: value
    })
   };
      

   handleOnSubmit = event => {
    const job = {company: '', title: '', date_applied: '', status: '', feedback: '', outcome: '' }
    this.props.addJob(this.state)
    this.setState({
      company: '', 
      title: '', 
      date_applied: '', 
      status: '', 
      feedback: '', 
      outcome: '' 
    });
   }; 


  render() {
   const { company, title, date_applied, status, feedback, outcome } = this.state
    return(
     <div> 
        <form className="jobInputs" onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
                          type="text"
                          name="company"
                          placeholder="Company"
                          value={ company }
                          onChange={(event) => this.handleChange(event)}
                          />
                          <input
                          type="text"
                          name="title"
                          placeholder="Job Title"
                          value={ title }
                          onChange={(event) => this.handleChange(event)}
                          />
                          <input
                          type="text"
                          name="date_applied"
                          placeholder="Date Applied"
                          value={ date_applied }
                          onChange={(event) => this.handleChange(event)}
                          />
                          <input
                          type="text"
                          name="status"
                          placeholder="Status"
                          value={ status }
                          onChange={(event) => this.handleChange(event)}
                          />
                          <input
                          type="text"
                          name="feedback"
                          placeholder="Feedback"
                          value={ feedback }
                          onChange={(event) => this.handleChange(event)}
                          />
                          <input
                          type="text"
                          name="outcome"
                          placeholder="Outcome"
                          value={ outcome }
                          onChange={(event) => this.handleChange(event)}
                          />

       <input className="submitInfo" type="submit" />
      </form>
      
     </div>

      )
  }
}



const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addJob }, dispatch)
}
export default connect(null, mapDispatchToProps)(JobInput)



//<Table onSubmit={(event) => this.handleOnSubmit(event)}>
      //   <Thead>
      //     <Tr>
      //     <Th className="text-center"> # </Th>
      //      <Th>Company</Th>
      //      <Th>Title</Th>
      //      <Th>Date applied</Th>
      //      <Th>Status</Th>
      //      <Th>Feedback</Th>
      //      <Th>Outcome</Th>
      //     </Tr>
      //   </Thead>

      //    <tbody>
      //             {this.state.rows.map((job, idx) => (
      //               <tr id="addr0" key={idx}>
      //                 <td>{idx}</td>
      //                 <td>
      //                   <input
      //                     type="text"
      //                     name="company"
      //                     value={this.state.rows[idx].company}
      //                     onChange={this.handleChange(idx)}
      //                     className="form-control"
      //                   />
      //                 </td>
      //                 <td>
      //                   <input
      //                     type="text"
      //                     name="title"
      //                     value={this.state.rows[idx].title}
      //                     onChange={this.handleChange(idx)}
      //                     className="form-control"
      //                   />
      //                 </td>
      //                 <td>
      //                   <input
      //                     type="text"
      //                     name="date_applied"
      //                     value={this.state.rows[idx].date_applied}
      //                     onChange={this.handleChange(idx)}
      //                     className="form-control"
      //                   />
      //                 </td>
      //                 <td>
      //                   <input
      //                     type="text"
      //                     name="status"
      //                     value={this.state.rows[idx].status}
      //                     onChange={this.handleChange(idx)}
      //                     className="form-control"
      //                   />
      //                 </td>
      //                 <td>
      //                   <input
      //                     type="text"
      //                     name="feedback"
      //                     value={this.state.rows[idx].feedback}
      //                     onChange={this.handleChange(idx)}
      //                     className="form-control"
      //                   />
      //                 </td>
                      
      //                 <td>
      //                   <input
      //                     type="text"
      //                     name="outcome"
      //                     value={this.state.rows[idx].outcome}
      //                     onChange={this.handleChange(idx)}
      //                     className="form-control"
      //                   />
      //                 </td>
      //                 <td>
      //                 <input className="submitInfo" type="submit" />
      //                 </td>
      //               </tr>
      //             ))}
      //           </tbody>
      //         </Table>  
