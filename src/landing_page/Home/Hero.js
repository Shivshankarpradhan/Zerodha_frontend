import React from 'react';

function Hero() {
    return ( 
        <div className='cotainer p-5'>
            <div className='row text-center ' >
                <img src='models/images/homeHero.png' alt='Hero_image' className='mb-5' style={{width:"60%", marginLeft:"20%"}}/>
                <div  style={{fontSize:"25px", color:"sliver"}}>
                    <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more.</p>
                <button className='btn btn-primary p-2 fs-5 mb-5' style={{width:"15%", margin:"0 auto"}}>Signup now</button>

                </div>
                
            </div>

        </div>
     );
}

export default Hero;