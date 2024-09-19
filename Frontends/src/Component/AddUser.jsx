import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function AddUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const submitdata = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const data = await axios.post('http://localhost:7000/api/Tender_insert', {
                name, email
            })
            // toast.success
            setName('')
            setEmail('')
            navigate('/')
        } catch (error) {
            // toast.error(error.response.data.message)
            console.log(error)
        }
        // console.log(name, email);
        // try {
        //     // const {data} = await axios.post('your_api_endpoint', {name, email});
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    }

    return (
        <>
            <div style={{ backgroundColor: 'rgb(59, 98, 80)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='container mt-5 p-4 rounded' style={{ width: "40%", backgroundColor: '#f8f9fa' }}>
                    <h2 className='text-center bg-info p-2 rounded text-white'>Add User</h2>
                    <form onSubmit={submitdata}>
                        <div className='mb-3'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='form-control'
                                id="name"
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control'
                                id="email"
                            />
                        </div>
                        <button type='submit' className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddUser;
