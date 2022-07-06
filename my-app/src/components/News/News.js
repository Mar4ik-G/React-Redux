import React from 'react';
import NStyle from "./NewsStyle.module.css"
import BlockNews from "./BlockNews/BlockNews";

const News = (props) => {
    return (
        <div className={NStyle.content}>
            {props.newsProps.map(e => <BlockNews header={e.header} text={e.text} key={e.id}/>)}
        </div>
    );
};

export default News;