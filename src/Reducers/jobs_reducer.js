
export default function jobsreducer ( state = {jobs: [] }, action ) {

  switch (action.type) {
    case "GET_JOBS":
     return {...state, jobs: [...state.jobs, action.payload]}

     default: 
       return state
  }
}