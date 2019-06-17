import React from 'react';
const Card = ({id,name,desc})=>{
	return(
		<div className='card bg-light-green dib br3 pa3 ma2 grow shadow-5'>
		<img src={`https://robohash.org/${id}?size=200x200`} alt='Robots' />
			<div>
				<h2>{name}</h2>
				<p>{desc}</p>
			</div>	
		</div>
	);
}
export default 	Card;