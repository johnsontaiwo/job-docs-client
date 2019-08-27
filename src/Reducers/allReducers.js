import { combineReducers } from 'redux';
import jobsReducer from './jobs_reducer';


const rootReducer = combineReducers({
 jobs: jobsReducer
})
 

export default rootReducer;
