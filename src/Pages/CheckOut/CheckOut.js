import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState(serviceId);
    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    if (loading) {
        <p>Loading....</p>
    }

    const handlePlaceOrder = event => {
        event.preventDefault()

        const order = {
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.number.value,

        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    console.log(data);

                }
            })
        event.target.reset()

    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Plese Order :{service.name}</h2>
            <form onSubmit={handlePlaceOrder} className='d-flex flex-column' action="">
                <input className='m-2 p-2 fs-6' type="text" name="name" id="" placeholder='Name' required value={user?.displayName} disabled />
                <input className='m-2 p-2 fs-6' type="email" name="email" id="" value={user?.email} disabled />
                <input className='m-2 p-2 fs-6' autoComplete='off' type="text" name="service" value={service.name} id="" required readOnly disabled placeholder='Service Type' />
                <input className='m-2 p-2 fs-6' autoComplete='off' type="text" name="address" id="" required placeholder='Address' />
                <input className='m-2 p-2 fs-6' autoComplete='off' type="number" name="number" id="" required placeholder='Phone' />
                <input className='m-2 p-2 fs-6 bg-primary border-0 rounded-1 text-white fw-bold ' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default CheckOut;