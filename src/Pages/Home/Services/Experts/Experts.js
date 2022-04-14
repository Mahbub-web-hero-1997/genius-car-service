import React from 'react';
import experts1 from '../../../../images/experts/expert-1.jpg'
import experts2 from '../../../../images/experts/expert-2.jpg'
import experts3 from '../../../../images/experts/expert-3.jpg'
import experts4 from '../../../../images/experts/expert-4.jpg'
import experts5 from '../../../../images/experts/expert-5.jpg'
import experts6 from '../../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Md. Mahbub', img: experts1 },
        { id: 2, name: 'Md. Rayhan', img: experts2 },
        { id: 3, name: 'Md. Tanvir', img: experts3 },
        { id: 4, name: 'Md. Rakib', img: experts4 },
        { id: 5, name: 'Md. Shumon', img: experts5 },
        { id: 6, name: 'Md. Shakil', img: experts6 },
    ]
    return (
        <div className='p-4'>
            <h2 className='text-primary text-center mt-4'>Our Experts</h2>

            <div className="row g-3">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;