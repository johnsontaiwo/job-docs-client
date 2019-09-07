import React, { Component } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

class JobInput extends Component {


   state = {
     
     rows: [{}]

   };

   handleChange = idx => event => {
    const { name, value } = event.target
    const rows = [...this.state.rows]
    rows[idx] = {
    [name]: value
    }
    event.preventDefault()
    this.setState({
      rows
    });
   };
      

   handleOnSubmit = event => {
    const job = {company: '', title: '', date_applied: '', status: '', feedback: '', outcome: '' }
    this.props.addJob(this.state)
    this.setState({
      rows: [...this.state.rows, job]
    });
   }; 


  render() {

    return(
     <div>
      <Table>
        <Thead>
          <Tr onSubmit={(event) => this.handleOnSubmit(event)}>
          <Th className="text-center"> # </Th>
           <Th>Company</Th>
           <Th>Title</Th>
           <Th>Date applied</Th>
           <Th>Status</Th>
           <Th>Feedback</Th>
           <Th>Outcome</Th>
          </Tr>
        </Thead>

         <tbody>
                  {this.state.rows.map((job, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="company"
                          value={this.state.rows[idx].company}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="title"
                          value={this.state.rows[idx].title}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="date_applied"
                          value={this.state.rows[idx].date_applied}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="status"
                          value={this.state.rows[idx].status}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="feedback"
                          value={this.state.rows[idx].feedback}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      
                      <td>
                        <input
                          type="text"
                          name="outcome"
                          value={this.state.rows[idx].outcome}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </Table>  
           
      
     </div>

      )
  }


}

export default JobInput