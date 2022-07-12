import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, loginOut} from "../../redux/Reducer/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {

        return (<Header {...this.props}/>);
    }
}

const mapStateToProps = (state) =>{
    return{
        isAuth:state.authReducer.isAuth,
        login: state.authReducer.login

    }
}

export default  connect(mapStateToProps,{getAuthUserData,loginOut})(HeaderContainer) ;