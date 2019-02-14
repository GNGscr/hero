import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
    <ul className="link-bar">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/create" className="nav-link">Create</Link></li>
    </ul>
)