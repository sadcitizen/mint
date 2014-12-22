!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.object=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var object = {};

object.VERSION = '<%= version %>';

object.has = require('./object/has');
object.keys = require('./object/keys');

module.exports = object;
},{"./object/has":19,"./object/keys":20}],2:[function(require,module,exports){
var is = {};

is.VERSION = '<%= version %>';

['date', 'element', 'nan', 'number', 'object', 'regexp', 'string'].forEach(function (type) {
    is[type] = function (target) {
        return is.type(target) === type;
    };
});

is.args = require('./is/args');
is.array = require('./is/array');
is.bool = require('./is/bool');
is.defined = require('./is/defined');
is.empty = require('./is/empty');
is.equal = require('./is/equal');
is.even = require('./is/even');
is.exists = require('./is/exists');
is.float = require('./is/float');
is.fn = require('./is/fn');
is.int = require('./is/int');
is.json = require('./is/json');
is.not = require('./is/not');
is.odd = require('./is/odd');
is.primitive = require('./is/primitive');
is.type = require('./is/type');

module.exports = is;
},{"./is/args":3,"./is/array":4,"./is/bool":5,"./is/defined":6,"./is/empty":7,"./is/equal":8,"./is/even":9,"./is/exists":10,"./is/float":11,"./is/fn":12,"./is/int":13,"./is/json":14,"./is/not":15,"./is/odd":16,"./is/primitive":17,"./is/type":18}],3:[function(require,module,exports){
var type = require('./type');

/**
 * Checks if `target` is classified as an `arguments`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is classified as an `arguments`, else `false`.
 *
 * @example
 * function fn() {
 *   return arguments;
 * }
 * is.args(fn());
 * // => true
 *
 * is.args(1, 2, 3);
 * // => false
 */
module.exports = function args(target) {
    return type(target) === 'arguments';
};
},{"./type":18}],4:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is array.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is array, else `false`.
 *
 * @example
 *
 * is.array([]);
 * // => true
 *
 * is.array(42);
 * // => false
 */
function array(target) {
    return type(target) === 'array';
}

module.exports = Array.isArray || array;
},{"./type":18}],5:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is boolean.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is boolean, else `false`.
 *
 * @example
 *
 * is.bool(true);
 * // => true
 *
 * is.bool('');
 * // => false
 */
module.exports = function bool(target) {
    return type(target) === 'boolean';
};
},{"./type":18}],6:[function(require,module,exports){
/**
 * Check if `target` is defined.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is defined, else `false`.
 *
 * @example
 *
 * is.defined(void 0);
 * // => false
 *
 * is.defined('');
 * // => true
 */

module.exports = function defined(target) {
    return target !== undefined;
};
},{}],7:[function(require,module,exports){
var type = require('./type');
var exists = require('./exists');

module.exports = function empty(target) {
    if (!exists(target)) {
        return true;
    }

    var tp = type(target);

    if (tp === 'array' || tp === 'string' || tp === 'arguments') {
        return target.length === 0;
    }

    if (tp === 'object') {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                return false;
            }
        }
    }

    return true;
};
},{"./exists":10,"./type":18}],8:[function(require,module,exports){
var type = require('./type');

module.exports = function equal(target, other) {
    var tp = type(target);

    if (type(target) !== type(other)) {
        return false;
    }

    if (tp === 'regexp') {
        return target.source === other.source &&
            target.global === other.global &&
            target.multiline === other.multiline &&
            target.ignoreCase === other.ignoreCase;
    }

    if (tp === 'boolean' || tp === 'date' || tp === 'number') {
        target = +target;
        other = +other;
    }

    if (tp === 'string') {
        target = '' + target;
        other = '' + other;
    }

    if (tp === 'number' || tp === 'nan' || tp === 'infinity') {
        return (target !== 0 || 1 / target === 1 / other) || (target !== target && other !== other);
    }

    if (tp === 'array') {
        if (target.length !== other.length) {
            return false;
        }

        for (var i = 0, length = target.length; i < length; i++) {
            if (!equal(target[i], other[i])) {
                break;
            }
        }

        return i === length;
    }

    if (tp === 'object') {
        
    }

    return target === other;
};
},{"./type":18}],9:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is an even number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an even number, else `false`.
 *
 * @example
 *
 * is.even(null);
 * // => false
 *
 * is.even(21);
 * // => false
 *
 * is.even(20);
 * // => true
 *
 */
