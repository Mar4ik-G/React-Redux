import React from 'react';
import LoginFormik from "./LoginFormik";
import {connect} from "react-redux";
import {login, loginOut} from "../../redux/Reducer/auth-reducer";
import {Navigate} from "react-router-dom";


const Login = (props) => {

if (props.isAuth){
    return <Navigate to='/profile'/>
}
    return (
        <div>

            <h1>LOGIN</h1>
            <LoginFormik login={props.login}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        isAuth:state.authReducer.isAuth
    }
}

export default connect(mapStateToProps,{loginOut,login})(Login);