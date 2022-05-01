import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])



    return (
        <div className='service_Detail_Container'>
            <div className='service_thum'>
                <img src={service.img} alt="" />
            </div>
            <div className='service_Title'>
                <h3>{service.name} </h3>
                <h5>Price : ${service.price}</h5>
                <p>{service.description}</p>
                <div className=''>
                    <Link to={`/checkOut/${serviceId} `}>

                        <button className='btn btn-primary'>CheckOut</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetail;