import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img, _id } = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h4>Price : {price}</h4>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(_id)} className=' btn-primary'>Book : {name}</button>
        </div>
    );
};

export default Service;