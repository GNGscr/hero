import React from 'react';
import color_names from './color-names';

export default ({id,title,details,description,poster})=> {
        
        // avatar = avatar.replace(/80x80/,'300x300')
        
		return (
                    <div className="profile-box">
                        <div className="profile-image-box " >
                                <img src={poster} />
                        </div>
                        <div className="profile-details-box">
                            <h2 className="profile-title">{title}</h2>
                            <h5 className="profile-detail mt20">id: {id}</h5>
                            <h5 className="profile-detail">Details: {details}</h5>
                            <p className="profile-description mt20">{description}</p>
                        </div>
                    </div>
                )	
}

//random background color...
//let keys = Object.keys(color_names);
//let random_color = keys[ Math.floor( Math.random() * keys.length ) ]
// style={{background:random_color}}