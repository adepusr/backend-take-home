const _ = require('lodash');

/*
    @params array of type array of objects
    @params attribute of type string (key)
    @params value of type string (value)
    @desc returns true if any object exists with specified key and value in the entire array.
*/
const contains = (array, attribute, value) => {
    return _.some(array, [attribute, value]);
}

/*
    @params msg of type string - error messages
    @desc console logs msg passed in red font.
*/
const errorLog = (msg) => {
    console.log('\x1b[31m%s\x1b[0m', msg);
}

module.exports = {
    contains,
    errorLog
}