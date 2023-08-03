!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).MySDKComponent=t()}(this,(function(){"use strict";function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,i=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n,o={exports:{}},a={};var u,i={exports:{}};
/**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */"production"===process.env.NODE_ENV?o.exports=function(){if(n)return a;n=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=b.prototype=new g;_.constructor=b,m(_,v.prototype),_.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function O(t,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)S.call(r,o)&&!C.hasOwnProperty(o)&&(a[o]=r[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:e,type:t,key:u,ref:i,props:a,_owner:k.current}}function R(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var E=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(r,n,o,a,u){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var c=!1;if(null===r)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case e:case t:c=!0}}if(c)return u=u(c=r),r=""===a?"."+j(c,0):a,w(u)?(o="",null!=r&&(o=r.replace(E,"$&/")+"/"),x(u,n,o,"",(function(e){return e}))):null!=u&&(R(u)&&(u=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+r)),n.push(u)),1;if(c=0,a=""===a?".":a+":",w(r))for(var s=0;s<r.length;s++){var l=a+j(i=r[s],s);c+=x(i,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(r),"function"==typeof l)for(r=l.call(r),s=0;!(i=r.next()).done;)c+=x(i=i.value,n,o,l=a+j(i,s++),u);else if("object"===i)throw n=String(r),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};return a.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a.Component=v,a.Fragment=r,a.Profiler=u,a.PureComponent=b,a.StrictMode=o,a.Suspense=l,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,a.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=m({},t.props),a=t.key,u=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=k.current),void 0!==r.key&&(a=""+r.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(s in r)S.call(r,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==c?c[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:e,type:t.type,key:a,ref:u,props:o,_owner:i}},a.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},a.createElement=O,a.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:s,render:e}},a.isValidElement=R,a.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},a.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},a.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},a.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},a.useCallback=function(e,t){return $.current.useCallback(e,t)},a.useContext=function(e){return $.current.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e){return $.current.useDeferredValue(e)},a.useEffect=function(e,t){return $.current.useEffect(e,t)},a.useId=function(){return $.current.useId()},a.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},a.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},a.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},a.useMemo=function(e,t){return $.current.useMemo(e,t)},a.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},a.useRef=function(e){return $.current.useRef(e)},a.useState=function(e){return $.current.useState(e)},a.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},a.useTransition=function(){return $.current.useTransition()},a.version="18.2.0",a}():o.exports=(u||(u=1,function(e,t){"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator,h="@@iterator";function v(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e[h];return"function"==typeof t?t:null}var g={current:null},b={transition:null},_={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},w={current:null},S={},k=null;function C(e){k=e}S.setExtraStackFrame=function(e){k=e},S.getCurrentStack=null,S.getStackAddendum=function(){var e="";k&&(e+=k);var t=S.getCurrentStack;return t&&(e+=t()||""),e};var O=!1,R=!1,E=!1,j=!1,x=!1,P={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:b,ReactCurrentOwner:w};function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("warn",e,r)}function $(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("error",e,r)}function I(e,t,r){var n=P.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}P.ReactDebugCurrentFrame=S,P.ReactCurrentActQueue=_;var D={};function N(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;D[o]||($("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),D[o]=!0)}var L={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){N(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){N(e,"replaceState")},enqueueSetState:function(e,t,r,n){N(e,"setState")}},A=Object.assign,M={};function F(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||L}Object.freeze(M),F.prototype.isReactComponent={},F.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},F.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var V={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},U=function(e,t){Object.defineProperty(F.prototype,e,{get:function(){T("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var z in V)V.hasOwnProperty(z)&&U(z,V[z]);function B(){}function q(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||L}B.prototype=F.prototype;var H=q.prototype=new B;H.constructor=q,A(H,F.prototype),H.isPureReactComponent=!0;var Y=Array.isArray;function W(e){return Y(e)}function K(e){return""+e}function G(e){if(function(e){try{return K(e),!1}catch(e){return!0}}(e))return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),K(e)}function J(e){return e.displayName||"Context"}function X(e){if(null==e)return null;if("number"==typeof e.tag&&$("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case u:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return J(e)+".Consumer";case i:return J(e._context)+".Provider";case s:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var t=e.displayName||null;return null!==t?t:X(e.type)||"Memo";case d:var r=e,y=r._payload,m=r._init;try{return X(m(y))}catch(e){return null}}return null}var Q,Z,ee,te=Object.prototype.hasOwnProperty,re={key:!0,ref:!0,__self:!0,__source:!0};function ne(e){if(te.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function oe(e){if(te.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}ee={};var ae=function(e,t,n,o,a,u,i){var c={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ue(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in ne(t)&&(u=t.ref,function(e){if("string"==typeof e.ref&&w.current&&e.__self&&w.current.stateNode!==e.__self){var t=X(w.current.type);ee[t]||($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),ee[t]=!0)}}(t)),oe(t)&&(G(t.key),a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)te.call(t,n)&&!re.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){Q||(Q=!0,$("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),u&&function(e,t){var r=function(){Z||(Z=!0,$("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return ae(e,a,u,i,c,w.current,o)}function ie(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=A({},e.props),u=e.key,i=e.ref,c=e._self,s=e._source,l=e._owner;if(null!=t)for(n in ne(t)&&(i=t.ref,l=w.current),oe(t)&&(G(t.key),u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)te.call(t,n)&&!re.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ae(e.type,u,i,c,s,l,a)}function ce(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var se=".",le=":",fe=!1,pe=/\/+/g;function de(e){return e.replace(pe,"$&/")}function ye(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(G(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function me(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c,s,l,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=u(p),y=""===a?se+ye(p,0):a;if(W(d)){var m="";null!=y&&(m=de(y)+"/"),me(d,t,m,"",(function(e){return e}))}else null!=d&&(ce(d)&&(!d.key||p&&p.key===d.key||G(d.key),c=d,s=o+(!d.key||p&&p.key===d.key?"":de(""+d.key)+"/")+y,d=ae(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),t.push(d));return 1}var h=0,g=""===a?se:a+le;if(W(e))for(var b=0;b<e.length;b++)h+=me(l=e[b],t,o,g+ye(l,b),u);else{var _=v(e);if("function"==typeof _){var w=e;_===w.entries&&(fe||T("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),fe=!0);for(var S,k=_.call(w),C=0;!(S=k.next()).done;)h+=me(l=S.value,t,o,g+ye(l,C++),u)}else if("object"===i){var O=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}}return h}function he(e,t,r){if(null==e)return e;var n=[],o=0;return me(e,n,"","",(function(e){return t.call(r,e,o++)})),n}var ve,ge=-1,be=0,_e=1,we=2;function Se(e){if(e._status===ge){var t=(0,e._result)();if(t.then((function(t){if(e._status===be||e._status===ge){var r=e;r._status=_e,r._result=t}}),(function(t){if(e._status===be||e._status===ge){var r=e;r._status=we,r._result=t}})),e._status===ge){var r=e;r._status=be,r._result=t}}if(e._status===_e){var n=e._result;return void 0===n&&$("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||$("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function ke(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===u||x||e===a||e===l||e===f||j||e===y||O||R||E)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===ve||void 0!==e.getModuleId)}function Ce(){var e=g.current;return null===e&&$("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ve=Symbol.for("react.module.reference");var Oe,Re,Ee,je,xe,Pe,Te,$e=0;function Ie(){}Ie.__reactDisabledLog=!0;var De,Ne=P.ReactCurrentDispatcher;function Le(e,t,r){if(void 0===De)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||""}return"\n"+De+e}var Ae,Me=!1,Fe="function"==typeof WeakMap?WeakMap:Map;function Ve(e,t){if(!e||Me)return"";var r,n=Ae.get(e);if(void 0!==n)return n;Me=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Ne.current,Ne.current=null,function(){if(0===$e){Oe=console.log,Re=console.info,Ee=console.warn,je=console.error,xe=console.group,Pe=console.groupCollapsed,Te=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ie,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$e++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),c=r.stack.split("\n"),s=i.length-1,l=c.length-1;s>=1&&l>=0&&i[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(i[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||i[s]!==c[l]){var f="\n"+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&Ae.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{Me=!1,Ne.current=o,function(){if(0==--$e){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:Oe}),info:A({},e,{value:Re}),warn:A({},e,{value:Ee}),error:A({},e,{value:je}),group:A({},e,{value:xe}),groupCollapsed:A({},e,{value:Pe}),groupEnd:A({},e,{value:Te})})}$e<0&&$("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Le(p):"";return"function"==typeof e&&Ae.set(e,d),d}function Ue(e,t,r){if(null==e)return"";if("function"==typeof e)return Ve(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Le(e);switch(e){case l:return Le("Suspense");case f:return Le("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case s:return Ve(e.render,!1);case p:return Ue(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return Ue(a(o),t,r)}catch(e){}}return""}Ae=new Fe;var ze,Be={},qe=P.ReactDebugCurrentFrame;function He(e){if(e){var t=e._owner,r=Ue(e.type,e._source,t?t.type:null);qe.setExtraStackFrame(r)}else qe.setExtraStackFrame(null)}function Ye(e){if(e){var t=e._owner;C(Ue(e.type,e._source,t?t.type:null))}else C(null)}function We(){if(w.current){var e=X(w.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ze=!1;var Ke={};function Ge(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=We();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ke[r]){Ke[r]=!0;var n="";e&&e._owner&&e._owner!==w.current&&(n=" It was passed a child from "+X(e._owner.type)+"."),Ye(e),$('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ye(null)}}}function Je(e,t){if("object"==typeof e)if(W(e))for(var r=0;r<e.length;r++){var n=e[r];ce(n)&&Ge(n,t)}else if(ce(e))e._store&&(e._store.validated=!0);else if(e){var o=v(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ce(a.value)&&Ge(a.value,t)}}function Xe(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==s&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=X(r);!function(e,t,r,n,o){var a=Function.call.bind(te);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(He(o),$("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),He(null)),i instanceof Error&&!(i.message in Be)&&(Be[i.message]=!0,He(o),$("Failed %s type: %s",r,i.message),He(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||ze||(ze=!0,$("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",X(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||$("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Qe(e,t,n){var a,u,i=ke(e);if(!i){var c,s="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),s+=(null!=(a=t)&&void 0!==(u=a.__source)?"\n\nCheck your code at "+u.fileName.replace(/^.*[\\\/]/,"")+":"+u.lineNumber+".":"")||We(),null===e?c="null":W(e)?c="array":void 0!==e&&e.$$typeof===r?(c="<"+(X(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,$("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var l=ue.apply(this,arguments);if(null==l)return l;if(i)for(var f=2;f<arguments.length;f++)Je(arguments[f],e);return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ye(e),$("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ye(null);break}}null!==e.ref&&(Ye(e),$("Invalid attribute `ref` supplied to `React.Fragment`."),Ye(null))}(l):Xe(l),l}var Ze=!1,et=!1,tt=null,rt=0,nt=!1;function ot(e){e!==rt-1&&$("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),rt=e}function at(t,r,n){var o=_.current;if(null!==o)try{it(o),function(t){if(null===tt)try{var r=("require"+Math.random()).slice(0,7);tt=(e&&e[r]).call(e,"timers").setImmediate}catch(e){tt=function(e){!1===et&&(et=!0,"undefined"==typeof MessageChannel&&$("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}tt(t)}((function(){0===o.length?(_.current=null,r(t)):at(t,r,n)}))}catch(e){n(e)}else r(t)}var ut=!1;function it(e){if(!ut){ut=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{ut=!1}}}var ct=Qe,st=function(e,t,r){for(var n=ie.apply(this,arguments),o=2;o<arguments.length;o++)Je(arguments[o],n.type);return Xe(n),n},lt=function(e){var t=Qe.bind(null,e);return t.type=e,Ze||(Ze=!0,T("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return T("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ft={map:he,forEach:function(e,t,r){he(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!ce(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=ft,t.Component=F,t.Fragment=o,t.Profiler=u,t.PureComponent=q,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=st,t.createContext=function(e){var t={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:c,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,$("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,$("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(T("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=ct,t.createFactory=lt,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===p?$("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?$("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&$("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||$("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:s,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},t.isValidElement=ce,t.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:ge,_result:e},_init:Se};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){$("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){$("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){ke(e)||$("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},t.startTransition=function(e,t){var r=b.transition;b.transition={};var n=b.transition;b.transition._updatedFibers=new Set;try{e()}finally{b.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear())}},t.unstable_act=function(e){var t=rt;rt++,null===_.current&&(_.current=[]);var r,n=_.isBatchingLegacy;try{if(_.isBatchingLegacy=!0,r=e(),!n&&_.didScheduleLegacyUpdate){var o=_.current;null!==o&&(_.didScheduleLegacyUpdate=!1,it(o))}}catch(e){throw ot(t),e}finally{_.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then((function(n){ot(t),0===rt?at(n,e,r):e(n)}),(function(e){ot(t),r(e)}))}};return nt||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){u||(nt=!0,$("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),i}var c=r;if(ot(t),0===rt){var s=_.current;return null!==s&&(it(s),_.current=null),{then:function(e,t){null===_.current?(_.current=[],at(c,e,t)):e(c)}}}return{then:function(e,t){e(c)}}},t.useCallback=function(e,t){return Ce().useCallback(e,t)},t.useContext=function(e){var t=Ce();if(void 0!==e._context){var r=e._context;r.Consumer===e?$("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&$("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return Ce().useDebugValue(e,t)},t.useDeferredValue=function(e){return Ce().useDeferredValue(e)},t.useEffect=function(e,t){return Ce().useEffect(e,t)},t.useId=function(){return Ce().useId()},t.useImperativeHandle=function(e,t,r){return Ce().useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return Ce().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return Ce().useLayoutEffect(e,t)},t.useMemo=function(e,t){return Ce().useMemo(e,t)},t.useReducer=function(e,t,r){return Ce().useReducer(e,t,r)},t.useRef=function(e){return Ce().useRef(e)},t.useState=function(e){return Ce().useState(e)},t.useSyncExternalStore=function(e,t,r){return Ce().useSyncExternalStore(e,t,r)},t.useTransition=function(){return Ce().useTransition()},t.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}(i,i.exports)),i.exports);var c=o.exports,s=r(c);return function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("#root {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n  transition: filter 300ms;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.react:hover {\n  filter: drop-shadow(0 0 2em #61dafbaa);\n}\n\n@keyframes logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  a:nth-of-type(2) .logo {\n    animation: logo-spin infinite 20s linear;\n  }\n}\n\n.card {\n  padding: 2em;\n}\n\n.read-the-docs {\n  color: #888;\n}\n"),function(){var t=e(c.useState(0),2),r=t[0],n=t[1];return s.createElement(s.Fragment,null,s.createElement("div",null),s.createElement("h1",null,"Vite + React"),s.createElement("div",{className:"card"},s.createElement("button",{onClick:function(){return n((function(e){return e+1}))}},"count is ",r),s.createElement("p",null,"Edit ",s.createElement("code",null,"src/MySDKComponent.jsx")," and save to test HMR")),s.createElement("p",{className:"read-the-docs"},"Click on the Vite and React logos to learn more"))}}));