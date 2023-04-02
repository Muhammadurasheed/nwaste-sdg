import React from 'react';
import FormInput from '../formInput/Forminput.component';
import './Signin.scss';
import CustomButton from '../custombutton/CustomButton.component';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
import { toast } from 'react-toastify';
import Logo from '../../assets/logo1.png';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async event =>{
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            if( auth.signInWithEmailAndPassword){
                return toast.success('Signin Successful')
            }
        } catch(error){
            if(error){
                return toast.error('Password or Email is Incorrect');
            }
        }
    };

    handleChange = event =>{
      const { value, name } = event.target;
      this.setState({ [name]: value });
    }

    render(){
        return(
        <div className='bg-holder'>
        <div className='sign-in'>
        <div className='login-in-bg'>
            <div className='sign-in-header'>
              <Link to="/">
                <img className='sign-logo' title='Go to home page' alt='logo' src={Logo} style={{height: '55px', width: '55px'}} /> 
              </Link>
                <h4 className='header-4'>Already a Nwaste Member?</h4>
                <span className='span'>Sign in with your email and password</span>
            </div>
            <form className='form-input' onSubmit={this.handleSubmit}  >
                <FormInput name='email' 
                type='email'
                value={this.state.email}
                handleChange={this.handleChange}
                label='email'
                required />
                <FormInput name='password' 
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required />

           <div className='btn-and-link'>
                <div className='sign-in-btns'>
                    <div >
                    <CustomButton
                        className='custom-btn'
                        type='submit'> sign in 
                    </CustomButton>
                    </div>
                    <GoogleButton 
                    className='google-btn'
                    style={{background: '#0F9D58'}}
                    onClick={signInWithGoogle}>Sign in with google</GoogleButton>
                </div>
            </div>
            </form>
            
            <div className='signup-and-link'>
            <p style={{color: '#0F9D58', textAlign: 'center'}}>Don't Have An Account?
                <Link to='/signup'>
                    <button className='sign-up-btn'>Sign up</button>
                </Link>
            </p> 
            </div>
            <Link className="forgot-pass"
                to='/forgotpassword' >Forgot Password?
            </Link>
     </div>
     </div>
     </div>
        );
    }
}

export default SignIn;