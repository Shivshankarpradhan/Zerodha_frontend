import React from 'react';

function Stats() {
    return ( 
        <div className='continer p-3'>
            <div className='row p-5'>
                <div className='col-6 ' style={{width:"34%", marginLeft:"10%" , color:"#323531"}}> 
                    <h2 className='mb-4'>Trust with confidence</h2>
                    <br></br>
                    <h3 className='fs-5'>Customer-first always</h3>
                    <p >That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br></br>
                     lakh crores of equity investments and contribute to 15% <br></br>
                     of daily retail exchange volumes in India.</p>

                    <h3 className='fs-5'>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push<br></br>
                         notifications. High quality apps that you use at your<br></br>
                          pace, the way you like. Our philosophies.</p>

                    <h3 className='fs-5'>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments<br></br>
                         in 30+ fintech startups offer you tailored services <br></br>
                         specific to your needs.</p>

                    <h3  className='fs-5'>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just<br></br>
                         facilitate transactions, but actively help you do better <br></br>
                         with your money.</p>
                </div>
           
                <div  className='col-6 '>
                    <img src='models/images/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center '>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href=''className='mx-5' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                     </div>
                 </div>
        </div>
     );
}

export default Stats;