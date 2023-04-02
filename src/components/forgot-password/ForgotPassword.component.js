import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebase.utils';
import './ForgotPassword.scss';




const ForgotPassword = ({email}) =>{
    const sendPasswordReset = async (email) => {
        try{
          await sendPasswordResetEmail(auth, email);
           alert('password reset link sent successfully')
        } catch(error){
          alert(error.message)
        }
     }
    return(
        <div className='password-reset-container'>
          <form className='password-reset' onSubmit={sendPasswordReset}>
          <input className='fg-input' type='email'
          name='email'
          placeholder='email'
          value={email}
           required />
        <button className='submit-email'  type='submit'>
          Submit Email
        </button>
        </form>
        </div>  
    );
}

export default ForgotPassword;