import React, { Component } from 'react';
// import Thumb from './Thumb';


export default ( {id,title,details,description,poster} ) => {
//	console.log('first_name:',first_name)
//	console.log('props:',props)
    return (
<div className="box">
    <div className="movieSummary">
        <p>Title: {title}</p>
        <p>id: {id}</p>
        <p>details: {details}</p>
        <p>description: {description}</p>
    </div>
    {/* <button type="button" onClick={this.showModal}>
        Add..
    </button> */}
    <div className="posterMask"></div>
    <img className="poster" src={poster} alt="" />
</div>
    )
}

// {/* <div className="posterMask"></div>
// <img className="poster" src={Poster} alt="" />
// </div> */}