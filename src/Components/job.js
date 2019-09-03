import React, { Component } from 'react';

class Job extends Component {


  render() {
  
    return(
      <div>
       Job info
      </div>
      )
  }
}


const mapStateToProps = state => ({
  job: state.jobs.current
})

export default Job