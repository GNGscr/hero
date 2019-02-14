import { combineReducers } from 'redux'
import browseReducer from '../components/Browse/Browse.reducer';



// import dataCruncherReducer from '../components/DataCruncher/DataCruncher.reducer'


const rootReducer = combineReducers({
    
    browse : browseReducer
    // create : {}
})

export default rootReducer