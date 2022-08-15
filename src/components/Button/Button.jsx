import React from "react";
import "./Button.css";

const Button = (props) => {
    return (
        <>
            <button
                onClick={(e) => props.click && props.click(e.target.innerHTML)}
                className={`${props.btn ? "btn" : ""}
                    ${props.operation ? "operation" : ""}
                    ${props.double ? "double" : ""}
                    ${props.triple ? "triple" : ""}`}
            >
                {props.label || 0}
            </button>
        </>
    );
};

export default Button;
