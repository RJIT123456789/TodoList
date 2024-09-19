import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewUser() {

  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7000/api/getTenderById/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);

  console.log(user);

  return (
    <>
      <div style={{ backgroundColor: '#343a40', minHeight: '100vh', paddingTop: '50px' }}>
        <div className="container p-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>
          <h2 className="text-center mb-4" style={{ color: '#343a40' }}>User List</h2>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewUser;


{/* <div className="container mt-5" style={{ width: "40%" }}>
        <h2 className="bg-info text-center">Display Data</h2>
        <table className="table text-center">
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
           <tr>
             
            <td>{user.name}</td>
            <td>{user.email}</td>
           </tr>
          </tbody>
        </table>
</div> */}