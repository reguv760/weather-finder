import React from 'react';

// getWeather is inhereted from App.js as props into child component
const Form = props =>		
(
	<div className="weather-form">
		<h1>Please enter a city and country</h1>
		<form onSubmit={ props.getWeather }>
			<input type="text" name="city" placeholder="City"/>
			<input type="text" name="country" placeholder="Country"/>
			
			<br/>

			<button>Get Weather</button>
		</form>
	</div>
)
	
export default Form;