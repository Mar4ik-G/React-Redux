import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return{
        isAuth: state.authReducer.isAuth
    }
}

const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth){return <Navigate to='/login'/>}
            return <Component {...this.props}/>
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent
};

export default WithAuthRedirect;