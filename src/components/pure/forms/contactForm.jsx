import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ContactFormat } from '../../../models/contactModel'
import { dateFormat } from '../../../models/contactModel'


const ContactForm = ({ add }) => {

    const userRef = useRef('');
    const passRef = useRef('');
    const connStatusRef = useRef('');

    /* 
    *   Contact creation: uses useRef values from inputs in HTML form -> instance of ContactFormat amd run add function 
    */
    function addContact(e) {
        e.preventDefault();
        const connStatus = connStatusRef.current.value ==='Connected';
        const newContactData = new ContactFormat(
            userRef.current.value,
            passRef.current.value,
            (new Date()).toLocaleTimeString('es-AR', dateFormat),
            connStatus
        );
        add(newContactData);
    }

    /* 
    *   Contact Form Inputs (React Func Component) -> HTML
    */
    return (
        <div className='p-0'>
            <form
                onSubmit={addContact}
                className='d-flex justify-content-center align-items-center mb-4'
            >
                <div className='form-outline flex-fill p-0'>
                    <input
                        ref={userRef}
                        id='userInput'
                        type='text'
                        className='form-control form-control-lg m-2'
                        required
                        autoFocus
                        placeholder='user name'
                    />

                    <input
                        ref={passRef}
                        id='passInput'
                        type='password'
                        className='form-control form-control-lg m-2'
                        required
                        placeholder='password'
                    />

                    <label htmlFor='connStatus' className='sr-only'>Status</label>
                    <select
                        className='form-control form-control-lg m-2'
                        ref={connStatusRef}
                        defaultValue='Disconnected'
                        id='connStatus'
                    >
                        <option value='Connected'>
                            Connected
                        </option>
                        <option value='Disconnected'>
                            Disconnected
                        </option>
                    </select>

                    <button
                        type='submit'
                        className='btn btn-success btn-lg m-3'
                    >
                        New User
                        {/* {length > 0 ? 'Add New Task' : 'Create your First Task'} */}
                    </button>

                </div>
            </form>
        </div>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
