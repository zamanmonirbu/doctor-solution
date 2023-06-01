import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const ServiceCenter = () => {
    const services=[
        {
        title:'Flouride Treatment        ',
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquid itaque voluptate quam, ipsam alia "
    },
        {
        title:'Cavity Filling        ',
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquid itaque voluptate quam, ipsam alia "
    },
        {
        title:'Teeth Whitening        ',
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquid itaque voluptate quam, ipsam alia "
    }
]
    return (
        <div>
             {
                services.map(service=><ServiceDetails service={service}></ServiceDetails>)
            }
        </div>
    );
};

export default ServiceCenter;