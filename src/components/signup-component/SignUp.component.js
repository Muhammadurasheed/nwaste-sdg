import React from 'react';
import FormInput from '../formInput/Forminput.component';
import CustomButton from '../custombutton/CustomButton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../assets/logo1.png';
import './SignUp.scss';


class SignUp extends React.Component {
    constructor(){
        super();
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { displayName, email, password, confirmPassword } =this.state;

        if(password !== confirmPassword){
            return toast.error(`Password don't match`);
        }
        try{
          const { user } = await auth.createUserWithEmailAndPassword(
              email, 
              password);
              user.updateProfile({
                  displayName: displayName
              }).then(() =>{
                  return toast.success('SignUp Successful');
              }).catch((error) =>{
                 return (error);
              })
              auth.onAuthStateChanged(user);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
          return (error);
        }
    };

    handleChange = event =>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render(){
        const { displayName, email, password, confirmPassword } =this.state;
        return(
            <div className="bg-holder">
            <div className='sign-up'>
            <div className='sign-in-bg'>
            <div className='sign-in-header'>
            <Link to="/">
                <img className='sign-logo' title='Go to home page' alt='logo' src={Logo} style={{height: '55px', width: '55px'}} /> 
            </Link>
                <h4 className='header-4'>Create An Account</h4>
                <span className='span'>Sign up with your name and password</span>
            </div>
               <form 
               className='form-input'
               onSubmit={this.handleSubmit}>
                   <FormInput type='text'
                   name='displayName'
                   value={displayName}
                   onChange={this.handleChange}
                   label='name'
                    required />
                     <FormInput type='email'
                   name='email'
                   value={email}
                   onChange={this.handleChange}
                   label='email'
                    required />
                     <FormInput type='password'
                   name='password'
                   value={password}
                   onChange={this.handleChange}
                   label='password'
                    required />
                    <FormInput type='Password'
                   name='confirmPassword'
                   value={confirmPassword}
                   onChange={this.handleChange}
                   label='confirm password'
                    required />
                    <div >
                         <CustomButton 
                         className='custom-btn'
                         type='submit'> sign up </CustomButton>
                    </div>
                    <div className='signin-and-link'>
                    <p style={{color: '#0F9D58'}}>Already a Nwaste member? 
                        <Link to='/signin'>
                            <button className='sign-in-btn'>Sign in</button>
                        </Link>
                    </p> 
                    </div>
               </form>
            </div>
            </div>
            </div>
           );
    }
}

export default SignUp;