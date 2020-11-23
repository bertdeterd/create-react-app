/*! For license information please see 28368535.e441e8dc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,y=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(y,c(c({ref:t},l),{},{components:r})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function w(){}function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=O.prototype;var S=j.prototype=new w;S.constructor=j,n(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},P={current:null},_=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:P.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,R=[];function $(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return r(n,e,""===t?"."+A(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+A(o=e[u],u);c+=D(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=b&&e[b]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)c+=D(o=o.value,l=t+A(o,u++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function I(e,t,r){return null==e?0:D(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(T,"$&/")+"/"),I(e,N,t=$(t,a,n,o)),M(t)}function H(){var e=k.current;if(null===e)throw Error(m(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,L,t=$(null,null,t,r)),M(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(m(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,r){return H().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,r){return H().useReducer(e,t,r)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:c,Profiler:l,StrictMode:u,Suspense:d,createElement:x,cloneElement:function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=P.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n}},q={default:F},J=q&&F||q;e.exports=J.default||J},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=i(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(u[s]=r[s]);if(n){c=n(r);for(var f=0;f<c.length;f++)a.call(r,c[f])&&(u[c[f]]=r[c[f]])}}return u}},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(114),r(113)),i={id:"pre-rendering-into-static-html-files",title:"Pre-Rendering into Static HTML Files",sidebar_label:"Pre-Rendering Static HTML"},c={unversionedId:"pre-rendering-into-static-html-files",id:"pre-rendering-into-static-html-files",isDocsHomePage:!1,title:"Pre-Rendering into Static HTML Files",description:"If you\u2019re hosting your build with a static hosting provider you can use react-snapshot or react-snap to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or \u201chydrated\u201d, when the JavaScript bundle has loaded.",source:"@site/../docs/pre-rendering-into-static-html-files.md",slug:"/pre-rendering-into-static-html-files",permalink:"/docs/pre-rendering-into-static-html-files",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/pre-rendering-into-static-html-files.md",version:"current",lastUpdatedBy:"Dan Abramov",lastUpdatedAt:1539992995,sidebar_label:"Pre-Rendering Static HTML",sidebar:"docs",previous:{title:"Can I Use Decorators?",permalink:"/docs/can-i-use-decorators"},next:{title:"Advanced Configuration",permalink:"/docs/advanced-configuration"}},u=[],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you\u2019re hosting your ",Object(a.b)("inlineCode",{parentName:"p"},"build")," with a static hosting provider you can use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-snapshot"}),"react-snapshot")," or ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stereobooster/react-snap"}),"react-snap")," to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or \u201chydrated\u201d, when the JavaScript bundle has loaded."),Object(a.b)("p",null,"There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes."),Object(a.b)("p",null,"The primary benefit of pre-rendering is that you get the core content of each page ",Object(a.b)("em",{parentName:"p"},"with")," the HTML payload\u2014regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines."),Object(a.b)("p",null,"You can read more about ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319"}),"zero-configuration pre-rendering (also called snapshotting) here"),"."))}s.isMDXComponent=!0}}]);