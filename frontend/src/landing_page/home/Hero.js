import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Img' className='mb-5'/>
                <h1 className='mb-3'>Invest in everything</h1>
                <p className='mb-5'> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;