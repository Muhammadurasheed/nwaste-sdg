import React from 'react';
import CustomButton from '../custombutton/CustomButton.component';
import FormInput from '../formInput/Forminput.component';
import { useNavigate } from 'react-router-dom';
import './resetPassword.scss';



const ResetPassword = () =>{
    let navigate = useNavigate();
    return(
        <div>
          <form > 
           <FormInput name='password' 
                   type='password'
                   value={this.state.password}
                   handleChange={this.handleChange}
                   label='password'
                   required />
                                <FormInput type='Password'
                   name='confirmPassword'
                   value={this.state.confirmPassword}
                   onChange={this.handleChange}
                   label='confirm password'
                    required />
                    <div className='custom-button' >
                        <CustomButton onClick={() => navigate('/signin')}></CustomButton>
                    </div>
            </form>               
        </div>
    );
}

export default ResetPassword;