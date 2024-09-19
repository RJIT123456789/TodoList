import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:7000/api/getTenderById/${id}`)
            .then((response) => {
                console.log(response);
                setname(response.data.name);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    const UpdateData = async (e) => {
        e.preventDefault();
        // console.log(name, email)
        try {
            const { data } = await axios.post(`http://localhost:7000/api/updateTender/${id}`, { name, email });
            // console.log(data);
            setname('');
            setEmail('');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div style={{ backgroundColor: 'rgb(59, 98, 80)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='container mt-5 p-4 rounded' style={{ width: "40%", backgroundColor: '#f8f9fa' }}>
                    <h2 className='text-center bg-info p-2 rounded text-white'>Update user</h2>
                    <form onSubmit={UpdateData}>

                        <div className='mb-3'>
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                type="text"
                                className='form-control'
                                id="name"
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className='form-control'
                                id="email"
                            />
                        </div>
                        <button type='submit' className='btn btn-primary w-100'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update
