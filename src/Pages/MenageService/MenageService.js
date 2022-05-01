import React, { useEffect, useState } from 'react';

const MenageService = (id) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/service`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const deleteService = id => {

        const proceed = window.confirm('Are you sure to delete this service?')
        if (proceed) {

        }
    }


    return (
        <div>
            <h1>Menage Your Service</h1>
            {
                services.map(service => <div>
                    <h3>{service.name}<button onClick={() => deleteService(id)}>X</button></h3>
                </div>)
            }
        </div>
    );
};

export default MenageService;