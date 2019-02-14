import React, { Component } from 'react';
import { connect } from 'react-redux';

// import css from '../static/css/globals.css';
import { create_movie } from './Create.actions';

class Create extends Component {

  state = {
    id: 0,
    Title: '',
    Year: '',
    Runtime: '',
    Genre: '',
    Director: '',
    // Poster: ''
  }

  updeate_form_state = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  on_form_submit = event => {

      const movie_data = {
        ...this.state,
        id : this.props.new_movie_id
      }
      event.preventDefault()

    this.props.doCreateMovie(movie_data)
  }

  render() {

    return (
        <div>
        <form className="profile-details-box">
         
         <label className="filter_title"><strong>ADD A MOVIE..</strong></label>
         <br />

         <label className="filter_title">Title:</label>
         <input className="filter" placeholder={this.state.Title} onChange={this.updeate_form_state} type="text" name="title"/>

         <label className="filter_title">Year:</label>
         <input className="filter" placeholder={this.state.Year} onChange={this.updeate_form_state} type="text" name="year"/>

         <label className="filter_title">Runtime:</label>
         <input className="filter" placeholder={this.state.Runtime} onChange={this.updeate_form_state} type="text" name="runtime"/>

         <label className="filter_title">Genre:</label>
         <input className="filter" placeholder={this.state.Genre} onChange={this.updeate_form_state} type="text" name="genre"/>
         
         <label className="filter_title">Director:</label>
         <input className="filter" placeholder={this.state.Director} onChange={this.updeate_form_state} type="text" name="director"/>

         <button className="submit" onClick={this.on_form_submit}>SUBMIT</button>
     </form>
    </div>

    )
  }
}


function mapStateToProps(state, ownProps) {
  const { 
    original_list
  }  = state.browse;

  return {
      new_movie_id: original_list.length + 1
  }
}

function mapDispatchToProps(dispatch) {
  return {
      // doFetchUsers: ()=> dispatch( fetchUsers() ),
      // doUpdateList: (filtered)=> dispatch( update_list_state(filtered) ),
      // doUpdateProfile: (user)=> dispatch( update_profile(user) )
      doCreateMovie: (movie_data) => dispatch( create_movie(movie_data) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)


// id, first_name, last_name, email, country, description, avatar
