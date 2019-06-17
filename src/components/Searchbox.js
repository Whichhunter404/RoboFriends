import React from 'react';
const Searchbox = ({searchfield,searchchange})=>{
    return(
    <div>
        <input type='search'
        placeholder='input robots'
               style={{padding:'10px',border: '3px solid black'}}
        onChange={searchchange}
        />
    </div>
    );
}
export default Searchbox;