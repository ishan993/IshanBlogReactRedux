'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _readField = require('./readField');

var _readField2 = _interopRequireDefault(_readField);

var _write = require('./write');

var _write2 = _interopRequireDefault(_write);

var _getValues = require('./getValues');

var _getValues2 = _interopRequireDefault(_getValues);

/**
 * Reads props and generates (or updates) field structure
 */
var readFields = function readFields(props, myFields, asyncValidate, isReactNative) {
  var fields = props.fields;
  var form = props.form;
  var validate = props.validate;

  var values = _getValues2['default'](fields, form);
  var syncErrors = validate(values, props);
  var errors = {};
  var formError = syncErrors._error || form._error;
  var allValid = !formError;
  var allPristine = true;
  var tally = function tally(field) {
    if (field.error) {
      errors = _write2['default'](field.name, field.error, errors);
      allValid = false;
    }
    if (field.dirty) {
      allPristine = false;
    }
  };
  var fieldObjects = _extends({}, myFields);
  fields.forEach(function (name) {
    _readField2['default'](form, name, undefined, fieldObjects, syncErrors, asyncValidate, isReactNative, props, tally);
  });
  Object.defineProperty(fieldObjects, '_meta', {
    value: {
      allPristine: allPristine,
      allValid: allValid,
      values: values,
      errors: errors,
      formError: formError
    }
  });
  return fieldObjects;
};
exports['default'] = readFields;
module.exports = exports['default'];