var React = require("react");

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>The temperature in {location} is {temp} degrees Fahrenheit.</h3>
  )
};

module.exports = WeatherMessage;
