import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './signUp.module.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        email: '',
        username: '',
        password: '',
        role: 'u',
        avatar: ''
    });
    const [passwordStrength, setPasswordStrength] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [lastUserId, setLastUserId] = useState(0); // State để lưu ID cuối cùng

    useEffect(() => {
        // Lấy danh sách người dùng từ db.json để xác định ID cuối cùng
        axios.get('http://localhost:5000/users')
            .then(response => {
                const users = response.data;
                if (users.length > 0) {
                    const lastUser = users[users.length - 1];
                    setLastUserId(parseInt(lastUser.id)); // Cập nhật ID cuối cùng và chuyển đổi thành số nguyên
                }
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const validatePassword = (password) => {
        const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        if (strongPassword.test(password)) {
            setPasswordStrength('Strong');
        } else if (mediumPassword.test(password)) {
            setPasswordStrength('Medium');
        } else {
            setPasswordStrength('Weak');
        }
    };

    const validateForm = () => {
        const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (!strongPassword.test(formData.password)) {
            setErrorMessage('Please input a strong password.');
            return false;
        }

        if (formData.password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const { confirmPassword, ...dataToSubmit } = formData;
            const newUserId = lastUserId + 1; // Tính toán ID mới
            try {
                const response = await axios.post('http://localhost:5000/users', { ...dataToSubmit, id: newUserId.toString() }); // Chuyển ID mới thành chuỗi để thêm vào db.json
                console.log('Form data:', response.data);
                navigate('/login');
            } catch (error) {
                console.error('There was an error!', error);
                setErrorMessage('An error occurred during sign up.');
            }
        }
    };

    return (
        <div className={styles["body"]}>
            <div className="container mt-5" style={{ backgroundColor: '#15132b', height: 'max-content' }}>
                <h2 className="mb-4">Sign Up</h2>
                {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                        <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={(e) => { handleChange(e); validatePassword(e.target.value); }} required />
                        <div className="form-text" style={{ color: '#e3e3e3' }}>Password should be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters.</div>
                        <div className="form-text" style={{ color: passwordStrength === 'Strong' ? 'green' : passwordStrength === 'Medium' ? 'orange' : 'red' }}>
                            Password strength: {passwordStrength}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role:</label>
                        <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange} required>
                            <option value="u">User</option>
                            <option value="o">Organizer</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
