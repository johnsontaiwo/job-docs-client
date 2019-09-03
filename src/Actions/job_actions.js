const API_URL = 'http://localhost:3001/api/v1'

export const getJobs = jobs => {
  return {type: "GET_JOBS",
  jobs
 }
}

export const getJob = job => {
  return {type: "GET_JOBS",
  job
 }
}

export const fetchJobs = () => {
  const request = new Request(`${API_URL}/jobs`, {
    method: "GET",
    headers: new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }),
     
  })
  return dispatch => {
    return fetch(request)
          .then(res => res.json())
          .then(jobs => dispatch(getJobs(jobs)))
          .catch(error => console.log(error))
  }
}

export const fetchJob = (id) => {
  const request = new Request(`${API_URL}/job/{id}`, {
    method: "GET",
    headers: new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }),

})

  return dispatch => {
    return fetch(request)
    .then(res => res.json())
    .then(jobs => dispatch(getJob(job)))
    .catch(error => console.log(error))
  }
}