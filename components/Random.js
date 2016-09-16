/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const React = require('react');
const {Text, View, TouchableOpacity} = require('react-native');

if (__DEV__) { // hot reload dependencies
  require('../styles');
  require('../i18n');
}

var Random = React.createClass({
  render: function() {
    return (
      <View class="container">
        <Text class="number">
          {this.props.random}
        </Text>
        <TouchableOpacity class="button_container" onPress={this.props.generator} accessibilityTraits="button">
          <View class="button">
            <Text class="button_text">
              {__('example.random').toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
});

module.exports = Random;
