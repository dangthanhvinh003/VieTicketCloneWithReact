import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChangeProfile() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        email: '',
        username: '',
        role: 'u',
        avatar: ''
    });
    const [avatarUrl, setAvatarUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${id}`);
                setFormData(response.data);
                setAvatarUrl(response.data.avatar); // Set initial avatar URL
            } catch (error) {
                console.error('Error fetching user data:', error);
                setErrorMessage('Failed to fetch user data. Please check your network connection or try again later.');
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/users/${id}`, formData);
            alert('Profile updated successfully.');
            navigate(`/users/${id}`);
        } catch (error) {
            console.error('Error updating profile:', error);
            setErrorMessage('An error occurred during updating the profile.');
        }
    };

    const handleAvatarSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/users/${id}`, { ...formData, avatar: avatarUrl });
            alert('Avatar updated successfully.');
            setFormData({ ...formData, avatar: avatarUrl }); // Update local form data
            navigate(`/users/${id}`);
        } catch (error) {
            console.error('Error updating avatar:', error);
            setErrorMessage('An error occurred during updating the avatar.');
        }
    };

    const handleAvatarChange = (e) => {
        setAvatarUrl(e.target.value);
    };

    return (
        <div className="container mt-5" style={{color : 'white'}}>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button onClick={() => navigate('/')} className="btn btn-outline-secondary">
                            <i className="fas fa-arrow-left"></i> Back to Home
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name:</label>
                            <input name="name" className="form-control" id="name" type="text" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address:</label>
                            <input name="email" className="form-control" type="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                            <input name="dateOfBirth" className="form-control" type="date" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Role:</label>
                            <select className="form-control" name="role" value={formData.role} onChange={handleChange} required>
                                <option value="u">User</option>
                                <option value="o">Organizer</option>
                            </select>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-secondary" type="reset">Reset</button>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <h2>Upload Avatar</h2>
                    <div className="mt-3">
                        {avatarUrl && (
                            <img
                                className="avatar img-fluid"
                                src={avatarUrl}
                                alt="Avatar"
                                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
                            />
                        )}
                    </div>
                    <form onSubmit={handleAvatarSubmit}>
                        <div className="mb-3">
                            <label htmlFor="avatarUrl" className="form-label">Avatar URL:</label>
                            <input name="avatarUrl" className="form-control" id="avatarUrl" type="text" value={avatarUrl} onChange={handleAvatarChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Update Avatar</button>
                    </form>
                   
                </div>
            </div>
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        </div>
    );
}

export default ChangeProfile;
