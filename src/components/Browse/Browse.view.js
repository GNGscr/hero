import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../List';
import Filter from '../Filter';
import Profile from '../Profile';

import { fetchMovies, update_list_state, update_profile } from './Browse.actions' 


class Browse extends Component {

    componentDidMount() {
        if(this.props.original_list.length === 0) {
            this.props.doFetchMovies()
        }
    }
    render() {
        const { 
            original_list,
            displayed_list,
            doUpdateList
           } = this.props

// console.log(user_list)

console.log('original_list: ', displayed_list)
        return (
        <div className="app">
            <div className="navbar">
            <div className="filterHdr">
                    {displayed_list.length} Movies Displayed
                    </div>
                <div>
                    {/* <h4 className="filter_title">{displayed_list.length} items filtered</h4> */}
                    <Filter className="filter" list_data={original_list} on_filter={doUpdateList}/>
                </div>
     </div>
  
            <div className="content-box">
                {/* <Profile {...profile_data}/> */}
                <List
                 list_data={displayed_list}
                    // pick={(movie)=> doUpdateProfile(movie)}
                    />
            </div>
        </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { 
        original_list,
        displayed_list,
        profile_data,
        isLoading,
        errorMsg
    }  = state.browse;

    return {
        original_list,
        displayed_list,
        profile_data,
        isLoading,
        errorMsg
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doFetchMovies: ()=> dispatch( fetchMovies() ),
        doUpdateList: (filtered)=> dispatch( update_list_state(filtered) ),
        doUpdateProfile: (movie)=> dispatch( update_profile(movie) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);