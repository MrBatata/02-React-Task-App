import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ContactFormat } from '../../models/contactModel'

/* 
*   Individual Contact - React Func Component 
*/
function ContactComponent({ contact, logInOut, removeContact }) {
    /* 
    *   Función hook para evaluar el ciclo de vida del componente 
    */
    useEffect(() => {
        console.log('Created contact.');

        // return () => {
        //     console.log(`Contact is going to unmount`)
        // };
    }, [contact]);
    /* 
    *   Contact Status: functions to change icon and status, upon isConnected. 
    */
    function connStatusIcon() {
        if (contact.isConnected) {
            return (
                <i
                    className="bi bi-person-check fs-3"
                    style={{ color: 'green' }}
                ></i>
            )
        } else {
            return (
                <i
                    className="bi bi-person-fill-slash fs-3"
                    style={{ color: 'grey' }}
                ></i>
            )
        }
    }

    function logInOutIcon() {
        if (contact.isConnected) {
            return (
                <div
                    className='col-6 m-0 d-flex align-items-center justify-content-end gap-2'
                    onClick={() => (logInOut(contact))}
                >
                    <span className=''>Logout</span>
                    <i
                        className="bi bi-box-arrow-left fs-3"
                        style={{ color: 'grey' }}


                    ></i>
                </div>
            )
        } else {
            return (
                <div
                    className='col-6 m-0 d-flex align-items-center justify-content-end gap-2'
                    onClick={() => (logInOut(contact))}
                >
                    <span className=''>Login</span>
                    <i
                        className="bi bi-box-arrow-in-right fs-3"
                        style={{ color: 'green' }}
                    ></i>
                </div>
            )
        }
    }

    /* 
    *   Contact Card (React Func Component) -> HTML
    */
    return (
        <div className='row flex-nowrap m-2 px-4 py-0 bg-white rounded border shadow' style={{}}>

            {/* Contact Status: red or green depending on connection status */}
            <div className='col-1 m-1 d-flex align-items-center'>
                {connStatusIcon()}
            </div>

            {/* Contact Name: to be set on creation */}
            <div className='col-2 m-1 d-flex align-items-center'>
                <span>{contact.user}</span>
            </div>

            {/* Connection Date */}
            <div className='col-6 m-1 d-flex align-items-center'>
                <span>Connection: {contact.connDate}</span>
            </div>

            {/* Connect/Disconect Name: toogle */}
            <div className='col-2 m-1 d-flex align-items-center' style={{ cursor: 'pointer' }}>
                {logInOutIcon()}
            </div>

            {/* Remove Contact */}
            <div className='col-1 m-1 d-flex align-items-center'>
                <i
                    className="bi bi-person-dash-fill fs-3"
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => (removeContact(contact))}
                >
                </i>
            </div>

        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(ContactFormat).isRequired,
    logInOut: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired,
}

export default ContactComponent
