import React from "react";
import "./Display.css";

const Display = (props) => {
    return (
        <div className="display-container">
            <div className="text-light"><h3>{props.previusValue} {props.operation}</h3></div>
            <div ><h2>{props.currentValue}</h2></div>
        </div>
    );
};

export default Display;
