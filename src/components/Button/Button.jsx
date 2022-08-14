import React from "react";
import './Button.css'

const Button = (props) => {
    return (
        <>
            <button
                onClick={(_) => props.click && props.click(props.label)}
                className={
                    `${props.btn ? 'btn' :''}
                    ${props.operation ? 'operation': ''}
                    ${props.double ? 'double':''}
                    ${props.triple ? 'triple' : ''}`
                }> {props.label || 0} </button>
        </>
    );
};

export default Button;
