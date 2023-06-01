import React from 'react';

const UnderDetails = ({info}) => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-4">
                    <div className="card d-flex">
                        <div className="card-body">
                       
                            <h3>{info.title}</h3>
                            <small>{info.details}</small>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderDetails;