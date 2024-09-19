import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DisplayUser() {
  const [data, setData] = useState([]);

  const fetchitems = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/getTender');
      setData(response.data);  // Make sure it's response.data
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:7000/api/deleteTender/${id}`); // Use DELETE method here
      setData(data.filter((item) => item._id !== id));  // Filter data correctly
      // toast.success(response.data.message);  // Uncomment if using toast
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchitems();
  }, []);

  return (
    <div style={{ backgroundColor: '#26261f', height: '100vh', width: '100%' }}>
      <Link to="/add/">
        <button
          style={{
            marginTop: '50px',
            marginLeft: '100px',
            borderRadius: '50%',
            borderColor: '#397082',
            borderStyle: 'solid',
            borderWidth: '2px',
            backgroundColor: '#397082',
            color: 'white',
            fontFamily: 'Arial',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Add data
        </button>
      </Link>

      <table className="table table-striped table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/view/${item._id}`}>
                    <button className="btn btn-primary btn-sm">View</button>
                  </Link>
                  <Link to={`/update/${item._id}`} style={{ marginLeft: '5px' }}>
                    <button className="btn btn-warning btn-sm">Edit</button>
                  </Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteItem(item._id)} style={{ marginLeft: '5px' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayUser;
