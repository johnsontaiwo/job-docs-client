const intialState = {
  jobs: [],
  current: { title: '', date_aaplied: '', status: '', feedback: '', outcome: '', company: ''}
}


export default function jobsReducer ( state = initialState, action) {

  switch (action.type) {
    case "GET_JOBS":
     return {...state, jobs: action.jobs}

     default: 
       return state
  }
}