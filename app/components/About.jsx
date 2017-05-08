var React = require("react");

var About = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">About This App</h3>
      <p>
        This weather app was built using React by Ryan Day for 
        the <a href="http://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content">
        Complete React Web Developer Course</a>.
      </p>
      <p>
        Ryan can be found on <a href="http://github.com/rdanielday">GitHub</a>  
        and <a href="http://twitter.com/rdanielday">Twitter</a>.
      </p>
      <p>
        Weather data provided by <a href="http://www.openweathermap.org">OpenWeatherMap</a>
      </p>
    </div>
      );
};

module.exports = About;
