/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const React = require('react');
const {View} = require('react-native');
const Welcome = require('../components/Welcome');
const Random = require('../components/Random');
const {connect} = require('react-redux');
const Actions = require('redux-actions-hub');

if (__DEV__) { // hot reload dependencies
  require('../styles');
  require('../i18n');
}

var App = React.createClass({
  render: function() {
    return (
      <View class="container">
        <Welcome id="welcome" />
        <Random random={this.props.random} generator={this.props.genRandom} />
      </View>
    );
  },
});

function select(store) {
  return {
    random: store.random,
  };
}

function actions(dispatch) {
  return {
    genRandom: () => dispatch(Actions.RANDOM()),
  };
}

module.exports = connect(select, actions)(App);
