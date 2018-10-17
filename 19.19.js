webpackJsonp([19,39],{

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */
	
	(function( global, factory ) {
	
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
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];
	
	var document = window.document;
	
	var slice = deletedIds.slice;
	
	var concat = deletedIds.concat;
	
	var push = deletedIds.push;
	
	var indexOf = deletedIds.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "1.12.4",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
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
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// extend jQuery itself if only one argument is passed
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
	
		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray || function( obj ) {
			return jQuery.type( obj ) === "array";
		},
	
		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			try {
	
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {
	
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}
	
			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( !support.ownFirst ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
	
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
				} )( data );
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
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
	
		// Support: Android<4.1, IE<9
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
			var len;
	
			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}
	
				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
	
				for ( ; i < len; i++ ) {
	
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}
	
			return -1;
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}
	
			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[ j ] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
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
			var args, proxy, tmp;
	
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
	
		now: function() {
			return +( new Date() );
		},
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
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
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
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
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
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
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
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
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
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
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
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
		var m, i, elem, nid, nidselect, match, groups, newSelector,
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
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
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
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
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
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
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
		var hasCompare, parent,
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
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
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
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
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
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
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
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
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
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
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
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
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
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
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
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
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
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
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
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt( 0 ) === "<" &&
					selector.charAt( selector.length - 1 ) === ">" &&
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
	
						// scripts is true for back-compat
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
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
	
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[ 2 ] ) {
								return rootjQuery.find( selector );
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
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
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof root.ready !== "undefined" ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;
	
			return this.filter( function() {
				for ( i = 0; i < len; i++ ) {
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
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[ 0 ], jQuery( elem ) );
			}
	
			// Locate the position of the desired element
			return jQuery.inArray(
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem, this );
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
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );
	
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
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.uniqueSort( ret );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}
	
			return this.pushStack( ret );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
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
					locked = true;
					if ( !memory ) {
						self.disable();
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
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
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
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
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
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
	
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
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
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed );
			window.removeEventListener( "load", completed );
	
		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
	
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete" ) {
	
			detach();
			jQuery.ready();
		}
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE6-10
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
	
			// If IE event model is used
			} else {
	
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );
	
				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );
	
				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;
	
				try {
					top = window.frameElement == null && document.documentElement;
				} catch ( e ) {}
	
				if ( top && top.doScroll ) {
					( function doScrollCheck() {
						if ( !jQuery.isReady ) {
	
							try {
	
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll( "left" );
							} catch ( e ) {
								return window.setTimeout( doScrollCheck, 50 );
							}
	
							// detach all dom ready events
							detach();
	
							// and execute any waiting functions
							jQuery.ready();
						}
					} )();
				}
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownFirst = i === "0";
	
	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;
	
	// Execute ASAP in case we need to set body.style.zoom
	jQuery( function() {
	
		// Minified: var a,b,c,d
		var val, div, body, container;
	
		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
	
			// Return for frameset docs that don't have a body
			return;
		}
	
		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );
	
		if ( typeof div.style.zoom !== "undefined" ) {
	
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {
	
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}
	
		body.removeChild( container );
	} );
	
	
	( function() {
		var div = document.createElement( "div" );
	
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	var acceptData = function( elem ) {
		var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
			nodeType = +elem.nodeType || 1;
	
		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :
	
			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
	};
	
	
	
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
	
			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
	
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );
	
			} else {
				data = undefined;
			}
		}
	
		return data;
	}
	
	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {
	
			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}
	
		return true;
	}
	
	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !acceptData( elem ) ) {
			return;
		}
	
		var ret, thisCache,
			internalKey = jQuery.expando,
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
	
		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
			data === undefined && typeof name === "string" ) {
			return;
		}
	
		if ( !id ) {
	
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}
	
		if ( !cache[ id ] ) {
	
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}
	
		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}
	
		thisCache = cache[ id ];
	
		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}
	
			thisCache = thisCache.data;
		}
	
		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}
	
		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {
	
			// First Try to find as-is property data
			ret = thisCache[ name ];
	
			// Test for null|undefined property data
			if ( ret == null ) {
	
				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}
	
		return ret;
	}
	
	function internalRemoveData( elem, name, pvt ) {
		if ( !acceptData( elem ) ) {
			return;
		}
	
		var thisCache, i,
			isNode = elem.nodeType,
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
	
		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}
	
		if ( name ) {
	
			thisCache = pvt ? cache[ id ] : cache[ id ].data;
	
			if ( thisCache ) {
	
				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {
	
					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {
	
						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				} else {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}
	
				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[ i ] ];
				}
	
				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
					return;
				}
			}
		}
	
		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;
	
			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}
	
		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );
	
		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];
	
		// When all else fails, undefined
		} else {
			cache[ id ] = undefined;
		}
	}
	
	jQuery.extend( {
		cache: {},
	
		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
	
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
	
		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},
	
		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},
	
		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},
	
		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );
	
					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					jQuery.data( this, key );
				} );
			}
	
			return arguments.length > 1 ?
	
				// Sets one value
				this.each( function() {
					jQuery.data( this, key, value );
				} ) :
	
				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},
	
		removeData: function( key ) {
			return this.each( function() {
				jQuery.removeData( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
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
	
				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
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
	
					// ensure a hooks for this queue
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
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	
	
	( function() {
		var shrinkWrapBlocksVal;
	
		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}
	
			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;
	
			// Minified: var b,c,d
			var div, body, container;
	
			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {
	
				// Test fired too early or in an unsupported environment, exit.
				return;
			}
	
			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );
	
			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== "undefined" ) {
	
				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =
	
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}
	
			body.removeChild( container );
	
			return shrinkWrapBlocksVal;
		};
	
	} )();
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
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
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
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
				for ( ; i < length; i++ ) {
					fn(
						elems[ i ],
						key,
						raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	var rleadingWhitespace = ( /^\s+/ );
	
	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
			"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
			"mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	
	
	
	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();
	
		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}
	
	
	( function() {
		var div = document.createElement( "div" ),
			fragment = document.createDocumentFragment(),
			input = document.createElement( "input" );
	
		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;
	
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;
	
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;
	
		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";
	
		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;
	
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	
		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );
	
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement( "input" );
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;
	
		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[ jQuery.expando ] = 1;
		support.attributes = !div.getAttribute( jQuery.expando );
	} )();
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
	
		// Support: IE8
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
	};
	
	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
					undefined;
	
		if ( !found ) {
			for ( found = [], elems = context.childNodes || context;
				( elem = elems[ i ] ) != null;
				i++
			) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;
	
	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,
	
			// Ensure a safe fragment
			safe = createSafeFragment( context ),
	
			nodes = [],
			i = 0;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
	
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
					}
	
					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {
	
						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :
	
							// String was a bare <thead> or <tfoot>
							wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;
	
						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
								!tbody.childNodes.length ) {
	
								elem.removeChild( tbody );
							}
						}
					}
	
					jQuery.merge( nodes, tmp.childNodes );
	
					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";
	
					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}
	
					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}
	
		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}
	
		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}
	
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
			tmp = getAll( safe.appendChild( elem ), "script" );
	
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
	
		tmp = null;
	
		return safe;
	}
	
	
	( function() {
		var i, eventName,
			div = document.createElement( "div" );
	
		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for ( i in { submit: true, change: true, focusin: true } ) {
			eventName = "on" + i;
	
			if ( !( support[ i ] = eventName in window ) ) {
	
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i ] = div.attributes[ eventName ].expando === false;
			}
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	
	
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
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
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );
	
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
					return typeof jQuery !== "undefined" &&
						( !e || jQuery.event.triggered !== e.type ) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
	
				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
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
	
					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
	
						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
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
	
			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
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
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
	
				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
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
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
					jQuery._data( cur, "handle" );
	
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
	
				if (
					( !special._default ||
					 special._default.apply( eventPath.pop(), data ) === false
					) && acceptData( elem )
				) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
	
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
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
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}
	
			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
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
						try {
							this.focus();
							return false;
						} catch ( e ) {
	
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
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
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
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
		},
	
		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
	
					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);
	
			jQuery.event.trigger( e, null, elem );
	
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
	
			// This "if" is needed for plain objects
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;
	
			if ( elem.detachEvent ) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if ( typeof elem[ name ] === "undefined" ) {
					elem[ name ] = null;
				}
	
				elem.detachEvent( name, handle );
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
	
					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
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
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}
	
			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();
	
			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( !e || this.isSimulated ) {
				return;
			}
	
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}
	
			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
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
	
	// IE submit delegation
	if ( !support.submit ) {
	
		jQuery.event.special.submit = {
			setup: function() {
	
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
	
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?
	
							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop( elem, "form" ) :
							undefined;
	
					if ( form && !jQuery._data( form, "submit" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submitBubble = true;
						} );
						jQuery._data( form, "submit", true );
					}
				} );
	
				// return undefined since we don't need an event listener
			},
	
			postDispatch: function( event ) {
	
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submitBubble ) {
					delete event._submitBubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event );
					}
				}
			},
	
			teardown: function() {
	
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}
	
	// IE change delegation and checkbox/radio fix
	if ( !support.change ) {
	
		jQuery.event.special.change = {
	
			setup: function() {
	
				if ( rformElems.test( this.nodeName ) ) {
	
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._justChanged = true;
							}
						} );
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._justChanged && !event.isTrigger ) {
								this._justChanged = false;
							}
	
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event );
						} );
					}
					return false;
				}
	
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;
	
					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event );
							}
						} );
						jQuery._data( elem, "change", true );
					}
				} );
			},
	
			handle: function( event ) {
				var elem = event.target;
	
				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger ||
					( elem.type !== "radio" && elem.type !== "checkbox" ) ) {
	
					return event.handleObj.handler.apply( this, arguments );
				}
			},
	
			teardown: function() {
				jQuery.event.remove( this, "._change" );
	
				return !rformElems.test( this.nodeName );
			}
		};
	}
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		} );
	}
	
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
		},
	
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
	
	
	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );
	
	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
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
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}
	
		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;
	
		if ( events ) {
			delete curData.handle;
			curData.events = {};
	
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	
		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}
	
	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;
	
		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		nodeName = dest.nodeName.toLowerCase();
	
		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );
	
			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}
	
			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}
	
		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );
	
		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}
	
			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
				dest.innerHTML = src.innerHTML;
			}
	
		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
	
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set
	
			dest.defaultChecked = dest.checked = src.checked;
	
			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}
	
		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;
	
		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var first, node, hasScripts,
			scripts, doc, fragment,
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
	
							// Support: Android<4.1, PhantomJS<2
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
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}
	
				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			elems = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = elems[ i ] ) != null; i++ ) {
	
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
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
				!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
	
				clone = elem.cloneNode( true );
	
			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}
	
			if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
					( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				// Fix all IE cloning issues
				for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {
	
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[ i ] ) {
						fixCloneNodeIssues( node, destElements[ i ] );
					}
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
						cloneCopyEvent( node, destElements[ i ] );
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
	
			destElements = srcElements = node = null;
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems, /* internal */ forceAcceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;
	
			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
				if ( forceAcceptData || acceptData( elem ) ) {
	
					id = elem[ internalKey ];
					data = id && cache[ id ];
	
					if ( data ) {
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
	
						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {
	
							delete cache[ id ];
	
							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
								elem.removeAttribute( internalKey );
	
							// Webkit & Blink performance suffers when deleting properties
							// from DOM nodes, so set to undefined instead
							// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[ internalKey ] = undefined;
							}
	
							deletedIds.push( id );
						}
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
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
					this.empty().append(
						( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
					);
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
	
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}
	
				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}
	
				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
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
	
				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
	
							// Remove element nodes and prevent memory leaks
							elem = this[ i ] || {};
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
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
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
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		div.style.cssText = "float:left;opacity:.5";
	
		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";
	
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;
	
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild( div );
	
		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";
	
		jQuery.extend( support, {
			reliableHiddenOffsets: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},
	
			boxSizingReliable: function() {
	
				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
	
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
	
			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},
	
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},
	
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		} );
	
		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;
	
			// Setup
			documentElement.appendChild( container );
	
			div.style.cssText =
	
				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
	
			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;
	
			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				divStyle = window.getComputedStyle( div );
				pixelPositionVal = ( divStyle || {} ).top !== "1%";
				reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
				boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";
	
				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";
	
				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";
	
				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );
	
				div.removeChild( contents );
			}
	
			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if ( reliableHiddenOffsetsVal ) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				div.childNodes[ 0 ].style.borderCollapse = "separate";
				contents = div.getElementsByTagName( "td" );
				contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				if ( reliableHiddenOffsetsVal ) {
					contents[ 0 ].style.display = "";
					contents[ 1 ].style.display = "none";
					reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				}
			}
	
			// Teardown
			documentElement.removeChild( container );
		}
	
	} )();
	
	
	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;
	
	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
	
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			if ( computed ) {
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
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
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};
	
		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;
	
			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}
	
			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
	
				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;
	
				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";
	
				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
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
	
			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,
	
		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	
	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// check for vendor prefixed names
		var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] =
						jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display && display !== "none" || !hidden ) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// some non-html elements return undefined for offsetWidth, so check for null/undefined
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
	
			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// use the active box-sizing model to add/subtract irrelevant styles
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
	
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
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
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
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
	
				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch ( e ) {}
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
			var num, val, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Return, converting to number if forced or a qualifier was provided and val looks numeric
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
	
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
							jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	} );
	
	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
	
				// IE uses filters for opacity
				return ropacity.test( ( computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter ) || "" ) ?
						( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
			},
	
			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";
	
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;
	
				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {
	
					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );
	
					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}
	
				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}
	
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return (
					parseFloat( curCSS( elem, "marginLeft" ) ) ||
	
					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					( jQuery.contains( elem.ownerDocument, elem ) ?
						elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) :
						0
					)
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
	
					// assumes a single number if not a string
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
		},
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
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
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
	
				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
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
	
	// Support: IE <=9
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
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
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
			attrs = { height: type },
			i = 0;
	
		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
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
	
				// we're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );
	
		// handle queue: false promises
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
	
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
	
				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always( function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				} );
			}
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}
	
			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
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
	
				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
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
	
				// don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
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
	
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// resolve when we played the last frame
					// otherwise, reject
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
	
		for ( ; index < length ; index++ ) {
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
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
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
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// normalize opt.queue - true/undefined/null -> "fx"
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
	
			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
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
					data = jQuery._data( this );
	
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
	
				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
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
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// enable finishing flag on private data
				data.finish = true;
	
				// empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// turn off finishing flag
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
			timers = jQuery.timers,
			i = 0;
	
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
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
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
		var a,
			input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];
	
		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "checkbox" );
		div.appendChild( input );
	
		a = div.getElementsByTagName( "a" )[ 0 ];
	
		// First batch of tests.
		a.style.cssText = "top:1px";
	
		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";
	
		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute( "style" ) );
	
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute( "href" ) === "/a";
	
		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;
	
		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;
	
		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement( "form" ).enctype;
	
		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";
	
		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	} )();
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if (
						hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
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
	
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled :
									option.getAttribute( "disabled" ) === null ) &&
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
	
						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {
	
							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;
	
							} catch ( _ ) {
	
								// Will be executed only in IE6
								option.scrollHeight;
							}
	
						} else {
							option.selected = false;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
	
					return options;
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
	
	
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;
	
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
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
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
	
						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
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
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
	
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}
	
					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}
	
					elem.removeAttribute( getSetAttribute ? name : propName );
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
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
	
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
	
			} else {
	
				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			attrHandle[ name ] = function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {
	
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[ name ] = function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	} );
	
	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
	
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
	
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}
	
	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {
	
		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
	
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						( ret = elem.ownerDocument.createAttribute( name ) )
					);
				}
	
				ret.value = value += "";
	
				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};
	
		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
						ret.value :
						null;
				}
			};
	
		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};
	
		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};
	
		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each( [ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		} );
	}
	
	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
	
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each( function() {
	
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch ( e ) {}
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
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {
	
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each( [ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		} );
	}
	
	// Support: Safari, IE9+
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
	
				if ( parent ) {
					parent.selectedIndex;
	
					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			},
			set: function( elem ) {
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
	
	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return jQuery.attr( elem, "class" ) || "";
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
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
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
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
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
					classNames = value.match( rnotwhite ) || [];
	
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
	
						// store className if set
						jQuery._data( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr( this, "class",
						className || value === false ?
						"" :
						jQuery._data( this, "__className__" ) || ""
					);
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
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
	
	
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
	jQuery.parseJSON = function( data ) {
	
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
	
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}
	
		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );
	
		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {
	
			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}
	
			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}
	
			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;
	
			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;
	
			// Remove this token
			return "";
		} ) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch ( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
	
		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
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
	
		// Document location
		ajaxLocation = location.href,
	
		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
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
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
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
		var deep, key,
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
		var firstDataType, ct, finalDataType, type,
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
						if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
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
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
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
				"text json": jQuery.parseJSON,
	
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
	
			var
	
				// Cross-domain detection vars
				parts,
	
				// Loop variable
				i,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers as string
				responseHeadersString,
	
				// timeout handle
				timeoutTimer,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				transport,
	
				// Response headers
				responseHeaders,
	
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
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
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
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
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
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" )
				.replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
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
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
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
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
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
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
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
	
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
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
	
			// shift arguments if data argument was omitted
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
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
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
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	function getDisplay( elem ) {
		return elem.style && elem.style.display || jQuery.css( elem, "display" );
	}
	
	function filterHidden( elem ) {
	
		// Disconnected elements are considered hidden
		if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
			return true;
		}
		while ( elem && elem.nodeType === 1 ) {
			if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}
	
	jQuery.expr.filters.hidden = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length ) :
				filterHidden( elem );
	};
	
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
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
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
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
		return s.join( "&" ).replace( r20, "+" );
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
	
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	
		// Support: IE6-IE8
		function() {
	
			// XHR cannot access local files, always use ActiveX for that case
			if ( this.isLocal ) {
				return createActiveXHR();
			}
	
			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if ( document.documentMode > 8 ) {
				return createStandardXHR();
			}
	
			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
				createStandardXHR() || createActiveXHR();
		} :
	
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		} );
	}
	
	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;
	
	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {
	
		jQuery.ajaxTransport( function( options ) {
	
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {
	
				var callback;
	
				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;
	
						// Open the socket
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
	
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}
	
						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );
	
						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;
	
							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
	
								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;
	
								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
	
									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}
	
									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch ( e ) {
	
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}
	
									// Filter status for non standard behaviors
	
									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;
	
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
	
							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};
	
						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if ( !options.async ) {
	
							// If we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
	
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout( callback );
						} else {
	
							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},
	
					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		} );
	}
	
	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	}
	
	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch ( e ) {}
	}
	
	
	
	
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
	
	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
	
			var script,
				head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;
	
			return {
	
				send: function( _, callback ) {
	
					script = document.createElement( "script" );
	
					script.async = true;
	
					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}
	
					script.src = s.url;
	
					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {
	
						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
	
							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;
	
							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}
	
							// Dereference the script
							script = null;
	
							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};
	
					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},
	
				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
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
	
			// force json dataType
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
	
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
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
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
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
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
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
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;
	
			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
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
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== "undefined" ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// we assume that getBoundingClientRect is available when computed position is fixed
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
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? ( prop in win ) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// if curCSS returns percentage, fallback to offset
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
	
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only,
						// but there is currently no good, small way to fix it.
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
				}, type, chainable ? margin : undefined, chainable, null );
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
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
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
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
	
	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ContentLayoutCenter = exports.ContentLayoutWest = exports.ContentLayoutEast = exports.ContentLayoutNorth = undefined;
	
	var _switch = __webpack_require__(481);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp, _class2, _temp2, _class3, _temp3;
	
	__webpack_require__(484);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _propTypes = __webpack_require__(160);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _redux = __webpack_require__(177);
	
	var _actions = __webpack_require__(272);
	
	__webpack_require__(486);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var northHeight = 0;
	var navHeight = 0;
	var widthLimit = 1280;
	
	var ContentLayoutNorth = (_temp = _class = function (_React$Component) {
	    _inherits(ContentLayoutNorth, _React$Component);
	
	    function ContentLayoutNorth(props) {
	        _classCallCheck(this, ContentLayoutNorth);
	
	        var _this = _possibleConstructorReturn(this, (ContentLayoutNorth.__proto__ || Object.getPrototypeOf(ContentLayoutNorth)).call(this, props));
	
	        northHeight = _this.props.height == 0 ? 0 : _this.props.height || 100;
	        return _this;
	    }
	
	    _createClass(ContentLayoutNorth, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (northHeight !== nextProps.height) {
	                northHeight = nextProps.height == 0 ? 0 : nextProps.height || 100;
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            northHeight = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'content-layout-north', style: props.scroll ? { height: this.props.height, overflowX: 'auto' } : { height: this.props.height } },
	                props.children
	            );
	        }
	    }]);
	
	    return ContentLayoutNorth;
	}(_react2["default"].Component), _class.propTypes = {
	    height: _propTypes2["default"].number.isRequired
	}, _temp);
	var ContentLayoutEast = (_temp2 = _class2 = function (_React$Component2) {
	    _inherits(ContentLayoutEast, _React$Component2);
	
	    function ContentLayoutEast(props) {
	        _classCallCheck(this, ContentLayoutEast);
	
	        var _this2 = _possibleConstructorReturn(this, (ContentLayoutEast.__proto__ || Object.getPrototypeOf(ContentLayoutEast)).call(this, props));
	
	        _this2.props.eastWidthChange(_this2.props.width == 0 ? 0 : _this2.props.width || 440);
	        _this2.state = {
	            height: 0,
	            isShow: false
	        };
	        return _this2;
	    }
	
	    _createClass(ContentLayoutEast, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.browser.height !== undefined || nextProps.height !== undefined) {
	                var browserHeight = nextProps.browser.height;
	                var browserWidth = nextProps.browser.width < widthLimit ? widthLimit : nextProps.browser.width;
	                var height = nextProps.height || browserHeight - northHeight - navHeight;
	                this.setState({
	                    height: height,
	                    isShow: browserWidth < widthLimit ? false : !nextProps.layout.switchState ? false : true
	                });
	            }
	            if (nextProps.layout.eastWidth !== nextProps.width) {
	                nextProps.eastWidthChange(nextProps.width == 0 ? 0 : nextProps.width);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var props = this.props;
	
	            var browserHeight = props.browser.height;
	            var height = props.height || browserHeight - northHeight - navHeight;
	            this.setState({
	                height: height,
	                isShow: true
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.eastWidthChange(0);
	        }
	    }, {
	        key: 'switchChange',
	        value: function switchChange(checked) {
	            var props = this.props;
	
	            props.switchState(checked);
	            this.setState({
	                isShow: checked
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(
	                'div',
	                { style: { position: 'relative' } },
	                props.layout.eastWidth !== 0 && props.browser.width >= widthLimit && props.layout.switchState && _react2["default"].createElement(
	                    'div',
	                    { className: 'east-switch-cls' },
	                    _react2["default"].createElement(_switch2["default"], { defaultChecked: true, size: 'small', onChange: this.switchChange.bind(this) }),
	                    '\u53F3\u4FA7\u4FE1\u606F'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'content-layout-east', style: {
	                            width: props.layout.eastWidth,
	                            height: state.height,
	                            display: !state.isShow ? 'none' : 'block',
	                            overflowY: props.overflowY
	                        } },
	                    props.children
	                )
	            );
	        }
	    }]);
	
	    return ContentLayoutEast;
	}(_react2["default"].Component), _class2.propTypes = {
	    width: _propTypes2["default"].number.isRequired,
	    overflowY: _propTypes2["default"].string
	}, _temp2);
	var ContentLayoutWest = (_temp3 = _class3 = function (_React$Component3) {
	    _inherits(ContentLayoutWest, _React$Component3);
	
	    function ContentLayoutWest(props) {
	        _classCallCheck(this, ContentLayoutWest);
	
	        var _this3 = _possibleConstructorReturn(this, (ContentLayoutWest.__proto__ || Object.getPrototypeOf(ContentLayoutWest)).call(this, props));
	
	        _this3.props.westWidthChange(_this3.props.width || 440);
	        _this3.state = {
	            height: 0
	        };
	        return _this3;
	    }
	
	    _createClass(ContentLayoutWest, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.browser.height !== undefined) {
	                var browserHeight = nextProps.browser.height;
	                var browserWidth = nextProps.browser.width;
	                var height = browserHeight - northHeight - navHeight;
	                this.setState({
	                    height: height
	                });
	            }
	            if (nextProps.layout.westWidth !== nextProps.width) {
	                nextProps.westWidthChange(nextProps.width == 0 ? 0 : nextProps.width);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var props = this.props;
	
	            var browserHeight = props.browser.height;
	            var height = browserHeight - northHeight - navHeight;
	            this.setState({
	                height: height
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.westWidthChange(0);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'content-layout-west', style: {
	                        width: props.layout.westWidth,
	                        height: state.height,
	                        overflowY: props.overflowY
	                    } },
	                props.children
	            );
	        }
	    }]);
	
	    return ContentLayoutWest;
	}(_react2["default"].Component), _class3.propTypes = {
	    width: _propTypes2["default"].number.isRequired,
	    overflowY: _propTypes2["default"].string
	}, _temp3);
	
	var ContentLayoutCenter = function (_React$Component4) {
	    _inherits(ContentLayoutCenter, _React$Component4);
	
	    function ContentLayoutCenter(props) {
	        _classCallCheck(this, ContentLayoutCenter);
	
	        var _this4 = _possibleConstructorReturn(this, (ContentLayoutCenter.__proto__ || Object.getPrototypeOf(ContentLayoutCenter)).call(this, props));
	
	        _this4.state = {
	            height: 0,
	            marginRight: 0,
	            marginLeft: 0
	        };
	        return _this4;
	    }
	
	    _createClass(ContentLayoutCenter, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.browser.height !== undefined) {
	                var browserHeight = nextProps.browser.height;
	                var browserWidth = nextProps.browser.width;
	                var height = 0;
	                if (nextProps.navHeight) {
	                    navHeight = nextProps.navHeight;
	                    height = browserHeight - northHeight - navHeight;
	                } else {
	                    height = browserHeight - northHeight;
	                }
	                this.setState({
	                    height: height,
	                    marginRight: browserWidth < widthLimit ? 0 : !nextProps.layout.switchState ? 0 : nextProps.layout.eastWidth,
	                    marginLeft: browserWidth < widthLimit ? 0 : nextProps.layout.westWidth
	                });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var props = this.props;
	
	            var browserHeight = props.browser.height;
	            var browserWidth = props.browser.width;
	            var height = 0;
	            if (props.navHeight) {
	                navHeight = props.navHeight;
	                height = browserHeight - northHeight - navHeight;
	            } else {
	                height = browserHeight - northHeight;
	            }
	            this.setState({
	                height: height,
	                marginRight: browserWidth < widthLimit ? 0 : props.layout.eastWidth,
	                marginLeft: browserWidth < widthLimit ? 0 : props.layout.westWidth
	            });
	            if (this.props.refCallback) {
	                this.props.refCallback(this.refs.target);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'content-layout-center', ref: 'target', style: { marginLeft: state.marginLeft, marginRight: state.marginRight, height: state.height } },
	                props.children
	            );
	        }
	    }]);
	
	    return ContentLayoutCenter;
	}(_react2["default"].Component);
	
	exports.ContentLayoutNorth = ContentLayoutNorth = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser };
	})(ContentLayoutNorth);
	
	exports.ContentLayoutEast = ContentLayoutEast = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, layout: state.layout };
	}, function (dispatch) {
	    return (0, _redux.bindActionCreators)({ switchState: _actions.switchState, eastWidthChange: _actions.eastWidthChange }, dispatch);
	})(ContentLayoutEast);
	
	exports.ContentLayoutWest = ContentLayoutWest = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, layout: state.layout };
	}, function (dispatch) {
	    return (0, _redux.bindActionCreators)({ westWidthChange: _actions.westWidthChange }, dispatch);
	})(ContentLayoutWest);
	
	exports.ContentLayoutCenter = ContentLayoutCenter = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, layout: state.layout };
	})(ContentLayoutCenter);
	
	exports.ContentLayoutNorth = ContentLayoutNorth;
	exports.ContentLayoutEast = ContentLayoutEast;
	exports.ContentLayoutWest = ContentLayoutWest;
	exports.ContentLayoutCenter = ContentLayoutCenter;

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _rcSwitch = __webpack_require__(482);
	
	var _rcSwitch2 = _interopRequireDefault(_rcSwitch);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Switch = (_temp = _class = function (_React$Component) {
	  _inherits(Switch, _React$Component);
	
	  function Switch() {
	    _classCallCheck(this, Switch);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Switch.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        size = _props.size,
	        className = _props.className;
	
	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-small', size === 'small'), _classNames));
	    return _react2["default"].createElement(_rcSwitch2["default"], _extends({ className: cls }, this.props));
	  };
	
	  return Switch;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-switch'
	}, _temp);
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(483);

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(160);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var classNames = __webpack_require__(393);
	
	function noop() {}
	
	var Switch = function (_Component) {
	  _inherits(Switch, _Component);
	
	  function Switch(props) {
	    _classCallCheck(this, Switch);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    var checked = false;
	    if ('checked' in props) {
	      checked = !!props.checked;
	    } else {
	      checked = !!props.defaultChecked;
	    }
	    _this.state = { checked: checked };
	    return _this;
	  }
	
	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: !!nextProps.checked
	      });
	    }
	  };
	
	  Switch.prototype.setChecked = function setChecked(checked) {
	    if (!('checked' in this.props)) {
	      this.setState({
	        checked: checked
	      });
	    }
	    this.props.onChange(checked);
	  };
	
	  Switch.prototype.toggle = function toggle() {
	    var checked = !this.state.checked;
	    this.setChecked(checked);
	  };
	
	  Switch.prototype.handleKeyDown = function handleKeyDown(e) {
	    if (e.keyCode === 37) {
	      this.setChecked(false);
	    }
	    if (e.keyCode === 39) {
	      this.setChecked(true);
	    }
	  };
	
	  // Handle auto focus when click switch in Chrome
	
	
	  Switch.prototype.handleMouseUp = function handleMouseUp(e) {
	    if (this.refs.node) {
	      this.refs.node.blur();
	    }
	    if (this.props.onMouseUp) {
	      this.props.onMouseUp(e);
	    }
	  };
	
	  Switch.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        className = _props.className,
	        prefixCls = _props.prefixCls,
	        disabled = _props.disabled,
	        checkedChildren = _props.checkedChildren,
	        unCheckedChildren = _props.unCheckedChildren,
	        restProps = _objectWithoutProperties(_props, ['className', 'prefixCls', 'disabled', 'checkedChildren', 'unCheckedChildren']);
	
	    var checked = this.state.checked;
	    var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
	    return _react2["default"].createElement(
	      'span',
	      _extends({}, restProps, {
	        className: switchClassName,
	        tabIndex: disabled ? -1 : 0,
	        ref: 'node',
	        onKeyDown: this.handleKeyDown.bind(this),
	        onClick: disabled ? noop : this.toggle.bind(this),
	        onMouseUp: this.handleMouseUp.bind(this)
	      }),
	      _react2["default"].createElement(
	        'span',
	        { className: prefixCls + '-inner' },
	        checked ? checkedChildren : unCheckedChildren
	      )
	    );
	  };
	
	  return Switch;
	}(_react.Component);
	
	Switch.propTypes = {
	  className: _propTypes2["default"].string,
	  prefixCls: _propTypes2["default"].string,
	  disabled: _propTypes2["default"].bool,
	  checkedChildren: _propTypes2["default"].any,
	  unCheckedChildren: _propTypes2["default"].any,
	  onChange: _propTypes2["default"].func,
	  onMouseUp: _propTypes2["default"].func,
	  checked: _propTypes2["default"].bool,
	  defaultChecked: _propTypes2["default"].bool
	};
	
	Switch.defaultProps = {
	  prefixCls: 'rc-switch',
	  checkedChildren: null,
	  unCheckedChildren: null,
	  className: '',
	  defaultChecked: false,
	  onChange: noop
	};
	
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(485);

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(493);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Group = __webpack_require__(499);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	_Input2["default"].Group = _Group2["default"];
	exports["default"] = _Input2["default"];
	module.exports = exports['default'];

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _calculateNodeHeight = __webpack_require__(494);
	
	var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);
	
	var _object = __webpack_require__(495);
	
	var _object2 = _interopRequireDefault(_object);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function fixControlledValue(value) {
	  if (typeof value === 'undefined' || value === null) {
	    return '';
	  }
	  return value;
	}
	
	function onNextFrame(cb) {
	  if (window.requestAnimationFrame) {
	    return window.requestAnimationFrame(cb);
	  }
	  return window.setTimeout(cb, 1);
	}
	
	function clearNextFrameAction(nextFrameId) {
	  if (window.cancelAnimationFrame) {
	    window.cancelAnimationFrame(nextFrameId);
	  } else {
	    window.clearTimeout(nextFrameId);
	  }
	}
	
	var Input = (_temp = _class = function (_Component) {
	  _inherits(Input, _Component);
	
	  function Input(props) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleKeyDown = function (e) {
	      if (e.keyCode === 13) {
	        _this.props.onPressEnter(e);
	      }
	      _this.props.onKeyDown(e);
	    };
	
	    _this.handleTextareaChange = function (e) {
	      if (!('value' in _this.props)) {
	        _this.resizeTextarea();
	      }
	      _this.props.onChange(e);
	    };
	
	    _this.resizeTextarea = function () {
	      var _this$props = _this.props,
	          type = _this$props.type,
	          autosize = _this$props.autosize;
	
	      if (type !== 'textarea' || !autosize || !_this.refs.input) {
	        return;
	      }
	      var minRows = autosize ? autosize.minRows : null;
	      var maxRows = autosize ? autosize.maxRows : null;
	      var textareaStyles = (0, _calculateNodeHeight2["default"])(_this.refs.input, false, minRows, maxRows);
	      _this.setState({ textareaStyles: textareaStyles });
	    };
	
	    _this.state = {
	      textareaStyles: null
	    };
	    return _this;
	  }
	
	  Input.prototype.componentDidMount = function componentDidMount() {
	    this.resizeTextarea();
	  };
	
	  Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    // Re-render with the new content then recalculate the height as required.
	    if (this.props.value !== nextProps.value) {
	      if (this.nextFrameActionId) {
	        clearNextFrameAction(this.nextFrameActionId);
	      }
	      this.nextFrameActionId = onNextFrame(this.resizeTextarea);
	    }
	  };
	
	  Input.prototype.renderLabledInput = function renderLabledInput(children) {
	    var _classNames;
	
	    var props = this.props;
	    var wrapperClassName = props.prefixCls + '-group';
	    var addonClassName = wrapperClassName + '-addon';
	    var addonBefore = props.addonBefore ? _react2["default"].createElement(
	      'span',
	      { className: addonClassName },
	      props.addonBefore
	    ) : null;
	
	    var addonAfter = props.addonAfter ? _react2["default"].createElement(
	      'span',
	      { className: addonClassName },
	      props.addonAfter
	    ) : null;
	
	    var className = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, props.prefixCls + '-wrapper', true), _defineProperty(_classNames, wrapperClassName, addonBefore || addonAfter), _classNames));
	
	    return _react2["default"].createElement(
	      'span',
	      { className: className },
	      addonBefore,
	      children,
	      addonAfter
	    );
	  };
	
	  Input.prototype.renderInput = function renderInput() {
	    var _classNames2;
	
	    var props = _extends({}, this.props);
	
	    // Fix https://fb.me/react-unknown-prop
	    var otherProps = (0, _object2["default"])(this.props, ['prefixCls', 'onPressEnter', 'autosize', 'addonBefore', 'addonAfter']);
	
	    var prefixCls = props.prefixCls;
	    if (!props.type) {
	      return props.children;
	    }
	
	    var inputClassName = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls, true), _defineProperty(_classNames2, prefixCls + '-sm', props.size === 'small'), _defineProperty(_classNames2, prefixCls + '-lg', props.size === 'large'), _defineProperty(_classNames2, props.className, !!props.className), _classNames2));
	
	    if ('value' in props) {
	      otherProps.value = fixControlledValue(props.value);
	      // Input elements must be either controlled or uncontrolled,
	      // specify either the value prop, or the defaultValue prop, but not both.
	      delete otherProps.defaultValue;
	    }
	
	    switch (props.type) {
	      case 'textarea':
	        return _react2["default"].createElement('textarea', _extends({}, otherProps, {
	          style: _extends({}, props.style, this.state.textareaStyles),
	          className: inputClassName,
	          onKeyDown: this.handleKeyDown,
	          onChange: this.handleTextareaChange,
	          ref: 'input'
	        }));
	      default:
	        return _react2["default"].createElement('input', _extends({}, otherProps, {
	          className: inputClassName,
	          onKeyDown: this.handleKeyDown,
	          ref: 'input'
	        }));
	    }
	  };
	
	  Input.prototype.render = function render() {
	    return this.renderLabledInput(this.renderInput());
	  };
	
	  return Input;
	}(_react.Component), _class.defaultProps = {
	  defaultValue: '',
	  disabled: false,
	  prefixCls: 'ant-input',
	  type: 'text',
	  onPressEnter: function onPressEnter() {},
	  onKeyDown: function onKeyDown() {},
	  onChange: function onChange() {},
	
	  autosize: false
	}, _class.propTypes = {
	  type: _react.PropTypes.string,
	  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  size: _react.PropTypes.oneOf(['small', 'default', 'large']),
	  disabled: _react.PropTypes.bool,
	  value: _react.PropTypes.any,
	  defaultValue: _react.PropTypes.any,
	  className: _react.PropTypes.string,
	  addonBefore: _react.PropTypes.node,
	  addonAfter: _react.PropTypes.node,
	  prefixCls: _react.PropTypes.string,
	  autosize: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  onPressEnter: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func
	}, _temp);
	exports["default"] = Input;
	module.exports = exports['default'];

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = calculateNodeHeight;
	// Thanks to https://github.com/andreypopp/react-textarea-autosize/
	
	/**
	 * calculateNodeHeight(uiTextNode, useCache = false)
	 */
	
	var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
	
	var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
	
	var computedStyleCache = {};
	var hiddenTextarea = void 0;
	
	function computedStyle(node) {
	  return window.getComputedStyle ? getComputedStyle(node) : node.currentStyle;
	}
	
	function getStylePropertyValue(style, prop) {
	  var value = void 0;
	  if (style) {
	    value = window.getComputedStyle ? style.getPropertyValue(prop) : style[prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })];
	  }
	  return value;
	}
	
	function calculateNodeStyling(node) {
	  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
	
	  if (useCache && computedStyleCache[nodeRef]) {
	    return computedStyleCache[nodeRef];
	  }
	
	  var style = computedStyle(node);
	
	  var boxSizing = getStylePropertyValue(style, 'box-sizing') || getStylePropertyValue(style, '-moz-box-sizing') || getStylePropertyValue(style, '-webkit-box-sizing');
	
	  var paddingSize = parseFloat(getStylePropertyValue(style, 'padding-bottom')) + parseFloat(getStylePropertyValue(style, 'padding-top'));
	
	  var borderSize = parseFloat(getStylePropertyValue(style, 'border-bottom-width')) + parseFloat(getStylePropertyValue(style, 'border-top-width'));
	
	  var sizingStyle = SIZING_STYLE.map(function (name) {
	    return name + ':' + getStylePropertyValue(style, name);
	  }).join(';');
	
	  var nodeInfo = {
	    sizingStyle: sizingStyle,
	    paddingSize: paddingSize,
	    borderSize: borderSize,
	    boxSizing: boxSizing
	  };
	
	  if (useCache && nodeRef) {
	    computedStyleCache[nodeRef] = nodeInfo;
	  }
	
	  return nodeInfo;
	}
	
	function calculateNodeHeight(uiTextNode) {
	  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }
	
	  // Copy all CSS properties that have an impact on the height of the content in
	  // the textbox
	
	  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
	      paddingSize = _calculateNodeStyling.paddingSize,
	      borderSize = _calculateNodeStyling.borderSize,
	      boxSizing = _calculateNodeStyling.boxSizing,
	      sizingStyle = _calculateNodeStyling.sizingStyle;
	
	  // Need to have the overflow attribute to hide the scrollbar otherwise
	  // text-lines will not calculated properly as the shadow will technically be
	  // narrower for content
	
	
	  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
	  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
	
	  var minHeight = -Infinity;
	  var maxHeight = Infinity;
	  var height = hiddenTextarea.scrollHeight;
	
	  if (boxSizing === 'border-box') {
	    // border-box: add border, since height = content + padding + border
	    height = height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    // remove padding, since height = content
	    height = height - paddingSize;
	  }
	
	  if (minRows !== null || maxRows !== null) {
	    // measure height of a textarea with a single row
	    hiddenTextarea.value = '';
	    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	    if (minRows !== null) {
	      minHeight = singleRowHeight * minRows;
	      if (boxSizing === 'border-box') {
	        minHeight = minHeight + paddingSize + borderSize;
	      }
	      height = Math.max(minHeight, height);
	    }
	    if (maxRows !== null) {
	      maxHeight = singleRowHeight * maxRows;
	      if (boxSizing === 'border-box') {
	        maxHeight = maxHeight + paddingSize + borderSize;
	      }
	      height = Math.min(maxHeight, height);
	    }
	  }
	  return { height: height, minHeight: minHeight, maxHeight: maxHeight };
	}
	module.exports = exports['default'];

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(496);
	var forOwn = __webpack_require__(497);
	
	module.exports = function omit(obj, keys) {
	  if (!isObject(obj)) return {};
	
	  keys = [].concat.apply([], [].slice.call(arguments, 1));
	  var last = keys[keys.length - 1];
	  var res = {}, fn;
	
	  if (typeof last === 'function') {
	    fn = keys.pop();
	  }
	
	  var isFunction = typeof fn === 'function';
	  if (!keys.length && !isFunction) {
	    return obj;
	  }
	
	  forOwn(obj, function(value, key) {
	    if (keys.indexOf(key) === -1) {
	
	      if (!isFunction) {
	        res[key] = value;
	      } else if (fn(value, key, obj)) {
	        res[key] = value;
	      }
	    }
	  });
	  return res;
	};


