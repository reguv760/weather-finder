import React from 'react';

const WeatherIcon = props =>
{
	return(
		<div className="weatherIcon">
			<img 
				className="weatherIcon__icon"
				src={`http://openweathermap.org/img/w/${props.icon}.png`} 
				alt="Weather Icon" 
			/>
		</div>
	)
}

export default WeatherIcon;
