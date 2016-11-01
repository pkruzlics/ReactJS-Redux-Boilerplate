import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

class Header extends Component {
  render() {
    return (
      <div style={styles.headerbar}>
        Header
      </div>
    );
  }
}

Header.propTypes = {
};

Header.defaultPropTypes = {
};

const styles = {
  headerbar: {
    width: '100%',
    height: '50px',
    backgroundColor: '#0076bd',
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