/***/ }),

/***/ 496:
/***/ (function(module, exports) {

	/*!
	 * is-extendable <https://github.com/jonschlinkert/is-extendable>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isExtendable(val) {
	  return typeof val !== 'undefined' && val !== null
	    && (typeof val === 'object' || typeof val === 'function');
	};


/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var forIn = __webpack_require__(498);
	var hasOwn = Object.prototype.hasOwnProperty;
	
	module.exports = function forOwn(obj, fn, thisArg) {
	  forIn(obj, function(val, key) {
	    if (hasOwn.call(obj, key)) {
	      return fn.call(thisArg, obj[key], key, obj);
	    }
	  });
	};


/***/ }),

/***/ 498:
/***/ (function(module, exports) {

	/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function forIn(obj, fn, thisArg) {
	  for (var key in obj) {
	    if (fn.call(thisArg, obj[key], key, obj) === false) {
	      break;
	    }
	  }
	};


/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = Group;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function Group(props) {
	  var className = (0, _classnames2["default"])(_defineProperty({
	    'ant-input-group': true,
	    'ant-input-group-lg': props.size === 'large',
	    'ant-input-group-sm': props.size === 'small'
	  }, props.className, !!props.className));
	  return _react2["default"].createElement(
	    'span',
	    { className: className, style: props.style },
	    props.children
	  );
	}
	
	Group.propTypes = {
	  children: _react2["default"].PropTypes.any
	};
	module.exports = exports['default'];

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcNotification = __webpack_require__(501);
	
	var _rcNotification2 = _interopRequireDefault(_rcNotification);
	
	var _icon = __webpack_require__(394);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultDuration = 1.5;
	var defaultTop = void 0;
	var messageInstance = void 0;
	var key = 1;
	var prefixCls = 'ant-message';
	
	function getMessageInstance() {
	  messageInstance = messageInstance || _rcNotification2["default"].newInstance({
	    prefixCls: prefixCls,
	    transitionName: 'move-up',
	    style: { top: defaultTop } });
	  return messageInstance;
	}
	
	function notice(content) {
	  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
	  var type = arguments[2];
	  var onClose = arguments[3];
	
	  var iconType = {
	    info: 'info-circle',
	    success: 'check-circle',
	    error: 'cross-circle',
	    warning: 'exclamation-circle',
	    loading: 'loading'
	  }[type];
	
	  var instance = getMessageInstance();
	  instance.notice({
	    key: key,
	    duration: duration,
	    style: {},
	    content: _react2["default"].createElement(
	      'div',
	      { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
	      _react2["default"].createElement(_icon2["default"], { type: iconType }),
	      _react2["default"].createElement(
	        'span',
	        null,
	        content
	      )
	    ),
	    onClose: onClose
	  });
	  return function () {
	    var target = key++;
	    return function () {
	      instance.removeNotice(target);
	    };
	  }();
	}
	
	exports["default"] = {
	  info: function info(content, duration, onClose) {
	    return notice(content, duration, 'info', onClose);
	  },
	  success: function success(content, duration, onClose) {
	    return notice(content, duration, 'success', onClose);
	  },
	  error: function error(content, duration, onClose) {
	    return notice(content, duration, 'error', onClose);
	  },
	
	  // Departed usage, please use warning()
	  warn: function warn(content, duration, onClose) {
	    return notice(content, duration, 'warning', onClose);
	  },
	  warning: function warning(content, duration, onClose) {
	    return notice(content, duration, 'warning', onClose);
	  },
	  loading: function loading(content, duration, onClose) {
	    return notice(content, duration, 'loading', onClose);
	  },
	  config: function config(options) {
	    if ('top' in options) {
	      defaultTop = options.top;
	    }
	    if ('duration' in options) {
	      defaultDuration = options.duration;
	    }
	    if ('prefixCls' in options) {
	      prefixCls = options.prefixCls;
	    }
	  },
	  destroy: function destroy() {
	    if (messageInstance) {
	      messageInstance.destroy();
	      messageInstance = null;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Notification = __webpack_require__(502);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Notification2["default"];
	module.exports = exports['default'];

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(157);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAnimate = __webpack_require__(313);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _createChainedFunction = __webpack_require__(503);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Notice = __webpack_require__(504);
	
	var _Notice2 = _interopRequireDefault(_Notice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var seed = 0;
	var now = Date.now();
	
	function getUuid() {
	  return 'rcNotification_' + now + '_' + seed++;
	}
	
	var Notification = _react2["default"].createClass({
	  displayName: 'Notification',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    transitionName: _react.PropTypes.string,
	    animation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	    style: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-notification',
	      animation: 'fade',
	      style: {
	        top: 65,
	        left: '50%'
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      notices: []
	    };
	  },
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	  add: function add(notice) {
	    var key = notice.key = notice.key || getUuid();
	    this.setState(function (previousState) {
	      var notices = previousState.notices;
	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        return {
	          notices: notices.concat(notice)
	        };
	      }
	    });
	  },
	  remove: function remove(key) {
	    this.setState(function (previousState) {
	      return {
	        notices: previousState.notices.filter(function (notice) {
	          return notice.key !== key;
	        })
	      };
	    });
	  },
	  render: function render() {
	    var _this = this,
	        _className;
	
	    var props = this.props;
	    var noticeNodes = this.state.notices.map(function (notice) {
	      var onClose = (0, _createChainedFunction2["default"])(_this.remove.bind(_this, notice.key), notice.onClose);
	      return _react2["default"].createElement(
	        _Notice2["default"],
	        _extends({
	          prefixCls: props.prefixCls
	        }, notice, {
	          onClose: onClose
	        }),
	        notice.content
	      );
	    });
	    var className = (_className = {}, _defineProperty(_className, props.prefixCls, 1), _defineProperty(_className, props.className, !!props.className), _className);
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className), style: props.style },
	      _react2["default"].createElement(
	        _rcAnimate2["default"],
	        { transitionName: this.getTransitionName() },
	        noticeNodes
	      )
	    );
	  }
	});
	
	Notification.newInstance = function newNotificationInstance(properties) {
	  var props = properties || {};
	  var div = document.createElement('div');
	  document.body.appendChild(div);
	  var notification = _reactDom2["default"].render(_react2["default"].createElement(Notification, props), div);
	  return {
	    notice: function notice(noticeProps) {
	      notification.add(noticeProps);
	    },
	    removeNotice: function removeNotice(key) {
	      notification.remove(key);
	    },
	
	    component: notification,
	    destroy: function destroy() {
	      _reactDom2["default"].unmountComponentAtNode(div);
	      document.body.removeChild(div);
	    }
	  };
	};
	
	exports["default"] = Notification;
	module.exports = exports['default'];

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = arguments;
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Notice = _react2["default"].createClass({
	  displayName: 'Notice',
	
	  propTypes: {
	    duration: _react.PropTypes.number,
	    onClose: _react.PropTypes.func,
	    children: _react.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onEnd: function onEnd() {},
	      onClose: function onClose() {},
	
	      duration: 1.5,
	      style: {
	        right: '50%'
	      }
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    if (this.props.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this.close();
	      }, this.props.duration * 1000);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.clearCloseTimer();
	  },
	  clearCloseTimer: function clearCloseTimer() {
	    if (this.closeTimer) {
	      clearTimeout(this.closeTimer);
	      this.closeTimer = null;
	    }
	  },
	  close: function close() {
	    this.clearCloseTimer();
	    this.props.onClose();
	  },
	  render: function render() {
	    var _className;
	
	    var props = this.props;
	    var componentClass = props.prefixCls + '-notice';
	    var className = (_className = {}, _defineProperty(_className, '' + componentClass, 1), _defineProperty(_className, componentClass + '-closable', props.closable), _defineProperty(_className, props.className, !!props.className), _className);
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className), style: props.style },
	      _react2["default"].createElement(
	        'div',
	        { className: componentClass + '-content' },
	        props.children
	      ),
	      props.closable ? _react2["default"].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
	        _react2["default"].createElement('span', { className: componentClass + '-close-x' })
	      ) : null
	    );
	  }
	});
	
	exports["default"] = Notice;
	module.exports = exports['default'];

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(437);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2["default"])(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(515);

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(516);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;
	
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createDOMForm = __webpack_require__(533);
	
	var _createDOMForm2 = _interopRequireDefault(_createDOMForm);
	
	var _Form = __webpack_require__(567);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormItem = __webpack_require__(570);
	
	var _FormItem2 = _interopRequireDefault(_FormItem);
	
	var _ValueMixin = __webpack_require__(577);
	
	var _ValueMixin2 = _interopRequireDefault(_ValueMixin);
	
	var _constants = __webpack_require__(576);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	_Form2["default"].create = function () {
	  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var options = _extends({}, o, {
	    fieldNameProp: 'id',
	    fieldMetaProp: _constants.FIELD_META_PROP
	  });
	  var formWrapper = (0, _createDOMForm2["default"])(options);
	
	  /* eslint-disable react/prefer-es6-class */
	  return function (Component) {
	    return formWrapper(_react2["default"].createClass({
	      propTypes: {
	        form: _react.PropTypes.object.isRequired
	      },
	      childContextTypes: {
	        form: _react.PropTypes.object.isRequired
	      },
	      getChildContext: function getChildContext() {
	        return {
	          form: this.props.form
	        };
	      },
	      render: function render() {
	        return _react2["default"].createElement(Component, this.props);
	      }
	    }));
	  };
	};
	_Form2["default"].Item = _FormItem2["default"];
	
	// @Deprecated
	_Form2["default"].ValueMixin = _ValueMixin2["default"];
	
	exports["default"] = _Form2["default"];
	module.exports = exports['default'];

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _createBaseForm = __webpack_require__(534);
	
	var _createBaseForm2 = _interopRequireDefault(_createBaseForm);
	
	var _createForm = __webpack_require__(566);
	
	var _utils = __webpack_require__(539);
	
	var _reactDom = __webpack_require__(157);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domScrollIntoView = __webpack_require__(514);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function computedStyle(el, prop) {
	  var getComputedStyle = window.getComputedStyle;
	  var style =
	  // If we have getComputedStyle
	  getComputedStyle ?
	  // Query it
	  // TODO: From CSS-Query notes, we might need (node, null) for FF
	  getComputedStyle(el) :
	
	  // Otherwise, we are in IE and use currentStyle
	  el.currentStyle;
	  if (style) {
	    return style[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })];
	  }
	  return undefined;
	}
	
	function getScrollableContainer(n) {
	  var node = n;
	  var nodeName = void 0;
	  /* eslint no-cond-assign:0 */
	  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
	    var overflowY = computedStyle(node, 'overflowY');
	    if (overflowY === 'auto' || overflowY === 'scroll') {
	      return node;
	    }
	    node = node.parentNode;
	  }
	  return nodeName === 'body' ? node.ownerDocument : node;
	}
	
	var mixin = {
	  getForm: function getForm() {
	    return (0, _extends3["default"])({}, _createForm.mixin.getForm.call(this), {
	      validateFieldsAndScroll: this.validateFieldsAndScroll
	    });
	  },
	  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
	    var _this = this;
	
	    var _getParams = (0, _utils.getParams)(ns, opt, cb);
	
	    var names = _getParams.names;
	    var callback = _getParams.callback;
	    var options = _getParams.options;
	
	
	    var newCb = function newCb(error, values) {
	      if (error) {
	        var firstNode = void 0;
	        var firstTop = void 0;
	        for (var name in error) {
	          if (error.hasOwnProperty(name)) {
	            var instance = _this.getFieldInstance(name);
	            if (instance) {
	              var node = _reactDom2["default"].findDOMNode(instance);
	              var top = node.getBoundingClientRect().top;
	              if (firstTop === undefined || firstTop > top) {
	                firstTop = top;
	                firstNode = node;
	              }
	            }
	          }
	        }
	        if (firstNode) {
	          var c = options.container || getScrollableContainer(firstNode);
	          (0, _domScrollIntoView2["default"])(firstNode, c, (0, _extends3["default"])({
	            onlyScrollIfNeeded: true
	          }, options.scroll));
	        }
	      }
	
	      if (typeof callback === 'function') {
	        callback(error, values);
	      }
	    };
	
	    return this.validateFields(names, options, newCb);
	  }
	};
	
	function createDOMForm(option) {
	  return (0, _createBaseForm2["default"])((0, _extends3["default"])({}, option), [mixin]);
	}
	
	exports["default"] = createDOMForm;
	module.exports = exports['default'];

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(535);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _defineProperty2 = __webpack_require__(508);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(539);
	
	var _asyncValidator = __webpack_require__(541);
	
	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultValidateTrigger = 'onChange';
	var defaultTrigger = defaultValidateTrigger;
	var atom = {};
	
	function createBaseForm() {
	  var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var mixins = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var mapPropsToFields = option.mapPropsToFields;
	  var onFieldsChange = option.onFieldsChange;
	  var fieldNameProp = option.fieldNameProp;
	  var fieldMetaProp = option.fieldMetaProp;
	  var validateMessages = option.validateMessages;
	  var _option$mapProps = option.mapProps;
	  var mapProps = _option$mapProps === undefined ? _utils.mirror : _option$mapProps;
	  var _option$formPropName = option.formPropName;
	  var formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName;
	  var withRef = option.withRef;
	
	
	  function decorate(WrappedComponent) {
	    var Form = _react2["default"].createClass({
	      displayName: 'Form',
	
	      mixins: mixins,
	
	      getInitialState: function getInitialState() {
	        var fields = void 0;
	        if (mapPropsToFields) {
	          fields = mapPropsToFields(this.props);
	        }
	        this.fields = fields || {};
	        this.instances = {};
	        this.fieldsMeta = {};
	        this.cachedBind = {};
	        return {
	          submitting: false
	        };
	      },
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (mapPropsToFields) {
	          this.fields = mapPropsToFields(nextProps);
	        }
	      },
	      onChange: function onChange(name_, action) {
	        var name = name_;
	        var fieldMeta = this.getFieldMeta(name);
	        var validate = fieldMeta.validate;
	
	        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          args[_key - 2] = arguments[_key];
	        }
	
	        if (fieldMeta[action]) {
	          fieldMeta[action].apply(fieldMeta, args);
	        }
	        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, args) : _utils.getValueFromEvent.apply(undefined, args);
	        var fieldContent = void 0;
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
	          name = nameKeyObj.name;
	        }
	        var field = this.getField(name);
	        fieldContent = (0, _extends3["default"])({}, field, {
	          value: value,
	          dirty: (0, _utils.hasRules)(validate)
	        });
	        this.setFields((0, _defineProperty3["default"])({}, name, fieldContent));
	      },
	      onChangeValidate: function onChangeValidate(name_, action) {
	        var name = name_;
	        var fieldMeta = this.getFieldMeta(name);
	
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        if (fieldMeta[action]) {
	          fieldMeta[action].apply(fieldMeta, args);
	        }
	        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, args) : _utils.getValueFromEvent.apply(undefined, args);
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
	          name = nameKeyObj.name;
	        }
	        var field = this.getField(name);
	        field.value = value;
	        field.dirty = true;
	        this.validateFieldsInternal([field], {
	          action: action,
	          options: {
	            firstFields: !!fieldMeta.validateFirst
	          }
	        });
	      },
	      getCacheBind: function getCacheBind(name, action, fn) {
	        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
	        if (!cache[action]) {
	          cache[action] = fn.bind(this, name, action);
	        }
	        return cache[action];
	      },
	      getFieldMeta: function getFieldMeta(name) {
	        return this.fieldsMeta[name];
	      },
	      getField: function getField(name) {
	        var fields = this.fields;
	
	        return (0, _extends3["default"])({}, fields[name], {
	          name: name
	        });
	      },
	      getFieldProps: function getFieldProps(name) {
	        var _this = this;
	
	        var fieldOption = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        if (!name) {
	          throw new Error('must call getFieldProps with valid name string!');
	        }
	
	        var rules = fieldOption.rules;
	        var _fieldOption$trigger = fieldOption.trigger;
	        var trigger = _fieldOption$trigger === undefined ? defaultTrigger : _fieldOption$trigger;
	        var _fieldOption$valuePro = fieldOption.valuePropName;
	        var valuePropName = _fieldOption$valuePro === undefined ? 'value' : _fieldOption$valuePro;
	        var getValueProps = fieldOption.getValueProps;
	        var exclusive = fieldOption.exclusive;
	        var _fieldOption$validate = fieldOption.validateTrigger;
	        var validateTrigger = _fieldOption$validate === undefined ? defaultValidateTrigger : _fieldOption$validate;
	        var _fieldOption$validate2 = fieldOption.validate;
	        var validate = _fieldOption$validate2 === undefined ? [] : _fieldOption$validate2;
	
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        var leadingName = nameKeyObj.name;
	        var key = nameKeyObj.key;
	        var fieldsMeta = this.fieldsMeta;
	
	        var fieldMeta = void 0;
	        var leadingFieldMeta = fieldsMeta[leadingName];
	
	        if (key) {
	          leadingFieldMeta = fieldsMeta[leadingName] = fieldsMeta[leadingName] || {};
	          leadingFieldMeta.virtual = !exclusive;
	          // exclusive allow getFieldProps('x', {initialValue})
	          // non-exclusive does not allow getFieldProps('x', {initialValue})
	          leadingFieldMeta.hidden = !exclusive;
	          leadingFieldMeta.exclusive = exclusive;
	          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
	        } else {
	          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
	        }
	
	        if ('initialValue' in fieldOption) {
	          fieldMeta.initialValue = fieldOption.initialValue;
	        }
	
	        var inputProps = {};
	
	        if (key) {
	          inputProps.key = key;
	        }
	
	        if (fieldNameProp) {
	          inputProps[fieldNameProp] = name;
	        }
	
	        var validateRules = validate.map(function (item) {
	          var newItem = (0, _extends3["default"])({}, item, {
	            trigger: item.trigger || []
	          });
	          if (typeof newItem.trigger === 'string') {
	            newItem.trigger = [newItem.trigger];
	          }
	          return newItem;
	        });
	
	        if (rules) {
	          validateRules.push({
	            trigger: validateTrigger ? [].concat(validateTrigger) : [],
	            rules: rules
	          });
	        }
	
	        validateRules.filter(function (item) {
	          return !!item.rules && item.rules.length;
	        }).map(function (item) {
	          return item.trigger;
	        }).reduce(function (pre, curr) {
	          return pre.concat(curr);
	        }, []).forEach(function (action) {
	          inputProps[action] = _this.getCacheBind(name, action, _this.onChangeValidate);
	        });
	
	        function checkRule(item) {
	          return item.trigger.indexOf(trigger) === -1 || !item.rules || !item.rules.length;
	        }
	
	        if (trigger && validateRules.every(checkRule)) {
	          inputProps[trigger] = this.getCacheBind(name, trigger, this.onChange);
	        }
	        var field = exclusive ? this.getField(leadingName) : this.getField(name);
	        var fieldValue = atom;
	        if (field && 'value' in field) {
	          fieldValue = field.value;
	        }
	        if (fieldValue === atom) {
	          fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
	        }
	        if (getValueProps) {
	          inputProps = (0, _extends3["default"])({}, inputProps, getValueProps(fieldValue));
	        } else {
	          inputProps[valuePropName] = fieldValue;
	        }
	
	        inputProps.ref = this.getCacheBind(name, name + '__ref', this.saveRef);
	
	        var meta = (0, _extends3["default"])({}, fieldMeta, fieldOption, {
	          validate: validateRules
	        });
	
	        fieldsMeta[name] = meta;
	
	        if (fieldMetaProp) {
	          inputProps[fieldMetaProp] = meta;
	        }
	
	        return inputProps;
	      },
	      getFieldMember: function getFieldMember(name, member) {
	        var field = this.getField(name);
	        return field && field[member];
	      },
	      getFieldError: function getFieldError(name) {
	        return (0, _utils.getErrorStrs)(this.getFieldMember(name, 'errors'));
	      },
	      getValidFieldsName: function getValidFieldsName() {
	        var fieldsMeta = this.fieldsMeta;
	        return fieldsMeta ? (0, _keys2["default"])(fieldsMeta).filter(function (name) {
	          return !fieldsMeta[name].hidden;
	        }) : [];
	      },
	      getFieldsValue: function getFieldsValue(names) {
	        var _this2 = this;
	
	        var fields = names || (0, _utils.flatFieldNames)(this.getValidFieldsName());
	        var allValues = {};
	        fields.forEach(function (f) {
	          allValues[f] = _this2.getFieldValue(f);
	        });
	        return allValues;
	      },
	      getFieldValue: function getFieldValue(name) {
	        var fields = this.fields;
	
	        return this.getValueFromFields(name, fields);
	      },
	      getFieldInstance: function getFieldInstance(name) {
	        return this.instances[name];
	      },
	      getValueFromFieldsInternal: function getValueFromFieldsInternal(name, fields) {
	        var field = fields[name];
	        if (field && 'value' in field) {
	          return field.value;
	        }
	        var fieldMeta = this.fieldsMeta[name];
	        return fieldMeta && fieldMeta.initialValue;
	      },
	      getValueFromFields: function getValueFromFields(name, fields) {
	        var fieldsMeta = this.fieldsMeta;
	
	        if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	          var ret = {};
	          for (var fieldKey in fieldsMeta) {
	            if (fieldsMeta.hasOwnProperty(fieldKey)) {
	              var nameKeyObj = (0, _utils.getNameKeyObj)(fieldKey);
	              if (nameKeyObj.name === name && nameKeyObj.key) {
	                ret[nameKeyObj.key] = this.getValueFromFieldsInternal(fieldKey, fields);
	              }
	            }
	          }
	          return ret;
	        }
	        return this.getValueFromFieldsInternal(name, fields);
	      },
	      getRules: function getRules(fieldMeta, action) {
	        var actionRules = fieldMeta.validate.filter(function (item) {
	          return !action || item.trigger.indexOf(action) >= 0;
	        }).map(function (item) {
	          return item.rules;
	        });
	        return (0, _utils.flattenArray)(actionRules);
	      },
	      setFields: function setFields(fields_) {
	        var _this3 = this;
	
	        var fieldsMeta = this.fieldsMeta;
	        var fields = fields_;
	        var nowFields = (0, _extends3["default"])({}, this.fields, fields);
	        var nowValues = {};
	        (0, _keys2["default"])(fieldsMeta).forEach(function (f) {
	          var _getNameKeyObj = (0, _utils.getNameKeyObj)(f);
	
	          var name = _getNameKeyObj.name;
	          var key = _getNameKeyObj.key;
	
	          if (key && fieldsMeta[name].exclusive) {
	            return;
	          }
	          nowValues[f] = _this3.getValueFromFields(f, nowFields);
	        });
	        var changedFieldsName = (0, _keys2["default"])(fields);
	        (0, _keys2["default"])(nowValues).forEach(function (f) {
	          var value = nowValues[f];
	          var fieldMeta = fieldsMeta[f];
	          if (fieldMeta && fieldMeta.normalize) {
	            var nowValue = fieldMeta.normalize(value, _this3.getValueFromFields(f, _this3.fields), nowValues);
	            if (nowValue !== value) {
	              nowFields[f] = (0, _extends3["default"])({}, nowFields[f], {
	                value: nowValue
	              });
	            }
	          }
	        });
	        this.fields = nowFields;
	        if (onFieldsChange) {
	          (function () {
	            var changedFields = {};
	            changedFieldsName.forEach(function (f) {
	              changedFields[f] = _this3.getField(f);
	            });
	            onFieldsChange(_this3.props, changedFields);
	          })();
	        }
	        this.forceUpdate();
	      },
	      setFieldsValue: function setFieldsValue(fieldsValue) {
	        var newFields = {};
	        var fieldsMeta = this.fieldsMeta;
	        var fields = this.fields;
	
	        for (var name in fieldsValue) {
	          if (fieldsValue.hasOwnProperty(name)) {
	            var value = fieldsValue[name];
	            if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	              (0, _utils.clearVirtualField)(name, fields, fieldsMeta);
	              for (var key in value) {
	                if (value.hasOwnProperty(key)) {
	                  newFields[(0, _utils.getNameKeyStr)(name, key)] = value[key];
	                }
	              }
	            } else {
	              newFields[name] = {
	                name: name,
	                value: value
	              };
	            }
	          }
	        }
	        this.setFields(newFields);
	      },
	      setFieldsInitialValue: function setFieldsInitialValue(initialValues) {
	        var fieldsMeta = this.fieldsMeta;
	        for (var name in initialValues) {
	          if (initialValues.hasOwnProperty(name)) {
	            var fieldMeta = fieldsMeta[name];
	            fieldsMeta[name] = (0, _extends3["default"])({}, fieldMeta, {
	              initialValue: initialValues[name]
	            });
	          }
	        }
	      },
	      saveRef: function saveRef(name, _, component) {
	        if (!component) {
	          // after destroy, delete data
	          delete this.fieldsMeta[name];
	          delete this.fields[name];
	          delete this.instances[name];
	          delete this.cachedBind[name];
	          return;
	        }
	        var fieldMeta = this.getFieldMeta(name);
	        if (fieldMeta && fieldMeta.ref) {
	          if (typeof fieldMeta.ref === 'string') {
	            throw new Error('can not set ref string for ' + name);
	          }
	          fieldMeta.ref(component);
	        }
	        this.instances[name] = component;
	      },
	      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
	        var _this4 = this;
	
	        var fieldNames = _ref.fieldNames;
	        var action = _ref.action;
	        var _ref$options = _ref.options;
	        var options = _ref$options === undefined ? {} : _ref$options;
	
	        var allRules = {};
	        var allValues = {};
	        var allFields = {};
	        var alreadyErrors = {};
	        fields.forEach(function (field) {
	          var name = field.name;
	          if (options.force !== true && field.dirty === false) {
	            if (field.errors) {
	              alreadyErrors[name] = {
	                errors: field.errors
	              };
	            }
	            return;
	          }
	          var fieldMeta = _this4.getFieldMeta(name);
	          var newField = (0, _extends3["default"])({}, field);
	          newField.errors = undefined;
	          newField.validating = true;
	          newField.dirty = true;
	          allRules[name] = _this4.getRules(fieldMeta, action);
	          allValues[name] = newField.value;
	          allFields[name] = newField;
	        });
	        this.setFields(allFields);
	        // in case normalize
	        (0, _keys2["default"])(allValues).forEach(function (f) {
	          allValues[f] = _this4.getFieldValue(f);
	        });
	        if (callback && (0, _utils.isEmptyObject)(allFields)) {
	          callback((0, _utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          return;
	        }
	        var validator = new _asyncValidator2["default"](allRules);
	        if (validateMessages) {
	          validator.messages(validateMessages);
	        }
	        validator.validate(allValues, options, function (errors) {
	          var errorsGroup = (0, _extends3["default"])({}, alreadyErrors);
	          if (errors && errors.length) {
	            errors.forEach(function (e) {
	              var fieldName = e.field;
	              if (!errorsGroup[fieldName]) {
	                errorsGroup[fieldName] = {
	                  errors: []
	                };
	              }
	              var fieldErrors = errorsGroup[fieldName].errors;
	              fieldErrors.push(e);
	            });
	          }
	          var expired = [];
	          var nowAllFields = {};
	          (0, _keys2["default"])(allRules).forEach(function (name) {
	            var fieldErrors = errorsGroup[name];
	            var nowField = _this4.getField(name);
	            // avoid concurrency problems
	            if (nowField.value !== allValues[name]) {
	              expired.push({
	                name: name
	              });
	            } else {
	              nowField.errors = fieldErrors && fieldErrors.errors;
	              nowField.value = allValues[name];
	              nowField.validating = false;
	              nowField.dirty = false;
	              nowAllFields[name] = nowField;
	            }
	          });
	          _this4.setFields(nowAllFields);
	          if (callback) {
	            if (expired.length) {
	              expired.forEach(function (_ref2) {
	                var name = _ref2.name;
	
	                var fieldErrors = [{
	                  message: name + ' need to revalidate',
	                  field: name
	                }];
	                errorsGroup[name] = {
	                  expired: true,
	                  errors: fieldErrors
	                };
	              });
	            }
	            callback((0, _utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this4.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	        });
	      },
	      validateFields: function validateFields(ns, opt, cb) {
	        var _this5 = this;
	
	        var _getParams = (0, _utils.getParams)(ns, opt, cb);
	
	        var names = _getParams.names;
	        var callback = _getParams.callback;
	        var options = _getParams.options;
	
	        var fieldNames = names || this.getValidFieldsName();
	        var fields = fieldNames.map(function (name) {
	          var fieldMeta = _this5.getFieldMeta(name);
	          if (!(0, _utils.hasRules)(fieldMeta.validate)) {
	            return null;
	          }
	          var field = _this5.getField(name);
	          field.value = _this5.getFieldValue(name);
	          return field;
	        }).filter(function (f) {
	          return !!f;
	        });
	        if (!fields.length) {
	          if (callback) {
	            callback(null, this.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	          return;
	        }
	        if (!('firstFields' in options)) {
	          options.firstFields = fieldNames.filter(function (name) {
	            var fieldMeta = _this5.getFieldMeta(name);
	            return !!fieldMeta.validateFirst;
	          });
	        }
	        this.validateFieldsInternal(fields, {
	          fieldNames: fieldNames,
	          options: options
	        }, callback);
	      },
	      isFieldValidating: function isFieldValidating(name) {
	        return this.getFieldMember(name, 'validating');
	      },
	      isFieldsValidating: function isFieldsValidating(ns) {
	        var _this6 = this;
	
	        var names = ns || this.getValidFieldsName();
	        return names.some(function (n) {
	          return _this6.isFieldValidating(n);
	        });
	      },
	      isSubmitting: function isSubmitting() {
	        return this.state.submitting;
	      },
	      submit: function submit(callback) {
	        var _this7 = this;
	
	        var fn = function fn() {
	          _this7.setState({
	            submitting: false
	          });
	        };
	        this.setState({
	          submitting: true
	        });
	        callback(fn);
	      },
	      resetFields: function resetFields(ns) {
	        var newFields = {};
	        var fields = this.fields;
	
	        var changed = false;
	        var names = ns || (0, _keys2["default"])(fields);
	        names.forEach(function (name) {
	          var field = fields[name];
	          if (field && 'value' in field) {
	            changed = true;
	            newFields[name] = {};
	          }
	        });
	        if (changed) {
	          this.setFields(newFields);
	        }
	      },
	      render: function render() {
	        var formProps = (0, _defineProperty3["default"])({}, formPropName, this.getForm());
	        if (withRef) {
	          formProps.ref = 'wrappedComponent';
	        }
	        var props = mapProps.call(this, (0, _extends3["default"])({}, formProps, this.props));
	        return _react2["default"].createElement(WrappedComponent, props);
	      }
	    });
	
	    return (0, _utils.argumentContainer)(Form, WrappedComponent);
	  }
	
	  return decorate;
	}
	
	exports["default"] = createBaseForm;
	module.exports = exports['default'];

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(536), __esModule: true };

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(537);
	module.exports = __webpack_require__(329).Object.keys;


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(364);
	var $keys = __webpack_require__(348);
	
	__webpack_require__(538)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(327);
	var core = __webpack_require__(329);
	var fails = __webpack_require__(338);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(535);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.argumentContainer = argumentContainer;
	exports.getValueFromEvent = getValueFromEvent;
	exports.getErrorStrs = getErrorStrs;
	exports.isEmptyObject = isEmptyObject;
	exports.flattenArray = flattenArray;
	exports.mirror = mirror;
	exports.hasRules = hasRules;
	exports.startsWith = startsWith;
	exports.getParams = getParams;
	exports.getNameKeyStr = getNameKeyStr;
	exports.getNameKeyObj = getNameKeyObj;
	exports.flatFields = flatFields;
	exports.flatFieldNames = flatFieldNames;
	exports.clearVirtualField = clearVirtualField;
	
	var _hoistNonReactStatics = __webpack_require__(540);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
	}
	
	function argumentContainer(Container, WrappedComponent) {
	  /* eslint no-param-reassign:0 */
	  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
	  Container.WrappedComponent = WrappedComponent;
	  return (0, _hoistNonReactStatics2["default"])(Container, WrappedComponent);
	}
	
	function getValueFromEvent(e) {
	  // support custom element
	  if (!e || !e.target) {
	    return e;
	  }
	  var target = e.target;
	
	  return target.type === 'checkbox' ? target.checked : target.value;
	}
	
	function getErrorStrs(errors) {
	  if (errors) {
	    return errors.map(function (e) {
	      if (e && e.message) {
	        return e.message;
	      }
	      return e;
	    });
	  }
	  return errors;
	}
	
	function isEmptyObject(obj) {
	  return (0, _keys2["default"])(obj).length === 0;
	}
	
	function flattenArray(arr) {
	  return Array.prototype.concat.apply([], arr);
	}
	
	function mirror(obj) {
	  return obj;
	}
	
	function hasRules(validate) {
	  if (validate) {
	    return validate.some(function (item) {
	      return !!item.rules && item.rules.length;
	    });
	  }
	  return false;
	}
	
	function startsWith(str, prefix) {
	  return str.lastIndexOf(prefix, 0) === 0;
	}
	
	function getParams(ns, opt, cb) {
	  var names = ns;
	  var callback = cb;
	  var options = opt;
	  if (cb === undefined) {
	    if (typeof names === 'function') {
	      callback = names;
	      options = {};
	      names = undefined;
	    } else if (Array.isArray(ns)) {
	      if (typeof options === 'function') {
	        callback = options;
	        options = {};
	      } else {
	        options = options || {};
	      }
	    } else {
	      callback = options;
	      options = names || {};
	      names = undefined;
	    }
	  }
	  return {
	    names: names,
	    callback: callback,
	    options: options
	  };
	}
	
	var NAME_KEY_SEP = '.';
	
	function getNameKeyStr(name, key) {
	  if (key) {
	    return '' + name + NAME_KEY_SEP + key;
	  }
	  return name;
	}
	
	function getNameKeyObj(str) {
	  var index = str.indexOf(NAME_KEY_SEP);
	  if (str.indexOf(NAME_KEY_SEP) !== -1) {
	    var name = str.slice(0, index);
	    var key = str.slice(index + NAME_KEY_SEP.length);
	    return {
	      name: name,
	      key: key
	    };
	  }
	  return {
	    name: str
	  };
	}
	
	function flatFields(fields_, fieldsMeta) {
	  var fields = (0, _extends3["default"])({}, fields_);
	  (0, _keys2["default"])(fields).forEach(function (k) {
	    if (fieldsMeta[k] && fieldsMeta[k].virtual) {
	      var value = fields[k];
	      // flatten
	      for (var k2 in value) {
	        if (value.hasOwnProperty(k2)) {
	          fields[getNameKeyStr(k, k2)] = value[k2];
	        }
	      }
	      delete fields[k];
	    }
	  });
	  return fields;
	}
	
	function flatFieldNames(names) {
	  var ret = {};
	  names.forEach(function (n) {
	    ret[getNameKeyObj(n).name] = 1;
	  });
	  return (0, _keys2["default"])(ret);
	}
	
	function clearVirtualField(name, fields, fieldsMeta) {
	  if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	    /* eslint no-loop-func:0 */
	    (0, _keys2["default"])(fields).forEach(function (ok) {
	      if (getNameKeyObj(ok).name === name) {
	        delete fields[ok];
	      }
	    });
	  }
	}

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(542);
	
	var _validator = __webpack_require__(543);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _messages2 = __webpack_require__(565);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}
	
	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : (0, _typeof3['default'])(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;
	
	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];
	
	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};
	
	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }
	
	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }
	
	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = (0, _extends3['default'])({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = (0, _extends3['default'])({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof3['default'])(rule.fields) === 'object' || (0, _typeof3['default'])(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return (0, _extends3['default'])({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }
	
	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }
	
	        errors = errors.map((0, _util.complementError)(rule));
	
	        if (options.first && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else if (options.error) {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            } else {
	              errors = [];
	            }
	            return doIt(errors);
	          }
	
	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = (0, _extends3['default'])({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }
	
	      var res = rule.validator(rule, data.value, cb, data.source, options);
	      if (res && res.then) {
	        res.then(function () {
	          return cb();
	        }, function (e) {
	          return cb(e);
	        });
	      }
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2['default'].required;
	    }
	    return _validator2['default'][this.getType(rule)] || false;
	  }
	};
	
	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2['default'][type] = validator;
	};
	
	Schema.messages = _messages2.messages;
	
	exports['default'] = Schema;
	module.exports = exports['default'];

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warning = undefined;
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var formatRegExp = /%[sdj%]/g;
	
	var warning = exports.warning = function warning() {};
	
	// don't print warning message when in production env or node runtime
	if (("development") !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
	  exports.warning = warning = function warning(type, errors) {
	    if (typeof console !== 'undefined' && console.warn) {
	      if (errors.every(function (e) {
	        return typeof e === 'string';
	      })) {
	        console.warn(type, errors);
	      }
	    }
	  };
	}
	
	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}
	
	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}
	
	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}
	
	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}
	
	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;
	
	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }
	
	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}
	
	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;
	
	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }
	
	  next([]);
	}
	
	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}
	
	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}
	
	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}
	
	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && (0, _typeof3['default'])(target[s]) === 'object') {
	          target[s] = (0, _extends3['default'])({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _string = __webpack_require__(544);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _method = __webpack_require__(552);
	
	var _method2 = _interopRequireDefault(_method);
	
	var _number = __webpack_require__(553);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _boolean = __webpack_require__(554);
	
	var _boolean2 = _interopRequireDefault(_boolean);
	
	var _regexp = __webpack_require__(555);
	
	var _regexp2 = _interopRequireDefault(_regexp);
	
	var _integer = __webpack_require__(556);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	var _float = __webpack_require__(557);
	
	var _float2 = _interopRequireDefault(_float);
	
	var _array = __webpack_require__(558);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _object = __webpack_require__(559);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _enum = __webpack_require__(560);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(561);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	var _date = __webpack_require__(562);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _required = __webpack_require__(563);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _type = __webpack_require__(564);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  string: _string2['default'],
	  method: _method2['default'],
	  number: _number2['default'],
	  "boolean": _boolean2['default'],
	  regexp: _regexp2['default'],
	  integer: _integer2['default'],
	  "float": _float2['default'],
	  array: _array2['default'],
	  object: _object2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default'],
	  date: _date2['default'],
	  url: _type2['default'],
	  hex: _type2['default'],
	  email: _type2['default'],
	  required: _required2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	      _rule2['default'].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2['default'].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = string;
	module.exports = exports['default'];

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _required = __webpack_require__(546);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _whitespace = __webpack_require__(547);
	
	var _whitespace2 = _interopRequireDefault(_whitespace);
	
	var _type = __webpack_require__(548);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _range = __webpack_require__(549);
	
	var _range2 = _interopRequireDefault(_range);
	
	var _enum = __webpack_require__(550);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(551);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  required: _required2['default'],
	  whitespace: _whitespace2['default'],
	  type: _type2['default'],
	  range: _range2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}
	
	exports['default'] = whitespace;
	module.exports = exports['default'];

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	var _required = __webpack_require__(546);
	
	var _required2 = _interopRequireDefault(_required);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint max-len:0 */
	
	var pattern = {
	  // http://emailregex.com/
	  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};
	
	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  "float": function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};
	
	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2['default'])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}
	
	exports['default'] = range;
	module.exports = exports['default'];

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var ENUM = 'enum';
	
	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern) {
	    if (rule.pattern instanceof RegExp) {
	      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
	      // flag is accidentally set to `true`, which in a validation scenario
	      // is not necessary and the result might be misleading
	      rule.pattern.lastIndex = 0;
	      if (!rule.pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    } else if (typeof rule.pattern === 'string') {
	      var _pattern = new RegExp(rule.pattern);
	      if (!_pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    }
	  }
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = method;
	module.exports = exports['default'];

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = number;
	module.exports = exports['default'];

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = boolean;
	module.exports = exports['default'];

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = regexp;
	module.exports = exports['default'];

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = integer;
	module.exports = exports['default'];

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = floatFn;
	module.exports = exports['default'];

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = array;
	module.exports = exports['default'];

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = object;
	module.exports = exports['default'];

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ENUM = 'enum';
	
	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2['default'][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2['default'].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = date;
	module.exports = exports['default'];

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value);
	  _rule2['default'].required(rule, value, source, errors, options, type);
	  callback(errors);
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    'default': 'Validation error on field %s',
	    required: '%s is required',
	    'enum': '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      "boolean": '%s is not a %s',
	      integer: '%s is not an %s',
	      "float": '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}
	
	var messages = exports.messages = newMessages();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mixin = undefined;
	
	var _createBaseForm = __webpack_require__(534);
	
	var _createBaseForm2 = _interopRequireDefault(_createBaseForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var mixin = exports.mixin = {
	  getForm: function getForm() {
	    return {
	      getFieldsValue: this.getFieldsValue,
	      getFieldValue: this.getFieldValue,
	      getFieldInstance: this.getFieldInstance,
	      setFieldsValue: this.setFieldsValue,
	      setFields: this.setFields,
	      setFieldsInitialValue: this.setFieldsInitialValue,
	      getFieldProps: this.getFieldProps,
	      getFieldError: this.getFieldError,
	      isFieldValidating: this.isFieldValidating,
	      isFieldsValidating: this.isFieldsValidating,
	      isSubmitting: this.isSubmitting,
	      submit: this.submit,
	      validateFields: this.validateFields,
	      resetFields: this.resetFields
	    };
	  }
	};
	
	function createForm(options) {
	  return (0, _createBaseForm2["default"])(options, [mixin]);
	}
	
	exports["default"] = createForm;

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(568);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _object = __webpack_require__(495);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _warning = __webpack_require__(413);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Form = (_temp = _class = function (_React$Component) {
	  _inherits(Form, _React$Component);
	
	  function Form(props) {
	    _classCallCheck(this, Form);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    (0, _warning2["default"])(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
	    return _this;
	  }
	
	  Form.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
	  };
	
	  Form.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        className = _props.className,
	        inline = _props.inline,
	        horizontal = _props.horizontal;
	
	    var formClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, '' + prefixCls, true), _defineProperty(_classNames, prefixCls + '-horizontal', horizontal), _defineProperty(_classNames, prefixCls + '-inline', inline), _defineProperty(_classNames, className, !!className), _classNames));
	
	    var formProps = (0, _object2["default"])(this.props, ['prefixCls', 'className', 'inline', 'horizontal', 'form']);
	
	    return _react2["default"].createElement('form', _extends({}, formProps, { className: formClassName }));
	  };
	
	  return Form;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-form',
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();
	  }
	}, _class.propTypes = {
	  prefixCls: _react2["default"].PropTypes.string,
	  horizontal: _react2["default"].PropTypes.bool,
	  inline: _react2["default"].PropTypes.bool,
	  children: _react2["default"].PropTypes.any,
	  onSubmit: _react2["default"].PropTypes.func
	}, _temp);
	exports["default"] = Form;
	module.exports = exports['default'];

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var shallowEqual = __webpack_require__(569);
	
	module.exports = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return (
	      !shallowEqual(this.props, nextProps) ||
	      !shallowEqual(this.state, nextState)
	    );
	  }
	};


