import './Items.css'
export const Items = (props) => {
    return (
        <div className='items'>
            {props.svg}
            {props.text}
        </div>
    )
}
