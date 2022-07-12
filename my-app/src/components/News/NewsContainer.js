import News from "./News";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newsProps:state.newsReducer.news,
        isAuth:state.authReducer.isAuth
    }
}
let mapDispatchToProps=(dispatch) => {
    return {
    }
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News)

export default NewsContainer;