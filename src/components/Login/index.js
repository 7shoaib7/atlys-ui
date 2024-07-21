import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import { getUser, isLoggedIn, login } from '../../services/auth';
import { ROUTES } from '../../constants/routes';
import Button from '../../components/base/Button/index'
import Input from '../../components/base/Input/index'
import { useLogin } from '../../context/LoginContext';


const Login = () => {
  const { showLogin, setShowLogin, setCurrentUser,setShowModal,showModal } = useLogin();
  const navigate = useNavigate();


  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Make API call to login user
    if (formInput.email === '' || formInput.password === '') {
      return;
    }

    const user = {
      email: formInput.email,
      avatar: 'https://randomuser.me/api/portraits/med/men/96.jpg',
      username: 'Jane Doe',
      id: 3,
      token: 'randomtoken'
    };

    if (login()) {
      const userData = getUser()
      if (userData.email === formInput.email || userData.username === formInput.username) {
        setShowModal(false)
        setCurrentUser(userData)
        navigate(ROUTES.BLOG);
      }
      else {
        alert("Please verify your credentials")
        return
      }
    }
    else {
      alert("Username or Email doesn't exist register an account")
      return
    }
  };

  const handleRegister = () => {
    if (!isLoggedIn() && showModal ) {
      setShowLogin(!showLogin)
    }
    else {
      navigate(ROUTES.SIGNUP)
    }
  }

  return (
    <div className='login'>
      <p className='login__header'>WELCOME BACK</p>
      <h1 className='login__title'>Log into your account</h1>
      <form className='login__form'>
        <Input
          name='email'
          type='text'
          label='Email or Username'
          placeholder='Enter your email or username'
          onChange={onChange}
          value={formInput.email}
        />
        <Input
          name='password'
          label='Password'
          placeholder='Enter your password'
          onChange={onChange}
          value={formInput.password}
          password={true}
          passwordForgot={true}
        />
        <div className='login__action'>
          <Button
            text='Login now'
            variant='primary'
            size='large'
            type='submit'
            onClick={onSubmit}
          />
        </div>
        <div className='login__footer'>
          <span>Not registered yet?</span>

          {/* <Link
            className='login__footer__action'
            to={ROUTES.SIGNUP}
          >
            Register →
          </Link> */}
          <apan
            className='login__footer__action'
            onClick={handleRegister}
          >
            Register →
          </apan>
        </div>
      </form>
    </div>
  );
};

export default Login;
