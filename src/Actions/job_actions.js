const API_URL = 'http://localhost:3001/api/v1'

export const fetchJobs = () => {
  const request = new Request(`${API_URL}/jobs`, {
    method: "GET",
    headers: new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json"
      // 'Authorization': `Bearer ${sessionStorage.jwt}`
    }),
     
  })
  return dispatch => {
    return fetch(request)
          .then(res => res.json())
          .then(jobs => dispatch({
            type: 'GET_JOBS',
            payload: jobs
          }))
          .catch(error => console.log(error))
  }
}