// import fetch from 'isomorphic-fetch';

export const UPDATE_LIST = "update_list_state";
export const UPDATE_PROFILE = "update_profile";

// export const err = "err"


export const update_list_state = (filtered_list) => ({
    type: UPDATE_LIST,
    payload: filtered_list
})

export const update_profile = (movie) => ({
    type: UPDATE_PROFILE,
    payload: movie
})

export const MOVIES_FETCHED = "MOVIES_FETCHED";
export const MOVIES_FETCH_FAILED = "MOVIES_FETCH_FAILED";
export const FETCHING_MOVIES = "FETCHING_MOVIES";


export const fetchMovies = () => {
    
    const movies = [
        'bohemian+rhapsody',
        'bird+box',
        'searching',
        'First+man',
        'glass',
        'memento',
        'the+mexican',
        'the+matrix'
      ];
	return function (dispatch) {

		dispatch({ type: FETCHING_MOVIES })
        return Promise.all(movies.map(movie =>
            fetch(`http://www.omdbapi.com/?t=${movie}&apikey=becf9c0c`)
            .then(response => response.json())
          )
        )
        .then( data => dispatch ({
            type: MOVIES_FETCHED,
            payload: data
            
        }))
        .catch( error => dispatch ({
            type: MOVIES_FETCH_FAILED,
            payload: error.message
        }))
        }
    }