/***/ }),

/***/ 569:
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(568);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _row = __webpack_require__(571);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _col = __webpack_require__(575);
	
	var _col2 = _interopRequireDefault(_col);
	
	var _constants = __webpack_require__(576);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var FormItem = (_temp = _class = function (_React$Component) {
	  _inherits(FormItem, _React$Component);
	
	  function FormItem() {
	    _classCallCheck(this, FormItem);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  FormItem.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
	  };
	
	  FormItem.prototype.getHelpMsg = function getHelpMsg() {
	    var context = this.context;
	    var props = this.props;
	    if (props.help === undefined && context.form) {
	      return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
	    }
	
	    return props.help;
	  };
	
	  FormItem.prototype.getOnlyControl = function getOnlyControl() {
	    var children = _react2["default"].Children.toArray(this.props.children);
	    var child = children.filter(function (c) {
	      return c.props && _constants.FIELD_META_PROP in c.props;
	    })[0];
	    return child !== undefined ? child : null;
	  };
	
	  FormItem.prototype.getChildProp = function getChildProp(prop) {
	    var child = this.getOnlyControl();
	    return child && child.props && child.props[prop];
	  };
	
	  FormItem.prototype.getId = function getId() {
	    return this.getChildProp('id');
	  };
	
	  FormItem.prototype.getMeta = function getMeta() {
	    return this.getChildProp(_constants.FIELD_META_PROP);
	  };
	
	  FormItem.prototype.renderHelp = function renderHelp() {
	    var prefixCls = this.props.prefixCls;
	    var help = this.getHelpMsg();
	    return help ? _react2["default"].createElement(
	      'div',
	      { className: prefixCls + '-explain', key: 'help' },
	      help
	    ) : null;
	  };
	
	  FormItem.prototype.renderExtra = function renderExtra() {
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        extra = _props.extra;
	
	    return extra ? _react2["default"].createElement(
	      'span',
	      { className: prefixCls + '-extra' },
	      extra
	    ) : null;
	  };
	
	  FormItem.prototype.getValidateStatus = function getValidateStatus() {
	    var _context$form = this.context.form,
	        isFieldValidating = _context$form.isFieldValidating,
	        getFieldError = _context$form.getFieldError,
	        getFieldValue = _context$form.getFieldValue;
	
	    var field = this.getId();
	    if (!field) {
	      return '';
	    }
	    if (isFieldValidating(field)) {
	      return 'validating';
	    } else if (!!getFieldError(field)) {
	      return 'error';
	    } else if (getFieldValue(field) !== undefined) {
	      return 'success';
	    }
	    return '';
	  };
	
	  FormItem.prototype.renderValidateWrapper = function renderValidateWrapper(c1, c2, c3) {
	    var classes = '';
	    var form = this.context.form;
	    var props = this.props;
	    var validateStatus = props.validateStatus === undefined && form ? this.getValidateStatus() : props.validateStatus;
	
	    if (validateStatus) {
	      classes = (0, _classnames2["default"])({
	        'has-feedback': props.hasFeedback,
	        'has-success': validateStatus === 'success',
	        'has-warning': validateStatus === 'warning',
	        'has-error': validateStatus === 'error',
	        'is-validating': validateStatus === 'validating'
	      });
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: this.props.prefixCls + '-item-control ' + classes },
	      c1,
	      c2,
	      c3
	    );
	  };
	
	  FormItem.prototype.renderWrapper = function renderWrapper(children) {
	    var wrapperCol = this.props.wrapperCol;
	    return _react2["default"].createElement(
	      _col2["default"],
	      _extends({}, wrapperCol, { key: 'wrapper' }),
	      children
	    );
	  };
	
	  FormItem.prototype.isRequired = function isRequired() {
	    if (this.context.form) {
	      var meta = this.getMeta() || {};
	      var validate = meta.validate || [];
	
	      return validate.filter(function (item) {
	        return !!item.rules;
	      }).some(function (item) {
	        return item.rules.some(function (rule) {
	          return rule.required;
	        });
	      });
	    }
	    return false;
	  };
	
	  FormItem.prototype.renderLabel = function renderLabel() {
	    var props = this.props;
	    var labelCol = props.labelCol;
	    var required = props.required === undefined ? this.isRequired() : props.required;
	
	    var className = (0, _classnames2["default"])(_defineProperty({}, props.prefixCls + '-item-required', required));
	
	    // remove user input colon
	    var label = props.label;
	    if (typeof label === 'string' && label.trim() !== '') {
	      label = props.label.replace(/[：|:]\s*$/, '');
	    }
	
	    return props.label ? _react2["default"].createElement(
	      _col2["default"],
	      _extends({}, labelCol, { key: 'label', className: props.prefixCls + '-item-label' }),
	      _react2["default"].createElement(
	        'label',
	        { htmlFor: props.id || this.getId(), className: className },
	        label
	      )
	    ) : null;
	  };
	
	  FormItem.prototype.renderChildren = function renderChildren() {
	    var props = this.props;
	    var children = _react2["default"].Children.map(props.children, function (child) {
	      if (child && typeof child.type === 'function' && !child.props.size) {
	        return _react2["default"].cloneElement(child, { size: 'large' });
	      }
	      return child;
	    });
	    return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
	  };
	
	  FormItem.prototype.renderFormItem = function renderFormItem(children) {
	    var _itemClassName;
	
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var style = props.style;
	    var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, prefixCls + '-item', true), _defineProperty(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg()), _defineProperty(_itemClassName, '' + props.className, !!props.className), _itemClassName);
	
	    return _react2["default"].createElement(
	      _row2["default"],
	      { className: (0, _classnames2["default"])(itemClassName), style: style },
	      children
	    );
	  };
	
	  FormItem.prototype.render = function render() {
	    var children = this.renderChildren();
	    return this.renderFormItem(children);
	  };
	
	  return FormItem;
	}(_react2["default"].Component), _class.defaultProps = {
	  hasFeedback: false,
	  prefixCls: 'ant-form'
	}, _class.propTypes = {
	  prefixCls: _react2["default"].PropTypes.string,
	  label: _react2["default"].PropTypes.node,
	  labelCol: _react2["default"].PropTypes.object,
	  help: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.node, _react2["default"].PropTypes.bool]),
	  validateStatus: _react2["default"].PropTypes.oneOf(['', 'success', 'warning', 'error', 'validating']),
	  hasFeedback: _react2["default"].PropTypes.bool,
	  wrapperCol: _react2["default"].PropTypes.object,
	  className: _react2["default"].PropTypes.string,
	  id: _react2["default"].PropTypes.string,
	  children: _react2["default"].PropTypes.node
	}, _class.contextTypes = {
	  form: _react2["default"].PropTypes.object
	}, _temp);
	exports["default"] = FormItem;
	module.exports = exports['default'];

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _layout = __webpack_require__(572);
	
	exports["default"] = _layout.Row;
	module.exports = exports['default'];

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;
	
	var _row = __webpack_require__(573);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _col = __webpack_require__(574);
	
	var _col2 = _interopRequireDefault(_col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Row = _row2["default"];
	exports.Col = _col2["default"];

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Row = (_temp = _class = function (_React$Component) {
	  _inherits(Row, _React$Component);
	
	  function Row() {
	    _classCallCheck(this, Row);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Row.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        type = _props.type,
	        justify = _props.justify,
	        align = _props.align,
	        className = _props.className,
	        gutter = _props.gutter,
	        style = _props.style,
	        children = _props.children,
	        others = _objectWithoutProperties(_props, ['type', 'justify', 'align', 'className', 'gutter', 'style', 'children']);
	
	    var classes = (0, _classnames2["default"])((_classNames = {
	      'ant-row': !type
	    }, _defineProperty(_classNames, 'ant-row-' + type, type), _defineProperty(_classNames, 'ant-row-' + type + '-' + justify, justify), _defineProperty(_classNames, 'ant-row-' + type + '-' + align, align), _defineProperty(_classNames, className, className), _classNames));
	    var rowStyle = gutter > 0 ? _extends({
	      marginLeft: gutter / -2,
	      marginRight: gutter / -2
	    }, style) : style;
	    var cols = _react.Children.map(children, function (col) {
	      if (!col) {
	        return null;
	      }
	      if (col.props) {
	        return (0, _react.cloneElement)(col, {
	          style: gutter > 0 ? _extends({
	            paddingLeft: gutter / 2,
	            paddingRight: gutter / 2
	          }, col.props.style) : col.props.style
	        });
	      }
	      return col;
	    });
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, { className: classes, style: rowStyle }),
	      cols
	    );
	  };
	
	  return Row;
	}(_react2["default"].Component), _class.defaultProps = {
	  gutter: 0
	}, _class.propTypes = {
	  type: _react2["default"].PropTypes.string,
	  align: _react2["default"].PropTypes.string,
	  justify: _react2["default"].PropTypes.string,
	  className: _react2["default"].PropTypes.string,
	  children: _react2["default"].PropTypes.node,
	  gutter: _react2["default"].PropTypes.number
	}, _temp);
	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports["default"] = Col;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stringOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);
	var objectOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.number]);
	
	function Col(props) {
	  var _extends3;
	
	  var span = props.span,
	      order = props.order,
	      offset = props.offset,
	      push = props.push,
	      pull = props.pull,
	      className = props.className,
	      children = props.children,
	      others = _objectWithoutProperties(props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children']);
	
	  var sizeClassObj = {};
	  ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
	    var _extends2;
	
	    var sizeProps = {};
	    if (typeof props[size] === 'number') {
	      sizeProps.span = props[size];
	    } else if (_typeof(props[size]) === 'object') {
	      sizeProps = props[size] || {};
	    }
	    delete others[size];
	    sizeClassObj = _extends({}, sizeClassObj, (_extends2 = {}, _defineProperty(_extends2, 'ant-col-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), _defineProperty(_extends2, 'ant-col-' + size + '-order-' + sizeProps.order, sizeProps.order), _defineProperty(_extends2, 'ant-col-' + size + '-offset-' + sizeProps.offset, sizeProps.offset), _defineProperty(_extends2, 'ant-col-' + size + '-push-' + sizeProps.push, sizeProps.push), _defineProperty(_extends2, 'ant-col-' + size + '-pull-' + sizeProps.pull, sizeProps.pull), _extends2));
	  });
	  var classes = (0, _classnames2["default"])(_extends((_extends3 = {}, _defineProperty(_extends3, 'ant-col-' + span, span !== undefined), _defineProperty(_extends3, 'ant-col-order-' + order, order), _defineProperty(_extends3, 'ant-col-offset-' + offset, offset), _defineProperty(_extends3, 'ant-col-push-' + push, push), _defineProperty(_extends3, 'ant-col-pull-' + pull, pull), _defineProperty(_extends3, className, !!className), _extends3), sizeClassObj));
	
	  return _react2["default"].createElement(
	    'div',
	    _extends({}, others, { className: classes }),
	    children
	  );
	}
	
	Col.propTypes = {
	  span: stringOrNumber,
	  order: stringOrNumber,
	  offset: stringOrNumber,
	  push: stringOrNumber,
	  pull: stringOrNumber,
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  xs: objectOrNumber,
	  sm: objectOrNumber,
	  md: objectOrNumber,
	  lg: objectOrNumber
	};
	module.exports = exports['default'];

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _layout = __webpack_require__(572);
	
	exports["default"] = _layout.Col;
	module.exports = exports['default'];

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FIELD_META_PROP = exports.FIELD_META_PROP = 'data-__meta';

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var ValueMixin = {
	  setValue: function setValue(field, e) {
	    var v = e;
	    var target = e && e.target;
	    if (target) {
	      if (('' + target.nodeName).toLowerCase() === 'input' && target.type === 'checkbox') {
	        v = target.checked;
	      } else {
	        v = e.target.value;
	      }
	    }
	    var newFormData = {};
	    newFormData[field] = v;
	    this.setState({
	      formData: _extends({}, this.state.formData, newFormData)
	    });
	  }
	};
	
	exports["default"] = ValueMixin;
	module.exports = exports['default'];

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(579);

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(581);

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(585);
	
	__webpack_require__(586);

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(587);

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PERSON_TYPE = exports.TASKTYPE = exports.RULE_LIMITEDNUMBERORLETTER = exports.RULE_POSITIVENUMBER = exports.PAGESIZEOPTIONS = exports.LEVEL = exports.TASK_ANALYSIS_STATUS = exports.HUMANSTATUS = exports.CONTROL_VALID_DATE = exports.RESOURCE_LIB_TYPE = exports.CREDENTIALS_TYPE = exports.NATION = exports.RISK = exports.GLASS = exports.SMILE = exports.AGE = exports.SEX = exports.YES_OR_NO = exports.RULE_SIMILARITY80 = exports.RULE_SIMILARITY70 = exports.RULE_SIMILARITY = exports.RULE_INCORRECTLATITUDE = exports.RULE_INCORRECTLONGITUDE = exports.RULE_INCORRECTPORT = exports.RULE_INCORRECTIP = exports.RULE_INCORRECTOFFICERID = exports.RULE_INCORRECTIDCARDIPSONID = exports.RULE_INCORRECTIDCARD = exports.RULE_URL = exports.RULE_LT64LETTERS = exports.RULE_LT32LETTERS = exports.RULE_LT18LETTERS = exports.RULE_LT10LETTERS = exports.RULE_LT6LETTERS = exports.RULE_NOTSUPPORTED = exports.RULE_MUSTSELECT = exports.RULE_REQUIRED = exports.FORMAT_MONTH_GCF = exports.FORMAT_DATE_GCF = exports.FORMAT_DATETIME_TO_UTC = exports.FORMAT_DATETIME_GCF = exports.FORMAT_HHMM = exports.FORMAT_MONTH = exports.FORMAT_TIME = exports.FORMAT_DATE_ZH_CN = exports.FORMAT_DATE = exports.FORMAT_DATETIME = exports.PLACEHOLDER = undefined;
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	//空白数据的占位符
	var PLACEHOLDER = '--';
	//时期格式
	var FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';
	var FORMAT_DATE = 'YYYY-MM-DD';
	var FORMAT_DATE_ZH_CN = 'YYYY年MM月DD日';
	var FORMAT_MONTH = 'YYYY-MM';
	var FORMAT_TIME = 'HH:mm:ss';
	var FORMAT_HHMM = 'HH:mm';
	var FORMAT_DATETIME_GCF = 'yyyy-MM-dd HH:mm:ss';
	var FORMAT_DATETIME_TO_UTC = 'YYYY-MM-DD[T]HH:mm:ss.SSSZ';
	var FORMAT_DATE_GCF = 'yyyy-MM-dd';
	var FORMAT_MONTH_GCF = 'yyyy-MM';
	//表单校验规则
	var RULE_REQUIRED = { required: true, message: '此项为必填项' };
	var RULE_MUSTSELECT = { required: true, message: '请选择一项' };
	var RULE_NOTSUPPORTED = { pattern: /^[^`~!@#$%^&*()\-=_+]+$/, message: '不支持的字符:`~!@#$%^&*()-=_+' };
	var RULE_LT6LETTERS = { max: 6, message: '最多不超过6个字' };
	var RULE_LT10LETTERS = { max: 10, message: '最多不超过10个字' };
	var RULE_LT18LETTERS = { max: 18, message: '最多不超过18位' };
	var RULE_LT32LETTERS = { max: 32, message: '最多不超过32个字' };
	var RULE_LT64LETTERS = { max: 64, message: '最多不超过64个字' };
	var RULE_URL = { type: 'url', message: '请填写url格式' };
	var RULE_INCORRECTIDCARD = { pattern: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式错误' };
	var RULE_INCORRECTIDCARDIPSONID = { pattern: /(^\d{0,17}(\d|X|x)$)/, message: '身份证搜索格式错误' };
	var RULE_INCORRECTOFFICERID = { pattern: /^\d{6}$/, message: '警官证格式错误' };
	var RULE_INCORRECTIP = { message: 'IP格式错误', pattern: /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/ };
	var RULE_INCORRECTPORT = { message: '端口号必须为数字且应在1-65535之间', pattern: /(^[1-9]\d{0,3}$)|(^[1-5]\d{4}$)|(^6[0-4]\d{3}$)|(^65[0-4]\d{2}$)|(^655[0-2]\d$)|(^6553[0-5]$)/ };
	var RULE_INCORRECTLONGITUDE = { message: '请输入-180.0~+180.0的数字,最多支持7位小数', pattern: /^[\-\+]?(\d{1,2}|1[0-7]?\d{1}|180|\d{1,2}\.\d{0,7}|1[0-7]?\d{1}\.\d{0,7}|180\.0{0,7})$/ };
	var RULE_INCORRECTLATITUDE = { message: '请输入-90.0~+90.0的数字,最多支持7位小数', pattern: /^[\-\+]?([0-8]?\d{1}|90|[0-8]?\d{1}\.\d{0,7}|90\.0{0,7})$/ };
	var RULE_SIMILARITY = { message: '请输入1%-100%的相似度', pattern: /^(100|[1-9]\d|[1-9]|0[1-9])?%?$/ };
	var RULE_SIMILARITY70 = { message: '请输入70%-100%的相似度', pattern: /^([7-9]\d{1}|100)?%?$/ };
	var RULE_SIMILARITY80 = { message: '请输入80%-100%的相似度', pattern: /^([8-9]\d{1}|100)?%?$/ };
	var RULE_POSITIVENUMBER = { message: '请输入正整数', pattern: /^[1-9]\d*$/ };
	var RULE_LIMITEDNUMBERORLETTER = { message: '请输入32位以内的字母或数字', pattern: /^[a-zA-Z0-9]{1,32}$/ };
	//是否
	var YES_OR_NO = {
	    '0': '否',
	    '1': '是'
	    //性别
	};var SEX = {
	    '0': '未知',
	    '1': '男',
	    '2': '女'
	    //年龄
	};var AGE = {
	    '0': '未知',
	    '1': '少年',
	    '2': '青年',
	    '3': '中年',
	    '4': '老年'
	    //微笑
	};var SMILE = {
	    '0': '未知',
	    '1': '不微笑',
	    '2': '微笑'
	    //戴眼镜
	};var GLASS = {
	    '0': '未知',
	    '1': '不戴眼镜',
	    '2': '戴眼镜'
	    //高危人群
	};var RISK = {
	    '0': '未知',
	    '1': '非高危人群',
	    '2': '高危人群'
	    //民族
	};var NATION = {
	    '0': '未知',
	    '1': '汉',
	    '2': '蒙古',
	    '3': '回',
	    '4': '藏',
	    '5': '维吾尔',
	    '6': '苗',
	    '7': '彝',
	    '8': '壮',
	    '9': '布依',
	    '10': '朝鲜',
	    '11': '满',
	    '12': '侗',
	    '13': '瑶',
	    '14': '白',
	    '15': '土家',
	    '16': '哈尼',
	    '17': '哈萨克',
	    '18': '傣',
	    '19': '黎',
	    '20': '傈僳',
	    '21': '佤',
	    '22': '畲',
	    '23': '高山',
	    '24': '拉祜',
	    '25': '水',
	    '26': '东乡',
	    '27': '纳西',
	    '28': '景颇',
	    '29': '柯尔克孜',
	    '30': '土',
	    '31': '达斡尔',
	    '32': '仫佬',
	    '33': '羌',
	    '34': '布朗',
	    '35': '撒拉',
	    '36': '毛南',
	    '37': '仡佬',
	    '38': '锡伯',
	    '39': '阿昌',
	    '40': '普米',
	    '41': '塔吉克',
	    '42': '怒',
	    '43': '乌孜别克',
	    '44': '俄罗斯',
	    '45': '鄂温克',
	    '46': '德昂',
	    '47': '保安',
	    '48': '裕固',
	    '49': '京',
	    '50': '塔塔尔',
	    '51': '独龙',
	    '52': '鄂伦春',
	    '53': '赫哲',
	    '54': '门巴',
	    '55': '珞巴',
	    '56': '基诺'
	    //证件类别
	};var CREDENTIALS_TYPE = {
	    '0': '未知',
	    '1': '身份证',
	    '2': '警官证'
	    //资源库类别
	};var RESOURCE_LIB_TYPE = {
	    '2': '布控库',
	    '3': '非布控库'
	    //布控管理有效时间
	};var CONTROL_VALID_DATE = {
	    '1': '一天',
	    '2': '一周',
	    '3': '一月',
	    '4': '半年',
	    '5': '永久',
	    '6': '自定义'
	    //名单库人员登记状态
	};var HUMANSTATUS = {
	    '1': '未登记',
	    '2': '已登记'
	};
	
	var TASK_ANALYSIS_STATUS = {
	    '1': '未调度',
	    '2': '等待',
	    '3': '正在执行',
	    '4': '已完成',
	    '5': '已删除',
	    '6': '节点不在线',
	    '7': '服务器宕机',
	    '8': '正在停止',
	    '9': '已停止',
	    '10': '几点重启',
	    '11': '暂停',
	    '12': '暂停中',
	    '13': '任务失败'
	};
	
	var LEVEL = {
	    '0': "聚集",
	    '1': '一级',
	    '2': '二级',
	    '3': '三级',
	    '4': '四级'
	
	    // 每页显示数
	};var PAGESIZEOPTIONS = ['10', '20', '30', '40'];
	
	//任务类型
	var TASKTYPE = {
	    '1': '实时分析',
	    '2': '历史挖掘'
	
	    //人员类别
	};var PERSON_TYPE = {
	    '1': '涉恐人员',
	    '2': '涉毒人员',
	    '3': '涉稳人员',
	    '4': '重大刑事犯罪前科',
	    '5': '在逃人员',
	    '6': '肇事肇祸精神病人',
	    '7': '临控人员'
	    //从后台获取人员类别字典
	};_http2["default"].post('/control-web/person/personType').then(function (_ref) {
	    var data = _ref.data;
	
	    var obj = {};
	    data.forEach(function (item) {
	        obj[item.id + ''] = item.name;
	    });
	    exports.PERSON_TYPE = PERSON_TYPE = obj;
	});
	
	exports.PLACEHOLDER = PLACEHOLDER;
	exports.FORMAT_DATETIME = FORMAT_DATETIME;
	exports.FORMAT_DATE = FORMAT_DATE;
	exports.FORMAT_DATE_ZH_CN = FORMAT_DATE_ZH_CN;
	exports.FORMAT_TIME = FORMAT_TIME;
	exports.FORMAT_MONTH = FORMAT_MONTH;
	exports.FORMAT_HHMM = FORMAT_HHMM;
	exports.FORMAT_DATETIME_GCF = FORMAT_DATETIME_GCF;
	exports.FORMAT_DATETIME_TO_UTC = FORMAT_DATETIME_TO_UTC;
	exports.FORMAT_DATE_GCF = FORMAT_DATE_GCF;
	exports.FORMAT_MONTH_GCF = FORMAT_MONTH_GCF;
	exports.RULE_REQUIRED = RULE_REQUIRED;
	exports.RULE_MUSTSELECT = RULE_MUSTSELECT;
	exports.RULE_NOTSUPPORTED = RULE_NOTSUPPORTED;
	exports.RULE_LT6LETTERS = RULE_LT6LETTERS;
	exports.RULE_LT10LETTERS = RULE_LT10LETTERS;
	exports.RULE_LT18LETTERS = RULE_LT18LETTERS;
	exports.RULE_LT32LETTERS = RULE_LT32LETTERS;
	exports.RULE_LT64LETTERS = RULE_LT64LETTERS;
	exports.RULE_URL = RULE_URL;
	exports.RULE_INCORRECTIDCARD = RULE_INCORRECTIDCARD;
	exports.RULE_INCORRECTIDCARDIPSONID = RULE_INCORRECTIDCARDIPSONID;
	exports.RULE_INCORRECTOFFICERID = RULE_INCORRECTOFFICERID;
	exports.RULE_INCORRECTIP = RULE_INCORRECTIP;
	exports.RULE_INCORRECTPORT = RULE_INCORRECTPORT;
	exports.RULE_INCORRECTLONGITUDE = RULE_INCORRECTLONGITUDE;
	exports.RULE_INCORRECTLATITUDE = RULE_INCORRECTLATITUDE;
	exports.RULE_SIMILARITY = RULE_SIMILARITY;
	exports.RULE_SIMILARITY70 = RULE_SIMILARITY70;
	exports.RULE_SIMILARITY80 = RULE_SIMILARITY80;
	exports.YES_OR_NO = YES_OR_NO;
	exports.SEX = SEX;
	exports.AGE = AGE;
	exports.SMILE = SMILE;
	exports.GLASS = GLASS;
	exports.RISK = RISK;
	exports.NATION = NATION;
	exports.CREDENTIALS_TYPE = CREDENTIALS_TYPE;
	exports.RESOURCE_LIB_TYPE = RESOURCE_LIB_TYPE;
	exports.CONTROL_VALID_DATE = CONTROL_VALID_DATE;
	exports.HUMANSTATUS = HUMANSTATUS;
	exports.TASK_ANALYSIS_STATUS = TASK_ANALYSIS_STATUS;
	exports.LEVEL = LEVEL;
	exports.PAGESIZEOPTIONS = PAGESIZEOPTIONS;
	exports.RULE_POSITIVENUMBER = RULE_POSITIVENUMBER;
	exports.RULE_LIMITEDNUMBERORLETTER = RULE_LIMITEDNUMBERORLETTER;
	exports.TASKTYPE = TASKTYPE;
	exports.PERSON_TYPE = PERSON_TYPE;

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTree = __webpack_require__(594);
	
	var _rcTree2 = _interopRequireDefault(_rcTree);
	
	var _openAnimation = __webpack_require__(598);
	
	var _openAnimation2 = _interopRequireDefault(_openAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Tree = (_temp = _class = function (_React$Component) {
	  _inherits(Tree, _React$Component);
	
	  function Tree() {
	    _classCallCheck(this, Tree);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Tree.prototype.render = function render() {
	    var props = this.props;
	    var checkable = props.checkable;
	    if (checkable) {
	      checkable = _react2["default"].createElement('span', { className: props.prefixCls + '-checkbox-inner' });
	    }
	    return _react2["default"].createElement(
	      _rcTree2["default"],
	      _extends({}, props, { checkable: checkable }),
	      this.props.children
	    );
	  };
	
	  return Tree;
	}(_react2["default"].Component), _class.TreeNode = _rcTree2["default"].TreeNode, _class.defaultProps = {
	  prefixCls: 'ant-tree',
	  checkable: false,
	  showIcon: false,
	  openAnimation: _openAnimation2["default"]
	}, _temp);
	exports["default"] = Tree;
	module.exports = exports['default'];

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tree = __webpack_require__(595);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _TreeNode = __webpack_require__(597);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	_Tree2["default"].TreeNode = _TreeNode2["default"];
	
	exports["default"] = _Tree2["default"];
	module.exports = exports['default'];

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(165);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(596);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function noop() {}
	
	var Tree = function (_React$Component) {
	  _inherits(Tree, _React$Component);
	
	  function Tree(props) {
	    _classCallCheck(this, Tree);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    ['onKeyDown', 'onCheck'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    _this.contextmenuKeys = [];
	    _this.checkedKeysChange = true;
	
	    _this.state = {
	      expandedKeys: _this.getDefaultExpandedKeys(props),
	      checkedKeys: _this.getDefaultCheckedKeys(props),
	      selectedKeys: _this.getDefaultSelectedKeys(props),
	      dragNodesKeys: '',
	      dragOverNodeKey: '',
	      dropNodeKey: ''
	    };
	    return _this;
	  }
	
	  Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
	    var checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
	    var selectedKeys = this.getDefaultSelectedKeys(nextProps, true);
	    var st = {};
	    if (expandedKeys) {
	      st.expandedKeys = expandedKeys;
	    }
	    if (checkedKeys) {
	      if (nextProps.checkedKeys === this.props.checkedKeys) {
	        this.checkedKeysChange = false;
	      } else {
	        this.checkedKeysChange = true;
	      }
	      st.checkedKeys = checkedKeys;
	    }
	    if (selectedKeys) {
	      st.selectedKeys = selectedKeys;
	    }
	    this.setState(st);
	  };
	
	  Tree.prototype.onDragStart = function onDragStart(e, treeNode) {
	    this.dragNode = treeNode;
	    this.dragNodesKeys = this.getDragNodes(treeNode);
	    var st = {
	      dragNodesKeys: this.dragNodesKeys
	    };
	    var expandedKeys = this.getExpandedKeys(treeNode, false);
	    if (expandedKeys) {
	      // Controlled expand, save and then reset
	      this.getRawExpandedKeys();
	      st.expandedKeys = expandedKeys;
	    }
	    this.setState(st);
	    this.props.onDragStart({
	      event: e,
	      node: treeNode
	    });
	    this._dropTrigger = false;
	  };
	
	  Tree.prototype.onDragEnterGap = function onDragEnterGap(e, treeNode) {
	    var offsetTop = (0, _util.getOffset)(treeNode.refs.selectHandle).top;
	    var offsetHeight = treeNode.refs.selectHandle.offsetHeight;
	    var pageY = e.pageY;
	    var gapHeight = 2;
	    if (pageY > offsetTop + offsetHeight - gapHeight) {
	      this.dropPosition = 1;
	      return 1;
	    }
	    if (pageY < offsetTop + gapHeight) {
	      this.dropPosition = -1;
	      return -1;
	    }
	    this.dropPosition = 0;
	    return 0;
	  };
	
	  Tree.prototype.onDragEnter = function onDragEnter(e, treeNode) {
	    var enterGap = this.onDragEnterGap(e, treeNode);
	    if (this.dragNode.props.eventKey === treeNode.props.eventKey && enterGap === 0) {
	      this.setState({
	        dragOverNodeKey: ''
	      });
	      return;
	    }
	    var st = {
	      dragOverNodeKey: treeNode.props.eventKey
	    };
	    var expandedKeys = this.getExpandedKeys(treeNode, true);
	    if (expandedKeys) {
	      this.getRawExpandedKeys();
	      st.expandedKeys = expandedKeys;
	    }
	    this.setState(st);
	    this.props.onDragEnter({
	      event: e,
	      node: treeNode,
	      expandedKeys: expandedKeys && [].concat(_toConsumableArray(expandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys))
	    });
	  };
	
	  Tree.prototype.onDragOver = function onDragOver(e, treeNode) {
	    this.props.onDragOver({ event: e, node: treeNode });
	  };
	
	  Tree.prototype.onDragLeave = function onDragLeave(e, treeNode) {
	    this.props.onDragLeave({ event: e, node: treeNode });
	  };
	
	  Tree.prototype.onDrop = function onDrop(e, treeNode) {
	    var key = treeNode.props.eventKey;
	    this.setState({
	      dragOverNodeKey: '',
	      dropNodeKey: key
	    });
	    if (this.dragNodesKeys.indexOf(key) > -1) {
	      if (console.warn) {
	        console.warn('can not drop to dragNode(include it\'s children node)');
	      }
	      return false;
	    }
	
	    var posArr = treeNode.props.pos.split('-');
	    var res = {
	      event: e,
	      node: treeNode,
	      dragNode: this.dragNode,
	      dragNodesKeys: [].concat(_toConsumableArray(this.dragNodesKeys)),
	      dropPosition: this.dropPosition + Number(posArr[posArr.length - 1])
	    };
	    if (this.dropPosition !== 0) {
	      res.dropToGap = true;
	    }
	    if ('expandedKeys' in this.props) {
	      res.rawExpandedKeys = [].concat(_toConsumableArray(this._rawExpandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys));
	    }
	    this.props.onDrop(res);
	    this._dropTrigger = true;
	  };
	
	  Tree.prototype.onExpand = function onExpand(treeNode) {
	    var _this2 = this;
	
	    var expanded = !treeNode.props.expanded;
	    var controlled = 'expandedKeys' in this.props;
	    var expandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
	    var index = expandedKeys.indexOf(treeNode.props.eventKey);
	    if (expanded && index === -1) {
	      expandedKeys.push(treeNode.props.eventKey);
	    } else if (!expanded && index > -1) {
	      expandedKeys.splice(index, 1);
	    }
	    if (!controlled) {
	      this.setState({ expandedKeys: expandedKeys });
	    }
	    this.props.onExpand(expandedKeys, { node: treeNode, expanded: expanded });
	
	    // after data loaded, need set new expandedKeys
	    if (expanded && this.props.loadData) {
	      return this.props.loadData(treeNode).then(function () {
	        if (!controlled) {
	          _this2.setState({ expandedKeys: expandedKeys });
	        }
	      });
	    }
	  };
	
	  Tree.prototype.onCheck = function onCheck(treeNode) {
	    var _this3 = this;
	
	    var checked = !treeNode.props.checked;
	    if (treeNode.props.halfChecked) {
	      checked = true;
	    }
	    var key = treeNode.props.eventKey;
	    var checkedKeys = [].concat(_toConsumableArray(this.state.checkedKeys));
	    var index = checkedKeys.indexOf(key);
	
	    var newSt = {
	      event: 'check',
	      node: treeNode,
	      checked: checked
	    };
	
	    if (this.props.checkStrictly && 'checkedKeys' in this.props) {
	      if (checked && index === -1) {
	        checkedKeys.push(key);
	      }
	      if (!checked && index > -1) {
	        checkedKeys.splice(index, 1);
	      }
	      newSt.checkedNodes = [];
	      (0, _util.loopAllChildren)(this.props.children, function (item, ind, pos, keyOrPos) {
	        if (checkedKeys.indexOf(keyOrPos) !== -1) {
	          newSt.checkedNodes.push(item);
	        }
	      });
	      this.props.onCheck((0, _util.getStrictlyValue)(checkedKeys, this.props.checkedKeys.halfChecked), newSt);
	    } else {
	      if (checked && index === -1) {
	        (function () {
	          _this3.treeNodesStates[treeNode.props.pos].checked = true;
	          var checkedPositions = [];
	          Object.keys(_this3.treeNodesStates).forEach(function (i) {
	            if (_this3.treeNodesStates[i].checked) {
	              checkedPositions.push(i);
	            }
	          });
	          (0, _util.handleCheckState)(_this3.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
	        })();
	      }
	      if (!checked) {
	        this.treeNodesStates[treeNode.props.pos].checked = false;
	        this.treeNodesStates[treeNode.props.pos].halfChecked = false;
	        (0, _util.handleCheckState)(this.treeNodesStates, [treeNode.props.pos], false);
	      }
	      var checkKeys = (0, _util.getCheck)(this.treeNodesStates);
	      newSt.checkedNodes = checkKeys.checkedNodes;
	      newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
	      newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
	      this.checkKeys = checkKeys;
	
	      this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
	      if (!('checkedKeys' in this.props)) {
	        this.setState({
	          checkedKeys: checkedKeys
	        });
	      }
	      this.props.onCheck(checkedKeys, newSt);
	    }
	  };
	
	  Tree.prototype.onSelect = function onSelect(treeNode) {
	    var props = this.props;
	    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	    var eventKey = treeNode.props.eventKey;
	    var index = selectedKeys.indexOf(eventKey);
	    var selected = void 0;
	    if (index !== -1) {
	      selected = false;
	      selectedKeys.splice(index, 1);
	    } else {
	      selected = true;
	      if (!props.multiple) {
	        selectedKeys.length = 0;
	      }
	      selectedKeys.push(eventKey);
	    }
	    var selectedNodes = [];
	    if (selectedKeys.length) {
	      (0, _util.loopAllChildren)(this.props.children, function (item) {
	        if (selectedKeys.indexOf(item.key) !== -1) {
	          selectedNodes.push(item);
	        }
	      });
	    }
	    var newSt = {
	      event: 'select',
	      node: treeNode,
	      selected: selected,
	      selectedNodes: selectedNodes
	    };
	    if (!('selectedKeys' in this.props)) {
	      this.setState({
	        selectedKeys: selectedKeys
	      });
	    }
	    props.onSelect(selectedKeys, newSt);
	  };
	
	  Tree.prototype.onMouseEnter = function onMouseEnter(e, treeNode) {
	    this.props.onMouseEnter({ event: e, node: treeNode });
	  };
	
	  Tree.prototype.onMouseLeave = function onMouseLeave(e, treeNode) {
	    this.props.onMouseLeave({ event: e, node: treeNode });
	  };
	
	  Tree.prototype.onContextMenu = function onContextMenu(e, treeNode) {
	    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	    var eventKey = treeNode.props.eventKey;
	    if (this.contextmenuKeys.indexOf(eventKey) === -1) {
	      this.contextmenuKeys.push(eventKey);
	    }
	    this.contextmenuKeys.forEach(function (key) {
	      var index = selectedKeys.indexOf(key);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	    });
	    if (selectedKeys.indexOf(eventKey) === -1) {
	      selectedKeys.push(eventKey);
	    }
	    this.setState({
	      selectedKeys: selectedKeys
	    });
	    this.props.onRightClick({ event: e, node: treeNode });
	  };
	
	  // all keyboard events callbacks run from here at first
	
	
	  Tree.prototype.onKeyDown = function onKeyDown(e) {
	    e.preventDefault();
	  };
	
	  Tree.prototype.getFilterExpandedKeys = function getFilterExpandedKeys(props, expandKeyProp, expandAll) {
	    var keys = props[expandKeyProp];
	    if (!expandAll && !props.autoExpandParent) {
	      return keys || [];
	    }
	    var expandedPositionArr = [];
	    if (props.autoExpandParent) {
	      (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	        if (keys.indexOf(newKey) > -1) {
	          expandedPositionArr.push(pos);
	        }
	      });
	    }
	    var filterExpandedKeys = [];
	    (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	      if (expandAll) {
	        filterExpandedKeys.push(newKey);
	      } else if (props.autoExpandParent) {
	        expandedPositionArr.forEach(function (p) {
	          if ((p.split('-').length > pos.split('-').length && (0, _util.isInclude)(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
	            filterExpandedKeys.push(newKey);
	          }
	        });
	      }
	    });
	    return filterExpandedKeys.length ? filterExpandedKeys : keys;
	  };
	
	  Tree.prototype.getDefaultExpandedKeys = function getDefaultExpandedKeys(props, willReceiveProps) {
	    var expandedKeys = willReceiveProps ? undefined : this.getFilterExpandedKeys(props, 'defaultExpandedKeys', props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
	    if ('expandedKeys' in props) {
	      expandedKeys = (props.autoExpandParent ? this.getFilterExpandedKeys(props, 'expandedKeys', false) : props.expandedKeys) || [];
	    }
	    return expandedKeys;
	  };
	
	  Tree.prototype.getDefaultCheckedKeys = function getDefaultCheckedKeys(props, willReceiveProps) {
	    var checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
	    if ('checkedKeys' in props) {
	      checkedKeys = props.checkedKeys || [];
	      if (props.checkStrictly) {
	        if (props.checkedKeys.checked) {
	          checkedKeys = props.checkedKeys.checked;
	        } else if (!Array.isArray(props.checkedKeys)) {
	          checkedKeys = [];
	        }
	      }
	    }
	    return checkedKeys;
	  };
	
	  Tree.prototype.getDefaultSelectedKeys = function getDefaultSelectedKeys(props, willReceiveProps) {
	    var getKeys = function getKeys(keys) {
	      if (props.multiple) {
	        return [].concat(_toConsumableArray(keys));
	      }
	      if (keys.length) {
	        return [keys[0]];
	      }
	      return keys;
	    };
	    var selectedKeys = willReceiveProps ? undefined : getKeys(props.defaultSelectedKeys);
	    if ('selectedKeys' in props) {
	      selectedKeys = getKeys(props.selectedKeys);
	    }
	    return selectedKeys;
	  };
	
	  Tree.prototype.getRawExpandedKeys = function getRawExpandedKeys() {
	    if (!this._rawExpandedKeys && 'expandedKeys' in this.props) {
	      this._rawExpandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
	    }
	  };
	
	  Tree.prototype.getOpenTransitionName = function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  };
	
	  Tree.prototype.getDragNodes = function getDragNodes(treeNode) {
	    var dragNodesKeys = [];
	    var tPArr = treeNode.props.pos.split('-');
	    (0, _util.loopAllChildren)(this.props.children, function (item, index, pos, newKey) {
	      var pArr = pos.split('-');
	      if (treeNode.props.pos === pos || tPArr.length < pArr.length && (0, _util.isInclude)(tPArr, pArr)) {
	        dragNodesKeys.push(newKey);
	      }
	    });
	    return dragNodesKeys;
	  };
	
	  Tree.prototype.getExpandedKeys = function getExpandedKeys(treeNode, expand) {
	    var key = treeNode.props.eventKey;
	    var expandedKeys = this.state.expandedKeys;
	    var expandedIndex = expandedKeys.indexOf(key);
	    var exKeys = void 0;
	    if (expandedIndex > -1 && !expand) {
	      exKeys = [].concat(_toConsumableArray(expandedKeys));
	      exKeys.splice(expandedIndex, 1);
	      return exKeys;
	    }
	    if (expand && expandedKeys.indexOf(key) === -1) {
	      return expandedKeys.concat([key]);
	    }
	  };
	
	  Tree.prototype.filterTreeNode = function filterTreeNode(treeNode) {
	    var filterTreeNode = this.props.filterTreeNode;
	    if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
	      return false;
	    }
	    return filterTreeNode.call(this, treeNode);
	  };
	
	  Tree.prototype.renderTreeNode = function renderTreeNode(child, index) {
	    var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	    var pos = level + '-' + index;
	    var key = child.key || pos;
	    var state = this.state;
	    var props = this.props;
	
	    // prefer to child's own selectable property if passed
	    var selectable = props.selectable;
	    if (child.props.hasOwnProperty('selectable')) {
	      selectable = child.props.selectable;
	    }
	
	    var cloneProps = {
	      ref: 'treeNode-' + key,
	      root: this,
	      eventKey: key,
	      pos: pos,
	      selectable: selectable,
	      loadData: props.loadData,
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      onRightClick: props.onRightClick,
	      prefixCls: props.prefixCls,
	      showLine: props.showLine,
	      showIcon: props.showIcon,
	      draggable: props.draggable,
	      dragOver: state.dragOverNodeKey === key && this.dropPosition === 0,
	      dragOverGapTop: state.dragOverNodeKey === key && this.dropPosition === -1,
	      dragOverGapBottom: state.dragOverNodeKey === key && this.dropPosition === 1,
	      _dropTrigger: this._dropTrigger,
	      expanded: state.expandedKeys.indexOf(key) !== -1,
	      selected: state.selectedKeys.indexOf(key) !== -1,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      filterTreeNode: this.filterTreeNode.bind(this)
	    };
	    if (props.checkable) {
	      cloneProps.checkable = props.checkable;
	      if (props.checkStrictly) {
	        if (state.checkedKeys) {
	          cloneProps.checked = state.checkedKeys.indexOf(key) !== -1 || false;
	        }
	        if (props.checkedKeys.halfChecked) {
	          cloneProps.halfChecked = props.checkedKeys.halfChecked.indexOf(key) !== -1 || false;
	        } else {
	          cloneProps.halfChecked = false;
	        }
	      } else {
	        if (this.checkedKeys) {
	          cloneProps.checked = this.checkedKeys.indexOf(key) !== -1 || false;
	        }
	        cloneProps.halfChecked = this.halfCheckedKeys.indexOf(key) !== -1;
	      }
	
	      if (this.treeNodesStates[pos]) {
	        (0, _objectAssign2["default"])(cloneProps, this.treeNodesStates[pos].siblingPosition);
	      }
	    }
	    return _react2["default"].cloneElement(child, cloneProps);
	  };
	
	  Tree.prototype.render = function render() {
	    var _this4 = this;
	
	    var props = this.props;
	    var domProps = {
	      className: (0, _classnames2["default"])(props.className, props.prefixCls),
	      role: 'tree-node'
	    };
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    // console.log(this.state.expandedKeys, this._rawExpandedKeys, props.children);
	    if (props.checkable && (this.checkedKeysChange || props.loadData)) {
	      if (props.checkStrictly) {
	        this.treeNodesStates = {};
	        (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
	          _this4.treeNodesStates[pos] = {
	            siblingPosition: siblingPosition
	          };
	        });
	      } else if (props._treeNodesStates) {
	        this.treeNodesStates = props._treeNodesStates.treeNodesStates;
	        this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
	        this.checkedKeys = props._treeNodesStates.checkedKeys;
	      } else {
	        (function () {
	          var checkedKeys = _this4.state.checkedKeys;
	          var checkKeys = void 0;
	          if (!props.loadData && _this4.checkKeys && _this4._checkedKeys && (0, _util.arraysEqual)(_this4._checkedKeys, checkedKeys)) {
	            // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
	            checkKeys = _this4.checkKeys;
	          } else {
	            (function () {
	              var checkedPositions = [];
	              _this4.treeNodesStates = {};
	              (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
	                _this4.treeNodesStates[pos] = {
	                  node: item,
	                  key: keyOrPos,
	                  checked: false,
	                  halfChecked: false,
	                  siblingPosition: siblingPosition
	                };
	                if (checkedKeys.indexOf(keyOrPos) !== -1) {
	                  _this4.treeNodesStates[pos].checked = true;
	                  checkedPositions.push(pos);
	                }
	              });
	              // if the parent node's key exists, it all children node will be checked
	              (0, _util.handleCheckState)(_this4.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
	              checkKeys = (0, _util.getCheck)(_this4.treeNodesStates);
	            })();
	          }
	          _this4.halfCheckedKeys = checkKeys.halfCheckedKeys;
	          _this4.checkedKeys = checkKeys.checkedKeys;
	        })();
	      }
	    }
	
	    return _react2["default"].createElement(
	      'ul',
	      _extends({}, domProps, { unselectable: true, ref: 'tree' }),
	      _react2["default"].Children.map(props.children, this.renderTreeNode, this)
	    );
	  };
	
	  return Tree;
	}(_react2["default"].Component);
	
	Tree.propTypes = {
	  prefixCls: _react.PropTypes.string,
	  children: _react.PropTypes.any,
	  showLine: _react.PropTypes.bool,
	  showIcon: _react.PropTypes.bool,
	  selectable: _react.PropTypes.bool,
	  multiple: _react.PropTypes.bool,
	  checkable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),
	  _treeNodesStates: _react.PropTypes.object,
	  checkStrictly: _react.PropTypes.bool,
	  draggable: _react.PropTypes.bool,
	  autoExpandParent: _react.PropTypes.bool,
	  defaultExpandAll: _react.PropTypes.bool,
	  defaultExpandedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  expandedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  defaultCheckedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  checkedKeys: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.object]),
	  defaultSelectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  selectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  onExpand: _react.PropTypes.func,
	  onCheck: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  loadData: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onRightClick: _react.PropTypes.func,
	  onDragStart: _react.PropTypes.func,
	  onDragEnter: _react.PropTypes.func,
	  onDragOver: _react.PropTypes.func,
	  onDragLeave: _react.PropTypes.func,
	  onDrop: _react.PropTypes.func,
	  filterTreeNode: _react.PropTypes.func,
	  openTransitionName: _react.PropTypes.string,
	  openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
	};
	
	Tree.defaultProps = {
	  prefixCls: 'rc-tree',
	  showLine: false,
	  showIcon: true,
	  selectable: true,
	  multiple: false,
	  checkable: false,
	  checkStrictly: false,
	  draggable: false,
	  autoExpandParent: true,
	  defaultExpandAll: false,
	  defaultExpandedKeys: [],
	  defaultCheckedKeys: [],
	  defaultSelectedKeys: [],
	  onExpand: noop,
	  onCheck: noop,
	  onSelect: noop,
	  onDragStart: noop,
	  onDragEnter: noop,
	  onDragOver: noop,
	  onDragLeave: noop,
	  onDrop: noop
	};
	
	exports["default"] = Tree;
	module.exports = exports['default'];

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.browser = browser;
	exports.getOffset = getOffset;
	exports.loopAllChildren = loopAllChildren;
	exports.isInclude = isInclude;
	exports.filterParentPosition = filterParentPosition;
	exports.handleCheckState = handleCheckState;
	exports.getCheck = getCheck;
	exports.getStrictlyValue = getStrictlyValue;
	exports.arraysEqual = arraysEqual;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function browser(navigator) {
	  var tem = void 0;
	  var ua = navigator.userAgent;
	  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	  if (/trident/i.test(M[1])) {
	    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
	    return 'IE ' + (tem[1] || '');
	  }
	  if (M[1] === 'Chrome') {
	    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
	    if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	  }
	  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	  tem = ua.match(/version\/(\d+)/i);
	  if (tem) {
	    M.splice(1, 1, tem[1]);
	  }
	  return M.join(' ');
	}
	
	// export function getOffset(el) {
	//   const obj = el.getBoundingClientRect();
	//   return {
	//     left: obj.left + document.body.scrollLeft,
	//     top: obj.top + document.body.scrollTop,
	//     width: obj.width,
	//     height: obj.height
	//   };
	// }
	
	// // iscroll offset
	// offset = function (el) {
	//   var left = -el.offsetLeft,
	//     top = -el.offsetTop;
	
	//   // jshint -W084
	//   while (el = el.offsetParent) {
	//     left -= el.offsetLeft;
	//     top -= el.offsetTop;
	//   }
	//   // jshint +W084
	
	//   return {
	//     left: left,
	//     top: top
	//   };
	// }
	
	/* eslint-disable */
	/* eslint no-loop-func: 0*/
	
	function getOffset(ele) {
	  var doc = void 0,
	      win = void 0,
	      docElem = void 0,
	      rect = void 0;
	
	  if (!ele.getClientRects().length) {
	    return { top: 0, left: 0 };
	  }
	
	  rect = ele.getBoundingClientRect();
	
	  if (rect.width || rect.height) {
	    doc = ele.ownerDocument;
	    win = doc.defaultView;
	    docElem = doc.documentElement;
	
	    return {
	      top: rect.top + win.pageYOffset - docElem.clientTop,
	      left: rect.left + win.pageXOffset - docElem.clientLeft
	    };
	  }
	
	  return rect;
	}
	/* eslint-enable */
	
	function getChildrenlength(children) {
	  var len = 1;
	  if (Array.isArray(children)) {
	    len = children.length;
	  }
	  return len;
	}
	
	function getSiblingPosition(index, len, siblingPosition) {
	  if (len === 1) {
	    siblingPosition.first = true;
	    siblingPosition.last = true;
	  } else {
	    siblingPosition.first = index === 0;
	    siblingPosition.last = index === len - 1;
	  }
	  return siblingPosition;
	}
	
	function loopAllChildren(childs, callback, parent) {
	  var loop = function loop(children, level, _parent) {
	    var len = getChildrenlength(children);
	    _react2["default"].Children.forEach(children, function (item, index) {
	      var pos = level + '-' + index;
	      if (item.props.children && item.type && item.type.isTreeNode) {
	        loop(item.props.children, pos, { node: item, pos: pos });
	      }
	      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
	    });
	  };
	  loop(childs, 0, parent);
	}
	
	function isInclude(smallArray, bigArray) {
	  return smallArray.every(function (ii, i) {
	    return ii === bigArray[i];
	  });
	}
	// console.log(isInclude(['0', '1'], ['0', '10', '1']));
	
	
	// arr.length === 628, use time: ~20ms
	function filterParentPosition(arr) {
	  var levelObj = {};
	  arr.forEach(function (item) {
	    var posLen = item.split('-').length;
	    if (!levelObj[posLen]) {
	      levelObj[posLen] = [];
	    }
	    levelObj[posLen].push(item);
	  });
	  var levelArr = Object.keys(levelObj).sort();
	
	  var _loop = function _loop(i) {
	    if (levelArr[i + 1]) {
	      levelObj[levelArr[i]].forEach(function (ii) {
	        var _loop2 = function _loop2(j) {
	          levelObj[levelArr[j]].forEach(function (_i, index) {
	            if (isInclude(ii.split('-'), _i.split('-'))) {
	              levelObj[levelArr[j]][index] = null;
	            }
	          });
	          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
	            return p;
	          });
	        };
	
	        for (var j = i + 1; j < levelArr.length; j++) {
	          _loop2(j);
	        }
	      });
	    }
	  };
	
	  for (var i = 0; i < levelArr.length; i++) {
	    _loop(i);
	  }
	  var nArr = [];
	  levelArr.forEach(function (i) {
	    nArr = nArr.concat(levelObj[i]);
	  });
	  return nArr;
	}
	// console.log(filterParentPosition(
	//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
	// ));
	
	
	function stripTail(str) {
	  var arr = str.match(/(.+)(-[^-]+)$/);
	  var st = '';
	  if (arr && arr.length === 3) {
	    st = arr[1];
	  }
	  return st;
	}
	function splitPosition(pos) {
	  return pos.split('-');
	}
	
	function handleCheckState(obj, checkedPositionArr, checkIt) {
	  // console.log(stripTail('0-101-000'));
	  var objKeys = Object.keys(obj);
	  // let s = Date.now();
	  objKeys.forEach(function (i, index) {
	    var iArr = splitPosition(i);
	    var saved = false;
	    checkedPositionArr.forEach(function (_pos) {
	      // 设置子节点，全选或全不选
	      var _posArr = splitPosition(_pos);
	      if (iArr.length > _posArr.length && isInclude(_posArr, iArr)) {
	        obj[i].halfChecked = false;
	        obj[i].checked = checkIt;
	        objKeys[index] = null;
	      }
	      if (iArr[0] === _posArr[0] && iArr[1] === _posArr[1]) {
	        // 如果
	        saved = true;
	      }
	    });
	    if (!saved) {
	      objKeys[index] = null;
	    }
	  });
	  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
	  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
	  objKeys = objKeys.filter(function (i) {
	    return i;
	  }); // filter non null;
	
	  var _loop3 = function _loop3(_pIndex) {
	    // 循环设置父节点的 选中 或 半选状态
	    var loop = function loop(__pos) {
	      var _posLen = splitPosition(__pos).length;
	      if (_posLen <= 2) {
	        // e.g. '0-0', '0-1'
	        return;
	      }
	      var sibling = 0;
	      var siblingChecked = 0;
	      var parentPosition = stripTail(__pos);
	      objKeys.forEach(function (i /* , index*/) {
	        var iArr = splitPosition(i);
	        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
	          sibling++;
	          if (obj[i].checked) {
	            siblingChecked++;
	            var _i = checkedPositionArr.indexOf(i);
	            if (_i > -1) {
	              checkedPositionArr.splice(_i, 1);
	              if (_i <= _pIndex) {
	                _pIndex--;
	              }
	            }
	          } else if (obj[i].halfChecked) {
	            siblingChecked += 0.5;
	          }
	          // objKeys[index] = null;
	        }
	      });
	      // objKeys = objKeys.filter(i => i); // filter non null;
	      var parent = obj[parentPosition];
	      // sibling 不会等于0
	      // 全不选 - 全选 - 半选
	      if (siblingChecked === 0) {
	        parent.checked = false;
	        parent.halfChecked = false;
	      } else if (siblingChecked === sibling) {
	        parent.checked = true;
	        parent.halfChecked = false;
	      } else {
	        parent.halfChecked = true;
	        parent.checked = false;
	      }
	      loop(parentPosition);
	    };
	    loop(checkedPositionArr[_pIndex], _pIndex);
	    pIndex = _pIndex;
	  };
	
	  for (var pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
	    _loop3(pIndex);
	  }
	  // console.log(Date.now()-s, objKeys.length, checkIt);
	}
	
	function getCheck(treeNodesStates) {
	  var halfCheckedKeys = [];
	  var checkedKeys = [];
	  var checkedNodes = [];
	  var checkedNodesPositions = [];
	  Object.keys(treeNodesStates).forEach(function (item) {
	    var itemObj = treeNodesStates[item];
	    if (itemObj.checked) {
	      checkedKeys.push(itemObj.key);
	      checkedNodes.push(itemObj.node);
	      checkedNodesPositions.push({ node: itemObj.node, pos: item });
	    } else if (itemObj.halfChecked) {
	      halfCheckedKeys.push(itemObj.key);
	    }
	  });
	  return {
	    halfCheckedKeys: halfCheckedKeys, checkedKeys: checkedKeys, checkedNodes: checkedNodes, checkedNodesPositions: checkedNodesPositions, treeNodesStates: treeNodesStates
	  };
	}
	
	function getStrictlyValue(checkedKeys, halfChecked) {
	  if (halfChecked) {
	    return { checked: checkedKeys, halfChecked: halfChecked };
	  }
	  return checkedKeys;
	}
	
	function arraysEqual(a, b) {
	  if (a === b) return true;
	  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
	    return false;
	  }
	  if (a.length !== b.length) return false;
	
	  // If you don't care about the order of the elements inside
	  // the array, you should sort both arrays here.
	
	  for (var i = 0; i < a.length; ++i) {
	    if (a[i] !== b[i]) return false;
	  }
	  return true;
	}

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(165);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _rcAnimate = __webpack_require__(313);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _util = __webpack_require__(596);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var browserUa = typeof window !== 'undefined' ? (0, _util.browser)(window.navigator) : '';
	var ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
	// const uaArray = browserUa.split(' ');
	// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;
	
	var defaultTitle = '---';
	
	var TreeNode = function (_React$Component) {
	  _inherits(TreeNode, _React$Component);
	
	  function TreeNode(props) {
	    _classCallCheck(this, TreeNode);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    ['onExpand', 'onCheck', 'onContextMenu', 'onMouseEnter', 'onMouseLeave', 'onDragStart', 'onDragEnter', 'onDragOver', 'onDragLeave', 'onDrop'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    _this.state = {
	      dataLoading: false,
	      dragNodeHighlight: false
	    };
	    return _this;
	  }
	
	  TreeNode.prototype.componentDidMount = function componentDidMount() {
	    if (!this.props.root._treeNodeInstances) {
	      this.props.root._treeNodeInstances = [];
	    }
	    this.props.root._treeNodeInstances.push(this);
	  };
	  // shouldComponentUpdate(nextProps) {
	  //   if (!nextProps.expanded) {
	  //     return false;
	  //   }
	  //   return true;
	  // }
	
	  TreeNode.prototype.onCheck = function onCheck() {
	    this.props.root.onCheck(this);
	  };
	
	  TreeNode.prototype.onSelect = function onSelect() {
	    this.props.root.onSelect(this);
	  };
	
	  TreeNode.prototype.onMouseEnter = function onMouseEnter(e) {
	    e.preventDefault();
	    this.props.root.onMouseEnter(e, this);
	  };
	
	  TreeNode.prototype.onMouseLeave = function onMouseLeave(e) {
	    e.preventDefault();
	    this.props.root.onMouseLeave(e, this);
	  };
	
	  TreeNode.prototype.onContextMenu = function onContextMenu(e) {
	    e.preventDefault();
	    this.props.root.onContextMenu(e, this);
	  };
	
	  TreeNode.prototype.onDragStart = function onDragStart(e) {
	    // console.log('dragstart', this.props.eventKey, e);
	    // e.preventDefault();
	    e.stopPropagation();
	    this.setState({
	      dragNodeHighlight: true
	    });
	    this.props.root.onDragStart(e, this);
	    try {
	      // ie throw error
	      // firefox-need-it
	      e.dataTransfer.setData('text/plain', '');
	    } finally {
	      // empty
	    }
	  };
	
	  TreeNode.prototype.onDragEnter = function onDragEnter(e) {
	    // console.log('dragenter', this.props.eventKey, e);
	    e.preventDefault();
	    e.stopPropagation();
	    this.props.root.onDragEnter(e, this);
	  };
	
	  TreeNode.prototype.onDragOver = function onDragOver(e) {
	    // console.log(this.props.eventKey, e);
	    // todo disabled
	    e.preventDefault();
	    e.stopPropagation();
	    this.props.root.onDragOver(e, this);
	    return false;
	  };
	
	  TreeNode.prototype.onDragLeave = function onDragLeave(e) {
	    // console.log(this.props.eventKey, e);
	    e.stopPropagation();
	    this.props.root.onDragLeave(e, this);
	  };
	
	  TreeNode.prototype.onDrop = function onDrop(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.setState({
	      dragNodeHighlight: false
	    });
	    this.props.root.onDrop(e, this);
	  };
	
	  TreeNode.prototype.onExpand = function onExpand() {
	    var _this2 = this;
	
	    var callbackPromise = this.props.root.onExpand(this);
	    if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : _typeof(callbackPromise)) === 'object') {
	      (function () {
	        var setLoading = function setLoading(dataLoading) {
	          _this2.setState({ dataLoading: dataLoading });
	        };
	        setLoading(true);
	        callbackPromise.then(function () {
	          setLoading(false);
	        }, function () {
	          setLoading(false);
	        });
	      })();
	    }
	  };
	
	  // keyboard event support
	
	
	  TreeNode.prototype.onKeyDown = function onKeyDown(e) {
	    e.preventDefault();
	  };
	
	  TreeNode.prototype.renderSwitcher = function renderSwitcher(props, expandedState) {
	    var prefixCls = props.prefixCls;
	    var switcherCls = _defineProperty({}, prefixCls + '-switcher', true);
	    if (!props.showLine) {
	      switcherCls[prefixCls + '-noline_' + expandedState] = true;
	    } else if (props.pos === '0-0') {
	      switcherCls[prefixCls + '-roots_' + expandedState] = true;
	    } else {
	      switcherCls[prefixCls + '-center_' + expandedState] = !props.last;
	      switcherCls[prefixCls + '-bottom_' + expandedState] = props.last;
	    }
	    if (props.disabled) {
	      switcherCls[prefixCls + '-switcher-disabled'] = true;
	      return _react2["default"].createElement('span', { className: (0, _classnames2["default"])(switcherCls) });
	    }
	    return _react2["default"].createElement('span', { className: (0, _classnames2["default"])(switcherCls), onClick: this.onExpand });
	  };
	
	  TreeNode.prototype.renderCheckbox = function renderCheckbox(props) {
	    var prefixCls = props.prefixCls;
	    var checkboxCls = _defineProperty({}, prefixCls + '-checkbox', true);
	    if (props.checked) {
	      checkboxCls[prefixCls + '-checkbox-checked'] = true;
	    } else if (props.halfChecked) {
	      checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
	    }
	    var customEle = null;
	    if (typeof props.checkable !== 'boolean') {
	      customEle = props.checkable;
	    }
	    if (props.disabled || props.disableCheckbox) {
	      checkboxCls[prefixCls + '-checkbox-disabled'] = true;
	      return _react2["default"].createElement(
	        'span',
	        { ref: 'checkbox', className: (0, _classnames2["default"])(checkboxCls) },
	        customEle
	      );
	    }
	    return _react2["default"].createElement(
	      'span',
	      { ref: 'checkbox',
	        className: (0, _classnames2["default"])(checkboxCls),
	        onClick: this.onCheck
	      },
	      customEle
	    );
	  };
	
	  TreeNode.prototype.renderChildren = function renderChildren(props) {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    var transitionAppear = true;
	    if (!renderFirst && props.expanded) {
	      transitionAppear = false;
	    }
	    var children = props.children;
	    var newChildren = children;
	    if (children && (children.type === TreeNode || Array.isArray(children) && children.every(function (item) {
	      return item.type === TreeNode;
	    }))) {
	      var _cls;
	
	      var cls = (_cls = {}, _defineProperty(_cls, props.prefixCls + '-child-tree', true), _defineProperty(_cls, props.prefixCls + '-child-tree-open', props.expanded), _cls);
	      if (props.showLine) {
	        cls[props.prefixCls + '-line'] = !props.last;
	      }
	      var animProps = {};
	      if (props.openTransitionName) {
	        animProps.transitionName = props.openTransitionName;
	      } else if (_typeof(props.openAnimation) === 'object') {
	        animProps.animation = (0, _objectAssign2["default"])({}, props.openAnimation);
	        if (!transitionAppear) {
	          delete animProps.animation.appear;
	        }
	      }
	      newChildren = _react2["default"].createElement(
	        _rcAnimate2["default"],
	        _extends({}, animProps, {
	          showProp: 'data-expanded',
	          transitionAppear: transitionAppear,
	          component: ''
	        }),
	        !props.expanded ? null : _react2["default"].createElement(
	          'ul',
	          { className: (0, _classnames2["default"])(cls), 'data-expanded': props.expanded },
	          _react2["default"].Children.map(children, function (item, index) {
	            return props.root.renderTreeNode(item, index, props.pos);
	          }, props.root)
	        )
	      );
	    }
	    return newChildren;
	  };
	
	  TreeNode.prototype.render = function render() {
	    var _iconEleCls,
	        _this3 = this;
	
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var expandedState = props.expanded ? 'open' : 'close';
	
	    var iconEleCls = (_iconEleCls = {}, _defineProperty(_iconEleCls, prefixCls + '-iconEle', true), _defineProperty(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), _defineProperty(_iconEleCls, prefixCls + '-icon__' + expandedState, true), _iconEleCls);
	
	    var canRenderSwitcher = true;
	    var content = props.title;
	    var newChildren = this.renderChildren(props);
	    if (!newChildren || newChildren === props.children) {
	      // content = newChildren;
	      newChildren = null;
	      if (!props.loadData || props.isLeaf) {
	        canRenderSwitcher = false;
	      }
	    }
	    // For performance, does't render children into dom when `!props.expanded` (move to Animate)
	    // if (!props.expanded) {
	    //   newChildren = null;
	    // }
	
	    var selectHandle = function selectHandle() {
	      var icon = props.showIcon || props.loadData && _this3.state.dataLoading ? _react2["default"].createElement('span', { className: (0, _classnames2["default"])(iconEleCls) }) : null;
	      var title = _react2["default"].createElement(
	        'span',
	        { className: prefixCls + '-title' },
	        content
	      );
	      var domProps = {
	        className: prefixCls + '-node-content-wrapper'
	      };
	      if (!props.disabled) {
	        if (props.selected || !props._dropTrigger && _this3.state.dragNodeHighlight) {
	          domProps.className += ' ' + prefixCls + '-node-selected';
	        }
	        domProps.onClick = function (e) {
	          e.preventDefault();
	          if (props.selectable) {
	            _this3.onSelect();
	          }
	          // not fire check event
	          // if (props.checkable) {
	          //   this.onCheck();
	          // }
	        };
	        if (props.onRightClick) {
	          domProps.onContextMenu = _this3.onContextMenu;
	        }
	        if (props.onMouseEnter) {
	          domProps.onMouseEnter = _this3.onMouseEnter;
	        }
	        if (props.onMouseLeave) {
	          domProps.onMouseLeave = _this3.onMouseLeave;
	        }
	        if (props.draggable) {
	          domProps.className += ' draggable';
	          if (ieOrEdge) {
	            // ie bug!
	            domProps.href = '#';
	          }
	          domProps.draggable = true;
	          domProps['aria-grabbed'] = true;
	          domProps.onDragStart = _this3.onDragStart;
	        }
	      }
	      return _react2["default"].createElement(
	        'a',
	        _extends({ ref: 'selectHandle', title: typeof content === 'string' ? content : '' }, domProps),
	        icon,
	        title
	      );
	    };
	
	    var liProps = {};
	    if (props.draggable) {
	      liProps.onDragEnter = this.onDragEnter;
	      liProps.onDragOver = this.onDragOver;
	      liProps.onDragLeave = this.onDragLeave;
	      liProps.onDrop = this.onDrop;
	    }
	
	    var disabledCls = '';
	    var dragOverCls = '';
	    if (props.disabled) {
	      disabledCls = prefixCls + '-treenode-disabled';
	    } else if (props.dragOver) {
	      dragOverCls = 'drag-over';
	    } else if (props.dragOverGapTop) {
	      dragOverCls = 'drag-over-gap-top';
	    } else if (props.dragOverGapBottom) {
	      dragOverCls = 'drag-over-gap-bottom';
	    }
	
	    var filterCls = props.filterTreeNode(this) ? 'filter-node' : '';
	
	    var noopSwitcher = function noopSwitcher() {
	      var _cls2;
	
	      var cls = (_cls2 = {}, _defineProperty(_cls2, prefixCls + '-switcher', true), _defineProperty(_cls2, prefixCls + '-switcher-noop', true), _cls2);
	      if (props.showLine) {
	        cls[prefixCls + '-center_docu'] = !props.last;
	        cls[prefixCls + '-bottom_docu'] = props.last;
	      } else {
	        cls[prefixCls + '-noline_docu'] = true;
	      }
	      return _react2["default"].createElement('span', { className: (0, _classnames2["default"])(cls) });
	    };
	
	    return _react2["default"].createElement(
	      'li',
	      _extends({}, liProps, { ref: 'li',
	        className: (0, _classnames2["default"])(props.className, disabledCls, dragOverCls, filterCls)
	      }),
	      canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher(),
	      props.checkable ? this.renderCheckbox(props) : null,
	      selectHandle(),
	      newChildren
	    );
	  };
	
	  return TreeNode;
	}(_react2["default"].Component);
	
	TreeNode.isTreeNode = 1;
	
	TreeNode.propTypes = {
	  prefixCls: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  disableCheckbox: _react.PropTypes.bool,
	  expanded: _react.PropTypes.bool,
	  isLeaf: _react.PropTypes.bool,
	  root: _react.PropTypes.object,
	  onSelect: _react.PropTypes.func
	};
	
	TreeNode.defaultProps = {
	  title: defaultTitle
	};
	
	exports["default"] = TreeNode;
	module.exports = exports['default'];

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cssAnimation = __webpack_require__(317);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function animate(node, show, done) {
	  var height = void 0;
	  return (0, _cssAnimation2["default"])(node, 'ant-motion-collapse', {
	    start: function start() {
	      if (!show) {
	        node.style.height = node.offsetHeight + 'px';
	      } else {
	        height = node.offsetHeight;
	        node.style.height = 0;
	      }
	    },
	    active: function active() {
	      node.style.height = (show ? height : 0) + 'px';
	    },
	    end: function end() {
	      node.style.height = '';
	      done();
	    }
	  });
	}
	
	var animation = {
	  enter: function enter(node, done) {
	    return animate(node, true, done);
	  },
	  leave: function leave(node, done) {
	    return animate(node, false, done);
	  },
	  appear: function appear(node, done) {
	    return animate(node, true, done);
	  }
	};
	
	exports["default"] = animation;
	module.exports = exports['default'];

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(600);
	
	__webpack_require__(601);

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(602);

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(810);

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureRenderMixin = __webpack_require__(811);
	
	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Checkbox = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);
	
	  function Checkbox(props) {
	    _classCallCheck(this, Checkbox);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleFocus = function (e) {
	      _this.setState({ focus: true });
	      _this.props.onFocus(e);
	    };
	
	    _this.handleBlur = function (e) {
	      _this.setState({ focus: false });
	      _this.props.onBlur(e);
	    };
	
	    _this.handleChange = function (e) {
	      if (_this.props.disabled) {
	        return;
	      }
	      if (!('checked' in _this.props)) {
	        _this.setState({
	          checked: e.target.checked
	        });
	      }
	      _this.props.onChange({
	        target: _extends({}, _this.props, {
	          checked: e.target.checked
	        }),
	        stopPropagation: function stopPropagation() {
	          e.stopPropagation();
	        },
	        preventDefault: function preventDefault() {
	          e.preventDefault();
	        }
	      });
	    };
	
	    var checked = false;
	    if ('checked' in props) {
	      checked = props.checked;
	    } else {
	      checked = props.defaultChecked;
	    }
	    _this.state = {
	      checked: checked,
	      focus: false
	    };
	    return _this;
	  }
	
	  Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: nextProps.checked
	      });
	    }
	  };
	
	  Checkbox.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _PureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
	  };
	
	  Checkbox.prototype.render = function render() {
	    var _classNames;
	
	    var props = _extends({}, this.props);
	    // Remove React warning.
	    // Warning: Input elements must be either controlled or uncontrolled
	    // (specify either the value prop, or the defaultValue prop, but not both).
	    delete props.defaultChecked;
	
	    var state = this.state;
	    var prefixCls = props.prefixCls;
	    var checked = state.checked;
	    if (typeof checked === 'boolean') {
	      checked = checked ? 1 : 0;
	    }
	    var className = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, props.className, !!props.className), _defineProperty(_classNames, prefixCls, 1), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-checked-' + checked, !!checked), _defineProperty(_classNames, prefixCls + '-focused', state.focus), _defineProperty(_classNames, prefixCls + '-disabled', props.disabled), _classNames));
	    return _react2["default"].createElement(
	      'span',
	      {
	        className: className,
	        style: props.style
	      },
	      _react2["default"].createElement('span', { className: prefixCls + '-inner' }),
	      _react2["default"].createElement('input', {
	        name: props.name,
	        type: props.type,
	        readOnly: props.readOnly,
	        disabled: props.disabled,
	        tabIndex: props.tabIndex,
	        className: prefixCls + '-input',
	        checked: !!checked,
	        onClick: this.props.onClick,
	        onFocus: this.handleFocus,
	        onBlur: this.handleBlur,
	        onChange: this.handleChange
	      })
	    );
	  };
	
	  return Checkbox;
	}(_react2["default"].Component);
	
	Checkbox.propTypes = {
	  name: _react2["default"].PropTypes.string,
	  prefixCls: _react2["default"].PropTypes.string,
	  style: _react2["default"].PropTypes.object,
	  type: _react2["default"].PropTypes.string,
	  className: _react2["default"].PropTypes.string,
	  defaultChecked: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.bool]),
	  disabled: _react2["default"].PropTypes.bool,
	  checked: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.bool]),
	  onFocus: _react2["default"].PropTypes.func,
	  onBlur: _react2["default"].PropTypes.func,
	  onChange: _react2["default"].PropTypes.func,
	  onClick: _react2["default"].PropTypes.func
	};
	Checkbox.defaultProps = {
	  prefixCls: 'rc-checkbox',
	  style: {},
	  type: 'checkbox',
	  className: '',
	  defaultChecked: false,
	  onFocus: function onFocus() {},
	  onBlur: function onBlur() {},
	  onChange: function onChange() {}
	};
	exports["default"] = Checkbox;
	module.exports = exports['default'];

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	var shallowEqual = __webpack_require__(414);
	
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 *
	 * See https://facebook.github.io/react/docs/pure-render-mixin.html
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _rcCheckbox = __webpack_require__(809);
	
	var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Group = __webpack_require__(846);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(568);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Checkbox = (_temp = _class = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);
	
	  function Checkbox() {
	    _classCallCheck(this, Checkbox);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Checkbox.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
	  };
	
	  Checkbox.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        style = _props.style,
	        children = _props.children,
	        className = _props.className,
	        restProps = _objectWithoutProperties(_props, ['prefixCls', 'style', 'children', 'className']);
	
	    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-wrapper', true), _classNames));
	    return _react2["default"].createElement(
	      'label',
	      { className: classString, style: style },
	      _react2["default"].createElement(_rcCheckbox2["default"], _extends({}, restProps, { prefixCls: prefixCls, children: null })),
	      children !== undefined ? _react2["default"].createElement(
	        'span',
	        null,
	        children
	      ) : null
	    );
	  };
	
	  return Checkbox;
	}(_react2["default"].Component), _class.Group = _Group2["default"], _class.defaultProps = {
	  prefixCls: 'ant-checkbox'
	}, _temp);
	exports["default"] = Checkbox;
	module.exports = exports['default'];

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _class, _temp, _initialiseProps;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(845);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(568);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var CheckboxGroup = (_temp = _class = function (_React$Component) {
	  _inherits(CheckboxGroup, _React$Component);
	
	  function CheckboxGroup(props) {
	    _classCallCheck(this, CheckboxGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var value = void 0;
	    if ('value' in props) {
	      value = props.value || [];
	    } else if ('defaultValue' in props) {
	      value = props.defaultValue || [];
	    }
	    _this.state = { value: value };
	    return _this;
	  }
	
	  CheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      this.setState({
	        value: nextProps.value || []
	      });
	    }
	  };
	
	  CheckboxGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
	  };
	
	  CheckboxGroup.prototype.getOptions = function getOptions() {
	    var options = this.props.options;
	
	    return options.map(function (option) {
	      if (typeof option === 'string') {
	        return {
	          label: option,
	          value: option
	        };
	      }
	      return option;
	    });
	  };
	
	  CheckboxGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    var options = this.getOptions();
	    return _react2["default"].createElement(
	      'div',
	      { className: 'ant-checkbox-group' },
	      options.map(function (option) {
	        return _react2["default"].createElement(
	          _index2["default"],
	          { disabled: 'disabled' in option ? option.disabled : _this2.props.disabled,
	            checked: _this2.state.value.indexOf(option.value) !== -1,
	            onChange: function onChange() {
	              return _this2.toggleOption(option);
	            },
	            className: 'ant-checkbox-group-item', key: option.value
	          },
	          option.label
	        );
	      })
	    );
	  };
	
	  return CheckboxGroup;
	}(_react2["default"].Component), _class.defaultProps = {
	  options: [],
	  defaultValue: [],
	  onChange: function onChange() {}
	}, _class.propTypes = {
	  defaultValue: _react2["default"].PropTypes.array,
	  value: _react2["default"].PropTypes.array,
	  options: _react2["default"].PropTypes.array.isRequired,
	  onChange: _react2["default"].PropTypes.func
	}, _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.toggleOption = function (option) {
	    var optionIndex = _this3.state.value.indexOf(option.value);
	    var value = [].concat(_toConsumableArray(_this3.state.value));
	    if (optionIndex === -1) {
	      value.push(option.value);
	    } else {
	      value.splice(optionIndex, 1);
	    }
	    if (!('value' in _this3.props)) {
	      _this3.setState({ value: value });
	    }
	    _this3.props.onChange(value);
	  };
	}, _temp);
	exports["default"] = CheckboxGroup;
	module.exports = exports['default'];

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _message2 = __webpack_require__(500);
	
	var _message3 = _interopRequireDefault(_message2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(580);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(203);
	
	var _jquery = __webpack_require__(405);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRedux = __webpack_require__(158);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _script = __webpack_require__(1130);
	
	var _layout = __webpack_require__(480);
	
	var _level = __webpack_require__(1131);
	
	var _level2 = _interopRequireDefault(_level);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _addDataModal = __webpack_require__(1133);
	
	var _addDataModal2 = _interopRequireDefault(_addDataModal);
	
	__webpack_require__(1139);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stompClient = {};
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this2.changeAddDataModalVisible = function (b) {
	            _this2.setState({
	                addDataModalVisible: b
	            });
	        };
	
	        _this2.state = {
	            contentHeight: props.browser.height - 55,
	            interfaceInfo: props.user.interfaceInfo || {},
	            mapUrl: props.user.interfaceInfo.metis && props.user.interfaceInfo.metis.alarmShow || "",
	            userId: props.user.interfaceInfo.userId || "",
	            unreadTotal: 0,
	            historyDataList: [],
	            toggle: false,
	
	            total: 0,
	            pageNo: 1,
	            pages: 0,
	            fullScreen: 0,
	
	            isConfigShow: false,
	
	            addDataModalVisible: false,
	            selected: []
	        };
	        _this2.phones = [];
	        _this2.msgParam = {};
	        _this2.showModal = _this2.showModal.bind(_this2);
	        _this2.initConnect();
	        return _this2;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            window.removeEventListener('message', this.dealAlarmMessage.bind(this), false);
	            window.addEventListener('message', this.dealAlarmMessage.bind(this), false);
	            this.findAlarmInfosByCondi();
	            // this.initConnect();
	            //
	            // let msgHandle = window.setInterval(() => {this.alarmDataHandler(data)},3000);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _browser = this.props.browser;
	            var browser = nextProps.browser;
	            if (browser.width !== _browser.width || browser.height !== _browser.height) {
	                this.setState({
	                    contentHeight: browser.height - 55
	                });
	            }
	            if (JSON.stringify(nextProps.user.interfaceInfo) !== "{}" && JSON.stringify(nextProps.user.interfaceInfo) !== JSON.stringify(this.state.interfaceInfo)) {
	                this.setState({
	                    interfaceInfo: nextProps.user.interfaceInfo,
	                    mapUrl: nextProps.user.interfaceInfo.metis.alarmShow,
	                    userId: nextProps.user.interfaceInfo.userId
	                });
	                if (stompClient.connected) {
	                    stompClient.disconnect(function () {
	                        console.log('断开连接');
	                    });
	                }
	                this.initConnect();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener('message', this.dealAlarmMessage.bind(this), false);
	            if (stompClient.connected) {
	                stompClient.disconnect(function () {
	                    console.log('断开连接');
	                });
	            }
	        }
	    }, {
	        key: 'initConnect',
	        value: function initConnect() {
	            var _this3 = this;
	
	            Promise.all([(0, _script.createScriptElement)('sockjs', 'extends/js/sockjs.min.js'), (0, _script.createScriptElement)('stomp', 'extends/js/stomp.min.js')]).then(function () {
	                // 建立连接对象（还未发起连接）
	                var socket = new SockJS("/control-web/webSocketServer");
	
	                // 获取 STOMP 子协议的客户端对象
	                stompClient = Stomp.over(socket);
	
	                var userId = _this3.state.userId;
	
	
	                var _this = _this3;
	                // 向服务器发起websocket连接并发送CONNECT帧
	                stompClient.connect({
	                    name: userId // 携带客户端信息
	                }, function connectCallback(frame) {
	                    // 连接成功时（服务器响应 CONNECTED 帧)的回调方法
	                    console.log("连接成功");
	                    stompClient.subscribe('/user/' + userId + '/msg', function (response) {
	                        var returnData = JSON.parse(response.body);
	                        console.log(returnData);
	                        _this.alarmDataHandler(returnData);
	                    });
	                }, function errorCallBack(error) {
	                    // 连接失败时（服务器响应 ERROR 帧）的回调方法
	                    console.log("连接失败");
	                });
	            })["catch"]();
	        }
	    }, {
	        key: 'alarmDataHandler',
	        value: function alarmDataHandler(data) {
	            // data = JSON.parse(data.data)
	            this.findAlarmInfosByCondi();
	            //传给地图
	            var toMapData = this.formatToMapData(data);
	            showRealTimeAlarmPopup(JSON.stringify(toMapData));
	        }
	    }, {
	        key: 'dealAlarmMessage',
	        value: function dealAlarmMessage(e) {
	            var data = e.data;
	
	            if (typeof data === "string") {
	                var obj = JSON.parse(data);
	                console.log(obj);
	                if (obj["function"] === 'onMapLoaded') {
	                    var alarmMapLoaded = true;
	                } else if (obj["function"] === 'pointSelectFullScreen') {
	                    this.changeViewSize(obj.param); // 1全屏 0退出
	                } else if (obj["function"] === 'updateAlarmInfoIsRead') {
	                    var alarmId = obj.param;
	                    this.updateAlarmInfoIsRead(alarmId.alarmId);
	                } else if (obj["function"] === 'getGatherData') {
	                    this.getGatherData(obj.param);
	                } else if (obj["function"] === 'showConfigPanel') {
	                    this.setState({
	                        isConfigShow: obj.param.isShow
	                    });
	                } else if (obj["function"] === 'transmitBtnClick') {
	                    this.msgParam = obj.param;
	                    this.showModal();
	                }
	            }
	        }
	    }, {
	        key: 'changeViewSize',
	        value: function changeViewSize(fullScreen) {
	            this.setState({
	                fullScreen: fullScreen
	            });
	        }
	    }, {
	        key: 'getGatherData',
	        value: function getGatherData(param) {
	            _http2["default"].post('/control-web/historyAlarm/queryGatherAlarmInfo', param).then(function (_ref) {
	                var data = _ref.data;
	
	                showGatherAlarmPoup(JSON.stringify(data));
	            })["catch"](function (e) {
	                return _http2["default"].showError(e);
	            });
	        }
	    }, {
	        key: 'updateAlarmInfoIsRead',
	        value: function updateAlarmInfoIsRead(alarmId) {
	            var _this4 = this;
	
	            _http2["default"].post('/control-web/historyAlarm/updateReadedStatus', { alarmId: alarmId }).then(function (data) {
	                _this4.findAlarmInfosByCondi();
	            })["catch"](function (e) {
	                return _http2["default"].showError(e);
	            });
	        }
	    }, {
	        key: 'findAlarmInfosByCondi',
	        value: function findAlarmInfosByCondi(pageNo) {
	            var _this5 = this;
	
	            var req = {
	                pageNo: pageNo || 1,
	                pageSize: 10
	            };
	            _http2["default"].post('/control-web/historyAlarm/searchAlarm', req).then(function (_ref2) {
	                var data = _ref2.data;
	
	                _this5.setState({
	                    historyDataList: data.list,
	                    total: data.total,
	                    pageNo: data.pageNo,
	                    pages: Math.ceil(data.total / data.pageSize),
	                    unreadTotal: data.unreadTotal
	                });
	            })["catch"](function (e) {
	                return _http2["default"].showError(e);
	            });
	        }
	    }, {
	        key: 'onToggleClick',
	        value: function onToggleClick() {
	            this.setState(function (prevState) {
	                return {
	                    toggle: !prevState.toggle
	                };
	            });
	        }
	    }, {
	        key: 'onAllReadClick',
	        value: function onAllReadClick() {
	            this.updateAlarmInfoIsRead();
	        }
	    }, {
	        key: 'historyListClickHandle',
	        value: function historyListClickHandle(alarmId) {
	            var historyDataList = this.state.historyDataList;
	
	            var currentData = historyDataList.find(function (item) {
	                return item.alarmId === alarmId;
	            });
	            this.updateAlarmInfoIsRead(alarmId);
	            // 地图展示
	            var toMapData = this.formatToMapData(currentData);
	            console.log(toMapData);
	            showHistoryAlarmPopup(JSON.stringify(toMapData));
	        }
	    }, {
	        key: 'formatToMapData',
	        value: function formatToMapData(data) {
	            return data;
	        }
	    }, {
	        key: 'bindJumpPage',
	        value: function bindJumpPage() {
	            var _self = this;
	            (0, _jquery2["default"])('.history-list-pagination-jump').click(function () {
	                var newPage = (0, _jquery2["default"])('.pagination-input').val();
	                if (newPage && /(^[1-9]\d*$)/.test(newPage)) {
	                    _self.findAlarmInfosByCondi(newPage);
	                } else {
	                    _message3["default"].warning('页码格式有误！');
	                }
	            });
	        }
	
	        //addDadaModal         //////////////////////////////////
	
	    }, {
	        key: 'showModal',
	        value: function showModal() {
	            this.setState({
	                addDataModalVisible: true
	            });
	        }
	    }, {
	        key: 'dataChange',
	        value: function dataChange(arr) {
	            var _this6 = this;
	
	            this.setState({
	                selected: arr
	            });
	            var phoneNums = arr.map(function (item) {
	                return { phoneNum: item.phone };
	            }).concat(this.phones);
	            console.log(phoneNums);
	            _http2["default"].post('/control-web/message/sendMsg', _extends({}, this.msgParam, {
	                phoneNums: phoneNums
	            })).then(function () {
	                _message3["default"].success('转发成功');
	                _this6.changeAddDataModalVisible(false);
	            })["catch"](function (e) {
	                return _http2["default"].showError(e);
	            });
	        }
	    }, {
	        key: 'onInputChange',
	        value: function onInputChange(e) {
	            var value = e.target.value;
	            this.phones = value.split(/,|，/).map(function (item) {
	                return item.trim();
	            }).filter(function (item) {
	                return item;
	            }).map(function (item) {
	                return { phoneNum: item };
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this7 = this;
	
	            var state = this.state;
	            var contentHeight = state.contentHeight,
	                fullScreen = state.fullScreen,
	                mapUrl = state.mapUrl,
	                unreadTotal = state.unreadTotal,
	                historyDataList = state.historyDataList,
	                toggle = state.toggle,
	                total = state.total,
	                pageNo = state.pageNo,
	                pages = state.pages,
	                isConfigShow = state.isConfigShow;
	
	            var style = fullScreen === '1' ? {
	                height: contentHeight + 55,
	                top: -50
	            } : {
	                height: contentHeight,
	                top: 0
	            };
	            return _react2["default"].createElement(
	                'div',
	                { className: 'visualW-contents', style: style },
	                _react2["default"].createElement('iframe', { src: mapUrl,
	                    id: 'visualW-map',
	                    width: '100%',
	                    height: '100%',
	                    frameBorder: 'no',
	                    border: '0',
	                    marginWidth: '0',
	                    marginHeight: '0' }),
	                !isConfigShow && _react2["default"].createElement(
	                    'div',
	                    { className: 'visualW-history' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'history-title-container' },
	                        _react2["default"].createElement(
	                            'p',
	                            { className: 'tips tips-fl' },
	                            _react2["default"].createElement(
	                                'span',
	                                { className: 'title-tips-txt' },
	                                '\u6700\u8FD1\u5386\u53F2\u544A\u8B66'
	                            ),
	                            unreadTotal ? _react2["default"].createElement(
	                                'span',
	                                { className: 'unRead-count' },
	                                unreadTotal > 99 ? '99+' : unreadTotal
	                            ) : null
	                        ),
	                        _react2["default"].createElement(
	                            'p',
	                            { className: 'tips tips-fr' },
	                            toggle && _react2["default"].createElement(
	                                'span',
	                                { className: 'change-all-read', onClick: this.onAllReadClick.bind(this) },
	                                '\u5168\u90E8\u6807\u4E3A\u5DF2\u8BFB'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                { className: 'toogle-list', onClick: this.onToggleClick.bind(this) },
	                                toggle ? _react2["default"].createElement(_icon2["default"], { type: 'angle-double-up' }) : _react2["default"].createElement(_icon2["default"], { type: 'angle-double-down' })
	                            )
	                        )
	                    ),
	                    toggle && _react2["default"].createElement(
	                        'div',
	                        { className: 'history-list' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'history-list-item-container' },
	                            historyDataList.length === 0 ? _react2["default"].createElement(
	                                'div',
	                                { className: 'history-list-item' },
	                                _react2["default"].createElement(
	                                    'span',
	                                    { className: 'list-item-cameraName' },
	                                    '\u6682\u65E0\u6570\u636E'
	                                )
	                            ) : historyDataList.map(function (item) {
	                                return _react2["default"].createElement(
	                                    'div',
	                                    { className: "history-list-item item-level-" + item.alarmLevel || 1, key: item.alarmId, onClick: function onClick() {
	                                            return _this7.historyListClickHandle.call(_this7, item.alarmId);
	                                        } },
	                                    _react2["default"].createElement('span', { className: 'unRead-point unRead-point-icon', style: { visibility: item.isRead === 1 ? 'hidden' : 'visible' } }),
	                                    _react2["default"].createElement('span', { className: "list-item-icon list-item-icon-" + (item.alarmType == 1 ? "face" : item.alarmType == 2 ? "cross" : item.alarmType == 3 ? "mac" : "rfid") }),
	                                    _react2["default"].createElement(
	                                        'span',
	                                        { className: 'list-item-level' },
	                                        _react2["default"].createElement(_level2["default"], { value: item.alarmLevel })
	                                    ),
	                                    _react2["default"].createElement(
	                                        'span',
	                                        { className: 'list-item-cameraName', title: item.snapInfo.deviceName },
	                                        item.snapInfo.deviceName
	                                    )
	                                );
	                            })
	                        ),
	                        _react2["default"].createElement('p', { className: 'history-list-line' }),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'history-list-pagination' },
	                            _react2["default"].createElement(
	                                'span',
	                                { className: 'pagination-total fl' },
	                                '\u5171',
	                                total || 0,
	                                '\u6761'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                { className: 'pagination-currentPage' },
	                                '  ',
	                                pageNo || 0,
	                                '/',
	                                pages || 0,
	                                '\u9875  '
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                '   \u5411\u7B2C '
	                            ),
	                            _react2["default"].createElement('input', { type: 'text', className: 'pagination-input' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                '\u9875'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                { className: 'history-list-pagination-jump', onClick: this.bindJumpPage.bind(this) },
	                                '  \u8DF3\u8F6C  '
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'history-more' },
	                            _react2["default"].createElement(
	                                _reactRouter.Link,
	                                { to: '/historySearch', target: '_blank' },
	                                '\u67E5\u770B\u66F4\u591A'
	                            )
	                        )
	                    )
	                ),
	                _react2["default"].createElement(_addDataModal2["default"], {
	                    type: 'msgTransmit',
	                    titles: { head: '添加用户', left: '选择用户', right: '选中用户' },
	                    okText: '确认并转发',
	                    selected: this.state.selected,
	                    maskClosable: false,
	                    changeAddDataModalVisible: this.changeAddDataModalVisible,
	                    visible: this.state.addDataModalVisible,
	                    onDataChange: this.dataChange.bind(this),
	                    onInputChange: this.onInputChange.bind(this)
	                }),
	                _react2["default"].createElement('div', { id: 'sockjs' }),
	                _react2["default"].createElement('div', { id: 'stomp' })
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, user: state.user };
	})(App);
	
	
	function showRealTimeAlarmPopup(data) {
	    document.getElementById('visualW-map').contentWindow.postMessage('{"function":"showRealTimeAlarmPopup","param":' + data + '}', '*');
	}
	
	function showHistoryAlarmPopup(data) {
	    document.getElementById('visualW-map').contentWindow.postMessage('{"function":"showHistoryAlarmPopup","param":' + data + '}', '*');
	}
	
	function showGatherAlarmPoup(data) {
	    document.getElementById('visualW-map').contentWindow.postMessage('{"function":"showGatherAlarmPoup","param":' + data + '}', '*');
	}
	
	var data = {
	    "alarmId": 672, //报警id,根据id更新数据库
	    "alarmLevel": 0, //报警级别  0：聚集； 1：一级； 2：二级； 3：三级； 4：四级
	    "alarmType": 2, //报警类型，1：人脸报警；2:车辆报警；3：mac报警；4：RFID报警
	    "taskName": "布控任务名称",
	    "latitude": 30,
	    "longitude": 120,
	    "indexCode": "ddddd",
	    "listLibInfo": {
	        "personName": "张三", //名单库信息，
	        "faceUrl": "http://img1.cache.netease.com/catchpic/5/5C/5C3C31E67B02F12475736B6B529B91DF.jpg",
	        "idCard": "371481198205086030",
	        "libName": "名单库",
	        "personType": "吸毒人员"
	    },
	    "snapInfo": {
	        "alarmTime": "2018-08-03 10:36:50", //抓拍时间
	        "plateNum": "浙A88888", //抓拍车辆号牌
	        "snapPicUrl": "http://img1.cache.netease.com/catchpic/5/5C/5C3C31E67B02F12475736B6B529B91DF.jpg", //抓拍车辆图片
	        "deviceName": "地点",
	        "relateCamera": "s97fg98s5h3wf9sd87fw945h97fsfu9"
	    }
	};

