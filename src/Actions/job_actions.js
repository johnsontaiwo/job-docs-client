const API_URL = 'http://localhost:3001/api/v1'

export const getJobs = jobs => {
  return {type: "GET_JOBS",
  jobs
 }
}

export const getJob = job => {
  return {type: "GET_JOB",
  job
 }
}

export const newJob = job => {
  return {type: "ADD_JOB",
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
  const request = new Request(`${API_URL}/jobs/${id}`, {
    method: "GET",
    headers: new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }),

})

  return dispatch => {
    return fetch(request)
    .then(res => res.json())
    .then(job => dispatch(getJob(job)))
    .catch(error => console.log(error))
  }
}

export const addJob = (job) => {
  const request = new Request(`${API_URL}/jobs`, {
    method: "POST",
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': "application/json"
    }),
    body: JSON.stringify({ job })
  })

  return dispatch => {
    return fetch(request)
    .then(res => res.json())
    .then(job => dispatch(newJob(job)))
    .catch(error => console.log(error))
  }
}
