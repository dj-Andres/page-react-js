import React from 'react';
import './Button.css';

const STYLES=['btn--primary','btn--outline']

const SIZES=['btn--mediun','btn--large','btn--mobile','btn--wide']

const COLOR=['primary','blue','red','green']

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle) ? 
    buttonStyle: STYLES[0]

    const checkButtonSize=SIZES.includes(buttonSize) ? 
    buttonSize: STYLES[0]

    const checkButtonColor=COLOR.includes(buttonColor) ? 
    buttonColor:STYLES[0]
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
};