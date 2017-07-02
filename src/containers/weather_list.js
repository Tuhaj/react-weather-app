import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }
  renderWeather(cityData) {
    const name = cityData.city.name,
          list = cityData.list,
          temperatures = list.map(weather => weather.main.temp),
          pressures = list.map(weather => weather.main.humidity),
          humidities = list.map(weather => weather.main.pressure);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temperatures} color={"orange"} /></td>
        <td><Chart data={pressures} color={"blue"} /></td>
        <td><Chart data={humidities} color={"green"} /></td>
      </tr>
    )
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}


function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
