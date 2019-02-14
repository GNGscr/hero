
export const CREATE_MOVIE = 'create_movie';

export const create_movie = (movie_data) => ({
        type: CREATE_MOVIE,
        payload: movie_data
})