'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _bindActionData = require('../bindActionData');

var _bindActionData2 = _interopRequireDefault(_bindActionData);

var _actions = require('../actions');

describe('reducer', function () {
  it('should initialize state to {}', function () {
    var state = _reducer2['default']();
    _expect2['default'](state).toExist().toBeA('object');
    _expect2['default'](Object.keys(state).length).toBe(0);
  });

  it('should not modify state when action has no form', function () {
    var state = { foo: 'bar' };
    _expect2['default'](_reducer2['default'](state, { type: 'SOMETHING_ELSE' })).toBe(state);
  });

  it('should initialize form state when action has form', function () {
    var state = _reducer2['default'](undefined, { form: 'foo' });
    _expect2['default'](state).toExist().toBeA('object');
    _expect2['default'](Object.keys(state).length).toBe(1);
    _expect2['default'](state.foo).toExist().toBeA('object').toEqual({
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should add an empty array value with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.addArrayValue('myField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: [{
        value: undefined
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should add an empty deep array value with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.addArrayValue('myField.myArray'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        myArray: [{
          value: undefined
        }]
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should add a deep array value with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.addArrayValue('myField.myArray', 20, undefined), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        myArray: [{
          value: 20
        }]
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should push an array value', function () {
    var state = _reducer2['default']({
      testForm: {
        myField: [{
          value: 'foo'
        }, {
          value: 'bar'
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.addArrayValue('myField', 'baz'), {
      form: 'testForm'
    }));
    _expect2['default'](state.testForm).toEqual({
      myField: [{
        value: 'foo'
      }, {
        value: 'bar'
      }, {
        value: 'baz'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should insert an array value', function () {
    var state = _reducer2['default']({
      testForm: {
        myField: [{
          value: 'foo'
        }, {
          value: 'bar'
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.addArrayValue('myField', 'baz', 1), {
      form: 'testForm'
    }));
    _expect2['default'](state.testForm).toEqual({
      myField: [{
        value: 'foo'
      }, {
        value: 'baz'
      }, {
        value: 'bar'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set value on blur with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.blur('myField', 'myValue'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: 'myValue'
      },
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set value on blur and touch with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.blur('myField', 'myValue'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: 'myValue',
        touched: true
      },
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set value on blur and touch with initial value', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'initialValue',
          touched: false
        },
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.blur('myField', 'myValue'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'myValue',
        touched: true
      },
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should not modify value if undefined is passed on blur (for android react native)', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'myValue',
          touched: false
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.blur('myField'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'myValue',
        touched: true
      },
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should not modify value if undefined is passed on blur, even if no value existed (for android react native)', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          value: undefined
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.blur('myField'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: undefined,
        touched: true
      },
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set nested value on blur', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          mySubField: {
            value: undefined
          }
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.blur('myField.mySubField', 'hello'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        mySubField: {
          value: 'hello',
          touched: true
        }
      },
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set array value on blur', function () {
    var state = _reducer2['default']({
      foo: {
        myArray: [{ value: undefined }],
        _active: 'myField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.blur('myArray[0]', 'hello'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myArray: [{
        value: 'hello',
        touched: true
      }],
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set value on change with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.change('myField', 'myValue'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: 'myValue'
      },
      _active: undefined, // CHANGE doesn't touch _active
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set value on change and touch with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.change('myField', 'myValue'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: 'myValue',
        touched: true
      },
      _active: undefined, // CHANGE doesn't touch _active
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set value on change and touch with initial value', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'initialValue',
          touched: false
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: 'Some global error',
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.change('myField', 'myValue'), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'myValue',
        touched: true
      },
      _active: 'myField',
      _asyncValidating: false,
      _error: 'Some global error',
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set value on change and remove field-level submit and async errors', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          value: 'initial',
          submitError: 'submit error',
          asyncError: 'async error'
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: 'Some global error',
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.change('myField', 'different'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: 'different'
      },
      _active: 'myField',
      _asyncValidating: false,
      _error: 'Some global error',
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set nested value on change with empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.change('myField.mySubField', 'myValue'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        mySubField: {
          value: 'myValue'
        }
      },
      _active: undefined, // CHANGE doesn't touch _active
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set visited on focus and update active with no previous state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.focus('myField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        visited: true
      },
      _active: 'myField',
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set visited on focus and update active on deep field with no previous state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.focus('myField.subField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        subField: {
          visited: true
        }
      },
      _active: 'myField.subField',
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set visited on focus and update current with previous state', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'initialValue',
          visited: false
        },
        _active: 'otherField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.focus('myField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'initialValue',
        visited: true
      },
      _active: 'myField',
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set initialize values on initialize on empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.initialize({ myField: 'initialValue' }, ['myField']), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'initialValue'
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should allow initializing null values', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.initialize({ bar: 'baz', dog: null }, ['bar', 'dog']), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      bar: {
        initial: 'baz',
        value: 'baz'
      },
      dog: {
        initial: null,
        value: null
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should initialize nested values on initialize on empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.initialize({ myField: { subField: 'initialValue' } }, ['myField.subField'], {}), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        subField: {
          initial: 'initialValue',
          value: 'initialValue'
        }
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should initialize array values on initialize on empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.initialize({ myField: ['initialValue'] }, ['myField[]'], {}), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: [{
        initial: 'initialValue',
        value: 'initialValue'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should initialize array values with subvalues on initialize on empty state', function () {
    var state = _reducer2['default']({}, _extends({}, _actions.initialize({
      accounts: [{
        name: 'Bobby Tables',
        email: 'bobby@gmail.com'
      }, {
        name: 'Sammy Tables',
        email: 'sammy@gmail.com'
      }]
    }, ['accounts[].name', 'accounts[].email'], {}), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      accounts: [{
        name: {
          initial: 'Bobby Tables',
          value: 'Bobby Tables'
        },
        email: {
          initial: 'bobby@gmail.com',
          value: 'bobby@gmail.com'
        }
      }, {
        name: {
          initial: 'Sammy Tables',
          value: 'Sammy Tables'
        },
        email: {
          initial: 'sammy@gmail.com',
          value: 'sammy@gmail.com'
        }
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set initialize values, but not change dirty value when initializing', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          value: 'dirtyValue',
          touched: true
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.initialize({ myField: 'initialValue' }, ['myField']), {
      form: 'foo',
      touch: true
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'dirtyValue'
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should pop an array value', function () {
    var state = _reducer2['default']({
      testForm: {
        myField: [{
          value: 'foo'
        }, {
          value: 'bar'
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.removeArrayValue('myField'), {
      form: 'testForm'
    }));
    _expect2['default'](state.testForm).toEqual({
      myField: [{
        value: 'foo'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should not change empty array value on remove', function () {
    var state = _reducer2['default']({
      testForm: {
        myField: [],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.removeArrayValue('myField'), {
      form: 'testForm'
    }));
    _expect2['default'](state.testForm).toEqual({
      myField: [],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should remove an array value from start of array', function () {
    var state = _reducer2['default']({
      testForm: {
        myField: [{
          value: 'foo'
        }, {
          value: 'bar'
        }, {
          value: 'baz'
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.removeArrayValue('myField', 0), {
      form: 'testForm'
    }));
    _expect2['default'](state.testForm).toEqual({
      myField: [{
        value: 'bar'
      }, {
        value: 'baz'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should remove an array value from middle of array', function () {
    var state = _reducer2['default']({
      testForm: {
        myField: [{
          value: 'foo'
        }, {
          value: 'bar'
        }, {
          value: 'baz'
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.removeArrayValue('myField', 1), {
      form: 'testForm'
    }));
    _expect2['default'](state.testForm).toEqual({
      myField: [{
        value: 'foo'
      }, {
        value: 'baz'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should reset values on reset on with previous state', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'dirtyValue',
          touched: true
        },
        myOtherField: {
          initial: 'otherInitialValue',
          value: 'otherDirtyValue',
          touched: true
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.reset(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'initialValue'
      },
      myOtherField: {
        initial: 'otherInitialValue',
        value: 'otherInitialValue'
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should reset deep values on reset on with previous state', function () {
    var state = _reducer2['default']({
      foo: {
        subField: {
          myField: {
            initial: 'initialValue',
            value: 'dirtyValue',
            touched: true
          },
          myOtherField: {
            initial: 'otherInitialValue',
            value: 'otherDirtyValue',
            touched: true
          }
        },
        _active: 'myField',
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.reset(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      subField: {
        myField: {
          initial: 'initialValue',
          value: 'initialValue'
        },
        myOtherField: {
          initial: 'otherInitialValue',
          value: 'otherInitialValue'
        }
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set asyncValidating on startAsyncValidation', function () {
    var state = _reducer2['default']({
      foo: {
        doesnt: 'matter',
        should: 'notchange',
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.startAsyncValidation(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      doesnt: 'matter',
      should: 'notchange',
      _active: undefined,
      _asyncValidating: true,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should set submitting on startSubmit', function () {
    var state = _reducer2['default']({
      foo: {
        doesnt: 'matter',
        should: 'notchange',
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.startSubmit(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      doesnt: 'matter',
      should: 'notchange',
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: true,
      _submitFailed: false
    });
  });

  it('should set submitting on startSubmit, and NOT reset submitFailed', function () {
    var state = _reducer2['default']({
      foo: {
        doesnt: 'matter',
        should: 'notchange',
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: true
      }
    }, _extends({}, _actions.startSubmit(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      doesnt: 'matter',
      should: 'notchange',
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: true,
      _submitFailed: true
    });
  });

  it('should unset asyncValidating on stopAsyncValidation', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'dirtyValue',
          touched: true
        },
        myOtherField: {
          initial: 'otherInitialValue',
          value: 'otherDirtyValue',
          touched: true
        },
        _active: undefined,
        _asyncValidating: true,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.stopAsyncValidation({
      myField: 'Error about myField',
      myOtherField: 'Error about myOtherField'
    }), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'dirtyValue',
        touched: true,
        asyncError: 'Error about myField'
      },
      myOtherField: {
        initial: 'otherInitialValue',
        value: 'otherDirtyValue',
        touched: true,
        asyncError: 'Error about myOtherField'
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unset field async errors on stopAsyncValidation', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'dirtyValue',
          asyncError: 'myFieldError',
          touched: true
        },
        myOtherField: {
          initial: 'otherInitialValue',
          value: 'otherDirtyValue',
          asyncError: 'myOtherFieldError',
          touched: true
        },
        _active: undefined,
        _asyncValidating: true,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.stopAsyncValidation(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'dirtyValue',
        asyncError: undefined,
        touched: true
      },
      myOtherField: {
        initial: 'otherInitialValue',
        value: 'otherDirtyValue',
        asyncError: undefined,
        touched: true
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unset asyncValidating on stopAsyncValidation and set global error', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'dirtyValue',
          touched: true
        },
        myOtherField: {
          initial: 'otherInitialValue',
          value: 'otherDirtyValue',
          touched: true
        },
        _active: undefined,
        _asyncValidating: true,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.stopAsyncValidation({
      _error: 'This is a global error'
    }), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'dirtyValue',
        touched: true
      },
      myOtherField: {
        initial: 'otherInitialValue',
        value: 'otherDirtyValue',
        touched: true
      },
      _active: undefined,
      _asyncValidating: false,
      _error: 'This is a global error',
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unset submitting on stopSubmit', function () {
    var state = _reducer2['default']({
      foo: {
        doesnt: 'matter',
        should: 'notchange',
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: true,
        _submitFailed: false
      }
    }, _extends({}, _actions.stopSubmit(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      doesnt: 'matter',
      should: 'notchange',
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unset submitFailed on stopSubmit with no errors', function () {
    var state = _reducer2['default']({
      foo: {
        doesnt: 'matter',
        should: 'notchange',
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: true,
        _submitFailed: true
      }
    }, _extends({}, _actions.stopSubmit(), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      doesnt: 'matter',
      should: 'notchange',
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unset submitting and set submit errors on stopSubmit', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'dirtyValue',
          touched: true
        },
        myOtherField: {
          initial: 'otherInitialValue',
          value: 'otherDirtyValue',
          touched: true
        },
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: true,
        _submitFailed: false
      }
    }, _extends({}, _actions.stopSubmit({
      myField: 'Error about myField',
      myOtherField: 'Error about myOtherField'
    }), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'dirtyValue',
        touched: true,
        submitError: 'Error about myField'
      },
      myOtherField: {
        initial: 'otherInitialValue',
        value: 'otherDirtyValue',
        touched: true,
        submitError: 'Error about myOtherField'
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: true
    });
  });

  it('should unset submitting and set submit global error on stopSubmit', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          initial: 'initialValue',
          value: 'dirtyValue',
          touched: true
        },
        myOtherField: {
          initial: 'otherInitialValue',
          value: 'otherDirtyValue',
          touched: true
        },
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: true,
        _submitFailed: false
      }
    }, _extends({}, _actions.stopSubmit({
      _error: 'This is a global error'
    }), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        initial: 'initialValue',
        value: 'dirtyValue',
        touched: true
      },
      myOtherField: {
        initial: 'otherInitialValue',
        value: 'otherDirtyValue',
        touched: true
      },
      _active: undefined,
      _asyncValidating: false,
      _error: 'This is a global error',
      _submitting: false,
      _submitFailed: true
    });
  });

  it('should mark fields as touched on touch', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          value: 'initialValue',
          touched: false
        },
        myOtherField: {
          value: 'otherInitialValue',
          touched: false
        },
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.touch('myField', 'myOtherField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: 'initialValue',
        touched: true
      },
      myOtherField: {
        value: 'otherInitialValue',
        touched: true
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should mark deep fields as touched on touch', function () {
    var state = _reducer2['default']({
      foo: {
        deep: {
          myField: {
            value: 'initialValue',
            touched: false
          },
          myOtherField: {
            value: 'otherInitialValue',
            touched: false
          }
        },
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.touch('deep.myField', 'deep.myOtherField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      deep: {
        myField: {
          value: 'initialValue',
          touched: true
        },
        myOtherField: {
          value: 'otherInitialValue',
          touched: true
        }
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should mark array fields as touched on touch', function () {
    var state = _reducer2['default']({
      foo: {
        myFields: [{
          value: 'initialValue',
          touched: false
        }, {
          value: 'otherInitialValue',
          touched: false
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.touch('myFields[0]', 'myFields[1]'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myFields: [{
        value: 'initialValue',
        touched: true
      }, {
        value: 'otherInitialValue',
        touched: true
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should mark index-less array fields as touched on touch', function () {
    var state = _reducer2['default']({
      foo: {
        myFields: [{
          value: 'initialValue',
          touched: false
        }, {
          value: 'otherInitialValue',
          touched: false
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.touch('myFields[]'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myFields: [{
        value: 'initialValue',
        touched: true
      }, {
        value: 'otherInitialValue',
        touched: true
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should mark index-less array subfields as touched on touch', function () {
    var state = _reducer2['default']({
      foo: {
        myFields: [{
          name: {
            value: 'initialValue',
            touched: false
          }
        }, {
          name: {
            value: 'otherInitialValue',
            touched: false
          }
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.touch('myFields[].name'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myFields: [{
        name: {
          value: 'initialValue',
          touched: true
        }
      }, {
        name: {
          value: 'otherInitialValue',
          touched: true
        }
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should ignore empty index-less array fields on touch', function () {
    var state = _reducer2['default']({
      foo: {
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.touch('myFields[]'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should ignore empty index-less array subfields on touch', function () {
    var state = _reducer2['default']({
      foo: {
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.touch('myFields[].name'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unmark fields as touched on untouch', function () {
    var state = _reducer2['default']({
      foo: {
        myField: {
          value: 'initialValue',
          touched: true
        },
        myOtherField: {
          value: 'otherInitialValue',
          touched: true
        },
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.untouch('myField', 'myOtherField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myField: {
        value: 'initialValue'
      },
      myOtherField: {
        value: 'otherInitialValue'
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unmark deep fields as touched on untouch', function () {
    var state = _reducer2['default']({
      foo: {
        deep: {
          myField: {
            value: 'initialValue',
            touched: true
          },
          myOtherField: {
            value: 'otherInitialValue',
            touched: true
          }
        },
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.untouch('deep.myField', 'deep.myOtherField'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      deep: {
        myField: {
          value: 'initialValue'
        },
        myOtherField: {
          value: 'otherInitialValue'
        }
      },
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should unmark array fields as touched on untouch', function () {
    var state = _reducer2['default']({
      foo: {
        myFields: [{
          value: 'initialValue',
          touched: true
        }, {
          value: 'otherInitialValue',
          touched: true
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.untouch('myFields[0]', 'myFields[1]'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myFields: [{
        value: 'initialValue'
      }, {
        value: 'otherInitialValue'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should mark index-less array fields as touched on touch', function () {
    var state = _reducer2['default']({
      foo: {
        myFields: [{
          value: 'initialValue',
          touched: true
        }, {
          value: 'otherInitialValue',
          touched: true
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.untouch('myFields[]'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myFields: [{
        value: 'initialValue'
      }, {
        value: 'otherInitialValue'
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should mark index-less array subfields as touched on touch', function () {
    var state = _reducer2['default']({
      foo: {
        myFields: [{
          name: {
            value: 'initialValue',
            touched: true
          }
        }, {
          name: {
            value: 'otherInitialValue',
            touched: true
          }
        }],
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.untouch('myFields[].name'), {
      form: 'foo'
    }));
    _expect2['default'](state.foo).toEqual({
      myFields: [{
        name: {
          value: 'initialValue'
        }
      }, {
        name: {
          value: 'otherInitialValue'
        }
      }],
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });

  it('should destroy forms on destroy', function () {
    var state = _reducer2['default']({
      foo: {
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      },
      bar: {
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.destroy(), {
      form: 'foo'
    }));
    _expect2['default'](state).toEqual({
      bar: {
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    });
  });

  it('should destroy last form on destroy', function () {
    var state = _reducer2['default']({
      foo: {
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    }, _extends({}, _actions.destroy(), {
      form: 'foo'
    }));
    _expect2['default'](state).toEqual({});
  });

  it('should destroy form and formkey on destroy', function () {
    var destroyWithKey = function destroyWithKey(key) {
      return _bindActionData2['default'](_actions.destroy, { key: key })();
    };
    var state = _reducer2['default']({
      fooForm: {
        barKey: {
          _active: undefined,
          _asyncValidating: false,
          _error: undefined,
          _submitting: false,
          _submitFailed: false
        },
        bazKey: {
          _active: undefined,
          _asyncValidating: false,
          _error: undefined,
          _submitting: false,
          _submitFailed: false
        }
      }
    }, _extends({}, destroyWithKey('barKey'), {
      form: 'fooForm'
    }));
    _expect2['default'](state.fooForm).toEqual({
      bazKey: {
        _active: undefined,
        _asyncValidating: false,
        _error: undefined,
        _submitting: false,
        _submitFailed: false
      }
    });
  });
});

describe('reducer.plugin', function () {
  it('should initialize form state when there is a reducer plugin', function () {
    var result = _reducer2['default'].plugin({
      foo: function foo(state) {
        return state;
      }
    })();
    _expect2['default'](result).toExist().toBeA('object');
    _expect2['default'](Object.keys(result).length).toBe(1);
    _expect2['default'](result.foo).toExist().toBeA('object').toEqual({
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    });
  });
});

describe('reducer.normalize', function () {
  it('should initialize form state when there is a normalizer', function () {
    var state = _reducer2['default'].normalize({
      foo: {
        myField: function myField() {
          return 'normalized';
        }
      }
    })();
    _expect2['default'](state).toExist().toBeA('object');
    _expect2['default'](Object.keys(state).length).toBe(1);
    _expect2['default'](state.foo).toExist().toBeA('object').toEqual({
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false,
      myField: {
        value: 'normalized'
      }
    });
  });
  it('should normalize keyed forms depending on action form key', function () {
    var defaultFields = {
      _active: undefined,
      _asyncValidating: false,
      _error: undefined,
      _submitting: false,
      _submitFailed: false
    };
    var normalize = _reducer2['default'].normalize({
      foo: {
        myField: function myField() {
          return 'normalized';
        }
      }
    });
    var state = normalize({
      foo: {
        firstSubform: {}
      }
    }, {
      form: 'foo',
      key: 'firstSubform'
    });
    var nextState = normalize(state, {
      form: 'foo',
      key: 'secondSubForm'
    });
    _expect2['default'](state).toExist().toBeA('object');
    _expect2['default'](Object.keys(state).length).toBe(1);
    _expect2['default'](state.foo).toExist().toBeA('object').toEqual({
      firstSubform: _extends({}, defaultFields, {
        myField: {
          value: 'normalized'
        }
      })
    });
    _expect2['default'](nextState.foo).toEqual({
      firstSubform: _extends({}, defaultFields, {
        myField: {
          value: 'normalized'
        }
      }),
      secondSubForm: _extends({}, defaultFields, {
        myField: {
          value: 'normalized'
        }
      })
    });
  });
});