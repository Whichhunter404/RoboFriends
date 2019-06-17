import React from 'react';

const Scroll_layout = (props) =>{
    return(
        <div style={{border:"3px solid black", overflow:"scroll", height:"800px"}}>
        {props.children}
        </div>
        )
}
export default Scroll_layout;