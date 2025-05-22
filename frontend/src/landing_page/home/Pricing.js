import React from 'react';

function Pricing() {
    return ( 
        <div className='cointainer p-3'>
            <div className='row p-5'>
                <div className='col-4 px-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='dd' style={{textDecoration: "none"}}>See pricing <i class='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 px-5'>
                    <div className='row'>
                        <div className='col border p-3 text-center'>
                            <img src='media\images\pricing0.svg'/>
                            <p>Free account<br /> opening</p>
                        </div>
                        <div className='col border p-3 text-center'>
                            <img src='media\images\pricing0.svg'/>
                            <p>Free equity delivery and<br /> direct mutual funds</p>                                
                        
                        </div>
                        <div className='col border p-3 text-center'>
                            <img src='media\images\other-trades.svg'/>
                            <p>Intraday and<br /> F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;