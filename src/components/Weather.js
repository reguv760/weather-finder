import React from 'react';
import WeatherIcon from './WeatherIcon';

class Weather extends React.Component
{
	render()
	{
		const higlightColor = this.props.highlight;

		return (
			<div className="weather__info">
				{ this.props.city && this.props.country && <p className="weather__key" style={{ color: `${higlightColor}`}}> Location: <br/> <span className="weather__value"> { this.props.city }, { this.props.country }</span> </p> }
				{ this.props.temperature && <p className="weather__key" style={{ color: `${higlightColor}`}}> Temperature: <span className="weather__value"> { this.props.temperature }</span> </p> }
				{ this.props.humidity && <p className="weather__key" style={{ color: `${higlightColor}`}}> Humidity: <span className="weather__value"> { this.props.humidity }</span> </p> }
				{ this.props.description && <p className="weather__key" style={{ color: `${higlightColor}`}}>Conditions: <br/> <WeatherIcon icon={ this.props.icon} /> <span className="weather__value"> { this.props.description }</span> </p> }



				{this.props.error && <p className="weather__error"> {this.props.error}</p>}


			</div>
		)
	}
}


export default Weather;