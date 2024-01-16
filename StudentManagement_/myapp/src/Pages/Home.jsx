import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:8085/users");
        setUsers(result.data);
        console.log(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:8085/user/${id}`);
        loadUser();
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className="flex-row justify-content-around">
                                            <Link to={`/viewUser/${user.id}`} className="btn btn-primary btn-sm mx-2">View</Link>
                                            <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary btn-sm mx-2">Edit</Link>
                                            <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
