import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './signup.css';
import { registerUser } from '../../services/auth';
import { ROUTES } from '../../constants/routes';
import Button from '../../components/base/Button/index'
import Input from '../../components/base/Input/index'

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate();

  
    const [formInput, setFormInput] = useState({
      email: '',
      username: '',
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
  
      if (formInput.email === '' || formInput.username === '' || formInput.password === '') {
        return;
      }
  
      const user = {
        email: formInput.email,
        avatar: 'https://randomuser.me/api/portraits/med/men/96.jpg',
        username: formInput.username,
        id: 3,
        token: 'randomtoken'
      };
  
      if(registerUser(user)) {
        navigate(ROUTES.LOGIN)
      }

    };
  
    return (
      <div className='signup'>
        <div className='signup__header'>SIGN UP</div>
        <h1 className='signup__title'>Create an account to continue</h1>
        <form className='signup__form'>
          <Input
            name='email'
            type='email'
            label='Email'
            placeholder='Enter your email'
            onChange={onChange}
            value={formInput.email}
          />
          <Input
            name='username'
            type='text'
            label='Username'
            placeholder='Choose a preferred username'
            onChange={onChange}
            value={formInput.username}
          />
          <Input
            name='password'
            label='Password'
            placeholder='Choose a strong password'
            onChange={onChange}
            value={formInput.password}
            password={true}
          />
          <div className='signup__action'>
            <Button
              text='Continue'
              variant='primary'
              size='large'
              type='submit'
              onClick={onSubmit}
            />
          </div>
          <div className='signup__footer'>
            Already have an account?
            <Link
              className='signup__footer__action'
              to={ROUTES.LOGIN}
              state={{ previousLocation: location.state?.previousLocation }}
            >
              Login →
            </Link>
          </div>
        </form>
      </div>
    );
  };
  
  export default Signup;