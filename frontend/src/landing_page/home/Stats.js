import React from 'react';
function Stats() {
    return ( 
        <div className='container mb-5'>
            <div className='row p-2'>
                <div className='col-6 p-3'>
                    <h2 className='fs-2'>Trust with confidence</h2>
                    <br></br>
                    <br></br>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='mb-4 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="demat" style={{textDecoration:"none"}}>Our philosophies</a>.</p>
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='mb-4 text-muted'>With initiatives like <a href="demat" style={{textDecoration:"none"}}>Nudge</a> and <a href="demat" style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width:"100%"}} alt="" />
                    <div className='text-center'>
                        <a href="demat" className='mx-4' style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="demat" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='p-4 mx-5 row text-center'>
                <a href="demat"> <img src='media/images/pressLogos.png' alt="" /></a>
            </div>
        </div>
     );
}

export default Stats;