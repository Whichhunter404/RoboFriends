import React from 'react';

const ScrollLayout = (props) =>{
    return(
        <div style={{border:"3px solid black", overflow:"scroll", height:"800px"}}>
        {props.children}
        </div>
        )
}
export default ScrollLayout;