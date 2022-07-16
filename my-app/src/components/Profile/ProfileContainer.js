import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/Reducer/profile-reducer";
import {
    useLocation,
    useNavigate, useParams,
} from "react-router-dom";
import WithAuthRedirect from "../hoc/withAuthRedirect";
import authReducer from "../../redux/Reducer/auth-reducer";




function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)


    }


    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( this.props.router.params.userId === prevProps.authorizedUserId ){
            this.refreshProfile();}
    }


    render() {

        return (
         <Profile {...this.props}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
                  isOwner={!this.props.router.params.userId}
                  savePhoto={this.props.savePhoto}/>
        );
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return{
        profile:state.profileReducer.profile,
        status: state.profileReducer.status,
        authorizedUserId:state.authReducer.userId,
        isAuth:state.authReducer.isAuth,
    }

}

export default connect(mapStateToProps, {getUserProfile,getStatus,updateStatus,savePhoto})(withRouter(AuthRedirectComponent));

