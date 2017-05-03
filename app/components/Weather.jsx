var React          = require("react"),
    WeatherForm    = require("WeatherForm"),
    WeatherMessage = require("WeatherMessage"),
    openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    
    this.setState({isLoading: true});
    
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    }); 
  },
  render: function () {
    var {isLoading, temp, location} = this.state;
    
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (location && temp) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }
    
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;