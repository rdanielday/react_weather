var React    = require("react"),
    ReactDOM = require("react-dom"),
    Main     = require("Main"),
    Weather  = require("Weather"),
    About    = require("About"),
    Examples = require("Examples");
  
var {
    Route, 
    Router,
    IndexRoute,
    hashHistory
    } = require("react-router");
    
// load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById("app")
  );
