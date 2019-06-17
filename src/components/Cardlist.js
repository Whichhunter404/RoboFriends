import React from 'react';
import Card from "./Card";

const Cardlist = ({robots})=>{
    const cardComp = robots.map((user,i)=>{
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                desc={robots[i].desc}
            />)
    });
    return(
        <div className={'containercard'} style={{display : 'inline !important'}}>
            {cardComp}
        </div>
    );
}
export default Cardlist;