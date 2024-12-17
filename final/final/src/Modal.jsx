import React, { useState } from 'react';
import Buttons from './Buttons';
import "./Modal";

function Modal(props) {
    const [formData, setFormData] = useState({
        email: '',
        confirmEmail: '',
        firstName: '',
        lastName: '',
        phone: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        confirmEmail: '',
        firstName: '',
        phone: '',
    });

    const closeModal = () => {
        props.switchShow(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {
            email: '',
            confirmEmail: '',
            firstName: '',
            phone: '',
        };

        if (!formData.email) {
            newErrors.email = 'Email is required.';
        }
        if (!formData.confirmEmail || formData.confirmEmail !== formData.email) {
            newErrors.confirmEmail = 'Emails do not match.';
        }
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required.';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required.';
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div>
            {props.isModalOpen && (
                <div>
                    <div className="modal-overlay"></div>
                    <div className="modal" aria-hidden="true">
                        <div className="modal-content">
                            <form className="subscribe-form" onSubmit={handleSubmit}>
                                <h2>Subscribe us to get more information!</h2>

                                {/* Email */}
                                <label className="subscribe_label">
                                    <span>Email: <em>*required</em></span>
                                    <input
                                        id="email"
                                        name="email"
                                        className={`email ${errors.email ? 'input-error' : ''}`}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </label>

                                {/* Confirm Email */}
                                <label className="subscribe_label">
                                    <span>Confirm Email: <em>*required</em></span>
                                    <input
                                        id="confirmEmail"
                                        name="confirmEmail"
                                        className={`confirm ${errors.confirmEmail ? 'input-error' : ''}`}
                                        value={formData.confirmEmail}
                                        onChange={handleInputChange}
                                    />
                                    {errors.confirmEmail && <span className="error-text">{errors.confirmEmail}</span>}
                                </label>

                                {/* First Name */}
                                <label className="subscribe_label">
                                    <span>First name: <em>*required</em></span>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        className={`firstName ${errors.firstName ? 'input-error' : ''}`}
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                                </label>

                                {/* Last Name */}
                                <label className="subscribe_label">
                                    <span>Last name:</span>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </label>

                                {/* Phone Number */}
                                <label className="subscribe_label">
                                    <span>Phone number: <em>*required</em></span>
                                    <input
                                        id="phone"
                                        name="phone"
                                        className={`phone ${errors.phone ? 'input-error' : ''}`}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </label>

                                {/* Checkbox */}
                                <label>
                                    <input type="checkbox" name="annoy-me" id="annoy-me" defaultChecked />
                                    Do you want us to send you emails?
                                </label><br />

                                {/* Dropdown */}
                                <label>
                                    Please select your aim (required)
                                    <select name="aim" id="aim" required>
                                        <option value="" defaultValue>
                                            Please select
                                        </option>
                                        <option value="1">Adopt</option>
                                        <option value="2">Donate</option>
                                        <option value="3">Both</option>
                                        <option value="4">Just have a look</option>
                                    </select>
                                </label>

                                <div className="button-container">
                                    <Buttons type="submit" visual="button" className="subscribe-button">
                                        Subscribe
                                    </Buttons>
                                    <Buttons type="button" visual="button" onClick={closeModal} className="cancel">
                                        Cancel
                                    </Buttons>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;