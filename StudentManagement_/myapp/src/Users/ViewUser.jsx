import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8085/user/${id}`);
            setUser(result.data);
            console.log(result.data);
        } catch (error) {
            console.error('Error loading user:', error);
            // Handle the error, e.g., redirect to an error page or display a message to the user
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center mb-4">Student details</h2>
                    <div className="card">
                        <div className="card-header">
                            Student Details:
                            <ul className="list-group list list-group-flush mt-4">
                                <li className="list-group-item">Name: {user.name}</li>
                                <li className="list-group-item">User Name: {user.username}</li>
                                <li className="list-group-item">Email: {user.email} </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary mt-4" to="/">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ViewUser;
