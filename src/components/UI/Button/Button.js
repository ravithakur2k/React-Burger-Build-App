import React from 'react';
import classes from './Button.css'

const button = (props) => {
    const btnType = props.btnType
    return (
        <button disabled={props.disabled} className={[classes.Button, classes[btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
    )
}

export default button;