import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/Reducer/profile-reducer";
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

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId){
            userId = 24846;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)


    }

    render() {

        return (
         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return{
        profile:state.profileReducer.profile,
        status: state.profileReducer.status,
        // userId:authReducer.userId
    }

}

export default connect(mapStateToProps, {getUserProfile,getStatus,updateStatus})(withRouter(AuthRedirectComponent));