/***/ }),

/***/ 1130:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function createScriptElement(id, src) {
	    return new Promise(function (resolve, reject) {
	        var script = document.getElementById(id);
	        if (script) return resolve(script);
	
	        script = document.createElement('script');
	        script.id = id;
	        script.src = src;
	
	        if ('onload' in script) {
	            script.onload = function (e) {
	                return resolve(script);
	            };
	        } else {
	            script.onreadystatechange = function (e) {
	                if (/^(loaded|complete)$/.test(script.readyState)) {
	                    resolve(script);
	                }
	            };
	        }
	        script.onerror = function (e) {
	            return reject(e);
	        };
	
	        document.body.appendChild(script);
	    });
	}
	
	function removeScriptElement(scriptElement) {
	    document.body.removeChild(scriptElement);
	}
	
	exports.createScriptElement = createScriptElement;
	exports.removeScriptElement = removeScriptElement;

/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dic = __webpack_require__(588);
	
	__webpack_require__(1132);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Level = function (_React$Component) {
	    _inherits(Level, _React$Component);
	
	    function Level(props) {
	        _classCallCheck(this, Level);
	
	        return _possibleConstructorReturn(this, (Level.__proto__ || Object.getPrototypeOf(Level)).call(this, props));
	    }
	
	    _createClass(Level, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.props.value;
	            if (value == 1 || value == 0) {
	                return _react2["default"].createElement(
	                    'span',
	                    { className: 'item-level level-1' },
	                    _dic.LEVEL[value]
	                );
	            } else if (value == 2) {
	                return _react2["default"].createElement(
	                    'span',
	                    { className: 'item-level level-2' },
	                    _dic.LEVEL[value]
	                );
	            } else {
	                return _react2["default"].createElement(
	                    'span',
	                    { className: 'item-level level-3' },
	                    _dic.LEVEL[value] || "未知"
	                );
	            }
	        }
	    }]);
	
	    return Level;
	}(_react2["default"].Component);
	
	exports["default"] = Level;

