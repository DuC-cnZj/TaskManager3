/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.5.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var e;e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t();
  }
}(function () {
  return function t(e, a, i) {
    function n(r, s) {
      if (!a[r]) {
        if (!e[r]) {
          var l = "function" == typeof require && require;if (!s && l) return require(r, !0);if (o) return o(r, !0);var u = new Error("Cannot find module '" + r + "'");throw u.code = "MODULE_NOT_FOUND", u;
        }var d = a[r] = { exports: {} };e[r][0].call(d.exports, function (t) {
          var a = e[r][1][t];return n(a ? a : t);
        }, d, d.exports, t, e, a, i);
      }return a[r].exports;
    }for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
      n(i[r]);
    }return n;
  }({ 1: [function (t, e, a) {}, {}], 2: [function (t, e, a) {
      function i(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3})$/,
              a = /^#([a-fA-F0-9]{6})$/,
              i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              n = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              o = /(\w+)/,
              r = [0, 0, 0],
              s = 1,
              l = t.match(e);if (l) {
            l = l[1];for (var u = 0; u < r.length; u++) {
              r[u] = parseInt(l[u] + l[u], 16);
            }
          } else if (l = t.match(a)) {
            l = l[1];for (var u = 0; u < r.length; u++) {
              r[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16);
            }
          } else if (l = t.match(i)) {
            for (var u = 0; u < r.length; u++) {
              r[u] = parseInt(l[u + 1]);
            }s = parseFloat(l[4]);
          } else if (l = t.match(n)) {
            for (var u = 0; u < r.length; u++) {
              r[u] = Math.round(2.55 * parseFloat(l[u + 1]));
            }s = parseFloat(l[4]);
          } else if (l = t.match(o)) {
            if ("transparent" == l[1]) return [0, 0, 0, 0];if (r = y[l[1]], !r) return;
          }for (var u = 0; u < r.length; u++) {
            r[u] = b(r[u], 0, 255);
          }return s = s || 0 == s ? b(s, 0, 1) : 1, r[3] = s, r;
        }
      }function n(t) {
        if (t) {
          var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);if (a) {
            var i = parseFloat(a[4]),
                n = b(parseInt(a[1]), 0, 360),
                o = b(parseFloat(a[2]), 0, 100),
                r = b(parseFloat(a[3]), 0, 100),
                s = b(isNaN(i) ? 1 : i, 0, 1);return [n, o, r, s];
          }
        }
      }function o(t) {
        if (t) {
          var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);if (a) {
            var i = parseFloat(a[4]),
                n = b(parseInt(a[1]), 0, 360),
                o = b(parseFloat(a[2]), 0, 100),
                r = b(parseFloat(a[3]), 0, 100),
                s = b(isNaN(i) ? 1 : i, 0, 1);return [n, o, r, s];
          }
        }
      }function r(t) {
        var e = i(t);return e && e.slice(0, 3);
      }function s(t) {
        var e = n(t);return e && e.slice(0, 3);
      }function l(t) {
        var e = i(t);return e ? e[3] : (e = n(t)) ? e[3] : (e = o(t)) ? e[3] : void 0;
      }function u(t) {
        return "#" + x(t[0]) + x(t[1]) + x(t[2]);
      }function d(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }function h(t, e) {
        if (e < 1 || t[3] && t[3] < 1) return f(t, e);var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);return "rgb(" + a + "%, " + i + "%, " + n + "%)";
      }function f(t, e) {
        var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);return "rgba(" + a + "%, " + i + "%, " + n + "%, " + (e || t[3] || 1) + ")";
      }function g(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      }function p(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }function m(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
      }function v(t) {
        return k[t.slice(0, 3)];
      }function b(t, e, a) {
        return Math.min(Math.max(e, t), a);
      }function x(t) {
        var e = t.toString(16).toUpperCase();return e.length < 2 ? "0" + e : e;
      }var y = t(6);e.exports = { getRgba: i, getHsla: n, getRgb: r, getHsl: s, getHwb: o, getAlpha: l, hexString: u, rgbString: d, rgbaString: c, percentString: h, percentaString: f, hslString: g, hslaString: p, hwbString: m, keyword: v };var k = {};for (var S in y) {
        k[y[S]] = S;
      }
    }, { 6: 6 }], 3: [function (t, e, a) {
      var i = t(5),
          n = t(2),
          o = function o(t) {
        if (t instanceof o) return t;if (!(this instanceof o)) return new o(t);this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 };var e;if ("string" == typeof t) {
          if (e = n.getRgba(t)) this.setValues("rgb", e);else if (e = n.getHsla(t)) this.setValues("hsl", e);else {
            if (!(e = n.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');this.setValues("hwb", e);
          }
        } else if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);else {
          if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));this.setValues("cmyk", e);
        }
      };o.prototype = { rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        }, hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        }, hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        }, hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        }, cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        }, rgbArray: function rgbArray() {
          return this.values.rgb;
        }, hslArray: function hslArray() {
          return this.values.hsl;
        }, hsvArray: function hsvArray() {
          return this.values.hsv;
        }, hwbArray: function hwbArray() {
          var t = this.values;return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        }, cmykArray: function cmykArray() {
          return this.values.cmyk;
        }, rgbaArray: function rgbaArray() {
          var t = this.values;return t.rgb.concat([t.alpha]);
        }, hslaArray: function hslaArray() {
          var t = this.values;return t.hsl.concat([t.alpha]);
        }, alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        }, red: function red(t) {
          return this.setChannel("rgb", 0, t);
        }, green: function green(t) {
          return this.setChannel("rgb", 1, t);
        }, blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        }, hue: function hue(t) {
          return t && (t %= 360, t = t < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        }, saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        }, lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        }, saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        }, whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        }, blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        }, value: function value(t) {
          return this.setChannel("hsv", 2, t);
        }, cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        }, magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        }, yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        }, black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        }, hexString: function hexString() {
          return n.hexString(this.values.rgb);
        }, rgbString: function rgbString() {
          return n.rgbString(this.values.rgb, this.values.alpha);
        }, rgbaString: function rgbaString() {
          return n.rgbaString(this.values.rgb, this.values.alpha);
        }, percentString: function percentString() {
          return n.percentString(this.values.rgb, this.values.alpha);
        }, hslString: function hslString() {
          return n.hslString(this.values.hsl, this.values.alpha);
        }, hslaString: function hslaString() {
          return n.hslaString(this.values.hsl, this.values.alpha);
        }, hwbString: function hwbString() {
          return n.hwbString(this.values.hwb, this.values.alpha);
        }, keyword: function keyword() {
          return n.keyword(this.values.rgb, this.values.alpha);
        }, rgbNumber: function rgbNumber() {
          var t = this.values.rgb;return t[0] << 16 | t[1] << 8 | t[2];
        }, luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], a = 0; a < t.length; a++) {
            var i = t[a] / 255;e[a] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        }, contrast: function contrast(t) {
          var e = this.luminosity(),
              a = t.luminosity();return e > a ? (e + .05) / (a + .05) : (a + .05) / (e + .05);
        }, level: function level(t) {
          var e = this.contrast(t);return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        }, dark: function dark() {
          var t = this.values.rgb,
              e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;return e < 128;
        }, light: function light() {
          return !this.dark();
        }, negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }return this.setValues("rgb", t), this;
        }, lighten: function lighten(t) {
          var e = this.values.hsl;return e[2] += e[2] * t, this.setValues("hsl", e), this;
        }, darken: function darken(t) {
          var e = this.values.hsl;return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        }, saturate: function saturate(t) {
          var e = this.values.hsl;return e[1] += e[1] * t, this.setValues("hsl", e), this;
        }, desaturate: function desaturate(t) {
          var e = this.values.hsl;return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        }, whiten: function whiten(t) {
          var e = this.values.hwb;return e[1] += e[1] * t, this.setValues("hwb", e), this;
        }, blacken: function blacken(t) {
          var e = this.values.hwb;return e[2] += e[2] * t, this.setValues("hwb", e), this;
        }, greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];return this.setValues("rgb", [e, e, e]), this;
        }, clearer: function clearer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e - e * t), this;
        }, opaquer: function opaquer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e + e * t), this;
        }, rotate: function rotate(t) {
          var e = this.values.hsl,
              a = (e[0] + t) % 360;return e[0] = a < 0 ? 360 + a : a, this.setValues("hsl", e), this;
        }, mix: function mix(t, e) {
          var a = this,
              i = t,
              n = void 0 === e ? .5 : e,
              o = 2 * n - 1,
              r = a.alpha() - i.alpha(),
              s = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              l = 1 - s;return this.rgb(s * a.red() + l * i.red(), s * a.green() + l * i.green(), s * a.blue() + l * i.blue()).alpha(a.alpha() * n + i.alpha() * (1 - n));
        }, toJSON: function toJSON() {
          return this.rgb();
        }, clone: function clone() {
          var t,
              e,
              a = new o(),
              i = this.values,
              n = a.values;for (var r in i) {
            i.hasOwnProperty(r) && (t = i[r], e = {}.toString.call(t), "[object Array]" === e ? n[r] = t.slice(0) : "[object Number]" === e ? n[r] = t : console.error("unexpected color value:", t));
          }return a;
        } }, o.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, o.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, o.prototype.getValues = function (t) {
        for (var e = this.values, a = {}, i = 0; i < t.length; i++) {
          a[t.charAt(i)] = e[t][i];
        }return 1 !== e.alpha && (a.a = e.alpha), a;
      }, o.prototype.setValues = function (t, e) {
        var a,
            n = this.values,
            o = this.spaces,
            r = this.maxes,
            s = 1;if ("alpha" === t) s = e;else if (e.length) n[t] = e.slice(0, t.length), s = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (a = 0; a < t.length; a++) {
            n[t][a] = e[t.charAt(a)];
          }s = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var l = o[t];for (a = 0; a < t.length; a++) {
            n[t][a] = e[l[a]];
          }s = e.alpha;
        }if (n.alpha = Math.max(0, Math.min(1, void 0 === s ? n.alpha : s)), "alpha" === t) return !1;var u;for (a = 0; a < t.length; a++) {
          u = Math.max(0, Math.min(r[t][a], n[t][a])), n[t][a] = Math.round(u);
        }for (var d in o) {
          d !== t && (n[d] = i[t][d](n[t]));
        }return !0;
      }, o.prototype.setSpace = function (t, e) {
        var a = e[0];return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a), this);
      }, o.prototype.setChannel = function (t, e, a) {
        var i = this.values[t];return void 0 === a ? i[e] : a === i[e] ? this : (i[e] = a, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = o), e.exports = o;
    }, { 2: 2, 5: 5 }], 4: [function (t, e, a) {
      function i(t) {
        var e,
            a,
            i,
            n = t[0] / 255,
            o = t[1] / 255,
            r = t[2] / 255,
            s = Math.min(n, o, r),
            l = Math.max(n, o, r),
            u = l - s;return l == s ? e = 0 : n == l ? e = (o - r) / u : o == l ? e = 2 + (r - n) / u : r == l && (e = 4 + (n - o) / u), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = (s + l) / 2, a = l == s ? 0 : i <= .5 ? u / (l + s) : u / (2 - l - s), [e, 100 * a, 100 * i];
      }function n(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2],
            s = Math.min(n, o, r),
            l = Math.max(n, o, r),
            u = l - s;return a = 0 == l ? 0 : u / l * 1e3 / 10, l == s ? e = 0 : n == l ? e = (o - r) / u : o == l ? e = 2 + (r - n) / u : r == l && (e = 4 + (n - o) / u), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = l / 255 * 1e3 / 10, [e, a, i];
      }function o(t) {
        var e = t[0],
            a = t[1],
            n = t[2],
            o = i(t)[0],
            r = 1 / 255 * Math.min(e, Math.min(a, n)),
            n = 1 - 1 / 255 * Math.max(e, Math.max(a, n));return [o, 100 * r, 100 * n];
      }function s(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 255,
            r = t[1] / 255,
            s = t[2] / 255;return n = Math.min(1 - o, 1 - r, 1 - s), e = (1 - o - n) / (1 - n) || 0, a = (1 - r - n) / (1 - n) || 0, i = (1 - s - n) / (1 - n) || 0, [100 * e, 100 * a, 100 * i, 100 * n];
      }function l(t) {
        return Z[JSON.stringify(t)];
      }function u(t) {
        var e = t[0] / 255,
            a = t[1] / 255,
            i = t[2] / 255;e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;var n = .4124 * e + .3576 * a + .1805 * i,
            o = .2126 * e + .7152 * a + .0722 * i,
            r = .0193 * e + .1192 * a + .9505 * i;return [100 * n, 100 * o, 100 * r];
      }function d(t) {
        var e,
            a,
            i,
            n = u(t),
            o = n[0],
            r = n[1],
            s = n[2];return o /= 95.047, r /= 100, s /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * r - 16, a = 500 * (o - r), i = 200 * (r - s), [e, a, i];
      }function c(t) {
        return z(d(t));
      }function h(t) {
        var e,
            a,
            i,
            n,
            o,
            r = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;if (0 == s) return o = 255 * l, [o, o, o];a = l < .5 ? l * (1 + s) : l + s - l * s, e = 2 * l - a, n = [0, 0, 0];for (var u = 0; u < 3; u++) {
          i = r + 1 / 3 * -(u - 1), i < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? e + 6 * (a - e) * i : 2 * i < 1 ? a : 3 * i < 2 ? e + (a - e) * (2 / 3 - i) * 6 : e, n[u] = 255 * o;
        }return n;
      }function f(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;return 0 === o ? [0, 0, 0] : (o *= 2, n *= o <= 1 ? o : 2 - o, a = (o + n) / 2, e = 2 * n / (o + n), [i, 100 * e, 100 * a]);
      }function p(t) {
        return o(h(t));
      }function m(t) {
        return s(h(t));
      }function v(t) {
        return l(h(t));
      }function x(t) {
        var e = t[0] / 60,
            a = t[1] / 100,
            i = t[2] / 100,
            n = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * i * (1 - a),
            s = 255 * i * (1 - a * o),
            l = 255 * i * (1 - a * (1 - o)),
            i = 255 * i;switch (n) {case 0:
            return [i, l, r];case 1:
            return [s, i, r];case 2:
            return [r, i, l];case 3:
            return [r, s, i];case 4:
            return [l, r, i];case 5:
            return [i, r, s];}
      }function y(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;return a = (2 - n) * o, e = n * o, e /= a <= 1 ? a : 2 - a, e = e || 0, a /= 2, [i, 100 * e, 100 * a];
      }function k(t) {
        return o(x(t));
      }function S(t) {
        return s(x(t));
      }function M(t) {
        return l(x(t));
      }function w(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;switch (u > 1 && (s /= u, l /= u), e = Math.floor(6 * o), a = 1 - l, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), n = s + i * (a - s), e) {default:case 6:case 0:
            r = a, g = n, b = s;break;case 1:
            r = n, g = a, b = s;break;case 2:
            r = s, g = a, b = n;break;case 3:
            r = s, g = n, b = a;break;case 4:
            r = n, g = s, b = a;break;case 5:
            r = a, g = s, b = n;}return [255 * r, 255 * g, 255 * b];
      }function C(t) {
        return i(w(t));
      }function I(t) {
        return n(w(t));
      }function D(t) {
        return s(w(t));
      }function A(t) {
        return l(w(t));
      }function T(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100,
            s = t[3] / 100;return e = 1 - Math.min(1, n * (1 - s) + s), a = 1 - Math.min(1, o * (1 - s) + s), i = 1 - Math.min(1, r * (1 - s) + s), [255 * e, 255 * a, 255 * i];
      }function P(t) {
        return i(T(t));
      }function _(t) {
        return n(T(t));
      }function F(t) {
        return o(T(t));
      }function V(t) {
        return l(T(t));
      }function R(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;return e = 3.2406 * n + o * -1.5372 + r * -.4986, a = n * -.9689 + 1.8758 * o + .0415 * r, i = .0557 * n + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, e = Math.min(Math.max(0, e), 1), a = Math.min(Math.max(0, a), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * a, 255 * i];
      }function O(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];return n /= 95.047, o /= 100, r /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, a = 500 * (n - o), i = 200 * (o - r), [e, a, i];
      }function L(t) {
        return z(O(t));
      }function B(t) {
        var e,
            a,
            i,
            n,
            o = t[0],
            r = t[1],
            s = t[2];return o <= 8 ? (a = 100 * o / 903.3, n = 7.787 * (a / 100) + 16 / 116) : (a = 100 * Math.pow((o + 16) / 116, 3), n = Math.pow(a / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + n - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + n, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (n - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(n - s / 200, 3), [e, a, i];
      }function z(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];return e = Math.atan2(r, o), a = 360 * e / 2 / Math.PI, a < 0 && (a += 360), i = Math.sqrt(o * o + r * r), [n, i, a];
      }function W(t) {
        return R(B(t));
      }function N(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];return i = r / 360 * 2 * Math.PI, e = o * Math.cos(i), a = o * Math.sin(i), [n, e, a];
      }function E(t) {
        return B(N(t));
      }function H(t) {
        return W(N(t));
      }function j(t) {
        return G[t];
      }function U(t) {
        return i(j(t));
      }function q(t) {
        return n(j(t));
      }function Y(t) {
        return o(j(t));
      }function X(t) {
        return s(j(t));
      }function K(t) {
        return d(j(t));
      }function J(t) {
        return u(j(t));
      }e.exports = { rgb2hsl: i, rgb2hsv: n, rgb2hwb: o, rgb2cmyk: s, rgb2keyword: l, rgb2xyz: u, rgb2lab: d, rgb2lch: c, hsl2rgb: h, hsl2hsv: f, hsl2hwb: p, hsl2cmyk: m, hsl2keyword: v, hsv2rgb: x, hsv2hsl: y, hsv2hwb: k, hsv2cmyk: S, hsv2keyword: M, hwb2rgb: w, hwb2hsl: C, hwb2hsv: I, hwb2cmyk: D, hwb2keyword: A, cmyk2rgb: T, cmyk2hsl: P, cmyk2hsv: _, cmyk2hwb: F, cmyk2keyword: V, keyword2rgb: j, keyword2hsl: U, keyword2hsv: q, keyword2hwb: Y, keyword2cmyk: X, keyword2lab: K, keyword2xyz: J, xyz2rgb: R, xyz2lab: O, xyz2lch: L, lab2xyz: B, lab2rgb: W, lab2lch: z, lch2lab: N, lch2xyz: E, lch2rgb: H };var G = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
          Z = {};for (var Q in G) {
        Z[JSON.stringify(G[Q])] = Q;
      }
    }, {}], 5: [function (t, e, a) {
      var i = t(4),
          n = function n() {
        return new u();
      };for (var o in i) {
        n[o + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(o);var r = /(\w+)2(\w+)/.exec(o),
            s = r[1],
            l = r[2];n[s] = n[s] || {}, n[s][l] = n[o] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));var a = i[t](e);if ("string" == typeof a || void 0 === a) return a;for (var n = 0; n < a.length; n++) {
              a[n] = Math.round(a[n]);
            }return a;
          };
        }(o);
      }var u = function u() {
        this.convs = {};
      };u.prototype.routeSpace = function (t, e) {
        var a = e[0];return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];if (!e) {
          var a = this.space,
              i = this.convs[a];e = n[a][t](i), this.convs[t] = e;
        }return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = n;
    }, { 4: 4 }], 6: [function (t, e, a) {
      e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    }, {}], 7: [function (t, e, a) {
      var i = t(28)();t(26)(i), t(42)(i), t(22)(i), t(31)(i), t(25)(i), t(21)(i), t(23)(i), t(24)(i), t(29)(i), t(33)(i), t(34)(i), t(32)(i), t(35)(i), t(30)(i), t(27)(i), t(36)(i), t(37)(i), t(38)(i), t(39)(i), t(40)(i), t(45)(i), t(43)(i), t(44)(i), t(46)(i), t(47)(i), t(48)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i), window.Chart = e.exports = i;
    }, { 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 39: 39, 40: 40, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 47: 47, 48: 48, 8: 8, 9: 9 }], 8: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Bar = function (e, a) {
          return a.type = "bar", new t(e, a);
        };
      };
    }, {}], 9: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Bubble = function (e, a) {
          return a.type = "bubble", new t(e, a);
        };
      };
    }, {}], 10: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Doughnut = function (e, a) {
          return a.type = "doughnut", new t(e, a);
        };
      };
    }, {}], 11: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Line = function (e, a) {
          return a.type = "line", new t(e, a);
        };
      };
    }, {}], 12: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.PolarArea = function (e, a) {
          return a.type = "polarArea", new t(e, a);
        };
      };
    }, {}], 13: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        t.Radar = function (e, a) {
          return a.type = "radar", new t(e, a);
        };
      };
    }, {}], 14: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-1" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-1" }] }, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              } } } };t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, a) {
          return a.type = "scatter", new t(e, a);
        };
      };
    }, {}], 15: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.bar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }, t.controllers.bar = t.DatasetController.extend({ dataElementType: t.elements.Rectangle, initialize: function initialize(e, a) {
            t.DatasetController.prototype.initialize.call(this, e, a);var i = this,
                n = i.getMeta(),
                o = i.getDataset();n.stack = o.stack, n.bar = !0;
          }, getStackCount: function getStackCount() {
            var t = this,
                a = t.getMeta(),
                i = t.getScaleForId(a.yAxisID),
                n = [];return e.each(t.chart.data.datasets, function (e, a) {
              var o = t.chart.getDatasetMeta(a);o.bar && t.chart.isDatasetVisible(a) && (i.options.stacked === !1 || i.options.stacked === !0 && n.indexOf(o.stack) === -1 || void 0 === i.options.stacked && (void 0 === o.stack || n.indexOf(o.stack) === -1)) && n.push(o.stack);
            }, t), n.length;
          }, update: function update(t) {
            var a = this;e.each(a.getMeta().data, function (e, i) {
              a.updateElement(e, i, t);
            }, a);
          }, updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                s = n.getScaleForId(o.yAxisID),
                l = s.getBasePixel(),
                u = n.chart.options.elements.rectangle,
                d = t.custom || {},
                c = n.getDataset();t._xScale = r, t._yScale = s, t._datasetIndex = n.index, t._index = a;var h = n.getRuler(a);t._model = { x: n.calculateBarX(a, n.index, h), y: i ? l : n.calculateBarY(a, n.index), label: n.chart.data.labels[a], datasetLabel: c.label, horizontal: !1, base: i ? l : n.calculateBarBase(n.index, a), width: n.calculateBarWidth(h), backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, a, u.backgroundColor), borderSkipped: d.borderSkipped ? d.borderSkipped : u.borderSkipped, borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(c.borderColor, a, u.borderColor), borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, a, u.borderWidth) }, t.pivot();
          }, calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = n.getBaseValue(),
                r = o;if (n.options.stacked === !0 || void 0 === n.options.stacked && void 0 !== i.stack) {
              for (var s = a.chart, l = s.data.datasets, u = Number(l[t].data[e]), d = 0; d < t; d++) {
                var c = l[d],
                    h = s.getDatasetMeta(d);if (h.bar && h.yAxisID === n.id && s.isDatasetVisible(d) && i.stack === h.stack) {
                  var f = Number(c.data[e]);o += u < 0 ? Math.min(f, r) : Math.max(f, r);
                }
              }return n.getPixelForValue(o);
            }return n.getBasePixel();
          }, getRuler: function getRuler() {
            var t = this,
                e = t.getMeta(),
                a = t.getScaleForId(e.xAxisID),
                i = t.getStackCount(),
                n = a.width / a.ticks.length,
                o = n * a.options.categoryPercentage,
                r = (n - n * a.options.categoryPercentage) / 2,
                s = o / i,
                l = s * a.options.barPercentage,
                u = s - s * a.options.barPercentage;return { stackCount: i, tickWidth: n, categoryWidth: o, categorySpacing: r, fullBarWidth: s, barWidth: l, barSpacing: u };
          }, calculateBarWidth: function calculateBarWidth(t) {
            var e = this,
                a = e.getMeta(),
                i = e.getScaleForId(a.xAxisID);return i.options.barThickness ? i.options.barThickness : t.barWidth;
          }, getStackIndex: function getStackIndex(t) {
            var e,
                a,
                i = this,
                n = i.chart.getDatasetMeta(t),
                o = i.getScaleForId(n.yAxisID),
                r = [n.stack];for (a = 0; a < t; ++a) {
              e = this.chart.getDatasetMeta(a), e.bar && this.chart.isDatasetVisible(a) && (o.options.stacked === !1 || o.options.stacked === !0 && r.indexOf(e.stack) === -1 || void 0 === o.options.stacked && (void 0 === e.stack || r.indexOf(e.stack) === -1)) && r.push(e.stack);
            }return r.length - 1;
          }, calculateBarX: function calculateBarX(t, e, a) {
            var i = this,
                n = i.getMeta(),
                o = i.getScaleForId(n.xAxisID),
                r = i.getStackIndex(e),
                s = o.getPixelForValue(null, t, e, i.chart.isCombo);return s -= i.chart.isCombo ? a.tickWidth / 2 : 0, s + a.barWidth / 2 + a.categorySpacing + a.barWidth * r + a.barSpacing / 2 + a.barSpacing * r;
          }, calculateBarY: function calculateBarY(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = Number(a.getDataset().data[t]);if (n.options.stacked || void 0 === n.options.stacked && void 0 !== i.stack) {
              for (var r = n.getBaseValue(), s = r, l = r, u = 0; u < e; u++) {
                var d = a.chart.data.datasets[u],
                    c = a.chart.getDatasetMeta(u);if (c.bar && c.yAxisID === n.id && a.chart.isDatasetVisible(u) && i.stack === c.stack) {
                  var h = Number(d.data[t]);h < 0 ? l += h || 0 : s += h || 0;
                }
              }return o < 0 ? n.getPixelForValue(l + o) : n.getPixelForValue(s + o);
            }return n.getPixelForValue(o);
          }, draw: function draw(e) {
            var a,
                i,
                n = this,
                o = e || 1,
                r = n.getMeta().data,
                s = n.getDataset();for (t.canvasHelpers.clipArea(n.chart.chart.ctx, n.chart.chartArea), a = 0, i = r.length; a < i; ++a) {
              var l = s.data[a];null === l || void 0 === l || isNaN(l) || r[a].transition(o).draw();
            }t.canvasHelpers.unclipArea(n.chart.chart.ctx);
          }, setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(a.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(a.hoverBorderWidth, i, o.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model,
                r = this.chart.options.elements.rectangle;o.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(a.backgroundColor, i, r.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(a.borderColor, i, r.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(a.borderWidth, i, r.borderWidth);
          } }), t.defaults.horizontalBar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { callbacks: { title: function title(t, e) {
                var a = "";return t.length > 0 && (t[0].yLabel ? a = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (a = e.labels[t[0].index])), a;
              }, label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "";return a + ": " + t.xLabel;
              } } } }, t.controllers.horizontalBar = t.controllers.bar.extend({ getStackCount: function getStackCount() {
            var t = this,
                a = t.getMeta(),
                i = t.getScaleForId(a.xAxisID),
                n = [];return e.each(t.chart.data.datasets, function (e, a) {
              var o = t.chart.getDatasetMeta(a);o.bar && t.chart.isDatasetVisible(a) && (i.options.stacked === !1 || i.options.stacked === !0 && n.indexOf(o.stack) === -1 || void 0 === i.options.stacked && (void 0 === o.stack || n.indexOf(o.stack) === -1)) && n.push(o.stack);
            }, t), n.length;
          }, updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                s = n.getScaleForId(o.yAxisID),
                l = r.getBasePixel(),
                u = t.custom || {},
                d = n.getDataset(),
                c = n.chart.options.elements.rectangle;t._xScale = r, t._yScale = s, t._datasetIndex = n.index, t._index = a;var h = n.getRuler(a);t._model = { x: i ? l : n.calculateBarX(a, n.index), y: n.calculateBarY(a, n.index, h), label: n.chart.data.labels[a], datasetLabel: d.label, horizontal: !0, base: i ? l : n.calculateBarBase(n.index, a), height: n.calculateBarHeight(h), backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(d.backgroundColor, a, c.backgroundColor), borderSkipped: u.borderSkipped ? u.borderSkipped : c.borderSkipped, borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(d.borderColor, a, c.borderColor),
              borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(d.borderWidth, a, c.borderWidth) }, t.pivot();
          }, calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = n.getBaseValue(),
                r = o;if (n.options.stacked || void 0 === n.options.stacked && void 0 !== i.stack) {
              for (var s = a.chart, l = s.data.datasets, u = Number(l[t].data[e]), d = 0; d < t; d++) {
                var c = l[d],
                    h = s.getDatasetMeta(d);if (h.bar && h.xAxisID === n.id && s.isDatasetVisible(d) && i.stack === h.stack) {
                  var f = Number(c.data[e]);o += u < 0 ? Math.min(f, r) : Math.max(f, r);
                }
              }return n.getPixelForValue(o);
            }return n.getBasePixel();
          }, getRuler: function getRuler() {
            var t = this,
                e = t.getMeta(),
                a = t.getScaleForId(e.yAxisID),
                i = t.getStackCount(),
                n = a.height / a.ticks.length,
                o = n * a.options.categoryPercentage,
                r = (n - n * a.options.categoryPercentage) / 2,
                s = o / i,
                l = s * a.options.barPercentage,
                u = s - s * a.options.barPercentage;return { stackCount: i, tickHeight: n, categoryHeight: o, categorySpacing: r, fullBarHeight: s, barHeight: l, barSpacing: u };
          }, calculateBarHeight: function calculateBarHeight(t) {
            var e = this,
                a = e.getMeta(),
                i = e.getScaleForId(a.yAxisID);return i.options.barThickness ? i.options.barThickness : t.barHeight;
          }, getStackIndex: function getStackIndex(t) {
            var e,
                a,
                i = this,
                n = i.chart.getDatasetMeta(t),
                o = i.getScaleForId(n.xAxisID),
                r = [n.stack];for (a = 0; a < t; ++a) {
              e = this.chart.getDatasetMeta(a), e.bar && this.chart.isDatasetVisible(a) && (o.options.stacked === !1 || o.options.stacked === !0 && r.indexOf(e.stack) === -1 || void 0 === o.options.stacked && (void 0 === e.stack || r.indexOf(e.stack) === -1)) && r.push(e.stack);
            }return r.length - 1;
          }, calculateBarX: function calculateBarX(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = Number(a.getDataset().data[t]);if (n.options.stacked || void 0 === n.options.stacked && void 0 !== i.stack) {
              for (var r = n.getBaseValue(), s = r, l = r, u = 0; u < e; u++) {
                var d = a.chart.data.datasets[u],
                    c = a.chart.getDatasetMeta(u);if (c.bar && c.xAxisID === n.id && a.chart.isDatasetVisible(u) && i.stack === c.stack) {
                  var h = Number(d.data[t]);h < 0 ? l += h || 0 : s += h || 0;
                }
              }return o < 0 ? n.getPixelForValue(l + o) : n.getPixelForValue(s + o);
            }return n.getPixelForValue(o);
          }, calculateBarY: function calculateBarY(t, e, a) {
            var i = this,
                n = i.getMeta(),
                o = i.getScaleForId(n.yAxisID),
                r = i.getStackIndex(e),
                s = o.getPixelForValue(null, t, e, i.chart.isCombo);return s -= i.chart.isCombo ? a.tickHeight / 2 : 0, s + a.barHeight / 2 + a.categorySpacing + a.barHeight * r + a.barSpacing / 2 + a.barSpacing * r;
          } });
      };
    }, {}], 16: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.bubble = { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "",
                    i = e.datasets[t.datasetIndex].data[t.index];return a + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
              } } } }, t.controllers.bubble = t.DatasetController.extend({ dataElementType: t.elements.Point, update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.data;e.each(n, function (e, i) {
              a.updateElement(e, i, t);
            });
          }, updateElement: function updateElement(a, i, n) {
            var o = this,
                r = o.getMeta(),
                s = o.getScaleForId(r.xAxisID),
                l = o.getScaleForId(r.yAxisID),
                u = a.custom || {},
                d = o.getDataset(),
                c = d.data[i],
                h = o.chart.options.elements.point,
                f = o.index;e.extend(a, { _xScale: s, _yScale: l, _datasetIndex: f, _index: i, _model: { x: n ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c : NaN, i, f, o.chart.isCombo), y: n ? l.getBasePixel() : l.getPixelForValue(c, i, f), radius: n ? 0 : u.radius ? u.radius : o.getRadius(c), hitRadius: u.hitRadius ? u.hitRadius : e.getValueAtIndexOrDefault(d.hitRadius, i, h.hitRadius) } }), t.DatasetController.prototype.removeHoverStyle.call(o, a, h);var g = a._model;g.skip = u.skip ? u.skip : isNaN(g.x) || isNaN(g.y), a.pivot();
          }, getRadius: function getRadius(t) {
            return t.r || this.chart.options.elements.point.radius;
          }, setHoverStyle: function setHoverStyle(a) {
            var i = this;t.DatasetController.prototype.setHoverStyle.call(i, a);var n = i.chart.data.datasets[a._datasetIndex],
                o = a._index,
                r = a.custom || {},
                s = a._model;s.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(n.data[o]);
          }, removeHoverStyle: function removeHoverStyle(e) {
            var a = this;t.DatasetController.prototype.removeHoverStyle.call(a, e, a.chart.options.elements.point);var i = a.chart.data.datasets[e._datasetIndex].data[e._index],
                n = e.custom || {},
                o = e._model;o.radius = n.radius ? n.radius : a.getRadius(i);
          } });
      };
    }, {}], 17: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults;a.doughnut = { animation: { animateRotate: !0, animateScale: !1 }, aspectRatio: 1, hover: { mode: "single" }, legendCallback: function legendCallback(t) {
            var e = [];e.push('<ul class="' + t.id + '-legend">');var a = t.data,
                i = a.datasets,
                n = a.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
            }return e.push("</ul>"), e.join("");
          }, legend: { labels: { generateLabels: function generateLabels(t) {
                var a = t.data;return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      s = o.data[n],
                      l = s && s.custom || {},
                      u = e.getValueAtIndexOrDefault,
                      d = t.options.elements.arc,
                      c = l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
                      h = l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
                      f = l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth);return { text: i, fillStyle: c, strokeStyle: h, lineWidth: f, hidden: isNaN(r.data[n]) || o.data[n].hidden, index: n };
                }) : [];
              } }, onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;for (a = 0, i = (r.data.datasets || []).length; a < i; ++a) {
                n = r.getDatasetMeta(a), n.data[o] && (n.data[o].hidden = !n.data[o].hidden);
              }r.update();
            } }, cutoutPercentage: 50, rotation: Math.PI * -.5, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t, a) {
                var i = a.labels[t.index],
                    n = ": " + a.datasets[t.datasetIndex].data[t.index];return e.isArray(i) ? (i = i.slice(), i[0] += n) : i += n, i;
              } } } }, a.pie = e.clone(a.doughnut), e.extend(a.pie, { cutoutPercentage: 0 }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({ dataElementType: t.elements.Arc, linkScales: e.noop, getRingIndex: function getRingIndex(t) {
            for (var e = 0, a = 0; a < t; ++a) {
              this.chart.isDatasetVisible(a) && ++e;
            }return e;
          }, update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = i.options,
                r = o.elements.arc,
                s = n.right - n.left - r.borderWidth,
                l = n.bottom - n.top - r.borderWidth,
                u = Math.min(s, l),
                d = { x: 0, y: 0 },
                c = a.getMeta(),
                h = o.cutoutPercentage,
                f = o.circumference;if (f < 2 * Math.PI) {
              var g = o.rotation % (2 * Math.PI);g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);var p = g + f,
                  m = { x: Math.cos(g), y: Math.sin(g) },
                  v = { x: Math.cos(p), y: Math.sin(p) },
                  b = g <= 0 && 0 <= p || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  S = h / 100,
                  M = { x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), v.x * (v.x < 0 ? 1 : S)), y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), v.y * (v.y < 0 ? 1 : S)) },
                  w = { x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), v.x * (v.x > 0 ? 1 : S)), y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), v.y * (v.y > 0 ? 1 : S)) },
                  C = { width: .5 * (w.x - M.x), height: .5 * (w.y - M.y) };u = Math.min(s / C.width, l / C.height), d = { x: (w.x + M.x) * -.5, y: (w.y + M.y) * -.5 };
            }i.borderWidth = a.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = a.calculateTotal(), a.outerRadius = i.outerRadius - i.radiusLength * a.getRingIndex(a.index), a.innerRadius = Math.max(a.outerRadius - i.radiusLength, 0), e.each(c.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          }, updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.chart,
                r = o.chartArea,
                s = o.options,
                l = s.animation,
                u = (r.left + r.right) / 2,
                d = (r.top + r.bottom) / 2,
                c = s.rotation,
                h = s.rotation,
                f = n.getDataset(),
                g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[a]) * (s.circumference / (2 * Math.PI)),
                p = i && l.animateScale ? 0 : n.innerRadius,
                m = i && l.animateScale ? 0 : n.outerRadius,
                v = e.getValueAtIndexOrDefault;e.extend(t, { _datasetIndex: n.index, _index: a, _model: { x: u + o.offsetX, y: d + o.offsetY, startAngle: c, endAngle: h, circumference: g, outerRadius: m, innerRadius: p, label: v(f.label, a, o.data.labels[a]) } });var b = t._model;this.removeHoverStyle(t), i && l.animateRotate || (0 === a ? b.startAngle = s.rotation : b.startAngle = n.getMeta().data[a - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
          }, removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          }, calculateTotal: function calculateTotal() {
            var t,
                a = this.getDataset(),
                i = this.getMeta(),
                n = 0;return e.each(i.data, function (e, i) {
              t = a.data[i], isNaN(t) || e.hidden || (n += Math.abs(t));
            }), n;
          }, calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
          }, getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, a, i = 0, n = this.index, o = t.length, r = 0; r < o; r++) {
              e = t[r]._model ? t[r]._model.borderWidth : 0, a = t[r]._chart ? t[r]._chart.config.data.datasets[n].hoverBorderWidth : 0, i = e > i ? e : i, i = a > i ? a : i;
            }return i;
          } });
      };
    }, {}], 18: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          return a.getValueOrDefault(t.showLine, e.showLines);
        }var a = t.helpers;t.defaults.line = { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }, t.controllers.line = t.DatasetController.extend({ datasetElementType: t.elements.Line, dataElementType: t.elements.Point, update: function update(t) {
            var i,
                n,
                o,
                r = this,
                s = r.getMeta(),
                l = s.dataset,
                u = s.data || [],
                d = r.chart.options,
                c = d.elements.line,
                h = r.getScaleForId(s.yAxisID),
                f = r.getDataset(),
                g = e(f, d);for (g && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = u, l._model = { spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps, tension: o.tension ? o.tension : a.getValueOrDefault(f.lineTension, c.tension), backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor, borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth, borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor, borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle, borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash, borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset, borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle, fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill, steppedLine: o.steppedLine ? o.steppedLine : a.getValueOrDefault(f.steppedLine, c.stepped), cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode), scaleTop: h.top, scaleBottom: h.bottom, scaleZero: h.getBasePixel() }, l.pivot()), i = 0, n = u.length; i < n; ++i) {
              r.updateElement(u[i], i, t);
            }for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) {
              u[i].pivot();
            }
          }, getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                o = t.custom || {};return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.getValueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          }, getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                o = t.custom || {};return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.getValueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          }, getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                o = t.custom || {};return isNaN(o.borderWidth) ? isNaN(n.pointBorderWidth) ? isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.getValueAtIndexOrDefault(n.pointBorderWidth, e, i) : i = o.borderWidth, i;
          }, updateElement: function updateElement(t, e, i) {
            var n,
                o,
                r = this,
                s = r.getMeta(),
                l = t.custom || {},
                u = r.getDataset(),
                d = r.index,
                c = u.data[e],
                h = r.getScaleForId(s.yAxisID),
                f = r.getScaleForId(s.xAxisID),
                g = r.chart.options.elements.point,
                p = r.chart.data.labels || [],
                m = 1 === p.length || 1 === u.data.length || r.chart.isCombo;void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c : NaN, e, d, m), o = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = { x: n, y: o, skip: l.skip || isNaN(n) || isNaN(o), radius: l.radius || a.getValueAtIndexOrDefault(u.pointRadius, e, g.radius), pointStyle: l.pointStyle || a.getValueAtIndexOrDefault(u.pointStyle, e, g.pointStyle), backgroundColor: r.getPointBackgroundColor(t, e), borderColor: r.getPointBorderColor(t, e), borderWidth: r.getPointBorderWidth(t, e), tension: s.dataset._model ? s.dataset._model.tension : 0, steppedLine: !!s.dataset._model && s.dataset._model.steppedLine, hitRadius: l.hitRadius || a.getValueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius) };
          }, calculatePointY: function calculatePointY(t, e, a) {
            var i,
                n,
                o,
                r = this,
                s = r.chart,
                l = r.getMeta(),
                u = r.getScaleForId(l.yAxisID),
                d = 0,
                c = 0;if (u.options.stacked) {
              for (i = 0; i < a; i++) {
                if (n = s.data.datasets[i], o = s.getDatasetMeta(i), "line" === o.type && o.yAxisID === u.id && s.isDatasetVisible(i)) {
                  var h = Number(u.getRightValue(n.data[e]));h < 0 ? c += h || 0 : d += h || 0;
                }
              }var f = Number(u.getRightValue(t));return f < 0 ? u.getPixelForValue(c + f) : u.getPixelForValue(d + f);
            }return u.getPixelForValue(t);
          }, updateBezierControlPoints: function updateBezierControlPoints() {
            function t(t, e, a) {
              return Math.max(Math.min(t, a), e);
            }var e,
                i,
                n,
                o,
                r,
                s = this,
                l = s.getMeta(),
                u = s.chart.chartArea,
                d = l.data || [];if (l.dataset._model.spanGaps && (d = d.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === l.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(d);else for (e = 0, i = d.length; e < i; ++e) {
              n = d[e], o = n._model, r = a.splineCurve(a.previousItem(d, e)._model, o, a.nextItem(d, e)._model, l.dataset._model.tension), o.controlPointPreviousX = r.previous.x, o.controlPointPreviousY = r.previous.y, o.controlPointNextX = r.next.x, o.controlPointNextY = r.next.y;
            }if (s.chart.options.elements.line.capBezierPoints) for (e = 0, i = d.length; e < i; ++e) {
              o = d[e]._model, o.controlPointPreviousX = t(o.controlPointPreviousX, u.left, u.right), o.controlPointPreviousY = t(o.controlPointPreviousY, u.top, u.bottom), o.controlPointNextX = t(o.controlPointNextX, u.left, u.right), o.controlPointNextY = t(o.controlPointNextY, u.top, u.bottom);
            }
          }, draw: function draw(a) {
            var i,
                n,
                o = this,
                r = o.getMeta(),
                s = r.data || [],
                l = a || 1;for (i = 0, n = s.length; i < n; ++i) {
              s[i].transition(l);
            }for (t.canvasHelpers.clipArea(o.chart.chart.ctx, o.chart.chartArea), e(o.getDataset(), o.chart.options) && r.dataset.transition(l).draw(), t.canvasHelpers.unclipArea(o.chart.chart.ctx), i = 0, n = s.length; i < n; ++i) {
              s[i].draw(o.chart.chartArea);
            }
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;o.radius = n.hoverRadius || a.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor || a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || a.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || a.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = t._model;void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = o.radius || a.getValueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n);
          } });
      };
    }, {}], 19: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.polarArea = { scale: { type: "radialLinear", lineArc: !0, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, aspectRatio: 1, legendCallback: function legendCallback(t) {
            var e = [];e.push('<ul class="' + t.id + '-legend">');var a = t.data,
                i = a.datasets,
                n = a.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
            }return e.push("</ul>"), e.join("");
          }, legend: { labels: { generateLabels: function generateLabels(t) {
                var a = t.data;return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      s = o.data[n],
                      l = s.custom || {},
                      u = e.getValueAtIndexOrDefault,
                      d = t.options.elements.arc,
                      c = l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
                      h = l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
                      f = l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth);return { text: i, fillStyle: c, strokeStyle: h, lineWidth: f, hidden: isNaN(r.data[n]) || o.data[n].hidden, index: n };
                }) : [];
              } }, onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;for (a = 0, i = (r.data.datasets || []).length; a < i; ++a) {
                n = r.getDatasetMeta(a), n.data[o].hidden = !n.data[o].hidden;
              }r.update();
            } }, tooltips: { callbacks: { title: function title() {
                return "";
              }, label: function label(t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              } } } }, t.controllers.polarArea = t.DatasetController.extend({ dataElementType: t.elements.Arc, linkScales: e.noop, update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = a.getMeta(),
                r = i.options,
                s = r.elements.arc,
                l = Math.min(n.right - n.left, n.bottom - n.top);i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), a.outerRadius = i.outerRadius - i.radiusLength * a.index, a.innerRadius = a.outerRadius - i.radiusLength, o.count = a.countVisibleElements(), e.each(o.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          }, updateElement: function updateElement(t, a, i) {
            for (var n = this, o = n.chart, r = n.getDataset(), s = o.options, l = s.animation, u = o.scale, d = e.getValueAtIndexOrDefault, c = o.data.labels, h = n.calculateCircumference(r.data[a]), f = u.xCenter, g = u.yCenter, p = 0, m = n.getMeta(), v = 0; v < a; ++v) {
              isNaN(r.data[v]) || m.data[v].hidden || ++p;
            }var b = s.startAngle,
                x = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[a]),
                y = b + h * p,
                k = y + (t.hidden ? 0 : h),
                S = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[a]);e.extend(t, { _datasetIndex: n.index, _index: a, _scale: u, _model: { x: f, y: g, innerRadius: 0, outerRadius: i ? S : x, startAngle: i && l.animateRotate ? b : y, endAngle: i && l.animateRotate ? b : k, label: d(c, a, c[a]) } }), n.removeHoverStyle(t), t.pivot();
          }, removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          }, countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                a = this.getMeta(),
                i = 0;return e.each(a.data, function (e, a) {
              isNaN(t.data[a]) || e.hidden || i++;
            }), i;
          }, calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          } });
      };
    }, {}], 20: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.radar = { aspectRatio: 1, scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }, t.controllers.radar = t.DatasetController.extend({ datasetElementType: t.elements.Line, dataElementType: t.elements.Point, linkScales: e.noop, update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.dataset,
                o = i.data,
                r = n.custom || {},
                s = a.getDataset(),
                l = a.chart.options.elements.line,
                u = a.chart.scale;void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(i.dataset, { _datasetIndex: a.index, _children: o, _loop: !0, _model: { tension: r.tension ? r.tension : e.getValueOrDefault(s.lineTension, l.tension), backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor, borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth, borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor, fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill, borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle, borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash, borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset, borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle, scaleTop: u.top, scaleBottom: u.bottom, scaleZero: u.getBasePosition() } }), i.dataset.pivot(), e.each(o, function (e, i) {
              a.updateElement(e, i, t);
            }, a), a.updateBezierControlPoints();
          }, updateElement: function updateElement(t, a, i) {
            var n = this,
                o = t.custom || {},
                r = n.getDataset(),
                s = n.chart.scale,
                l = n.chart.options.elements.point,
                u = s.getPointPositionForValue(a, r.data[a]);e.extend(t, { _datasetIndex: n.index, _index: a, _scale: s, _model: { x: i ? s.xCenter : u.x, y: i ? s.yCenter : u.y, tension: o.tension ? o.tension : e.getValueOrDefault(r.lineTension, n.chart.options.elements.line.tension), radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, a, l.radius), backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, a, l.backgroundColor), borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, a, l.borderColor), borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, a, l.borderWidth), pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, a, l.pointStyle), hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, a, l.hitRadius) } }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y);
          }, updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                a = this.getMeta();e.each(a.data, function (i, n) {
              var o = i._model,
                  r = e.splineCurve(e.previousItem(a.data, n, !0)._model, o, e.nextItem(a.data, n, !0)._model, o.tension);o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot();
            });
          }, draw: function draw(t) {
            var a = this.getMeta(),
                i = t || 1;e.each(a.data, function (t) {
              t.transition(i);
            }), a.dataset.transition(i).draw(), e.each(a.data, function (t) {
              t.draw();
            });
          }, setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model;o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(a.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor, n, e.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(a.pointHoverBorderColor, n, e.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(a.pointHoverBorderWidth, n, o.borderWidth);
          }, removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model,
                r = this.chart.options.elements.point;o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(a.radius, n, r.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(a.pointBackgroundColor, n, r.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(a.pointBorderColor, n, r.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(a.pointBorderWidth, n, r.borderWidth);
          } });
      };
    }, {}], 21: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.global.animation = { duration: 1e3, easing: "easeOutQuart", onProgress: e.noop, onComplete: e.noop }, t.Animation = t.Element.extend({ currentStep: null, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), t.animationService = { frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function addAnimation(t, e, a, i) {
            var n = this;i || (t.animating = !0);for (var o = 0; o < n.animations.length; ++o) {
              if (n.animations[o].chartInstance === t) return void (n.animations[o].animationObject = e);
            }n.animations.push({ chartInstance: t, animationObject: e }), 1 === n.animations.length && n.requestAnimationFrame();
          }, cancelAnimation: function cancelAnimation(t) {
            var a = e.findIndex(this.animations, function (e) {
              return e.chartInstance === t;
            });a !== -1 && (this.animations.splice(a, 1), t.animating = !1);
          }, requestAnimationFrame: function requestAnimationFrame() {
            var t = this;null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          }, startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                a = 0;t.dropFrames > 1 && (a = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);for (var i = 0; i < t.animations.length;) {
              null === t.animations[i].animationObject.currentStep && (t.animations[i].animationObject.currentStep = 0), t.animations[i].animationObject.currentStep += 1 + a, t.animations[i].animationObject.currentStep > t.animations[i].animationObject.numSteps && (t.animations[i].animationObject.currentStep = t.animations[i].animationObject.numSteps), t.animations[i].animationObject.render(t.animations[i].chartInstance, t.animations[i].animationObject), t.animations[i].animationObject.onAnimationProgress && t.animations[i].animationObject.onAnimationProgress.call && t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].animationObject.currentStep === t.animations[i].animationObject.numSteps ? (t.animations[i].animationObject.onAnimationComplete && t.animations[i].animationObject.onAnimationComplete.call && t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].chartInstance.animating = !1, t.animations.splice(i, 1)) : ++i;
            }var n = Date.now(),
                o = (n - e) / t.frameDuration;t.dropFrames += o, t.animations.length > 0 && t.requestAnimationFrame();
          } };
      };
    }, {}], 22: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.canvasHelpers = {};e.drawPoint = function (e, a, i, n, o) {
          var r, s, l, u, d, c;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (r = a.toString(), "[object HTMLImageElement]" === r || "[object HTMLCanvasElement]" === r)) return void e.drawImage(a, n - a.width / 2, o - a.height / 2);if (!(isNaN(i) || i <= 0)) {
            switch (a) {default:
                e.beginPath(), e.arc(n, o, i, 0, 2 * Math.PI), e.closePath(), e.fill();break;case "triangle":
                e.beginPath(), s = 3 * i / Math.sqrt(3), d = s * Math.sqrt(3) / 2, e.moveTo(n - s / 2, o + d / 3), e.lineTo(n + s / 2, o + d / 3), e.lineTo(n, o - 2 * d / 3), e.closePath(), e.fill();break;case "rect":
                c = 1 / Math.SQRT2 * i, e.beginPath(), e.fillRect(n - c, o - c, 2 * c, 2 * c), e.strokeRect(n - c, o - c, 2 * c, 2 * c);break;case "rectRounded":
                var h = i / Math.SQRT2,
                    f = n - h,
                    g = o - h,
                    p = Math.SQRT2 * i;t.helpers.drawRoundedRectangle(e, f, g, p, p, i / 2), e.fill();break;case "rectRot":
                c = 1 / Math.SQRT2 * i, e.beginPath(), e.moveTo(n - c, o), e.lineTo(n, o + c), e.lineTo(n + c, o), e.lineTo(n, o - c), e.closePath(), e.fill();break;case "cross":
                e.beginPath(), e.moveTo(n, o + i), e.lineTo(n, o - i), e.moveTo(n - i, o), e.lineTo(n + i, o), e.closePath();break;case "crossRot":
                e.beginPath(), l = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, e.moveTo(n - l, o - u), e.lineTo(n + l, o + u), e.moveTo(n - l, o + u), e.lineTo(n + l, o - u), e.closePath();break;case "star":
                e.beginPath(), e.moveTo(n, o + i), e.lineTo(n, o - i), e.moveTo(n - i, o), e.lineTo(n + i, o), l = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, e.moveTo(n - l, o - u), e.lineTo(n + l, o + u), e.moveTo(n - l, o + u), e.lineTo(n + l, o - u), e.closePath();break;case "line":
                e.beginPath(), e.moveTo(n - i, o), e.lineTo(n + i, o), e.closePath();break;case "dash":
                e.beginPath(), e.moveTo(n, o), e.lineTo(n + i, o), e.closePath();}e.stroke();
          }
        }, e.clipArea = function (t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        }, e.unclipArea = function (t) {
          t.restore();
        };
      };
    }, {}], 23: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(e) {
          e = e || {};var a = e.data = e.data || {};return a.datasets = a.datasets || [], a.labels = a.labels || [], e.options = i.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e;
        }function a(t) {
          var e = t.options;e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function (e) {
            t.scales[e.id].options = e;
          }), t.tooltip._options = e.tooltips;
        }var i = t.helpers,
            n = t.plugins,
            o = t.platform;t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function (a, n, r) {
          var s = this;n = e(n);var l = o.acquireContext(a, n),
              u = l && l.canvas,
              d = u && u.height,
              c = u && u.width;return r.ctx = l, r.canvas = u, r.config = n, r.width = c, r.height = d, r.aspectRatio = d ? c / d : null, s.id = i.uid(), s.chart = r, s.config = n, s.options = n.options, s._bufferedRender = !1, t.instances[s.id] = s, Object.defineProperty(s, "data", { get: function get() {
              return s.config.data;
            } }), l && u ? (s.initialize(), s.update(), s) : (console.error("Failed to create chart: can't acquire context from the given item"), s);
        }, i.extend(t.Controller.prototype, { initialize: function initialize() {
            var t = this;return n.notify(t, "beforeInit"), i.retinaScale(t.chart), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), n.notify(t, "afterInit"), t;
          }, clear: function clear() {
            return i.clear(this.chart), this;
          }, stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          }, resize: function resize(t) {
            var e = this,
                a = e.chart,
                o = e.options,
                r = a.canvas,
                s = o.maintainAspectRatio && a.aspectRatio || null,
                l = Math.floor(i.getMaximumWidth(r)),
                u = Math.floor(s ? l / s : i.getMaximumHeight(r));if ((a.width !== l || a.height !== u) && (r.width = a.width = l, r.height = a.height = u, r.style.width = l + "px", r.style.height = u + "px", i.retinaScale(a), !t)) {
              var d = { width: l, height: u };n.notify(e, "resize", [d]), e.options.onResize && e.options.onResize(e, d), e.stop(), e.update(e.options.responsiveAnimationDuration);
            }
          }, ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                a = t.scale;i.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), i.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), a && (a.id = a.id || "scale");
          }, buildScales: function buildScales() {
            var e = this,
                a = e.options,
                n = e.scales = {},
                o = [];a.scales && (o = o.concat((a.scales.xAxes || []).map(function (t) {
              return { options: t, dtype: "category" };
            }), (a.scales.yAxes || []).map(function (t) {
              return { options: t, dtype: "linear" };
            }))), a.scale && o.push({ options: a.scale, dtype: "radialLinear", isDefault: !0 }), i.each(o, function (a) {
              var o = a.options,
                  r = i.getValueOrDefault(o.type, a.dtype),
                  s = t.scaleService.getScaleConstructor(r);if (s) {
                var l = new s({ id: o.id, options: o, ctx: e.chart.ctx, chart: e });n[l.id] = l, a.isDefault && (e.scale = l);
              }
            }), t.scaleService.addScalesToLayout(this);
          }, buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                a = [],
                n = [];if (i.each(e.data.datasets, function (i, o) {
              var r = e.getDatasetMeta(o);r.type || (r.type = i.type || e.config.type), a.push(r.type), r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](e, o), n.push(r.controller));
            }, e), a.length > 1) for (var o = 1; o < a.length; o++) {
              if (a[o] !== a[o - 1]) {
                e.isCombo = !0;break;
              }
            }return n;
          }, resetElements: function resetElements() {
            var t = this;i.each(t.data.datasets, function (e, a) {
              t.getDatasetMeta(a).controller.reset();
            }, t);
          }, reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          }, update: function update(t, e) {
            var o = this;if (a(o), n.notify(o, "beforeUpdate") !== !1) {
              o.tooltip._data = o.data;var r = o.buildOrUpdateControllers();i.each(o.data.datasets, function (t, e) {
                o.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, o), o.updateLayout(), i.each(r, function (t) {
                t.reset();
              }), o.updateDatasets(), n.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = { lazy: e, duration: t } : o.render(t, e);
            }
          }, updateLayout: function updateLayout() {
            var e = this;n.notify(e, "beforeLayout") !== !1 && (t.layoutService.update(this, this.chart.width, this.chart.height), n.notify(e, "afterScaleUpdate"), n.notify(e, "afterLayout"));
          }, updateDatasets: function updateDatasets() {
            var t = this;if (n.notify(t, "beforeDatasetsUpdate") !== !1) {
              for (var e = 0, a = t.data.datasets.length; e < a; ++e) {
                t.getDatasetMeta(e).controller.update();
              }n.notify(t, "afterDatasetsUpdate");
            }
          }, render: function render(e, a) {
            var o = this;if (n.notify(o, "beforeRender") !== !1) {
              var r = o.options.animation,
                  s = function s() {
                n.notify(o, "afterRender");var t = r && r.onComplete;t && t.call && t.call(o);
              };if (r && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== r.duration)) {
                var l = new t.Animation();l.numSteps = (e || r.duration) / 16.66, l.easing = r.easing, l.render = function (t, e) {
                  var a = i.easingEffects[e.easing],
                      n = e.currentStep / e.numSteps,
                      o = a(n);t.draw(o, n, e.currentStep);
                }, l.onAnimationProgress = r.onProgress, l.onAnimationComplete = s, t.animationService.addAnimation(o, l, e, a);
              } else o.draw(), s();return o;
            }
          }, draw: function draw(t) {
            var e = this;e.clear(), void 0 !== t && null !== t || (t = 1), n.notify(e, "beforeDraw", [t]) !== !1 && (i.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e.tooltip.transition(t).draw(), n.notify(e, "afterDraw", [t]));
          }, drawDatasets: function drawDatasets(t) {
            var e = this;n.notify(e, "beforeDatasetsDraw", [t]) !== !1 && (i.each(e.data.datasets, function (a, i) {
              e.isDatasetVisible(i) && e.getDatasetMeta(i).controller.draw(t);
            }, e, !0), n.notify(e, "afterDatasetsDraw", [t]));
          }, getElementAtEvent: function getElementAtEvent(e) {
            return t.Interaction.modes.single(this, e);
          }, getElementsAtEvent: function getElementsAtEvent(e) {
            return t.Interaction.modes.label(this, e, { intersect: !0 });
          }, getElementsAtXAxis: function getElementsAtXAxis(e) {
            return t.Interaction.modes["x-axis"](this, e, { intersect: !0 });
          }, getElementsAtEventForMode: function getElementsAtEventForMode(e, a, i) {
            var n = t.Interaction.modes[a];return "function" == typeof n ? n(this, e, i) : [];
          }, getDatasetAtEvent: function getDatasetAtEvent(e) {
            return t.Interaction.modes.dataset(this, e, { intersect: !0 });
          }, getDatasetMeta: function getDatasetMeta(t) {
            var e = this,
                a = e.data.datasets[t];a._meta || (a._meta = {});var i = a._meta[e.id];return i || (i = a._meta[e.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), i;
          }, getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, a = this.data.datasets.length; e < a; ++e) {
              this.isDatasetVisible(e) && t++;
            }return t;
          }, isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          }, generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          }, destroy: function destroy() {
            var e,
                a,
                r,
                s = this,
                l = s.chart.canvas;for (s.stop(), a = 0, r = s.data.datasets.length; a < r; ++a) {
              e = s.getDatasetMeta(a), e.controller && (e.controller.destroy(), e.controller = null);
            }l && (s.unbindEvents(), i.clear(s.chart), o.releaseContext(s.chart.ctx), s.chart.canvas = null, s.chart.ctx = null), n.notify(s, "destroy"), delete t.instances[s.id];
          }, toBase64Image: function toBase64Image() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
          }, initToolTip: function initToolTip() {
            var e = this;e.tooltip = new t.Tooltip({ _chart: e.chart, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e), e.tooltip.initialize();
          }, bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                a = function a() {
              t.eventHandler.apply(t, arguments);
            };i.each(t.options.events, function (i) {
              o.addEventListener(t, i, a), e[i] = a;
            }), t.options.responsive && (a = function a() {
              t.resize();
            }, o.addEventListener(t, "resize", a), e.resize = a);
          }, unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;e && (delete t._listeners, i.each(e, function (e, a) {
              o.removeEventListener(t, a, e);
            }));
          }, updateHoverStyle: function updateHoverStyle(t, e, a) {
            var i,
                n,
                o,
                r = a ? "setHoverStyle" : "removeHoverStyle";for (n = 0, o = t.length; n < o; ++n) {
              i = t[n], i && this.getDatasetMeta(i._datasetIndex).controller[r](i);
            }
          }, eventHandler: function eventHandler(t) {
            var e = this,
                a = e.tooltip;if (n.notify(e, "beforeEvent", [t]) !== !1) {
              e._bufferedRender = !0, e._bufferedRequest = null;var i = e.handleEvent(t);i |= a && a.handleEvent(t), n.notify(e, "afterEvent", [t]);var o = e._bufferedRequest;return o ? e.render(o.duration, o.lazy) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          }, handleEvent: function handleEvent(t) {
            var e = this,
                a = e.options || {},
                n = a.hover,
                o = !1;return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, n.mode, n), n.onHover && n.onHover.call(e, t.native, e.active), "mouseup" !== t.type && "click" !== t.type || a.onClick && a.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, n.mode, !1), e.active.length && n.mode && e.updateHoverStyle(e.active, n.mode, !0), o = !i.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, o;
          } });
      };
    }, {}], 24: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), void n.forEach(function (e) {
            var a = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                n = t[e];Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function value() {
                var e = Array.prototype.slice.call(arguments),
                    o = n.apply(this, e);return i.each(t._chartjs.listeners, function (t) {
                  "function" == typeof t[a] && t[a].apply(t, e);
                }), o;
              } });
          }));
        }function a(t, e) {
          var a = t._chartjs;if (a) {
            var i = a.listeners,
                o = i.indexOf(e);o !== -1 && i.splice(o, 1), i.length > 0 || (n.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }var i = t.helpers,
            n = ["push", "pop", "shift", "splice", "unshift"];t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, i.extend(t.DatasetController.prototype, { datasetElementType: null, dataElementType: null, initialize: function initialize(t, e) {
            var a = this;a.chart = t, a.index = e, a.linkScales(), a.addElements();
          }, updateIndex: function updateIndex(t) {
            this.index = t;
          }, linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                a = t.getDataset();null === e.xAxisID && (e.xAxisID = a.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = a.yAxisID || t.chart.options.scales.yAxes[0].id);
          }, getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          }, getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }, getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          }, reset: function reset() {
            this.update(!0);
          }, destroy: function destroy() {
            this._data && a(this._data, this);
          }, createMetaDataset: function createMetaDataset() {
            var t = this,
                e = t.datasetElementType;return e && new e({ _chart: t.chart.chart, _datasetIndex: t.index });
          }, createMetaData: function createMetaData(t) {
            var e = this,
                a = e.dataElementType;return a && new a({ _chart: e.chart.chart, _datasetIndex: e.index, _index: t });
          }, addElements: function addElements() {
            var t,
                e,
                a = this,
                i = a.getMeta(),
                n = a.getDataset().data || [],
                o = i.data;for (t = 0, e = n.length; t < e; ++t) {
              o[t] = o[t] || a.createMetaData(t);
            }i.dataset = i.dataset || a.createMetaDataset();
          }, addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          }, buildOrUpdateElements: function buildOrUpdateElements() {
            var t = this,
                i = t.getDataset(),
                n = i.data || (i.data = []);t._data !== n && (t._data && a(t._data, t), e(n, t), t._data = n), t.resyncElements();
          }, update: i.noop, draw: function draw(t) {
            var e,
                a,
                i = t || 1,
                n = this.getMeta().data;for (e = 0, a = n.length; e < a; ++e) {
              n[e].transition(i).draw();
            }
          }, removeHoverStyle: function removeHoverStyle(t, e) {
            var a = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = i.getValueAtIndexOrDefault,
                s = t._model;s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(a.backgroundColor, n, e.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(a.borderColor, n, e.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(a.borderWidth, n, e.borderWidth);
          }, setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                n = t.custom || {},
                o = i.getValueAtIndexOrDefault,
                r = i.getHoverColor,
                s = t._model;s.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o(e.hoverBackgroundColor, a, r(s.backgroundColor)), s.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o(e.hoverBorderColor, a, r(s.borderColor)), s.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o(e.hoverBorderWidth, a, s.borderWidth);
          }, resyncElements: function resyncElements() {
            var t = this,
                e = t.getMeta(),
                a = t.getDataset().data,
                i = e.data.length,
                n = a.length;n < i ? e.data.splice(n, i - n) : n > i && t.insertElements(i, n - i);
          }, insertElements: function insertElements(t, e) {
            for (var a = 0; a < e; ++a) {
              this.addElementAndReset(t + a);
            }
          }, onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          }, onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          }, onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          }, onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          }, onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          } }), t.DatasetController.extend = i.inherits;
      };
    }, {}], 25: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.elements = {}, t.Element = function (t) {
          e.extend(this, t), this.initialize.apply(this, arguments);
        }, e.extend(t.Element.prototype, { initialize: function initialize() {
            this.hidden = !1;
          }, pivot: function pivot() {
            var t = this;return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t;
          }, transition: function transition(t) {
            var a = this;return a._view || (a._view = e.clone(a._model)), 1 === t ? (a._view = a._model, a._start = null, a) : (a._start || a.pivot(), e.each(a._model, function (i, n) {
              if ("_" === n[0]) ;else if (a._view.hasOwnProperty(n)) {
                if (i === a._view[n]) ;else if ("string" == typeof i) try {
                  var o = e.color(a._model[n]).mix(e.color(a._start[n]), t);a._view[n] = o.rgbString();
                } catch (t) {
                  a._view[n] = i;
                } else if ("number" == typeof i) {
                  var r = void 0 !== a._start[n] && isNaN(a._start[n]) === !1 ? a._start[n] : 0;a._view[n] = (a._model[n] - r) * t + r;
                } else a._view[n] = i;
              } else "number" != typeof i || isNaN(a._view[n]) ? a._view[n] = i : a._view[n] = i * t;
            }, a), a);
          }, tooltipPosition: function tooltipPosition() {
            return { x: this._model.x, y: this._model.y };
          }, hasValue: function hasValue() {
            return e.isNumber(this._model.x) && e.isNumber(this._model.y);
          } }), t.Element.extend = e.inherits;
      };
    }, {}], 26: [function (t, e, a) {
      "use strict";
      var i = t(3);e.exports = function (t) {
        function e(t, e, a) {
          var i;return "string" == typeof t ? (i = parseInt(t, 10), t.indexOf("%") !== -1 && (i = i / 100 * e.parentNode[a])) : i = t, i;
        }function a(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }function n(t, i, n) {
          var o = document.defaultView,
              r = t.parentNode,
              s = o.getComputedStyle(t)[i],
              l = o.getComputedStyle(r)[i],
              u = a(s),
              d = a(l),
              c = Number.POSITIVE_INFINITY;return u || d ? Math.min(u ? e(s, t, n) : c, d ? e(l, r, n) : c) : "none";
        }var o = t.helpers = {};o.each = function (t, e, a, i) {
          var n, r;if (o.isArray(t)) {
            if (r = t.length, i) for (n = r - 1; n >= 0; n--) {
              e.call(a, t[n], n);
            } else for (n = 0; n < r; n++) {
              e.call(a, t[n], n);
            }
          } else if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
            var s = Object.keys(t);for (r = s.length, n = 0; n < r; n++) {
              e.call(a, t[s[n]], s[n]);
            }
          }
        }, o.clone = function (t) {
          var e = {};return o.each(t, function (t, a) {
            o.isArray(t) ? e[a] = t.slice(0) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t ? e[a] = o.clone(t) : e[a] = t;
          }), e;
        }, o.extend = function (t) {
          for (var e = function e(_e, a) {
            t[a] = _e;
          }, a = 1, i = arguments.length; a < i; a++) {
            o.each(arguments[a], e);
          }return t;
        }, o.configMerge = function (e) {
          var a = o.clone(e);return o.each(Array.prototype.slice.call(arguments, 1), function (e) {
            o.each(e, function (e, i) {
              var n = a.hasOwnProperty(i),
                  r = n ? a[i] : {};"scales" === i ? a[i] = o.scaleMerge(r, e) : "scale" === i ? a[i] = o.configMerge(r, t.scaleService.getScaleDefaults(e.type), e) : !n || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) || o.isArray(r) || null === r || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || o.isArray(e) ? a[i] = e : a[i] = o.configMerge(r, e);
            });
          }), a;
        }, o.scaleMerge = function (e, a) {
          var i = o.clone(e);return o.each(a, function (e, a) {
            "xAxes" === a || "yAxes" === a ? i.hasOwnProperty(a) ? o.each(e, function (e, n) {
              var r = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear"),
                  s = t.scaleService.getScaleDefaults(r);n >= i[a].length || !i[a][n].type ? i[a].push(o.configMerge(s, e)) : e.type && e.type !== i[a][n].type ? i[a][n] = o.configMerge(i[a][n], s, e) : i[a][n] = o.configMerge(i[a][n], e);
            }) : (i[a] = [], o.each(e, function (e) {
              var n = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear");i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n), e));
            })) : i.hasOwnProperty(a) && "object" == _typeof(i[a]) && null !== i[a] && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? i[a] = o.configMerge(i[a], e) : i[a] = e;
          }), i;
        }, o.getValueAtIndexOrDefault = function (t, e, a) {
          return void 0 === t || null === t ? a : o.isArray(t) ? e < t.length ? t[e] : a : t;
        }, o.getValueOrDefault = function (t, e) {
          return void 0 === t ? e : t;
        }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
          return t.indexOf(e);
        } : function (t, e) {
          for (var a = 0, i = t.length; a < i; ++a) {
            if (t[a] === e) return a;
          }return -1;
        }, o.where = function (t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);var a = [];return o.each(t, function (t) {
            e(t) && a.push(t);
          }), a;
        }, o.findIndex = Array.prototype.findIndex ? function (t, e, a) {
          return t.findIndex(e, a);
        } : function (t, e, a) {
          a = void 0 === a ? t : a;for (var i = 0, n = t.length; i < n; ++i) {
            if (e.call(a, t[i], i, t)) return i;
          }return -1;
        }, o.findNextWhere = function (t, e, a) {
          void 0 !== a && null !== a || (a = -1);for (var i = a + 1; i < t.length; i++) {
            var n = t[i];if (e(n)) return n;
          }
        }, o.findPreviousWhere = function (t, e, a) {
          void 0 !== a && null !== a || (a = t.length);for (var i = a - 1; i >= 0; i--) {
            var n = t[i];if (e(n)) return n;
          }
        }, o.inherits = function (t) {
          var e = this,
              a = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = a;
          };return i.prototype = e.prototype, a.prototype = new i(), a.extend = o.inherits, t && o.extend(a.prototype, t), a.__super__ = e.prototype, a;
        }, o.noop = function () {}, o.uid = function () {
          var t = 0;return function () {
            return t++;
          };
        }(), o.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, o.almostEquals = function (t, e, a) {
          return Math.abs(t - e) < a;
        }, o.almostWhole = function (t, e) {
          var a = Math.round(t);return a - e < t && a + e > t;
        }, o.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, o.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, o.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, o.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          return Math.log(t) / Math.LN10;
        }, o.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, o.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, o.getAngleFromPoint = function (t, e) {
          var a = e.x - t.x,
              i = e.y - t.y,
              n = Math.sqrt(a * a + i * i),
              o = Math.atan2(i, a);return o < -.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: n };
        }, o.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, o.aliasPixel = function (t) {
          return t % 2 === 0 ? 0 : .5;
        }, o.splineCurve = function (t, e, a, i) {
          var n = t.skip ? e : t,
              o = e,
              r = a.skip ? e : a,
              s = Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2)),
              l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              u = s / (s + l),
              d = l / (s + l);u = isNaN(u) ? 0 : u, d = isNaN(d) ? 0 : d;var c = i * u,
              h = i * d;return { previous: { x: o.x - c * (r.x - n.x), y: o.y - c * (r.y - n.y) }, next: { x: o.x + h * (r.x - n.x), y: o.y + h * (r.y - n.y) } };
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
          var e,
              a,
              i,
              n,
              r = (t || []).map(function (t) {
            return { model: t._model, deltaK: 0, mK: 0 };
          }),
              s = r.length;for (e = 0; e < s; ++e) {
            if (i = r[e], !i.model.skip) {
              if (a = e > 0 ? r[e - 1] : null, n = e < s - 1 ? r[e + 1] : null, n && !n.model.skip) {
                var l = n.model.x - i.model.x;i.deltaK = 0 !== l ? (n.model.y - i.model.y) / l : 0;
              }!a || a.model.skip ? i.mK = i.deltaK : !n || n.model.skip ? i.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (a.deltaK + i.deltaK) / 2;
            }
          }var u, d, c, h;for (e = 0; e < s - 1; ++e) {
            i = r[e], n = r[e + 1], i.model.skip || n.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = n.mK = 0 : (u = i.mK / i.deltaK, d = n.mK / i.deltaK, h = Math.pow(u, 2) + Math.pow(d, 2), h <= 9 || (c = 3 / Math.sqrt(h), i.mK = u * c * i.deltaK, n.mK = d * c * i.deltaK)));
          }var f;for (e = 0; e < s; ++e) {
            i = r[e], i.model.skip || (a = e > 0 ? r[e - 1] : null, n = e < s - 1 ? r[e + 1] : null, a && !a.model.skip && (f = (i.model.x - a.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), n && !n.model.skip && (f = (n.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK));
          }
        }, o.nextItem = function (t, e, a) {
          return a ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, o.previousItem = function (t, e, a) {
          return a ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, o.niceNum = function (t, e) {
          var a,
              i = Math.floor(o.log10(t)),
              n = t / Math.pow(10, i);return a = e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10, a * Math.pow(10, i);
        };var r = o.easingEffects = { linear: function linear(t) {
            return t;
          }, easeInQuad: function easeInQuad(t) {
            return t * t;
          }, easeOutQuad: function easeOutQuad(t) {
            return -1 * t * (t - 2);
          }, easeInOutQuad: function easeInOutQuad(t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
          }, easeInCubic: function easeInCubic(t) {
            return t * t * t;
          }, easeOutCubic: function easeOutCubic(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
          }, easeInOutCubic: function easeInOutCubic(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          }, easeInQuart: function easeInQuart(t) {
            return t * t * t * t;
          }, easeOutQuart: function easeOutQuart(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
          }, easeInOutQuart: function easeInOutQuart(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
          }, easeInQuint: function easeInQuint(t) {
            return 1 * (t /= 1) * t * t * t * t;
          }, easeOutQuint: function easeOutQuint(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
          }, easeInOutQuint: function easeInOutQuint(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          }, easeInSine: function easeInSine(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
          }, easeOutSine: function easeOutSine(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
          }, easeInOutSine: function easeInOutSine(t) {
            return -.5 * (Math.cos(Math.PI * t / 1) - 1);
          }, easeInExpo: function easeInExpo(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
          }, easeOutExpo: function easeOutExpo(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
          }, easeInOutExpo: function easeInOutExpo(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
          }, easeInCirc: function easeInCirc(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
          }, easeOutCirc: function easeOutCirc(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
          }, easeInOutCirc: function easeInOutCirc(t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          }, easeInElastic: function easeInElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)));
          }, easeOutElastic: function easeOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / a) + 1);
          }, easeInOutElastic: function easeInOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (a || (a = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a) * .5 + 1);
          }, easeInBack: function easeInBack(t) {
            var e = 1.70158;return 1 * (t /= 1) * t * ((e + 1) * t - e);
          }, easeOutBack: function easeOutBack(t) {
            var e = 1.70158;return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
          }, easeInOutBack: function easeInOutBack(t) {
            var e = 1.70158;return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
          }, easeInBounce: function easeInBounce(t) {
            return 1 - r.easeOutBounce(1 - t);
          }, easeOutBounce: function easeOutBounce(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
          }, easeInOutBounce: function easeInOutBounce(t) {
            return t < .5 ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5;
          } };o.requestAnimFrame = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(t, 1e3 / 60);
          };
        }(), o.getRelativePosition = function (t, e) {
          var a,
              i,
              n = t.originalEvent || t,
              r = t.currentTarget || t.srcElement,
              s = r.getBoundingClientRect(),
              l = n.touches;l && l.length > 0 ? (a = l[0].clientX, i = l[0].clientY) : (a = n.clientX, i = n.clientY);var u = parseFloat(o.getStyle(r, "padding-left")),
              d = parseFloat(o.getStyle(r, "padding-top")),
              c = parseFloat(o.getStyle(r, "padding-right")),
              h = parseFloat(o.getStyle(r, "padding-bottom")),
              f = s.right - s.left - u - c,
              g = s.bottom - s.top - d - h;return a = Math.round((a - s.left - u) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - s.top - d) / g * r.height / e.currentDevicePixelRatio), { x: a, y: i };
        }, o.addEvent = function (t, e, a) {
          t.addEventListener ? t.addEventListener(e, a) : t.attachEvent ? t.attachEvent("on" + e, a) : t["on" + e] = a;
        }, o.removeEvent = function (t, e, a) {
          t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent ? t.detachEvent("on" + e, a) : t["on" + e] = o.noop;
        }, o.getConstraintWidth = function (t) {
          return n(t, "max-width", "clientWidth");
        }, o.getConstraintHeight = function (t) {
          return n(t, "max-height", "clientHeight");
        }, o.getMaximumWidth = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-left"), 10),
              i = parseInt(o.getStyle(e, "padding-right"), 10),
              n = e.clientWidth - a - i,
              r = o.getConstraintWidth(t);return isNaN(r) ? n : Math.min(n, r);
        }, o.getMaximumHeight = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-top"), 10),
              i = parseInt(o.getStyle(e, "padding-bottom"), 10),
              n = e.clientHeight - a - i,
              r = o.getConstraintHeight(t);return isNaN(r) ? n : Math.min(n, r);
        }, o.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, o.retinaScale = function (t) {
          var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;if (1 !== e) {
            var a = t.canvas,
                i = t.height,
                n = t.width;a.height = i * e, a.width = n * e, t.ctx.scale(e, e), a.style.height = i + "px", a.style.width = n + "px";
          }
        }, o.clear = function (t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        }, o.fontString = function (t, e, a) {
          return e + " " + t + "px " + a;
        }, o.longestText = function (t, e, a, i) {
          i = i || {};var n = i.data = i.data || {},
              r = i.garbageCollect = i.garbageCollect || [];i.font !== e && (n = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;var s = 0;o.each(a, function (e) {
            void 0 !== e && null !== e && o.isArray(e) !== !0 ? s = o.measureText(t, n, r, s, e) : o.isArray(e) && o.each(e, function (e) {
              void 0 === e || null === e || o.isArray(e) || (s = o.measureText(t, n, r, s, e));
            });
          });var l = r.length / 2;if (l > a.length) {
            for (var u = 0; u < l; u++) {
              delete n[r[u]];
            }r.splice(0, l);
          }return s;
        }, o.measureText = function (t, e, a, i, n) {
          var o = e[n];return o || (o = e[n] = t.measureText(n).width, a.push(n)), o > i && (i = o), i;
        }, o.numberOfLabelLines = function (t) {
          var e = 1;return o.each(t, function (t) {
            o.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, o.drawRoundedRectangle = function (t, e, a, i, n, o) {
          t.beginPath(), t.moveTo(e + o, a), t.lineTo(e + i - o, a), t.quadraticCurveTo(e + i, a, e + i, a + o), t.lineTo(e + i, a + n - o), t.quadraticCurveTo(e + i, a + n, e + i - o, a + n), t.lineTo(e + o, a + n), t.quadraticCurveTo(e, a + n, e, a + n - o), t.lineTo(e, a + o), t.quadraticCurveTo(e, a, e + o, a), t.closePath();
        }, o.color = function (e) {
          return i ? i(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e);
        }, o.isArray = Array.isArray ? function (t) {
          return Array.isArray(t);
        } : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }, o.arrayEquals = function (t, e) {
          var a, i, n, r;if (!t || !e || t.length !== e.length) return !1;for (a = 0, i = t.length; a < i; ++a) {
            if (n = t[a], r = e[a], n instanceof Array && r instanceof Array) {
              if (!o.arrayEquals(n, r)) return !1;
            } else if (n !== r) return !1;
          }return !0;
        }, o.callCallback = function (t, e, a) {
          t && "function" == typeof t.call && t.apply(a, e);
        }, o.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, { 3: 3 }], 27: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          return t.native ? { x: t.x, y: t.y } : r.getRelativePosition(t, e);
        }function a(t, e) {
          var a,
              i,
              n,
              o,
              r,
              s = t.data.datasets;for (i = 0, o = s.length; i < o; ++i) {
            if (t.isDatasetVisible(i)) for (a = t.getDatasetMeta(i), n = 0, r = a.data.length; n < r; ++n) {
              var l = a.data[n];l._view.skip || e(l);
            }
          }
        }function i(t, e) {
          var i = [];return a(t, function (t) {
            t.inRange(e.x, e.y) && i.push(t);
          }), i;
        }function n(t, e, i, n) {
          var o = Number.POSITIVE_INFINITY,
              s = [];return n || (n = r.distanceBetweenPoints), a(t, function (t) {
            if (!i || t.inRange(e.x, e.y)) {
              var a = t.getCenterPoint(),
                  r = n(e, a);r < o ? (s = [t], o = r) : r === o && s.push(t);
            }
          }), s;
        }function o(t, a, o) {
          var r = e(a, t.chart),
              s = function s(t, e) {
            return Math.abs(t.x - e.x);
          },
              l = o.intersect ? i(t, r) : n(t, r, !1, s),
              u = [];return l.length ? (t.data.datasets.forEach(function (e, a) {
            if (t.isDatasetVisible(a)) {
              var i = t.getDatasetMeta(a),
                  n = i.data[l[0]._index];n && !n._view.skip && u.push(n);
            }
          }), u) : [];
        }var r = t.helpers;t.Interaction = { modes: { single: function single(t, i) {
              var n = e(i, t.chart),
                  o = [];return a(t, function (t) {
                if (t.inRange(n.x, n.y)) return o.push(t), o;
              }), o.slice(0, 1);
            }, label: o, index: o, dataset: function dataset(t, a, o) {
              var r = e(a, t.chart),
                  s = o.intersect ? i(t, r) : n(t, r, !1);return s.length > 0 && (s = t.getDatasetMeta(s[0]._datasetIndex).data), s;
            }, "x-axis": function xAxis(t, e) {
              return o(t, e, !0);
            }, point: function point(t, a) {
              var n = e(a, t.chart);return i(t, n);
            }, nearest: function nearest(t, a, i) {
              var o = e(a, t.chart),
                  r = n(t, o, i.intersect);return r.length > 1 && r.sort(function (t, e) {
                var a = t.getArea(),
                    i = e.getArea(),
                    n = a - i;return 0 === n && (n = t._datasetIndex - e._datasetIndex), n;
              }), r.slice(0, 1);
            }, x: function x(t, i, n) {
              var o = e(i, t.chart),
                  r = [],
                  s = !1;return a(t, function (t) {
                t.inXRange(o.x) && r.push(t), t.inRange(o.x, o.y) && (s = !0);
              }), n.intersect && !s && (r = []), r;
            }, y: function y(t, i, n) {
              var o = e(i, t.chart),
                  r = [],
                  s = !1;return a(t, function (t) {
                t.inYRange(o.y) && r.push(t), t.inRange(o.x, o.y) && (s = !0);
              }), n.intersect && !s && (r = []), r;
            } } };
      };
    }, {}], 28: [function (t, e, a) {
      "use strict";
      e.exports = function () {
        var t = function t(e, a) {
          return this.controller = new t.Controller(e, a, this), this.controller;
        };return t.defaults = { global: { responsive: !0, responsiveAnimationDuration: 0, maintainAspectRatio: !0, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", showLines: !0, elements: {}, legendCallback: function legendCallback(t) {
              var e = [];e.push('<ul class="' + t.id + '-legend">');for (var a = 0; a < t.data.datasets.length; a++) {
                e.push('<li><span style="background-color:' + t.data.datasets[a].backgroundColor + '"></span>'), t.data.datasets[a].label && e.push(t.data.datasets[a].label), e.push("</li>");
              }return e.push("</ul>"), e.join("");
            } } }, t.Chart = t, t;
      };
    }, {}], 29: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.layoutService = { defaults: {}, addBox: function addBox(t, e) {
            t.boxes || (t.boxes = []), t.boxes.push(e);
          }, removeBox: function removeBox(t, e) {
            t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1);
          }, update: function update(t, a, i) {
            function n(t) {
              var e,
                  a = t.isHorizontal();a ? (e = t.update(t.options.fullWidth ? x : C, w), I -= e.height) : (e = t.update(M, S), C -= e.width), D.push({ horizontal: a, minSize: e, box: t });
            }function o(t) {
              var a = e.findNextWhere(D, function (e) {
                return e.box === t;
              });if (a) if (t.isHorizontal()) {
                var i = { left: Math.max(F, A), right: Math.max(V, T), top: 0, bottom: 0 };t.update(t.options.fullWidth ? x : C, y / 2, i);
              } else t.update(a.minSize.width, I);
            }function r(t) {
              var a = e.findNextWhere(D, function (e) {
                return e.box === t;
              }),
                  i = { left: 0, right: 0, top: R, bottom: O };a && t.update(a.minSize.width, I, i);
            }function s(t) {
              t.isHorizontal() ? (t.left = t.options.fullWidth ? d : F, t.right = t.options.fullWidth ? a - c : F + C, t.top = E, t.bottom = E + t.height, E = t.bottom) : (t.left = N, t.right = N + t.width, t.top = R, t.bottom = R + I, N = t.right);
            }if (t) {
              var l = t.options.layout,
                  u = l ? l.padding : null,
                  d = 0,
                  c = 0,
                  h = 0,
                  f = 0;isNaN(u) ? (d = u.left || 0, c = u.right || 0, h = u.top || 0, f = u.bottom || 0) : (d = u, c = u, h = u, f = u);var g = e.where(t.boxes, function (t) {
                return "left" === t.options.position;
              }),
                  p = e.where(t.boxes, function (t) {
                return "right" === t.options.position;
              }),
                  m = e.where(t.boxes, function (t) {
                return "top" === t.options.position;
              }),
                  v = e.where(t.boxes, function (t) {
                return "bottom" === t.options.position;
              }),
                  b = e.where(t.boxes, function (t) {
                return "chartArea" === t.options.position;
              });m.sort(function (t, e) {
                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0);
              }), v.sort(function (t, e) {
                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0);
              });var x = a - d - c,
                  y = i - h - f,
                  k = x / 2,
                  S = y / 2,
                  M = (a - k) / (g.length + p.length),
                  w = (i - S) / (m.length + v.length),
                  C = x,
                  I = y,
                  D = [];e.each(g.concat(p, m, v), n);var A = 0,
                  T = 0,
                  P = 0,
                  _ = 0;e.each(m.concat(v), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();A = Math.max(A, e.left), T = Math.max(T, e.right);
                }
              }), e.each(g.concat(p), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();P = Math.max(P, e.top), _ = Math.max(_, e.bottom);
                }
              });var F = d,
                  V = c,
                  R = h,
                  O = f;e.each(g.concat(p), o), e.each(g, function (t) {
                F += t.width;
              }), e.each(p, function (t) {
                V += t.width;
              }), e.each(m.concat(v), o), e.each(m, function (t) {
                R += t.height;
              }), e.each(v, function (t) {
                O += t.height;
              }), e.each(g.concat(p), r), F = d, V = c, R = h, O = f, e.each(g, function (t) {
                F += t.width;
              }), e.each(p, function (t) {
                V += t.width;
              }), e.each(m, function (t) {
                R += t.height;
              }), e.each(v, function (t) {
                O += t.height;
              });var L = Math.max(A - F, 0);F += L, V += Math.max(T - V, 0);var B = Math.max(P - R, 0);R += B, O += Math.max(_ - O, 0);var z = i - R - O,
                  W = a - F - V;W === C && z === I || (e.each(g, function (t) {
                t.height = z;
              }), e.each(p, function (t) {
                t.height = z;
              }), e.each(m, function (t) {
                t.options.fullWidth || (t.width = W);
              }), e.each(v, function (t) {
                t.options.fullWidth || (t.width = W);
              }), I = z, C = W);var N = d + L,
                  E = h + B;e.each(g.concat(m), s), N += C, E += I, e.each(p, s), e.each(v, s), t.chartArea = { left: F, top: R, right: F + C, bottom: R + I }, e.each(b, function (e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(C, I);
              });
            }
          } };
      };
    }, {}], 30: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
        }function a(e, a) {
          var i = new t.Legend({ ctx: e.chart.ctx, options: a, chart: e });e.legend = i, t.layoutService.addBox(e, i);
        }var i = t.helpers,
            n = i.noop;t.defaults.global.legend = { display: !0, position: "top", fullWidth: !0, reverse: !1, onClick: function onClick(t, e) {
            var a = e.datasetIndex,
                i = this.chart,
                n = i.getDatasetMeta(a);n.hidden = null === n.hidden ? !i.data.datasets[a].hidden : null, i.update();
          }, onHover: null, labels: { boxWidth: 40, padding: 10, generateLabels: function generateLabels(t) {
              var e = t.data;return i.isArray(e.datasets) ? e.datasets.map(function (e, a) {
                return { text: e.label, fillStyle: i.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(a), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: a };
              }, this) : [];
            } } }, t.Legend = t.Element.extend({ initialize: function initialize(t) {
            i.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
          }, beforeUpdate: n, update: function update(t, e, a) {
            var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          }, afterUpdate: n, beforeSetDimensions: n, setDimensions: function setDimensions() {
            var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
          }, afterSetDimensions: n, beforeBuildLabels: n, buildLabels: function buildLabels() {
            var t = this,
                e = t.options.labels,
                a = e.generateLabels.call(t, t.chart);e.filter && (a = a.filter(function (a) {
              return e.filter(a, t.chart.data);
            })), t.options.reverse && a.reverse(), t.legendItems = a;
          }, afterBuildLabels: n, beforeFit: n, fit: function fit() {
            var a = this,
                n = a.options,
                o = n.labels,
                r = n.display,
                s = a.ctx,
                l = t.defaults.global,
                u = i.getValueOrDefault,
                d = u(o.fontSize, l.defaultFontSize),
                c = u(o.fontStyle, l.defaultFontStyle),
                h = u(o.fontFamily, l.defaultFontFamily),
                f = i.fontString(d, c, h),
                g = a.legendHitBoxes = [],
                p = a.minSize,
                m = a.isHorizontal();if (m ? (p.width = a.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = a.maxHeight), r) if (s.font = f, m) {
              var v = a.lineWidths = [0],
                  b = a.legendItems.length ? d + o.padding : 0;s.textAlign = "left", s.textBaseline = "top", i.each(a.legendItems, function (t, i) {
                var n = e(o, d),
                    r = n + d / 2 + s.measureText(t.text).width;v[v.length - 1] + r + o.padding >= a.width && (b += d + o.padding, v[v.length] = a.left), g[i] = { left: 0, top: 0, width: r, height: d }, v[v.length - 1] += r + o.padding;
              }), p.height += b;
            } else {
              var x = o.padding,
                  y = a.columnWidths = [],
                  k = o.padding,
                  S = 0,
                  M = 0,
                  w = d + x;i.each(a.legendItems, function (t, a) {
                var i = e(o, d),
                    n = i + d / 2 + s.measureText(t.text).width;M + w > p.height && (k += S + o.padding, y.push(S), S = 0, M = 0), S = Math.max(S, n), M += w, g[a] = { left: 0, top: 0, width: n, height: d };
              }), k += S, y.push(S), p.width += k;
            }a.width = p.width, a.height = p.height;
          }, afterFit: n, isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          }, draw: function draw() {
            var a = this,
                n = a.options,
                o = n.labels,
                r = t.defaults.global,
                s = r.elements.line,
                l = a.width,
                u = a.lineWidths;if (n.display) {
              var d,
                  c = a.ctx,
                  h = i.getValueOrDefault,
                  f = h(o.fontColor, r.defaultFontColor),
                  g = h(o.fontSize, r.defaultFontSize),
                  p = h(o.fontStyle, r.defaultFontStyle),
                  m = h(o.fontFamily, r.defaultFontFamily),
                  v = i.fontString(g, p, m);c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;var b = e(o, g),
                  x = a.legendHitBoxes,
                  y = function y(e, a, i) {
                if (!(isNaN(b) || b <= 0)) {
                  c.save(), c.fillStyle = h(i.fillStyle, r.defaultColor), c.lineCap = h(i.lineCap, s.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, s.borderDashOffset), c.lineJoin = h(i.lineJoin, s.borderJoinStyle), c.lineWidth = h(i.lineWidth, s.borderWidth), c.strokeStyle = h(i.strokeStyle, r.defaultColor);var o = 0 === h(i.lineWidth, s.borderWidth);if (c.setLineDash && c.setLineDash(h(i.lineDash, s.borderDash)), n.labels && n.labels.usePointStyle) {
                    var l = g * Math.SQRT2 / 2,
                        u = l / Math.SQRT2,
                        d = e + u,
                        f = a + u;t.canvasHelpers.drawPoint(c, i.pointStyle, l, d, f);
                  } else o || c.strokeRect(e, a, b, g), c.fillRect(e, a, b, g);c.restore();
                }
              },
                  k = function k(t, e, a, i) {
                c.fillText(a.text, b + g / 2 + t, e), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(b + g / 2 + t, e + g / 2), c.lineTo(b + g / 2 + t + i, e + g / 2), c.stroke());
              },
                  S = a.isHorizontal();d = S ? { x: a.left + (l - u[0]) / 2, y: a.top + o.padding, line: 0 } : { x: a.left + o.padding, y: a.top + o.padding, line: 0 };var M = g + o.padding;i.each(a.legendItems, function (t, e) {
                var i = c.measureText(t.text).width,
                    n = b + g / 2 + i,
                    r = d.x,
                    s = d.y;S ? r + n >= l && (s = d.y += M, d.line++, r = d.x = a.left + (l - u[d.line]) / 2) : s + M > a.bottom && (r = d.x = r + a.columnWidths[d.line] + o.padding, s = d.y = a.top + o.padding, d.line++), y(r, s, t), x[e].left = r, x[e].top = s, k(r, s, t, i), S ? d.x += n + o.padding : d.y += M;
              });
            }
          }, handleEvent: function handleEvent(t) {
            var e = this,
                a = e.options,
                i = "mouseup" === t.type ? "click" : t.type,
                n = !1;if ("mousemove" === i) {
              if (!a.onHover) return;
            } else {
              if ("click" !== i) return;if (!a.onClick) return;
            }var o = t.x,
                r = t.y;if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
              var u = s[l];if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                if ("click" === i) {
                  a.onClick.call(e, t.native, e.legendItems[l]), n = !0;break;
                }if ("mousemove" === i) {
                  a.onHover.call(e, t.native, e.legendItems[l]), n = !0;break;
                }
              }
            }return n;
          } }), t.plugins.register({ beforeInit: function beforeInit(t) {
            var e = t.options.legend;e && a(t, e);
          }, beforeUpdate: function beforeUpdate(e) {
            var n = e.options.legend;n ? (n = i.configMerge(t.defaults.global.legend, n), e.legend ? e.legend.options = n : a(e, n)) : (t.layoutService.removeBox(e, e.legend), delete e.legend);
          }, afterEvent: function afterEvent(t, e) {
            var a = t.legend;a && a.handleEvent(e);
          } });
      };
    }, {}], 31: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.defaults.global.plugins = {}, t.plugins = { _plugins: [], _cacheId: 0, register: function register(t) {
            var e = this._plugins;[].concat(t).forEach(function (t) {
              e.indexOf(t) === -1 && e.push(t);
            }), this._cacheId++;
          }, unregister: function unregister(t) {
            var e = this._plugins;[].concat(t).forEach(function (t) {
              var a = e.indexOf(t);a !== -1 && e.splice(a, 1);
            }), this._cacheId++;
          }, clear: function clear() {
            this._plugins = [], this._cacheId++;
          }, count: function count() {
            return this._plugins.length;
          }, getAll: function getAll() {
            return this._plugins;
          }, notify: function notify(t, e, a) {
            var i,
                n,
                o,
                r,
                s,
                l = this.descriptors(t),
                u = l.length;for (i = 0; i < u; ++i) {
              if (n = l[i], o = n.plugin, s = o[e], "function" == typeof s && (r = [t].concat(a || []), r.push(n.options), s.apply(o, r) === !1)) return !1;
            }return !0;
          }, descriptors: function descriptors(a) {
            var i = a._plugins || (a._plugins = {});if (i.id === this._cacheId) return i.descriptors;var n = [],
                o = [],
                r = a && a.config || {},
                s = t.defaults.global.plugins,
                l = r.options && r.options.plugins || {};return this._plugins.concat(r.plugins || []).forEach(function (t) {
              var a = n.indexOf(t);if (a === -1) {
                var i = t.id,
                    r = l[i];r !== !1 && (r === !0 && (r = e.clone(s[i])), n.push(t), o.push({ plugin: t, options: r || {} }));
              }
            }), i.descriptors = o, i.id = this._cacheId, o;
          } }, t.pluginService = t.plugins, t.PluginBase = e.inherits({});
      };
    }, {}], 32: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e, a) {
          return i.isArray(e) ? i.longestText(t, a, e) : t.measureText(e).width;
        }function a(e) {
          var a = i.getValueOrDefault,
              n = t.defaults.global,
              o = a(e.fontSize, n.defaultFontSize),
              r = a(e.fontStyle, n.defaultFontStyle),
              s = a(e.fontFamily, n.defaultFontFamily);return { size: o, style: r, family: s, font: i.fontString(o, r, s) };
        }var i = t.helpers;t.defaults.scale = { display: !0, position: "left", gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { labelString: "", display: !1 }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: t.Ticks.formatters.values } }, t.Scale = t.Element.extend({ getPadding: function getPadding() {
            var t = this;return { left: t.paddingLeft || 0, top: t.paddingTop || 0, right: t.paddingRight || 0, bottom: t.paddingBottom || 0 };
          }, beforeUpdate: function beforeUpdate() {
            i.callCallback(this.options.beforeUpdate, [this]);
          }, update: function update(t, e, a) {
            var n = this;return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i.extend({ left: 0, right: 0, top: 0, bottom: 0 }, a), n.longestTextCache = n.longestTextCache || {}, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeDataLimits(), n.determineDataLimits(), n.afterDataLimits(), n.beforeBuildTicks(), n.buildTicks(), n.afterBuildTicks(), n.beforeTickToLabelConversion(), n.convertTicksToLabels(), n.afterTickToLabelConversion(), n.beforeCalculateTickRotation(), n.calculateTickRotation(), n.afterCalculateTickRotation(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
          }, afterUpdate: function afterUpdate() {
            i.callCallback(this.options.afterUpdate, [this]);
          }, beforeSetDimensions: function beforeSetDimensions() {
            i.callCallback(this.options.beforeSetDimensions, [this]);
          }, setDimensions: function setDimensions() {
            var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          }, afterSetDimensions: function afterSetDimensions() {
            i.callCallback(this.options.afterSetDimensions, [this]);
          }, beforeDataLimits: function beforeDataLimits() {
            i.callCallback(this.options.beforeDataLimits, [this]);
          }, determineDataLimits: i.noop, afterDataLimits: function afterDataLimits() {
            i.callCallback(this.options.afterDataLimits, [this]);
          }, beforeBuildTicks: function beforeBuildTicks() {
            i.callCallback(this.options.beforeBuildTicks, [this]);
          }, buildTicks: i.noop, afterBuildTicks: function afterBuildTicks() {
            i.callCallback(this.options.afterBuildTicks, [this]);
          }, beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            i.callCallback(this.options.beforeTickToLabelConversion, [this]);
          }, convertTicksToLabels: function convertTicksToLabels() {
            var t = this,
                e = t.options.ticks;t.ticks = t.ticks.map(e.userCallback || e.callback);
          }, afterTickToLabelConversion: function afterTickToLabelConversion() {
            i.callCallback(this.options.afterTickToLabelConversion, [this]);
          }, beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            i.callCallback(this.options.beforeCalculateTickRotation, [this]);
          }, calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                n = t.options.ticks,
                o = a(n);e.font = o.font;var r = n.minRotation || 0;if (t.options.display && t.isHorizontal()) for (var s, l, u = i.longestText(e, o.font, t.ticks, t.longestTextCache), d = u, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > c && r < n.maxRotation;) {
              var h = i.toRadians(r);if (s = Math.cos(h), l = Math.sin(h), l * u > t.maxHeight) {
                r--;break;
              }r++, d = s * u;
            }t.labelRotation = r;
          }, afterCalculateTickRotation: function afterCalculateTickRotation() {
            i.callCallback(this.options.afterCalculateTickRotation, [this]);
          }, beforeFit: function beforeFit() {
            i.callCallback(this.options.beforeFit, [this]);
          }, fit: function fit() {
            var t = this,
                n = t.minSize = { width: 0, height: 0 },
                o = t.options,
                r = o.ticks,
                s = o.scaleLabel,
                l = o.gridLines,
                u = o.display,
                d = t.isHorizontal(),
                c = a(r),
                h = 1.5 * a(s).size,
                f = o.gridLines.tickMarkLength;if (d ? n.width = t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : n.width = u && l.drawTicks ? f : 0, d ? n.height = u && l.drawTicks ? f : 0 : n.height = t.maxHeight, s.display && u && (d ? n.height += h : n.width += h), r.display && u) {
              var g = i.longestText(t.ctx, c.font, t.ticks, t.longestTextCache),
                  p = i.numberOfLabelLines(t.ticks),
                  m = .5 * c.size;if (d) {
                t.longestLabelWidth = g;var v = i.toRadians(t.labelRotation),
                    b = Math.cos(v),
                    x = Math.sin(v),
                    y = x * g + c.size * p + m * p;n.height = Math.min(t.maxHeight, n.height + y), t.ctx.font = c.font;var k = t.ticks[0],
                    S = e(t.ctx, k, c.font),
                    M = t.ticks[t.ticks.length - 1],
                    w = e(t.ctx, M, c.font);0 !== t.labelRotation ? (t.paddingLeft = "bottom" === o.position ? b * S + 3 : b * m + 3, t.paddingRight = "bottom" === o.position ? b * m + 3 : b * w + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = w / 2 + 3);
              } else r.mirror ? g = 0 : g += t.options.ticks.padding, n.width += g, t.paddingTop = c.size / 2, t.paddingBottom = c.size / 2;
            }t.handleMargins(), t.width = n.width, t.height = n.height;
          }, handleMargins: function handleMargins() {
            var t = this;t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          }, afterFit: function afterFit() {
            i.callCallback(this.options.afterFit, [this]);
          }, isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          }, isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          }, getRightValue: function getRightValue(t) {
            return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN;
          }, getLabelForIndex: i.noop, getPixelForValue: i.noop, getValueForPixel: i.noop, getPixelForTick: function getPixelForTick(t, e) {
            var a = this;if (a.isHorizontal()) {
              var i = a.width - (a.paddingLeft + a.paddingRight),
                  n = i / Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  o = n * t + a.paddingLeft;e && (o += n / 2);var r = a.left + Math.round(o);return r += a.isFullWidth() ? a.margins.left : 0;
            }var s = a.height - (a.paddingTop + a.paddingBottom);return a.top + t * (s / (a.ticks.length - 1));
          }, getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;if (e.isHorizontal()) {
              var a = e.width - (e.paddingLeft + e.paddingRight),
                  i = a * t + e.paddingLeft,
                  n = e.left + Math.round(i);return n += e.isFullWidth() ? e.margins.left : 0;
            }return e.top + t * e.height;
          }, getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          }, getBaseValue: function getBaseValue() {
            var t = this,
                e = t.min,
                a = t.max;return t.beginAtZero ? 0 : e < 0 && a < 0 ? a : e > 0 && a > 0 ? e : 0;
          }, draw: function draw(e) {
            var n = this,
                o = n.options;if (o.display) {
              var r,
                  s,
                  l = n.ctx,
                  u = t.defaults.global,
                  d = o.ticks,
                  c = o.gridLines,
                  h = o.scaleLabel,
                  f = 0 !== n.labelRotation,
                  g = d.autoSkip,
                  p = n.isHorizontal();d.maxTicksLimit && (s = d.maxTicksLimit);var m = i.getValueOrDefault(d.fontColor, u.defaultFontColor),
                  v = a(d),
                  b = c.drawTicks ? c.tickMarkLength : 0,
                  x = i.getValueOrDefault(c.borderDash, u.borderDash),
                  y = i.getValueOrDefault(c.borderDashOffset, u.borderDashOffset),
                  k = i.getValueOrDefault(h.fontColor, u.defaultFontColor),
                  S = a(h),
                  M = i.toRadians(n.labelRotation),
                  w = Math.cos(M),
                  C = n.longestLabelWidth * w;l.fillStyle = m;var I = [];if (p) {
                if (r = !1, f && (C /= 2), (C + d.autoSkipPadding) * n.ticks.length > n.width - (n.paddingLeft + n.paddingRight) && (r = 1 + Math.floor((C + d.autoSkipPadding) * n.ticks.length / (n.width - (n.paddingLeft + n.paddingRight)))), s && n.ticks.length > s) for (; !r || n.ticks.length / (r || 1) > s;) {
                  r || (r = 1), r += 1;
                }g || (r = !1);
              }var D = "right" === o.position ? n.left : n.right - b,
                  A = "right" === o.position ? n.left + b : n.right,
                  T = "bottom" === o.position ? n.top : n.bottom - b,
                  P = "bottom" === o.position ? n.top + b : n.bottom;if (i.each(n.ticks, function (t, a) {
                if (void 0 !== t && null !== t) {
                  var s = n.ticks.length === a + 1,
                      l = r > 1 && a % r > 0 || a % r === 0 && a + r >= n.ticks.length;if ((!l || s) && void 0 !== t && null !== t) {
                    var u, h;a === ("undefined" != typeof n.zeroLineIndex ? n.zeroLineIndex : 0) ? (u = c.zeroLineWidth, h = c.zeroLineColor) : (u = i.getValueAtIndexOrDefault(c.lineWidth, a), h = i.getValueAtIndexOrDefault(c.color, a));var g,
                        m,
                        v,
                        k,
                        S,
                        w,
                        C,
                        _,
                        F,
                        V,
                        R = "middle",
                        O = "middle";if (p) {
                      "bottom" === o.position ? (O = f ? "middle" : "top", R = f ? "right" : "center", V = n.top + b) : (O = f ? "middle" : "bottom", R = f ? "left" : "center", V = n.bottom - b);var L = n.getPixelForTick(a) + i.aliasPixel(u);F = n.getPixelForTick(a, c.offsetGridLines) + d.labelOffset, g = v = S = C = L, m = T, k = P, w = e.top, _ = e.bottom;
                    } else {
                      var B,
                          z = "left" === o.position,
                          W = d.padding;d.mirror ? (R = z ? "left" : "right", B = W) : (R = z ? "right" : "left", B = b + W), F = z ? n.right - B : n.left + B;var N = n.getPixelForTick(a);N += i.aliasPixel(u), V = n.getPixelForTick(a, c.offsetGridLines), g = D, v = A, S = e.left, C = e.right, m = k = w = _ = N;
                    }I.push({ tx1: g, ty1: m, tx2: v, ty2: k, x1: S, y1: w, x2: C, y2: _, labelX: F, labelY: V, glWidth: u, glColor: h, glBorderDash: x, glBorderDashOffset: y, rotation: -1 * M, label: t, textBaseline: O, textAlign: R });
                  }
                }
              }), i.each(I, function (t) {
                if (c.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), c.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), d.display) {
                  l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = v.font, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;var e = t.label;if (i.isArray(e)) for (var a = 0, n = 0; a < e.length; ++a) {
                    l.fillText("" + e[a], 0, n), n += 1.5 * v.size;
                  } else l.fillText(e, 0, 0);l.restore();
                }
              }), h.display) {
                var _,
                    F,
                    V = 0;if (p) _ = n.left + (n.right - n.left) / 2, F = "bottom" === o.position ? n.bottom - S.size / 2 : n.top + S.size / 2;else {
                  var R = "left" === o.position;_ = R ? n.left + S.size / 2 : n.right - S.size / 2, F = n.top + (n.bottom - n.top) / 2, V = R ? -.5 * Math.PI : .5 * Math.PI;
                }l.save(), l.translate(_, F), l.rotate(V), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = k, l.font = S.font, l.fillText(h.labelString, 0, 0), l.restore();
              }if (c.drawBorder) {
                l.lineWidth = i.getValueAtIndexOrDefault(c.lineWidth, 0), l.strokeStyle = i.getValueAtIndexOrDefault(c.color, 0);var O = n.left,
                    L = n.right,
                    B = n.top,
                    z = n.bottom,
                    W = i.aliasPixel(l.lineWidth);p ? (B = z = "top" === o.position ? n.bottom : n.top, B += W, z += W) : (O = L = "left" === o.position ? n.right : n.left, O += W, L += W), l.beginPath(), l.moveTo(O, B), l.lineTo(L, z), l.stroke();
              }
            }
          } });
      };
    }, {}], 33: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.scaleService = { constructors: {}, defaults: {}, registerScaleType: function registerScaleType(t, a, i) {
            this.constructors[t] = a, this.defaults[t] = e.clone(i);
          }, getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          }, getScaleDefaults: function getScaleDefaults(a) {
            return this.defaults.hasOwnProperty(a) ? e.scaleMerge(t.defaults.scale, this.defaults[a]) : {};
          }, updateScaleDefaults: function updateScaleDefaults(t, a) {
            var i = this.defaults;i.hasOwnProperty(t) && (i[t] = e.extend(i[t], a));
          }, addScalesToLayout: function addScalesToLayout(a) {
            e.each(a.scales, function (e) {
              t.layoutService.addBox(a, e);
            });
          } };
      };
    }, {}], 34: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers;t.Ticks = { generators: { linear: function linear(t, a) {
              var i,
                  n = [];if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var o = e.niceNum(a.max - a.min, !1);i = e.niceNum(o / (t.maxTicks - 1), !0);
              }var r = Math.floor(a.min / i) * i,
                  s = Math.ceil(a.max / i) * i;t.min && t.max && t.stepSize && e.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max);var l = (s - r) / i;l = e.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l), n.push(void 0 !== t.min ? t.min : r);for (var u = 1; u < l; ++u) {
                n.push(r + u * i);
              }return n.push(void 0 !== t.max ? t.max : s), n;
            }, logarithmic: function logarithmic(t, a) {
              var i,
                  n,
                  o = [],
                  r = e.getValueOrDefault,
                  s = r(t.min, Math.pow(10, Math.floor(e.log10(a.min)))),
                  l = Math.floor(e.log10(a.max)),
                  u = Math.ceil(a.max / Math.pow(10, l));0 === s ? (i = Math.floor(e.log10(a.minNotZero)), n = Math.floor(a.minNotZero / Math.pow(10, i)), o.push(s), s = n * Math.pow(10, i)) : (i = Math.floor(e.log10(s)), n = Math.floor(s / Math.pow(10, i)));do {
                o.push(s), ++n, 10 === n && (n = 1, ++i), s = n * Math.pow(10, i);
              } while (i < l || i === l && n < u);var d = r(t.max, s);return o.push(d), o;
            } }, formatters: { values: function values(t) {
              return e.isArray(t) ? t : "" + t;
            }, linear: function linear(t, a, i) {
              var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));var o = e.log10(Math.abs(n)),
                  r = "";if (0 !== t) {
                var s = -1 * Math.floor(o);s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s);
              } else r = "0";return r;
            }, logarithmic: function logarithmic(t, a, i) {
              var n = t / Math.pow(10, Math.floor(e.log10(t)));return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === a || a === i.length - 1 ? t.toExponential() : "";
            } } };
      };
    }, {}], 35: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(e, a) {
          var i = new t.Title({ ctx: e.chart.ctx, options: a, chart: e });e.titleBlock = i, t.layoutService.addBox(e, i);
        }var a = t.helpers;t.defaults.global.title = { display: !1, position: "top", fullWidth: !0, fontStyle: "bold", padding: 10, text: "" };var i = a.noop;t.Title = t.Element.extend({ initialize: function initialize(t) {
            var e = this;a.extend(e, t), e.legendHitBoxes = [];
          }, beforeUpdate: i, update: function update(t, e, a) {
            var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          }, afterUpdate: i, beforeSetDimensions: i, setDimensions: function setDimensions() {
            var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
          }, afterSetDimensions: i, beforeBuildLabels: i, buildLabels: i, afterBuildLabels: i, beforeFit: i, fit: function fit() {
            var e = this,
                i = a.getValueOrDefault,
                n = e.options,
                o = t.defaults.global,
                r = n.display,
                s = i(n.fontSize, o.defaultFontSize),
                l = e.minSize;e.isHorizontal() ? (l.width = e.maxWidth, l.height = r ? s + 2 * n.padding : 0) : (l.width = r ? s + 2 * n.padding : 0, l.height = e.maxHeight), e.width = l.width, e.height = l.height;
          }, afterFit: i, isHorizontal: function isHorizontal() {
            var t = this.options.position;return "top" === t || "bottom" === t;
          }, draw: function draw() {
            var e = this,
                i = e.ctx,
                n = a.getValueOrDefault,
                o = e.options,
                r = t.defaults.global;if (o.display) {
              var s,
                  l,
                  u,
                  d = n(o.fontSize, r.defaultFontSize),
                  c = n(o.fontStyle, r.defaultFontStyle),
                  h = n(o.fontFamily, r.defaultFontFamily),
                  f = a.fontString(d, c, h),
                  g = 0,
                  p = e.top,
                  m = e.left,
                  v = e.bottom,
                  b = e.right;i.fillStyle = n(o.fontColor, r.defaultFontColor), i.font = f, e.isHorizontal() ? (s = m + (b - m) / 2, l = p + (v - p) / 2, u = b - m) : (s = "left" === o.position ? m + d / 2 : b - d / 2, l = p + (v - p) / 2, u = v - p, g = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(s, l), i.rotate(g), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0, u), i.restore();
            }
          } }), t.plugins.register({ beforeInit: function beforeInit(t) {
            var a = t.options.title;a && e(t, a);
          }, beforeUpdate: function beforeUpdate(i) {
            var n = i.options.title;n ? (n = a.configMerge(t.defaults.global.title, n), i.titleBlock ? i.titleBlock.options = n : e(i, n)) : (t.layoutService.removeBox(i, i.titleBlock), delete i.titleBlock);
          } });
      };
    }, {}], 36: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          var a = l.color(t);return a.alpha(e * a.alpha()).rgbaString();
        }function a(t, e) {
          return e && (l.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }function i(t) {
          var e = t._xScale,
              a = t._yScale || t._scale,
              i = t._index,
              n = t._datasetIndex;return { xLabel: e ? e.getLabelForIndex(i, n) : "", yLabel: a ? a.getLabelForIndex(i, n) : "", index: i, datasetIndex: n, x: t._model.x, y: t._model.y };
        }function n(e) {
          var a = t.defaults.global,
              i = l.getValueOrDefault;return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: i(e.bodyFontFamily, a.defaultFontFamily), _bodyFontStyle: i(e.bodyFontStyle, a.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: i(e.bodyFontSize, a.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: i(e.titleFontFamily, a.defaultFontFamily), _titleFontStyle: i(e.titleFontStyle, a.defaultFontStyle), titleFontSize: i(e.titleFontSize, a.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: i(e.footerFontFamily, a.defaultFontFamily), _footerFontStyle: i(e.footerFontStyle, a.defaultFontStyle), footerFontSize: i(e.footerFontSize, a.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors };
        }function o(t, e) {
          var a = t._chart.ctx,
              i = 2 * e.yPadding,
              n = 0,
              o = e.body,
              r = o.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);r += e.beforeBody.length + e.afterBody.length;var s = e.title.length,
              u = e.footer.length,
              d = e.titleFontSize,
              c = e.bodyFontSize,
              h = e.footerFontSize;i += s * d, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += r * c, i += r ? (r - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;var f = 0,
              g = function g(t) {
            n = Math.max(n, a.measureText(t).width + f);
          };return a.font = l.fontString(d, e._titleFontStyle, e._titleFontFamily), l.each(e.title, g), a.font = l.fontString(c, e._bodyFontStyle, e._bodyFontFamily), l.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, l.each(o, function (t) {
            l.each(t.before, g), l.each(t.lines, g), l.each(t.after, g);
          }), f = 0, a.font = l.fontString(h, e._footerFontStyle, e._footerFontFamily), l.each(e.footer, g), n += 2 * e.xPadding, { width: n, height: i };
        }function r(t, e) {
          var a = t._model,
              i = t._chart,
              n = t._chartInstance.chartArea,
              o = "center",
              r = "center";a.y < e.height ? r = "top" : a.y > i.height - e.height && (r = "bottom");var s,
              l,
              u,
              d,
              c,
              h = (n.left + n.right) / 2,
              f = (n.top + n.bottom) / 2;"center" === r ? (s = function s(t) {
            return t <= h;
          }, l = function l(t) {
            return t > h;
          }) : (s = function s(t) {
            return t <= e.width / 2;
          }, l = function l(t) {
            return t >= i.width - e.width / 2;
          }), u = function u(t) {
            return t + e.width > i.width;
          }, d = function d(t) {
            return t - e.width < 0;
          }, c = function c(t) {
            return t <= f ? "top" : "bottom";
          }, s(a.x) ? (o = "left", u(a.x) && (o = "center", r = c(a.y))) : l(a.x) && (o = "right", d(a.x) && (o = "center", r = c(a.y)));var g = t._options;return { xAlign: g.xAlign ? g.xAlign : o, yAlign: g.yAlign ? g.yAlign : r };
        }function s(t, e, a) {
          var i = t.x,
              n = t.y,
              o = t.caretSize,
              r = t.caretPadding,
              s = t.cornerRadius,
              l = a.xAlign,
              u = a.yAlign,
              d = o + r,
              c = s + r;return "right" === l ? i -= e.width : "center" === l && (i -= e.width / 2), "top" === u ? n += d : n -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === l ? i += d : "right" === l && (i -= d) : "left" === l ? i -= c : "right" === l && (i += c), { x: i, y: n };
        }var l = t.helpers;t.defaults.global.tooltips = { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, callbacks: { beforeTitle: l.noop, title: function title(t, e) {
              var a = "",
                  i = e.labels,
                  n = i ? i.length : 0;if (t.length > 0) {
                var o = t[0];o.xLabel ? a = o.xLabel : n > 0 && o.index < n && (a = i[o.index]);
              }return a;
            }, afterTitle: l.noop, beforeBody: l.noop, beforeLabel: l.noop, label: function label(t, e) {
              var a = e.datasets[t.datasetIndex].label || "";return a + ": " + t.yLabel;
            }, labelColor: function labelColor(t, e) {
              var a = e.getDatasetMeta(t.datasetIndex),
                  i = a.data[t.index],
                  n = i._view;return { borderColor: n.borderColor, backgroundColor: n.backgroundColor };
            }, afterLabel: l.noop, afterBody: l.noop, beforeFooter: l.noop, footer: l.noop, afterFooter: l.noop } }, t.Tooltip = t.Element.extend({ initialize: function initialize() {
            this._model = n(this._options);
          }, getTitle: function getTitle() {
            var t = this,
                e = t._options,
                i = e.callbacks,
                n = i.beforeTitle.apply(t, arguments),
                o = i.title.apply(t, arguments),
                r = i.afterTitle.apply(t, arguments),
                s = [];return s = a(s, n), s = a(s, o), s = a(s, r);
          }, getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);return l.isArray(t) ? t : void 0 !== t ? [t] : [];
          }, getBody: function getBody(t, e) {
            var i = this,
                n = i._options.callbacks,
                o = [];return l.each(t, function (t) {
              var r = { before: [], lines: [], after: [] };a(r.before, n.beforeLabel.call(i, t, e)), a(r.lines, n.label.call(i, t, e)), a(r.after, n.afterLabel.call(i, t, e)), o.push(r);
            }), o;
          }, getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);return l.isArray(t) ? t : void 0 !== t ? [t] : [];
          }, getFooter: function getFooter() {
            var t = this,
                e = t._options.callbacks,
                i = e.beforeFooter.apply(t, arguments),
                n = e.footer.apply(t, arguments),
                o = e.afterFooter.apply(t, arguments),
                r = [];return r = a(r, i), r = a(r, n), r = a(r, o);
          }, update: function update(e) {
            var a,
                u,
                d = this,
                c = d._options,
                h = d._model,
                f = d._model = n(c),
                g = d._active,
                p = d._data,
                m = d._chartInstance,
                v = { xAlign: h.xAlign, yAlign: h.yAlign },
                b = { x: h.x, y: h.y },
                x = { width: h.width, height: h.height },
                y = { x: h.caretX, y: h.caretY };if (g.length) {
              f.opacity = 1;var k = [];y = t.Tooltip.positioners[c.position](g, d._eventPosition);var S = [];for (a = 0, u = g.length; a < u; ++a) {
                S.push(i(g[a]));
              }c.filter && (S = S.filter(function (t) {
                return c.filter(t, p);
              })), c.itemSort && (S = S.sort(function (t, e) {
                return c.itemSort(t, e, p);
              })), l.each(S, function (t) {
                k.push(c.callbacks.labelColor.call(d, t, m));
              }), f.title = d.getTitle(S, p), f.beforeBody = d.getBeforeBody(S, p), f.body = d.getBody(S, p), f.afterBody = d.getAfterBody(S, p), f.footer = d.getFooter(S, p), f.x = Math.round(y.x), f.y = Math.round(y.y), f.caretPadding = l.getValueOrDefault(y.padding, 2), f.labelColors = k, f.dataPoints = S, x = o(this, f), v = r(this, x), b = s(f, x, v);
            } else f.opacity = 0;return f.xAlign = v.xAlign, f.yAlign = v.yAlign, f.x = b.x, f.y = b.y, f.width = x.width, f.height = x.height, f.caretX = y.x, f.caretY = y.y, d._model = f, e && c.custom && c.custom.call(d, f), d;
          }, drawCaret: function drawCaret(t, a, i) {
            var n,
                o,
                r,
                s,
                l,
                u,
                d = this._view,
                c = this._chart.ctx,
                h = d.caretSize,
                f = d.cornerRadius,
                g = d.xAlign,
                p = d.yAlign,
                m = t.x,
                v = t.y,
                b = a.width,
                x = a.height;"center" === p ? ("left" === g ? (n = m, o = n - h, r = n) : (n = m + b, o = n + h, r = n), l = v + x / 2, s = l - h, u = l + h) : ("left" === g ? (n = m + f, o = n + h, r = o + h) : "right" === g ? (n = m + b - f, o = n - h, r = o - h) : (o = m + b / 2, n = o - h, r = o + h), "top" === p ? (s = v, l = s - h, u = s) : (s = v + x, l = s + h, u = s)), c.fillStyle = e(d.backgroundColor, i), c.beginPath(), c.moveTo(n, s), c.lineTo(o, l), c.lineTo(r, u), c.closePath(), c.fill();
          }, drawTitle: function drawTitle(t, a, i, n) {
            var o = a.title;if (o.length) {
              i.textAlign = a._titleAlign, i.textBaseline = "top";var r = a.titleFontSize,
                  s = a.titleSpacing;i.fillStyle = e(a.titleFontColor, n), i.font = l.fontString(r, a._titleFontStyle, a._titleFontFamily);var u, d;for (u = 0, d = o.length; u < d; ++u) {
                i.fillText(o[u], t.x, t.y), t.y += r + s, u + 1 === o.length && (t.y += a.titleMarginBottom - s);
              }
            }
          }, drawBody: function drawBody(t, a, i, n) {
            var o = a.bodyFontSize,
                r = a.bodySpacing,
                s = a.body;i.textAlign = a._bodyAlign, i.textBaseline = "top";var u = e(a.bodyFontColor, n);i.fillStyle = u, i.font = l.fontString(o, a._bodyFontStyle, a._bodyFontFamily);var d = 0,
                c = function c(e) {
              i.fillText(e, t.x + d, t.y), t.y += o + r;
            };l.each(a.beforeBody, c);var h = a.displayColors;d = h ? o + 2 : 0, l.each(s, function (r, s) {
              l.each(r.before, c), l.each(r.lines, function (r) {
                h && (i.fillStyle = e(a.legendColorBackground, n), i.fillRect(t.x, t.y, o, o), i.strokeStyle = e(a.labelColors[s].borderColor, n), i.strokeRect(t.x, t.y, o, o), i.fillStyle = e(a.labelColors[s].backgroundColor, n), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = u), c(r);
              }), l.each(r.after, c);
            }), d = 0, l.each(a.afterBody, c), t.y -= r;
          }, drawFooter: function drawFooter(t, a, i, n) {
            var o = a.footer;o.length && (t.y += a.footerMarginTop, i.textAlign = a._footerAlign, i.textBaseline = "top", i.fillStyle = e(a.footerFontColor, n), i.font = l.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily), l.each(o, function (e) {
              i.fillText(e, t.x, t.y), t.y += a.footerFontSize + a.footerSpacing;
            }));
          }, drawBackground: function drawBackground(t, a, i, n, o) {
            i.fillStyle = e(a.backgroundColor, o), l.drawRoundedRectangle(i, t.x, t.y, n.width, n.height, a.cornerRadius), i.fill();
          }, draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;if (0 !== e.opacity) {
              var a = { width: e.width, height: e.height },
                  i = { x: e.x, y: e.y },
                  n = Math.abs(e.opacity < .001) ? 0 : e.opacity;this._options.enabled && (this.drawBackground(i, e, t, a, n), this.drawCaret(i, a, n), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, n), this.drawBody(i, e, t, n), this.drawFooter(i, e, t, n));
            }
          }, handleEvent: function handleEvent(t) {
            var e = this,
                a = e._options,
                i = !1;if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chartInstance.getElementsAtEventForMode(t, a.mode, a), i = !l.arrayEquals(e._active, e._lastActive), e._lastActive = e._active, a.enabled || a.custom) {
              e._eventPosition = { x: t.x, y: t.y };var n = e._model;e.update(!0), e.pivot(), i |= n.x !== e._model.x || n.y !== e._model.y;
            }return i;
          } }), t.Tooltip.positioners = { average: function average(t) {
            if (!t.length) return !1;var e,
                a,
                i = 0,
                n = 0,
                o = 0;for (e = 0, a = t.length; e < a; ++e) {
              var r = t[e];if (r && r.hasValue()) {
                var s = r.tooltipPosition();i += s.x, n += s.y, ++o;
              }
            }return { x: Math.round(i / o), y: Math.round(n / o) };
          }, nearest: function nearest(t, e) {
            var a,
                i,
                n,
                o = e.x,
                r = e.y,
                s = Number.POSITIVE_INFINITY;for (i = 0, n = t.length; i < n; ++i) {
              var u = t[i];if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    c = l.distanceBetweenPoints(e, d);c < s && (s = c, a = u);
              }
            }if (a) {
              var h = a.tooltipPosition();o = h.x, r = h.y;
            }return { x: o, y: r };
          } };
      };
    }, {}], 37: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;a.elements.arc = { backgroundColor: a.defaultColor, borderColor: "#fff", borderWidth: 2 }, t.elements.Arc = t.Element.extend({ inLabelRange: function inLabelRange(t) {
            var e = this._view;return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
          }, inRange: function inRange(t, a) {
            var i = this._view;if (i) {
              for (var n = e.getAngleFromPoint(i, { x: t, y: a }), o = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) {
                l += 2 * Math.PI;
              }for (; o > l;) {
                o -= 2 * Math.PI;
              }for (; o < s;) {
                o += 2 * Math.PI;
              }var u = o >= s && o <= l,
                  d = r >= i.innerRadius && r <= i.outerRadius;return u && d;
            }return !1;
          }, getCenterPoint: function getCenterPoint() {
            var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                a = (t.innerRadius + t.outerRadius) / 2;return { x: t.x + Math.cos(e) * a, y: t.y + Math.sin(e) * a };
          }, getArea: function getArea() {
            var t = this._view;return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
          }, tooltipPosition: function tooltipPosition() {
            var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                a = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;return { x: t.x + Math.cos(e) * a, y: t.y + Math.sin(e) * a };
          }, draw: function draw() {
            var t = this._chart.ctx,
                e = this._view,
                a = e.startAngle,
                i = e.endAngle;t.beginPath(), t.arc(e.x, e.y, e.outerRadius, a, i), t.arc(e.x, e.y, e.innerRadius, i, a, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
          } });
      };
    }, {}], 38: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;t.defaults.global.elements.line = { tension: .4, backgroundColor: a.defaultColor, borderWidth: 3, borderColor: a.defaultColor, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 }, t.elements.Line = t.Element.extend({ draw: function draw() {
            function t(t, e) {
              var a = e._view;e._view.steppedLine === !0 ? (l.lineTo(a.x, t._view.y), l.lineTo(a.x, a.y)) : 0 === e._view.tension ? l.lineTo(a.x, a.y) : l.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, a.controlPointPreviousX, a.controlPointPreviousY, a.x, a.y);
            }var i = this,
                n = i._view,
                o = n.spanGaps,
                r = n.scaleZero,
                s = i._loop;s || ("top" === n.fill ? r = n.scaleTop : "bottom" === n.fill && (r = n.scaleBottom));var l = i._chart.ctx;l.save();var u = i._children.slice(),
                d = -1;s && u.length && u.push(u[0]);var c, h, f, g;if (u.length && n.fill) {
              for (l.beginPath(), c = 0; c < u.length; ++c) {
                h = u[c], f = e.previousItem(u, c), g = h._view, 0 === c ? (s ? l.moveTo(r.x, r.y) : l.moveTo(g.x, r), g.skip || (d = c, l.lineTo(g.x, g.y))) : (f = d === -1 ? f : u[d], g.skip ? o || d !== c - 1 || (s ? l.lineTo(r.x, r.y) : l.lineTo(f._view.x, r)) : (d !== c - 1 ? o && d !== -1 ? t(f, h) : s ? l.lineTo(g.x, g.y) : (l.lineTo(g.x, r), l.lineTo(g.x, g.y)) : t(f, h), d = c));
              }s || d === -1 || l.lineTo(u[d]._view.x, r), l.fillStyle = n.backgroundColor || a.defaultColor, l.closePath(), l.fill();
            }var p = a.elements.line;for (l.lineCap = n.borderCapStyle || p.borderCapStyle, l.setLineDash && l.setLineDash(n.borderDash || p.borderDash), l.lineDashOffset = n.borderDashOffset || p.borderDashOffset, l.lineJoin = n.borderJoinStyle || p.borderJoinStyle, l.lineWidth = n.borderWidth || p.borderWidth, l.strokeStyle = n.borderColor || a.defaultColor, l.beginPath(), d = -1, c = 0; c < u.length; ++c) {
              h = u[c], f = e.previousItem(u, c), g = h._view, 0 === c ? g.skip || (l.moveTo(g.x, g.y), d = c) : (f = d === -1 ? f : u[d], g.skip || (d !== c - 1 && !o || d === -1 ? l.moveTo(g.x, g.y) : t(f, h), d = c));
            }l.stroke(), l.restore();
          } });
      };
    }, {}], 39: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t) {
          var e = this._view;return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2);
        }function a(t) {
          var e = this._view;return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2);
        }var i = t.helpers,
            n = t.defaults.global,
            o = n.defaultColor;n.elements.point = { radius: 3, pointStyle: "circle", backgroundColor: o, borderWidth: 1, borderColor: o, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 }, t.elements.Point = t.Element.extend({ inRange: function inRange(t, e) {
            var a = this._view;return !!a && Math.pow(t - a.x, 2) + Math.pow(e - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2);
          }, inLabelRange: e, inXRange: e, inYRange: a, getCenterPoint: function getCenterPoint() {
            var t = this._view;return { x: t.x, y: t.y };
          }, getArea: function getArea() {
            return Math.PI * Math.pow(this._view.radius, 2);
          }, tooltipPosition: function tooltipPosition() {
            var t = this._view;return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
          }, draw: function draw(e) {
            var a = this._view,
                r = this._model,
                s = this._chart.ctx,
                l = a.pointStyle,
                u = a.radius,
                d = a.x,
                c = a.y,
                h = t.helpers.color,
                f = 1.01,
                g = 0;a.skip || (s.strokeStyle = a.borderColor || o, s.lineWidth = i.getValueOrDefault(a.borderWidth, n.elements.point.borderWidth), s.fillStyle = a.backgroundColor || o, void 0 !== e && (r.x < e.left || e.right * f < r.x || r.y < e.top || e.bottom * f < r.y) && (r.x < e.left ? g = (d - r.x) / (e.left - r.x) : e.right * f < r.x ? g = (r.x - d) / (r.x - e.right) : r.y < e.top ? g = (c - r.y) / (e.top - r.y) : e.bottom * f < r.y && (g = (r.y - c) / (r.y - e.bottom)), g = Math.round(100 * g) / 100, s.strokeStyle = h(s.strokeStyle).alpha(g).rgbString(), s.fillStyle = h(s.fillStyle).alpha(g).rgbString()), t.canvasHelpers.drawPoint(s, l, u, d, c));
          } });
      };
    }, {}], 40: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t) {
          return void 0 !== t._view.width;
        }function a(t) {
          var a,
              i,
              n,
              o,
              r = t._view;if (e(t)) {
            var s = r.width / 2;a = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), o = Math.max(r.y, r.base);
          } else {
            var l = r.height / 2;a = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, o = r.y + l;
          }return { left: a, top: n, right: i, bottom: o };
        }var i = t.defaults.global;i.elements.rectangle = { backgroundColor: i.defaultColor, borderWidth: 0, borderColor: i.defaultColor, borderSkipped: "bottom" }, t.elements.Rectangle = t.Element.extend({ draw: function draw() {
            function t(t) {
              return v[(x + t) % 4];
            }var e,
                a,
                i,
                n,
                o,
                r,
                s,
                l = this._chart.ctx,
                u = this._view,
                d = u.borderWidth;if (u.horizontal ? (e = u.base, a = u.x, i = u.y - u.height / 2, n = u.y + u.height / 2, o = a > e ? 1 : -1, r = 1, s = u.borderSkipped || "left") : (e = u.x - u.width / 2, a = u.x + u.width / 2, i = u.y, n = u.base, o = 1, r = n > i ? 1 : -1, s = u.borderSkipped || "bottom"), d) {
              var c = Math.min(Math.abs(e - a), Math.abs(i - n));d = d > c ? c : d;var h = d / 2,
                  f = e + ("left" !== s ? h * o : 0),
                  g = a + ("right" !== s ? -h * o : 0),
                  p = i + ("top" !== s ? h * r : 0),
                  m = n + ("bottom" !== s ? -h * r : 0);f !== g && (i = p, n = m), p !== m && (e = f, a = g);
            }l.beginPath(), l.fillStyle = u.backgroundColor, l.strokeStyle = u.borderColor, l.lineWidth = d;var v = [[e, n], [e, i], [a, i], [a, n]],
                b = ["bottom", "left", "top", "right"],
                x = b.indexOf(s, 0);x === -1 && (x = 0);var y = t(0);l.moveTo(y[0], y[1]);for (var k = 1; k < 4; k++) {
              y = t(k), l.lineTo(y[0], y[1]);
            }l.fill(), d && l.stroke();
          }, height: function height() {
            var t = this._view;return t.base - t.y;
          }, inRange: function inRange(t, e) {
            var i = !1;if (this._view) {
              var n = a(this);i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
            }return i;
          }, inLabelRange: function inLabelRange(t, i) {
            var n = this;if (!n._view) return !1;var o = !1,
                r = a(n);return o = e(n) ? t >= r.left && t <= r.right : i >= r.top && i <= r.bottom;
          }, inXRange: function inXRange(t) {
            var e = a(this);return t >= e.left && t <= e.right;
          }, inYRange: function inYRange(t) {
            var e = a(this);return t >= e.top && t <= e.bottom;
          }, getCenterPoint: function getCenterPoint() {
            var t,
                a,
                i = this._view;return e(this) ? (t = i.x, a = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, a = i.y), { x: t, y: a };
          }, getArea: function getArea() {
            var t = this._view;return t.width * Math.abs(t.y - t.base);
          }, tooltipPosition: function tooltipPosition() {
            var t = this._view;return { x: t.x, y: t.y };
          } });
      };
    }, {}], 41: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t, e) {
          var a = l.getStyle(t, e),
              i = a && a.match(/(\d+)px/);return i ? Number(i[1]) : void 0;
        }function a(t, a) {
          var i = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");if (t._chartjs = { initial: { height: n, width: o, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", null === o || "" === o) {
            var r = e(t, "width");void 0 !== r && (t.width = r);
          }if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (a.options.aspectRatio || 2);else {
            var s = e(t, "height");void 0 !== r && (t.height = s);
          }return t;
        }function i(t, e, a, i, n) {
          return { type: t, chart: e, native: n || null, x: void 0 !== a ? a : null, y: void 0 !== i ? i : null };
        }function n(t, e) {
          var a = u[t.type] || t.type,
              n = l.getRelativePosition(t, e);return i(a, e, n.x, n.y, t);
        }function o(t) {
          var e = document.createElement("iframe");return e.className = "chartjs-hidden-iframe", e.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", e.tabIndex = -1, l.addEvent(e, "load", function () {
            l.addEvent(e.contentWindow || e, "resize", t), t();
          }), e;
        }function r(t, e, a) {
          var n = t._chartjs = { ticking: !1 },
              r = function r() {
            n.ticking || (n.ticking = !0, l.requestAnimFrame.call(window, function () {
              if (n.resizer) return n.ticking = !1, e(i("resize", a));
            }));
          };n.resizer = o(r), t.insertBefore(n.resizer, t.firstChild);
        }function s(t) {
          if (t && t._chartjs) {
            var e = t._chartjs.resizer;e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs;
          }
        }var l = t.helpers,
            u = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };return { acquireContext: function acquireContext(t, e) {
            if ("string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t instanceof HTMLCanvasElement) {
              var i = t.getContext && t.getContext("2d");if (i instanceof CanvasRenderingContext2D) return a(t, e), i;
            }return null;
          }, releaseContext: function releaseContext(t) {
            var e = t.canvas;if (e._chartjs) {
              var a = e._chartjs.initial;["height", "width"].forEach(function (t) {
                var i = a[t];void 0 === i || null === i ? e.removeAttribute(t) : e.setAttribute(t, i);
              }), l.each(a.style || {}, function (t, a) {
                e.style[a] = t;
              }), e.width = e.width, delete e._chartjs;
            }
          }, addEventListener: function addEventListener(t, e, a) {
            var i = t.chart.canvas;if ("resize" === e) return void r(i.parentNode, a, t.chart);var o = a._chartjs || (a._chartjs = {}),
                s = o.proxies || (o.proxies = {}),
                u = s[t.id + "_" + e] = function (e) {
              a(n(e, t.chart));
            };l.addEvent(i, e, u);
          }, removeEventListener: function removeEventListener(t, e, a) {
            var i = t.chart.canvas;if ("resize" === e) return void s(i.parentNode, a);var n = a._chartjs || {},
                o = n.proxies || {},
                r = o[t.id + "_" + e];r && l.removeEvent(i, e, r);
          } };
      };
    }, {}], 42: [function (t, e, a) {
      "use strict";
      var i = t(41);e.exports = function (t) {
        t.platform = { acquireContext: function acquireContext() {}, releaseContext: function releaseContext() {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {} }, t.helpers.extend(t.platform, i(t));
      };
    }, { 41: 41 }], 43: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = { position: "bottom" },
            i = t.Scale.extend({ getLabels: function getLabels() {
            var t = this.chart.data;return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          }, determineDataLimits: function determineDataLimits() {
            var t = this,
                a = t.getLabels();t.minIndex = 0, t.maxIndex = a.length - 1;var i;void 0 !== t.options.ticks.min && (i = e.indexOf(a, t.options.ticks.min), t.minIndex = i !== -1 ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(a, t.options.ticks.max), t.maxIndex = i !== -1 ? i : t.maxIndex), t.min = a[t.minIndex], t.max = a[t.maxIndex];
          }, buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data,
                n = a.isHorizontal();return i.yLabels && !n ? a.getRightValue(i.datasets[e].data[t]) : a.ticks[t - a.minIndex];
          }, getPixelForValue: function getPixelForValue(t, e, a, i) {
            var n = this,
                o = Math.max(n.maxIndex + 1 - n.minIndex - (n.options.gridLines.offsetGridLines ? 0 : 1), 1);if (void 0 !== t && isNaN(e)) {
              var r = n.getLabels(),
                  s = r.indexOf(t);e = s !== -1 ? s : e;
            }if (n.isHorizontal()) {
              var l = n.width / o,
                  u = l * (e - n.minIndex);return (n.options.gridLines.offsetGridLines && i || n.maxIndex === n.minIndex && i) && (u += l / 2), n.left + Math.round(u);
            }var d = n.height / o,
                c = d * (e - n.minIndex);return n.options.gridLines.offsetGridLines && i && (c += d / 2), n.top + Math.round(c);
          }, getPixelForTick: function getPixelForTick(t, e) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e);
          }, getValueForPixel: function getValueForPixel(t) {
            var e,
                a = this,
                i = Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                n = a.isHorizontal(),
                o = (n ? a.width : a.height) / i;return t -= n ? a.left : a.top, a.options.gridLines.offsetGridLines && (t -= o / 2), e = t <= 0 ? 0 : Math.round(t / o);
          }, getBasePixel: function getBasePixel() {
            return this.bottom;
          } });t.scaleService.registerScaleType("category", i, a);
      };
    }, {}], 44: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = { position: "left", ticks: { callback: t.Ticks.formatters.linear } },
            i = t.LinearScaleBase.extend({ determineDataLimits: function determineDataLimits() {
            function t(t) {
              return s ? t.xAxisID === a.id : t.yAxisID === a.id;
            }var a = this,
                i = a.options,
                n = a.chart,
                o = n.data,
                r = o.datasets,
                s = a.isHorizontal();a.min = null, a.max = null;var l = i.stacked;if (void 0 === l && e.each(r, function (e, a) {
              if (!l) {
                var i = n.getDatasetMeta(a);n.isDatasetVisible(a) && t(i) && void 0 !== i.stack && (l = !0);
              }
            }), i.stacked || l) {
              var u = {};e.each(r, function (o, r) {
                var s = n.getDatasetMeta(r),
                    l = [s.type, void 0 === i.stacked && void 0 === s.stack ? r : "", s.stack].join(".");void 0 === u[l] && (u[l] = { positiveValues: [], negativeValues: [] });var d = u[l].positiveValues,
                    c = u[l].negativeValues;n.isDatasetVisible(r) && t(s) && e.each(o.data, function (t, e) {
                  var n = +a.getRightValue(t);isNaN(n) || s.data[e].hidden || (d[e] = d[e] || 0, c[e] = c[e] || 0, i.relativePoints ? d[e] = 100 : n < 0 ? c[e] += n : d[e] += n);
                });
              }), e.each(u, function (t) {
                var i = t.positiveValues.concat(t.negativeValues),
                    n = e.min(i),
                    o = e.max(i);a.min = null === a.min ? n : Math.min(a.min, n), a.max = null === a.max ? o : Math.max(a.max, o);
              });
            } else e.each(r, function (i, o) {
              var r = n.getDatasetMeta(o);n.isDatasetVisible(o) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i));
              });
            });this.handleTickRangeOptions();
          }, getTickLimit: function getTickLimit() {
            var a,
                i = this,
                n = i.options.ticks;if (i.isHorizontal()) a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.width / 50));else {
              var o = e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize);a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)));
            }return a;
          }, handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, getPixelForValue: function getPixelForValue(t) {
            var e,
                a = this,
                i = a.start,
                n = +a.getRightValue(t),
                o = a.end - i;return a.isHorizontal() ? (e = a.left + a.width / o * (n - i), Math.round(e)) : (e = a.bottom - a.height / o * (n - i), Math.round(e));
          }, getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal(),
                i = a ? e.width : e.height,
                n = (a ? t - e.left : e.bottom - t) / i;return e.start + (e.end - e.start) * n;
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          } });t.scaleService.registerScaleType("linear", i, a);
      };
    }, {}], 45: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = e.noop;t.LinearScaleBase = t.Scale.extend({ handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                a = t.options,
                i = a.ticks;if (i.beginAtZero) {
              var n = e.sign(t.min),
                  o = e.sign(t.max);n < 0 && o < 0 ? t.max = 0 : n > 0 && o > 0 && (t.min = 0);
            }void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--);
          }, getTickLimit: a, handleDirectionalChanges: a, buildTicks: function buildTicks() {
            var a = this,
                i = a.options,
                n = i.ticks,
                o = a.getTickLimit();o = Math.max(2, o);var r = { maxTicks: o, min: n.min, max: n.max, stepSize: e.getValueOrDefault(n.fixedStepSize, n.stepSize) },
                s = a.ticks = t.Ticks.generators.linear(r, a);a.handleDirectionalChanges(), a.max = e.max(s), a.min = e.min(s), n.reverse ? (s.reverse(), a.start = a.max, a.end = a.min) : (a.start = a.min, a.end = a.max);
          }, convertTicksToLabels: function convertTicksToLabels() {
            var e = this;e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          } });
      };
    }, {}], 46: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        var e = t.helpers,
            a = { position: "left", ticks: { callback: t.Ticks.formatters.logarithmic } },
            i = t.Scale.extend({ determineDataLimits: function determineDataLimits() {
            function t(t) {
              return u ? t.xAxisID === a.id : t.yAxisID === a.id;
            }var a = this,
                i = a.options,
                n = i.ticks,
                o = a.chart,
                r = o.data,
                s = r.datasets,
                l = e.getValueOrDefault,
                u = a.isHorizontal();a.min = null, a.max = null, a.minNotZero = null;var d = i.stacked;if (void 0 === d && e.each(s, function (e, a) {
              if (!d) {
                var i = o.getDatasetMeta(a);o.isDatasetVisible(a) && t(i) && void 0 !== i.stack && (d = !0);
              }
            }), i.stacked || d) {
              var c = {};e.each(s, function (n, r) {
                var s = o.getDatasetMeta(r),
                    l = [s.type, void 0 === i.stacked && void 0 === s.stack ? r : "", s.stack].join(".");o.isDatasetVisible(r) && t(s) && (void 0 === c[l] && (c[l] = []), e.each(n.data, function (t, e) {
                  var n = c[l],
                      o = +a.getRightValue(t);isNaN(o) || s.data[e].hidden || (n[e] = n[e] || 0, i.relativePoints ? n[e] = 100 : n[e] += o);
                }));
              }), e.each(c, function (t) {
                var i = e.min(t),
                    n = e.max(t);a.min = null === a.min ? i : Math.min(a.min, i), a.max = null === a.max ? n : Math.max(a.max, n);
              });
            } else e.each(s, function (i, n) {
              var r = o.getDatasetMeta(n);o.isDatasetVisible(n) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i), 0 !== i && (null === a.minNotZero || i < a.minNotZero) && (a.minNotZero = i));
              });
            });a.min = l(n.min, a.min), a.max = l(n.max, a.max), a.min === a.max && (0 !== a.min && null !== a.min ? (a.min = Math.pow(10, Math.floor(e.log10(a.min)) - 1), a.max = Math.pow(10, Math.floor(e.log10(a.max)) + 1)) : (a.min = 1, a.max = 10));
          }, buildTicks: function buildTicks() {
            var a = this,
                i = a.options,
                n = i.ticks,
                o = { min: n.min, max: n.max },
                r = a.ticks = t.Ticks.generators.logarithmic(o, a);a.isHorizontal() || r.reverse(), a.max = e.max(r), a.min = e.min(r), n.reverse ? (r.reverse(), a.start = a.max, a.end = a.min) : (a.start = a.min, a.end = a.max);
          }, convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          }, getPixelForValue: function getPixelForValue(t) {
            var a,
                i,
                n,
                o = this,
                r = o.start,
                s = +o.getRightValue(t),
                l = o.options,
                u = l.ticks;return o.isHorizontal() ? (n = e.log10(o.end) - e.log10(r), 0 === s ? i = o.left : (a = o.width, i = o.left + a / n * (e.log10(s) - e.log10(r)))) : (a = o.height, 0 !== r || u.reverse ? 0 === o.end && u.reverse ? (n = e.log10(o.start) - e.log10(o.minNotZero), i = s === o.end ? o.top : s === o.minNotZero ? o.top + .02 * a : o.top + .02 * a + .98 * a / n * (e.log10(s) - e.log10(o.minNotZero))) : (n = e.log10(o.end) - e.log10(r), a = o.height, i = o.bottom - a / n * (e.log10(s) - e.log10(r))) : (n = e.log10(o.end) - e.log10(o.minNotZero), i = s === r ? o.bottom : s === o.minNotZero ? o.bottom - .02 * a : o.bottom - .02 * a - .98 * a / n * (e.log10(s) - e.log10(o.minNotZero)))), i;
          }, getValueForPixel: function getValueForPixel(t) {
            var a,
                i,
                n = this,
                o = e.log10(n.end) - e.log10(n.start);return n.isHorizontal() ? (i = n.width, a = n.start * Math.pow(10, (t - n.left) * o / i)) : (i = n.height, a = Math.pow(10, (n.bottom - t) * o / i) / n.start), a;
          } });t.scaleService.registerScaleType("logarithmic", i, a);
      };
    }, {}], 47: [function (t, e, a) {
      "use strict";
      e.exports = function (t) {
        function e(t) {
          return t.options.lineArc ? 0 : t.chart.data.labels.length;
        }function a(t) {
          var e = t.options.pointLabels,
              a = f.getValueOrDefault(e.fontSize, g.defaultFontSize),
              i = f.getValueOrDefault(e.fontStyle, g.defaultFontStyle),
              n = f.getValueOrDefault(e.fontFamily, g.defaultFontFamily),
              o = f.fontString(a, i, n);return { size: a, style: i, family: n, font: o };
        }function i(t, e, a) {
          return f.isArray(a) ? { w: f.longestText(t, t.font, a), h: a.length * e + 1.5 * (a.length - 1) * e } : { w: t.measureText(a).width, h: e };
        }function n(t, e, a, i, n) {
          return t === i || t === n ? { start: e - a / 2, end: e + a / 2 } : t < i || t > n ? { start: e - a - 5, end: e } : { start: e, end: e + a + 5 };
        }function o(t) {
          var o,
              r,
              s,
              l = a(t),
              u = Math.min(t.height / 2, t.width / 2),
              d = { l: t.width, r: 0, t: t.height, b: 0 },
              c = {};t.ctx.font = l.font, t._pointLabelSizes = [];var h = e(t);for (o = 0; o < h; o++) {
            s = t.getPointPosition(o, u), r = i(t.ctx, l.size, t.pointLabels[o] || ""), t._pointLabelSizes[o] = r;var g = t.getIndexAngle(o),
                p = f.toDegrees(g) % 360,
                m = n(p, s.x, r.w, 0, 180),
                v = n(p, s.y, r.h, 90, 270);m.start < d.l && (d.l = m.start, c.l = g), m.end > d.r && (d.r = m.end, c.r = g), v.start < d.t && (d.t = v.start, c.t = g), v.end > d.b && (d.b = v.end, c.b = g);
          }t.setReductions(u, d, c);
        }function r(t) {
          var e = Math.min(t.height / 2, t.width / 2);t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0);
        }function s(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }function l(t, e, a, i) {
          if (f.isArray(e)) for (var n = a.y, o = 1.5 * i, r = 0; r < e.length; ++r) {
            t.fillText(e[r], a.x, n), n += o;
          } else t.fillText(e, a.x, a.y);
        }function u(t, e, a) {
          90 === t || 270 === t ? a.y -= e.h / 2 : (t > 270 || t < 90) && (a.y -= e.h);
        }function d(t) {
          var i = t.ctx,
              n = f.getValueOrDefault,
              o = t.options,
              r = o.angleLines,
              d = o.pointLabels;i.lineWidth = r.lineWidth, i.strokeStyle = r.color;var c = t.getDistanceFromCenterForValue(o.reverse ? t.min : t.max),
              h = a(t);i.textBaseline = "top";for (var p = e(t) - 1; p >= 0; p--) {
            if (r.display) {
              var m = t.getPointPosition(p, c);i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(m.x, m.y), i.stroke(), i.closePath();
            }var v = t.getPointPosition(p, c + 5),
                b = n(d.fontColor, g.defaultFontColor);i.font = h.font, i.fillStyle = b;var x = t.getIndexAngle(p),
                y = f.toDegrees(x);i.textAlign = s(y), u(y, t._pointLabelSizes[p], v), l(i, t.pointLabels[p] || "", v, h.size);
          }
        }function c(t, a, i, n) {
          var o = t.ctx;if (o.strokeStyle = f.getValueAtIndexOrDefault(a.color, n - 1), o.lineWidth = f.getValueAtIndexOrDefault(a.lineWidth, n - 1), t.options.lineArc) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();else {
            var r = e(t);if (0 === r) return;o.beginPath();var s = t.getPointPosition(0, i);o.moveTo(s.x, s.y);for (var l = 1; l < r; l++) {
              s = t.getPointPosition(l, i), o.lineTo(s.x, s.y);
            }o.closePath(), o.stroke();
          }
        }function h(t) {
          return f.isNumber(t) ? t : 0;
        }var f = t.helpers,
            g = t.defaults.global,
            p = { display: !0, animate: !0, lineArc: !1, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: t.Ticks.formatters.linear }, pointLabels: { fontSize: 10, callback: function callback(t) {
              return t;
            } } },
            m = t.LinearScaleBase.extend({ setDimensions: function setDimensions() {
            var t = this,
                e = t.options,
                a = e.ticks;t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);var i = f.min([t.height, t.width]),
                n = f.getValueOrDefault(a.fontSize, g.defaultFontSize);t.drawingArea = e.display ? i / 2 - (n / 2 + a.backdropPaddingY) : i / 2;
          }, determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                a = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;f.each(e.data.datasets, function (n, o) {
              if (e.isDatasetVisible(o)) {
                var r = e.getDatasetMeta(o);f.each(n.data, function (e, n) {
                  var o = +t.getRightValue(e);isNaN(o) || r.data[n].hidden || (a = Math.min(o, a), i = Math.max(o, i));
                });
              }
            }), t.min = a === Number.POSITIVE_INFINITY ? 0 : a, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
          }, getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                e = f.getValueOrDefault(t.fontSize, g.defaultFontSize);return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)));
          }, convertTicksToLabels: function convertTicksToLabels() {
            var e = this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          }, fit: function fit() {
            this.options.lineArc ? r(this) : o(this);
          }, setReductions: function setReductions(t, e, a) {
            var i = this,
                n = e.l / Math.sin(a.l),
                o = Math.max(e.r - i.width, 0) / Math.sin(a.r),
                r = -e.t / Math.cos(a.t),
                s = -Math.max(e.b - i.height, 0) / Math.cos(a.b);n = h(n), o = h(o), r = h(r), s = h(s), i.drawingArea = Math.min(Math.round(t - (n + o) / 2), Math.round(t - (r + s) / 2)), i.setCenterPoint(n, o, r, s);
          }, setCenterPoint: function setCenterPoint(t, e, a, i) {
            var n = this,
                o = n.width - e - n.drawingArea,
                r = t + n.drawingArea,
                s = a + n.drawingArea,
                l = n.height - i - n.drawingArea;n.xCenter = Math.round((r + o) / 2 + n.left), n.yCenter = Math.round((s + l) / 2 + n.top);
          }, getIndexAngle: function getIndexAngle(t) {
            var a = 2 * Math.PI / e(this),
                i = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                n = i * Math.PI * 2 / 360;return t * a + n;
          }, getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;if (null === t) return 0;var a = e.drawingArea / (e.max - e.min);return e.options.reverse ? (e.max - t) * a : (t - e.min) * a;
          }, getPointPosition: function getPointPosition(t, e) {
            var a = this,
                i = a.getIndexAngle(t) - Math.PI / 2;return { x: Math.round(Math.cos(i) * e) + a.xCenter, y: Math.round(Math.sin(i) * e) + a.yCenter };
          }, getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          }, getBasePosition: function getBasePosition() {
            var t = this,
                e = t.min,
                a = t.max;return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && a < 0 ? a : e > 0 && a > 0 ? e : 0);
          }, draw: function draw() {
            var t = this,
                e = t.options,
                a = e.gridLines,
                i = e.ticks,
                n = f.getValueOrDefault;if (e.display) {
              var o = t.ctx,
                  r = n(i.fontSize, g.defaultFontSize),
                  s = n(i.fontStyle, g.defaultFontStyle),
                  l = n(i.fontFamily, g.defaultFontFamily),
                  u = f.fontString(r, s, l);f.each(t.ticks, function (s, l) {
                if (l > 0 || e.reverse) {
                  var d = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),
                      h = t.yCenter - d;if (a.display && 0 !== l && c(t, a, d, l), i.display) {
                    var f = n(i.fontColor, g.defaultFontColor);if (o.font = u, i.showLabelBackdrop) {
                      var p = o.measureText(s).width;o.fillStyle = i.backdropColor, o.fillRect(t.xCenter - p / 2 - i.backdropPaddingX, h - r / 2 - i.backdropPaddingY, p + 2 * i.backdropPaddingX, r + 2 * i.backdropPaddingY);
                    }o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = f, o.fillText(s, t.xCenter, h);
                  }
                }
              }), e.lineArc || d(t);
            }
          } });t.scaleService.registerScaleType("radialLinear", m, p);
      };
    }, {}], 48: [function (t, e, a) {
      "use strict";
      var i = t(1);i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
        var e = t.helpers,
            a = { units: [{ name: "millisecond", steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, { name: "second", steps: [1, 2, 5, 10, 30] }, { name: "minute", steps: [1, 2, 5, 10, 30] }, { name: "hour", steps: [1, 2, 3, 6, 12] }, { name: "day", steps: [1, 2, 5] }, { name: "week", maxStep: 4 }, { name: "month", maxStep: 3 }, { name: "quarter", maxStep: 4 }, { name: "year", maxStep: !1 }] },
            n = { position: "bottom", time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: { millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm:ss a", hour: "MMM D, hA", day: "ll", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" } }, ticks: { autoSkip: !1 } },
            o = t.Scale.extend({ initialize: function initialize() {
            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this);
          }, getLabelMoment: function getLabelMoment(t, e) {
            return null === t || null === e ? null : "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null;
          }, getLabelDiff: function getLabelDiff(t, e) {
            var a = this;return null === t || null === e ? null : (void 0 === a.labelDiffs && a.buildLabelDiffs(), "undefined" != typeof a.labelDiffs[t] ? a.labelDiffs[t][e] : null);
          }, getMomentStartOf: function getMomentStartOf(t) {
            var e = this;return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit);
          }, determineDataLimits: function determineDataLimits() {
            var t = this;t.labelMoments = [];var a = [];t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i));
            }, t), t.firstTick = i.min.call(t, a), t.lastTick = i.max.call(t, a)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function (n, o) {
              var r = [],
                  s = t.chart.isDatasetVisible(o);"object" == _typeof(n.data[0]) && null !== n.data[0] ? e.each(n.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), r.push(a), s && (t.firstTick = null !== t.firstTick ? i.min(t.firstTick, a) : a, t.lastTick = null !== t.lastTick ? i.max(t.lastTick, a) : a));
              }, t) : r = a, t.labelMoments.push(r);
            }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || i()).clone(), t.lastTick = (t.lastTick || i()).clone();
          }, buildLabelDiffs: function buildLabelDiffs() {
            var t = this;t.labelDiffs = [];var a = [];t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i.diff(t.firstTick, t.tickUnit, !0)));
            }, t), e.each(t.chart.data.datasets, function (i) {
              var n = [];"object" == _typeof(i.data[0]) && null !== i.data[0] ? e.each(i.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), n.push(a.diff(t.firstTick, t.tickUnit, !0)));
              }, t) : n = a, t.labelDiffs.push(n);
            }, t);
          }, buildTicks: function buildTicks() {
            var i = this;i.ctx.save();var n = e.getValueOrDefault(i.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                o = e.getValueOrDefault(i.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                r = e.getValueOrDefault(i.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                s = e.fontString(n, o, r);if (i.ctx.font = s, i.ticks = [], i.unitScale = 1, i.scaleSizeInUnits = 0, i.options.time.unit) i.tickUnit = i.options.time.unit || "day", i.displayFormat = i.options.time.displayFormats[i.tickUnit], i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, 1);else {
              var l = i.isHorizontal() ? i.width : i.height,
                  u = i.tickFormatFunction(i.firstTick, 0, []),
                  d = i.ctx.measureText(u).width,
                  c = Math.cos(e.toRadians(i.options.ticks.maxRotation)),
                  h = Math.sin(e.toRadians(i.options.ticks.maxRotation));d = d * c + n * h;var f = l / d;i.tickUnit = i.options.time.minUnit, i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.displayFormat = i.options.time.displayFormats[i.tickUnit];for (var g = 0, p = a.units[g]; g < a.units.length;) {
                if (i.unitScale = 1, e.isArray(p.steps) && Math.ceil(i.scaleSizeInUnits / f) < e.max(p.steps)) {
                  for (var m = 0; m < p.steps.length; ++m) {
                    if (p.steps[m] >= Math.ceil(i.scaleSizeInUnits / f)) {
                      i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, p.steps[m]);break;
                    }
                  }break;
                }if (p.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < p.maxStep) {
                  i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));break;
                }++g, p = a.units[g], i.tickUnit = p.name;var v = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0),
                    b = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + v + b, i.displayFormat = i.options.time.displayFormats[p.name];
              }
            }var x;if (i.options.time.min ? x = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick), x = i.firstTick), !i.options.time.max) {
              var y = i.getMomentStartOf(i.lastTick),
                  k = y.diff(i.lastTick, i.tickUnit, !0);k < 0 ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : k >= 0 && (i.lastTick = y), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0);
            }i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat), i.ticks.push(i.firstTick.clone());for (var S = i.unitScale; S <= i.scaleSizeInUnits; S += i.unitScale) {
              var M = x.clone().add(S, i.tickUnit);if (i.options.time.max && M.diff(i.lastTick, i.tickUnit, !0) >= 0) break;i.ticks.push(M);
            }var w = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);0 === w && 0 !== i.scaleSizeInUnits || (i.options.time.max ? (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))), i.ctx.restore(), i.labelDiffs = void 0;
          }, getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data.labels && t < a.chart.data.labels.length ? a.chart.data.labels[t] : "",
                n = a.chart.data.datasets[e].data[t];return null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = a.getRightValue(n)), a.options.time.tooltipFormat && (i = a.parseTime(i).format(a.options.time.tooltipFormat)), i;
          }, tickFormatFunction: function tickFormatFunction(t, a, i) {
            var n = t.format(this.displayFormat),
                o = this.options.ticks,
                r = e.getValueOrDefault(o.callback, o.userCallback);return r ? r(n, a, i) : n;
          }, convertTicksToLabels: function convertTicksToLabels() {
            var t = this;t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t);
          }, getPixelForValue: function getPixelForValue(t, e, a) {
            var i = this,
                n = null;if (void 0 !== e && void 0 !== a && (n = i.getLabelDiff(a, e)), null === n && (t && t.isValid || (t = i.parseTime(i.getRightValue(t))), t && t.isValid && t.isValid() && (n = t.diff(i.firstTick, i.tickUnit, !0))), null !== n) {
              var o = 0 !== n ? n / i.scaleSizeInUnits : n;if (i.isHorizontal()) {
                var r = i.width * o;return i.left + Math.round(r);
              }var s = i.height * o;return i.top + Math.round(s);
            }
          }, getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickMoments[t], null, null);
          }, getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal() ? e.width : e.height,
                n = (t - (e.isHorizontal() ? e.left : e.top)) / a;return n *= e.scaleSizeInUnits, e.firstTick.clone().add(i.duration(n, e.tickUnit).asSeconds(), "seconds");
          }, parseTime: function parseTime(t) {
            var e = this;return "string" == typeof e.options.time.parser ? i(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? i(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : i(t, e.options.time.format);
          } });t.scaleService.registerScaleType("time", o, n);
      };
    }, { 1: 1 }] }, {}, [7])(7);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//条形图
var ctxBar = $('#BarChart');
var data1 = {
    labels: $('#bar-data').data('names'),
    datasets: [{
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: $('#bar-data').data('counts')
    }]
};
var myBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: data1,
    options: {
        responsive: true,
        title: {
            display: true,
            text: "所有任务的完成比例（总数：" + $('#bar-data').data('total') + "）"
        },
        legend: {
            display: false
        }
    }

});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// 饼状图
var ctxPie = $('#myChart');
var data = {
    labels: ["未完成", "已完成"],
    datasets: [{
        data: [$('#pie-data').data('todo'), $('#pie-data').data('done')],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
    }]
};
var myDoughnutChart = new Chart(ctxPie, {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        title: {
            display: true,
            text: '所有任务的完成比例（总数：' + $('#pie-data').data('total') + '）'
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);