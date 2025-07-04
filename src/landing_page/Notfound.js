import React from 'react';
import { Link } from 'react-router-dom';
function Notfound() {
    return ( 
        
        <div className='cotainer p-5'>
            <div className='row text-center '>
                <h1 className='mt-5'>404 Oops! Page not found.</h1>
                <p>We couldn’t find the page you were looking for. Visit Zerodha’s <Link to={"/"} >home page</Link></p>
               
            </div>

        </div>
     );
}

export default  Notfound;