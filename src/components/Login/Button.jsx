// import React from 'react'

const Button = ({
    onClick,
    // props,
    text,
    color,
}) => {
    return (
        <button
            // type={props.type}
            onClick={onClick}
            style={{
                width: 380,
                height: 48,
                borderRadius: 100,
                backgroundColor: 'white',
                fontSize: 16,
                fontWeight: 500,
                // color: '#6400DC'
                color: color
            }}> {text}
        </button >
    )
}

export default Button