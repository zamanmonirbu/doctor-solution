import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="card d-flex">
                            <div className="card-body">

                                <h1>{service.title}</h1>
                                <p>{service.description}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;