const _ = require('lodash'); //pre install with npm

const items = [1,[2,[3,[4]]]]

const newItems = _.flatMapDeep(items);

console.log(newItems);