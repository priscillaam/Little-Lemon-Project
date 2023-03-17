import React from "react";
import './MenuButton.css';

export const MenuButton = (props) => {
    console.log(props.class)
    return(
        <div onClick={props.onClick}>
            <div className={props.class}>
                <div className='bar1'></div>
            </div>
            <div className={props.class}>
            <div className='bar2'></div>
            </div>
            <div className={props.class}>
            <div className='bar3'></div>
            </div>
        </div>
        
    )
}

export default MenuButton; 