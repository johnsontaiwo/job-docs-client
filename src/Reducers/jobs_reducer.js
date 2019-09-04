const initialState = {
  jobs: [],
  current: { title: '', date_applied: '', status: '', feedback: '', outcome: '', company: ''}
}


export default function jobsReducer ( state = initialState, action) {

  switch (action.type) {
    case "GET_JOBS":
     return {...state, jobs: action.jobs}

     case "GET_JOB":
     return {...state, current: action.job}

     default: 
       return state
  }

}