import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setOrders(data))


        // const getOrders = async () => {
        //     const url = `http://localhost:5000/order`;
        //     console.log(url);
        //     const { data } = await axios.get(url)
        //     setOrders(data)

        // }
        // getOrders()

    }, [])
    return (
        <div>
            <h1>This is orders : {orders.length}</h1>
        </div>
    );
};

export default Orders;