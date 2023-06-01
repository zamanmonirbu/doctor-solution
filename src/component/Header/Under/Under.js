import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faClock,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import UnderDetails from '../UnderDetails/UnderDetails';

const Person = () => {
    const homeInfo=[
        {
            title:"Open Hour",
            details:"We are open 24/7",
            logo:{faClock}
        },
        {
            title:"Visit Our Location",
            
            details:"Broklyn, NY, 10003",
            logo:{faLocationDot}
        },
        {
            title:"Call Us Now ",
            details:"+12094378609  ",
            logo:{faPhone}
        }
    ];
    return (
        <div>
            {
                homeInfo.map(info=><UnderDetails info={info}></UnderDetails>)
            }
            
        </div>
    );
};

export default Person;