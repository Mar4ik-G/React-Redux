import React from 'react';
import BNStyle from "./BlockNewsStyle.module.css"


const News = (props) => {
    return (
        <div className={BNStyle.blockNew}>
            <h4 className={BNStyle.header}>{props.header}</h4>
            <hr className={BNStyle.line}/>
            <p className={BNStyle.text}>{props.text}</p>
        </div>
    );
};

export default News;