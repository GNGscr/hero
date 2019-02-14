import React, { Component } from 'react';
// import Thumb from './Thumb';


export default ( {id,Title,Year,Runtime,Genre,Director,Poster} ) => {
//	console.log('first_name:',first_name)
//	console.log('props:',props)
    return (
<div className="box">
    <div className="movieSummary">
        <p>Title: {Title}</p>
        <p>id: {id}</p>
        <p>Year: {Year}</p>
        <p>Runtime: {Runtime}</p>
        <p>Genre: {Genre}</p>
        <p>Director: {Director}</p>
    </div>
    {/* <button type="button" onClick={this.showModal}>
        Add..
    </button> */}
    <div className="posterMask"></div>
    <img className="poster" src={Poster} alt="" />
</div>
    )
}

// {/* <div className="posterMask"></div>
// <img className="poster" src={Poster} alt="" />
// </div> */}