module.exports = function even(target) {
    return type(target) === 'number' && target % 2 === 0;
};
},{"./type":18}],10:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is 'null' or `undefined`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is not `null` and `undefined`, else `false`.
 *
 * @example
 *
 * is.exists(null);
 * // => false
 *
 * is.exists('');
 * // => true
 *
 */
module.exports = function exists(target) {
    var tp = type(target);
    return tp !== 'undefined' && tp !== 'null';
};
},{"./type":18}],11:[function(require,module,exports){
var type = require('./type');

/**
 * Checks if `target` is float.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is float, else 'false'.
 *
 * @example
 *
 * is.float(42);
 * // => false
 *
 * is.float(42.42);
 * // => true
 *
 * is.float('42.42');
 * // => false
 */
module.exports = function float(target) {
    return type(target) === 'number' && target % 1 !== 0;
};

},{"./type":18}],12:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is function.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is function, else `false`.
 *
 * @example
 *
 * is.fn(null);
 * // => false
 *
 * function noop() {}
 * is.fn(noop);
 * // => true
 *
 * is.fn(Math.abs);
 * // => true
 */
module.exports = function fn(target) {
    return type(target) === 'function';
};
},{"./type":18}],13:[function(require,module,exports){
var type = require('./type');

/**
 * Checks if `target` is integer.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is integer, else 'false'.
 *
 * @example
 *
 * is.int(42);
 * // => true
 *
 * is.int(42.42);
 * // => false
 *
 * is.int('42');
 * // => false
 */
module.exports = function int (target) {
    return type(target) === 'number' && target % 1 === 0;
};
},{"./type":18}],14:[function(require,module,exports){
module.exports = function json(target) {
    try {
        JSON.parse(target);
    } catch (e) {
        return false;
    }
    return true;
};
},{}],15:[function(require,module,exports){
module.exports = function not() {
    var args = Array.prototype.slice.call(arguments);

    return !Boolean(args.length === 1 ? args[0] : args[0].apply(null, args.slice(1, args.length)));
};
},{}],16:[function(require,module,exports){
var type = require('./type');

/**
 * Check if `target` is an odd number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an odd number, else `false`.
 *
 * @example
 *
 * is.odd(null);
 * // => false
 *
 * is.odd(21);
 * // => true
 *
 * is.odd(20);
 * // => false
 *
 */
module.exports = function odd(target) {
    return type(target) === 'number' && target % 2 !== 0;
};
},{"./type":18}],17:[function(require,module,exports){
var type = require('./type');
var primitives = ['boolean', 'number', 'string', 'undefined', 'null'];

module.exports = function primitive(target) {
    return primitives.indexOf(type(target)) !== -1;
};
},{"./type":18}],18:[function(require,module,exports){
module.exports = function type(target) {
    if (target === undefined) {
        return 'undefined';
    }

    if (target === null) {
        return 'null';
    }

    if (target && (target.nodeType === 1 || target.nodeType === 9)) {
        return 'element';
    }

    var tp = Object.prototype.toString.call(target).slice(8, -1).toLowerCase();

    if (tp === 'number') {
        if (isNaN(target)) {
            return 'nan';
        }
        if (!isFinite(target)) {
            return 'infinity';
        }
    }

    return tp;
};
},{}],19:[function(require,module,exports){
var is = require('../is');

module.exports = function has(target, key) {
    if (!is.object(target)) {
        throw new TypeError('Target must be an object!');
    }

    return Object.hasOwnProperty.call(target, key);
};
},{"../is":2}],20:[function(require,module,exports){
var has = require('./has');

module.exports = Object.keys || function keys(target) {
    var result = [];

    for (var key in target) {
        if (has(target, key)) {
            result.push(key);
        }
    }

    return result;
};
},{"./has":19}]},{},[1])(1)
});