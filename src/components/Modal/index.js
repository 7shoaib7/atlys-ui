import './modal.css';
import close from "../../assets/images/close.svg";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Modal = ({ children}) => {
  const location = useLocation();
  console.log('asdsd')

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  });

  return (
    <div className='modal'>
      <div className='modal__content'>
          <div className='modal__content__close'>
            <Link to={location.state?.previousLocation || '/'}>
              <img src={close} alt="Close" />
            </Link>
          </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
