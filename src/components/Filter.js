import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Filter extends Component {

    update_list(event) {
        console.log('update_list')
        const { list_data , on_filter } = this.props;
        let txt = event.target.value;

        let filtered_list = list_data.filter( movie =>
            movie.title.toLowerCase().includes(txt.toLowerCase()) 
        )
        on_filter(filtered_list)
    }
    render() {
        return <input placeholder="Filter Movies.." type="text" className="filter" onChange={(e) => this.update_list(e)} />
    }


// Filter.propTypes = {
//     on_filter: PropTypes.func.isRequired,
//     list_data: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         first_name: PropTypes.string.isRequired,
//         last_name: PropTypes.string.isRequired,
//         email: PropTypes.string.isRequired,
//         country: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         avatar: PropTypes.string.isRequired,
//     })).isRequired
}


