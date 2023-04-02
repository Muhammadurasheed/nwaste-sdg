import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';

const ProtectedRoutes = ({currentUser}) =>{
    
    return currentUser? <Outlet /> : <Navigate to="/" />
}


const mapInitialStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})
 
export default connect(mapInitialStateToProps)(ProtectedRoutes);