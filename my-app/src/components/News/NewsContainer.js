import React from 'react';
import News from "./News";
import {connect} from "react-redux";

// const NewsContainer = (props) => {
//     let state = props.store.getState();
//     return <News newsProps={state.newsReducer.news}/>
// };

let mapStateToProps = (state) => {
    return {
        newsProps:state.newsReducer.news
    }
}
let mapDispatchToProps=(dispatch) => {
    return {
    }
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News)

export default NewsContainer;