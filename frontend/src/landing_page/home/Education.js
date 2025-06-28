import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row p-2'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"80%"}} alt="" />
                    
                </div>
                <div className='col-6 p-3'>
                    <h2 className='fs-2'>Free and open market education</h2>
                    <br></br>
                    <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className='mb-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>                
            </div>
        </div>
     );
}

export default Education;