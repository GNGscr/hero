import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Card from './Card'; 
import TopBar from './TopBar'; 
import List from './List'; 
import Filter from './Filter'; 
import Profile from './Profile'; 


class Browse extends Component {
        constructor(props){
            super(props);
            this.state = {
                original_list:[],
                displayed_list:[],
                profile_data: {}
            }
        }
        componentDidMount(){
            fetch('/static/data/MOCK_DATA.json')
                .then( response => {
                    if(response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then( data => {
                    //console.table(data);
                    console.log(`${data.length} items loaded`);
                    this.setState({
                        original_list:data,
                        displayed_list: data,
                        profile_data: data[0]
                    });
                })
                .catch( error => {
                    console.error(`fetch operation failed: ${error.message}`);
                });
        }
        update_list_state(filtered_list){
            console.log('update_list_state',filtered_list.length)
            this.setState({
                displayed_list: filtered_list
            })
        }
        update_profile(item){
            console.log('update_profile',item)
            this.setState({
                profile_data: item
            })
        }
        render() {
            return (
            <div className="app">
                <div className="header">
                    <h1 className="headline">Browse our bots</h1>
                    <div className="filter-box">
                        <h4 className="filter_title">{this.state.displayed_list.length} items filtered</h4>
                        <Filter className="filter" list_data={this.state.original_list} on_filter={(fl)=>this.update_list_state(fl)}/>
                    </div>
                </div>
                <div className="content-box">
                    <Profile {...this.state.profile_data}/>
                    <List list_data={this.state.displayed_list}
                        pick={(item)=> this.update_profile(item)}/>
                </div>
            </div>
            )
        }
}

export default Browse;
