function p0(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bu={exports:{}},Ma={},Pu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),f0=Symbol.for("react.portal"),m0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),x0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),b0=Symbol.for("react.forward_ref"),_0=Symbol.for("react.suspense"),w0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),Ho=Symbol.iterator;function N0(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zu=Object.assign,Lu={};function wt(e,n,t){this.props=e,this.context=n,this.refs=Lu,this.updater=t||Au}wt.prototype.isReactComponent={};wt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};wt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=wt.prototype;function zs(e,n,t){this.props=e,this.context=n,this.refs=Lu,this.updater=t||Au}var Ls=zs.prototype=new Ru;Ls.constructor=zs;zu(Ls,wt.prototype);Ls.isPureReactComponent=!0;var Wo=Array.isArray,Fu=Object.prototype.hasOwnProperty,Rs={current:null},Hu={key:!0,ref:!0,__self:!0,__source:!0};function Wu(e,n,t){var i,a={},r=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(r=""+n.key),n)Fu.call(n,i)&&!Hu.hasOwnProperty(i)&&(a[i]=n[i]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)a[i]===void 0&&(a[i]=l[i]);return{$$typeof:hi,type:e,key:r,ref:o,props:a,_owner:Rs.current}}function j0(e,n){return{$$typeof:hi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function C0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Vo=/\/+/g;function Za(e,n){return typeof e=="object"&&e!==null&&e.key!=null?C0(""+e.key):n.toString(36)}function Wi(e,n,t,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case hi:case f0:o=!0}}if(o)return o=e,a=a(o),e=i===""?"."+Za(o,0):i,Wo(a)?(t="",e!=null&&(t=e.replace(Vo,"$&/")+"/"),Wi(a,n,t,"",function(f){return f})):a!=null&&(Fs(a)&&(a=j0(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Vo,"$&/")+"/")+e)),n.push(a)),1;if(o=0,i=i===""?".":i+":",Wo(e))for(var l=0;l<e.length;l++){r=e[l];var u=i+Za(r,l);o+=Wi(r,n,t,u,a)}else if(u=N0(e),typeof u=="function")for(e=u.call(e),l=0;!(r=e.next()).done;)r=r.value,u=i+Za(r,l++),o+=Wi(r,n,t,u,a);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function vi(e,n,t){if(e==null)return e;var i=[],a=0;return Wi(e,i,"","",function(r){return n.call(t,r,a++)}),i}function T0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Vi={transition:null},S0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Vi,ReactCurrentOwner:Rs};R.Children={map:vi,forEach:function(e,n,t){vi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vi(e,function(){n++}),n},toArray:function(e){return vi(e,function(n){return n})||[]},only:function(e){if(!Fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=wt;R.Fragment=m0;R.Profiler=x0;R.PureComponent=zs;R.StrictMode=g0;R.Suspense=_0;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=zu({},e.props),a=e.key,r=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,o=Rs.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)Fu.call(n,u)&&!Hu.hasOwnProperty(u)&&(i[u]=n[u]===void 0&&l!==void 0?l[u]:n[u])}var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:hi,type:e.type,key:a,ref:r,props:i,_owner:o}};R.createContext=function(e){return e={$$typeof:y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v0,_context:e},e.Consumer=e};R.createElement=Wu;R.createFactory=function(e){var n=Wu.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:b0,render:e}};R.isValidElement=Fs;R.lazy=function(e){return{$$typeof:k0,_payload:{_status:-1,_result:e},_init:T0}};R.memo=function(e,n){return{$$typeof:w0,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Vi.transition;Vi.transition={};try{e()}finally{Vi.transition=n}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,n){return xe.current.useCallback(e,n)};R.useContext=function(e){return xe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};R.useEffect=function(e,n){return xe.current.useEffect(e,n)};R.useId=function(){return xe.current.useId()};R.useImperativeHandle=function(e,n,t){return xe.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return xe.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return xe.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return xe.current.useMemo(e,n)};R.useReducer=function(e,n,t){return xe.current.useReducer(e,n,t)};R.useRef=function(e){return xe.current.useRef(e)};R.useState=function(e){return xe.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return xe.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return xe.current.useTransition()};R.version="18.2.0";Pu.exports=R;var B=Pu.exports;const Hs=Sa(B),M0=p0({__proto__:null,default:Hs},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=B,D0=Symbol.for("react.element"),I0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,B0=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P0={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,n,t){var i,a={},r=null,o=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)O0.call(n,i)&&!P0.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)a[i]===void 0&&(a[i]=n[i]);return{$$typeof:D0,type:e,key:r,ref:o,props:a,_owner:B0.current}}Ma.Fragment=I0;Ma.jsx=Vu;Ma.jsxs=Vu;Bu.exports=Ma;var s=Bu.exports,Fr={},Uu={exports:{}},Ee={},$u={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(D,O){var z=D.length;D.push(O);e:for(;0<z;){var W=z-1>>>1,H=D[W];if(0<a(H,O))D[W]=O,D[z]=H,z=W;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],z=D.pop();if(z!==O){D[0]=z;e:for(var W=0,H=D.length,qn=H>>>1;W<qn;){var ue=2*(W+1)-1,Je=D[ue],Ie=ue+1,Ze=D[Ie];if(0>a(Je,z))Ie<H&&0>a(Ze,Je)?(D[W]=Ze,D[Ie]=z,W=Ie):(D[W]=Je,D[ue]=z,W=ue);else if(Ie<H&&0>a(Ze,z))D[W]=Ze,D[Ie]=z,W=Ie;else break e}}return O}function a(D,O){var z=D.sortIndex-O.sortIndex;return z!==0?z:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],f=[],y=1,x=null,b=3,C=!1,M=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var O=t(f);O!==null;){if(O.callback===null)i(f);else if(O.startTime<=D)i(f),O.sortIndex=O.expirationTime,n(u,O);else break;O=t(f)}}function m(D){if(T=!1,p(D),!M)if(t(u)!==null)M=!0,U(k);else{var O=t(f);O!==null&&fe(m,O.startTime-D)}}function k(D,O){M=!1,T&&(T=!1,d(_),_=-1),C=!0;var z=b;try{for(p(O),x=t(u);x!==null&&(!(x.expirationTime>O)||D&&!j());){var W=x.callback;if(typeof W=="function"){x.callback=null,b=x.priorityLevel;var H=W(x.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?x.callback=H:x===t(u)&&i(u),p(O)}else i(u);x=t(u)}if(x!==null)var qn=!0;else{var ue=t(f);ue!==null&&fe(m,ue.startTime-O),qn=!1}return qn}finally{x=null,b=z,C=!1}}var g=!1,w=null,_=-1,N=5,h=-1;function j(){return!(e.unstable_now()-h<N)}function S(){if(w!==null){var D=e.unstable_now();h=D;var O=!0;try{O=w(!0,D)}finally{O?P():(g=!1,w=null)}}else g=!1}var P;if(typeof c=="function")P=function(){c(S)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Y=L.port2;L.port1.onmessage=S,P=function(){Y.postMessage(null)}}else P=function(){v(S,0)};function U(D){w=D,g||(g=!0,P())}function fe(D,O){_=v(function(){D(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){M||C||(M=!0,U(k))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(D){switch(b){case 1:case 2:case 3:var O=3;break;default:O=b}var z=b;b=O;try{return D()}finally{b=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=b;b=D;try{return O()}finally{b=z}},e.unstable_scheduleCallback=function(D,O,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,D){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=z+H,D={id:y++,callback:O,priorityLevel:D,startTime:z,expirationTime:H,sortIndex:-1},z>W?(D.sortIndex=z,n(f,D),t(u)===null&&D===t(f)&&(T?(d(_),_=-1):T=!0,fe(m,z-W))):(D.sortIndex=H,n(u,D),M||C||(M=!0,U(k))),D},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(D){var O=b;return function(){var z=b;b=O;try{return D.apply(this,arguments)}finally{b=z}}}})(Yu);$u.exports=Yu;var A0=$u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=B,Me=A0;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,Kt={};function $n(e,n){mt(e,n),mt(e+"Capture",n)}function mt(e,n){for(Kt[e]=n,e=0;e<n.length;e++)Qu.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},$o={};function L0(e){return Hr.call($o,e)?!0:Hr.call(Uo,e)?!1:z0.test(e)?$o[e]=!0:(Uo[e]=!0,!1)}function R0(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F0(e,n,t,i){if(n===null||typeof n>"u"||R0(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,i,a,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ws=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ws,Vs);le[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ws,Vs);le[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ws,Vs);le[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Us(e,n,t,i){var a=le.hasOwnProperty(n)?le[n]:null;(a!==null?a.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(F0(n,t,a,i)&&(t=null),i||a===null?L0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,i=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var cn=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),$s=Symbol.for("react.strict_mode"),Wr=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Xu=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Vr=Symbol.for("react.suspense"),Ur=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Gu=Symbol.for("react.offscreen"),Yo=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=Yo&&e[Yo]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,er;function At(e){if(er===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);er=n&&n[1]||""}return`
`+er+e}var nr=!1;function tr(e,n){if(!e||nr)return"";nr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var i=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){i=f}e.call(n.prototype)}else{try{throw Error()}catch(f){i=f}e()}}catch(f){if(f&&i&&typeof f.stack=="string"){for(var a=f.stack.split(`
`),r=i.stack.split(`
`),o=a.length-1,l=r.length-1;1<=o&&0<=l&&a[o]!==r[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==r[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==r[l]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{nr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?At(e):""}function H0(e){switch(e.tag){case 5:return At(e.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 2:case 15:return e=tr(e.type,!1),e;case 11:return e=tr(e.type.render,!1),e;case 1:return e=tr(e.type,!0),e;default:return""}}function $r(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Xn:return"Portal";case Wr:return"Profiler";case $s:return"StrictMode";case Vr:return"Suspense";case Ur:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xu:return(e.displayName||"Context")+".Consumer";case Ku:return(e._context.displayName||"Context")+".Provider";case Ys:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return n=e.displayName||null,n!==null?n:$r(e.type)||"Memo";case pn:n=e._payload,e=e._init;try{return $r(e(n))}catch{}}return null}function W0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $r(n);case 8:return n===$s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function V0(e){var n=Ju(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){i=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bi(e){e._valueTracker||(e._valueTracker=V0(e))}function Zu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Ju(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yr(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qo(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=Sn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ec(e,n){n=n.checked,n!=null&&Us(e,"checked",n,!1)}function qr(e,n){ec(e,n);var t=Sn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qr(e,n.type,t):n.hasOwnProperty("defaultValue")&&Qr(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Qo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qr(e,n,t){(n!=="number"||na(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var zt=Array.isArray;function lt(e,n,t,i){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&i&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Kr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ko(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(zt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Sn(t)}}function nc(e,n){var t=Sn(n.value),i=Sn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Xo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?tc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,ic=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Xt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(Ft).forEach(function(e){U0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ft[n]=Ft[e]})});function ac(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ft.hasOwnProperty(e)&&Ft[e]?(""+n).trim():n+"px"}function rc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,a=ac(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,a):e[t]=a}}var $0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gr(e,n){if(n){if($0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Jr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,ut=null,ct=null;function Go(e){if(e=mi(e)){if(typeof es!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Ba(n),es(e.stateNode,e.type,n))}}function sc(e){ut?ct?ct.push(e):ct=[e]:ut=e}function oc(){if(ut){var e=ut,n=ct;if(ct=ut=null,Go(e),n)for(e=0;e<n.length;e++)Go(n[e])}}function lc(e,n){return e(n)}function uc(){}var ir=!1;function cc(e,n,t){if(ir)return e(n,t);ir=!0;try{return lc(e,n,t)}finally{ir=!1,(ut!==null||ct!==null)&&(uc(),oc())}}function Gt(e,n){var t=e.stateNode;if(t===null)return null;var i=Ba(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var ns=!1;if(sn)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{ns=!1}function Y0(e,n,t,i,a,r,o,l,u){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(y){this.onError(y)}}var Ht=!1,ta=null,ia=!1,ts=null,q0={onError:function(e){Ht=!0,ta=e}};function Q0(e,n,t,i,a,r,o,l,u){Ht=!1,ta=null,Y0.apply(q0,arguments)}function K0(e,n,t,i,a,r,o,l,u){if(Q0.apply(this,arguments),Ht){if(Ht){var f=ta;Ht=!1,ta=null}else throw Error(E(198));ia||(ia=!0,ts=f)}}function Yn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function dc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Jo(e){if(Yn(e)!==e)throw Error(E(188))}function X0(e){var n=e.alternate;if(!n){if(n=Yn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,i=n;;){var a=t.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){t=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===t)return Jo(a),e;if(r===i)return Jo(a),n;r=r.sibling}throw Error(E(188))}if(t.return!==i.return)t=a,i=r;else{for(var o=!1,l=a.child;l;){if(l===t){o=!0,t=a,i=r;break}if(l===i){o=!0,i=a,t=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===t){o=!0,t=r,i=a;break}if(l===i){o=!0,i=r,t=a;break}l=l.sibling}if(!o)throw Error(E(189))}}if(t.alternate!==i)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function hc(e){return e=X0(e),e!==null?pc(e):null}function pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=pc(e);if(n!==null)return n;e=e.sibling}return null}var fc=Me.unstable_scheduleCallback,Zo=Me.unstable_cancelCallback,G0=Me.unstable_shouldYield,J0=Me.unstable_requestPaint,ee=Me.unstable_now,Z0=Me.unstable_getCurrentPriorityLevel,Ks=Me.unstable_ImmediatePriority,mc=Me.unstable_UserBlockingPriority,aa=Me.unstable_NormalPriority,eh=Me.unstable_LowPriority,gc=Me.unstable_IdlePriority,Ea=null,Xe=null;function nh(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:ah,th=Math.log,ih=Math.LN2;function ah(e){return e>>>=0,e===0?32:31-(th(e)/ih|0)|0}var wi=64,ki=4194304;function Lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ra(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,a=e.suspendedLanes,r=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~a;l!==0?i=Lt(l):(r&=o,r!==0&&(i=Lt(r)))}else o=t&~a,o!==0?i=Lt(o):r!==0&&(i=Lt(r));if(i===0)return 0;if(n!==0&&n!==i&&!(n&a)&&(a=i&-i,r=n&-n,a>=r||a===16&&(r&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Ue(n),a=1<<t,i|=e[t],n&=~a;return i}function rh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sh(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-Ue(r),l=1<<o,u=a[o];u===-1?(!(l&t)||l&i)&&(a[o]=rh(l,n)):u<=n&&(e.expiredLanes|=l),r&=~l}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xc(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function ar(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function pi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function oh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Ue(t),r=1<<a;n[a]=0,i[a]=-1,e[a]=-1,t&=~r}}function Xs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Ue(t),a=1<<i;a&n|e[i]&n&&(e[i]|=n),t&=~a}}var V=0;function vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yc,Gs,bc,_c,wc,as=!1,Ni=[],bn=null,_n=null,wn=null,Jt=new Map,Zt=new Map,mn=[],lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function el(e,n){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zt.delete(n.pointerId)}}function Tt(e,n,t,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},n!==null&&(n=mi(n),n!==null&&Gs(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function uh(e,n,t,i,a){switch(n){case"focusin":return bn=Tt(bn,e,n,t,i,a),!0;case"dragenter":return _n=Tt(_n,e,n,t,i,a),!0;case"mouseover":return wn=Tt(wn,e,n,t,i,a),!0;case"pointerover":var r=a.pointerId;return Jt.set(r,Tt(Jt.get(r)||null,e,n,t,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Zt.set(r,Tt(Zt.get(r)||null,e,n,t,i,a)),!0}return!1}function kc(e){var n=Pn(e.target);if(n!==null){var t=Yn(n);if(t!==null){if(n=t.tag,n===13){if(n=dc(t),n!==null){e.blockedOn=n,wc(e.priority,function(){bc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=rs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Zr=i,t.target.dispatchEvent(i),Zr=null}else return n=mi(t),n!==null&&Gs(n),e.blockedOn=t,!1;n.shift()}return!0}function nl(e,n,t){Ui(e)&&t.delete(n)}function ch(){as=!1,bn!==null&&Ui(bn)&&(bn=null),_n!==null&&Ui(_n)&&(_n=null),wn!==null&&Ui(wn)&&(wn=null),Jt.forEach(nl),Zt.forEach(nl)}function St(e,n){e.blockedOn===n&&(e.blockedOn=null,as||(as=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,ch)))}function ei(e){function n(a){return St(a,e)}if(0<Ni.length){St(Ni[0],e);for(var t=1;t<Ni.length;t++){var i=Ni[t];i.blockedOn===e&&(i.blockedOn=null)}}for(bn!==null&&St(bn,e),_n!==null&&St(_n,e),wn!==null&&St(wn,e),Jt.forEach(n),Zt.forEach(n),t=0;t<mn.length;t++)i=mn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)kc(t),t.blockedOn===null&&mn.shift()}var dt=cn.ReactCurrentBatchConfig,sa=!0;function dh(e,n,t,i){var a=V,r=dt.transition;dt.transition=null;try{V=1,Js(e,n,t,i)}finally{V=a,dt.transition=r}}function hh(e,n,t,i){var a=V,r=dt.transition;dt.transition=null;try{V=4,Js(e,n,t,i)}finally{V=a,dt.transition=r}}function Js(e,n,t,i){if(sa){var a=rs(e,n,t,i);if(a===null)fr(e,n,i,oa,t),el(e,i);else if(uh(a,e,n,t,i))i.stopPropagation();else if(el(e,i),n&4&&-1<lh.indexOf(e)){for(;a!==null;){var r=mi(a);if(r!==null&&yc(r),r=rs(e,n,t,i),r===null&&fr(e,n,i,oa,t),r===a)break;a=r}a!==null&&i.stopPropagation()}else fr(e,n,i,null,t)}}var oa=null;function rs(e,n,t,i){if(oa=null,e=Qs(i),e=Pn(e),e!==null)if(n=Yn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=dc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oa=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z0()){case Ks:return 1;case mc:return 4;case aa:case eh:return 16;case gc:return 536870912;default:return 16}default:return 16}}var xn=null,Zs=null,$i=null;function jc(){if($i)return $i;var e,n=Zs,t=n.length,i,a="value"in xn?xn.value:xn.textContent,r=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(i=1;i<=o&&n[t-i]===a[r-i];i++);return $i=a.slice(e,1<i?1-i:void 0)}function Yi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function tl(){return!1}function De(e){function n(t,i,a,r,o){this._reactName=t,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ji:tl,this.isPropagationStopped=tl,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),n}var kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=De(kt),fi=J({},kt,{view:0,detail:0}),ph=De(fi),rr,sr,Mt,Da=J({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mt&&(Mt&&e.type==="mousemove"?(rr=e.screenX-Mt.screenX,sr=e.screenY-Mt.screenY):sr=rr=0,Mt=e),rr)},movementY:function(e){return"movementY"in e?e.movementY:sr}}),il=De(Da),fh=J({},Da,{dataTransfer:0}),mh=De(fh),gh=J({},fi,{relatedTarget:0}),or=De(gh),xh=J({},kt,{animationName:0,elapsedTime:0,pseudoElement:0}),vh=De(xh),yh=J({},kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bh=De(yh),_h=J({},kt,{data:0}),al=De(_h),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nh[e])?!!n[e]:!1}function no(){return jh}var Ch=J({},fi,{key:function(e){if(e.key){var n=wh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Th=De(Ch),Sh=J({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rl=De(Sh),Mh=J({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),Eh=De(Mh),Dh=J({},kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ih=De(Dh),Oh=J({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bh=De(Oh),Ph=[9,13,27,32],to=sn&&"CompositionEvent"in window,Wt=null;sn&&"documentMode"in document&&(Wt=document.documentMode);var Ah=sn&&"TextEvent"in window&&!Wt,Cc=sn&&(!to||Wt&&8<Wt&&11>=Wt),sl=" ",ol=!1;function Tc(e,n){switch(e){case"keyup":return Ph.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function zh(e,n){switch(e){case"compositionend":return Sc(n);case"keypress":return n.which!==32?null:(ol=!0,sl);case"textInput":return e=n.data,e===sl&&ol?null:e;default:return null}}function Lh(e,n){if(Jn)return e==="compositionend"||!to&&Tc(e,n)?(e=jc(),$i=Zs=xn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cc&&n.locale!=="ko"?null:n.data;default:return null}}var Rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rh[e.type]:n==="textarea"}function Mc(e,n,t,i){sc(i),n=la(n,"onChange"),0<n.length&&(t=new eo("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Vt=null,ni=null;function Fh(e){Fc(e,0)}function Ia(e){var n=nt(e);if(Zu(n))return e}function Hh(e,n){if(e==="change")return n}var Ec=!1;if(sn){var lr;if(sn){var ur="oninput"in document;if(!ur){var ul=document.createElement("div");ul.setAttribute("oninput","return;"),ur=typeof ul.oninput=="function"}lr=ur}else lr=!1;Ec=lr&&(!document.documentMode||9<document.documentMode)}function cl(){Vt&&(Vt.detachEvent("onpropertychange",Dc),ni=Vt=null)}function Dc(e){if(e.propertyName==="value"&&Ia(ni)){var n=[];Mc(n,ni,e,Qs(e)),cc(Fh,n)}}function Wh(e,n,t){e==="focusin"?(cl(),Vt=n,ni=t,Vt.attachEvent("onpropertychange",Dc)):e==="focusout"&&cl()}function Vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ia(ni)}function Uh(e,n){if(e==="click")return Ia(n)}function $h(e,n){if(e==="input"||e==="change")return Ia(n)}function Yh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:Yh;function ti(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var a=t[i];if(!Hr.call(n,a)||!Ye(e[a],n[a]))return!1}return!0}function dl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hl(e,n){var t=dl(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dl(t)}}function Ic(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ic(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Oc(){for(var e=window,n=na();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=na(e.document)}return n}function io(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function qh(e){var n=Oc(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ic(t.ownerDocument.documentElement,t)){if(i!==null&&io(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,r=Math.min(i.start,a);i=i.end===void 0?r:Math.min(i.end,a),!e.extend&&r>i&&(a=i,i=r,r=a),a=hl(t,r);var o=hl(t,i);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),r>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qh=sn&&"documentMode"in document&&11>=document.documentMode,Zn=null,ss=null,Ut=null,os=!1;function pl(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;os||Zn==null||Zn!==na(i)||(i=Zn,"selectionStart"in i&&io(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ut&&ti(Ut,i)||(Ut=i,i=la(ss,"onSelect"),0<i.length&&(n=new eo("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Zn)))}function Ci(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var et={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},cr={},Bc={};sn&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete et.animationend.animation,delete et.animationiteration.animation,delete et.animationstart.animation),"TransitionEvent"in window||delete et.transitionend.transition);function Oa(e){if(cr[e])return cr[e];if(!et[e])return e;var n=et[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Bc)return cr[e]=n[t];return e}var Pc=Oa("animationend"),Ac=Oa("animationiteration"),zc=Oa("animationstart"),Lc=Oa("transitionend"),Rc=new Map,fl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,n){Rc.set(e,n),$n(n,[e])}for(var dr=0;dr<fl.length;dr++){var hr=fl[dr],Kh=hr.toLowerCase(),Xh=hr[0].toUpperCase()+hr.slice(1);En(Kh,"on"+Xh)}En(Pc,"onAnimationEnd");En(Ac,"onAnimationIteration");En(zc,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Lc,"onTransitionEnd");mt("onMouseEnter",["mouseout","mouseover"]);mt("onMouseLeave",["mouseout","mouseover"]);mt("onPointerEnter",["pointerout","pointerover"]);mt("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function ml(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,K0(i,n,void 0,e),e.currentTarget=null}function Fc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],a=i.event;i=i.listeners;e:{var r=void 0;if(n)for(var o=i.length-1;0<=o;o--){var l=i[o],u=l.instance,f=l.currentTarget;if(l=l.listener,u!==r&&a.isPropagationStopped())break e;ml(a,l,f),r=u}else for(o=0;o<i.length;o++){if(l=i[o],u=l.instance,f=l.currentTarget,l=l.listener,u!==r&&a.isPropagationStopped())break e;ml(a,l,f),r=u}}}if(ia)throw e=ts,ia=!1,ts=null,e}function q(e,n){var t=n[hs];t===void 0&&(t=n[hs]=new Set);var i=e+"__bubble";t.has(i)||(Hc(n,e,2,!1),t.add(i))}function pr(e,n,t){var i=0;n&&(i|=4),Hc(t,e,i,n)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Ti]){e[Ti]=!0,Qu.forEach(function(t){t!=="selectionchange"&&(Gh.has(t)||pr(t,!1,e),pr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ti]||(n[Ti]=!0,pr("selectionchange",!1,n))}}function Hc(e,n,t,i){switch(Nc(n)){case 1:var a=dh;break;case 4:a=hh;break;default:a=Js}t=a.bind(null,n,t,e),a=void 0,!ns||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function fr(e,n,t,i,a){var r=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=i.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(u=o.tag,u===5||u===6){i=r=o;continue e}l=l.parentNode}}i=i.return}cc(function(){var f=r,y=Qs(t),x=[];e:{var b=Rc.get(e);if(b!==void 0){var C=eo,M=e;switch(e){case"keypress":if(Yi(t)===0)break e;case"keydown":case"keyup":C=Th;break;case"focusin":M="focus",C=or;break;case"focusout":M="blur",C=or;break;case"beforeblur":case"afterblur":C=or;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Eh;break;case Pc:case Ac:case zc:C=vh;break;case Lc:C=Ih;break;case"scroll":C=ph;break;case"wheel":C=Bh;break;case"copy":case"cut":case"paste":C=bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=rl}var T=(n&4)!==0,v=!T&&e==="scroll",d=T?b!==null?b+"Capture":null:b;T=[];for(var c=f,p;c!==null;){p=c;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,d!==null&&(m=Gt(c,d),m!=null&&T.push(ai(c,m,p)))),v)break;c=c.return}0<T.length&&(b=new C(b,M,null,t,y),x.push({event:b,listeners:T}))}}if(!(n&7)){e:{if(b=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",b&&t!==Zr&&(M=t.relatedTarget||t.fromElement)&&(Pn(M)||M[on]))break e;if((C||b)&&(b=y.window===y?y:(b=y.ownerDocument)?b.defaultView||b.parentWindow:window,C?(M=t.relatedTarget||t.toElement,C=f,M=M?Pn(M):null,M!==null&&(v=Yn(M),M!==v||M.tag!==5&&M.tag!==6)&&(M=null)):(C=null,M=f),C!==M)){if(T=il,m="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(T=rl,m="onPointerLeave",d="onPointerEnter",c="pointer"),v=C==null?b:nt(C),p=M==null?b:nt(M),b=new T(m,c+"leave",C,t,y),b.target=v,b.relatedTarget=p,m=null,Pn(y)===f&&(T=new T(d,c+"enter",M,t,y),T.target=p,T.relatedTarget=v,m=T),v=m,C&&M)n:{for(T=C,d=M,c=0,p=T;p;p=Qn(p))c++;for(p=0,m=d;m;m=Qn(m))p++;for(;0<c-p;)T=Qn(T),c--;for(;0<p-c;)d=Qn(d),p--;for(;c--;){if(T===d||d!==null&&T===d.alternate)break n;T=Qn(T),d=Qn(d)}T=null}else T=null;C!==null&&gl(x,b,C,T,!1),M!==null&&v!==null&&gl(x,v,M,T,!0)}}e:{if(b=f?nt(f):window,C=b.nodeName&&b.nodeName.toLowerCase(),C==="select"||C==="input"&&b.type==="file")var k=Hh;else if(ll(b))if(Ec)k=$h;else{k=Vh;var g=Wh}else(C=b.nodeName)&&C.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(k=Uh);if(k&&(k=k(e,f))){Mc(x,k,t,y);break e}g&&g(e,b,f),e==="focusout"&&(g=b._wrapperState)&&g.controlled&&b.type==="number"&&Qr(b,"number",b.value)}switch(g=f?nt(f):window,e){case"focusin":(ll(g)||g.contentEditable==="true")&&(Zn=g,ss=f,Ut=null);break;case"focusout":Ut=ss=Zn=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,pl(x,t,y);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":pl(x,t,y)}var w;if(to)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Jn?Tc(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Cc&&t.locale!=="ko"&&(Jn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Jn&&(w=jc()):(xn=y,Zs="value"in xn?xn.value:xn.textContent,Jn=!0)),g=la(f,_),0<g.length&&(_=new al(_,e,null,t,y),x.push({event:_,listeners:g}),w?_.data=w:(w=Sc(t),w!==null&&(_.data=w)))),(w=Ah?zh(e,t):Lh(e,t))&&(f=la(f,"onBeforeInput"),0<f.length&&(y=new al("onBeforeInput","beforeinput",null,t,y),x.push({event:y,listeners:f}),y.data=w))}Fc(x,n)})}function ai(e,n,t){return{instance:e,listener:n,currentTarget:t}}function la(e,n){for(var t=n+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Gt(e,t),r!=null&&i.unshift(ai(e,r,a)),r=Gt(e,n),r!=null&&i.push(ai(e,r,a))),e=e.return}return i}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gl(e,n,t,i,a){for(var r=n._reactName,o=[];t!==null&&t!==i;){var l=t,u=l.alternate,f=l.stateNode;if(u!==null&&u===i)break;l.tag===5&&f!==null&&(l=f,a?(u=Gt(t,r),u!=null&&o.unshift(ai(t,u,l))):a||(u=Gt(t,r),u!=null&&o.push(ai(t,u,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Jh=/\r\n?/g,Zh=/\u0000|\uFFFD/g;function xl(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace(Zh,"")}function Si(e,n,t){if(n=xl(n),xl(e)!==n&&t)throw Error(E(425))}function ua(){}var ls=null,us=null;function cs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ds=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,vl=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof vl<"u"?function(e){return vl.resolve(null).then(e).catch(tp)}:ds;function tp(e){setTimeout(function(){throw e})}function mr(e,n){var t=n,i=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(i===0){e.removeChild(a),ei(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=a}while(t);ei(n)}function kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function yl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Nt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Nt,ri="__reactProps$"+Nt,on="__reactContainer$"+Nt,hs="__reactEvents$"+Nt,ip="__reactListeners$"+Nt,ap="__reactHandles$"+Nt;function Pn(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[on]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=yl(e);e!==null;){if(t=e[Ke])return t;e=yl(e)}return n}e=t,t=e.parentNode}return null}function mi(e){return e=e[Ke]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ba(e){return e[ri]||null}var ps=[],tt=-1;function Dn(e){return{current:e}}function Q(e){0>tt||(e.current=ps[tt],ps[tt]=null,tt--)}function $(e,n){tt++,ps[tt]=e.current,e.current=n}var Mn={},pe=Dn(Mn),_e=Dn(!1),Fn=Mn;function gt(e,n){var t=e.type.contextTypes;if(!t)return Mn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in t)a[r]=n[r];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function we(e){return e=e.childContextTypes,e!=null}function ca(){Q(_e),Q(pe)}function bl(e,n,t){if(pe.current!==Mn)throw Error(E(168));$(pe,n),$(_e,t)}function Wc(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var a in i)if(!(a in n))throw Error(E(108,W0(e)||"Unknown",a));return J({},t,i)}function da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,Fn=pe.current,$(pe,e),$(_e,_e.current),!0}function _l(e,n,t){var i=e.stateNode;if(!i)throw Error(E(169));t?(e=Wc(e,n,Fn),i.__reactInternalMemoizedMergedChildContext=e,Q(_e),Q(pe),$(pe,e)):Q(_e),$(_e,t)}var nn=null,Pa=!1,gr=!1;function Vc(e){nn===null?nn=[e]:nn.push(e)}function rp(e){Pa=!0,Vc(e)}function In(){if(!gr&&nn!==null){gr=!0;var e=0,n=V;try{var t=nn;for(V=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}nn=null,Pa=!1}catch(a){throw nn!==null&&(nn=nn.slice(e+1)),fc(Ks,In),a}finally{V=n,gr=!1}}return null}var it=[],at=0,ha=null,pa=0,Oe=[],Be=0,Hn=null,tn=1,an="";function On(e,n){it[at++]=pa,it[at++]=ha,ha=e,pa=n}function Uc(e,n,t){Oe[Be++]=tn,Oe[Be++]=an,Oe[Be++]=Hn,Hn=e;var i=tn;e=an;var a=32-Ue(i)-1;i&=~(1<<a),t+=1;var r=32-Ue(n)+a;if(30<r){var o=a-a%5;r=(i&(1<<o)-1).toString(32),i>>=o,a-=o,tn=1<<32-Ue(n)+a|t<<a|i,an=r+e}else tn=1<<r|t<<a|i,an=e}function ao(e){e.return!==null&&(On(e,1),Uc(e,1,0))}function ro(e){for(;e===ha;)ha=it[--at],it[at]=null,pa=it[--at],it[at]=null;for(;e===Hn;)Hn=Oe[--Be],Oe[Be]=null,an=Oe[--Be],Oe[Be]=null,tn=Oe[--Be],Oe[Be]=null}var Se=null,Te=null,K=!1,Ve=null;function $c(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function wl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,Te=kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,Te=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Hn!==null?{id:tn,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,Te=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ms(e){if(K){var n=Te;if(n){var t=n;if(!wl(e,n)){if(fs(e))throw Error(E(418));n=kn(t.nextSibling);var i=Se;n&&wl(e,n)?$c(i,t):(e.flags=e.flags&-4097|2,K=!1,Se=e)}}else{if(fs(e))throw Error(E(418));e.flags=e.flags&-4097|2,K=!1,Se=e}}}function kl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Mi(e){if(e!==Se)return!1;if(!K)return kl(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!cs(e.type,e.memoizedProps)),n&&(n=Te)){if(fs(e))throw Yc(),Error(E(418));for(;n;)$c(e,n),n=kn(n.nextSibling)}if(kl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Te=kn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Te=null}}else Te=Se?kn(e.stateNode.nextSibling):null;return!0}function Yc(){for(var e=Te;e;)e=kn(e.nextSibling)}function xt(){Te=Se=null,K=!1}function so(e){Ve===null?Ve=[e]:Ve.push(e)}var sp=cn.ReactCurrentBatchConfig;function He(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var fa=Dn(null),ma=null,rt=null,oo=null;function lo(){oo=rt=ma=null}function uo(e){var n=fa.current;Q(fa),e._currentValue=n}function gs(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function ht(e,n){ma=e,oo=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(be=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:n,next:null},rt===null){if(ma===null)throw Error(E(308));rt=e,ma.dependencies={lanes:0,firstContext:e}}else rt=rt.next=e;return n}var An=null;function co(e){An===null?An=[e]:An.push(e)}function qc(e,n,t,i){var a=n.interleaved;return a===null?(t.next=t,co(n)):(t.next=a.next,a.next=t),n.interleaved=t,ln(e,i)}function ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var fn=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Nn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,F&2){var a=i.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),i.pending=n,ln(e,t)}return a=i.interleaved,a===null?(n.next=n,co(i)):(n.next=a.next,a.next=n),i.interleaved=n,ln(e,t)}function qi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Xs(e,t)}}function Nl(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var a=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?a=r=o:r=r.next=o,t=t.next}while(t!==null);r===null?a=r=n:r=r.next=n}else a=r=n;t={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ga(e,n,t,i){var a=e.updateQueue;fn=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var u=l,f=u.next;u.next=null,o===null?r=f:o.next=f,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==o&&(l===null?y.firstBaseUpdate=f:l.next=f,y.lastBaseUpdate=u))}if(r!==null){var x=a.baseState;o=0,y=f=u=null,l=r;do{var b=l.lane,C=l.eventTime;if((i&b)===b){y!==null&&(y=y.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var M=e,T=l;switch(b=n,C=t,T.tag){case 1:if(M=T.payload,typeof M=="function"){x=M.call(C,x,b);break e}x=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=T.payload,b=typeof M=="function"?M.call(C,x,b):M,b==null)break e;x=J({},x,b);break e;case 2:fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[l]:b.push(l))}else C={eventTime:C,lane:b,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(f=y=C,u=x):y=y.next=C,o|=b;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;b=l,l=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(y===null&&(u=x),a.baseState=u,a.firstBaseUpdate=f,a.lastBaseUpdate=y,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else r===null&&(a.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=x}}function jl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],a=i.callback;if(a!==null){if(i.callback=null,i=t,typeof a!="function")throw Error(E(191,a));a.call(i)}}}var Kc=new qu.Component().refs;function xs(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Aa={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=ge(),a=Cn(e),r=rn(i,a);r.payload=n,t!=null&&(r.callback=t),n=Nn(e,r,a),n!==null&&($e(n,e,a,i),qi(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=ge(),a=Cn(e),r=rn(i,a);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=Nn(e,r,a),n!==null&&($e(n,e,a,i),qi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),i=Cn(e),a=rn(t,i);a.tag=2,n!=null&&(a.callback=n),n=Nn(e,a,i),n!==null&&($e(n,e,i,t),qi(n,e,i))}};function Cl(e,n,t,i,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):n.prototype&&n.prototype.isPureReactComponent?!ti(t,i)||!ti(a,r):!0}function Xc(e,n,t){var i=!1,a=Mn,r=n.contextType;return typeof r=="object"&&r!==null?r=ze(r):(a=we(n)?Fn:pe.current,i=n.contextTypes,r=(i=i!=null)?gt(e,a):Mn),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Aa,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),n}function Tl(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Aa.enqueueReplaceState(n,n.state,null)}function vs(e,n,t,i){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=Kc,ho(e);var r=n.contextType;typeof r=="object"&&r!==null?a.context=ze(r):(r=we(n)?Fn:pe.current,a.context=gt(e,r)),a.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(xs(e,n,r,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Aa.enqueueReplaceState(a,a.state,null),ga(e,t,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var i=t.stateNode}if(!i)throw Error(E(147,e));var a=i,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(o){var l=a.refs;l===Kc&&(l=a.refs={}),o===null?delete l[r]:l[r]=o},n._stringRef=r,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Ei(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Sl(e){var n=e._init;return n(e._payload)}function Gc(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function i(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function a(d,c){return d=Tn(d,c),d.index=0,d.sibling=null,d}function r(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,p,m){return c===null||c.tag!==6?(c=kr(p,d.mode,m),c.return=d,c):(c=a(c,p),c.return=d,c)}function u(d,c,p,m){var k=p.type;return k===Gn?y(d,c,p.props.children,m,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pn&&Sl(k)===c.type)?(m=a(c,p.props),m.ref=Et(d,c,p),m.return=d,m):(m=Zi(p.type,p.key,p.props,null,d.mode,m),m.ref=Et(d,c,p),m.return=d,m)}function f(d,c,p,m){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Nr(p,d.mode,m),c.return=d,c):(c=a(c,p.children||[]),c.return=d,c)}function y(d,c,p,m,k){return c===null||c.tag!==7?(c=Rn(p,d.mode,m,k),c.return=d,c):(c=a(c,p),c.return=d,c)}function x(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=kr(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yi:return p=Zi(c.type,c.key,c.props,null,d.mode,p),p.ref=Et(d,null,c),p.return=d,p;case Xn:return c=Nr(c,d.mode,p),c.return=d,c;case pn:var m=c._init;return x(d,m(c._payload),p)}if(zt(c)||jt(c))return c=Rn(c,d.mode,p,null),c.return=d,c;Ei(d,c)}return null}function b(d,c,p,m){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(d,c,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yi:return p.key===k?u(d,c,p,m):null;case Xn:return p.key===k?f(d,c,p,m):null;case pn:return k=p._init,b(d,c,k(p._payload),m)}if(zt(p)||jt(p))return k!==null?null:y(d,c,p,m,null);Ei(d,p)}return null}function C(d,c,p,m,k){if(typeof m=="string"&&m!==""||typeof m=="number")return d=d.get(p)||null,l(c,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yi:return d=d.get(m.key===null?p:m.key)||null,u(c,d,m,k);case Xn:return d=d.get(m.key===null?p:m.key)||null,f(c,d,m,k);case pn:var g=m._init;return C(d,c,p,g(m._payload),k)}if(zt(m)||jt(m))return d=d.get(p)||null,y(c,d,m,k,null);Ei(c,m)}return null}function M(d,c,p,m){for(var k=null,g=null,w=c,_=c=0,N=null;w!==null&&_<p.length;_++){w.index>_?(N=w,w=null):N=w.sibling;var h=b(d,w,p[_],m);if(h===null){w===null&&(w=N);break}e&&w&&h.alternate===null&&n(d,w),c=r(h,c,_),g===null?k=h:g.sibling=h,g=h,w=N}if(_===p.length)return t(d,w),K&&On(d,_),k;if(w===null){for(;_<p.length;_++)w=x(d,p[_],m),w!==null&&(c=r(w,c,_),g===null?k=w:g.sibling=w,g=w);return K&&On(d,_),k}for(w=i(d,w);_<p.length;_++)N=C(w,d,_,p[_],m),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?_:N.key),c=r(N,c,_),g===null?k=N:g.sibling=N,g=N);return e&&w.forEach(function(j){return n(d,j)}),K&&On(d,_),k}function T(d,c,p,m){var k=jt(p);if(typeof k!="function")throw Error(E(150));if(p=k.call(p),p==null)throw Error(E(151));for(var g=k=null,w=c,_=c=0,N=null,h=p.next();w!==null&&!h.done;_++,h=p.next()){w.index>_?(N=w,w=null):N=w.sibling;var j=b(d,w,h.value,m);if(j===null){w===null&&(w=N);break}e&&w&&j.alternate===null&&n(d,w),c=r(j,c,_),g===null?k=j:g.sibling=j,g=j,w=N}if(h.done)return t(d,w),K&&On(d,_),k;if(w===null){for(;!h.done;_++,h=p.next())h=x(d,h.value,m),h!==null&&(c=r(h,c,_),g===null?k=h:g.sibling=h,g=h);return K&&On(d,_),k}for(w=i(d,w);!h.done;_++,h=p.next())h=C(w,d,_,h.value,m),h!==null&&(e&&h.alternate!==null&&w.delete(h.key===null?_:h.key),c=r(h,c,_),g===null?k=h:g.sibling=h,g=h);return e&&w.forEach(function(S){return n(d,S)}),K&&On(d,_),k}function v(d,c,p,m){if(typeof p=="object"&&p!==null&&p.type===Gn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yi:e:{for(var k=p.key,g=c;g!==null;){if(g.key===k){if(k=p.type,k===Gn){if(g.tag===7){t(d,g.sibling),c=a(g,p.props.children),c.return=d,d=c;break e}}else if(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pn&&Sl(k)===g.type){t(d,g.sibling),c=a(g,p.props),c.ref=Et(d,g,p),c.return=d,d=c;break e}t(d,g);break}else n(d,g);g=g.sibling}p.type===Gn?(c=Rn(p.props.children,d.mode,m,p.key),c.return=d,d=c):(m=Zi(p.type,p.key,p.props,null,d.mode,m),m.ref=Et(d,c,p),m.return=d,d=m)}return o(d);case Xn:e:{for(g=p.key;c!==null;){if(c.key===g)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=a(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Nr(p,d.mode,m),c.return=d,d=c}return o(d);case pn:return g=p._init,v(d,c,g(p._payload),m)}if(zt(p))return M(d,c,p,m);if(jt(p))return T(d,c,p,m);Ei(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=a(c,p),c.return=d,d=c):(t(d,c),c=kr(p,d.mode,m),c.return=d,d=c),o(d)):t(d,c)}return v}var vt=Gc(!0),Jc=Gc(!1),gi={},Ge=Dn(gi),si=Dn(gi),oi=Dn(gi);function zn(e){if(e===gi)throw Error(E(174));return e}function po(e,n){switch($(oi,n),$(si,e),$(Ge,gi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Xr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Xr(n,e)}Q(Ge),$(Ge,n)}function yt(){Q(Ge),Q(si),Q(oi)}function Zc(e){zn(oi.current);var n=zn(Ge.current),t=Xr(n,e.type);n!==t&&($(si,e),$(Ge,t))}function fo(e){si.current===e&&(Q(Ge),Q(si))}var X=Dn(0);function xa(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xr=[];function mo(){for(var e=0;e<xr.length;e++)xr[e]._workInProgressVersionPrimary=null;xr.length=0}var Qi=cn.ReactCurrentDispatcher,vr=cn.ReactCurrentBatchConfig,Wn=0,G=null,te=null,ae=null,va=!1,$t=!1,li=0,op=0;function ce(){throw Error(E(321))}function go(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function xo(e,n,t,i,a,r){if(Wn=r,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Qi.current=e===null||e.memoizedState===null?dp:hp,e=t(i,a),$t){r=0;do{if($t=!1,li=0,25<=r)throw Error(E(301));r+=1,ae=te=null,n.updateQueue=null,Qi.current=pp,e=t(i,a)}while($t)}if(Qi.current=ya,n=te!==null&&te.next!==null,Wn=0,ae=te=G=null,va=!1,n)throw Error(E(300));return e}function vo(){var e=li!==0;return li=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?G.memoizedState=ae=e:ae=ae.next=e,ae}function Le(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=ae===null?G.memoizedState:ae.next;if(n!==null)ae=n,te=e;else{if(e===null)throw Error(E(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?G.memoizedState=ae=e:ae=ae.next=e}return ae}function ui(e,n){return typeof n=="function"?n(e):n}function yr(e){var n=Le(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var i=te,a=i.baseQueue,r=t.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}i.baseQueue=a=r,t.pending=null}if(a!==null){r=a.next,i=i.baseState;var l=o=null,u=null,f=r;do{var y=f.lane;if((Wn&y)===y)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),i=f.hasEagerState?f.eagerState:e(i,f.action);else{var x={lane:y,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(l=u=x,o=i):u=u.next=x,G.lanes|=y,Vn|=y}f=f.next}while(f!==null&&f!==r);u===null?o=i:u.next=l,Ye(i,n.memoizedState)||(be=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=u,t.lastRenderedState=i}if(e=t.interleaved,e!==null){a=e;do r=a.lane,G.lanes|=r,Vn|=r,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function br(e){var n=Le(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var i=t.dispatch,a=t.pending,r=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);Ye(r,n.memoizedState)||(be=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,i]}function ed(){}function nd(e,n){var t=G,i=Le(),a=n(),r=!Ye(i.memoizedState,a);if(r&&(i.memoizedState=a,be=!0),i=i.queue,yo(ad.bind(null,t,i,e),[e]),i.getSnapshot!==n||r||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,ci(9,id.bind(null,t,i,a,n),void 0,null),re===null)throw Error(E(349));Wn&30||td(t,n,a)}return a}function td(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function id(e,n,t,i){n.value=t,n.getSnapshot=i,rd(n)&&sd(e)}function ad(e,n,t){return t(function(){rd(n)&&sd(e)})}function rd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function sd(e){var n=ln(e,1);n!==null&&$e(n,e,1,-1)}function Ml(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},n.queue=e,e=e.dispatch=cp.bind(null,G,e),[n.memoizedState,e]}function ci(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function od(){return Le().memoizedState}function Ki(e,n,t,i){var a=Qe();G.flags|=e,a.memoizedState=ci(1|n,t,void 0,i===void 0?null:i)}function za(e,n,t,i){var a=Le();i=i===void 0?null:i;var r=void 0;if(te!==null){var o=te.memoizedState;if(r=o.destroy,i!==null&&go(i,o.deps)){a.memoizedState=ci(n,t,r,i);return}}G.flags|=e,a.memoizedState=ci(1|n,t,r,i)}function El(e,n){return Ki(8390656,8,e,n)}function yo(e,n){return za(2048,8,e,n)}function ld(e,n){return za(4,2,e,n)}function ud(e,n){return za(4,4,e,n)}function cd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dd(e,n,t){return t=t!=null?t.concat([e]):null,za(4,4,cd.bind(null,n,e),t)}function bo(){}function hd(e,n){var t=Le();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&go(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function pd(e,n){var t=Le();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&go(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function fd(e,n,t){return Wn&21?(Ye(t,n)||(t=xc(),G.lanes|=t,Vn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=t)}function lp(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var i=vr.transition;vr.transition={};try{e(!1),n()}finally{V=t,vr.transition=i}}function md(){return Le().memoizedState}function up(e,n,t){var i=Cn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},gd(e))xd(n,t);else if(t=qc(e,n,t,i),t!==null){var a=ge();$e(t,e,i,a),vd(t,n,i)}}function cp(e,n,t){var i=Cn(e),a={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(gd(e))xd(n,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,l=r(o,t);if(a.hasEagerState=!0,a.eagerState=l,Ye(l,o)){var u=n.interleaved;u===null?(a.next=a,co(n)):(a.next=u.next,u.next=a),n.interleaved=a;return}}catch{}finally{}t=qc(e,n,a,i),t!==null&&(a=ge(),$e(t,e,i,a),vd(t,n,i))}}function gd(e){var n=e.alternate;return e===G||n!==null&&n===G}function xd(e,n){$t=va=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function vd(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Xs(e,t)}}var ya={readContext:ze,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},dp={readContext:ze,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:El,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ki(4194308,4,cd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ki(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ki(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=Qe();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=up.bind(null,G,e),[i.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Ml,useDebugValue:bo,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Ml(!1),n=e[0];return e=lp.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=G,a=Qe();if(K){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),re===null)throw Error(E(349));Wn&30||td(i,n,t)}a.memoizedState=t;var r={value:t,getSnapshot:n};return a.queue=r,El(ad.bind(null,i,r,e),[e]),i.flags|=2048,ci(9,id.bind(null,i,r,t,n),void 0,null),t},useId:function(){var e=Qe(),n=re.identifierPrefix;if(K){var t=an,i=tn;t=(i&~(1<<32-Ue(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=li++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=op++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},hp={readContext:ze,useCallback:hd,useContext:ze,useEffect:yo,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:ud,useMemo:pd,useReducer:yr,useRef:od,useState:function(){return yr(ui)},useDebugValue:bo,useDeferredValue:function(e){var n=Le();return fd(n,te.memoizedState,e)},useTransition:function(){var e=yr(ui)[0],n=Le().memoizedState;return[e,n]},useMutableSource:ed,useSyncExternalStore:nd,useId:md,unstable_isNewReconciler:!1},pp={readContext:ze,useCallback:hd,useContext:ze,useEffect:yo,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:ud,useMemo:pd,useReducer:br,useRef:od,useState:function(){return br(ui)},useDebugValue:bo,useDeferredValue:function(e){var n=Le();return te===null?n.memoizedState=e:fd(n,te.memoizedState,e)},useTransition:function(){var e=br(ui)[0],n=Le().memoizedState;return[e,n]},useMutableSource:ed,useSyncExternalStore:nd,useId:md,unstable_isNewReconciler:!1};function bt(e,n){try{var t="",i=n;do t+=H0(i),i=i.return;while(i);var a=t}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:a,digest:null}}function _r(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ys(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function yd(e,n,t){t=rn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){_a||(_a=!0,Ms=i),ys(e,n)},t}function bd(e,n,t){t=rn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=n.value;t.payload=function(){return i(a)},t.callback=function(){ys(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){ys(e,n),typeof i!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Dl(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new fp;var a=new Set;i.set(n,a)}else a=i.get(n),a===void 0&&(a=new Set,i.set(n,a));a.has(t)||(a.add(t),e=Sp.bind(null,e,n,t),n.then(e,e))}function Il(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ol(e,n,t,i,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=rn(-1,1),n.tag=2,Nn(t,n,1))),t.lanes|=1),e)}var mp=cn.ReactCurrentOwner,be=!1;function me(e,n,t,i){n.child=e===null?Jc(n,null,t,i):vt(n,e.child,t,i)}function Bl(e,n,t,i,a){t=t.render;var r=n.ref;return ht(n,a),i=xo(e,n,t,i,r,a),t=vo(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,un(e,n,a)):(K&&t&&ao(n),n.flags|=1,me(e,n,i,a),n.child)}function Pl(e,n,t,i,a){if(e===null){var r=t.type;return typeof r=="function"&&!So(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,_d(e,n,r,i,a)):(e=Zi(t.type,null,i,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&a)){var o=r.memoizedProps;if(t=t.compare,t=t!==null?t:ti,t(o,i)&&e.ref===n.ref)return un(e,n,a)}return n.flags|=1,e=Tn(r,i),e.ref=n.ref,e.return=n,n.child=e}function _d(e,n,t,i,a){if(e!==null){var r=e.memoizedProps;if(ti(r,i)&&e.ref===n.ref)if(be=!1,n.pendingProps=i=r,(e.lanes&a)!==0)e.flags&131072&&(be=!0);else return n.lanes=e.lanes,un(e,n,a)}return bs(e,n,t,i,a)}function wd(e,n,t){var i=n.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(ot,je),je|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(ot,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:t,$(ot,je),je|=i}else r!==null?(i=r.baseLanes|t,n.memoizedState=null):i=t,$(ot,je),je|=i;return me(e,n,a,t),n.child}function kd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bs(e,n,t,i,a){var r=we(t)?Fn:pe.current;return r=gt(n,r),ht(n,a),t=xo(e,n,t,i,r,a),i=vo(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,un(e,n,a)):(K&&i&&ao(n),n.flags|=1,me(e,n,t,a),n.child)}function Al(e,n,t,i,a){if(we(t)){var r=!0;da(n)}else r=!1;if(ht(n,a),n.stateNode===null)Xi(e,n),Xc(n,t,i),vs(n,t,i,a),i=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var u=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=ze(f):(f=we(t)?Fn:pe.current,f=gt(n,f));var y=t.getDerivedStateFromProps,x=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||u!==f)&&Tl(n,o,i,f),fn=!1;var b=n.memoizedState;o.state=b,ga(n,i,o,a),u=n.memoizedState,l!==i||b!==u||_e.current||fn?(typeof y=="function"&&(xs(n,t,y,i),u=n.memoizedState),(l=fn||Cl(n,t,l,i,b,u,f))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=u),o.props=i,o.state=u,o.context=f,i=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,Qc(e,n),l=n.memoizedProps,f=n.type===n.elementType?l:He(n.type,l),o.props=f,x=n.pendingProps,b=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=we(t)?Fn:pe.current,u=gt(n,u));var C=t.getDerivedStateFromProps;(y=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==x||b!==u)&&Tl(n,o,i,u),fn=!1,b=n.memoizedState,o.state=b,ga(n,i,o,a);var M=n.memoizedState;l!==x||b!==M||_e.current||fn?(typeof C=="function"&&(xs(n,t,C,i),M=n.memoizedState),(f=fn||Cl(n,t,f,i,b,M,u)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,M,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,M,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=M),o.props=i,o.state=M,o.context=u,i=f):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(n.flags|=1024),i=!1)}return _s(e,n,t,i,r,a)}function _s(e,n,t,i,a,r){kd(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return a&&_l(n,t,!1),un(e,n,r);i=n.stateNode,mp.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=vt(n,e.child,null,r),n.child=vt(n,null,l,r)):me(e,n,l,r),n.memoizedState=i.state,a&&_l(n,t,!0),n.child}function Nd(e){var n=e.stateNode;n.pendingContext?bl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&bl(e,n.context,!1),po(e,n.containerInfo)}function zl(e,n,t,i,a){return xt(),so(a),n.flags|=256,me(e,n,t,i),n.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function jd(e,n,t){var i=n.pendingProps,a=X.current,r=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),$(X,a&1),e===null)return ms(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,r?(i=n.mode,r=n.child,o={mode:"hidden",children:o},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Fa(o,i,0,null),e=Rn(e,i,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=ks(t),n.memoizedState=ws,e):_o(n,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return gp(e,n,o,i,l,a,t);if(r){r=i.fallback,o=n.mode,a=e.child,l=a.sibling;var u={mode:"hidden",children:i.children};return!(o&1)&&n.child!==a?(i=n.child,i.childLanes=0,i.pendingProps=u,n.deletions=null):(i=Tn(a,u),i.subtreeFlags=a.subtreeFlags&14680064),l!==null?r=Tn(l,r):(r=Rn(r,o,t,null),r.flags|=2),r.return=n,i.return=n,i.sibling=r,n.child=i,i=r,r=n.child,o=e.child.memoizedState,o=o===null?ks(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~t,n.memoizedState=ws,i}return r=e.child,e=r.sibling,i=Tn(r,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function _o(e,n){return n=Fa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Di(e,n,t,i){return i!==null&&so(i),vt(n,e.child,null,t),e=_o(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gp(e,n,t,i,a,r,o){if(t)return n.flags&256?(n.flags&=-257,i=_r(Error(E(422))),Di(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=i.fallback,a=n.mode,i=Fa({mode:"visible",children:i.children},a,0,null),r=Rn(r,a,o,null),r.flags|=2,i.return=n,r.return=n,i.sibling=r,n.child=i,n.mode&1&&vt(n,e.child,null,o),n.child.memoizedState=ks(o),n.memoizedState=ws,r);if(!(n.mode&1))return Di(e,n,o,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,r=Error(E(419)),i=_r(r,i,void 0),Di(e,n,o,i)}if(l=(o&e.childLanes)!==0,be||l){if(i=re,i!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|o)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,ln(e,a),$e(i,e,a,-1))}return To(),i=_r(Error(E(421))),Di(e,n,o,i)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Mp.bind(null,e),a._reactRetry=n,null):(e=r.treeContext,Te=kn(a.nextSibling),Se=n,K=!0,Ve=null,e!==null&&(Oe[Be++]=tn,Oe[Be++]=an,Oe[Be++]=Hn,tn=e.id,an=e.overflow,Hn=n),n=_o(n,i.children),n.flags|=4096,n)}function Ll(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),gs(e.return,n,t)}function wr(e,n,t,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:a}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=t,r.tailMode=a)}function Cd(e,n,t){var i=n.pendingProps,a=i.revealOrder,r=i.tail;if(me(e,n,i.children,t),i=X.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ll(e,t,n);else if(e.tag===19)Ll(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if($(X,i),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&xa(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),wr(n,!1,a,t,r);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&xa(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}wr(n,!0,t,null,r);break;case"together":wr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=Tn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function xp(e,n,t){switch(n.tag){case 3:Nd(n),xt();break;case 5:Zc(n);break;case 1:we(n.type)&&da(n);break;case 4:po(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,a=n.memoizedProps.value;$(fa,i._currentValue),i._currentValue=a;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?($(X,X.current&1),n.flags|=128,null):t&n.child.childLanes?jd(e,n,t):($(X,X.current&1),e=un(e,n,t),e!==null?e.sibling:null);$(X,X.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Cd(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),$(X,X.current),i)break;return null;case 22:case 23:return n.lanes=0,wd(e,n,t)}return un(e,n,t)}var Td,Ns,Sd,Md;Td=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ns=function(){};Sd=function(e,n,t,i){var a=e.memoizedProps;if(a!==i){e=n.stateNode,zn(Ge.current);var r=null;switch(t){case"input":a=Yr(e,a),i=Yr(e,i),r=[];break;case"select":a=J({},a,{value:void 0}),i=J({},i,{value:void 0}),r=[];break;case"textarea":a=Kr(e,a),i=Kr(e,i),r=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ua)}Gr(t,i);var o;t=null;for(f in a)if(!i.hasOwnProperty(f)&&a.hasOwnProperty(f)&&a[f]!=null)if(f==="style"){var l=a[f];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Kt.hasOwnProperty(f)?r||(r=[]):(r=r||[]).push(f,null));for(f in i){var u=i[f];if(l=a!=null?a[f]:void 0,i.hasOwnProperty(f)&&u!==l&&(u!=null||l!=null))if(f==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(r||(r=[]),r.push(f,t)),t=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(r=r||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(r=r||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Kt.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&q("scroll",e),r||l===u||(r=[])):(r=r||[]).push(f,u))}t&&(r=r||[]).push("style",t);var f=r;(n.updateQueue=f)&&(n.flags|=4)}};Md=function(e,n,t,i){t!==i&&(n.flags|=4)};function Dt(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function vp(e,n,t){var i=n.pendingProps;switch(ro(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return we(n.type)&&ca(),de(n),null;case 3:return i=n.stateNode,yt(),Q(_e),Q(pe),mo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ve!==null&&(Is(Ve),Ve=null))),Ns(e,n),de(n),null;case 5:fo(n);var a=zn(oi.current);if(t=n.type,e!==null&&n.stateNode!=null)Sd(e,n,t,i,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(E(166));return de(n),null}if(e=zn(Ge.current),Mi(n)){i=n.stateNode,t=n.type;var r=n.memoizedProps;switch(i[Ke]=n,i[ri]=r,e=(n.mode&1)!==0,t){case"dialog":q("cancel",i),q("close",i);break;case"iframe":case"object":case"embed":q("load",i);break;case"video":case"audio":for(a=0;a<Rt.length;a++)q(Rt[a],i);break;case"source":q("error",i);break;case"img":case"image":case"link":q("error",i),q("load",i);break;case"details":q("toggle",i);break;case"input":qo(i,r),q("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},q("invalid",i);break;case"textarea":Ko(i,r),q("invalid",i)}Gr(t,r),a=null;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="children"?typeof l=="string"?i.textContent!==l&&(r.suppressHydrationWarning!==!0&&Si(i.textContent,l,e),a=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&Si(i.textContent,l,e),a=["children",""+l]):Kt.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",i)}switch(t){case"input":bi(i),Qo(i,r,!0);break;case"textarea":bi(i),Xo(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=ua)}i=a,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(t,{is:i.is}):(e=o.createElement(t),t==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,t),e[Ke]=n,e[ri]=i,Td(e,n,!1,!1),n.stateNode=e;e:{switch(o=Jr(t,i),t){case"dialog":q("cancel",e),q("close",e),a=i;break;case"iframe":case"object":case"embed":q("load",e),a=i;break;case"video":case"audio":for(a=0;a<Rt.length;a++)q(Rt[a],e);a=i;break;case"source":q("error",e),a=i;break;case"img":case"image":case"link":q("error",e),q("load",e),a=i;break;case"details":q("toggle",e),a=i;break;case"input":qo(e,i),a=Yr(e,i),q("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=J({},i,{value:void 0}),q("invalid",e);break;case"textarea":Ko(e,i),a=Kr(e,i),q("invalid",e);break;default:a=i}Gr(t,a),l=a;for(r in l)if(l.hasOwnProperty(r)){var u=l[r];r==="style"?rc(e,u):r==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ic(e,u)):r==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Xt(e,u):typeof u=="number"&&Xt(e,""+u):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Kt.hasOwnProperty(r)?u!=null&&r==="onScroll"&&q("scroll",e):u!=null&&Us(e,r,u,o))}switch(t){case"input":bi(e),Qo(e,i,!1);break;case"textarea":bi(e),Xo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Sn(i.value));break;case"select":e.multiple=!!i.multiple,r=i.value,r!=null?lt(e,!!i.multiple,r,!1):i.defaultValue!=null&&lt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ua)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)Md(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(E(166));if(t=zn(oi.current),zn(Ge.current),Mi(n)){if(i=n.stateNode,t=n.memoizedProps,i[Ke]=n,(r=i.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Si(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(i.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ke]=n,n.stateNode=i}return de(n),null;case 13:if(Q(X),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Te!==null&&n.mode&1&&!(n.flags&128))Yc(),xt(),n.flags|=98560,r=!1;else if(r=Mi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(E(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(E(317));r[Ke]=n}else xt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),r=!1}else Ve!==null&&(Is(Ve),Ve=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||X.current&1?ie===0&&(ie=3):To())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return yt(),Ns(e,n),e===null&&ii(n.stateNode.containerInfo),de(n),null;case 10:return uo(n.type._context),de(n),null;case 17:return we(n.type)&&ca(),de(n),null;case 19:if(Q(X),r=n.memoizedState,r===null)return de(n),null;if(i=(n.flags&128)!==0,o=r.rendering,o===null)if(i)Dt(r,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=xa(e),o!==null){for(n.flags|=128,Dt(r,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)r=t,e=i,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(X,X.current&1|2),n.child}e=e.sibling}r.tail!==null&&ee()>_t&&(n.flags|=128,i=!0,Dt(r,!1),n.lanes=4194304)}else{if(!i)if(e=xa(o),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Dt(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!K)return de(n),null}else 2*ee()-r.renderingStartTime>_t&&t!==1073741824&&(n.flags|=128,i=!0,Dt(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(t=r.last,t!==null?t.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=ee(),n.sibling=null,t=X.current,$(X,i?t&1|2:t&1),n):(de(n),null);case 22:case 23:return Co(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?je&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function yp(e,n){switch(ro(n),n.tag){case 1:return we(n.type)&&ca(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),Q(_e),Q(pe),mo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fo(n),null;case 13:if(Q(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));xt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(X),null;case 4:return yt(),null;case 10:return uo(n.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var Ii=!1,he=!1,bp=typeof WeakSet=="function"?WeakSet:Set,I=null;function st(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Z(e,n,i)}else t.current=null}function js(e,n,t){try{t()}catch(i){Z(e,n,i)}}var Rl=!1;function _p(e,n){if(ls=sa,e=Oc(),io(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var o=0,l=-1,u=-1,f=0,y=0,x=e,b=null;n:for(;;){for(var C;x!==t||a!==0&&x.nodeType!==3||(l=o+a),x!==r||i!==0&&x.nodeType!==3||(u=o+i),x.nodeType===3&&(o+=x.nodeValue.length),(C=x.firstChild)!==null;)b=x,x=C;for(;;){if(x===e)break n;if(b===t&&++f===a&&(l=o),b===r&&++y===i&&(u=o),(C=x.nextSibling)!==null)break;x=b,b=x.parentNode}x=C}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(us={focusedElem:e,selectionRange:t},sa=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var M=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var T=M.memoizedProps,v=M.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?T:He(n.type,T),v);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(m){Z(n,n.return,m)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return M=Rl,Rl=!1,M}function Yt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&js(n,t,r)}a=a.next}while(a!==i)}}function La(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function Cs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ed(e){var n=e.alternate;n!==null&&(e.alternate=null,Ed(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[ri],delete n[hs],delete n[ip],delete n[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function Fl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ua));else if(i!==4&&(e=e.child,e!==null))for(Ts(e,n,t),e=e.sibling;e!==null;)Ts(e,n,t),e=e.sibling}function Ss(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ss(e,n,t),e=e.sibling;e!==null;)Ss(e,n,t),e=e.sibling}var se=null,We=!1;function dn(e,n,t){for(t=t.child;t!==null;)Id(e,n,t),t=t.sibling}function Id(e,n,t){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Ea,t)}catch{}switch(t.tag){case 5:he||st(t,n);case 6:var i=se,a=We;se=null,dn(e,n,t),se=i,We=a,se!==null&&(We?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(We?(e=se,t=t.stateNode,e.nodeType===8?mr(e.parentNode,t):e.nodeType===1&&mr(e,t),ei(e)):mr(se,t.stateNode));break;case 4:i=se,a=We,se=t.stateNode.containerInfo,We=!0,dn(e,n,t),se=i,We=a;break;case 0:case 11:case 14:case 15:if(!he&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var r=a,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&js(t,n,o),a=a.next}while(a!==i)}dn(e,n,t);break;case 1:if(!he&&(st(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(l){Z(t,n,l)}dn(e,n,t);break;case 21:dn(e,n,t);break;case 22:t.mode&1?(he=(i=he)||t.memoizedState!==null,dn(e,n,t),he=i):dn(e,n,t);break;default:dn(e,n,t)}}function Hl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new bp),n.forEach(function(i){var a=Ep.bind(null,e,i);t.has(i)||(t.add(i),i.then(a,a))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];try{var r=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,We=!1;break e;case 3:se=l.stateNode.containerInfo,We=!0;break e;case 4:se=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(se===null)throw Error(E(160));Id(r,o,a),se=null,We=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(f){Z(a,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Od(n,e),n=n.sibling}function Od(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),qe(e),i&4){try{Yt(3,e,e.return),La(3,e)}catch(T){Z(e,e.return,T)}try{Yt(5,e,e.return)}catch(T){Z(e,e.return,T)}}break;case 1:Re(n,e),qe(e),i&512&&t!==null&&st(t,t.return);break;case 5:if(Re(n,e),qe(e),i&512&&t!==null&&st(t,t.return),e.flags&32){var a=e.stateNode;try{Xt(a,"")}catch(T){Z(e,e.return,T)}}if(i&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,o=t!==null?t.memoizedProps:r,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&ec(a,r),Jr(l,o);var f=Jr(l,r);for(o=0;o<u.length;o+=2){var y=u[o],x=u[o+1];y==="style"?rc(a,x):y==="dangerouslySetInnerHTML"?ic(a,x):y==="children"?Xt(a,x):Us(a,y,x,f)}switch(l){case"input":qr(a,r);break;case"textarea":nc(a,r);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var C=r.value;C!=null?lt(a,!!r.multiple,C,!1):b!==!!r.multiple&&(r.defaultValue!=null?lt(a,!!r.multiple,r.defaultValue,!0):lt(a,!!r.multiple,r.multiple?[]:"",!1))}a[ri]=r}catch(T){Z(e,e.return,T)}}break;case 6:if(Re(n,e),qe(e),i&4){if(e.stateNode===null)throw Error(E(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(T){Z(e,e.return,T)}}break;case 3:if(Re(n,e),qe(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ei(n.containerInfo)}catch(T){Z(e,e.return,T)}break;case 4:Re(n,e),qe(e);break;case 13:Re(n,e),qe(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(No=ee())),i&4&&Hl(e);break;case 22:if(y=t!==null&&t.memoizedState!==null,e.mode&1?(he=(f=he)||y,Re(n,e),he=f):Re(n,e),qe(e),i&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!y&&e.mode&1)for(I=e,y=e.child;y!==null;){for(x=I=y;I!==null;){switch(b=I,C=b.child,b.tag){case 0:case 11:case 14:case 15:Yt(4,b,b.return);break;case 1:st(b,b.return);var M=b.stateNode;if(typeof M.componentWillUnmount=="function"){i=b,t=b.return;try{n=i,M.props=n.memoizedProps,M.state=n.memoizedState,M.componentWillUnmount()}catch(T){Z(i,t,T)}}break;case 5:st(b,b.return);break;case 22:if(b.memoizedState!==null){Vl(x);continue}}C!==null?(C.return=b,I=C):Vl(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{a=x.stateNode,f?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=x.stateNode,u=x.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ac("display",o))}catch(T){Z(e,e.return,T)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(T){Z(e,e.return,T)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Re(n,e),qe(e),i&4&&Hl(e);break;case 21:break;default:Re(n,e),qe(e)}}function qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Dd(t)){var i=t;break e}t=t.return}throw Error(E(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Xt(a,""),i.flags&=-33);var r=Fl(e);Ss(e,r,a);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Fl(e);Ts(e,l,o);break;default:throw Error(E(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wp(e,n,t){I=e,Bd(e)}function Bd(e,n,t){for(var i=(e.mode&1)!==0;I!==null;){var a=I,r=a.child;if(a.tag===22&&i){var o=a.memoizedState!==null||Ii;if(!o){var l=a.alternate,u=l!==null&&l.memoizedState!==null||he;l=Ii;var f=he;if(Ii=o,(he=u)&&!f)for(I=a;I!==null;)o=I,u=o.child,o.tag===22&&o.memoizedState!==null?Ul(a):u!==null?(u.return=o,I=u):Ul(a);for(;r!==null;)I=r,Bd(r),r=r.sibling;I=a,Ii=l,he=f}Wl(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,I=r):Wl(e)}}function Wl(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:he||La(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!he)if(t===null)i.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps);i.componentDidUpdate(a,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&jl(n,r,i);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}jl(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var y=f.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&ei(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}he||n.flags&512&&Cs(n)}catch(b){Z(n,n.return,b)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function Vl(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function Ul(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{La(4,n)}catch(u){Z(n,t,u)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var a=n.return;try{i.componentDidMount()}catch(u){Z(n,a,u)}}var r=n.return;try{Cs(n)}catch(u){Z(n,r,u)}break;case 5:var o=n.return;try{Cs(n)}catch(u){Z(n,o,u)}}}catch(u){Z(n,n.return,u)}if(n===e){I=null;break}var l=n.sibling;if(l!==null){l.return=n.return,I=l;break}I=n.return}}var kp=Math.ceil,ba=cn.ReactCurrentDispatcher,wo=cn.ReactCurrentOwner,Ae=cn.ReactCurrentBatchConfig,F=0,re=null,ne=null,oe=0,je=0,ot=Dn(0),ie=0,di=null,Vn=0,Ra=0,ko=0,qt=null,ye=null,No=0,_t=1/0,en=null,_a=!1,Ms=null,jn=null,Oi=!1,vn=null,wa=0,Qt=0,Es=null,Gi=-1,Ji=0;function ge(){return F&6?ee():Gi!==-1?Gi:Gi=ee()}function Cn(e){return e.mode&1?F&2&&oe!==0?oe&-oe:sp.transition!==null?(Ji===0&&(Ji=xc()),Ji):(e=V,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e):1}function $e(e,n,t,i){if(50<Qt)throw Qt=0,Es=null,Error(E(185));pi(e,t,i),(!(F&2)||e!==re)&&(e===re&&(!(F&2)&&(Ra|=t),ie===4&&gn(e,oe)),ke(e,i),t===1&&F===0&&!(n.mode&1)&&(_t=ee()+500,Pa&&In()))}function ke(e,n){var t=e.callbackNode;sh(e,n);var i=ra(e,e===re?oe:0);if(i===0)t!==null&&Zo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&Zo(t),n===1)e.tag===0?rp($l.bind(null,e)):Vc($l.bind(null,e)),np(function(){!(F&6)&&In()}),t=null;else{switch(vc(i)){case 1:t=Ks;break;case 4:t=mc;break;case 16:t=aa;break;case 536870912:t=gc;break;default:t=aa}t=Wd(t,Pd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Pd(e,n){if(Gi=-1,Ji=0,F&6)throw Error(E(327));var t=e.callbackNode;if(pt()&&e.callbackNode!==t)return null;var i=ra(e,e===re?oe:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=ka(e,i);else{n=i;var a=F;F|=2;var r=zd();(re!==e||oe!==n)&&(en=null,_t=ee()+500,Ln(e,n));do try{Cp();break}catch(l){Ad(e,l)}while(!0);lo(),ba.current=r,F=a,ne!==null?n=0:(re=null,oe=0,n=ie)}if(n!==0){if(n===2&&(a=is(e),a!==0&&(i=a,n=Ds(e,a))),n===1)throw t=di,Ln(e,0),gn(e,i),ke(e,ee()),t;if(n===6)gn(e,i);else{if(a=e.current.alternate,!(i&30)&&!Np(a)&&(n=ka(e,i),n===2&&(r=is(e),r!==0&&(i=r,n=Ds(e,r))),n===1))throw t=di,Ln(e,0),gn(e,i),ke(e,ee()),t;switch(e.finishedWork=a,e.finishedLanes=i,n){case 0:case 1:throw Error(E(345));case 2:Bn(e,ye,en);break;case 3:if(gn(e,i),(i&130023424)===i&&(n=No+500-ee(),10<n)){if(ra(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ds(Bn.bind(null,e,ye,en),n);break}Bn(e,ye,en);break;case 4:if(gn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,a=-1;0<i;){var o=31-Ue(i);r=1<<o,o=n[o],o>a&&(a=o),i&=~r}if(i=a,i=ee()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kp(i/1960))-i,10<i){e.timeoutHandle=ds(Bn.bind(null,e,ye,en),i);break}Bn(e,ye,en);break;case 5:Bn(e,ye,en);break;default:throw Error(E(329))}}}return ke(e,ee()),e.callbackNode===t?Pd.bind(null,e):null}function Ds(e,n){var t=qt;return e.current.memoizedState.isDehydrated&&(Ln(e,n).flags|=256),e=ka(e,n),e!==2&&(n=ye,ye=t,n!==null&&Is(n)),e}function Is(e){ye===null?ye=e:ye.push.apply(ye,e)}function Np(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var a=t[i],r=a.getSnapshot;a=a.value;try{if(!Ye(r(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gn(e,n){for(n&=~ko,n&=~Ra,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),i=1<<t;e[t]=-1,n&=~i}}function $l(e){if(F&6)throw Error(E(327));pt();var n=ra(e,0);if(!(n&1))return ke(e,ee()),null;var t=ka(e,n);if(e.tag!==0&&t===2){var i=is(e);i!==0&&(n=i,t=Ds(e,i))}if(t===1)throw t=di,Ln(e,0),gn(e,n),ke(e,ee()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Bn(e,ye,en),ke(e,ee()),null}function jo(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(_t=ee()+500,Pa&&In())}}function Un(e){vn!==null&&vn.tag===0&&!(F&6)&&pt();var n=F;F|=1;var t=Ae.transition,i=V;try{if(Ae.transition=null,V=1,e)return e()}finally{V=i,Ae.transition=t,F=n,!(F&6)&&In()}}function Co(){je=ot.current,Q(ot)}function Ln(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ep(t)),ne!==null)for(t=ne.return;t!==null;){var i=t;switch(ro(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ca();break;case 3:yt(),Q(_e),Q(pe),mo();break;case 5:fo(i);break;case 4:yt();break;case 13:Q(X);break;case 19:Q(X);break;case 10:uo(i.type._context);break;case 22:case 23:Co()}t=t.return}if(re=e,ne=e=Tn(e.current,null),oe=je=n,ie=0,di=null,ko=Ra=Vn=0,ye=qt=null,An!==null){for(n=0;n<An.length;n++)if(t=An[n],i=t.interleaved,i!==null){t.interleaved=null;var a=i.next,r=t.pending;if(r!==null){var o=r.next;r.next=a,i.next=o}t.pending=i}An=null}return e}function Ad(e,n){do{var t=ne;try{if(lo(),Qi.current=ya,va){for(var i=G.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}va=!1}if(Wn=0,ae=te=G=null,$t=!1,li=0,wo.current=null,t===null||t.return===null){ie=1,di=n,ne=null;break}e:{var r=e,o=t.return,l=t,u=n;if(n=oe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,y=l,x=y.tag;if(!(y.mode&1)&&(x===0||x===11||x===15)){var b=y.alternate;b?(y.updateQueue=b.updateQueue,y.memoizedState=b.memoizedState,y.lanes=b.lanes):(y.updateQueue=null,y.memoizedState=null)}var C=Il(o);if(C!==null){C.flags&=-257,Ol(C,o,l,r,n),C.mode&1&&Dl(r,f,n),n=C,u=f;var M=n.updateQueue;if(M===null){var T=new Set;T.add(u),n.updateQueue=T}else M.add(u);break e}else{if(!(n&1)){Dl(r,f,n),To();break e}u=Error(E(426))}}else if(K&&l.mode&1){var v=Il(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Ol(v,o,l,r,n),so(bt(u,l));break e}}r=u=bt(u,l),ie!==4&&(ie=2),qt===null?qt=[r]:qt.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var d=yd(r,u,n);Nl(r,d);break e;case 1:l=u;var c=r.type,p=r.stateNode;if(!(r.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(jn===null||!jn.has(p)))){r.flags|=65536,n&=-n,r.lanes|=n;var m=bd(r,l,n);Nl(r,m);break e}}r=r.return}while(r!==null)}Rd(t)}catch(k){n=k,ne===t&&t!==null&&(ne=t=t.return);continue}break}while(!0)}function zd(){var e=ba.current;return ba.current=ya,e===null?ya:e}function To(){(ie===0||ie===3||ie===2)&&(ie=4),re===null||!(Vn&268435455)&&!(Ra&268435455)||gn(re,oe)}function ka(e,n){var t=F;F|=2;var i=zd();(re!==e||oe!==n)&&(en=null,Ln(e,n));do try{jp();break}catch(a){Ad(e,a)}while(!0);if(lo(),F=t,ba.current=i,ne!==null)throw Error(E(261));return re=null,oe=0,ie}function jp(){for(;ne!==null;)Ld(ne)}function Cp(){for(;ne!==null&&!G0();)Ld(ne)}function Ld(e){var n=Hd(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?Rd(e):ne=n,wo.current=null}function Rd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=yp(t,n),t!==null){t.flags&=32767,ne=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(t=vp(t,n,je),t!==null){ne=t;return}if(n=n.sibling,n!==null){ne=n;return}ne=n=e}while(n!==null);ie===0&&(ie=5)}function Bn(e,n,t){var i=V,a=Ae.transition;try{Ae.transition=null,V=1,Tp(e,n,t,i)}finally{Ae.transition=a,V=i}return null}function Tp(e,n,t,i){do pt();while(vn!==null);if(F&6)throw Error(E(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(oh(e,r),e===re&&(ne=re=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Oi||(Oi=!0,Wd(aa,function(){return pt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Ae.transition,Ae.transition=null;var o=V;V=1;var l=F;F|=4,wo.current=null,_p(e,t),Od(t,e),qh(us),sa=!!ls,us=ls=null,e.current=t,wp(t),J0(),F=l,V=o,Ae.transition=r}else e.current=t;if(Oi&&(Oi=!1,vn=e,wa=a),r=e.pendingLanes,r===0&&(jn=null),nh(t.stateNode),ke(e,ee()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],i(a.value,{componentStack:a.stack,digest:a.digest});if(_a)throw _a=!1,e=Ms,Ms=null,e;return wa&1&&e.tag!==0&&pt(),r=e.pendingLanes,r&1?e===Es?Qt++:(Qt=0,Es=e):Qt=0,In(),null}function pt(){if(vn!==null){var e=vc(wa),n=Ae.transition,t=V;try{if(Ae.transition=null,V=16>e?16:e,vn===null)var i=!1;else{if(e=vn,vn=null,wa=0,F&6)throw Error(E(331));var a=F;for(F|=4,I=e.current;I!==null;){var r=I,o=r.child;if(I.flags&16){var l=r.deletions;if(l!==null){for(var u=0;u<l.length;u++){var f=l[u];for(I=f;I!==null;){var y=I;switch(y.tag){case 0:case 11:case 15:Yt(8,y,r)}var x=y.child;if(x!==null)x.return=y,I=x;else for(;I!==null;){y=I;var b=y.sibling,C=y.return;if(Ed(y),y===f){I=null;break}if(b!==null){b.return=C,I=b;break}I=C}}}var M=r.alternate;if(M!==null){var T=M.child;if(T!==null){M.child=null;do{var v=T.sibling;T.sibling=null,T=v}while(T!==null)}}I=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,I=o;else e:for(;I!==null;){if(r=I,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Yt(9,r,r.return)}var d=r.sibling;if(d!==null){d.return=r.return,I=d;break e}I=r.return}}var c=e.current;for(I=c;I!==null;){o=I;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,I=p;else e:for(o=c;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:La(9,l)}}catch(k){Z(l,l.return,k)}if(l===o){I=null;break e}var m=l.sibling;if(m!==null){m.return=l.return,I=m;break e}I=l.return}}if(F=a,In(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Ea,e)}catch{}i=!0}return i}finally{V=t,Ae.transition=n}}return!1}function Yl(e,n,t){n=bt(t,n),n=yd(e,n,1),e=Nn(e,n,1),n=ge(),e!==null&&(pi(e,1,n),ke(e,n))}function Z(e,n,t){if(e.tag===3)Yl(e,e,t);else for(;n!==null;){if(n.tag===3){Yl(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jn===null||!jn.has(i))){e=bt(t,e),e=bd(n,e,1),n=Nn(n,e,1),e=ge(),n!==null&&(pi(n,1,e),ke(n,e));break}}n=n.return}}function Sp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(oe&t)===t&&(ie===4||ie===3&&(oe&130023424)===oe&&500>ee()-No?Ln(e,0):ko|=t),ke(e,n)}function Fd(e,n){n===0&&(e.mode&1?(n=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):n=1);var t=ge();e=ln(e,n),e!==null&&(pi(e,n,t),ke(e,t))}function Mp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fd(e,t)}function Ep(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(n),Fd(e,t)}var Hd;Hd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||_e.current)be=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return be=!1,xp(e,n,t);be=!!(e.flags&131072)}else be=!1,K&&n.flags&1048576&&Uc(n,pa,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Xi(e,n),e=n.pendingProps;var a=gt(n,pe.current);ht(n,t),a=xo(null,n,i,e,a,t);var r=vo();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(i)?(r=!0,da(n)):r=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ho(n),a.updater=Aa,n.stateNode=a,a._reactInternals=n,vs(n,i,e,t),n=_s(null,n,i,!0,r,t)):(n.tag=0,K&&r&&ao(n),me(null,n,a,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Xi(e,n),e=n.pendingProps,a=i._init,i=a(i._payload),n.type=i,a=n.tag=Ip(i),e=He(i,e),a){case 0:n=bs(null,n,i,e,t);break e;case 1:n=Al(null,n,i,e,t);break e;case 11:n=Bl(null,n,i,e,t);break e;case 14:n=Pl(null,n,i,He(i.type,e),t);break e}throw Error(E(306,i,""))}return n;case 0:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:He(i,a),bs(e,n,i,a,t);case 1:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:He(i,a),Al(e,n,i,a,t);case 3:e:{if(Nd(n),e===null)throw Error(E(387));i=n.pendingProps,r=n.memoizedState,a=r.element,Qc(e,n),ga(n,i,null,t);var o=n.memoizedState;if(i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){a=bt(Error(E(423)),n),n=zl(e,n,i,t,a);break e}else if(i!==a){a=bt(Error(E(424)),n),n=zl(e,n,i,t,a);break e}else for(Te=kn(n.stateNode.containerInfo.firstChild),Se=n,K=!0,Ve=null,t=Jc(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xt(),i===a){n=un(e,n,t);break e}me(e,n,i,t)}n=n.child}return n;case 5:return Zc(n),e===null&&ms(n),i=n.type,a=n.pendingProps,r=e!==null?e.memoizedProps:null,o=a.children,cs(i,a)?o=null:r!==null&&cs(i,r)&&(n.flags|=32),kd(e,n),me(e,n,o,t),n.child;case 6:return e===null&&ms(n),null;case 13:return jd(e,n,t);case 4:return po(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=vt(n,null,i,t):me(e,n,i,t),n.child;case 11:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:He(i,a),Bl(e,n,i,a,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,a=n.pendingProps,r=n.memoizedProps,o=a.value,$(fa,i._currentValue),i._currentValue=o,r!==null)if(Ye(r.value,o)){if(r.children===a.children&&!_e.current){n=un(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){o=r.child;for(var u=l.firstContext;u!==null;){if(u.context===i){if(r.tag===1){u=rn(-1,t&-t),u.tag=2;var f=r.updateQueue;if(f!==null){f=f.shared;var y=f.pending;y===null?u.next=u:(u.next=y.next,y.next=u),f.pending=u}}r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),gs(r.return,t,n),l.lanes|=t;break}u=u.next}}else if(r.tag===10)o=r.type===n.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(E(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),gs(o,t,n),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===n){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}me(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,i=n.pendingProps.children,ht(n,t),a=ze(a),i=i(a),n.flags|=1,me(e,n,i,t),n.child;case 14:return i=n.type,a=He(i,n.pendingProps),a=He(i.type,a),Pl(e,n,i,a,t);case 15:return _d(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:He(i,a),Xi(e,n),n.tag=1,we(i)?(e=!0,da(n)):e=!1,ht(n,t),Xc(n,i,a),vs(n,i,a,t),_s(null,n,i,!0,e,t);case 19:return Cd(e,n,t);case 22:return wd(e,n,t)}throw Error(E(156,n.tag))};function Wd(e,n){return fc(e,n)}function Dp(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,i){return new Dp(e,n,t,i)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ip(e){if(typeof e=="function")return So(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===qs)return 14}return 2}function Tn(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Zi(e,n,t,i,a,r){var o=2;if(i=e,typeof e=="function")So(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gn:return Rn(t.children,a,r,n);case $s:o=8,a|=8;break;case Wr:return e=Pe(12,t,n,a|2),e.elementType=Wr,e.lanes=r,e;case Vr:return e=Pe(13,t,n,a),e.elementType=Vr,e.lanes=r,e;case Ur:return e=Pe(19,t,n,a),e.elementType=Ur,e.lanes=r,e;case Gu:return Fa(t,a,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ku:o=10;break e;case Xu:o=9;break e;case Ys:o=11;break e;case qs:o=14;break e;case pn:o=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Pe(o,t,n,a),n.elementType=e,n.type=i,n.lanes=r,n}function Rn(e,n,t,i){return e=Pe(7,e,i,n),e.lanes=t,e}function Fa(e,n,t,i){return e=Pe(22,e,i,n),e.elementType=Gu,e.lanes=t,e.stateNode={isHidden:!1},e}function kr(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function Nr(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Op(e,n,t,i,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ar(0),this.expirationTimes=ar(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ar(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Mo(e,n,t,i,a,r,o,l,u){return e=new Op(e,n,t,l,u),n===1?(n=1,r===!0&&(n|=8)):n=0,r=Pe(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(r),e}function Bp(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Vd(e){if(!e)return Mn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(we(t))return Wc(e,t,n)}return n}function Ud(e,n,t,i,a,r,o,l,u){return e=Mo(t,i,!0,e,a,r,o,l,u),e.context=Vd(null),t=e.current,i=ge(),a=Cn(t),r=rn(i,a),r.callback=n??null,Nn(t,r,a),e.current.lanes=a,pi(e,a,i),ke(e,i),e}function Ha(e,n,t,i){var a=n.current,r=ge(),o=Cn(a);return t=Vd(t),n.context===null?n.context=t:n.pendingContext=t,n=rn(r,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Nn(a,n,o),e!==null&&($e(e,a,o,r),qi(e,a,o)),o}function Na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ql(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Eo(e,n){ql(e,n),(e=e.alternate)&&ql(e,n)}function Pp(){return null}var $d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}Wa.prototype.render=Do.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));Ha(e,n,null,null)};Wa.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){Ha(null,e,null,null)}),n[on]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var n=_c();e={blockedOn:null,target:e,priority:n};for(var t=0;t<mn.length&&n!==0&&n<mn[t].priority;t++);mn.splice(t,0,e),t===0&&kc(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ql(){}function Ap(e,n,t,i,a){if(a){if(typeof i=="function"){var r=i;i=function(){var f=Na(o);r.call(f)}}var o=Ud(n,i,e,0,null,!1,!1,"",Ql);return e._reactRootContainer=o,e[on]=o.current,ii(e.nodeType===8?e.parentNode:e),Un(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var l=i;i=function(){var f=Na(u);l.call(f)}}var u=Mo(e,0,!1,null,null,!1,!1,"",Ql);return e._reactRootContainer=u,e[on]=u.current,ii(e.nodeType===8?e.parentNode:e),Un(function(){Ha(n,u,t,i)}),u}function Ua(e,n,t,i,a){var r=t._reactRootContainer;if(r){var o=r;if(typeof a=="function"){var l=a;a=function(){var u=Na(o);l.call(u)}}Ha(n,o,e,a)}else o=Ap(t,n,e,a,i);return Na(o)}yc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Lt(n.pendingLanes);t!==0&&(Xs(n,t|1),ke(n,ee()),!(F&6)&&(_t=ee()+500,In()))}break;case 13:Un(function(){var i=ln(e,1);if(i!==null){var a=ge();$e(i,e,1,a)}}),Eo(e,1)}};Gs=function(e){if(e.tag===13){var n=ln(e,134217728);if(n!==null){var t=ge();$e(n,e,134217728,t)}Eo(e,134217728)}};bc=function(e){if(e.tag===13){var n=Cn(e),t=ln(e,n);if(t!==null){var i=ge();$e(t,e,n,i)}Eo(e,n)}};_c=function(){return V};wc=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};es=function(e,n,t){switch(n){case"input":if(qr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var a=Ba(i);if(!a)throw Error(E(90));Zu(i),qr(i,a)}}}break;case"textarea":nc(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}};lc=jo;uc=Un;var zp={usingClientEntryPoint:!1,Events:[mi,nt,Ba,sc,oc,jo]},It={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lp={bundleType:It.bundleType,version:It.version,rendererPackageName:It.rendererPackageName,rendererConfig:It.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hc(e),e===null?null:e.stateNode},findFiberByHostInstance:It.findFiberByHostInstance||Pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{Ea=Bi.inject(Lp),Xe=Bi}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(n))throw Error(E(200));return Bp(e,n,null,t)};Ee.createRoot=function(e,n){if(!Io(e))throw Error(E(299));var t=!1,i="",a=$d;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Mo(e,1,!1,null,null,t,!1,i,a),e[on]=n.current,ii(e.nodeType===8?e.parentNode:e),new Do(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=hc(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Un(e)};Ee.hydrate=function(e,n,t){if(!Va(n))throw Error(E(200));return Ua(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!Io(e))throw Error(E(405));var i=t!=null&&t.hydratedSources||null,a=!1,r="",o=$d;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Ud(n,null,e,1,t??null,a,!1,r,o),e[on]=n.current,ii(e),i)for(e=0;e<i.length;e++)t=i[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Wa(n)};Ee.render=function(e,n,t){if(!Va(n))throw Error(E(200));return Ua(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Va(e))throw Error(E(40));return e._reactRootContainer?(Un(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};Ee.unstable_batchedUpdates=jo;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!Va(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ua(e,n,t,!1,i)};Ee.version="18.2.0-next-9e3b772b8-20220608";function Yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd)}catch(e){console.error(e)}}Yd(),Uu.exports=Ee;var Rp=Uu.exports,Kl=Rp;Fr.createRoot=Kl.createRoot,Fr.hydrateRoot=Kl.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ja.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Xl="popstate";function Fp(e){e===void 0&&(e={});function n(i,a){let{pathname:r,search:o,hash:l}=i.location;return Os("",{pathname:r,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:qd(a)}return Wp(n,t,null,e)}function Ne(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Oo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Hp(){return Math.random().toString(36).substr(2,8)}function Gl(e,n){return{usr:e.state,key:e.key,idx:n}}function Os(e,n,t,i){return t===void 0&&(t=null),ja({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?$a(n):n,{state:t,key:n&&n.key||i||Hp()})}function qd(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function $a(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function Wp(e,n,t,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:r=!1}=i,o=a.history,l=yn.Pop,u=null,f=y();f==null&&(f=0,o.replaceState(ja({},o.state,{idx:f}),""));function y(){return(o.state||{idx:null}).idx}function x(){l=yn.Pop;let v=y(),d=v==null?null:v-f;f=v,u&&u({action:l,location:T.location,delta:d})}function b(v,d){l=yn.Push;let c=Os(T.location,v,d);t&&t(c,v),f=y()+1;let p=Gl(c,f),m=T.createHref(c);try{o.pushState(p,"",m)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(m)}r&&u&&u({action:l,location:T.location,delta:1})}function C(v,d){l=yn.Replace;let c=Os(T.location,v,d);t&&t(c,v),f=y();let p=Gl(c,f),m=T.createHref(c);o.replaceState(p,"",m),r&&u&&u({action:l,location:T.location,delta:0})}function M(v){let d=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof v=="string"?v:qd(v);return Ne(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let T={get action(){return l},get location(){return e(a,o)},listen(v){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(Xl,x),u=v,()=>{a.removeEventListener(Xl,x),u=null}},createHref(v){return n(a,v)},createURL:M,encodeLocation(v){let d=M(v);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:b,replace:C,go(v){return o.go(v)}};return T}var Jl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jl||(Jl={}));function Vp(e,n,t){t===void 0&&(t="/");let i=typeof n=="string"?$a(n):n,a=Xd(i.pathname||"/",t);if(a==null)return null;let r=Qd(e);Up(r);let o=null;for(let l=0;o==null&&l<r.length;++l)o=Zp(r[l],tf(a));return o}function Qd(e,n,t,i){n===void 0&&(n=[]),t===void 0&&(t=[]),i===void 0&&(i="");let a=(r,o,l)=>{let u={relativePath:l===void 0?r.path||"":l,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};u.relativePath.startsWith("/")&&(Ne(u.relativePath.startsWith(i),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(i.length));let f=ft([i,u.relativePath]),y=t.concat(u);r.children&&r.children.length>0&&(Ne(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Qd(r.children,n,y,f)),!(r.path==null&&!r.index)&&n.push({path:f,score:Gp(f,r.index),routesMeta:y})};return e.forEach((r,o)=>{var l;if(r.path===""||!((l=r.path)!=null&&l.includes("?")))a(r,o);else for(let u of Kd(r.path))a(r,o,u)}),n}function Kd(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,a=t.endsWith("?"),r=t.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let o=Kd(i.join("/")),l=[];return l.push(...o.map(u=>u===""?r:[r,u].join("/"))),a&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Up(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Jp(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const $p=/^:[\w-]+$/,Yp=3,qp=2,Qp=1,Kp=10,Xp=-2,Zl=e=>e==="*";function Gp(e,n){let t=e.split("/"),i=t.length;return t.some(Zl)&&(i+=Xp),n&&(i+=qp),t.filter(a=>!Zl(a)).reduce((a,r)=>a+($p.test(r)?Yp:r===""?Qp:Kp),i)}function Jp(e,n){return e.length===n.length&&e.slice(0,-1).every((i,a)=>i===n[a])?e[e.length-1]-n[n.length-1]:0}function Zp(e,n){let{routesMeta:t}=e,i={},a="/",r=[];for(let o=0;o<t.length;++o){let l=t[o],u=o===t.length-1,f=a==="/"?n:n.slice(a.length)||"/",y=ef({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f);if(!y)return null;Object.assign(i,y.params);let x=l.route;r.push({params:i,pathname:ft([a,y.pathname]),pathnameBase:rf(ft([a,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(a=ft([a,y.pathnameBase]))}return r}function ef(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=nf(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let r=a[0],o=r.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:i.reduce((f,y,x)=>{let{paramName:b,isOptional:C}=y;if(b==="*"){let T=l[x]||"";o=r.slice(0,r.length-T.length).replace(/(.)\/+$/,"$1")}const M=l[x];return C&&!M?f[b]=void 0:f[b]=af(M||"",b),f},{}),pathname:r,pathnameBase:o,pattern:e}}function nf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Oo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(i.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),i]}function tf(e){try{return decodeURI(e)}catch(n){return Oo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function af(e,n){try{return decodeURIComponent(e)}catch(t){return Oo(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function Xd(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}const ft=e=>e.join("/").replace(/\/\/+/g,"/"),rf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function sf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gd=["post","put","patch","delete"];new Set(Gd);const of=["get",...Gd];new Set(of);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ca.apply(this,arguments)}const lf=B.createContext(null),uf=B.createContext(null),Jd=B.createContext(null),Ya=B.createContext(null),qa=B.createContext({outlet:null,matches:[],isDataRoute:!1}),Zd=B.createContext(null);function Bo(){return B.useContext(Ya)!=null}function cf(){return Bo()||Ne(!1),B.useContext(Ya).location}function df(e,n){return hf(e,n)}function hf(e,n,t,i){Bo()||Ne(!1);let{navigator:a}=B.useContext(Jd),{matches:r}=B.useContext(qa),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let f=cf(),y;if(n){var x;let v=typeof n=="string"?$a(n):n;u==="/"||(x=v.pathname)!=null&&x.startsWith(u)||Ne(!1),y=v}else y=f;let b=y.pathname||"/",C=u==="/"?b:b.slice(u.length)||"/",M=Vp(e,{pathname:C}),T=xf(M&&M.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:ft([u,a.encodeLocation?a.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:ft([u,a.encodeLocation?a.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),r,t,i);return n&&T?B.createElement(Ya.Provider,{value:{location:Ca({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:yn.Pop}},T):T}function pf(){let e=_f(),n=sf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},n),t?B.createElement("pre",{style:a},t):null,null)}const ff=B.createElement(pf,null);class mf extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?B.createElement(qa.Provider,{value:this.props.routeContext},B.createElement(Zd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gf(e){let{routeContext:n,match:t,children:i}=e,a=B.useContext(lf);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),B.createElement(qa.Provider,{value:n},i)}function xf(e,n,t,i){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),i===void 0&&(i=null),e==null){var r;if((r=t)!=null&&r.errors)e=t.matches;else return null}let o=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let y=o.findIndex(x=>x.route.id&&(l==null?void 0:l[x.route.id]));y>=0||Ne(!1),o=o.slice(0,Math.min(o.length,y+1))}let u=!1,f=-1;if(t&&i&&i.v7_partialHydration)for(let y=0;y<o.length;y++){let x=o[y];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=y),x.route.id){let{loaderData:b,errors:C}=t,M=x.route.loader&&b[x.route.id]===void 0&&(!C||C[x.route.id]===void 0);if(x.route.lazy||M){u=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((y,x,b)=>{let C,M=!1,T=null,v=null;t&&(C=l&&x.route.id?l[x.route.id]:void 0,T=x.route.errorElement||ff,u&&(f<0&&b===0?(wf("route-fallback",!1),M=!0,v=null):f===b&&(M=!0,v=x.route.hydrateFallbackElement||null)));let d=n.concat(o.slice(0,b+1)),c=()=>{let p;return C?p=T:M?p=v:x.route.Component?p=B.createElement(x.route.Component,null):x.route.element?p=x.route.element:p=y,B.createElement(gf,{match:x,routeContext:{outlet:y,matches:d,isDataRoute:t!=null},children:p})};return t&&(x.route.ErrorBoundary||x.route.errorElement||b===0)?B.createElement(mf,{location:t.location,revalidation:t.revalidation,component:T,error:C,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Bs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bs||{});function vf(e){let n=B.useContext(uf);return n||Ne(!1),n}function yf(e){let n=B.useContext(qa);return n||Ne(!1),n}function bf(e){let n=yf(),t=n.matches[n.matches.length-1];return t.route.id||Ne(!1),t.route.id}function _f(){var e;let n=B.useContext(Zd),t=vf(Bs.UseRouteError),i=bf(Bs.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[i]}const eu={};function wf(e,n,t){!n&&!eu[e]&&(eu[e]=!0)}function ea(e){Ne(!1)}function kf(e){let{basename:n="/",children:t=null,location:i,navigationType:a=yn.Pop,navigator:r,static:o=!1,future:l}=e;Bo()&&Ne(!1);let u=n.replace(/^\/*/,"/"),f=B.useMemo(()=>({basename:u,navigator:r,static:o,future:Ca({v7_relativeSplatPath:!1},l)}),[u,l,r,o]);typeof i=="string"&&(i=$a(i));let{pathname:y="/",search:x="",hash:b="",state:C=null,key:M="default"}=i,T=B.useMemo(()=>{let v=Xd(y,u);return v==null?null:{location:{pathname:v,search:x,hash:b,state:C,key:M},navigationType:a}},[u,y,x,b,C,M,a]);return T==null?null:B.createElement(Jd.Provider,{value:f},B.createElement(Ya.Provider,{children:t,value:T}))}function Nf(e){let{children:n,location:t}=e;return df(Ps(n),t)}new Promise(()=>{});function Ps(e,n){n===void 0&&(n=[]);let t=[];return B.Children.forEach(e,(i,a)=>{if(!B.isValidElement(i))return;let r=[...n,a];if(i.type===B.Fragment){t.push.apply(t,Ps(i.props.children,r));return}i.type!==ea&&Ne(!1),!i.props.index||!i.props.children||Ne(!1);let o={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ps(i.props.children,r)),t.push(o)}),t}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const jf="startTransition",nu=M0[jf];function Cf(e){let{basename:n,children:t,future:i,window:a}=e,r=B.useRef();r.current==null&&(r.current=Fp({window:a,v5Compat:!0}));let o=r.current,[l,u]=B.useState({action:o.action,location:o.location}),{v7_startTransition:f}=i||{},y=B.useCallback(x=>{f&&nu?nu(()=>u(x)):u(x)},[u,f]);return B.useLayoutEffect(()=>o.listen(y),[o,y]),B.createElement(kf,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:i})}var tu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tu||(tu={}));var iu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(iu||(iu={}));function Tf(){return s.jsx(s.Fragment,{children:s.jsx("header",{className:"relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900",children:s.jsx("nav",{"aria-label":"Global",className:"max-w-container mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"relative flex items-center py-[2.125rem]",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 h-px bg-slate-900/5"}),s.jsxs("a",{className:"flex-none text-slate-900",href:"/",children:[s.jsx("span",{className:"sr-only",children:"Tailwind UI"}),s.jsxs("svg",{className:"h-6 w-auto","aria-hidden":"true",viewBox:"0 0 160 24",fill:"none",children:[s.jsx("path",{d:"M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z",className:"fill-sky-400"}),s.jsx("path",{d:"M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z",fill:"currentColor"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z",fill:"currentColor"})]})]}),s.jsxs("a",{href:"https://tailwindcss.com/blog/introducing-catalyst",className:"group -my-2 ml-6 hidden items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden min-[1300px]:flex",children:[s.jsx("svg",{className:"h-4 w-4 fill-sky-500",viewBox:"0 0 24 24",children:s.jsx("path",{fillRule:"evenodd",d:"M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z",clipRule:"evenodd"})}),s.jsx("span",{className:"font-semibold",children:"Introducing Catalyst"}),s.jsx("svg",{width:"2",height:"2","aria-hidden":"true",className:"fill-slate-900",children:s.jsx("circle",{cx:"1",cy:"1",r:"1"})}),s.jsxs("span",{className:"font-medium",children:[s.jsx("span",{className:"md:hidden",children:"Our new React UI kit"}),s.jsx("span",{className:"hidden md:inline",children:"A modern application UI kit for React"})]}),s.jsx("svg",{viewBox:"0 0 5 8",className:"h-2 w-[5px] fill-black/30 group-hover:fill-black/60",fillRule:"evenodd",clipRule:"evenodd","aria-hidden":"true",children:s.jsx("path",{d:"M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z"})})]}),s.jsxs("div",{className:"ml-auto hidden lg:flex lg:items-center",children:[s.jsx("a",{href:"/components",children:"Components"}),s.jsx("a",{className:"ml-8",href:"/templates",children:"Templates"}),s.jsx("a",{className:"ml-8",href:"/documentation",children:"Docs"})]}),s.jsxs("button",{type:"button",className:"-my-1 ml-auto flex h-8 w-8 items-center justify-center rounded-lg lg:ml-8",children:[s.jsx("span",{className:"sr-only",children:"Search components"}),s.jsx("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 fill-gray-900 hover:fill-gray-900",children:s.jsx("path",{d:"M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"})})]}),s.jsxs("button",{type:"button",className:"-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden",children:[s.jsx("span",{className:"sr-only",children:"Open navigation"}),s.jsx("svg",{viewBox:"0 0 24 24",className:"h-6 w-6 stroke-slate-900",children:s.jsx("path",{d:"M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5",fill:"none",strokeWidth:"1.5",strokeLinecap:"round"})})]}),s.jsx("div",{className:"hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8",children:s.jsx("div",{className:"relative","data-headlessui-state":"",children:s.jsxs("button",{className:"flex items-center font-semibold hover:text-gray-900",id:"headlessui-menu-button-19",type:"button","aria-haspopup":"menu","aria-expanded":"false","data-headlessui-state":"",children:[s.jsxs("span",{className:"hidden items-center sm:flex",children:["Account",s.jsx("svg",{"aria-hidden":"true",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ml-3 h-3 w-3 stroke-slate-400",children:s.jsx("path",{d:"M9.75 4.125 6 7.875l-3.75-3.75",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),s.jsx("span",{className:"-my-1 flex h-8 w-8 items-center justify-center rounded-lg sm:hidden",children:s.jsx("svg",{"aria-hidden":"true",width:"20",height:"20",fill:"none",className:"text-slate-900",children:s.jsx("path",{d:"M3.75 4.75h12.5M3.75 9.75h12.5M3.75 14.75h12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})})]})})})})}function Sf(e){const{title:n,description:t,children:i}=e;return s.jsxs("section",{id:"product-application-ui",className:"scroll-mt-28",children:[s.jsx("h2",{className:"text-xl font-bold text-slate-900",children:n}),s.jsx("p",{className:"mt-3 text-sm leading-7 text-slate-500",children:t}),s.jsx("div",{className:"mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12",children:i})]})}const e0=B.createContext({compName:""});function Fe(e){const{id:n,title:t,compName:i="",children:a}=e;return s.jsx(e0.Provider,{value:{compName:i},children:s.jsxs("section",{id:n,className:"grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",children:[s.jsx("h3",{className:"text-base font-semibold text-slate-900",children:t}),s.jsx("ul",{className:"col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",children:a})]})})}function A(e){const{compName:n}=B.useContext(e0),{name:t,img:i="",url:a="#",count:r}=e,l=`/tailwind-components/img/category-thumbnails${n?`/${n}`:""}${i}`;return s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:l,alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:a,children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:t})]})}),s.jsxs("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:[r," components"]})]})})}function Mf(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"sticky top-0 z-40 overflow-x-auto whitespace-nowrap border-b border-slate-900/5 bg-transparent transition duration-100",children:s.jsxs("div",{className:"max-w-container mx-auto flex justify-between space-x-8 py-4 text-sm font-semibold leading-6 text-slate-900",children:[s.jsxs("div",{className:"flex space-x-8 pl-4 sm:pl-6 lg:pl-8",children:[s.jsx("a",{href:"#product-application-ui",children:"Application UI"}),s.jsx("a",{href:"#product-marketing",children:"Marketing"}),s.jsx("a",{href:"#product-ecommerce",children:"Ecommerce"})]}),s.jsxs("div",{className:"flex space-x-8 pr-4 sm:pr-6 lg:pr-8",children:[s.jsx("a",{href:"#pricing",children:"Pricing"}),s.jsx("a",{href:"#faqs",children:s.jsx("abbr",{className:"no-underline",title:"Frequently asked questions",children:"FAQs"})})]})]})}),s.jsxs("div",{className:"max-w-container relative mx-auto w-full space-y-20 px-4 pb-20 pt-20 sm:px-6 lg:px-8",children:[s.jsxs(Sf,{title:"Application UI",description:s.jsx(s.Fragment,{children:"Form layouts, tables, dialogs — everything you need to build beautiful responsive web applications."}),children:[s.jsxs(Fe,{id:"product-application-ui-application-shells",title:"Application Shells",compName:"application-ui",children:[s.jsx(A,{name:"Stacked Layouts",count:"9",img:"/stacked.png",url:"/stacked"}),s.jsx(A,{name:"Sidebar Layouts",count:"8",img:"/sidebar.png",url:"/sidebar"}),s.jsx(A,{name:"Multi-Column Layouts",count:"6",img:"/multi-column.png"})]}),s.jsxs(Fe,{id:"product-application-ui-headings",title:"Headings",compName:"application-ui",children:[s.jsx(A,{name:"Page Headings",count:"13",img:"/page-headings.png"}),s.jsx(A,{name:"Card Headings",count:"6",img:"/card-headings.png"}),s.jsx(A,{name:"Section Headings",count:"10",img:"/section-headings.png"})]}),s.jsxs(Fe,{id:"product-application-ui-data-display",title:"Data Display",compName:"application-ui",children:[s.jsx(A,{name:"Description Lists",count:"7",img:"/description-lists.png"}),s.jsx(A,{name:"Stats",count:"5",img:"/stats.png"}),s.jsx(A,{name:"Calendars",count:"8",img:"/calendars.png"})]}),s.jsxs(Fe,{id:"product-application-ui-lists",title:"Lists",compName:"application-ui",children:[s.jsx(A,{name:"Stacked Lists",count:"17",img:"/stacked-lists.png"}),s.jsx(A,{name:"Tables",count:"20",img:"/tables.png"}),s.jsx(A,{name:"Grid Lists",count:"7",img:"/grid-lists.png"}),s.jsx(A,{name:"Feeds",count:"3",img:"/feeds.png"})]}),s.jsxs(Fe,{id:"product-application-ui-forms",title:"Forms",compName:"application-ui",children:[s.jsx(A,{name:"Form Layouts",count:"5",img:"/form-layouts.png"}),s.jsx(A,{name:"Input Groups",count:"21",img:"/input-groups.png"}),s.jsx(A,{name:"Select Menus",count:"7",img:"/select-menus.png"}),s.jsx(A,{name:"Sign-in and Registration",count:"5",img:"/sign-in-forms.png"}),s.jsx(A,{name:"Textareas",count:"5",img:"/textareas.png"}),s.jsx(A,{name:"Radio Groups",count:"12",img:"/radio-groups.png"}),s.jsx(A,{name:"Checkboxes",count:"4",img:"/checkboxes.png"}),s.jsx(A,{name:"Toggles",count:"5",img:"/toggles.png"}),s.jsx(A,{name:"Action Panels",count:"8",img:"/action-panels.png"}),s.jsx(A,{name:"Comboboxes",count:"5",img:"/comboboxes.png"})]}),s.jsxs(Fe,{id:"product-application-ui-feedback",title:"Feedback",compName:"application-ui",children:[s.jsx(A,{name:"Alerts",count:"6",img:"/alerts.png"}),s.jsx(A,{name:"Empty States",count:"6",img:"/empty-states.png"})]}),s.jsxs(Fe,{id:"product-application-ui-navigation",title:"Navigation",compName:"application-ui",children:[s.jsx(A,{name:"Navbars",count:"11",img:"/navbars.png"}),s.jsx(A,{name:"Pagination",count:"3",img:"/pagination.png"}),s.jsx(A,{name:"Tabs",count:"6",img:"/tabs.png"}),s.jsx(A,{name:"Vertical Navigation",count:"6",img:"/vertical-navigation.png"}),s.jsx(A,{name:"Sidebar Navigation",count:"5",img:"/sidebar-navigation.png"}),s.jsx(A,{name:"Breadcrumbs",count:"4",img:"/breadcrumbs.png"}),s.jsx(A,{name:"Steps",count:"8",img:"/steps.png"}),s.jsx(A,{name:"Command Palettes",count:"9",img:"/command-palettes.png"})]}),s.jsxs(Fe,{id:"product-application-ui-overlays",title:"Overlays",compName:"application-ui",children:[s.jsx(A,{name:"Dialogs",count:"6",img:"/dialogs.png"}),s.jsx(A,{name:"Slide-overs",count:"12",img:"/slide-overs.png"}),s.jsx(A,{name:"Notifications",count:"6",img:"/notifications.png"})]}),s.jsxs(Fe,{id:"product-application-ui-elements",title:"Elements",compName:"application-ui",children:[s.jsx(A,{name:"Avatars",count:"11",img:"/avatars.png"}),s.jsx(A,{name:"Badges",count:"18",img:"/badges.png"}),s.jsx(A,{name:"Dropdowns",count:"5",img:"/dropdowns.png"}),s.jsx(A,{name:"Buttons",count:"10",img:"/buttons.png"}),s.jsx(A,{name:"Button Groups",count:"5",img:"/button-groups.png"})]}),s.jsxs(Fe,{id:"product-application-ui-layout",title:"Layout",compName:"application-ui",children:[s.jsx(A,{name:"Containers",count:"5",img:"/containers.png"}),s.jsx(A,{name:"Panels",count:"10",img:"/panels.png"}),s.jsx(A,{name:"List containers",count:"7",img:"/list-containers.png"}),s.jsx(A,{name:"Media Objects",count:"8",img:"/media-objects.png"}),s.jsx(A,{name:"Dividers",count:"8",img:"/dividers.png"})]}),s.jsxs(Fe,{id:"product-application-ui-page-examples",title:"Page Examples",compName:"application-ui",children:[s.jsx(A,{name:"Home Screens",count:"2",img:"/home-screens.png"}),s.jsx(A,{name:"Detail Screens",count:"2",img:"/detail-screens.png"}),s.jsx(A,{name:"Settings Screens",count:"2",img:"/settings-screens.png"})]})]}),s.jsxs("section",{id:"product-marketing",className:"scroll-mt-28",children:[s.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Marketing"}),s.jsx("p",{className:"mt-3 text-sm leading-7 text-slate-500",children:"Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites."}),s.jsxs("div",{className:"mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12",children:[s.jsxs("section",{id:"product-marketing-sections",className:"grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",children:[s.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Page Sections"}),s.jsxs("ul",{className:"col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",children:[s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/heroes.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/heroes",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Hero Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"12 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/feature-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/feature-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Feature Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"18 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/cta-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/cta-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"CTA Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"11 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/pricing.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/pricing",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Pricing Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"13 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/header.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/header",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Header Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"10 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/newsletter-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/newsletter-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Newsletter Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"7 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/stats-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/stats-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Stats"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"10 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/testimonials.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/testimonials",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Testimonials"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"9 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/blog-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/blog-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Blog Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"7 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/contact-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/contact-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Contact Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"8 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/team-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/team-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Team Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"9 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/content-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/content-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Content Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"6 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/logo-clouds.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/logo-clouds",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Logo Clouds"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"12 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/faq-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/faq-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"FAQs"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"10 components"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/footers.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/sections/footers",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Footers"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"10 components"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]})]}),s.jsxs("section",{id:"product-marketing-elements",className:"grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",children:[s.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Elements"}),s.jsxs("ul",{className:"col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",children:[s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/headers.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/elements/headers",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Headers"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"12 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/flyout-menus.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/elements/flyout-menus",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Flyout Menus"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"7 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/banners.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/elements/banners",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Banners"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"13 components"})]})})]})]}),s.jsxs("section",{id:"product-marketing-feedback",className:"grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",children:[s.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Feedback"}),s.jsx("ul",{className:"col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",children:s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/404-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/feedback/404-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"404 Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 components"})]})})})]}),s.jsxs("section",{id:"product-marketing-page-examples",className:"grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",children:[s.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Page Examples"}),s.jsxs("ul",{className:"col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",children:[s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/landing-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/page-examples/landing-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Landing Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"4 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/pricing-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/page-examples/pricing-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Pricing Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"3 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/marketing/about-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/marketing/page-examples/about-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"About Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"3 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]})]})]})]}),s.jsxs("section",{id:"product-ecommerce",className:"scroll-mt-28",children:[s.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Ecommerce"}),s.jsx("p",{className:"mt-3 text-sm leading-7 text-slate-500",children:"Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end."}),s.jsxs("div",{className:"mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12",children:[s.jsxs("section",{id:"product-ecommerce-components",className:"grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",children:[s.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Components"}),s.jsxs("ul",{className:"col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",children:[s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/product-overviews.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/product-overviews",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Product Overviews"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/product-lists.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/product-lists",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Product Lists"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"11 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/category-previews.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/category-previews",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Category Previews"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"6 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/shopping-carts.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/shopping-carts",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Shopping Carts"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"6 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/category-filters.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/category-filters",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Category Filters"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/product-quickviews.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/product-quickviews",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Product Quickviews"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"4 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/product-features.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/product-features",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Product Features"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"9 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/store-navigation.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/store-navigation",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Store Navigation"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/promo-sections.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/promo-sections",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Promo Sections"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"8 components"})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/checkout-forms.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/checkout-forms",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Checkout Forms"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 components"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/reviews.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/reviews",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Reviews"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"4 components"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/order-summaries.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/order-summaries",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Order Summaries"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"4 components"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/order-history.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/order-history",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Order History"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"4 components"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/incentives.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/components/incentives",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Incentives"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"8 components"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]})]}),s.jsxs("section",{id:"product-ecommerce-page-examples",className:"grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",children:[s.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Page Examples"}),s.jsxs("ul",{className:"col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",children:[s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/storefront-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/page-examples/storefront-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Storefront Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"4 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/product-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/page-examples/product-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Product Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/category-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/page-examples/category-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Category Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/shopping-cart-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/page-examples/shopping-cart-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Shopping Cart Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"3 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/checkout-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/page-examples/checkout-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Checkout Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/order-detail-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/page-examples/order-detail-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Order Detail Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"3 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}),s.jsx("li",{children:s.jsxs("div",{className:"group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",children:[s.jsx("div",{className:"relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",children:s.jsx("img",{src:"/tailwind-components/img/category-thumbnails/ecommerce/order-history-pages.png",alt:"",className:"absolute inset-0 h-full w-full"})}),s.jsx("h4",{className:"mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",children:s.jsxs("a",{href:"/components/ecommerce/page-examples/order-history-pages",children:[s.jsx("span",{className:"absolute -inset-2.5 z-10"}),s.jsx("span",{className:"relative",children:"Order History Pages"})]})}),s.jsx("p",{className:"relative mt-1.5 text-xs font-medium text-slate-500",children:"5 examples"}),s.jsxs("p",{className:"pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",children:[s.jsx("span",{className:"sr-only",children:"PNG previews only, upgrade to get the HTML."}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",className:"h-6 w-6",children:s.jsx("path",{d:"M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]})]})]})]})]})]})}var n0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var r="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(r=a(r,i(l)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var l in r)n.call(r,l)&&r[l]&&(o=a(o,l));return o}function a(r,o){return o?r?r+" "+o:r+o:r}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(n0);var Ef=n0.exports;const As=Sa(Ef);function Df(e){try{return navigator.clipboard.writeText(e)}catch(n){return console.log("failed to copy",n),Promise.reject(n)}}let If=0;function Qa(){return If++}function t0(e){return Number(Math.random().toString().substr(3,e)+Date.now()).toString(36)}const au=Qa(),ru=Qa();function Of(e){const{title:n,componentId:t,isPreview:i,language:a,onChange:r,onPreviewChange:o,data:l}=e,u=async()=>{await Df(l[a]),alert("copied")};return s.jsxs(B.Fragment,{children:[s.jsxs("div",{className:"flex min-w-0",children:[s.jsx("h2",{className:"truncate text-base font-medium leading-7 text-slate-900",children:s.jsx("a",{href:t,children:n})}),s.jsx("a",{className:"ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block",children:"Requires JS"})]}),s.jsxs("div",{className:"ml-6 flex items-center",children:[s.jsxs("div",{className:"flex space-x-1 rounded-lg bg-slate-100 p-0.5",role:"tablist","aria-orientation":"horizontal",children:[s.jsxs("button",{className:As("flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3",{"bg-white shadow":i}),id:`headlessui-tabs-tab-${au}`,role:"tab",type:"button","aria-selected":i,tabIndex:"0","data-headlessui-state":i?"selected":"","aria-controls":`headlessui-tabs-panel-${au}`,onClick:()=>o(!0),children:[s.jsxs("svg",{className:"h-5 w-5 flex-none stroke-sky-500",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"}),s.jsx("circle",{cx:"10",cy:"10",r:"2.25"})]}),s.jsx("span",{className:"sr-only text-slate-900 lg:not-sr-only lg:ml-2",children:"Preview"})]}),s.jsxs("button",{className:As("flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3",{"bg-white shadow":!i}),id:`headlessui-tabs-tab-${ru}`,role:"tab",type:"button","aria-selected":!i,tabIndex:"-1","data-headlessui-state":i?"":"selected","aria-controls":`headlessui-tabs-panel-${ru}`,onClick:()=>o(!1),children:[s.jsx("svg",{className:"h-5 w-5 flex-none stroke-slate-600",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"})}),s.jsx("span",{className:"sr-only text-slate-600 lg:not-sr-only lg:ml-2",children:"Code"})]})]}),s.jsx("div",{className:"ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"}),s.jsxs("div",{className:"relative hidden sm:block",children:[s.jsxs("select",{value:a,onChange:f=>r(f.target.value,f),className:"form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm",children:[s.jsx("option",{value:"html",children:"HTML"}),s.jsx("option",{value:"react",children:"React"}),s.jsx("option",{value:"vue",children:"Vue"})]}),s.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 8 6",width:"8",height:"6",fill:"none",className:"pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500",children:s.jsx("path",{d:"M7 1.5l-3 3-3-3",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),s.jsx("button",{onClick:u,className:"group relative ml-2 hidden h-9 w-9 items-center justify-center sm:flex",children:s.jsxs("svg",{className:"h-8 w-8 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600",fill:"none",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.7475 16.2499L18.2475 16.2499",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.7475 19.2499L18.2475 19.2499",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsxs("g",{className:"opacity-0",children:[s.jsx("path",{d:"M15.9975 5.99988L15.9975 3.99988",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M19.9975 5.99988L20.9975 4.99988",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M11.9975 5.99988L10.9975 4.99988",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]})]})}const su=Qa(),ou=Qa(),lu=t0();function Bf(e){const{previewSrc:n="",placeholder:t="",frameId:i,isPreview:a,language:r,code:o,iframeHeight:l=630}=e,u=`<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>tailwind</title>
      <script src="https://cdn.tailwindcss.com"><\/script>
    </head>
    <body>
      <!-- full content -->
    </body>
  </html>
  `.replace("<!-- full content -->",n).replace("{/* Your content */}",t).replace("<!-- Your content -->",t);return s.jsxs("div",{className:"col-span-2 row-start-2 min-w-0",children:[!!a&&s.jsxs(B.Fragment,{children:[s.jsx("div",{className:"mt-4 focus:outline-none",id:`headlessui-tabs-panel-${su}`,role:"tabpanel",tabIndex:"0","data-headlessui-state":"selected","aria-labelledby":`headlessui-tabs-tab-${su}`,children:s.jsxs("div",{id:i,className:"relative",style:{height:"auto"},children:[s.jsx("style",{children:`#${i} {
          height: ${l}px;
        }
        @media (min-width: 704px) {
          #${i} {
            height: ${l}px;
          }
        }`}),s.jsx("iframe",{className:"w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10",id:i,srcDoc:u}),s.jsx("div",{className:"absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex",children:s.jsx("div",{className:"h-8 w-1.5 rounded-full bg-slate-400"})})]})}),s.jsx("span",{id:`headlessui-tabs-panel-${lu}`,role:"tabpanel","aria-labelledby":`headlessui-tabs-tab-${lu}`,tabIndex:"-1",style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",whiteSpace:"nowrap",borderWidth:0}})]}),!a&&s.jsxs("div",{className:"mt-4 focus:outline-none",id:`headlessui-tabs-panel-${ou}`,role:"tabpanel","aria-labelledby":`headlessui-tabs-tab-${ou}`,tabIndex:"0","data-headlessui-state":"selected",children:[s.jsxs("div",{className:"flex space-x-2 rounded-t-lg border-b border-slate-700 bg-slate-800 px-2 text-sm leading-6 sm:hidden",children:[s.jsx("button",{type:"button",className:"-mb-px border-b border-sky-400 px-2 py-3 font-medium text-sky-400",children:"HTML"}),s.jsx("button",{type:"button",className:"-mb-px border-b border-transparent px-2 py-3 font-medium text-slate-400 hover:text-slate-300",children:"React"}),s.jsx("button",{type:"button",className:"-mb-px border-b border-transparent px-2 py-3 font-medium text-slate-400 hover:text-slate-300",children:"Vue"})]}),s.jsx("pre",{className:As("flex overflow-auto rounded-b-lg text-sm leading-[1.5714285714] text-white sm:rounded-t-lg",`language-${r}`),children:s.jsx("code",{className:"p-4",dangerouslySetInnerHTML:{__html:o}})})]})]})}var i0={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,o={},l={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function c(p){return p instanceof u?new u(p.type,c(p.content),p.alias):Array.isArray(p)?p.map(c):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(c){return Object.prototype.toString.call(c).slice(8,-1)},objId:function(c){return c.__id||Object.defineProperty(c,"__id",{value:++r}),c.__id},clone:function c(p,m){m=m||{};var k,g;switch(l.util.type(p)){case"Object":if(g=l.util.objId(p),m[g])return m[g];k={},m[g]=k;for(var w in p)p.hasOwnProperty(w)&&(k[w]=c(p[w],m));return k;case"Array":return g=l.util.objId(p),m[g]?m[g]:(k=[],m[g]=k,p.forEach(function(_,N){k[N]=c(_,m)}),k);default:return p}},getLanguage:function(c){for(;c;){var p=a.exec(c.className);if(p)return p[1].toLowerCase();c=c.parentElement}return"none"},setLanguage:function(c,p){c.className=c.className.replace(RegExp(a,"gi"),""),c.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var c=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(c){var p=document.getElementsByTagName("script");for(var m in p)if(p[m].src==c)return p[m]}return null}},isActive:function(c,p,m){for(var k="no-"+p;c;){var g=c.classList;if(g.contains(p))return!0;if(g.contains(k))return!1;c=c.parentElement}return!!m}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(c,p){var m=l.util.clone(l.languages[c]);for(var k in p)m[k]=p[k];return m},insertBefore:function(c,p,m,k){k=k||l.languages;var g=k[c],w={};for(var _ in g)if(g.hasOwnProperty(_)){if(_==p)for(var N in m)m.hasOwnProperty(N)&&(w[N]=m[N]);m.hasOwnProperty(_)||(w[_]=g[_])}var h=k[c];return k[c]=w,l.languages.DFS(l.languages,function(j,S){S===h&&j!=c&&(this[j]=w)}),w},DFS:function c(p,m,k,g){g=g||{};var w=l.util.objId;for(var _ in p)if(p.hasOwnProperty(_)){m.call(p,_,p[_],k||_);var N=p[_],h=l.util.type(N);h==="Object"&&!g[w(N)]?(g[w(N)]=!0,c(N,m,null,g)):h==="Array"&&!g[w(N)]&&(g[w(N)]=!0,c(N,m,_,g))}}},plugins:{},highlightAll:function(c,p){l.highlightAllUnder(document,c,p)},highlightAllUnder:function(c,p,m){var k={callback:m,container:c,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),l.hooks.run("before-all-elements-highlight",k);for(var g=0,w;w=k.elements[g++];)l.highlightElement(w,p===!0,k.callback)},highlightElement:function(c,p,m){var k=l.util.getLanguage(c),g=l.languages[k];l.util.setLanguage(c,k);var w=c.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(w,k);var _=c.textContent,N={element:c,language:k,grammar:g,code:_};function h(S){N.highlightedCode=S,l.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,l.hooks.run("after-highlight",N),l.hooks.run("complete",N),m&&m.call(N.element)}if(l.hooks.run("before-sanity-check",N),w=N.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!N.code){l.hooks.run("complete",N),m&&m.call(N.element);return}if(l.hooks.run("before-highlight",N),!N.grammar){h(l.util.encode(N.code));return}if(p&&i.Worker){var j=new Worker(l.filename);j.onmessage=function(S){h(S.data)},j.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else h(l.highlight(N.code,N.grammar,N.language))},highlight:function(c,p,m){var k={code:c,grammar:p,language:m};if(l.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=l.tokenize(k.code,k.grammar),l.hooks.run("after-tokenize",k),u.stringify(l.util.encode(k.tokens),k.language)},tokenize:function(c,p){var m=p.rest;if(m){for(var k in m)p[k]=m[k];delete p.rest}var g=new x;return b(g,g.head,c),y(c,g,p,g.head,0),M(g)},hooks:{all:{},add:function(c,p){var m=l.hooks.all;m[c]=m[c]||[],m[c].push(p)},run:function(c,p){var m=l.hooks.all[c];if(!(!m||!m.length))for(var k=0,g;g=m[k++];)g(p)}},Token:u};i.Prism=l;function u(c,p,m,k){this.type=c,this.content=p,this.alias=m,this.length=(k||"").length|0}u.stringify=function c(p,m){if(typeof p=="string")return p;if(Array.isArray(p)){var k="";return p.forEach(function(h){k+=c(h,m)}),k}var g={type:p.type,content:c(p.content,m),tag:"span",classes:["token",p.type],attributes:{},language:m},w=p.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(g.classes,w):g.classes.push(w)),l.hooks.run("wrap",g);var _="";for(var N in g.attributes)_+=" "+N+'="'+(g.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+_+">"+g.content+"</"+g.tag+">"};function f(c,p,m,k){c.lastIndex=p;var g=c.exec(m);if(g&&k&&g[1]){var w=g[1].length;g.index+=w,g[0]=g[0].slice(w)}return g}function y(c,p,m,k,g,w){for(var _ in m)if(!(!m.hasOwnProperty(_)||!m[_])){var N=m[_];N=Array.isArray(N)?N:[N];for(var h=0;h<N.length;++h){if(w&&w.cause==_+","+h)return;var j=N[h],S=j.inside,P=!!j.lookbehind,L=!!j.greedy,Y=j.alias;if(L&&!j.pattern.global){var U=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,U+"g")}for(var fe=j.pattern||j,D=k.next,O=g;D!==p.tail&&!(w&&O>=w.reach);O+=D.value.length,D=D.next){var z=D.value;if(p.length>c.length)return;if(!(z instanceof u)){var W=1,H;if(L){if(H=f(fe,O,c,P),!H||H.index>=c.length)break;var Ie=H.index,qn=H.index+H[0].length,ue=O;for(ue+=D.value.length;Ie>=ue;)D=D.next,ue+=D.value.length;if(ue-=D.value.length,O=ue,D.value instanceof u)continue;for(var Je=D;Je!==p.tail&&(ue<qn||typeof Je.value=="string");Je=Je.next)W++,ue+=Je.value.length;W--,z=c.slice(O,ue),H.index-=O}else if(H=f(fe,0,z,P),!H)continue;var Ie=H.index,Ze=H[0],Xa=z.slice(0,Ie),Ro=z.slice(Ie+Ze.length),Ga=O+z.length;w&&Ga>w.reach&&(w.reach=Ga);var xi=D.prev;Xa&&(xi=b(p,xi,Xa),O+=Xa.length),C(p,xi,W);var h0=new u(_,S?l.tokenize(Ze,S):Ze,Y,Ze);if(D=b(p,xi,h0),Ro&&b(p,D,Ro),W>1){var Ja={cause:_+","+h,reach:Ga};y(c,p,m,D.prev,O,Ja),w&&Ja.reach>w.reach&&(w.reach=Ja.reach)}}}}}}function x(){var c={value:null,prev:null,next:null},p={value:null,prev:c,next:null};c.next=p,this.head=c,this.tail=p,this.length=0}function b(c,p,m){var k=p.next,g={value:m,prev:p,next:k};return p.next=g,k.prev=g,c.length++,g}function C(c,p,m){for(var k=p.next,g=0;g<m&&k!==c.tail;g++)k=k.next;p.next=k,k.prev=p,c.length-=g}function M(c){for(var p=[],m=c.head.next;m!==c.tail;)p.push(m.value),m=m.next;return p}if(!i.document)return i.addEventListener&&(l.disableWorkerMessageHandler||i.addEventListener("message",function(c){var p=JSON.parse(c.data),m=p.language,k=p.code,g=p.immediateClose;i.postMessage(l.highlight(k,l.languages[m],m)),g&&i.close()},!1)),l;var T=l.util.currentScript();T&&(l.filename=T.src,T.hasAttribute("data-manual")&&(l.manual=!0));function v(){l.manual||l.highlightAll()}if(!l.manual){var d=document.readyState;d==="loading"||d==="interactive"&&T&&T.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return l}(n);e.exports&&(e.exports=t),typeof Fo<"u"&&(Fo.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(a,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var u={};u[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,a){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:t.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var r=i.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",a=function(T,v){return"✖ Error "+T+" while fetching file: "+v},r="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",u="loading",f="loaded",y="failed",x="pre[data-src]:not(["+l+'="'+f+'"]):not(['+l+'="'+u+'"])';function b(T,v,d){var c=new XMLHttpRequest;c.open("GET",T,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status<400&&c.responseText?v(c.responseText):c.status>=400?d(a(c.status,c.statusText)):d(r))},c.send(null)}function C(T){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(T||"");if(v){var d=Number(v[1]),c=v[2],p=v[3];return c?p?[d,Number(p)]:[d,void 0]:[d,d]}}t.hooks.add("before-highlightall",function(T){T.selector+=", "+x}),t.hooks.add("before-sanity-check",function(T){var v=T.element;if(v.matches(x)){T.code="",v.setAttribute(l,u);var d=v.appendChild(document.createElement("CODE"));d.textContent=i;var c=v.getAttribute("data-src"),p=T.language;if(p==="none"){var m=(/\.(\w+)$/.exec(c)||[,"none"])[1];p=o[m]||m}t.util.setLanguage(d,p),t.util.setLanguage(v,p);var k=t.plugins.autoloader;k&&k.loadLanguages(p),b(c,function(g){v.setAttribute(l,f);var w=C(v.getAttribute("data-range"));if(w){var _=g.split(/\r\n?|\n/g),N=w[0],h=w[1]==null?_.length:w[1];N<0&&(N+=_.length),N=Math.max(0,Math.min(N-1,_.length)),h<0&&(h+=_.length),h=Math.max(0,Math.min(h,_.length)),g=_.slice(N,h).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(N+1))}d.textContent=g,t.highlightElement(d)},function(g){v.setAttribute(l,y),d.textContent=g})}}),t.plugins.fileHighlight={highlight:function(v){for(var d=(v||document).querySelectorAll(x),c=0,p;p=d[c++];)t.highlightElement(p)}};var M=!1;t.fileHighlight=function(){M||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),M=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(i0);var Pf=i0.exports;const uu=Sa(Pf);(function(e){var n=e.util.clone(e.languages.javascript),t=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function r(u,f){return u=u.replace(/<S>/g,function(){return t}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return a}),RegExp(u,f)}a=r(a).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=r(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:r(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:r(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var o=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(o).join(""):""},l=function(u){for(var f=[],y=0;y<u.length;y++){var x=u[y],b=!1;if(typeof x!="string"&&(x.type==="tag"&&x.content[0]&&x.content[0].type==="tag"?x.content[0].content[0].content==="</"?f.length>0&&f[f.length-1].tagName===o(x.content[0].content[1])&&f.pop():x.content[x.content.length-1].content==="/>"||f.push({tagName:o(x.content[0].content[1]),openedBraces:0}):f.length>0&&x.type==="punctuation"&&x.content==="{"?f[f.length-1].openedBraces++:f.length>0&&f[f.length-1].openedBraces>0&&x.type==="punctuation"&&x.content==="}"?f[f.length-1].openedBraces--:b=!0),(b||typeof x=="string")&&f.length>0&&f[f.length-1].openedBraces===0){var C=o(x);y<u.length-1&&(typeof u[y+1]=="string"||u[y+1].type==="plain-text")&&(C+=o(u[y+1]),u.splice(y+1,1)),y>0&&(typeof u[y-1]=="string"||u[y-1].type==="plain-text")&&(C=o(u[y-1])+C,u.splice(y-1,1),y--),u[y]=new e.Token("plain-text",C,null,C)}x.content&&typeof x.content!="string"&&l(x.content)}};e.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||l(u.tokens)})})(Prism);var a0={exports:{}},Ot={},Pi={exports:{}},jr={},Cr={},cu;function Po(){if(cu)return Cr;cu=1;function e(i){this.__parent=i,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}e.prototype.clone_empty=function(){var i=new e(this.__parent);return i.set_indent(this.__indent_count,this.__alignment_count),i},e.prototype.item=function(i){return i<0?this.__items[this.__items.length+i]:this.__items[i]},e.prototype.has_match=function(i){for(var a=this.__items.length-1;a>=0;a--)if(this.__items[a].match(i))return!0;return!1},e.prototype.set_indent=function(i,a){this.is_empty()&&(this.__indent_count=i||0,this.__alignment_count=a||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},e.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},e.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},e.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var i=this.__parent.current_line;return i.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),i.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),i.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count,i.__items[0]===" "&&(i.__items.splice(0,1),i.__character_count-=1),!0}return!1},e.prototype.is_empty=function(){return this.__items.length===0},e.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},e.prototype.push=function(i){this.__items.push(i);var a=i.lastIndexOf(`
`);a!==-1?this.__character_count=i.length-a:this.__character_count+=i.length},e.prototype.pop=function(){var i=null;return this.is_empty()||(i=this.__items.pop(),this.__character_count-=i.length),i},e.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},e.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},e.prototype.trim=function(){for(;this.last()===" ";)this.__items.pop(),this.__character_count-=1},e.prototype.toString=function(){var i="";return this.is_empty()?this.__parent.indent_empty_lines&&(i=this.__parent.get_indent_string(this.__indent_count)):(i=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),i+=this.__items.join("")),i};function n(i,a){this.__cache=[""],this.__indent_size=i.indent_size,this.__indent_string=i.indent_char,i.indent_with_tabs||(this.__indent_string=new Array(i.indent_size+1).join(i.indent_char)),a=a||"",i.indent_level>0&&(a=new Array(i.indent_level+1).join(this.__indent_string)),this.__base_string=a,this.__base_string_length=a.length}n.prototype.get_indent_size=function(i,a){var r=this.__base_string_length;return a=a||0,i<0&&(r=0),r+=i*this.__indent_size,r+=a,r},n.prototype.get_indent_string=function(i,a){var r=this.__base_string;return a=a||0,i<0&&(i=0,r=""),a+=i*this.__indent_size,this.__ensure_cache(a),r+=this.__cache[a],r},n.prototype.__ensure_cache=function(i){for(;i>=this.__cache.length;)this.__add_column()},n.prototype.__add_column=function(){var i=this.__cache.length,a=0,r="";this.__indent_size&&i>=this.__indent_size&&(a=Math.floor(i/this.__indent_size),i-=a*this.__indent_size,r=new Array(a+1).join(this.__indent_string)),i&&(r+=new Array(i+1).join(" ")),this.__cache.push(r)};function t(i,a){this.__indent_cache=new n(i,a),this.raw=!1,this._end_with_newline=i.end_with_newline,this.indent_size=i.indent_size,this.wrap_line_length=i.wrap_line_length,this.indent_empty_lines=i.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new e(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}return t.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},t.prototype.get_line_number=function(){return this.__lines.length},t.prototype.get_indent_string=function(i,a){return this.__indent_cache.get_indent_string(i,a)},t.prototype.get_indent_size=function(i,a){return this.__indent_cache.get_indent_size(i,a)},t.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},t.prototype.add_new_line=function(i){return this.is_empty()||!i&&this.just_added_newline()?!1:(this.raw||this.__add_outputline(),!0)},t.prototype.get_code=function(i){this.trim(!0);var a=this.current_line.pop();a&&(a[a.length-1]===`
`&&(a=a.replace(/\n+$/g,"")),this.current_line.push(a)),this._end_with_newline&&this.__add_outputline();var r=this.__lines.join(`
`);return i!==`
`&&(r=r.replace(/[\n]/g,i)),r},t.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},t.prototype.set_indent=function(i,a){return i=i||0,a=a||0,this.next_line.set_indent(i,a),this.__lines.length>1?(this.current_line.set_indent(i,a),!0):(this.current_line.set_indent(),!1)},t.prototype.add_raw_token=function(i){for(var a=0;a<i.newlines;a++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(i.whitespace_before),this.current_line.push(i.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},t.prototype.add_token=function(i){this.__add_space_before_token(),this.current_line.push(i),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},t.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},t.prototype.remove_indent=function(i){for(var a=this.__lines.length;i<a;)this.__lines[i]._remove_indent(),i++;this.current_line._remove_wrap_indent()},t.prototype.trim=function(i){for(i=i===void 0?!1:i,this.current_line.trim();i&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},t.prototype.just_added_newline=function(){return this.current_line.is_empty()},t.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},t.prototype.ensure_empty_line_above=function(i,a){for(var r=this.__lines.length-2;r>=0;){var o=this.__lines[r];if(o.is_empty())break;if(o.item(0).indexOf(i)!==0&&o.item(-1)!==a){this.__lines.splice(r+1,0,new e(this)),this.previous_line=this.__lines[this.__lines.length-2];break}r--}},Cr.Output=t,Cr}var Tr={},du;function r0(){if(du)return Tr;du=1;function e(n,t,i,a){this.type=n,this.text=t,this.comments_before=null,this.newlines=i||0,this.whitespace_before=a||"",this.parent=null,this.next=null,this.previous=null,this.opened=null,this.closed=null,this.directives=null}return Tr.Token=e,Tr}var Sr={},hu;function s0(){return hu||(hu=1,function(e){var n="\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a",t="\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a",i="\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",a="\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f",r="\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}",o="(?:"+r+"|["+n+i+"])",l="(?:"+r+"|["+t+i+a+"])*";e.identifier=new RegExp(o+l,"g"),e.identifierStart=new RegExp(o),e.identifierMatch=new RegExp("(?:"+r+"|["+t+i+a+"])+"),e.newline=/[\n\r\u2028\u2029]/,e.lineBreak=new RegExp(`\r
|`+e.newline.source),e.allLineBreaks=new RegExp(e.lineBreak.source,"g")}(Sr)),Sr}var Mr={},Bt={},pu;function Ao(){if(pu)return Bt;pu=1;function e(i,a){this.raw_options=n(i,a),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs",this.indent_char==="	"),this.indent_with_tabs&&(this.indent_char="	",this.indent_size===1&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","django","erb","handlebars","php","smarty"],["auto"])}e.prototype._get_array=function(i,a){var r=this.raw_options[i],o=a||[];return typeof r=="object"?r!==null&&typeof r.concat=="function"&&(o=r.concat()):typeof r=="string"&&(o=r.split(/[^a-zA-Z0-9_\/\-]+/)),o},e.prototype._get_boolean=function(i,a){var r=this.raw_options[i],o=r===void 0?!!a:!!r;return o},e.prototype._get_characters=function(i,a){var r=this.raw_options[i],o=a||"";return typeof r=="string"&&(o=r.replace(/\\r/,"\r").replace(/\\n/,`
`).replace(/\\t/,"	")),o},e.prototype._get_number=function(i,a){var r=this.raw_options[i];a=parseInt(a,10),isNaN(a)&&(a=0);var o=parseInt(r,10);return isNaN(o)&&(o=a),o},e.prototype._get_selection=function(i,a,r){var o=this._get_selection_list(i,a,r);if(o.length!==1)throw new Error("Invalid Option Value: The option '"+i+`' can only be one of the following values:
`+a+`
You passed in: '`+this.raw_options[i]+"'");return o[0]},e.prototype._get_selection_list=function(i,a,r){if(!a||a.length===0)throw new Error("Selection list cannot be empty.");if(r=r||[a[0]],!this._is_valid_selection(r,a))throw new Error("Invalid Default Value!");var o=this._get_array(i,r);if(!this._is_valid_selection(o,a))throw new Error("Invalid Option Value: The option '"+i+`' can contain only the following values:
`+a+`
You passed in: '`+this.raw_options[i]+"'");return o},e.prototype._is_valid_selection=function(i,a){return i.length&&a.length&&!i.some(function(r){return a.indexOf(r)===-1})};function n(i,a){var r={};i=t(i);var o;for(o in i)o!==a&&(r[o]=i[o]);if(a&&i[a])for(o in i[a])r[o]=i[a][o];return r}function t(i){var a={},r;for(r in i){var o=r.replace(/-/g,"_");a[o]=i[r]}return a}return Bt.Options=e,Bt.normalizeOpts=t,Bt.mergeOpts=n,Bt}var fu;function o0(){if(fu)return Mr;fu=1;var e=Ao().Options,n=["before-newline","after-newline","preserve-newline"];function t(i){e.call(this,i,"js");var a=this.raw_options.brace_style||null;a==="expand-strict"?this.raw_options.brace_style="expand":a==="collapse-preserve-inline"?this.raw_options.brace_style="collapse,preserve-inline":this.raw_options.braces_on_own_line!==void 0&&(this.raw_options.brace_style=this.raw_options.braces_on_own_line?"expand":"collapse");var r=this._get_selection_list("brace_style",["collapse","expand","end-expand","none","preserve-inline"]);this.brace_preserve_inline=!1,this.brace_style="collapse";for(var o=0;o<r.length;o++)r[o]==="preserve-inline"?this.brace_preserve_inline=!0:this.brace_style=r[o];this.unindent_chained_methods=this._get_boolean("unindent_chained_methods"),this.break_chained_methods=this._get_boolean("break_chained_methods"),this.space_in_paren=this._get_boolean("space_in_paren"),this.space_in_empty_paren=this._get_boolean("space_in_empty_paren"),this.jslint_happy=this._get_boolean("jslint_happy"),this.space_after_anon_function=this._get_boolean("space_after_anon_function"),this.space_after_named_function=this._get_boolean("space_after_named_function"),this.keep_array_indentation=this._get_boolean("keep_array_indentation"),this.space_before_conditional=this._get_boolean("space_before_conditional",!0),this.unescape_strings=this._get_boolean("unescape_strings"),this.e4x=this._get_boolean("e4x"),this.comma_first=this._get_boolean("comma_first"),this.operator_position=this._get_selection("operator_position",n),this.test_output_raw=this._get_boolean("test_output_raw"),this.jslint_happy&&(this.space_after_anon_function=!0)}return t.prototype=new e,Mr.Options=t,Mr}var Kn={},Er={},mu;function zo(){if(mu)return Er;mu=1;var e=RegExp.prototype.hasOwnProperty("sticky");function n(t){this.__input=t||"",this.__input_length=this.__input.length,this.__position=0}return n.prototype.restart=function(){this.__position=0},n.prototype.back=function(){this.__position>0&&(this.__position-=1)},n.prototype.hasNext=function(){return this.__position<this.__input_length},n.prototype.next=function(){var t=null;return this.hasNext()&&(t=this.__input.charAt(this.__position),this.__position+=1),t},n.prototype.peek=function(t){var i=null;return t=t||0,t+=this.__position,t>=0&&t<this.__input_length&&(i=this.__input.charAt(t)),i},n.prototype.__match=function(t,i){t.lastIndex=i;var a=t.exec(this.__input);return a&&!(e&&t.sticky)&&a.index!==i&&(a=null),a},n.prototype.test=function(t,i){return i=i||0,i+=this.__position,i>=0&&i<this.__input_length?!!this.__match(t,i):!1},n.prototype.testChar=function(t,i){var a=this.peek(i);return t.lastIndex=0,a!==null&&t.test(a)},n.prototype.match=function(t){var i=this.__match(t,this.__position);return i?this.__position+=i[0].length:i=null,i},n.prototype.read=function(t,i,a){var r="",o;return t&&(o=this.match(t),o&&(r+=o[0])),i&&(o||!t)&&(r+=this.readUntil(i,a)),r},n.prototype.readUntil=function(t,i){var a="",r=this.__position;t.lastIndex=this.__position;var o=t.exec(this.__input);return o?(r=o.index,i&&(r+=o[0].length)):r=this.__input_length,a=this.__input.substring(this.__position,r),this.__position=r,a},n.prototype.readUntilAfter=function(t){return this.readUntil(t,!0)},n.prototype.get_regexp=function(t,i){var a=null,r="g";return i&&e&&(r="y"),typeof t=="string"&&t!==""?a=new RegExp(t,r):t&&(a=new RegExp(t.source,r)),a},n.prototype.get_literal_regexp=function(t){return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},n.prototype.peekUntilAfter=function(t){var i=this.__position,a=this.readUntilAfter(t);return this.__position=i,a},n.prototype.lookBack=function(t){var i=this.__position-1;return i>=t.length&&this.__input.substring(i-t.length,i).toLowerCase()===t},Er.InputScanner=n,Er}var Ai={},Dr={},gu;function Af(){if(gu)return Dr;gu=1;function e(n){this.__tokens=[],this.__tokens_length=this.__tokens.length,this.__position=0,this.__parent_token=n}return e.prototype.restart=function(){this.__position=0},e.prototype.isEmpty=function(){return this.__tokens_length===0},e.prototype.hasNext=function(){return this.__position<this.__tokens_length},e.prototype.next=function(){var n=null;return this.hasNext()&&(n=this.__tokens[this.__position],this.__position+=1),n},e.prototype.peek=function(n){var t=null;return n=n||0,n+=this.__position,n>=0&&n<this.__tokens_length&&(t=this.__tokens[n]),t},e.prototype.add=function(n){this.__parent_token&&(n.parent=this.__parent_token),this.__tokens.push(n),this.__tokens_length+=1},Dr.TokenStream=e,Dr}var Ir={},Or={},xu;function Ka(){if(xu)return Or;xu=1;function e(n,t){this._input=n,this._starting_pattern=null,this._match_pattern=null,this._until_pattern=null,this._until_after=!1,t&&(this._starting_pattern=this._input.get_regexp(t._starting_pattern,!0),this._match_pattern=this._input.get_regexp(t._match_pattern,!0),this._until_pattern=this._input.get_regexp(t._until_pattern),this._until_after=t._until_after)}return e.prototype.read=function(){var n=this._input.read(this._starting_pattern);return(!this._starting_pattern||n)&&(n+=this._input.read(this._match_pattern,this._until_pattern,this._until_after)),n},e.prototype.read_match=function(){return this._input.match(this._match_pattern)},e.prototype.until_after=function(n){var t=this._create();return t._until_after=!0,t._until_pattern=this._input.get_regexp(n),t._update(),t},e.prototype.until=function(n){var t=this._create();return t._until_after=!1,t._until_pattern=this._input.get_regexp(n),t._update(),t},e.prototype.starting_with=function(n){var t=this._create();return t._starting_pattern=this._input.get_regexp(n,!0),t._update(),t},e.prototype.matching=function(n){var t=this._create();return t._match_pattern=this._input.get_regexp(n,!0),t._update(),t},e.prototype._create=function(){return new e(this._input,this)},e.prototype._update=function(){},Or.Pattern=e,Or}var vu;function zf(){if(vu)return Ir;vu=1;var e=Ka().Pattern;function n(t,i){e.call(this,t,i),i?this._line_regexp=this._input.get_regexp(i._line_regexp):this.__set_whitespace_patterns("",""),this.newline_count=0,this.whitespace_before_token=""}return n.prototype=new e,n.prototype.__set_whitespace_patterns=function(t,i){t+="\\t ",i+="\\n\\r",this._match_pattern=this._input.get_regexp("["+t+i+"]+",!0),this._newline_regexp=this._input.get_regexp("\\r\\n|["+i+"]")},n.prototype.read=function(){this.newline_count=0,this.whitespace_before_token="";var t=this._input.read(this._match_pattern);if(t===" ")this.whitespace_before_token=" ";else if(t){var i=this.__split(this._newline_regexp,t);this.newline_count=i.length-1,this.whitespace_before_token=i[this.newline_count]}return t},n.prototype.matching=function(t,i){var a=this._create();return a.__set_whitespace_patterns(t,i),a._update(),a},n.prototype._create=function(){return new n(this._input,this)},n.prototype.__split=function(t,i){t.lastIndex=0;for(var a=0,r=[],o=t.exec(i);o;)r.push(i.substring(a,o.index)),a=o.index+o[0].length,o=t.exec(i);return a<i.length?r.push(i.substring(a,i.length)):r.push(""),r},Ir.WhitespacePattern=n,Ir}var yu;function Ta(){if(yu)return Ai;yu=1;var e=zo().InputScanner,n=r0().Token,t=Af().TokenStream,i=zf().WhitespacePattern,a={START:"TK_START",RAW:"TK_RAW",EOF:"TK_EOF"},r=function(o,l){this._input=new e(o),this._options=l||{},this.__tokens=null,this._patterns={},this._patterns.whitespace=new i(this._input)};return r.prototype.tokenize=function(){this._input.restart(),this.__tokens=new t,this._reset();for(var o,l=new n(a.START,""),u=null,f=[],y=new t;l.type!==a.EOF;){for(o=this._get_next_token(l,u);this._is_comment(o);)y.add(o),o=this._get_next_token(l,u);y.isEmpty()||(o.comments_before=y,y=new t),o.parent=u,this._is_opening(o)?(f.push(u),u=o):u&&this._is_closing(o,u)&&(o.opened=u,u.closed=o,u=f.pop(),o.parent=u),o.previous=l,l.next=o,this.__tokens.add(o),l=o}return this.__tokens},r.prototype._is_first_token=function(){return this.__tokens.isEmpty()},r.prototype._reset=function(){},r.prototype._get_next_token=function(o,l){this._readWhitespace();var u=this._input.read(/.+/g);return u?this._create_token(a.RAW,u):this._create_token(a.EOF,"")},r.prototype._is_comment=function(o){return!1},r.prototype._is_opening=function(o){return!1},r.prototype._is_closing=function(o,l){return!1},r.prototype._create_token=function(o,l){var u=new n(o,l,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token);return u},r.prototype._readWhitespace=function(){return this._patterns.whitespace.read()},Ai.Tokenizer=r,Ai.TOKEN=a,Ai}var Br={},bu;function Lo(){if(bu)return Br;bu=1;function e(n,t){n=typeof n=="string"?n:n.source,t=typeof t=="string"?t:t.source,this.__directives_block_pattern=new RegExp(n+/ beautify( \w+[:]\w+)+ /.source+t,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(n+/\sbeautify\signore:end\s/.source+t,"g")}return e.prototype.get_directives=function(n){if(!n.match(this.__directives_block_pattern))return null;var t={};this.__directive_pattern.lastIndex=0;for(var i=this.__directive_pattern.exec(n);i;)t[i[1]]=i[2],i=this.__directive_pattern.exec(n);return t},e.prototype.readIgnored=function(n){return n.readUntilAfter(this.__directives_end_ignore_pattern)},Br.Directives=e,Br}var Pr={},_u;function l0(){if(_u)return Pr;_u=1;var e=Ka().Pattern,n={django:!1,erb:!1,handlebars:!1,php:!1,smarty:!1};function t(i,a){e.call(this,i,a),this.__template_pattern=null,this._disabled=Object.assign({},n),this._excluded=Object.assign({},n),a&&(this.__template_pattern=this._input.get_regexp(a.__template_pattern),this._excluded=Object.assign(this._excluded,a._excluded),this._disabled=Object.assign(this._disabled,a._disabled));var r=new e(i);this.__patterns={handlebars_comment:r.starting_with(/{{!--/).until_after(/--}}/),handlebars_unescaped:r.starting_with(/{{{/).until_after(/}}}/),handlebars:r.starting_with(/{{/).until_after(/}}/),php:r.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),erb:r.starting_with(/<%[^%]/).until_after(/[^%]%>/),django:r.starting_with(/{%/).until_after(/%}/),django_value:r.starting_with(/{{/).until_after(/}}/),django_comment:r.starting_with(/{#/).until_after(/#}/),smarty:r.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),smarty_comment:r.starting_with(/{\*/).until_after(/\*}/),smarty_literal:r.starting_with(/{literal}/).until_after(/{\/literal}/)}}return t.prototype=new e,t.prototype._create=function(){return new t(this._input,this)},t.prototype._update=function(){this.__set_templated_pattern()},t.prototype.disable=function(i){var a=this._create();return a._disabled[i]=!0,a._update(),a},t.prototype.read_options=function(i){var a=this._create();for(var r in n)a._disabled[r]=i.templating.indexOf(r)===-1;return a._update(),a},t.prototype.exclude=function(i){var a=this._create();return a._excluded[i]=!0,a._update(),a},t.prototype.read=function(){var i="";this._match_pattern?i=this._input.read(this._starting_pattern):i=this._input.read(this._starting_pattern,this.__template_pattern);for(var a=this._read_template();a;)this._match_pattern?a+=this._input.read(this._match_pattern):a+=this._input.readUntil(this.__template_pattern),i+=a,a=this._read_template();return this._until_after&&(i+=this._input.readUntilAfter(this._until_pattern)),i},t.prototype.__set_templated_pattern=function(){var i=[];this._disabled.php||i.push(this.__patterns.php._starting_pattern.source),this._disabled.handlebars||i.push(this.__patterns.handlebars._starting_pattern.source),this._disabled.erb||i.push(this.__patterns.erb._starting_pattern.source),this._disabled.django||(i.push(this.__patterns.django._starting_pattern.source),i.push(this.__patterns.django_value._starting_pattern.source),i.push(this.__patterns.django_comment._starting_pattern.source)),this._disabled.smarty||i.push(this.__patterns.smarty._starting_pattern.source),this._until_pattern&&i.push(this._until_pattern.source),this.__template_pattern=this._input.get_regexp("(?:"+i.join("|")+")")},t.prototype._read_template=function(){var i="",a=this._input.peek();if(a==="<"){var r=this._input.peek(1);!this._disabled.php&&!this._excluded.php&&r==="?"&&(i=i||this.__patterns.php.read()),!this._disabled.erb&&!this._excluded.erb&&r==="%"&&(i=i||this.__patterns.erb.read())}else a==="{"&&(!this._disabled.handlebars&&!this._excluded.handlebars&&(i=i||this.__patterns.handlebars_comment.read(),i=i||this.__patterns.handlebars_unescaped.read(),i=i||this.__patterns.handlebars.read()),this._disabled.django||(!this._excluded.django&&!this._excluded.handlebars&&(i=i||this.__patterns.django_value.read()),this._excluded.django||(i=i||this.__patterns.django_comment.read(),i=i||this.__patterns.django.read())),this._disabled.smarty||this._disabled.django&&this._disabled.handlebars&&(i=i||this.__patterns.smarty_comment.read(),i=i||this.__patterns.smarty_literal.read(),i=i||this.__patterns.smarty.read()));return i},Pr.TemplatablePattern=t,Pr}var wu;function zi(){if(wu)return Kn;wu=1;var e=zo().InputScanner,n=Ta().Tokenizer,t=Ta().TOKEN,i=Lo().Directives,a=s0(),r=Ka().Pattern,o=l0().TemplatablePattern;function l(g,w){return w.indexOf(g)!==-1}var u={START_EXPR:"TK_START_EXPR",END_EXPR:"TK_END_EXPR",START_BLOCK:"TK_START_BLOCK",END_BLOCK:"TK_END_BLOCK",WORD:"TK_WORD",RESERVED:"TK_RESERVED",SEMICOLON:"TK_SEMICOLON",STRING:"TK_STRING",EQUALS:"TK_EQUALS",OPERATOR:"TK_OPERATOR",COMMA:"TK_COMMA",BLOCK_COMMENT:"TK_BLOCK_COMMENT",COMMENT:"TK_COMMENT",DOT:"TK_DOT",UNKNOWN:"TK_UNKNOWN",START:t.START,RAW:t.RAW,EOF:t.EOF},f=new i(/\/\*/,/\*\//),y=/0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,x=/[0-9]/,b=/[^\d\.]/,C=">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "),M=">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";M=M.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),M="\\?\\.(?!\\d) "+M,M=M.replace(/ /g,"|");var T=new RegExp(M),v="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","),d=v.concat(["do","in","of","else","get","set","new","catch","finally","typeof","yield","async","await","from","as","class","extends"]),c=new RegExp("^(?:"+d.join("|")+")$"),p,m=function(g,w){n.call(this,g,w),this._patterns.whitespace=this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,/\u2028\u2029/.source);var _=new r(this._input),N=new o(this._input).read_options(this._options);this.__patterns={template:N,identifier:N.starting_with(a.identifier).matching(a.identifierMatch),number:_.matching(y),punct:_.matching(T),comment:_.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),block_comment:_.starting_with(/\/\*/).until_after(/\*\//),html_comment_start:_.matching(/<!--/),html_comment_end:_.matching(/-->/),include:_.starting_with(/#include/).until_after(a.lineBreak),shebang:_.starting_with(/#!/).until_after(a.lineBreak),xml:_.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),single_quote:N.until(/['\\\n\r\u2028\u2029]/),double_quote:N.until(/["\\\n\r\u2028\u2029]/),template_text:N.until(/[`\\$]/),template_expression:N.until(/[`}\\]/)}};m.prototype=new n,m.prototype._is_comment=function(g){return g.type===u.COMMENT||g.type===u.BLOCK_COMMENT||g.type===u.UNKNOWN},m.prototype._is_opening=function(g){return g.type===u.START_BLOCK||g.type===u.START_EXPR},m.prototype._is_closing=function(g,w){return(g.type===u.END_BLOCK||g.type===u.END_EXPR)&&w&&(g.text==="]"&&w.text==="["||g.text===")"&&w.text==="("||g.text==="}"&&w.text==="{")},m.prototype._reset=function(){p=!1},m.prototype._get_next_token=function(g,w){var _=null;this._readWhitespace();var N=this._input.peek();return N===null?this._create_token(u.EOF,""):(_=_||this._read_non_javascript(N),_=_||this._read_string(N),_=_||this._read_pair(N,this._input.peek(1)),_=_||this._read_word(g),_=_||this._read_singles(N),_=_||this._read_comment(N),_=_||this._read_regexp(N,g),_=_||this._read_xml(N,g),_=_||this._read_punctuation(),_=_||this._create_token(u.UNKNOWN,this._input.next()),_)},m.prototype._read_word=function(g){var w;if(w=this.__patterns.identifier.read(),w!=="")return w=w.replace(a.allLineBreaks,`
`),!(g.type===u.DOT||g.type===u.RESERVED&&(g.text==="set"||g.text==="get"))&&c.test(w)?(w==="in"||w==="of")&&(g.type===u.WORD||g.type===u.STRING)?this._create_token(u.OPERATOR,w):this._create_token(u.RESERVED,w):this._create_token(u.WORD,w);if(w=this.__patterns.number.read(),w!=="")return this._create_token(u.WORD,w)},m.prototype._read_singles=function(g){var w=null;return g==="("||g==="["?w=this._create_token(u.START_EXPR,g):g===")"||g==="]"?w=this._create_token(u.END_EXPR,g):g==="{"?w=this._create_token(u.START_BLOCK,g):g==="}"?w=this._create_token(u.END_BLOCK,g):g===";"?w=this._create_token(u.SEMICOLON,g):g==="."&&b.test(this._input.peek(1))?w=this._create_token(u.DOT,g):g===","&&(w=this._create_token(u.COMMA,g)),w&&this._input.next(),w},m.prototype._read_pair=function(g,w){var _=null;return g==="#"&&w==="{"&&(_=this._create_token(u.START_BLOCK,g+w)),_&&(this._input.next(),this._input.next()),_},m.prototype._read_punctuation=function(){var g=this.__patterns.punct.read();if(g!=="")return g==="="?this._create_token(u.EQUALS,g):g==="?."?this._create_token(u.DOT,g):this._create_token(u.OPERATOR,g)},m.prototype._read_non_javascript=function(g){var w="";if(g==="#"){if(this._is_first_token()&&(w=this.__patterns.shebang.read(),w))return this._create_token(u.UNKNOWN,w.trim()+`
`);if(w=this.__patterns.include.read(),w)return this._create_token(u.UNKNOWN,w.trim()+`
`);g=this._input.next();var _="#";if(this._input.hasNext()&&this._input.testChar(x)){do g=this._input.next(),_+=g;while(this._input.hasNext()&&g!=="#"&&g!=="=");return g==="#"||(this._input.peek()==="["&&this._input.peek(1)==="]"?(_+="[]",this._input.next(),this._input.next()):this._input.peek()==="{"&&this._input.peek(1)==="}"&&(_+="{}",this._input.next(),this._input.next())),this._create_token(u.WORD,_)}this._input.back()}else if(g==="<"&&this._is_first_token()){if(w=this.__patterns.html_comment_start.read(),w){for(;this._input.hasNext()&&!this._input.testChar(a.newline);)w+=this._input.next();return p=!0,this._create_token(u.COMMENT,w)}}else if(p&&g==="-"&&(w=this.__patterns.html_comment_end.read(),w))return p=!1,this._create_token(u.COMMENT,w);return null},m.prototype._read_comment=function(g){var w=null;if(g==="/"){var _="";if(this._input.peek(1)==="*"){_=this.__patterns.block_comment.read();var N=f.get_directives(_);N&&N.ignore==="start"&&(_+=f.readIgnored(this._input)),_=_.replace(a.allLineBreaks,`
`),w=this._create_token(u.BLOCK_COMMENT,_),w.directives=N}else this._input.peek(1)==="/"&&(_=this.__patterns.comment.read(),w=this._create_token(u.COMMENT,_))}return w},m.prototype._read_string=function(g){if(g==="`"||g==="'"||g==='"'){var w=this._input.next();return this.has_char_escapes=!1,g==="`"?w+=this._read_string_recursive("`",!0,"${"):w+=this._read_string_recursive(g),this.has_char_escapes&&this._options.unescape_strings&&(w=k(w)),this._input.peek()===g&&(w+=this._input.next()),w=w.replace(a.allLineBreaks,`
`),this._create_token(u.STRING,w)}return null},m.prototype._allow_regexp_or_xml=function(g){return g.type===u.RESERVED&&l(g.text,["return","case","throw","else","do","typeof","yield"])||g.type===u.END_EXPR&&g.text===")"&&g.opened.previous.type===u.RESERVED&&l(g.opened.previous.text,["if","while","for"])||l(g.type,[u.COMMENT,u.START_EXPR,u.START_BLOCK,u.START,u.END_BLOCK,u.OPERATOR,u.EQUALS,u.EOF,u.SEMICOLON,u.COMMA])},m.prototype._read_regexp=function(g,w){if(g==="/"&&this._allow_regexp_or_xml(w)){for(var _=this._input.next(),N=!1,h=!1;this._input.hasNext()&&(N||h||this._input.peek()!==g)&&!this._input.testChar(a.newline);)_+=this._input.peek(),N?N=!1:(N=this._input.peek()==="\\",this._input.peek()==="["?h=!0:this._input.peek()==="]"&&(h=!1)),this._input.next();return this._input.peek()===g&&(_+=this._input.next(),_+=this._input.read(a.identifier)),this._create_token(u.STRING,_)}return null},m.prototype._read_xml=function(g,w){if(this._options.e4x&&g==="<"&&this._allow_regexp_or_xml(w)){var _="",N=this.__patterns.xml.read_match();if(N){for(var h=N[2].replace(/^{\s+/,"{").replace(/\s+}$/,"}"),j=h.indexOf("{")===0,S=0;N;){var P=!!N[1],L=N[2],Y=!!N[N.length-1]||L.slice(0,8)==="![CDATA[";if(!Y&&(L===h||j&&L.replace(/^{\s+/,"{").replace(/\s+}$/,"}"))&&(P?--S:++S),_+=N[0],S<=0)break;N=this.__patterns.xml.read_match()}return N||(_+=this._input.match(/[\s\S]*/g)[0]),_=_.replace(a.allLineBreaks,`
`),this._create_token(u.STRING,_)}}return null};function k(g){for(var w="",_=0,N=new e(g),h=null;N.hasNext();)if(h=N.match(/([\s]|[^\\]|\\\\)+/g),h&&(w+=h[0]),N.peek()==="\\"){if(N.next(),N.peek()==="x")h=N.match(/x([0-9A-Fa-f]{2})/g);else if(N.peek()==="u")h=N.match(/u([0-9A-Fa-f]{4})/g),h||(h=N.match(/u\{([0-9A-Fa-f]+)\}/g));else{w+="\\",N.hasNext()&&(w+=N.next());continue}if(!h||(_=parseInt(h[1],16),_>126&&_<=255&&h[0].indexOf("x")===0))return g;_>=0&&_<32||_>1114111?w+="\\"+h[0]:_===34||_===39||_===92?w+="\\"+String.fromCharCode(_):w+=String.fromCharCode(_)}return w}return m.prototype._read_string_recursive=function(g,w,_){var N,h;g==="'"?h=this.__patterns.single_quote:g==='"'?h=this.__patterns.double_quote:g==="`"?h=this.__patterns.template_text:g==="}"&&(h=this.__patterns.template_expression);for(var j=h.read(),S="";this._input.hasNext();){if(S=this._input.next(),S===g||!w&&a.newline.test(S)){this._input.back();break}else S==="\\"&&this._input.hasNext()?(N=this._input.peek(),N==="x"||N==="u"?this.has_char_escapes=!0:N==="\r"&&this._input.peek(1)===`
`&&this._input.next(),S+=this._input.next()):_&&(_==="${"&&S==="$"&&this._input.peek()==="{"&&(S+=this._input.next()),_===S&&(g==="`"?S+=this._read_string_recursive("}",w,"`"):S+=this._read_string_recursive("`",w,"${"),this._input.hasNext()&&(S+=this._input.next())));S+=h.read(),j+=S}return j},Kn.Tokenizer=m,Kn.TOKEN=u,Kn.positionable_operators=C.slice(),Kn.line_starters=v.slice(),Kn}var ku;function Lf(){if(ku)return jr;ku=1;var e=Po().Output,n=r0().Token,t=s0(),i=o0().Options,a=zi().Tokenizer,r=zi().line_starters,o=zi().positionable_operators,l=zi().TOKEN;function u(h,j){return j.indexOf(h)!==-1}function f(h){return h.replace(/^\s+/g,"")}function y(h){for(var j={},S=0;S<h.length;S++)j[h[S].replace(/-/g,"_")]=h[S];return j}function x(h,j){return h&&h.type===l.RESERVED&&h.text===j}function b(h,j){return h&&h.type===l.RESERVED&&u(h.text,j)}var C=["case","return","do","if","throw","else","await","break","continue","async"],M=["before-newline","after-newline","preserve-newline"],T=y(M),v=[T.before_newline,T.preserve_newline],d={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"};function c(h,j){j.multiline_frame||j.mode===d.ForInitializer||j.mode===d.Conditional||h.remove_indent(j.start_line_index)}function p(h){h=h.replace(t.allLineBreaks,`
`);for(var j=[],S=h.indexOf(`
`);S!==-1;)j.push(h.substring(0,S)),h=h.substring(S+1),S=h.indexOf(`
`);return h.length&&j.push(h),j}function m(h){return h===d.ArrayLiteral}function k(h){return u(h,[d.Expression,d.ForInitializer,d.Conditional])}function g(h,j){for(var S=0;S<h.length;S++){var P=h[S].trim();if(P.charAt(0)!==j)return!1}return!0}function w(h,j){for(var S=0,P=h.length,L;S<P;S++)if(L=h[S],L&&L.indexOf(j)!==0)return!1;return!0}function _(h,j){j=j||{},this._source_text=h||"",this._output=null,this._tokens=null,this._last_last_text=null,this._flags=null,this._previous_flags=null,this._flag_store=null,this._options=new i(j)}_.prototype.create_flags=function(h,j){var S=0;h&&(S=h.indentation_level,!this._output.just_added_newline()&&h.line_indent_level>S&&(S=h.line_indent_level));var P={mode:j,parent:h,last_token:h?h.last_token:new n(l.START_BLOCK,""),last_word:h?h.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,inline_frame:!1,if_block:!1,else_block:!1,class_start_block:!1,do_block:!1,do_while:!1,import_block:!1,in_case_statement:!1,in_case:!1,case_body:!1,case_block:!1,indentation_level:S,alignment:0,line_indent_level:h?h.line_indent_level:S,start_line_index:this._output.get_line_number(),ternary_depth:0};return P},_.prototype._reset=function(h){var j=h.match(/^[\t ]*/)[0];this._last_last_text="",this._output=new e(this._options,j),this._output.raw=this._options.test_output_raw,this._flag_store=[],this.set_mode(d.BlockStatement);var S=new a(h,this._options);return this._tokens=S.tokenize(),h},_.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var h,j=this._reset(this._source_text),S=this._options.eol;this._options.eol==="auto"&&(S=`
`,j&&t.lineBreak.test(j||"")&&(S=j.match(t.lineBreak)[0]));for(var P=this._tokens.next();P;)this.handle_token(P),this._last_last_text=this._flags.last_token.text,this._flags.last_token=P,P=this._tokens.next();return h=this._output.get_code(S),h},_.prototype.handle_token=function(h,j){h.type===l.START_EXPR?this.handle_start_expr(h):h.type===l.END_EXPR?this.handle_end_expr(h):h.type===l.START_BLOCK?this.handle_start_block(h):h.type===l.END_BLOCK?this.handle_end_block(h):h.type===l.WORD?this.handle_word(h):h.type===l.RESERVED?this.handle_word(h):h.type===l.SEMICOLON?this.handle_semicolon(h):h.type===l.STRING?this.handle_string(h):h.type===l.EQUALS?this.handle_equals(h):h.type===l.OPERATOR?this.handle_operator(h):h.type===l.COMMA?this.handle_comma(h):h.type===l.BLOCK_COMMENT?this.handle_block_comment(h,j):h.type===l.COMMENT?this.handle_comment(h,j):h.type===l.DOT?this.handle_dot(h):h.type===l.EOF?this.handle_eof(h):h.type===l.UNKNOWN?this.handle_unknown(h,j):this.handle_unknown(h,j)},_.prototype.handle_whitespace_and_comments=function(h,j){var S=h.newlines,P=this._options.keep_array_indentation&&m(this._flags.mode);if(h.comments_before)for(var L=h.comments_before.next();L;)this.handle_whitespace_and_comments(L,j),this.handle_token(L,j),L=h.comments_before.next();if(P)for(var Y=0;Y<S;Y+=1)this.print_newline(Y>0,j);else if(this._options.max_preserve_newlines&&S>this._options.max_preserve_newlines&&(S=this._options.max_preserve_newlines),this._options.preserve_newlines&&S>1){this.print_newline(!1,j);for(var U=1;U<S;U+=1)this.print_newline(!0,j)}};var N=["async","break","continue","return","throw","yield"];return _.prototype.allow_wrap_or_preserved_newline=function(h,j){if(j=j===void 0?!1:j,!this._output.just_added_newline()){var S=this._options.preserve_newlines&&h.newlines||j,P=u(this._flags.last_token.text,o)||u(h.text,o);if(P){var L=u(this._flags.last_token.text,o)&&u(this._options.operator_position,v)||u(h.text,o);S=S&&L}if(S)this.print_newline(!1,!0);else if(this._options.wrap_line_length){if(b(this._flags.last_token,N))return;this._output.set_wrap_point()}}},_.prototype.print_newline=function(h,j){if(!j&&this._flags.last_token.text!==";"&&this._flags.last_token.text!==","&&this._flags.last_token.text!=="="&&(this._flags.last_token.type!==l.OPERATOR||this._flags.last_token.text==="--"||this._flags.last_token.text==="++"))for(var S=this._tokens.peek();this._flags.mode===d.Statement&&!(this._flags.if_block&&x(S,"else"))&&!this._flags.do_block;)this.restore_mode();this._output.add_new_line(h)&&(this._flags.multiline_frame=!0)},_.prototype.print_token_line_indentation=function(h){this._output.just_added_newline()&&(this._options.keep_array_indentation&&h.newlines&&(h.text==="["||m(this._flags.mode))?(this._output.current_line.set_indent(-1),this._output.current_line.push(h.whitespace_before),this._output.space_before_token=!1):this._output.set_indent(this._flags.indentation_level,this._flags.alignment)&&(this._flags.line_indent_level=this._flags.indentation_level))},_.prototype.print_token=function(h){if(this._output.raw){this._output.add_raw_token(h);return}if(this._options.comma_first&&h.previous&&h.previous.type===l.COMMA&&this._output.just_added_newline()&&this._output.previous_line.last()===","){var j=this._output.previous_line.pop();this._output.previous_line.is_empty()&&(this._output.previous_line.push(j),this._output.trim(!0),this._output.current_line.pop(),this._output.trim()),this.print_token_line_indentation(h),this._output.add_token(","),this._output.space_before_token=!0}this.print_token_line_indentation(h),this._output.non_breaking_space=!0,this._output.add_token(h.text),this._output.previous_token_wrapped&&(this._flags.multiline_frame=!0)},_.prototype.indent=function(){this._flags.indentation_level+=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},_.prototype.deindent=function(){this._flags.indentation_level>0&&(!this._flags.parent||this._flags.indentation_level>this._flags.parent.indentation_level)&&(this._flags.indentation_level-=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},_.prototype.set_mode=function(h){this._flags?(this._flag_store.push(this._flags),this._previous_flags=this._flags):this._previous_flags=this.create_flags(null,h),this._flags=this.create_flags(this._previous_flags,h),this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},_.prototype.restore_mode=function(){this._flag_store.length>0&&(this._previous_flags=this._flags,this._flags=this._flag_store.pop(),this._previous_flags.mode===d.Statement&&c(this._output,this._previous_flags),this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},_.prototype.start_of_object_property=function(){return this._flags.parent.mode===d.ObjectLiteral&&this._flags.mode===d.Statement&&(this._flags.last_token.text===":"&&this._flags.ternary_depth===0||b(this._flags.last_token,["get","set"]))},_.prototype.start_of_statement=function(h){var j=!1;return j=j||b(this._flags.last_token,["var","let","const"])&&h.type===l.WORD,j=j||x(this._flags.last_token,"do"),j=j||!(this._flags.parent.mode===d.ObjectLiteral&&this._flags.mode===d.Statement)&&b(this._flags.last_token,N)&&!h.newlines,j=j||x(this._flags.last_token,"else")&&!(x(h,"if")&&!h.comments_before),j=j||this._flags.last_token.type===l.END_EXPR&&(this._previous_flags.mode===d.ForInitializer||this._previous_flags.mode===d.Conditional),j=j||this._flags.last_token.type===l.WORD&&this._flags.mode===d.BlockStatement&&!this._flags.in_case&&!(h.text==="--"||h.text==="++")&&this._last_last_text!=="function"&&h.type!==l.WORD&&h.type!==l.RESERVED,j=j||this._flags.mode===d.ObjectLiteral&&(this._flags.last_token.text===":"&&this._flags.ternary_depth===0||b(this._flags.last_token,["get","set"])),j?(this.set_mode(d.Statement),this.indent(),this.handle_whitespace_and_comments(h,!0),this.start_of_object_property()||this.allow_wrap_or_preserved_newline(h,b(h,["do","for","if","while"])),!0):!1},_.prototype.handle_start_expr=function(h){this.start_of_statement(h)||this.handle_whitespace_and_comments(h);var j=d.Expression;if(h.text==="["){if(this._flags.last_token.type===l.WORD||this._flags.last_token.text===")"){b(this._flags.last_token,r)&&(this._output.space_before_token=!0),this.print_token(h),this.set_mode(j),this.indent(),this._options.space_in_paren&&(this._output.space_before_token=!0);return}j=d.ArrayLiteral,m(this._flags.mode)&&(this._flags.last_token.text==="["||this._flags.last_token.text===","&&(this._last_last_text==="]"||this._last_last_text==="}"))&&(this._options.keep_array_indentation||this.print_newline()),u(this._flags.last_token.type,[l.START_EXPR,l.END_EXPR,l.WORD,l.OPERATOR,l.DOT])||(this._output.space_before_token=!0)}else{if(this._flags.last_token.type===l.RESERVED)this._flags.last_token.text==="for"?(this._output.space_before_token=this._options.space_before_conditional,j=d.ForInitializer):u(this._flags.last_token.text,["if","while","switch"])?(this._output.space_before_token=this._options.space_before_conditional,j=d.Conditional):u(this._flags.last_word,["await","async"])?this._output.space_before_token=!0:this._flags.last_token.text==="import"&&h.whitespace_before===""?this._output.space_before_token=!1:(u(this._flags.last_token.text,r)||this._flags.last_token.text==="catch")&&(this._output.space_before_token=!0);else if(this._flags.last_token.type===l.EQUALS||this._flags.last_token.type===l.OPERATOR)this.start_of_object_property()||this.allow_wrap_or_preserved_newline(h);else if(this._flags.last_token.type===l.WORD){this._output.space_before_token=!1;var S=this._tokens.peek(-3);if(this._options.space_after_named_function&&S){var P=this._tokens.peek(-4);b(S,["async","function"])||S.text==="*"&&b(P,["async","function"])?this._output.space_before_token=!0:this._flags.mode===d.ObjectLiteral?(S.text==="{"||S.text===","||S.text==="*"&&(P.text==="{"||P.text===","))&&(this._output.space_before_token=!0):this._flags.parent&&this._flags.parent.class_start_block&&(this._output.space_before_token=!0)}}else this.allow_wrap_or_preserved_newline(h);(this._flags.last_token.type===l.RESERVED&&(this._flags.last_word==="function"||this._flags.last_word==="typeof")||this._flags.last_token.text==="*"&&(u(this._last_last_text,["function","yield"])||this._flags.mode===d.ObjectLiteral&&u(this._last_last_text,["{",","])))&&(this._output.space_before_token=this._options.space_after_anon_function)}this._flags.last_token.text===";"||this._flags.last_token.type===l.START_BLOCK?this.print_newline():(this._flags.last_token.type===l.END_EXPR||this._flags.last_token.type===l.START_EXPR||this._flags.last_token.type===l.END_BLOCK||this._flags.last_token.text==="."||this._flags.last_token.type===l.COMMA)&&this.allow_wrap_or_preserved_newline(h,h.newlines),this.print_token(h),this.set_mode(j),this._options.space_in_paren&&(this._output.space_before_token=!0),this.indent()},_.prototype.handle_end_expr=function(h){for(;this._flags.mode===d.Statement;)this.restore_mode();this.handle_whitespace_and_comments(h),this._flags.multiline_frame&&this.allow_wrap_or_preserved_newline(h,h.text==="]"&&m(this._flags.mode)&&!this._options.keep_array_indentation),this._options.space_in_paren&&(this._flags.last_token.type===l.START_EXPR&&!this._options.space_in_empty_paren?(this._output.trim(),this._output.space_before_token=!1):this._output.space_before_token=!0),this.deindent(),this.print_token(h),this.restore_mode(),c(this._output,this._previous_flags),this._flags.do_while&&this._previous_flags.mode===d.Conditional&&(this._previous_flags.mode=d.Expression,this._flags.do_block=!1,this._flags.do_while=!1)},_.prototype.handle_start_block=function(h){this.handle_whitespace_and_comments(h);var j=this._tokens.peek(),S=this._tokens.peek(1);this._flags.last_word==="switch"&&this._flags.last_token.type===l.END_EXPR?(this.set_mode(d.BlockStatement),this._flags.in_case_statement=!0):this._flags.case_body?this.set_mode(d.BlockStatement):S&&(u(S.text,[":",","])&&u(j.type,[l.STRING,l.WORD,l.RESERVED])||u(j.text,["get","set","..."])&&u(S.type,[l.WORD,l.RESERVED]))?u(this._last_last_text,["class","interface"])&&!u(S.text,[":",","])?this.set_mode(d.BlockStatement):this.set_mode(d.ObjectLiteral):this._flags.last_token.type===l.OPERATOR&&this._flags.last_token.text==="=>"?this.set_mode(d.BlockStatement):u(this._flags.last_token.type,[l.EQUALS,l.START_EXPR,l.COMMA,l.OPERATOR])||b(this._flags.last_token,["return","throw","import","default"])?this.set_mode(d.ObjectLiteral):this.set_mode(d.BlockStatement),this._flags.last_token&&b(this._flags.last_token.previous,["class","extends"])&&(this._flags.class_start_block=!0);var P=!j.comments_before&&j.text==="}",L=P&&this._flags.last_word==="function"&&this._flags.last_token.type===l.END_EXPR;if(this._options.brace_preserve_inline){var Y=0,U=null;this._flags.inline_frame=!0;do if(Y+=1,U=this._tokens.peek(Y-1),U.newlines){this._flags.inline_frame=!1;break}while(U.type!==l.EOF&&!(U.type===l.END_BLOCK&&U.opened===h))}(this._options.brace_style==="expand"||this._options.brace_style==="none"&&h.newlines)&&!this._flags.inline_frame?this._flags.last_token.type!==l.OPERATOR&&(L||this._flags.last_token.type===l.EQUALS||b(this._flags.last_token,C)&&this._flags.last_token.text!=="else")?this._output.space_before_token=!0:this.print_newline(!1,!0):(m(this._previous_flags.mode)&&(this._flags.last_token.type===l.START_EXPR||this._flags.last_token.type===l.COMMA)&&((this._flags.last_token.type===l.COMMA||this._options.space_in_paren)&&(this._output.space_before_token=!0),(this._flags.last_token.type===l.COMMA||this._flags.last_token.type===l.START_EXPR&&this._flags.inline_frame)&&(this.allow_wrap_or_preserved_newline(h),this._previous_flags.multiline_frame=this._previous_flags.multiline_frame||this._flags.multiline_frame,this._flags.multiline_frame=!1)),this._flags.last_token.type!==l.OPERATOR&&this._flags.last_token.type!==l.START_EXPR&&(u(this._flags.last_token.type,[l.START_BLOCK,l.SEMICOLON])&&!this._flags.inline_frame?this.print_newline():this._output.space_before_token=!0)),this.print_token(h),this.indent(),!P&&!(this._options.brace_preserve_inline&&this._flags.inline_frame)&&this.print_newline()},_.prototype.handle_end_block=function(h){for(this.handle_whitespace_and_comments(h);this._flags.mode===d.Statement;)this.restore_mode();var j=this._flags.last_token.type===l.START_BLOCK;this._flags.inline_frame&&!j?this._output.space_before_token=!0:this._options.brace_style==="expand"?j||this.print_newline():j||(m(this._flags.mode)&&this._options.keep_array_indentation?(this._options.keep_array_indentation=!1,this.print_newline(),this._options.keep_array_indentation=!0):this.print_newline()),this.restore_mode(),this.print_token(h)},_.prototype.handle_word=function(h){if(h.type===l.RESERVED){if(u(h.text,["set","get"])&&this._flags.mode!==d.ObjectLiteral)h.type=l.WORD;else if(h.text==="import"&&u(this._tokens.peek().text,["(","."]))h.type=l.WORD;else if(u(h.text,["as","from"])&&!this._flags.import_block)h.type=l.WORD;else if(this._flags.mode===d.ObjectLiteral){var j=this._tokens.peek();j.text===":"&&(h.type=l.WORD)}}if(this.start_of_statement(h)?b(this._flags.last_token,["var","let","const"])&&h.type===l.WORD&&(this._flags.declaration_statement=!0):h.newlines&&!k(this._flags.mode)&&(this._flags.last_token.type!==l.OPERATOR||this._flags.last_token.text==="--"||this._flags.last_token.text==="++")&&this._flags.last_token.type!==l.EQUALS&&(this._options.preserve_newlines||!b(this._flags.last_token,["var","let","const","set","get"]))?(this.handle_whitespace_and_comments(h),this.print_newline()):this.handle_whitespace_and_comments(h),this._flags.do_block&&!this._flags.do_while)if(x(h,"while")){this._output.space_before_token=!0,this.print_token(h),this._output.space_before_token=!0,this._flags.do_while=!0;return}else this.print_newline(),this._flags.do_block=!1;if(this._flags.if_block)if(!this._flags.else_block&&x(h,"else"))this._flags.else_block=!0;else{for(;this._flags.mode===d.Statement;)this.restore_mode();this._flags.if_block=!1,this._flags.else_block=!1}if(this._flags.in_case_statement&&b(h,["case","default"])){this.print_newline(),!this._flags.case_block&&(this._flags.case_body||this._options.jslint_happy)&&this.deindent(),this._flags.case_body=!1,this.print_token(h),this._flags.in_case=!0;return}if((this._flags.last_token.type===l.COMMA||this._flags.last_token.type===l.START_EXPR||this._flags.last_token.type===l.EQUALS||this._flags.last_token.type===l.OPERATOR)&&!this.start_of_object_property()&&!(u(this._flags.last_token.text,["+","-"])&&this._last_last_text===":"&&this._flags.parent.mode===d.ObjectLiteral)&&this.allow_wrap_or_preserved_newline(h),x(h,"function")){(u(this._flags.last_token.text,["}",";"])||this._output.just_added_newline()&&!(u(this._flags.last_token.text,["(","[","{",":","=",","])||this._flags.last_token.type===l.OPERATOR))&&!this._output.just_added_blankline()&&!h.comments_before&&(this.print_newline(),this.print_newline(!0)),this._flags.last_token.type===l.RESERVED||this._flags.last_token.type===l.WORD?b(this._flags.last_token,["get","set","new","export"])||b(this._flags.last_token,N)?this._output.space_before_token=!0:x(this._flags.last_token,"default")&&this._last_last_text==="export"?this._output.space_before_token=!0:this._flags.last_token.text==="declare"?this._output.space_before_token=!0:this.print_newline():this._flags.last_token.type===l.OPERATOR||this._flags.last_token.text==="="?this._output.space_before_token=!0:!this._flags.multiline_frame&&(k(this._flags.mode)||m(this._flags.mode))||this.print_newline(),this.print_token(h),this._flags.last_word=h.text;return}var S="NONE";if(this._flags.last_token.type===l.END_BLOCK?this._previous_flags.inline_frame?S="SPACE":b(h,["else","catch","finally","from"])?this._options.brace_style==="expand"||this._options.brace_style==="end-expand"||this._options.brace_style==="none"&&h.newlines?S="NEWLINE":(S="SPACE",this._output.space_before_token=!0):S="NEWLINE":this._flags.last_token.type===l.SEMICOLON&&this._flags.mode===d.BlockStatement?S="NEWLINE":this._flags.last_token.type===l.SEMICOLON&&k(this._flags.mode)?S="SPACE":this._flags.last_token.type===l.STRING?S="NEWLINE":this._flags.last_token.type===l.RESERVED||this._flags.last_token.type===l.WORD||this._flags.last_token.text==="*"&&(u(this._last_last_text,["function","yield"])||this._flags.mode===d.ObjectLiteral&&u(this._last_last_text,["{",","]))?S="SPACE":this._flags.last_token.type===l.START_BLOCK?this._flags.inline_frame?S="SPACE":S="NEWLINE":this._flags.last_token.type===l.END_EXPR&&(this._output.space_before_token=!0,S="NEWLINE"),b(h,r)&&this._flags.last_token.text!==")"&&(this._flags.inline_frame||this._flags.last_token.text==="else"||this._flags.last_token.text==="export"?S="SPACE":S="NEWLINE"),b(h,["else","catch","finally"]))if((!(this._flags.last_token.type===l.END_BLOCK&&this._previous_flags.mode===d.BlockStatement)||this._options.brace_style==="expand"||this._options.brace_style==="end-expand"||this._options.brace_style==="none"&&h.newlines)&&!this._flags.inline_frame)this.print_newline();else{this._output.trim(!0);var P=this._output.current_line;P.last()!=="}"&&this.print_newline(),this._output.space_before_token=!0}else S==="NEWLINE"?b(this._flags.last_token,C)?this._output.space_before_token=!0:this._flags.last_token.text==="declare"&&b(h,["var","let","const"])?this._output.space_before_token=!0:this._flags.last_token.type!==l.END_EXPR?(this._flags.last_token.type!==l.START_EXPR||!b(h,["var","let","const"]))&&this._flags.last_token.text!==":"&&(x(h,"if")&&x(h.previous,"else")?this._output.space_before_token=!0:this.print_newline()):b(h,r)&&this._flags.last_token.text!==")"&&this.print_newline():this._flags.multiline_frame&&m(this._flags.mode)&&this._flags.last_token.text===","&&this._last_last_text==="}"?this.print_newline():S==="SPACE"&&(this._output.space_before_token=!0);h.previous&&(h.previous.type===l.WORD||h.previous.type===l.RESERVED)&&(this._output.space_before_token=!0),this.print_token(h),this._flags.last_word=h.text,h.type===l.RESERVED&&(h.text==="do"?this._flags.do_block=!0:h.text==="if"?this._flags.if_block=!0:h.text==="import"?this._flags.import_block=!0:this._flags.import_block&&x(h,"from")&&(this._flags.import_block=!1))},_.prototype.handle_semicolon=function(h){this.start_of_statement(h)?this._output.space_before_token=!1:this.handle_whitespace_and_comments(h);for(var j=this._tokens.peek();this._flags.mode===d.Statement&&!(this._flags.if_block&&x(j,"else"))&&!this._flags.do_block;)this.restore_mode();this._flags.import_block&&(this._flags.import_block=!1),this.print_token(h)},_.prototype.handle_string=function(h){h.text.startsWith("`")&&h.newlines===0&&h.whitespace_before===""&&(h.previous.text===")"||this._flags.last_token.type===l.WORD)||(this.start_of_statement(h)?this._output.space_before_token=!0:(this.handle_whitespace_and_comments(h),this._flags.last_token.type===l.RESERVED||this._flags.last_token.type===l.WORD||this._flags.inline_frame?this._output.space_before_token=!0:this._flags.last_token.type===l.COMMA||this._flags.last_token.type===l.START_EXPR||this._flags.last_token.type===l.EQUALS||this._flags.last_token.type===l.OPERATOR?this.start_of_object_property()||this.allow_wrap_or_preserved_newline(h):h.text.startsWith("`")&&this._flags.last_token.type===l.END_EXPR&&(h.previous.text==="]"||h.previous.text===")")&&h.newlines===0?this._output.space_before_token=!0:this.print_newline())),this.print_token(h)},_.prototype.handle_equals=function(h){this.start_of_statement(h)||this.handle_whitespace_and_comments(h),this._flags.declaration_statement&&(this._flags.declaration_assignment=!0),this._output.space_before_token=!0,this.print_token(h),this._output.space_before_token=!0},_.prototype.handle_comma=function(h){this.handle_whitespace_and_comments(h,!0),this.print_token(h),this._output.space_before_token=!0,this._flags.declaration_statement?(k(this._flags.parent.mode)&&(this._flags.declaration_assignment=!1),this._flags.declaration_assignment?(this._flags.declaration_assignment=!1,this.print_newline(!1,!0)):this._options.comma_first&&this.allow_wrap_or_preserved_newline(h)):this._flags.mode===d.ObjectLiteral||this._flags.mode===d.Statement&&this._flags.parent.mode===d.ObjectLiteral?(this._flags.mode===d.Statement&&this.restore_mode(),this._flags.inline_frame||this.print_newline()):this._options.comma_first&&this.allow_wrap_or_preserved_newline(h)},_.prototype.handle_operator=function(h){var j=h.text==="*"&&(b(this._flags.last_token,["function","yield"])||u(this._flags.last_token.type,[l.START_BLOCK,l.COMMA,l.END_BLOCK,l.SEMICOLON])),S=u(h.text,["-","+"])&&(u(this._flags.last_token.type,[l.START_BLOCK,l.START_EXPR,l.EQUALS,l.OPERATOR])||u(this._flags.last_token.text,r)||this._flags.last_token.text===",");if(!this.start_of_statement(h)){var P=!j;this.handle_whitespace_and_comments(h,P)}if(h.text==="*"&&this._flags.last_token.type===l.DOT){this.print_token(h);return}if(h.text==="::"){this.print_token(h);return}if(u(h.text,["-","+"])&&this.start_of_object_property()){this.print_token(h);return}if(this._flags.last_token.type===l.OPERATOR&&u(this._options.operator_position,v)&&this.allow_wrap_or_preserved_newline(h),h.text===":"&&this._flags.in_case){this.print_token(h),this._flags.in_case=!1,this._flags.case_body=!0,this._tokens.peek().type!==l.START_BLOCK?(this.indent(),this.print_newline(),this._flags.case_block=!1):(this._flags.case_block=!0,this._output.space_before_token=!0);return}var L=!0,Y=!0,U=!1;if(h.text===":"?this._flags.ternary_depth===0?L=!1:(this._flags.ternary_depth-=1,U=!0):h.text==="?"&&(this._flags.ternary_depth+=1),!S&&!j&&this._options.preserve_newlines&&u(h.text,o)){var fe=h.text===":",D=fe&&U,O=fe&&!U;switch(this._options.operator_position){case T.before_newline:this._output.space_before_token=!O,this.print_token(h),(!fe||D)&&this.allow_wrap_or_preserved_newline(h),this._output.space_before_token=!0;return;case T.after_newline:this._output.space_before_token=!0,!fe||D?this._tokens.peek().newlines?this.print_newline(!1,!0):this.allow_wrap_or_preserved_newline(h):this._output.space_before_token=!1,this.print_token(h),this._output.space_before_token=!0;return;case T.preserve_newline:O||this.allow_wrap_or_preserved_newline(h),L=!(this._output.just_added_newline()||O),this._output.space_before_token=L,this.print_token(h),this._output.space_before_token=!0;return}}if(j){this.allow_wrap_or_preserved_newline(h),L=!1;var z=this._tokens.peek();Y=z&&u(z.type,[l.WORD,l.RESERVED])}else if(h.text==="...")this.allow_wrap_or_preserved_newline(h),L=this._flags.last_token.type===l.START_BLOCK,Y=!1;else if(u(h.text,["--","++","!","~"])||S){if((this._flags.last_token.type===l.COMMA||this._flags.last_token.type===l.START_EXPR)&&this.allow_wrap_or_preserved_newline(h),L=!1,Y=!1,h.newlines&&(h.text==="--"||h.text==="++"||h.text==="~")){var W=b(this._flags.last_token,C)&&h.newlines;W&&(this._previous_flags.if_block||this._previous_flags.else_block)&&this.restore_mode(),this.print_newline(W,!0)}this._flags.last_token.text===";"&&k(this._flags.mode)&&(L=!0),this._flags.last_token.type===l.RESERVED?L=!0:this._flags.last_token.type===l.END_EXPR?L=!(this._flags.last_token.text==="]"&&(h.text==="--"||h.text==="++")):this._flags.last_token.type===l.OPERATOR&&(L=u(h.text,["--","-","++","+"])&&u(this._flags.last_token.text,["--","-","++","+"]),u(h.text,["+","-"])&&u(this._flags.last_token.text,["--","++"])&&(Y=!0)),(this._flags.mode===d.BlockStatement&&!this._flags.inline_frame||this._flags.mode===d.Statement)&&(this._flags.last_token.text==="{"||this._flags.last_token.text===";")&&this.print_newline()}this._output.space_before_token=this._output.space_before_token||L,this.print_token(h),this._output.space_before_token=Y},_.prototype.handle_block_comment=function(h,j){if(this._output.raw){this._output.add_raw_token(h),h.directives&&h.directives.preserve==="end"&&(this._output.raw=this._options.test_output_raw);return}if(h.directives){this.print_newline(!1,j),this.print_token(h),h.directives.preserve==="start"&&(this._output.raw=!0),this.print_newline(!1,!0);return}if(!t.newline.test(h.text)&&!h.newlines){this._output.space_before_token=!0,this.print_token(h),this._output.space_before_token=!0;return}else this.print_block_commment(h,j)},_.prototype.print_block_commment=function(h,j){var S=p(h.text),P,L=!1,Y=!1,U=h.whitespace_before,fe=U.length;if(this.print_newline(!1,j),this.print_token_line_indentation(h),this._output.add_token(S[0]),this.print_newline(!1,j),S.length>1){for(S=S.slice(1),L=g(S,"*"),Y=w(S,U),L&&(this._flags.alignment=1),P=0;P<S.length;P++)L?(this.print_token_line_indentation(h),this._output.add_token(f(S[P]))):Y&&S[P]?(this.print_token_line_indentation(h),this._output.add_token(S[P].substring(fe))):(this._output.current_line.set_indent(-1),this._output.add_token(S[P])),this.print_newline(!1,j);this._flags.alignment=0}},_.prototype.handle_comment=function(h,j){h.newlines?this.print_newline(!1,j):this._output.trim(!0),this._output.space_before_token=!0,this.print_token(h),this.print_newline(!1,j)},_.prototype.handle_dot=function(h){this.start_of_statement(h)||this.handle_whitespace_and_comments(h,!0),this._flags.last_token.text.match("^[0-9]+$")&&(this._output.space_before_token=!0),b(this._flags.last_token,C)?this._output.space_before_token=!1:this.allow_wrap_or_preserved_newline(h,this._flags.last_token.text===")"&&this._options.break_chained_methods),this._options.unindent_chained_methods&&this._output.just_added_newline()&&this.deindent(),this.print_token(h)},_.prototype.handle_unknown=function(h,j){this.print_token(h),h.text[h.text.length-1]===`
`&&this.print_newline(!1,j)},_.prototype.handle_eof=function(h){for(;this._flags.mode===d.Statement;)this.restore_mode();this.handle_whitespace_and_comments(h)},jr.Beautifier=_,jr}var Nu;function Rf(){if(Nu)return Pi.exports;Nu=1;var e=Lf().Beautifier,n=o0().Options;function t(i,a){var r=new e(i,a);return r.beautify()}return Pi.exports=t,Pi.exports.defaultOptions=function(){return new n},Pi.exports}var Li={exports:{}},Ar={},zr={},ju;function u0(){if(ju)return zr;ju=1;var e=Ao().Options;function n(t){e.call(this,t,"css"),this.selector_separator_newline=this._get_boolean("selector_separator_newline",!0),this.newline_between_rules=this._get_boolean("newline_between_rules",!0);var i=this._get_boolean("space_around_selector_separator");this.space_around_combinator=this._get_boolean("space_around_combinator")||i;var a=this._get_selection_list("brace_style",["collapse","expand","end-expand","none","preserve-inline"]);this.brace_style="collapse";for(var r=0;r<a.length;r++)a[r]!=="expand"?this.brace_style="collapse":this.brace_style=a[r]}return n.prototype=new e,zr.Options=n,zr}var Cu;function Ff(){if(Cu)return Ar;Cu=1;var e=u0().Options,n=Po().Output,t=zo().InputScanner,i=Lo().Directives,a=new i(/\/\*/,/\*\//),r=/\r\n|[\r\n]/,o=/\r\n|[\r\n]/g,l=/\s/,u=/(?:\s|\n)+/g,f=/\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,y=/\/\/(?:[^\n\r\u2028\u2029]*)/g;function x(b,C){this._source_text=b||"",this._options=new e(C),this._ch=null,this._input=null,this.NESTED_AT_RULE={page:!0,"font-face":!0,keyframes:!0,media:!0,supports:!0,document:!0},this.CONDITIONAL_GROUP_RULE={media:!0,supports:!0,document:!0},this.NON_SEMICOLON_NEWLINE_PROPERTY=["grid-template-areas","grid-template"]}return x.prototype.eatString=function(b){var C="";for(this._ch=this._input.next();this._ch;){if(C+=this._ch,this._ch==="\\")C+=this._input.next();else if(b.indexOf(this._ch)!==-1||this._ch===`
`)break;this._ch=this._input.next()}return C},x.prototype.eatWhitespace=function(b){for(var C=l.test(this._input.peek()),M=0;l.test(this._input.peek());)this._ch=this._input.next(),b&&this._ch===`
`&&(M===0||M<this._options.max_preserve_newlines)&&(M++,this._output.add_new_line(!0));return C},x.prototype.foundNestedPseudoClass=function(){for(var b=0,C=1,M=this._input.peek(C);M;){if(M==="{")return!0;if(M==="(")b+=1;else if(M===")"){if(b===0)return!1;b-=1}else if(M===";"||M==="}")return!1;C++,M=this._input.peek(C)}return!1},x.prototype.print_string=function(b){this._output.set_indent(this._indentLevel),this._output.non_breaking_space=!0,this._output.add_token(b)},x.prototype.preserveSingleSpace=function(b){b&&(this._output.space_before_token=!0)},x.prototype.indent=function(){this._indentLevel++},x.prototype.outdent=function(){this._indentLevel>0&&this._indentLevel--},x.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var b=this._source_text,C=this._options.eol;C==="auto"&&(C=`
`,b&&r.test(b||"")&&(C=b.match(r)[0])),b=b.replace(o,`
`);var M=b.match(/^[\t ]*/)[0];this._output=new n(this._options,M),this._input=new t(b),this._indentLevel=0,this._nestedLevel=0,this._ch=null;for(var T=0,v=!1,d=!1,c=!1,p=!1,m=!1,k=this._ch,g=!1,w,_,N;w=this._input.read(u),_=w!=="",N=k,this._ch=this._input.next(),this._ch==="\\"&&this._input.hasNext()&&(this._ch+=this._input.next()),k=this._ch,this._ch;)if(this._ch==="/"&&this._input.peek()==="*"){this._output.add_new_line(),this._input.back();var h=this._input.read(f),j=a.get_directives(h);j&&j.ignore==="start"&&(h+=a.readIgnored(this._input)),this.print_string(h),this.eatWhitespace(!0),this._output.add_new_line()}else if(this._ch==="/"&&this._input.peek()==="/")this._output.space_before_token=!0,this._input.back(),this.print_string(this._input.read(y)),this.eatWhitespace(!0);else if(this._ch==="$"){this.preserveSingleSpace(_),this.print_string(this._ch);var S=this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);S.match(/[ :]$/)&&(S=this.eatString(": ").replace(/\s+$/,""),this.print_string(S),this._output.space_before_token=!0),T===0&&S.indexOf(":")!==-1&&(d=!0,this.indent())}else if(this._ch==="@")if(this.preserveSingleSpace(_),this._input.peek()==="{")this.print_string(this._ch+this.eatString("}"));else{this.print_string(this._ch);var P=this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);P.match(/[ :]$/)&&(P=this.eatString(": ").replace(/\s+$/,""),this.print_string(P),this._output.space_before_token=!0),T===0&&P.indexOf(":")!==-1?(d=!0,this.indent()):P in this.NESTED_AT_RULE?(this._nestedLevel+=1,P in this.CONDITIONAL_GROUP_RULE&&(c=!0)):T===0&&!d&&(p=!0)}else if(this._ch==="#"&&this._input.peek()==="{")this.preserveSingleSpace(_),this.print_string(this._ch+this.eatString("}"));else if(this._ch==="{")d&&(d=!1,this.outdent()),p=!1,c?(c=!1,v=this._indentLevel>=this._nestedLevel):v=this._indentLevel>=this._nestedLevel-1,this._options.newline_between_rules&&v&&this._output.previous_line&&this._output.previous_line.item(-1)!=="{"&&this._output.ensure_empty_line_above("/",","),this._output.space_before_token=!0,this._options.brace_style==="expand"?(this._output.add_new_line(),this.print_string(this._ch),this.indent(),this._output.set_indent(this._indentLevel)):(N==="("?this._output.space_before_token=!1:N!==","&&this.indent(),this.print_string(this._ch)),this.eatWhitespace(!0),this._output.add_new_line();else if(this._ch==="}")this.outdent(),this._output.add_new_line(),N==="{"&&this._output.trim(!0),d&&(this.outdent(),d=!1),this.print_string(this._ch),v=!1,this._nestedLevel&&this._nestedLevel--,this.eatWhitespace(!0),this._output.add_new_line(),this._options.newline_between_rules&&!this._output.just_added_blankline()&&this._input.peek()!=="}"&&this._output.add_new_line(!0),this._input.peek()===")"&&(this._output.trim(!0),this._options.brace_style==="expand"&&this._output.add_new_line(!0));else if(this._ch===":"){for(var L=0;L<this.NON_SEMICOLON_NEWLINE_PROPERTY.length;L++)if(this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[L])){g=!0;break}(v||c)&&!(this._input.lookBack("&")||this.foundNestedPseudoClass())&&!this._input.lookBack("(")&&!p&&T===0?(this.print_string(":"),d||(d=!0,this._output.space_before_token=!0,this.eatWhitespace(!0),this.indent())):(this._input.lookBack(" ")&&(this._output.space_before_token=!0),this._input.peek()===":"?(this._ch=this._input.next(),this.print_string("::")):this.print_string(":"))}else if(this._ch==='"'||this._ch==="'"){var Y=N==='"'||N==="'";this.preserveSingleSpace(Y||_),this.print_string(this._ch+this.eatString(this._ch)),this.eatWhitespace(!0)}else if(this._ch===";")g=!1,T===0?(d&&(this.outdent(),d=!1),p=!1,this.print_string(this._ch),this.eatWhitespace(!0),this._input.peek()!=="/"&&this._output.add_new_line()):(this.print_string(this._ch),this.eatWhitespace(!0),this._output.space_before_token=!0);else if(this._ch==="(")if(this._input.lookBack("url"))this.print_string(this._ch),this.eatWhitespace(),T++,this.indent(),this._ch=this._input.next(),this._ch===")"||this._ch==='"'||this._ch==="'"?this._input.back():this._ch&&(this.print_string(this._ch+this.eatString(")")),T&&(T--,this.outdent()));else{var U=!1;this._input.lookBack("with")&&(U=!0),this.preserveSingleSpace(_||U),this.print_string(this._ch),d&&N==="$"&&this._options.selector_separator_newline?(this._output.add_new_line(),m=!0):(this.eatWhitespace(),T++,this.indent())}else if(this._ch===")")T&&(T--,this.outdent()),m&&this._input.peek()===";"&&this._options.selector_separator_newline&&(m=!1,this.outdent(),this._output.add_new_line()),this.print_string(this._ch);else if(this._ch===",")this.print_string(this._ch),this.eatWhitespace(!0),this._options.selector_separator_newline&&(!d||m)&&T===0&&!p?this._output.add_new_line():this._output.space_before_token=!0;else if((this._ch===">"||this._ch==="+"||this._ch==="~")&&!d&&T===0)this._options.space_around_combinator?(this._output.space_before_token=!0,this.print_string(this._ch),this._output.space_before_token=!0):(this.print_string(this._ch),this.eatWhitespace(),this._ch&&l.test(this._ch)&&(this._ch=""));else if(this._ch==="]")this.print_string(this._ch);else if(this._ch==="[")this.preserveSingleSpace(_),this.print_string(this._ch);else if(this._ch==="=")this.eatWhitespace(),this.print_string("="),l.test(this._ch)&&(this._ch="");else if(this._ch==="!"&&!this._input.lookBack("\\"))this._output.space_before_token=!0,this.print_string(this._ch);else{var fe=N==='"'||N==="'";this.preserveSingleSpace(fe||_),this.print_string(this._ch),!this._output.just_added_newline()&&this._input.peek()===`
`&&g&&this._output.add_new_line()}var D=this._output.get_code(C);return D},Ar.Beautifier=x,Ar}var Tu;function Hf(){if(Tu)return Li.exports;Tu=1;var e=Ff().Beautifier,n=u0().Options;function t(i,a){var r=new e(i,a);return r.beautify()}return Li.exports=t,Li.exports.defaultOptions=function(){return new n},Li.exports}var Ri={exports:{}},Lr={},Rr={},Su;function c0(){if(Su)return Rr;Su=1;var e=Ao().Options;function n(t){e.call(this,t,"html"),this.templating.length===1&&this.templating[0]==="auto"&&(this.templating=["django","erb","handlebars","php"]),this.indent_inner_html=this._get_boolean("indent_inner_html"),this.indent_body_inner_html=this._get_boolean("indent_body_inner_html",!0),this.indent_head_inner_html=this._get_boolean("indent_head_inner_html",!0),this.indent_handlebars=this._get_boolean("indent_handlebars",!0),this.wrap_attributes=this._get_selection("wrap_attributes",["auto","force","force-aligned","force-expand-multiline","aligned-multiple","preserve","preserve-aligned"]),this.wrap_attributes_min_attrs=this._get_number("wrap_attributes_min_attrs",2),this.wrap_attributes_indent_size=this._get_number("wrap_attributes_indent_size",this.indent_size),this.extra_liners=this._get_array("extra_liners",["head","body","/html"]),this.inline=this._get_array("inline",["a","abbr","area","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","template","textarea","time","u","var","video","wbr","text","acronym","big","strike","tt"]),this.inline_custom_elements=this._get_boolean("inline_custom_elements",!0),this.void_elements=this._get_array("void_elements",["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","?xml","basefont","isindex"]),this.unformatted=this._get_array("unformatted",[]),this.content_unformatted=this._get_array("content_unformatted",["pre","textarea"]),this.unformatted_content_delimiter=this._get_characters("unformatted_content_delimiter"),this.indent_scripts=this._get_selection("indent_scripts",["normal","keep","separate"])}return n.prototype=new e,Rr.Options=n,Rr}var Fi={},Mu;function Eu(){if(Mu)return Fi;Mu=1;var e=Ta().Tokenizer,n=Ta().TOKEN,t=Lo().Directives,i=l0().TemplatablePattern,a=Ka().Pattern,r={TAG_OPEN:"TK_TAG_OPEN",TAG_CLOSE:"TK_TAG_CLOSE",ATTRIBUTE:"TK_ATTRIBUTE",EQUALS:"TK_EQUALS",VALUE:"TK_VALUE",COMMENT:"TK_COMMENT",TEXT:"TK_TEXT",UNKNOWN:"TK_UNKNOWN",START:n.START,RAW:n.RAW,EOF:n.EOF},o=new t(/<\!--/,/-->/),l=function(u,f){e.call(this,u,f),this._current_tag_name="";var y=new i(this._input).read_options(this._options),x=new a(this._input);if(this.__patterns={word:y.until(/[\n\r\t <]/),single_quote:y.until_after(/'/),double_quote:y.until_after(/"/),attribute:y.until(/[\n\r\t =>]|\/>/),element_name:y.until(/[\n\r\t >\/]/),handlebars_comment:x.starting_with(/{{!--/).until_after(/--}}/),handlebars:x.starting_with(/{{/).until_after(/}}/),handlebars_open:x.until(/[\n\r\t }]/),handlebars_raw_close:x.until(/}}/),comment:x.starting_with(/<!--/).until_after(/-->/),cdata:x.starting_with(/<!\[CDATA\[/).until_after(/]]>/),conditional_comment:x.starting_with(/<!\[/).until_after(/]>/),processing:x.starting_with(/<\?/).until_after(/\?>/)},this._options.indent_handlebars&&(this.__patterns.word=this.__patterns.word.exclude("handlebars")),this._unformatted_content_delimiter=null,this._options.unformatted_content_delimiter){var b=this._input.get_literal_regexp(this._options.unformatted_content_delimiter);this.__patterns.unformatted_content_delimiter=x.matching(b).until_after(b)}};return l.prototype=new e,l.prototype._is_comment=function(u){return!1},l.prototype._is_opening=function(u){return u.type===r.TAG_OPEN},l.prototype._is_closing=function(u,f){return u.type===r.TAG_CLOSE&&f&&((u.text===">"||u.text==="/>")&&f.text[0]==="<"||u.text==="}}"&&f.text[0]==="{"&&f.text[1]==="{")},l.prototype._reset=function(){this._current_tag_name=""},l.prototype._get_next_token=function(u,f){var y=null;this._readWhitespace();var x=this._input.peek();return x===null?this._create_token(r.EOF,""):(y=y||this._read_open_handlebars(x,f),y=y||this._read_attribute(x,u,f),y=y||this._read_close(x,f),y=y||this._read_raw_content(x,u,f),y=y||this._read_content_word(x),y=y||this._read_comment_or_cdata(x),y=y||this._read_processing(x),y=y||this._read_open(x,f),y=y||this._create_token(r.UNKNOWN,this._input.next()),y)},l.prototype._read_comment_or_cdata=function(u){var f=null,y=null,x=null;if(u==="<"){var b=this._input.peek(1);b==="!"&&(y=this.__patterns.comment.read(),y?(x=o.get_directives(y),x&&x.ignore==="start"&&(y+=o.readIgnored(this._input))):y=this.__patterns.cdata.read()),y&&(f=this._create_token(r.COMMENT,y),f.directives=x)}return f},l.prototype._read_processing=function(u){var f=null,y=null,x=null;if(u==="<"){var b=this._input.peek(1);(b==="!"||b==="?")&&(y=this.__patterns.conditional_comment.read(),y=y||this.__patterns.processing.read()),y&&(f=this._create_token(r.COMMENT,y),f.directives=x)}return f},l.prototype._read_open=function(u,f){var y=null,x=null;return f||u==="<"&&(y=this._input.next(),this._input.peek()==="/"&&(y+=this._input.next()),y+=this.__patterns.element_name.read(),x=this._create_token(r.TAG_OPEN,y)),x},l.prototype._read_open_handlebars=function(u,f){var y=null,x=null;return f||this._options.indent_handlebars&&u==="{"&&this._input.peek(1)==="{"&&(this._input.peek(2)==="!"?(y=this.__patterns.handlebars_comment.read(),y=y||this.__patterns.handlebars.read(),x=this._create_token(r.COMMENT,y)):(y=this.__patterns.handlebars_open.read(),x=this._create_token(r.TAG_OPEN,y))),x},l.prototype._read_close=function(u,f){var y=null,x=null;return f&&(f.text[0]==="<"&&(u===">"||u==="/"&&this._input.peek(1)===">")?(y=this._input.next(),u==="/"&&(y+=this._input.next()),x=this._create_token(r.TAG_CLOSE,y)):f.text[0]==="{"&&u==="}"&&this._input.peek(1)==="}"&&(this._input.next(),this._input.next(),x=this._create_token(r.TAG_CLOSE,"}}"))),x},l.prototype._read_attribute=function(u,f,y){var x=null,b="";if(y&&y.text[0]==="<")if(u==="=")x=this._create_token(r.EQUALS,this._input.next());else if(u==='"'||u==="'"){var C=this._input.next();u==='"'?C+=this.__patterns.double_quote.read():C+=this.__patterns.single_quote.read(),x=this._create_token(r.VALUE,C)}else b=this.__patterns.attribute.read(),b&&(f.type===r.EQUALS?x=this._create_token(r.VALUE,b):x=this._create_token(r.ATTRIBUTE,b));return x},l.prototype._is_content_unformatted=function(u){return this._options.void_elements.indexOf(u)===-1&&(this._options.content_unformatted.indexOf(u)!==-1||this._options.unformatted.indexOf(u)!==-1)},l.prototype._read_raw_content=function(u,f,y){var x="";if(y&&y.text[0]==="{")x=this.__patterns.handlebars_raw_close.read();else if(f.type===r.TAG_CLOSE&&f.opened.text[0]==="<"&&f.text[0]!=="/"){var b=f.opened.text.substr(1).toLowerCase();if(b==="script"||b==="style"){var C=this._read_comment_or_cdata(u);if(C)return C.type=r.TEXT,C;x=this._input.readUntil(new RegExp("</"+b+"[\\n\\r\\t ]*?>","ig"))}else this._is_content_unformatted(b)&&(x=this._input.readUntil(new RegExp("</"+b+"[\\n\\r\\t ]*?>","ig")))}return x?this._create_token(r.TEXT,x):null},l.prototype._read_content_word=function(u){var f="";if(this._options.unformatted_content_delimiter&&u===this._options.unformatted_content_delimiter[0]&&(f=this.__patterns.unformatted_content_delimiter.read()),f||(f=this.__patterns.word.read()),f)return this._create_token(r.TEXT,f)},Fi.Tokenizer=l,Fi.TOKEN=r,Fi}var Du;function Wf(){if(Du)return Lr;Du=1;var e=c0().Options,n=Po().Output,t=Eu().Tokenizer,i=Eu().TOKEN,a=/\r\n|[\r\n]/,r=/\r\n|[\r\n]/g,o=function(v,d){this.indent_level=0,this.alignment_size=0,this.max_preserve_newlines=v.max_preserve_newlines,this.preserve_newlines=v.preserve_newlines,this._output=new n(v,d)};o.prototype.current_line_has_match=function(v){return this._output.current_line.has_match(v)},o.prototype.set_space_before_token=function(v,d){this._output.space_before_token=v,this._output.non_breaking_space=d},o.prototype.set_wrap_point=function(){this._output.set_indent(this.indent_level,this.alignment_size),this._output.set_wrap_point()},o.prototype.add_raw_token=function(v){this._output.add_raw_token(v)},o.prototype.print_preserved_newlines=function(v){var d=0;v.type!==i.TEXT&&v.previous.type!==i.TEXT&&(d=v.newlines?1:0),this.preserve_newlines&&(d=v.newlines<this.max_preserve_newlines+1?v.newlines:this.max_preserve_newlines+1);for(var c=0;c<d;c++)this.print_newline(c>0);return d!==0},o.prototype.traverse_whitespace=function(v){return v.whitespace_before||v.newlines?(this.print_preserved_newlines(v)||(this._output.space_before_token=!0),!0):!1},o.prototype.previous_token_wrapped=function(){return this._output.previous_token_wrapped},o.prototype.print_newline=function(v){this._output.add_new_line(v)},o.prototype.print_token=function(v){v.text&&(this._output.set_indent(this.indent_level,this.alignment_size),this._output.add_token(v.text))},o.prototype.indent=function(){this.indent_level++},o.prototype.get_full_indent=function(v){return v=this.indent_level+(v||0),v<1?"":this._output.get_indent_string(v)};var l=function(v){for(var d=null,c=v.next;c.type!==i.EOF&&v.closed!==c;){if(c.type===i.ATTRIBUTE&&c.text==="type"){c.next&&c.next.type===i.EQUALS&&c.next.next&&c.next.next.type===i.VALUE&&(d=c.next.next.text);break}c=c.next}return d},u=function(v,d){var c=null,p=null;return d.closed?(v==="script"?c="text/javascript":v==="style"&&(c="text/css"),c=l(d)||c,c.search("text/css")>-1?p="css":c.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/)>-1?p="javascript":c.search(/(text|application|dojo)\/(x-)?(html)/)>-1?p="html":c.search(/test\/null/)>-1&&(p="null"),p):null};function f(v,d){return d.indexOf(v)!==-1}function y(v,d,c){this.parent=v||null,this.tag=d?d.tag_name:"",this.indent_level=c||0,this.parser_token=d||null}function x(v){this._printer=v,this._current_frame=null}x.prototype.get_parser_token=function(){return this._current_frame?this._current_frame.parser_token:null},x.prototype.record_tag=function(v){var d=new y(this._current_frame,v,this._printer.indent_level);this._current_frame=d},x.prototype._try_pop_frame=function(v){var d=null;return v&&(d=v.parser_token,this._printer.indent_level=v.indent_level,this._current_frame=v.parent),d},x.prototype._get_frame=function(v,d){for(var c=this._current_frame;c&&v.indexOf(c.tag)===-1;){if(d&&d.indexOf(c.tag)!==-1){c=null;break}c=c.parent}return c},x.prototype.try_pop=function(v,d){var c=this._get_frame([v],d);return this._try_pop_frame(c)},x.prototype.indent_to_tag=function(v){var d=this._get_frame(v);d&&(this._printer.indent_level=d.indent_level)};function b(v,d,c,p){this._source_text=v||"",d=d||{},this._js_beautify=c,this._css_beautify=p,this._tag_stack=null;var m=new e(d,"html");this._options=m,this._is_wrap_attributes_force=this._options.wrap_attributes.substr(0,5)==="force",this._is_wrap_attributes_force_expand_multiline=this._options.wrap_attributes==="force-expand-multiline",this._is_wrap_attributes_force_aligned=this._options.wrap_attributes==="force-aligned",this._is_wrap_attributes_aligned_multiple=this._options.wrap_attributes==="aligned-multiple",this._is_wrap_attributes_preserve=this._options.wrap_attributes.substr(0,8)==="preserve",this._is_wrap_attributes_preserve_aligned=this._options.wrap_attributes==="preserve-aligned"}b.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var v=this._source_text,d=this._options.eol;this._options.eol==="auto"&&(d=`
`,v&&a.test(v)&&(d=v.match(a)[0])),v=v.replace(r,`
`);var c=v.match(/^[\t ]*/)[0],p={text:"",type:""},m=new C,k=new o(this._options,c),g=new t(v,this._options).tokenize();this._tag_stack=new x(k);for(var w=null,_=g.next();_.type!==i.EOF;)_.type===i.TAG_OPEN||_.type===i.COMMENT?(w=this._handle_tag_open(k,_,m,p,g),m=w):_.type===i.ATTRIBUTE||_.type===i.EQUALS||_.type===i.VALUE||_.type===i.TEXT&&!m.tag_complete?w=this._handle_inside_tag(k,_,m,p):_.type===i.TAG_CLOSE?w=this._handle_tag_close(k,_,m):_.type===i.TEXT?w=this._handle_text(k,_,m):k.add_raw_token(_),p=w,_=g.next();var N=k._output.get_code(d);return N},b.prototype._handle_tag_close=function(v,d,c){var p={text:d.text,type:d.type};return v.alignment_size=0,c.tag_complete=!0,v.set_space_before_token(d.newlines||d.whitespace_before!=="",!0),c.is_unformatted?v.add_raw_token(d):(c.tag_start_char==="<"&&(v.set_space_before_token(d.text[0]==="/",!0),this._is_wrap_attributes_force_expand_multiline&&c.has_wrapped_attrs&&v.print_newline(!1)),v.print_token(d)),c.indent_content&&!(c.is_unformatted||c.is_content_unformatted)&&(v.indent(),c.indent_content=!1),!c.is_inline_element&&!(c.is_unformatted||c.is_content_unformatted)&&v.set_wrap_point(),p},b.prototype._handle_inside_tag=function(v,d,c,p){var m=c.has_wrapped_attrs,k={text:d.text,type:d.type};return v.set_space_before_token(d.newlines||d.whitespace_before!=="",!0),c.is_unformatted?v.add_raw_token(d):c.tag_start_char==="{"&&d.type===i.TEXT?v.print_preserved_newlines(d)?(d.newlines=0,v.add_raw_token(d)):v.print_token(d):(d.type===i.ATTRIBUTE?v.set_space_before_token(!0):(d.type===i.EQUALS||d.type===i.VALUE&&d.previous.type===i.EQUALS)&&v.set_space_before_token(!1),d.type===i.ATTRIBUTE&&c.tag_start_char==="<"&&((this._is_wrap_attributes_preserve||this._is_wrap_attributes_preserve_aligned)&&(v.traverse_whitespace(d),m=m||d.newlines!==0),this._is_wrap_attributes_force&&c.attr_count>=this._options.wrap_attributes_min_attrs&&(p.type!==i.TAG_OPEN||this._is_wrap_attributes_force_expand_multiline)&&(v.print_newline(!1),m=!0)),v.print_token(d),m=m||v.previous_token_wrapped(),c.has_wrapped_attrs=m),k},b.prototype._handle_text=function(v,d,c){var p={text:d.text,type:"TK_CONTENT"};return c.custom_beautifier_name?this._print_custom_beatifier_text(v,d,c):c.is_unformatted||c.is_content_unformatted?v.add_raw_token(d):(v.traverse_whitespace(d),v.print_token(d)),p},b.prototype._print_custom_beatifier_text=function(v,d,c){var p=this;if(d.text!==""){var m=d.text,k,g=1,w="",_="";c.custom_beautifier_name==="javascript"&&typeof this._js_beautify=="function"?k=this._js_beautify:c.custom_beautifier_name==="css"&&typeof this._css_beautify=="function"?k=this._css_beautify:c.custom_beautifier_name==="html"&&(k=function(L,Y){var U=new b(L,Y,p._js_beautify,p._css_beautify);return U.beautify()}),this._options.indent_scripts==="keep"?g=0:this._options.indent_scripts==="separate"&&(g=-v.indent_level);var N=v.get_full_indent(g);if(m=m.replace(/\n[ \t]*$/,""),c.custom_beautifier_name!=="html"&&m[0]==="<"&&m.match(/^(<!--|<!\[CDATA\[)/)){var h=/^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(m);if(!h){v.add_raw_token(d);return}w=N+h[1]+`
`,m=h[4],h[5]&&(_=N+h[5]),m=m.replace(/\n[ \t]*$/,""),(h[2]||h[3].indexOf(`
`)!==-1)&&(h=h[3].match(/[ \t]+$/),h&&(d.whitespace_before=h[0]))}if(m)if(k){var j=function(){this.eol=`
`};j.prototype=this._options.raw_options;var S=new j;m=k(N+m,S)}else{var P=d.whitespace_before;P&&(m=m.replace(new RegExp(`
(`+P+")?","g"),`
`)),m=N+m.replace(/\n/g,`
`+N)}w&&(m?m=w+m+`
`+_:m=w+_),v.print_newline(!1),m&&(d.text=m,d.whitespace_before="",d.newlines=0,v.add_raw_token(d),v.print_newline(!0))}},b.prototype._handle_tag_open=function(v,d,c,p,m){var k=this._get_tag_open_token(d);if((c.is_unformatted||c.is_content_unformatted)&&!c.is_empty_element&&d.type===i.TAG_OPEN&&!k.is_start_tag?(v.add_raw_token(d),k.start_tag_token=this._tag_stack.try_pop(k.tag_name)):(v.traverse_whitespace(d),this._set_tag_position(v,d,k,c,p),k.is_inline_element||v.set_wrap_point(),v.print_token(d)),k.is_start_tag&&this._is_wrap_attributes_force){var g=0,w;do w=m.peek(g),w.type===i.ATTRIBUTE&&(k.attr_count+=1),g+=1;while(w.type!==i.EOF&&w.type!==i.TAG_CLOSE)}return(this._is_wrap_attributes_force_aligned||this._is_wrap_attributes_aligned_multiple||this._is_wrap_attributes_preserve_aligned)&&(k.alignment_size=d.text.length+1),!k.tag_complete&&!k.is_unformatted&&(v.alignment_size=k.alignment_size),k};var C=function(v,d){if(this.parent=v||null,this.text="",this.type="TK_TAG_OPEN",this.tag_name="",this.is_inline_element=!1,this.is_unformatted=!1,this.is_content_unformatted=!1,this.is_empty_element=!1,this.is_start_tag=!1,this.is_end_tag=!1,this.indent_content=!1,this.multiline_content=!1,this.custom_beautifier_name=null,this.start_tag_token=null,this.attr_count=0,this.has_wrapped_attrs=!1,this.alignment_size=0,this.tag_complete=!1,this.tag_start_char="",this.tag_check="",!d)this.tag_complete=!0;else{var c;this.tag_start_char=d.text[0],this.text=d.text,this.tag_start_char==="<"?(c=d.text.match(/^<([^\s>]*)/),this.tag_check=c?c[1]:""):(c=d.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/),this.tag_check=c?c[1]:"",(d.text.startsWith("{{#>")||d.text.startsWith("{{~#>"))&&this.tag_check[0]===">"&&(this.tag_check===">"&&d.next!==null?this.tag_check=d.next.text.split(" ")[0]:this.tag_check=d.text.split(">")[1])),this.tag_check=this.tag_check.toLowerCase(),d.type===i.COMMENT&&(this.tag_complete=!0),this.is_start_tag=this.tag_check.charAt(0)!=="/",this.tag_name=this.is_start_tag?this.tag_check:this.tag_check.substr(1),this.is_end_tag=!this.is_start_tag||d.closed&&d.closed.text==="/>";var p=2;this.tag_start_char==="{"&&this.text.length>=3&&this.text.charAt(2)==="~"&&(p=3),this.is_end_tag=this.is_end_tag||this.tag_start_char==="{"&&(this.text.length<3||/[^#\^]/.test(this.text.charAt(p)))}};b.prototype._get_tag_open_token=function(v){var d=new C(this._tag_stack.get_parser_token(),v);return d.alignment_size=this._options.wrap_attributes_indent_size,d.is_end_tag=d.is_end_tag||f(d.tag_check,this._options.void_elements),d.is_empty_element=d.tag_complete||d.is_start_tag&&d.is_end_tag,d.is_unformatted=!d.tag_complete&&f(d.tag_check,this._options.unformatted),d.is_content_unformatted=!d.is_empty_element&&f(d.tag_check,this._options.content_unformatted),d.is_inline_element=f(d.tag_name,this._options.inline)||this._options.inline_custom_elements&&d.tag_name.includes("-")||d.tag_start_char==="{",d},b.prototype._set_tag_position=function(v,d,c,p,m){if(c.is_empty_element||(c.is_end_tag?c.start_tag_token=this._tag_stack.try_pop(c.tag_name):(this._do_optional_end_element(c)&&(c.is_inline_element||v.print_newline(!1)),this._tag_stack.record_tag(c),(c.tag_name==="script"||c.tag_name==="style")&&!(c.is_unformatted||c.is_content_unformatted)&&(c.custom_beautifier_name=u(c.tag_check,d)))),f(c.tag_check,this._options.extra_liners)&&(v.print_newline(!1),v._output.just_added_blankline()||v.print_newline(!0)),c.is_empty_element){if(c.tag_start_char==="{"&&c.tag_check==="else"){this._tag_stack.indent_to_tag(["if","unless","each"]),c.indent_content=!0;var k=v.current_line_has_match(/{{#if/);k||v.print_newline(!1)}c.tag_name==="!--"&&m.type===i.TAG_CLOSE&&p.is_end_tag&&c.text.indexOf(`
`)===-1||(c.is_inline_element||c.is_unformatted||v.print_newline(!1),this._calcluate_parent_multiline(v,c))}else if(c.is_end_tag){var g=!1;g=c.start_tag_token&&c.start_tag_token.multiline_content,g=g||!c.is_inline_element&&!(p.is_inline_element||p.is_unformatted)&&!(m.type===i.TAG_CLOSE&&c.start_tag_token===p)&&m.type!=="TK_CONTENT",(c.is_content_unformatted||c.is_unformatted)&&(g=!1),g&&v.print_newline(!1)}else c.indent_content=!c.custom_beautifier_name,c.tag_start_char==="<"&&(c.tag_name==="html"?c.indent_content=this._options.indent_inner_html:c.tag_name==="head"?c.indent_content=this._options.indent_head_inner_html:c.tag_name==="body"&&(c.indent_content=this._options.indent_body_inner_html)),!(c.is_inline_element||c.is_unformatted)&&(m.type!=="TK_CONTENT"||c.is_content_unformatted)&&v.print_newline(!1),this._calcluate_parent_multiline(v,c)},b.prototype._calcluate_parent_multiline=function(v,d){d.parent&&v._output.just_added_newline()&&!((d.is_inline_element||d.is_unformatted)&&d.parent.is_inline_element)&&(d.parent.multiline_content=!0)};var M=["address","article","aside","blockquote","details","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","main","menu","nav","ol","p","pre","section","table","ul"],T=["a","audio","del","ins","map","noscript","video"];return b.prototype._do_optional_end_element=function(v){var d=null;if(!(v.is_empty_element||!v.is_start_tag||!v.parent)){if(v.tag_name==="body")d=d||this._tag_stack.try_pop("head");else if(v.tag_name==="li")d=d||this._tag_stack.try_pop("li",["ol","ul","menu"]);else if(v.tag_name==="dd"||v.tag_name==="dt")d=d||this._tag_stack.try_pop("dt",["dl"]),d=d||this._tag_stack.try_pop("dd",["dl"]);else if(v.parent.tag_name==="p"&&M.indexOf(v.tag_name)!==-1){var c=v.parent.parent;(!c||T.indexOf(c.tag_name)===-1)&&(d=d||this._tag_stack.try_pop("p"))}else v.tag_name==="rp"||v.tag_name==="rt"?(d=d||this._tag_stack.try_pop("rt",["ruby","rtc"]),d=d||this._tag_stack.try_pop("rp",["ruby","rtc"])):v.tag_name==="optgroup"?d=d||this._tag_stack.try_pop("optgroup",["select"]):v.tag_name==="option"?d=d||this._tag_stack.try_pop("option",["select","datalist","optgroup"]):v.tag_name==="colgroup"?d=d||this._tag_stack.try_pop("caption",["table"]):v.tag_name==="thead"?(d=d||this._tag_stack.try_pop("caption",["table"]),d=d||this._tag_stack.try_pop("colgroup",["table"])):v.tag_name==="tbody"||v.tag_name==="tfoot"?(d=d||this._tag_stack.try_pop("caption",["table"]),d=d||this._tag_stack.try_pop("colgroup",["table"]),d=d||this._tag_stack.try_pop("thead",["table"]),d=d||this._tag_stack.try_pop("tbody",["table"])):v.tag_name==="tr"?(d=d||this._tag_stack.try_pop("caption",["table"]),d=d||this._tag_stack.try_pop("colgroup",["table"]),d=d||this._tag_stack.try_pop("tr",["table","thead","tbody","tfoot"])):(v.tag_name==="th"||v.tag_name==="td")&&(d=d||this._tag_stack.try_pop("td",["table","thead","tbody","tfoot","tr"]),d=d||this._tag_stack.try_pop("th",["table","thead","tbody","tfoot","tr"]));return v.parent=this._tag_stack.get_parser_token(),d}},Lr.Beautifier=b,Lr}var Iu;function Vf(){if(Iu)return Ri.exports;Iu=1;var e=Wf().Beautifier,n=c0().Options;function t(i,a,r,o){var l=new e(i,a,r,o);return l.beautify()}return Ri.exports=t,Ri.exports.defaultOptions=function(){return new n},Ri.exports}var Ou;function Uf(){if(Ou)return Ot;Ou=1;var e=Rf(),n=Hf(),t=Vf();function i(a,r,o,l){return o=o||e,l=l||n,t(a,r,o,l)}return i.defaultOptions=t.defaultOptions,Ot.js=e,Ot.css=n,Ot.html=i,Ot}(function(e){function n(t,i,a){var r=function(o,l){return t.js_beautify(o,l)};return r.js=t.js_beautify,r.css=i.css_beautify,r.html=a.html_beautify,r.js_beautify=t.js_beautify,r.css_beautify=i.css_beautify,r.html_beautify=a.html_beautify,r}(function(t){var i=Uf();i.js_beautify=i.js,i.css_beautify=i.css,i.html_beautify=i.html,t.exports=n(i,i,i)})(e)})(a0);var $f=a0.exports;const Hi=Sa($f),Yf={html:"html",react:"jsx",vue:"html"};function Ce(e){const{title:n,frameId:t,componentId:i,data:a,placeholder:r,iframeHeight:o}=e,[l,u]=B.useState(!0),[f,y]=B.useState("html"),[x,b]=B.useState("html"),[C,M]=B.useState(""),T=(p,m)=>{const k={indent_size:2,space_in_empty_paren:!0};if(m==="vue"){const g=p.match(/<template>([\s\S]*)<\/template>/);let w=(g==null?void 0:g.length)>0&&g[0];w=Hi.html(w,k);const _=p.match(/<script>([\s\S]*)<\/script>/);let N=(_==null?void 0:_.length)>0&&_[0];N=Hi.js(N,k);const h=p.match(/<style>([\s\S]*)<\/style>/);let j=(h==null?void 0:h.length)>0&&h[0];return j=Hi.css(j,k),`${w}
${N}
${j}`}return Hi.html(p,k)},v=(p,m)=>uu.highlight(p,uu.languages[m],m),d=p=>{y(p),c(p)},c=p=>{const m=a[p],k=T(m,p),g=Yf[p]||"html";b(g);const w=v(k,g);M(w)};return B.useEffect(()=>{c(f)},[a,f]),s.jsx(B.Fragment,{children:s.jsx("section",{id:i,children:s.jsxs("div",{className:"grid grid-cols-[1fr,auto] items-center",children:[s.jsx(Of,{title:n,isPreview:l,onPreviewChange:p=>u(p),language:f,onChange:d,data:a}),s.jsx(Bf,{frameId:t,previewSrc:a.html,placeholder:r,language:x,isPreview:l,code:C,iframeHeight:o})]})})})}function d0(e){const{moduleName:n,subModuleName:t,title:i,children:a,iframeHeight:r}=e,o=t0(20),l=`frame-${o}`,u=`component-${o}`,f=Hs.Children.map(a,y=>B.cloneElement(y,{componentId:u,frameId:l,iframeHeight:r}));return s.jsxs("div",{className:"relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]",children:[s.jsx("img",{src:"/img/beams-basic.png",alt:"",className:"absolute left-1/2 top-0 -ml-[39rem] w-[113.125rem] max-w-none"}),s.jsxs("div",{className:"max-w-container relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx("h1",{className:"mt-3 text-3xl font-extrabold tracking-tight text-slate-900",children:i}),s.jsxs("nav",{"aria-label":"Breadcrumbs",className:"order-first flex space-x-2 text-sm font-semibold",children:[s.jsx("a",{className:"text-slate-500 hover:text-slate-600",href:"/components#product-application-ui",children:n}),s.jsx("div",{"aria-hidden":"true",className:"select-none text-slate-400",children:"/"}),s.jsx("a",{className:"text-slate-500 hover:text-slate-600",href:"/components#product-application-ui-application-shells",children:t})]})]}),s.jsx("div",{className:"mt-10 space-y-24 pb-px",children:f})]})]})}const qf=`<div class="min-h-full">
  <nav class="border-b border-gray-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              aria-current="page"
              >Dashboard</a
            >
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Team</a
            >
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Projects</a
            >
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Calendar</a
            >
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            type="button"
            class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              style="display: none"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Sign out</a
              >
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 pb-3 pt-2">
        <!-- Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" -->
        <a
          href="#"
          class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          aria-current="page"
          >Dashboard</a
        >
        <a
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Team</a
        >
        <a
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Projects</a
        >
        <a
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Calendar</a
        >
      </div>
      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
          <button
            type="button"
            class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >Your Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >Settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>

  <div class="py-10">
    <header>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          class="text-3xl font-bold leading-tight tracking-tight text-gray-900"
        >
          Dashboard
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</div>
`,Qf=`import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-gray-100">
        <body class="h-full">
        \`\`\`
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-indigo-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700",
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* Your content */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
`,Kf=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-gray-100">
    <body class="h-full">
    \`\`\`
  -->
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-white shadow-sm" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="user.imageUrl"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pb-3 pt-2">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
              'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="border-t border-gray-200 pb-3 pt-4">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-gray-500">
                {{ user.email }}
              </div>
            </div>
            <button
              type="button"
              class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            class="text-3xl font-bold leading-tight tracking-tight text-gray-900"
          >
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
<\/script>
`,Pt=`<x-placeholder>
  <div class="px-4 py-8 sm:px-0">
    <div
      class="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75"
    >
      <svg
        class="absolute inset-0 h-full w-full stroke-gray-900/10"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-003a54e1-93b5-4534-9ccb-0ed8812b8270"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-003a54e1-93b5-4534-9ccb-0ed8812b8270)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  </div>
</x-placeholder>
`,Xf=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-gray-100">
  <body class="h-full">
  \`\`\`
-->
<div class="min-h-full">
  <nav class="bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              aria-current="page"
              >Dashboard</a
            >
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Team</a
            >
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Projects</a
            >
            <a
              href="#"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >Calendar</a
            >
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            type="button"
            class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              style="display: none"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Sign out</a
              >
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 pb-3 pt-2">
        <!-- Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" -->
        <a
          href="#"
          class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          aria-current="page"
          >Dashboard</a
        >
        <a
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Team</a
        >
        <a
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Projects</a
        >
        <a
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Calendar</a
        >
      </div>
      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
          <button
            type="button"
            class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >Your Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >Settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>

  <div class="py-10">
    <header>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          class="text-3xl font-bold leading-tight tracking-tight text-gray-900"
        >
          Dashboard
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</div>
`,Gf=`import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-gray-100">
        <body class="h-full">
        \`\`\`
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-indigo-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700",
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* Your content */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
`,Jf=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-gray-100">
    <body class="h-full">
    \`\`\`
  -->
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-white shadow-sm" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="user.imageUrl"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pb-3 pt-2">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
              'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="border-t border-gray-200 pb-3 pt-4">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-gray-500">
                {{ user.email }}
              </div>
            </div>
            <button
              type="button"
              class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            class="text-3xl font-bold leading-tight tracking-tight text-gray-900"
          >
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
<\/script>
`,Zf=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-gray-100">
  <body class="h-full">
  \`\`\`
-->
<div class="min-h-full">
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
                >Dashboard</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Team</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Projects</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Calendar</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Reports</a
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
                style="display: none"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
          >Dashboard</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Team</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Projects</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Calendar</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Reports</a
        >
      </div>
      <div class="border-t border-gray-700 pb-3 pt-4">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
          <button
            type="button"
            class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Your Profile</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Settings</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Your content -->
    </div>
  </main>
</div>
`,em=`import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-gray-100">
        <body class="h-full">
        \`\`\`
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium",
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700",
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
}
`,nm=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-gray-100">
    <body class="h-full">
    \`\`\`
  -->
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                {{ user.email }}
              </div>
            </div>
            <button
              type="button"
              class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
<\/script>
`,tm=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-gray-100">
  <body class="h-full">
  \`\`\`
-->
<div class="min-h-full">
  <nav class="bg-indigo-600">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
              alt="Your Company"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
              <a
                href="#"
                class="rounded-md bg-indigo-700 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
                >Dashboard</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                >Team</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                >Projects</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                >Calendar</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                >Reports</a
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="relative rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex max-w-xs items-center rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
                style="display: none"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
        <a
          href="#"
          class="block rounded-md bg-indigo-700 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
          >Dashboard</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
          >Team</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
          >Projects</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
          >Calendar</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
          >Reports</a
        >
      </div>
      <div class="border-t border-indigo-700 pb-3 pt-4">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-indigo-300">
              tom@example.com
            </div>
          </div>
          <button
            type="button"
            class="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
            >Your Profile</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
            >Settings</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <h1 class="text-lg font-semibold leading-6 text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Your content -->
    </div>
  </main>
</div>
`,im=`import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-gray-100">
        <body class="h-full">
        \`\`\`
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-indigo-600">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-indigo-700 text-white"
                                : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                              "rounded-md px-3 py-2 text-sm font-medium",
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700",
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-700 text-white"
                          : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                        "block rounded-md px-3 py-2 text-base font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-indigo-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-indigo-300">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
}
`,am=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-gray-100">
    <body class="h-full">
    \`\`\`
  -->
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-indigo-600" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-indigo-700 text-white'
                      : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="relative rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="relative flex max-w-xs items-center rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  >
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-indigo-700 text-white'
                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="border-t border-indigo-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-indigo-300">
                {{ user.email }}
              </div>
            </div>
            <button
              type="button"
              class="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-white shadow-sm">
      <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h1 class="text-lg font-semibold leading-6 text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
<\/script>
`,rm=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-gray-100">
  <body class="h-full">
  \`\`\`
-->
<div class="min-h-full">
  <div class="bg-gray-800 pb-32">
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="border-b border-gray-700">
          <div class="flex h-16 items-center justify-between px-4 sm:px-0">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a
                    href="#"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                    >Dashboard</a
                  >
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Team</a
                  >
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Projects</a
                  >
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Calendar</a
                  >
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Reports</a
                  >
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="relative ml-3">
                  <div>
                    <button
                      type="button"
                      class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="absolute -inset-1.5"></span>
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                    style="display: none"
                  >
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                      >Your Profile</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                      >Settings</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      >Sign out</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="border-b border-gray-700 md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 py-3 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
            >Dashboard</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Team</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Projects</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Calendar</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Reports</a
          >
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >Your Profile</a
            >
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >Settings</a
            >
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>
    <header class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
      </div>
    </header>
  </div>

  <main class="-mt-32">
    <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <!-- Your content -->
      </div>
    </div>
  </main>
</div>
`,sm=`import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-gray-100">
        <body class="h-full">
        \`\`\`
      */}
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                          />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "rounded-md px-3 py-2 text-sm font-medium",
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700",
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                  <div className="space-y-1 px-2 py-3 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Dashboard
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              {/* Your content */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
`,om=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-gray-100">
    <body class="h-full">
    \`\`\`
  -->
  <div class="min-h-full">
    <div class="bg-gray-800 pb-32">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="border-b border-gray-700">
            <div class="flex h-16 items-center justify-between px-4 sm:px-0">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <a
                      v-for="item in navigation"
                      :key="item.name"
                      :href="item.href"
                      :class="[
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      ]"
                      :aria-current="item.current ? 'page' : undefined"
                      >{{ item.name }}</a
                    >
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">View notifications</span>
                    <BellIcon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Profile dropdown -->
                  <Menu as="div" class="relative ml-3">
                    <div>
                      <MenuButton
                        class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">Open user menu</span>
                        <img
                          class="h-8 w-8 rounded-full"
                          :src="user.imageUrl"
                          alt=""
                        />
                      </MenuButton>
                    </div>
                    <transition
                      enter-active-class="transition ease-out duration-100"
                      enter-from-class="transform opacity-0 scale-95"
                      enter-to-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-from-class="transform opacity-100 scale-100"
                      leave-to-class="transform opacity-0 scale-95"
                    >
                      <MenuItems
                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <MenuItem
                          v-for="item in userNavigation"
                          :key="item.name"
                          v-slot="{ active }"
                        >
                          <a
                            :href="item.href"
                            :class="[
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            ]"
                            >{{ item.name }}</a
                          >
                        </MenuItem>
                      </MenuItems>
                    </transition>
                  </Menu>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <!-- Mobile menu button -->
                <DisclosureButton
                  class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon
                    v-if="!open"
                    class="block h-6 w-6"
                    aria-hidden="true"
                  />
                  <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel class="border-b border-gray-700 md:hidden">
          <div class="space-y-1 px-2 py-3 sm:px-3">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</DisclosureButton
            >
          </div>
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  :src="user.imageUrl"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">
                  {{ user.name }}
                </div>
                <div class="text-sm font-medium leading-none text-gray-400">
                  {{ user.email }}
                </div>
              </div>
              <button
                type="button"
                class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <DisclosureButton
                v-for="item in userNavigation"
                :key="item.name"
                as="a"
                :href="item.href"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >{{ item.name }}</DisclosureButton
              >
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-white">
            Dashboard
          </h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <!-- Your content -->
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
<\/script>
`;function lm(){return s.jsxs(d0,{moduleName:"Application UI",subModuleName:"Application Shells",title:"Stacked Layouts",iframeHeight:630,children:[s.jsx(Ce,{title:"Light nav with bottom border",data:{html:qf,react:Qf,vue:Kf},placeholder:Pt}),s.jsx(Ce,{title:"Light nav on gray background",data:{html:Xf,react:Gf,vue:Jf},placeholder:Pt}),s.jsx(Ce,{title:"Dark nav with white page header",data:{html:Zf,react:em,vue:nm},placeholder:Pt}),s.jsx(Ce,{title:"Branded nav with compact white page header",data:{html:tm,react:im,vue:am},placeholder:Pt}),s.jsx(Ce,{title:"Dark nav with overlap",data:{html:rm,react:sm,vue:om},placeholder:Pt})]})}const hn=`<x-placeholder>
  <div
    class="relative h-[576px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75"
  >
    <svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
      <defs>
        <pattern
          id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
        </pattern>
      </defs>
      <rect
        stroke="none"
        fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)"
        width="100%"
        height="100%"
      ></rect>
    </svg>
  </div>
</x-placeholder>
`,um=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-white">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-indigo-700 p-2 text-sm font-semibold leading-6 text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-indigo-200">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mt-auto">
                <a
                  href="#"
                  class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
    >
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-indigo-700 p-2 text-sm font-semibold leading-6 text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-indigo-200">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <a
              href="#"
              class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
            >
              <svg
                class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="lg:pl-72">
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
    >
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <!-- Separator -->
      <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="relative flex flex-1" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <svg
            class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            id="search-field"
            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Separator -->
          <div
            class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          ></div>

          <!-- Profile dropdown -->
          <div class="relative">
            <button
              type="button"
              class="-m-1.5 flex items-center p-1.5"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="hidden lg:flex lg:items-center">
                <span
                  class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true"
                  >Tom Cook</span
                >
                <svg
                  class="ml-2 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              style="display: none"
            >
              <!-- Active: "bg-gray-50", Not Active: "" -->
              <a
                href="#"
                class="block px-3 py-1 text-sm leading-6 text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your profile</a
              >
              <a
                href="#"
                class="block px-3 py-1 text-sm leading-6 text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</div>
`,cm=`/*
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
*/
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-indigo-200">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-indigo-200">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900",
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  );
}
`,dm=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-white">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-white'
                                  : 'text-indigo-200 group-hover:text-white',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-indigo-200"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <a
                        href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        <Cog6ToothIcon
                          class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                          aria-hidden="true"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-white'
                          : 'text-indigo-200 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-indigo-200">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
              >
                <Cog6ToothIcon
                  class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                    >Tom Cook</span
                  >
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
<\/script>
`,hm=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-white">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm font-semibold leading-6 text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mt-auto">
                <a
                  href="#"
                  class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4"
    >
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm font-semibold leading-6 text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <a
              href="#"
              class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <svg
                class="h-6 w-6 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="lg:pl-72">
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
    >
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <!-- Separator -->
      <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="relative flex flex-1" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <svg
            class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            id="search-field"
            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Separator -->
          <div
            class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          ></div>

          <!-- Profile dropdown -->
          <div class="relative">
            <button
              type="button"
              class="-m-1.5 flex items-center p-1.5"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="hidden lg:flex lg:items-center">
                <span
                  class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true"
                  >Tom Cook</span
                >
                <svg
                  class="ml-2 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              style="display: none"
            >
              <!-- Active: "bg-gray-50", Not Active: "" -->
              <a
                href="#"
                class="block px-3 py-1 text-sm leading-6 text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your profile</a
              >
              <a
                href="#"
                class="block px-3 py-1 text-sm leading-6 text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</div>
`,pm=`/*
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
*/
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900",
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  );
}
`,fm=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-white">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-gray-400"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <a
                        href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        <Cog6ToothIcon
                          class="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <Cog6ToothIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                    >Tom Cook</span
                  >
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
<\/script>
`,mm=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-white">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mt-auto">
                <a
                  href="#"
                  class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
    >
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <a
              href="#"
              class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              <svg
                class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="lg:pl-72">
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
    >
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <!-- Separator -->
      <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="relative flex flex-1" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <svg
            class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            id="search-field"
            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Separator -->
          <div
            class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
            aria-hidden="true"
          ></div>

          <!-- Profile dropdown -->
          <div class="relative">
            <button
              type="button"
              class="-m-1.5 flex items-center p-1.5"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="hidden lg:flex lg:items-center">
                <span
                  class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true"
                  >Tom Cook</span
                >
                <svg
                  class="ml-2 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <!-- Active: "bg-gray-50", Not Active: "" -->
              <a
                href="#"
                class="block px-3 py-1 text-sm leading-6 text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your profile</a
              >
              <a
                href="#"
                class="block px-3 py-1 text-sm leading-6 text-gray-900"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</div>
`,gm=`/*
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
*/
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "border-indigo-600 text-indigo-600"
                                        : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? "border-indigo-600 text-indigo-600"
                                : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900",
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  );
}
`,xm=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-white">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-indigo-600'
                                  : 'text-gray-400 group-hover:text-indigo-600',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-gray-400"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              :class="[
                                team.current
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                              ]"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <a
                        href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <Cog6ToothIcon
                          class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      :class="[
                        team.current
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                      ]"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                <Cog6ToothIcon
                  class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                    >Tom Cook</span
                  >
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
<\/script>
`,vm=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-white">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-indigo-700 p-2 text-sm font-semibold leading-6 text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-indigo-200">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-indigo-700 p-2 text-sm font-semibold leading-6 text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-indigo-200">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <a
              href="#"
              class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
            >
              <img
                class="h-8 w-8 rounded-full bg-indigo-700"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <button type="button" class="-m-2.5 p-2.5 text-indigo-200 lg:hidden">
      <span class="sr-only">Open sidebar</span>
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <div class="flex-1 text-sm font-semibold leading-6 text-white">
      Dashboard
    </div>
    <a href="#">
      <span class="sr-only">Your profile</span>
      <img
        class="h-8 w-8 rounded-full bg-indigo-700"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  </div>

  <main class="py-10 lg:pl-72">
    <div class="px-4 sm:px-6 lg:px-8">
      <!-- Your content -->
    </div>
  </main>
</div>
`,ym=`import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-indigo-200">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-indigo-200">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-indigo-700"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-indigo-200 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-indigo-700"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
}
`,bm=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-white">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-white'
                                  : 'text-indigo-200 group-hover:text-white',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-indigo-200"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-white'
                          : 'text-indigo-200 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-indigo-200">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="-mx-6 mt-auto">
              <a
                href="#"
                class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
              >
                <img
                  class="h-8 w-8 rounded-full bg-indigo-700"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-indigo-200 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-white">
        Dashboard
      </div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img
          class="h-8 w-8 rounded-full bg-indigo-700"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>

    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const sidebarOpen = ref(false);
<\/script>
`,_m=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-white">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm font-semibold leading-6 text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm font-semibold leading-6 text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <a
              href="#"
              class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              <img
                class="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <button type="button" class="-m-2.5 p-2.5 text-gray-400 lg:hidden">
      <span class="sr-only">Open sidebar</span>
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <div class="flex-1 text-sm font-semibold leading-6 text-white">
      Dashboard
    </div>
    <a href="#">
      <span class="sr-only">Your profile</span>
      <img
        class="h-8 w-8 rounded-full bg-gray-800"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  </div>

  <main class="py-10 lg:pl-72">
    <div class="px-4 sm:px-6 lg:px-8">
      <!-- Your content -->
    </div>
  </main>
</div>
`,wm=`import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-800"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
}
`,km=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-white">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-gray-400"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="-mx-6 mt-auto">
              <a
                href="#"
                class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
              >
                <img
                  class="h-8 w-8 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-white">
        Dashboard
      </div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-800"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>

    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const sidebarOpen = ref(false);
<\/script>
`,Nm=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-white">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mt-auto">
                <a
                  href="#"
                  class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
    >
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <a
              href="#"
              class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              <svg
                class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="lg:pl-72">
    <div class="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
      <div
        class="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none"
      >
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <svg
              class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              id="search-field"
              class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
              aria-hidden="true"
            ></div>

            <!-- Profile dropdown -->
            <div class="relative">
              <button
                type="button"
                class="-m-1.5 flex items-center p-1.5"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                    >Tom Cook</span
                  >
                  <svg
                    class="ml-2 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div
                class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-50", Not Active: "" -->
                <a
                  href="#"
                  class="block px-3 py-1 text-sm leading-6 text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your profile</a
                >
                <a
                  href="#"
                  class="block px-3 py-1 text-sm leading-6 text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</div>
`,jm=`/*
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
*/
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "border-indigo-600 text-indigo-600"
                                        : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? "border-indigo-600 text-indigo-600"
                                : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="h-6 w-px bg-gray-200 lg:hidden"
                aria-hidden="true"
              />

              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form className="relative flex flex-1" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </form>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Separator */}
                  <div
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                    aria-hidden="true"
                  />

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          Tom Cook
                        </span>
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900",
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Your content */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
`,Cm=`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->
<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-white">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-indigo-600'
                                  : 'text-gray-400 group-hover:text-indigo-600',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-gray-400"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              :class="[
                                team.current
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                              ]"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <a
                        href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <Cog6ToothIcon
                          class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      :class="[
                        team.current
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                      ]"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                <Cog6ToothIcon
                  class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div
          class="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none"
        >
          <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            @click="sidebarOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Separator -->
          <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

          <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form class="relative flex flex-1" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <MagnifyingGlassIcon
                class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="search-field"
                class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                type="search"
                name="search"
              />
            </form>
            <div class="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Separator -->
              <div
                class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                aria-hidden="true"
              />

              <!-- Profile dropdown -->
              <Menu as="div" class="relative">
                <MenuButton class="-m-1.5 flex items-center p-1.5">
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span class="hidden lg:flex lg:items-center">
                    <span
                      class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                      aria-hidden="true"
                      >Tom Cook</span
                    >
                    <ChevronDownIcon
                      class="ml-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </MenuButton>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900',
                        ]"
                        >{{ item.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
<\/script>
`,Tm=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-gray-50">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"
    >
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <a
              href="#"
              class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <img
                class="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
      <span class="sr-only">Open sidebar</span>
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">
      Dashboard
    </div>
    <a href="#">
      <span class="sr-only">Your profile</span>
      <img
        class="h-8 w-8 rounded-full bg-gray-50"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  </div>

  <main class="py-10 lg:pl-72">
    <div class="px-4 sm:px-6 lg:px-8">
      <!-- Your content -->
    </div>
  </main>
</div>
`,Sm=`import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-gray-50">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "border-indigo-600 text-indigo-600"
                                        : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? "border-indigo-600 text-indigo-600"
                                : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
}
`,Mm=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-gray-50">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-indigo-600'
                                  : 'text-gray-400 group-hover:text-indigo-600',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-gray-400"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              :class="[
                                team.current
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                              ]"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      :class="[
                        team.current
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                      ]"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="-mx-6 mt-auto">
              <a
                href="#"
                class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              >
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">
        Dashboard
      </div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>

    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const sidebarOpen = ref(false);
<\/script>
`,Em=`<!--
  This example requires updating your template:

  \`\`\`
  <html class="h-full bg-white">
  <body class="h-full">
  \`\`\`
-->
<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900/80"></div>

    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative mr-16 flex w-full max-w-xs flex-1">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2"
        >
          <div class="flex h-16 shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <svg
                        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >H</span
                      >
                      <span class="truncate">Heroicons</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >T</span
                      >
                      <span class="truncate">Tailwind Labs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <span
                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                        >W</span
                      >
                      <span class="truncate">Workcation</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"
    >
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Documents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <svg
                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li>
                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >H</span
                  >
                  <span class="truncate">Heroicons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >T</span
                  >
                  <span class="truncate">Tailwind Labs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600"
                    >W</span
                  >
                  <span class="truncate">Workcation</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <a
              href="#"
              class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <img
                class="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
      <span class="sr-only">Open sidebar</span>
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">
      Dashboard
    </div>
    <a href="#">
      <span class="sr-only">Your profile</span>
      <img
        class="h-8 w-8 rounded-full bg-gray-50"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  </div>

  <main class="py-10 lg:pl-72">
    <div class="px-4 sm:px-6 lg:px-8">
      <!-- Your content -->
    </div>
  </main>
</div>
`,Dm=`import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        \`\`\`
        <html class="h-full bg-white">
        <body class="h-full">
        \`\`\`
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "border-indigo-600 text-indigo-600"
                                        : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? "border-indigo-600 text-indigo-600"
                                : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
}
`,Im=`<template>
  <!--
    This example requires updating your template:

    \`\`\`
    <html class="h-full bg-white">
    <body class="h-full">
    \`\`\`
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-indigo-600'
                                  : 'text-gray-400 group-hover:text-indigo-600',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-gray-400"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            ]"
                          >
                            <span
                              :class="[
                                team.current
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                              ]"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    ]"
                  >
                    <span
                      :class="[
                        team.current
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                      ]"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="-mx-6 mt-auto">
              <a
                href="#"
                class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              >
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">
        Dashboard
      </div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>

    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const sidebarOpen = ref(false);
<\/script>
`;function Om(){return s.jsxs(d0,{moduleName:"Application UI",subModuleName:"Application Shells",title:"Sidebar Layouts",iframeHeight:720,children:[s.jsx(Ce,{title:"Brand sidebar with header",data:{html:um,react:cm,vue:dm},placeholder:hn}),s.jsx(Ce,{title:"Dark sidebar with header",data:{html:hm,react:pm,vue:fm},placeholder:hn}),s.jsx(Ce,{title:"Light sidebar with header",data:{html:mm,react:gm,vue:xm},placeholder:hn}),s.jsx(Ce,{title:"Brand sidebar",data:{html:vm,react:ym,vue:bm},placeholder:hn}),s.jsx(Ce,{title:"Dark sidebar",data:{html:_m,react:wm,vue:km},placeholder:hn}),s.jsx(Ce,{title:"Light sidebar with constrained content area",data:{html:Nm,react:jm,vue:Cm},placeholder:hn}),s.jsx(Ce,{title:"Light sidebar with off-white background",data:{html:Tm,react:Sm,vue:Mm},placeholder:hn}),s.jsx(Ce,{title:"Light sidebar",data:{html:Em,react:Dm,vue:Im},placeholder:hn})]})}const Bm=s.jsxs(Nf,{children:[s.jsx(ea,{path:"/",element:s.jsx(Mf,{})}),s.jsx(ea,{path:"/stacked",element:s.jsx(lm,{})}),s.jsx(ea,{path:"/sidebar",element:s.jsx(Om,{})})]});function Pm(){return s.jsxs(s.Fragment,{children:[s.jsx(Tf,{}),Bm]})}Fr.createRoot(document.getElementById("root")).render(s.jsx(Hs.StrictMode,{children:s.jsx(Cf,{basename:"/tailwind-components",children:s.jsx(Pm,{})})}));
