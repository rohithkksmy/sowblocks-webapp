import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import Helmet from 'react-helmet';
import config from '../../config';
import * as authActions from 'redux/modules/auth';

const { string, object } = PropTypes;

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    return dispatch(authActions.load());
  }
}])
@connect(
  state => ({
    authToken: state.auth.user && state.auth.user.token || ''
  })
)
export default class App extends Component {
  static propTypes = {
    children: object.isRequired,
    authToken: string,
  };

  render() {
    return (
      <div>
        <Helmet {...config.app.head}/>
        {this.props.authToken}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
