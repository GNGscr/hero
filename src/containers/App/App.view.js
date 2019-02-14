// import React from 'react';
import React, { Component } from 'react'

import {
    BrowserRouter,
    HashRouter,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux'

import TopBar from '../../components/TopBar'; 
// import Welcome from '../../components/Welcome'; 
import Browse from '../../components/Browse/Browse.view'; 
import Create from '../../components/Create/Create.view';
import Links from '../../components/Links';


class App extends Component {
    render() {
        const {
            // counter
        } = this.props;

        return (
            <div>
                <HashRouter>   
                    <div className="main-app">
                        <TopBar><Links /></TopBar>
                        <Route exact path="/" render={ ()=>  <Browse />  }/>
                        <Route path="/create" component={Create}></Route>
                    </div>
                </HashRouter>
            </div>
        )
    }
        
}



export default (App);

