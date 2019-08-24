import React, { Component } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

class JobInput extends Component {


   state = {
     
     title: '',
     date_applied: '',
     status: '',
     feedback: '',
     company: '',
     outcome: ''

   }

   handleChange = event => {
    const { name, value } = event.target
    event.preventDefault()
    this.setState({
      [name]: value
    })
   }

   handleOnSubmit = event => {
    

   } 


  render() {

    return(
     <div>
      <Table>
        <Thead>
          <Tr>
           <Th>Company</Th>
           <Th>Title</Th>
           <Th>Date applied</Th>
           <Th>Status</Th>
           <Th>Feedback</Th>
           <Th>Outcome</Th
          </Tr>
        </Thead>

           
           
      All job inpputs are here!
     </div>

      )
  }


}

export default JobInput