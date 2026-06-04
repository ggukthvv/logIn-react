// import React from 'react'

const Input = (props) => {
    return (
        <>
            <div >
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    style={{
                        padding: 10,
                        marginTop: 5,
                        borderRadius: 8,
                        border: '1px solid grey',
                        width: 380,
                        height: 46,
                        fontSize: 16,
                        fontWeight: 400,
                        background: 'transparent',
                        color: 'white'
                    }} />
            </div>
        </>
    )
}
export default Input