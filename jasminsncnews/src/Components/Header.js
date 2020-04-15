import React from 'react';


const Header = (props) => {
    return (
        <div>
            <h1>NCNews</h1>
           <p>Welcome back {props.loggedInUser}</p>
            
        </div>
    );
};

export default Header;