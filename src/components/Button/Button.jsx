/* eslint-disable react/prop-types */
import './Button.css';

function Button({text = "click", type="primary"}){

    return <button className={'button ' + (type==="secondary" ? 'button--secondary' : 'button--primary')} style={{padding:'20px'}}>{text}</button>
}

export default Button;