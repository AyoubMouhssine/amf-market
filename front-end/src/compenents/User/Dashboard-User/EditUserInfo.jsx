import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { axios } from '../../../lib/axios';
import useCheckAuth from '../../../lib/helpers/useCheckAuth';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import { useNavigate } from 'react-router-dom';

function EditUserInfo() {
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: ''
    });

    useCheckAuth('user');

    useEffect(() => {
        const currentUser = JSON.parse(sessionStorage.getItem('current_user')).user;
        setUser(currentUser);
        setFormData({
            email: currentUser.email,
            nom: currentUser.nom,
            prenom: currentUser.prenom,
            tel: currentUser.tel,
            adresse: currentUser.adresse
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            formData.id = user.userId
            const response = await axios.put(`/users/update`, formData, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('auth_token')}`
                }

            });
            
            if (response.status === 200 && response.statusText === 'OK') {
                alert(response.data.message)
                sessionStorage.setItem('current_user', JSON.stringify(response.data.user))
                navigate('/user/profile')
            } else {
                alert('An error occurred')
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <>
            <Header />
            <div>
                <form onSubmit={handleSubmit} className='form-userprofile'>
                    <h2 className='edit-user-infrmation'>Edit My Information</h2>

                    <label htmlFor="email" className='label-userprofile'>E-mail address:</label>
                    <input type="email" id="email" name="email" className='input-userprofile' value={formData.email} onChange={handleChange} /><br />

                    <label htmlFor="fname" className='label-userprofile'>First Name:</label>
                    <input type="text" id="fname" name="nom" className='input-userprofile' value={formData.nom} onChange={handleChange} />

                    <label htmlFor="lname" className='label-userprofile'>Last Name:</label>
                    <input type="text" id="lname" name="prenom" className='input-userprofile' value={formData.prenom} onChange={handleChange} /><br />

                    <label htmlFor="phone" className='label-userprofile'>Phone Number:</label>
                    <input type="tel" id="phone" name="tel" className='input-userprofile' value={formData.tel} onChange={handleChange} /><br />

                    <label htmlFor="address" className='label-userprofile'>Address:</label>
                    <textarea id="address" name="adresse" className='tex-userprofile' value={formData.adresse} onChange={handleChange}></textarea><br />

                    <input type="submit" value="Save" className='input-userprofile' />
                </form>
            </div>
            <Footer />
        </>
    );
}

export default EditUserInfo;






