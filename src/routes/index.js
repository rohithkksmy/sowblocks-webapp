import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from 'containers/App';
import NotFound from 'containers/NotFound';
import Home from 'pages/Home';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
