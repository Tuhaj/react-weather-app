import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../containers/google_map';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  mapKToDegreesC(kelvins) {
    return _.map(kelvins, (temp) => temp - 273);
  }

  renderWeather(cityData) {
    const city = cityData.city,
          list = cityData.list,
          name = city.name,
          temperatures = this.mapKToDegreesC(list.map(weather => weather.main.temp)),
          pressures = list.map(weather => weather.main.pressure),
          humidities = list.map(weather => weather.main.humidity),
          { lon, lat } = city.coord;
    return(
      <tr key={name}>
        <td><GoogleMap lat={lat} lng={lon} /></td>
        <td><Chart data={temperatures} color={"orange"} units="°C" /></td>
        <td><Chart data={pressures} color={"green"} units="hPa" /></td>
        <td><Chart data={humidities} color={"blue"} units="%" /></td>
      </tr>
    )
  }

  render() {
    return(
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (°C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
