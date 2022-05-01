import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto '>
            <h1>Add your service here!</h1>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className=' p-1 m-1' {...register("name", { required: true })} />
                <textarea placeholder='Description' className=' p-1 m-1' {...register("description", { required: true })} />
                <input placeholder='Price' className=' p-1 m-1' type="number" {...register("price", { required: true })} />
                <input placeholder='Photo-URL' className=' p-1 m-1' type="text" {...register("img", { required: true })} />
                <input className=' p-1 m-1' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;