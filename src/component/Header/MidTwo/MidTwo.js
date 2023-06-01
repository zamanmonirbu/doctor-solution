import React from 'react';
import './MidTwo.css'
import Chair from '../../../images/chair.png'

const MidTwo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col lg-md-6 chairStyle">
                    <h1>
                        Your New Smile <br />
                        Start Here
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo inventore quisquam delectus vero maxime.</p>
                    <div className="btn" style={{backgroundColor:'#1CC7C1'}}>GET APOINMENT</div>
                </div>
                <div className="col lg-md-6">
                <img src={Chair} alt="" style={{width:'90%'}}  className="backgroundIMg"/>

                    <span className="background">

                    </span>
                </div>
            </div>
        </div>
    );
};

export default MidTwo;