/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

var {add} = require('redux-reducers-hub');

module.exports = function() {
  add({
    RANDOM(state, action) {
      return Math.floor(Math.random() * 100);
    },
  }, 'random', 0);
};
