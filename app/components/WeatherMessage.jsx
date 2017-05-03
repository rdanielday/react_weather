var React = require("react");

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;
    return (
      <div>
        <h3>The temperature in {location} is {temp} degrees Fahrenheit.</h3>
      </div>
    );
  } 
});

module.exports = WeatherMessage;