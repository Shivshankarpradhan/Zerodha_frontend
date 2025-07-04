import React from 'react';

function Eduction() {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='col-6'>
                    <img src='models/images/education.svg'/>
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-4 '>Free and open market education</h1>
                    <p className='fs-5'>Varsity, the largest online stock market education book in the world<br></br>
                         covering everything from the basics to advanced trading.</p>
                         <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                         <p className='mt-4 fs-5'>TradingQ&A, the most active trading and investment community in<br></br>
                             India for all your market related queries.</p>
                             <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Eduction;