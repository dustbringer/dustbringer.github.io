/*! For license information please see component---src-pages-tools-lyric-slides-jsx-bc2c9376c495139f5206.js.LICENSE.txt */
(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[25],{26828:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(32174)),i=n(85893),c=(0,o.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.Z=c},7564:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(32174)),i=n(85893),c=(0,o.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=c},31802:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(32174)),i=n(85893),c=(0,o.default)((0,i.jsx)("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"}),"PresentToAll");t.Z=c},2215:function(e,t,n){n(65743),e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),o=n(t);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var u={exports:{}},f={};Object.defineProperty(f,"__esModule",{value:!0});var d="function"==typeof Symbol&&Symbol.for,p=d?Symbol.for("react.element"):60103,m=d?Symbol.for("react.portal"):60106,h=d?Symbol.for("react.fragment"):60107,w=d?Symbol.for("react.strict_mode"):60108,y=d?Symbol.for("react.profiler"):60114,v=d?Symbol.for("react.provider"):60109,b=d?Symbol.for("react.context"):60110,g=d?Symbol.for("react.async_mode"):60111,E=d?Symbol.for("react.concurrent_mode"):60111,S=d?Symbol.for("react.forward_ref"):60112,x=d?Symbol.for("react.suspense"):60113,C=d?Symbol.for("react.memo"):60115,k=d?Symbol.for("react.lazy"):60116;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case p:switch(e=e.type){case g:case E:case h:case y:case w:case x:return e;default:switch(e=e&&e.$$typeof){case b:case S:case v:return e;default:return t}}case k:case C:case m:return t}}}function j(e){return O(e)===E}function R(){}function _(){}f.typeOf=O,f.AsyncMode=g,f.ConcurrentMode=E,f.ContextConsumer=b,f.ContextProvider=v,f.Element=p,f.ForwardRef=S,f.Fragment=h,f.Lazy=k,f.Memo=C,f.Portal=m,f.Profiler=y,f.StrictMode=w,f.Suspense=x,f.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===h||e===E||e===y||e===w||e===x||"object"==typeof e&&null!==e&&(e.$$typeof===k||e.$$typeof===C||e.$$typeof===v||e.$$typeof===b||e.$$typeof===S)},f.isAsyncMode=function(e){return j(e)||O(e)===g},f.isConcurrentMode=j,f.isContextConsumer=function(e){return O(e)===b},f.isContextProvider=function(e){return O(e)===v},f.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===p},f.isForwardRef=function(e){return O(e)===S},f.isFragment=function(e){return O(e)===h},f.isLazy=function(e){return O(e)===k},f.isMemo=function(e){return O(e)===C},f.isPortal=function(e){return O(e)===m},f.isProfiler=function(e){return O(e)===y},f.isStrictMode=function(e){return O(e)===w},f.isSuspense=function(e){return O(e)===x},Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty),_.resetWarningCache=R,u.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_,resetWarningCache:R};return n.PropTypes=n,n}();var P=u.exports;function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var T,L,M,I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,n,r,a=Z(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).container=null,t.window=null,t.windowCheckerInterval=null,t.released=!1,t.state={mounted:!1},t}return t=l,(n=[{key:"render",value:function(){return this.state.mounted?o.default.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function(){var e,t=this,n=this.props,r=n.url,o=n.title,i=n.name,c=n.features,a=n.onBlock,l=n.onOpen,s=n.center;if("string"!=typeof s||void 0!==c.width&&void 0!==c.height){if("parent"===s)c.left=window.top.outerWidth/2+window.top.screenX-c.width/2,c.top=window.top.outerHeight/2+window.top.screenY-c.height/2;else if("screen"===s){var u=void 0!==window.screenLeft?window.screenLeft:window.screen.left,f=void 0!==window.screenTop?window.screenTop:window.screen.top,d=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,p=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height;c.left=d/2-c.width/2+u,c.top=p/2-c.height/2+f}}else console.warn("width and height window features must be present when a center prop is provided");if(this.window=window.open(r,i,(e=c,Object.keys(e).reduce((function(t,n){var r=e[n];return"boolean"==typeof r?t.push("".concat(n,"=").concat(r?"yes":"no")):t.push("".concat(n,"=").concat(r)),t}),[]).join(","))),this.container=this.window.document.createElement("div"),this.windowCheckerInterval=setInterval((function(){t.window&&!t.window.closed||t.release()}),50),this.window){if(this.window.document.title=o,this.container=this.window.document.getElementById("new-window-container"),null===this.container)this.container=this.window.document.createElement("div"),this.container.setAttribute("id","new-window-container"),this.window.document.body.appendChild(this.container);else{var m=this.window.document.getElementById("new-window-container-static");this.window.document.body.removeChild(m)}this.props.copyStyles&&setTimeout((function(){return e=document,n=t.window.document,r=n.createDocumentFragment(),Array.from(e.styleSheets).forEach((function(e){var t;try{t=e.cssRules}catch(e){console.error(e)}if(t){var o=[];Array.from(e.cssRules).forEach((function(e){var t=e.type;if(t!==CSSRule.UNKNOWN_RULE){var n="";n=t===CSSRule.KEYFRAMES_RULE?function(e){var t=["@keyframes",e.name,"{"];return Array.from(e.cssRules).forEach((function(e){t.push(e.keyText,"{",e.style.cssText,"}")})),t.push("}"),t.join(" ")}(e):[CSSRule.IMPORT_RULE,CSSRule.FONT_FACE_RULE].includes(t)?function(e){return e.cssText.split("url(").map((function(e){return"/"===e[1]?"".concat(e.slice(0,1)).concat(window.location.origin).concat(e.slice(1)):e})).join("url(")}(e):e.cssText,o.push(n)}}));var i=n.createElement("style");i.textContent=o.join("\n"),r.appendChild(i)}else if(e.href){var c=n.createElement("link");c.rel="stylesheet",c.href=e.href,r.appendChild(c)}})),void n.head.appendChild(r);var e,n,r}),0),"function"==typeof l&&l(this.window),this.window.addEventListener("beforeunload",(function(){return t.release()}))}else"function"==typeof a?a(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function(){if(this.window)if(this.props.closeOnUnmount)this.window.close();else if(this.props.children){var e=this.container.cloneNode(!0);e.setAttribute("id","new-window-container-static"),this.window.document.body.appendChild(e)}}},{key:"release",value:function(){if(!this.released){this.released=!0,clearInterval(this.windowCheckerInterval);var e=this.props.onUnload;"function"==typeof e&&e(null)}}}])&&i(t.prototype,n),r&&i(t,r),l}(r.default.PureComponent);return M={url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onOpen:null,onUnload:null,center:"parent",copyStyles:!0,closeOnUnmount:!0},(L="defaultProps")in(T=I)?Object.defineProperty(T,L,{value:M,enumerable:!0,configurable:!0,writable:!0}):T[L]=M,I.propTypes={children:P.node,url:P.string,name:P.string,title:P.string,features:P.object,onUnload:P.func,onBlock:P.func,onOpen:P.func,center:P.oneOf(["parent","screen"]),copyStyles:P.bool,closeOnUnmount:P.bool},I}(n(67294),n(73935))},21159:function(e,t,n){"use strict";var r=n(67294),o=n(69299),i=n(13366),c=n(93099),a=n(26828),l=n(7564);t.Z=function(e){var t=e.text,n=e.onPrev,s=e.onNext;return r.createElement(o.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},r.createElement(c.Z,{color:"primary",onClick:n,size:"large"},r.createElement(a.Z,{fontSize:"small"})),r.createElement(i.Z,{color:"primary"},t),r.createElement(c.Z,{color:"primary",onClick:s,size:"large"},r.createElement(l.Z,{fontSize:"small"})))}},10036:function(e,t,n){"use strict";n.r(t);var r,o=n(81880),i=n(67294),c=n(40259),a=n(35414),l=n(2215),s=n.n(l),u=n(69299),f=n(46147),d=n(13366),p=n(67589),m=n(31802),h=n(99138),w=n(24219),y=n(57594),v=n(82928),b=n(52611),g=n(35118),E=n(43689),S=n(21159),x=n(53165),C=n(45617),k=n(65714),O=n(83328),j=c.default.div.withConfig({displayName:"lyric-slides__LyricsContainer",componentId:"sc-vj9x1i-0"})([""," white-space:pre-wrap;text-align:center;padding-top:3em;font-weight:bold;font-size:","em;"," ",""],(function(e){return e.fullHeight&&"height: 100vh;"}),(function(e){return e.renderScale||"3"}),(function(e){return e.dark&&"background-color: black;"}),(function(e){return e.dark&&"color: white;"})),R=c.default.div.withConfig({displayName:"lyric-slides__PageNumber",componentId:"sc-vj9x1i-1"})(["position:fixed;bottom:5px;right:5px;font-size:1rem;font-weight:normal;color:grey;"]);t.default=function(){var e=i.useContext(O.k)||{showError:function(){},showSuccess:function(){}},t=e.showError,n=e.showSuccess,c=i.useRef(null),l=i.useState(""),_=l[0],P=l[1],Z=i.useState([""]),T=Z[0],L=Z[1],M=i.useState(!1),I=M[0],z=M[1],N=i.useState(0),U=N[0],$=N[1],A=i.useState(3),H=A[0],W=A[1],F=i.useState(!0),B=F[0],D=F[1],q=i.useState("whitespace"),V=q[0],Y=q[1],K=i.useState(""),Q=K[0],X=K[1],G=function(){return 0!==T.length&&$(Math.min(U+1,T.length-1))},J=function(){return $(Math.max(U-1,0))},ee=i.useCallback((function(e){"ArrowLeft"===e.key?J():"ArrowRight"===e.key&&G()}));i.useEffect((function(){return document.addEventListener("keydown",ee),function(){document.removeEventListener("keydown",ee)}}),[ee]);var te=function(){switch(V){case"whitespace":L(_.split(/\n(?:[^\S\n]*\n)+/));break;case"configHeading":L(_.replace(/^\s*\[.*?\]\s*/,"").split(/(?:[^\S\n]*\n)*\[.*?\](?:[^\S\n]*\n)+/));break;case"custom":try{L(_.split(new RegExp(String.raw(r||(r=(0,o.Z)(["",""])),Q))))}catch(e){t(e.message)}}};return i.useEffect((function(){return c.current&&c.current.window.document.addEventListener("keydown",ee),function(){c.current&&c.current.window.document.removeEventListener("keydown",ee)}}),[I,ee]),i.createElement(i.Fragment,null,i.createElement(a.q,null,i.createElement("title",null,"Lyric Slides - dustbringer.github.io"),i.createElement("meta",{name:"description",content:"Lyric Slides"})),i.createElement(C.Z,{maxWidth:"md"},i.createElement(d.Z,{variant:"h4"},"Lyric Slides"),i.createElement(d.Z,{variant:"body1",gutterBottom:!0},"Shows lyrics with slides."),i.createElement(g.Qc,null,i.createElement(E.Z,{title:"Settings"},i.createElement("strong",null,"Warning!")," Changing these display settings while the slides are being presented will result in styling being removed.",i.createElement(k.Z,null),"Rendered font size (in ",i.createElement(x.Z,{inline:!0},"em"),")",i.createElement(h.ZP,{value:H,onChange:function(e){return W(e.target.value)},step:.1,marks:!0,min:.5,max:5,valueLabelDisplay:"auto"}),i.createElement(u.Z,{sx:{marginLeft:"11px"}},i.createElement(w.Z,{control:i.createElement(y.Z,{checked:B,onChange:function(e){return D(e.target.checked)}}),label:"Dark Mode"})),"Split:",i.createElement(u.Z,{sx:{display:"flex",flexWrap:"nowrap",alignItems:"center",justifyContent:"left"}},i.createElement(b.Z,{color:"primary",size:"small",exclusive:!0,sx:{m:"6px"},value:V,onChange:function(e,t){return null!==t&&Y(t)}},i.createElement(v.Z,{value:"whitespace",disableRipple:!0},"New Lines"),i.createElement(v.Z,{value:"configHeading",disableRipple:!0},"Headings in square brackets"),i.createElement(v.Z,{value:"custom",disableRipple:!0},"Custom")),i.createElement(p.Z,{placeholder:"Custom Split",value:Q,onChange:function(e){return X(e.target.value)},disabled:"custom"!==V,size:"small"})),i.createElement(f.Z,{variant:"contained",disableRipple:!0,sx:{margin:"8px",marginRight:0},onClick:te,title:"Update"},"Update Text"))),i.createElement(u.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"stretch"}},i.createElement(p.Z,{label:"Input",rows:10,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",inputProps:{style:{fontFamily:"Roboto Mono"}},sx:{marginTop:"8px",marginBottom:"8px"},value:_,onChange:function(e){return P(e.target.value)}}),i.createElement(f.Z,{variant:"contained",disableRipple:!0,sx:{margin:"8px",marginRight:0},onClick:function(){te(),I||(z(!0),n("Slides opened in new window."),$(0))},title:"Run"},i.createElement(m.Z,null))),I&&i.createElement(s(),{ref:c,onUnload:function(){z(!1)}},i.createElement(j,{renderScale:H,dark:B,fullHeight:!0},T[U],i.createElement(R,null,U+1,"/",T.length))),"Preview:",i.createElement(S.Z,{text:U+1+"/"+T.length,onPrev:J,onNext:G}),i.createElement(j,{renderScale:H},T[U])))}}}]);
//# sourceMappingURL=component---src-pages-tools-lyric-slides-jsx-bc2c9376c495139f5206.js.map