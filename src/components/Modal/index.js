import React, { useEffect, useState } from 'react'
import "./modal.css"
import Login from '../Login';
import close from "../../assets/images/close.svg"
import Signup from '../Signup';
import { useLogin } from '../../context/LoginContext';

const Modal = () => {
    const { showLogin,setShowModal } = useLogin();

    useEffect(() => {
        // Disable scrolling when the modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        };
    });


    return (
        <div className="modal">
            <div className="modal__content">
                <div className='modal__content__close' onClick={() => setShowModal(false)}>
                    <img src={close} alt="close-icon" />
                </div>
                {showLogin ? <Login /> : <Signup />}
            </div>
        </div>
    )
}

export default Modal