import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <CardGroup className='w-lg-100 col-12 col-md-6 col-lg-4'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>

                <button className='btn btn-primary w-100 py-2 fs-5 fw-normal border-0'>Hire Now</button>

            </Card>
        </CardGroup>
    );
};

export default Expert;