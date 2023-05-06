import React, { useState } from 'react'
import ContactComponent from '../pure/contact'
import { ContactFormat, dateFormat } from '../../models/contactModel'

import ContactForm from '../pure/forms/contactForm'

/*
*   Contact List - React Func Component
*/
function ContactListComponent () {
    const defaultContact1 = new ContactFormat('Admin Demo User', '1234', (new Date()).toLocaleTimeString('es-AR', dateFormat), false)
    const defaultContact2 = new ContactFormat('Public Demo User', '0000', (new Date()).toLocaleTimeString('es-AR', dateFormat), true)
    const [contactsOnList, setContacts] = useState([defaultContact1, defaultContact2])

    function logInOutFunction (contactEvaluate) {
        // console.log('LogInOut: ', e.user, e.isConnected);

        /* Identify clicked contact */
        const index = contactsOnList.indexOf(contactEvaluate)
        // console.log(index);

        /* Guardo todas las tareas del estado del componente en una variable */
        const tempContact = [...contactsOnList]
        // console.log(tempTasks)

        /* Modifico el estado de la tarea identificada, cambiando el valor por el contrario con el operador "!" */
        tempContact[index].isConnected = !(tempContact[index].isConnected)

        /* Ejecuto la función predefinida en el useState que ingresa un nuevo valor en tasks */
        setContacts(tempContact)
    }

    function removeContactFunction (contactEvaluate) {
        // console.log('Remover contacto.');
        /* Identifico la tarea clickeada */
        const index = contactsOnList.indexOf(contactEvaluate)
        // console.log(index);

        /* Guardo todas las tareas del estado del componente en una variable */
        const tempContact = [...contactsOnList]
        // console.log(tempTasks)

        /* Modifico la prop de la tarea identificada */
        tempContact.splice(index, 1)

        /* Ejecuto la función predefinida en el useState que ingresa un nuevo valor en tasks */
        setContacts(tempContact)
    }

    function addContactFunction (contactEvaluate) {
        const tempContact = [...contactsOnList]
        tempContact.push(contactEvaluate)
        setContacts(tempContact)
    }

    /*
    *   User login and status (React Func Component) -> HTML
    */
    return (
        <div className='row text-secondary m-0' style={{ width: '95vw' }}>

            <div className='col-2 gap-3'>
                <ContactForm
                    add={addContactFunction}
                >
                </ContactForm>
            </div>

            <div className='col-10 gap-3'>
                {contactsOnList.map((contactValue, index) => {
                    return (
                        <ContactComponent
                            key={index}
                            contact={contactValue}
                            logInOut={logInOutFunction}
                            removeContact={removeContactFunction}
                        >
                        </ContactComponent>
                    )
                })}
            </div>

        </div>
    )
}

export default ContactListComponent
