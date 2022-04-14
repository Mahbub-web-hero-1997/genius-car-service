import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className='mt-5 pt-5'>
            <h2 className='services_Title'> This is Services {services.length}</h2>
            <div className="services_Container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;