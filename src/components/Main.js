import React from 'react';
import tableImg from '../images/restaurant.jpg'

const Main = () => {
    return (
        <>
            <div className='reserve'>
                <div className='reserveContainer1'>
                    <div className='container'>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Things about little lemon</p>
                        <button>Reserve</button>
                    </div>
                </div>
                <div className='reserveContainer2'>
                    <div className='container'>
                        <img src={tableImg} alt='table-image'/>
                    </div>
                </div>
            </div>
            <div className='specials'>
                <div className='specialsHeader'>
                    <div className='s1'>
                        <h1>Specials</h1>
                    </div>
                    <div className='s2'>
                        <button className='menuButton'>Online Menu</button>
                    </div>
                </div>
                <div className="card1">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" />
                    <div className="cardContainer">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div> */}
                </div>
                <div className="card2">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" />
                    <div className="cardContainer">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div> */}
                </div>
                <div className="card3">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" />
                    <div className="cardContainer">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div> */}
                </div>
            </div>
            <div className='reviews'>
                <div className='review1'>

                </div>
                <div className='review2'>

                </div>
                <div className='review3'>

                </div>
                <div className='review4'>

                </div>
            </div>
            <div className='about'>
                <div className='aboutContainer1'>

                </div>
                <div className='aboutContainer2'>

                </div>
            </div>
        </>
    )
}

export default Main;