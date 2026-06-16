// import React from 'react'
import './button.css'
const Button = ({
    onClick,
    // props,
    text,
    color
}) => {
    return (
        <button className="button"
            // type={props.type}
            onClick={onClick}
            style={{

                // color: '#6400DC'
                color: color
            }}> {text}
        </button >
    )
}

export default Button