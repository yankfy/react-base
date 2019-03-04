import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  constructor() {
    super();
    this.state = { themeColor: '' };
  }
  // // 组件即将挂载
  // componentWillMount() {
  //   const { store } = this.context;
  //   this._updateThemeColor();
  //   store.subscribe(() => this._updateThemeColor())
  // }
  // _updateThemeColor() {
  //   // 组件公用context
  //   const { store } = this.context;
  //   const state = store.getState();
  //   console.log(state)
  //   this.setState({ themeColor: state.themeColor });
  // }

  render() {
    return <h1 style={{ color: this.props.themeColor }}> React.js 小书 </h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)

export default Header;