/***/ }),

/***/ 1132:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _input = __webpack_require__(492);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _form = __webpack_require__(532);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _checkbox = __webpack_require__(845);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(398);
	
	__webpack_require__(578);
	
	__webpack_require__(584);
	
	__webpack_require__(601);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(277);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _asyncTree = __webpack_require__(1134);
	
	var _asyncTree2 = _interopRequireDefault(_asyncTree);
	
	var _searchInput = __webpack_require__(1135);
	
	var _searchInput2 = _interopRequireDefault(_searchInput);
	
	var _index3 = __webpack_require__(477);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _arrayFunc = __webpack_require__(1137);
	
	var _arrayFunc2 = _interopRequireDefault(_arrayFunc);
	
	__webpack_require__(1138);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CheckboxGroup = _checkbox2["default"].Group;
	var FormItem = _form2["default"].Item;
	
	
	var source = {
	    aysnc: "/control-web/department/getDepartmentAndUser",
	    search: "/control-web/department/queryUserInfoBykeyword"
	};
	
	var AddDataModal = function (_React$Component) {
	    _inherits(AddDataModal, _React$Component);
	
	    function AddDataModal(props) {
	        _classCallCheck(this, AddDataModal);
	
	        var _this = _possibleConstructorReturn(this, (AddDataModal.__proto__ || Object.getPrototypeOf(AddDataModal)).call(this, props));
	
	        source = props.source || source;
	        _this.state = {
	            source: source.aysnc,
	            checkedTreeArr: [],
	            selectedArr: [],
	            selectedCheckedKeys: [],
	            selectedFilterArr: null
	        };
	        return _this;
	    }
	
	    _createClass(AddDataModal, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            // console.log(this.props.selected)
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var selected = nextProps.selected;
	
	
	            if (selected != this.props.selected) {
	                this.setState({
	                    selectedArr: selected
	                });
	            }
	        }
	    }, {
	        key: 'onTreeCheck',
	        value: function onTreeCheck(checkedDataRef) {
	            this.setState({
	                checkedTreeArr: checkedDataRef
	            });
	        }
	    }, {
	        key: 'add',
	        value: function add() {
	            var _state = this.state,
	                checkedTreeArr = _state.checkedTreeArr,
	                selectedArr = _state.selectedArr;
	
	            selectedArr = _arrayFunc2["default"].A_union_B(checkedTreeArr, selectedArr, 'key');
	            this.setState({
	                selectedArr: selectedArr
	            });
	        }
	    }, {
	        key: 'onSelectedCheck',
	        value: function onSelectedCheck(e, key) {
	            var selectedCheckedKeys = this.state.selectedCheckedKeys;
	
	            if (e.target.checked) {
	                selectedCheckedKeys = [].concat(_toConsumableArray(selectedCheckedKeys), [key]);
	            } else {
	                selectedCheckedKeys.splice(selectedCheckedKeys.indexOf(key), 1);
	            }
	            this.setState({
	                selectedCheckedKeys: selectedCheckedKeys
	            });
	        }
	    }, {
	        key: 'onSelectedAllCheck',
	        value: function onSelectedAllCheck(e) {
	            var _state2 = this.state,
	                selectedArr = _state2.selectedArr,
	                selectedFilterArr = _state2.selectedFilterArr;
	
	            this.setState({
	                selectedCheckedKeys: e.target.checked ? selectedFilterArr ? selectedFilterArr.map(function (item) {
	                    return item.key;
	                }) : this.state.selectedArr.map(function (item) {
	                    return item.key;
	                }) : []
	            });
	        }
	    }, {
	        key: 'deleteSelected',
	        value: function deleteSelected() {
	            var _state3 = this.state,
	                selectedArr = _state3.selectedArr,
	                selectedCheckedKeys = _state3.selectedCheckedKeys,
	                checkedTreeArr = _state3.checkedTreeArr;
	
	            selectedArr = _arrayFunc2["default"].A_B_key(selectedArr, selectedCheckedKeys, 'key');
	            checkedTreeArr = _arrayFunc2["default"].A_B_key(checkedTreeArr, selectedCheckedKeys, 'key');
	            this.setState({
	                selectedArr: selectedArr,
	                checkedTreeArr: checkedTreeArr,
	                selectedCheckedKeys: []
	            });
	        }
	    }, {
	        key: 'onTreeSearch',
	        value: function onTreeSearch(value) {
	            var _this2 = this;
	
	            if (value) {
	                _index2["default"].post(source.search, _extends({ "keyword": value }, this.props.otherParam || {})).then(function (_ref) {
	                    var data = _ref.data;
	
	                    if (!Array.isArray(data.departmentAndUserBo)) {
	                        data = [data.departmentAndUserBo];
	                    }
	                    _this2.setState({
	                        source: filter2(data),
	                        checkedTreeArr: []
	                    });
	                });
	            } else {
	                this.setState({
	                    source: source.aysnc,
	                    checkedTreeArr: []
	                });
	            }
	        }
	    }, {
	        key: 'onSelectedSearch',
	        value: function onSelectedSearch(value) {
	            if (value) {
	                var selectedFilterArr = this.state.selectedArr.filter(function (item) {
	                    return item.name.indexOf(value) > -1;
	                });
	                this.setState({
	                    selectedFilterArr: selectedFilterArr,
	                    selectedCheckedKeys: []
	                });
	            } else {
	                this.setState({
	                    selectedFilterArr: null
	                });
	            }
	        }
	    }, {
	        key: 'handleOk',
	        value: function handleOk() {
	            console.log(this.state.selectedArr);
	            this.setState({
	                checkedTreeArr: []
	            });
	            this.props.onDataChange(this.state.selectedArr);
	            this.props.changeAddDataModalVisible(false);
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel(e) {
	            this.setState({
	                checkedTreeArr: []
	            });
	            this.props.onModalClose && this.props.onModalClose();
	            this.props.changeAddDataModalVisible(false);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this,
	                _context;
	
	            var state = this.state,
	                props = this.props;
	            var source = state.source,
	                checkedTreeArr = state.checkedTreeArr,
	                selectedArr = state.selectedArr,
	                selectedFilterArr = state.selectedFilterArr,
	                selectedCheckedKeys = state.selectedCheckedKeys;
	
	            var selectedShowArr = selectedFilterArr || selectedArr;
	            var type = props.type,
	                visible = props.visible,
	                maskClosable = props.maskClosable,
	                titles = props.titles;
	
	            return _react2["default"].createElement(
	                _modal2["default"],
	                { title: titles && titles.head || '添加', width: '752',
	                    visible: visible, maskClosable: maskClosable,
	                    okText: props.okText || '确认', cancelText: props.cancelText || '取消',
	                    onOk: this.handleOk.bind(this), onCancel: this.handleCancel.bind(this) },
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'body-wrap' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'body-left' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'title' },
	                            titles && titles.left || '选择'
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'content-wrap' },
	                            _react2["default"].createElement(_searchInput2["default"], { placeholder: '\u8F93\u5165\u5173\u952E\u5B57\uFF08\u59D3\u540D\u3001\u7535\u8BDD\uFF09', style: { width: '100%' }, onSearch: this.onTreeSearch.bind(this) }),
	                            _react2["default"].createElement(
	                                'div',
	                                { className: 'body-left-content' },
	                                _react2["default"].createElement(_asyncTree2["default"], {
	                                    source: source,
	                                    checkable: true,
	                                    filter: type && type.indexOf('msg') > -1 ? filter_msg : filter,
	                                    defaultExpandedKeys: ['0'],
	                                    onCheck: this.onTreeCheck.bind(this),
	                                    checkedKeys: _arrayFunc2["default"].A_union_B(checkedTreeArr, selectedArr, 'key').map(function (item) {
	                                        return item.key;
	                                    }),
	                                    autoParam: ['deptIndexCode'],
	                                    otherParam: this.props.otherParam || undefined
	                                })
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'body-center' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'button-content' },
	                            _react2["default"].createElement(
	                                'div',
	                                { className: 'transfer-button', onClick: this.add.bind(this) },
	                                '\u6DFB\u52A0',
	                                _react2["default"].createElement('i', { className: 'lidaicon-h-angle-right' })
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'body-right' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'title' },
	                            titles && titles.right || '已选'
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'content-wrap' },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_searchInput2["default"], { placeholder: '\u8F93\u5165\u5173\u952E\u5B57\uFF08\u59D3\u540D\uFF09', style: { width: 216 }, onSearch: this.onSelectedSearch.bind(this) }),
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: 'button-wrap', onClick: this.deleteSelected.bind(this) },
	                                    _react2["default"].createElement('i', { className: 'lidaicon-h-trashcan' }),
	                                    ' \u5220\u9664'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                { className: 'body-right-content' },
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: 'check-wrap' },
	                                    _react2["default"].createElement(
	                                        _checkbox2["default"],
	                                        { className: 'checkbox', checked: selectedCheckedKeys.length > 0 && selectedCheckedKeys.length === selectedShowArr.length, onChange: this.onSelectedAllCheck.bind(this) },
	                                        '\u5168\u9009'
	                                    )
	                                ),
	                                _react2["default"].createElement(
	                                    'ul',
	                                    null,
	                                    selectedShowArr.map(function (item) {
	                                        return _react2["default"].createElement(
	                                            'li',
	                                            { className: 'user-item-wrap', key: item.key },
	                                            _react2["default"].createElement(_checkbox2["default"], { key: item.key, checked: selectedCheckedKeys.indexOf(item.key) > -1, type: 'checkbox', onChange: function onChange(e) {
	                                                    return _this3.onSelectedCheck(e, item.key);
	                                                } }),
	                                            item.name || item.realName || item.userName
	                                        );
	                                    })
	                                )
	                            )
	                        )
	                    )
	                ),
	                type === 'msgTransmit' && _react2["default"].createElement(
	                    'div',
	                    { className: 'phone-input-warp' },
	                    _react2["default"].createElement(
	                        _form2["default"],
	                        { inline: true },
	                        _react2["default"].createElement(
	                            FormItem,
	                            { label: "手动输入" },
	                            _react2["default"].createElement(_input2["default"], { placeholder: '请输入手机号，以逗号分割', style: { width: 612 }, onChange: (_context = this.props).onInputChange.bind(_context) })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return AddDataModal;
	}(_react2["default"].Component);
	
	exports["default"] = AddDataModal;
	
	
	function filter() {
	    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    return list.map(function (item) {
	        return {
	            name: item.depName || item.realName || item.userName,
	            key: item.deptIndexCode || item.userId,
	            deptIndexCode: item.deptIndexCode || "",
	            userId: item.userId || "",
	            isLeaf: item.type === "1",
	            deptName: item.deptName || "",
	            userName: item.userName || "",
	            realName: item.realName || "",
	            phone: item.phone || "",
	            email: item.email || "",
	            className: item.type === "1" ? "ant-tree-node-icon-user" : "ant-tree-node-icon-circle"
	        };
	    });
	}
	
	function filter_msg() {
	    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    return list.map(function (item) {
	        return {
	            name: item.type === "0" ? item.depName : (item.realName || item.userName) + '\uFF08' + item.phone + '\uFF09',
	            key: item.deptIndexCode || item.userId,
	            deptIndexCode: item.deptIndexCode || "",
	            userId: item.userId || "",
	            isLeaf: item.type === "1",
	            deptName: item.deptName || "",
	            userName: item.userName || "",
	            realName: item.realName || "",
	            phone: item.phone || "",
	            email: item.email || "",
	            className: item.type === "1" ? "ant-tree-node-icon-user" : "ant-tree-node-icon-circle"
	        };
	    }).filter(function (item) {
	        return !item.isLeaf || item.phone;
	    });
	}
	
	function filter2() {
	    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    return list.map(function (item) {
	        return {
	            name: item.realName || item.name,
	            key: item.indexCode || item.id,
	            deptIndexCode: item.indexCode || "",
	            userId: item.id || "",
	            isLeaf: item.type === "1",
	            deptName: item.deptName || "",
	            userName: item.name || "",
	            realName: item.realName || "",
	            phone: item.phone || "",
	            email: item.email || "",
	            className: item.type === "1" ? "ant-tree-node-icon-user" : "ant-tree-node-icon-circle",
	            children: item.type === "0" && filter2([].concat(_toConsumableArray(item.children), _toConsumableArray(item.users)))
	        };
	    });
	}
	
	function filter3(_ref2) {
	    var _ref2$users = _ref2.users,
	        users = _ref2$users === undefined ? [] : _ref2$users,
	        _ref2$children = _ref2.children,
	        children = _ref2$children === undefined ? [] : _ref2$children;
	
	    var arr1 = children ? children.map(function (item) {
	        return {
	            name: item.depName || item.userName,
	            key: item.deptIndexCode || item.userId,
	            deptIndexCode: item.deptIndexCode || "",
	            userId: item.userId || "",
	            isLeaf: item.type === "1",
	            className: item.type === "1" ? "ant-tree-node-icon-user" : "ant-tree-node-icon-circle"
	        };
	    }) : [];
	    var arr2 = users ? users.map(function (item) {
	        return {
	            name: item.depName || item.userName,
	            key: item.deptIndexCode || item.userId,
	            deptIndexCode: item.deptIndexCode || "",
	            userId: item.userId || "",
	            isLeaf: item.type === "1",
	            className: item.type === "1" ? "ant-tree-node-icon-user" : "ant-tree-node-icon-circle"
	        };
	    }) : [];
	    return [].concat(_toConsumableArray(arr1), _toConsumableArray(arr2));
	}

/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tree = __webpack_require__(593);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(599);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TreeNode = _tree2["default"].TreeNode;
	var isArray = Array.isArray;
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            source: props.source,
	            treeData: [],
	            expandedKeys: [],
	            autoExpandParent: true,
	            checkedKeys: props.checkedKeys || [],
	            selectedKeys: props.selectedKeys || []
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.initTree();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this2 = this;
	
	            var checkedKeys = nextProps.checkedKeys,
	                selectedKeys = nextProps.selectedKeys,
	                source = nextProps.source,
	                otherParam = nextProps.otherParam;
	
	            if (Array.isArray(checkedKeys)) {
	                this.setState({ checkedKeys: checkedKeys });
	            }
	            if (Array.isArray(selectedKeys)) {
	                this.setState({ selectedKeys: selectedKeys });
	            }
	            if (Array.isArray(source) && source !== this.props.source) {
	                var expandedKeys = [];
	                var treeData = source;
	                source.length === 1 && this.searchOrgKeys(treeData, expandedKeys);
	                this.setState({
	                    source: source,
	                    treeData: treeData,
	                    expandedKeys: expandedKeys,
	                    autoExpandParent: true
	                });
	            } else if (typeof source === 'string' && source !== this.state.source) {
	                this.setState({
	                    source: source
	                }, function () {
	                    _this2.initTree();
	                });
	            }
	            if ((typeof otherParam === 'undefined' ? 'undefined' : _typeof(otherParam)) === 'object' && otherParam !== this.props.otherParam) {
	                this.initTree();
	            }
	        }
	    }, {
	        key: 'searchOrgKeys',
	        value: function searchOrgKeys(data, keyArray) {
	            var _this3 = this;
	
	            //遍历组织节点indexCode
	            data.map(function (item) {
	                var key = item.key,
	                    children = item.children;
	
	                if (children && children.length > 0) {
	                    keyArray.push(key);
	                    _this3.searchOrgKeys(children, keyArray);
	                    return keyArray;
	                }
	            });
	        }
	    }, {
	        key: 'initTree',
	        value: function initTree() {
	            var _this4 = this;
	
	            var _props = this.props,
	                async = _props.async,
	                initParam = _props.initParam;
	            var source = this.state.source;
	
	            if (!source) return;
	
	            if (isArray(source)) {
	                return this.setDefaultExpanded(source);
	            }
	
	            var _initParam = {};
	            if (initParam) {
	                _initParam = this.makeParams(initParam);
	            }
	            this.setState({
	                expandedKeys: []
	            });
	            this.fetch(_initParam).then(function (treeData) {
	                var willExpandedNodes = _this4.setDefaultExpanded(treeData);
	                if (async !== false) {
	                    willExpandedNodes.forEach(function (willExpandedNode) {
	                        var params = _this4.makeParams(willExpandedNode);
	                        _this4.fetch(params).then(function (data) {
	                            willExpandedNode.children = data;
	                            _this4.setState({ treeData: treeData });
	                        });
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'setDefaultExpanded',
	        value: function setDefaultExpanded(treeData) {
	            var defaultExpandedKeys = this.props.defaultExpandedKeys;
	
	            this.setState({ treeData: treeData });
	            var willExpandedNodes = [];
	            if (treeData && defaultExpandedKeys) {
	                willExpandedNodes = treeData.filter(function (item) {
	                    return defaultExpandedKeys.indexOf(item.key) != -1;
	                });
	            }
	            return willExpandedNodes;
	        }
	    }, {
	        key: 'makeParams',
	        value: function makeParams(data) {
	            var params = {};
	            this.props.autoParam.forEach(function (key) {
	                params[key] = data[key];
	            });
	            return _extends({}, params, this.props.otherParam);
	        }
	    }, {
	        key: 'fetch',
	        value: function fetch(params) {
	            var props = this.props,
	                state = this.state;
	            // return http.get(props.source, { params })
	
	            return _http2["default"].post(state.source, params).then(function (_ref) {
	                var data = _ref.data;
	                return props.filter(data);
	            })["catch"](function (e) {});
	        }
	    }, {
	        key: 'onTreeLoadData',
	        value: function onTreeLoadData(treeNode, checked, checkedNodes) {
	            var _this5 = this;
	
	            var async = this.props.async;
	            var source = this.state.source;
	            //异步模式下，如果节点已经展开过，就不用再调用
	            //同步模式或source为数组，也不用再调用
	
	            if (treeNode.props.children || async === false || isArray(source)) {
	                return new Promise(function (resolve) {
	                    return resolve();
	                });
	            }
	            var dataRef = treeNode.props.dataRef;
	            var params = this.makeParams(dataRef);
	            return this.fetch(params).then(function (data) {
	                dataRef.children = data;
	                var checkedKeys = _this5.state.checkedKeys;
	                if (checked) {
	                    var fragData = data.filter(function (item) {
	                        return item.isLeaf;
	                    });
	                    checkedKeys = Array.from(new Set([].concat(_toConsumableArray(checkedKeys), _toConsumableArray(fragData.map(function (item) {
	                        return item.key;
	                    })))));
	                    _this5.sentPropsOnCheck([].concat(_toConsumableArray(checkedNodes.filter(function (treeNode) {
	                        return treeNode.props.isLeaf;
	                    }).map(function (treeNode) {
	                        return treeNode.props.dataRef;
	                    })), _toConsumableArray(fragData)));
	                }
	
	                _this5.setState({
	                    treeData: [].concat(_toConsumableArray(_this5.state.treeData)),
	                    checkedKeys: checkedKeys
	                });
	            });
	        }
	    }, {
	        key: 'onCheck',
	        value: function onCheck(a, _ref2) {
	            var checked = _ref2.checked,
	                checkedNodes = _ref2.checkedNodes,
	                node = _ref2.node,
	                event = _ref2.event;
	
	            var loadData = false;
	            if (checked && !node.props.dataRef.isLeaf) {
	                //点击组织复选框
	                this.setState({
	                    expandedKeys: [].concat(_toConsumableArray(this.state.expandedKeys), [node.props.dataRef.key])
	                });
	                if (!node.props.children) {
	                    //加载此组织下的数据
	                    loadData = true;
	                    this.onTreeLoadData(node, checked, checkedNodes);
	                }
	            }
	
	            if (loadData) {
	                return;
	            }
	
	            var checkedDataRef = [];
	            if (checked && node.props.halfChecked) {
	                var _hashTrue = function _hashTrue(children) {
	                    children.forEach(function (item) {
	                        hash[item.key] = true;
	                        if (item.props.children) {
	                            _hashTrue(item.props.children);
	                        }
	                    });
	                };
	
	                //取消选中的半选
	                var hash = {};
	                hash[node.props.eventKey] = true;
	
	                _hashTrue(node.props.children);
	
	                checkedNodes.forEach(function (treeNode) {
	                    var dataRef = treeNode.props.dataRef;
	
	                    if (!hash[treeNode.key]) {
	                        checkedDataRef.push(dataRef);
	                    }
	                });
	            } else {
	                checkedNodes.forEach(function (treeNode) {
	                    var _treeNode$props = treeNode.props,
	                        isLeaf = _treeNode$props.isLeaf,
	                        dataRef = _treeNode$props.dataRef;
	
	                    if (isLeaf) {
	                        checkedDataRef.push(dataRef);
	                    }
	                });
	            }
	
	            this.setState({
	                checkedKeys: Array.from(new Set([].concat(_toConsumableArray(checkedDataRef.filter(function (item) {
	                    return item.isLeaf;
	                }).map(function (item) {
	                    return item.key;
	                })))))
	            });
	
	            this.sentPropsOnCheck(checkedDataRef);
	        }
	    }, {
	        key: 'sentPropsOnCheck',
	        value: function sentPropsOnCheck(data) {
	            var onCheck = this.props.onCheck;
	            if (onCheck) {
	                onCheck(data);
	            }
	        }
	    }, {
	        key: 'onSelect',
	        value: function onSelect(a, _ref3) {
	            var selectedNodes = _ref3.selectedNodes;
	
	            var selectedDataRef = selectedNodes.map(function (treeNode) {
	                return treeNode.props.dataRef;
	            });
	            this.setState({
	                selectedKeys: selectedDataRef.map(function (item) {
	                    return item.key;
	                })
	            });
	            var onSelect = this.props.onSelect;
	            if (onSelect) {
	                onSelect(selectedDataRef);
	            }
	        }
	    }, {
	        key: 'onExpand',
	        value: function onExpand(expandedKeys, _ref4) {
	            var expanded = _ref4.expanded,
	                node = _ref4.node;
	
	            expandedKeys = Array.from(new Set(expandedKeys));
	            var indexKey = expandedKeys.indexOf(node.props.eventKey);
	            if (!expanded && indexKey > 0) {
	                expandedKeys.splice(indexKey, 1);
	            }
	            this.setState({
	                expandedKeys: expandedKeys,
	                autoExpandParent: false
	            });
	        }
	    }, {
	        key: 'renderTreeNodes',
	        value: function renderTreeNodes(data) {
	            var _this6 = this;
	
	            return Array.isArray(data) ? data.map(function (item) {
	                var key = item.key,
	                    children = item.children;
	
	                var props = {
	                    key: key,
	                    title: item.title || item.name,
	                    isLeaf: item.isLeaf,
	                    className: item.className || ""
	                };
	                return children ? _react2["default"].createElement(
	                    TreeNode,
	                    _extends({}, props, { dataRef: item, key: key }),
	                    _this6.renderTreeNodes(children)
	                ) : _react2["default"].createElement(TreeNode, _extends({}, props, { dataRef: item, key: key }));
	            }) : _react2["default"].createElement(TreeNode, { title: '\u65E0\u7EC4\u7EC7\u6743\u9650\u6216\u52A0\u8F7D\u6570\u636E\u51FA\u9519', isLeaf: true, disabled: true });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	
	            return state.source ? _react2["default"].createElement(
	                _tree2["default"],
	                {
	                    checkable: props.checkable,
	                    checkedKeys: state.checkedKeys,
	                    selectedKeys: state.selectedKeys,
	                    onExpand: this.onExpand.bind(this),
	                    expandedKeys: state.expandedKeys,
	                    autoExpandParent: state.autoExpandParent,
	                    defaultExpandedKeys: props.defaultExpandedKeys,
	                    onCheck: this.onCheck.bind(this),
	                    onSelect: this.onSelect.bind(this),
	                    loadData: this.onTreeLoadData.bind(this) },
	                this.renderTreeNodes(state.treeData)
	            ) : _react2["default"].createElement(
	                _tree2["default"],
	                null,
	                _react2["default"].createElement(TreeNode, { isLeaf: true, disabled: true })
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	;
	
	exports["default"] = App;

/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _input = __webpack_require__(492);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(401);
	
	__webpack_require__(578);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	__webpack_require__(1136);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InputGroup = _input2["default"].Group;
	
	var SearchInput = function (_React$Component) {
	    _inherits(SearchInput, _React$Component);
	
	    function SearchInput(props) {
	        _classCallCheck(this, SearchInput);
	
	        var _this = _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call(this, props));
	
	        _this.state = {
	            value: null,
	            focus: false
	        };
	        return _this;
	    }
	
	    _createClass(SearchInput, [{
	        key: 'handleInputChange',
	        value: function handleInputChange(e) {
	            var value = e.target.value;
	            // console.log(e.target.value);
	            this.setState({
	                value: value
	            });
	            if (!value && this.props.onSearch) {
	                this.props.onSearch(null);
	            }
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(e) {
	            this.setState({
	                focus: false
	            });
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus(e) {
	            this.setState({
	                focus: true
	            });
	        }
	    }, {
	        key: 'handleSearch',
	        value: function handleSearch() {
	            if (this.props.onSearch && this.state.value) {
	                this.props.onSearch(this.state.value);
	            }
	        }
	    }, {
	        key: 'clearSearch',
	        value: function clearSearch() {
	            this.setState({
	                value: null
	            });
	            if (this.props.onSearch) {
	                this.props.onSearch(null);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                style = _props.style,
	                placeholder = _props.placeholder;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'ant-search-input-wrapper search-input-wrap', style: style },
	                _react2["default"].createElement(
	                    InputGroup,
	                    { className: "ant-search-input " + (this.state.focus ? "ant-search-input-focus" : "") },
	                    _react2["default"].createElement(_input2["default"], { placeholder: placeholder ? placeholder : "请输入", value: this.state.value, onChange: this.handleInputChange.bind(this),
	                        onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), onPressEnter: this.handleSearch.bind(this)
	                    }),
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { className: 'ant-search-btn search-input-btn', onClick: this.handleSearch.bind(this) },
	                        _react2["default"].createElement(_icon2["default"], { className: this.state.focus ? 'brand-color' : '', type: 'lidaicon-h-search' })
	                    ),
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { className: "ant-search-btn search-input-btn search-input-del-btn " + (this.state.value ? "" : "search-input-btn-hide"), onClick: this.clearSearch.bind(this) },
	                        _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-close-circle-f' })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return SearchInput;
	}(_react2["default"].Component);
	
	exports["default"] = SearchInput;

/***/ }),

/***/ 1136:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1137:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/*
	* 集合操作的一些方法
	* */
	//A B差集 A=[{}] B=[{}]
	var A_B = function A_B(A, B, key) {
	    return A.filter(function (a) {
	        return !B.find(function (b) {
	            return b[key] === a[key];
	        });
	    });
	};
	
	//A B差集 A=[{}] B=[1]
	var A_B_key = function A_B_key(A, B, key) {
	    return A.filter(function (a) {
	        return B.indexOf(a[key]) === -1;
	    });
	};
	
	//A B交集
	var A_intersection_B = function A_intersection_B(A, B, key) {
	    return A.filter(function (a) {
	        return B.find(function (b) {
	            return b[key] === a[key];
	        });
	    });
	};
	
	//A B并集(A B 合并去重) A=[{}] B=[{}]
	var A_union_B = function A_union_B(A, B) {
	    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';
	
	    return [].concat(_toConsumableArray(A_B(A, B, key)), _toConsumableArray(B));
	};
	
	exports["default"] = {
	    A_B: A_B,
	    A_B_key: A_B_key,
	    A_intersection_B: A_intersection_B,
	    A_union_B: A_union_B
	};

/***/ }),

/***/ 1138:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1139:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=map/19.map