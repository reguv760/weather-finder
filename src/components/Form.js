import React from 'react';

{ /* getWeather is inhereted from App.js 
	as props into child component */ }
const Form = props =>		
(
	<form onSubmit={ props.getWeather }>
		<input type="text" name="city" placeholder="City"/>
		<input type="text" name="country" placeholder="Country"/>
		
		<button>Get Weather</button>
	</form>
)
	
export default Form;