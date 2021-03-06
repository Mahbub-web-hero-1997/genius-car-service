import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import Typist from 'react-typist';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://thawing-stream-59489.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className='mt-5 pt-5'>


            <Typist>
                <h2 className='services_Title'> This is Services</h2>


            </Typist>


            <div className="services_Container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;