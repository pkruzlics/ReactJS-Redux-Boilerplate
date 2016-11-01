import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header.jsx';

import {
  changeTitle,
  getSettings,
} from '../actions/settings.actions';

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _changeTitle: () => {
      dispatch(changeTitle('Hello world!!!'));
    },
    _getSettings: () => {
      dispatch(getSettings());
    },
  };
}

class Home extends Component {
  componentDidMount() {
    this.props._changeTitle();
    this.props._getSettings();
  }

  render() {
    return (
      <div>
        <Header />

        <div>
          {this.props.settings.title}
        </div>

        <div>
          {JSON.stringify(this.props.settings.data)}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  settings: PropTypes.object,
  _changeTitle: PropTypes.func,
  _getSettings: PropTypes.func,
};

Home.defaultPropTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
