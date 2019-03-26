import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

import DayIMG from './../img/daytime.jpg';
import NightIMG from './../img/nighttime.jpg';

const API_KEY ="b231f5b35c36c9a43ede24332afda924";


class App extends React.Component
{
	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined,

	}

	getWeather = async (e) =>
	{
		e.preventDefault();

		{ /* elements.name.<attribute>.value 
			grabs input value in Form.js */ }

		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;

		{ /* call api with api_key */ }
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

		{ /* retrieve data after making an api call */ }
		const data = await api_call.json();


		if (city && country)
		{
			this.setState({ 
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: undefined,
			});		
		} else
		{
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: "Please enter your location",
			})
		}

	}

	render()
	{	
		const currentHour = new Date().getHours();
		let titleTextColor;
		let currentBG;

		if (currentHour < 19)
		{
			currentBG = `url(${DayIMG})`;
			titleTextColor = `#000`;
		} else {
			currentBG = `url(${NightIMG})`;
			titleTextColor = `#fff`;
		}

		//console.log(currentBG);

		return(
			<div className="wrapper">
				<div className="row">
					<div className="col-12 col-md-7 col-lg-7 title-container" style={{ backgroundImage: currentBG, color: titleTextColor}} >				
						<Titles/>
					</div>						
					
					<div className="col-12 col-md-5 col-lg-5 form-container">
						<Form getWeather={this.getWeather} />
						<Weather 
							temperature={this.state.tempature} 
							city={this.state.city}
							country={this.state.country}
							humidity={this.state.humidity}
							description={this.state.description}
							error={this.state.error}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App;