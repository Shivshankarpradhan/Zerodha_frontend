import React from 'react';

function Pricing() {
    return (
        <div className='container  p-5 '>
    <div className='row p-5'>
      <div className='col-6 '>
        <h1 >Unbeatable pricing</h1>
        <p className='fs-6 mt-4'>We pioneered the concept of discount broking and price<br></br>
           transparency in India. Flat fees and no hidden charges.</p>
           <a href='' style={{textDecoration:"none"}}>See pricing  <i class="fa-solid fa-arrow-right"></i> </a>
      </div>
      <div className='col-6'>
         <div className='row ' style={{width:"90%", marginRight:"10%"}}>
          <div className='col-4'>
            <img src='models/images/pricing0.svg'/>
            <p>Free account opening</p>
          </div>
          <div className='col-4'>
            <img src='models/images/pricingEquity.svg'/>
            <p>Free equity delivery and direct mutual funds</p>
          </div>
          <div className='col-4'>
            <img src='models/images/intradayTrades.svg'/>
            <p>Intraday and F&O</p>
          </div>
         </div>
      </div>
    </div>

        </div>
      );
}

export default Pricing;