/*! For license information please see component---src-pages-tools-lyric-slides-jsx-ae242a4ec115dcda9787.js.LICENSE.txt */
(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[780],{26828:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(32174)),i=n(85893),c=(0,o.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.Z=c},7564:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(32174)),i=n(85893),c=(0,o.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=c},31802:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(32174)),i=n(85893),c=(0,o.default)((0,i.jsx)("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"}),"PresentToAll");t.Z=c},2215:function(e,t,n){n(65743),e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),o=n(t);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var u={exports:{}},d={};Object.defineProperty(d,"__esModule",{value:!0});var f="function"==typeof Symbol&&Symbol.for,p=f?Symbol.for("react.element"):60103,m=f?Symbol.for("react.portal"):60106,h=f?Symbol.for("react.fragment"):60107,y=f?Symbol.for("react.strict_mode"):60108,w=f?Symbol.for("react.profiler"):60114,b=f?Symbol.for("react.provider"):60109,g=f?Symbol.for("react.context"):60110,v=f?Symbol.for("react.async_mode"):60111,E=f?Symbol.for("react.concurrent_mode"):60111,S=f?Symbol.for("react.forward_ref"):60112,x=f?Symbol.for("react.suspense"):60113,C=f?Symbol.for("react.memo"):60115,k=f?Symbol.for("react.lazy"):60116;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case p:switch(e=e.type){case v:case E:case h:case w:case y:case x:return e;default:switch(e=e&&e.$$typeof){case g:case S:case b:return e;default:return t}}case k:case C:case m:return t}}}function Z(e){return O(e)===E}function j(){}function P(){}d.typeOf=O,d.AsyncMode=v,d.ConcurrentMode=E,d.ContextConsumer=g,d.ContextProvider=b,d.Element=p,d.ForwardRef=S,d.Fragment=h,d.Lazy=k,d.Memo=C,d.Portal=m,d.Profiler=w,d.StrictMode=y,d.Suspense=x,d.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===h||e===E||e===w||e===y||e===x||"object"==typeof e&&null!==e&&(e.$$typeof===k||e.$$typeof===C||e.$$typeof===b||e.$$typeof===g||e.$$typeof===S)},d.isAsyncMode=function(e){return Z(e)||O(e)===v},d.isConcurrentMode=Z,d.isContextConsumer=function(e){return O(e)===g},d.isContextProvider=function(e){return O(e)===b},d.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===p},d.isForwardRef=function(e){return O(e)===S},d.isFragment=function(e){return O(e)===h},d.isLazy=function(e){return O(e)===k},d.isMemo=function(e){return O(e)===C},d.isPortal=function(e){return O(e)===m},d.isProfiler=function(e){return O(e)===w},d.isStrictMode=function(e){return O(e)===y},d.isSuspense=function(e){return O(e)===x},Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty),P.resetWarningCache=j,u.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:P,resetWarningCache:j};return n.PropTypes=n,n}();var R=u.exports;function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var T,M,I,L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,l=_(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=l.call(this,e)).container=null,t.window=null,t.windowCheckerInterval=null,t.released=!1,t.state={mounted:!1},t}return t=a,(n=[{key:"render",value:function(){return this.state.mounted?o.default.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function(){var e,t=this,n=this.props,r=n.url,o=n.title,i=n.name,c=n.features,l=n.onBlock,a=n.onOpen,s=n.center;if("string"!=typeof s||void 0!==c.width&&void 0!==c.height){if("parent"===s)c.left=window.top.outerWidth/2+window.top.screenX-c.width/2,c.top=window.top.outerHeight/2+window.top.screenY-c.height/2;else if("screen"===s){var u=void 0!==window.screenLeft?window.screenLeft:window.screen.left,d=void 0!==window.screenTop?window.screenTop:window.screen.top,f=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,p=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height;c.left=f/2-c.width/2+u,c.top=p/2-c.height/2+d}}else console.warn("width and height window features must be present when a center prop is provided");if(this.window=window.open(r,i,(e=c,Object.keys(e).reduce((function(t,n){var r=e[n];return"boolean"==typeof r?t.push("".concat(n,"=").concat(r?"yes":"no")):t.push("".concat(n,"=").concat(r)),t}),[]).join(","))),this.container=this.window.document.createElement("div"),this.windowCheckerInterval=setInterval((function(){t.window&&!t.window.closed||t.release()}),50),this.window){if(this.window.document.title=o,this.container=this.window.document.getElementById("new-window-container"),null===this.container)this.container=this.window.document.createElement("div"),this.container.setAttribute("id","new-window-container"),this.window.document.body.appendChild(this.container);else{var m=this.window.document.getElementById("new-window-container-static");this.window.document.body.removeChild(m)}this.props.copyStyles&&setTimeout((function(){return e=document,n=t.window.document,r=n.createDocumentFragment(),Array.from(e.styleSheets).forEach((function(e){var t;try{t=e.cssRules}catch(e){console.error(e)}if(t){var o=[];Array.from(e.cssRules).forEach((function(e){var t=e.type;if(t!==CSSRule.UNKNOWN_RULE){var n="";n=t===CSSRule.KEYFRAMES_RULE?function(e){var t=["@keyframes",e.name,"{"];return Array.from(e.cssRules).forEach((function(e){t.push(e.keyText,"{",e.style.cssText,"}")})),t.push("}"),t.join(" ")}(e):[CSSRule.IMPORT_RULE,CSSRule.FONT_FACE_RULE].includes(t)?function(e){return e.cssText.split("url(").map((function(e){return"/"===e[1]?"".concat(e.slice(0,1)).concat(window.location.origin).concat(e.slice(1)):e})).join("url(")}(e):e.cssText,o.push(n)}}));var i=n.createElement("style");i.textContent=o.join("\n"),r.appendChild(i)}else if(e.href){var c=n.createElement("link");c.rel="stylesheet",c.href=e.href,r.appendChild(c)}})),void n.head.appendChild(r);var e,n,r}),0),"function"==typeof a&&a(this.window),this.window.addEventListener("beforeunload",(function(){return t.release()}))}else"function"==typeof l?l(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function(){if(this.window)if(this.props.closeOnUnmount)this.window.close();else if(this.props.children){var e=this.container.cloneNode(!0);e.setAttribute("id","new-window-container-static"),this.window.document.body.appendChild(e)}}},{key:"release",value:function(){if(!this.released){this.released=!0,clearInterval(this.windowCheckerInterval);var e=this.props.onUnload;"function"==typeof e&&e(null)}}}])&&i(t.prototype,n),r&&i(t,r),a}(r.default.PureComponent);return I={url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onOpen:null,onUnload:null,center:"parent",copyStyles:!0,closeOnUnmount:!0},(M="defaultProps")in(T=L)?Object.defineProperty(T,M,{value:I,enumerable:!0,configurable:!0,writable:!0}):T[M]=I,L.propTypes={children:R.node,url:R.string,name:R.string,title:R.string,features:R.object,onUnload:R.func,onBlock:R.func,onOpen:R.func,center:R.oneOf(["parent","screen"]),copyStyles:R.bool,closeOnUnmount:R.bool},L}(n(67294),n(73935))},21159:function(e,t,n){"use strict";var r=n(67294),o=n(69299),i=n(13366),c=n(93099),l=n(26828),a=n(7564);t.Z=function(e){var t=e.text,n=e.onPrev,s=e.onNext,u=e.prevDisabled,d=void 0===u||u,f=e.nextDisabled,p=void 0===f||f;return r.createElement(o.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},r.createElement(c.Z,{color:"primary",onClick:n,size:"large",disabled:d},r.createElement(l.Z,{fontSize:"small"})),r.createElement(i.Z,{color:"primary"},t),r.createElement(c.Z,{color:"primary",onClick:s,size:"large",disabled:p},r.createElement(a.Z,{fontSize:"small"})))}},10036:function(e,t,n){"use strict";n.r(t);var r,o=n(81880),i=n(67294),c=n(40259),l=n(35414),a=n(2215),s=n.n(a),u=n(9785),d=n(69299),f=n(46147),p=n(13366),m=n(67589),h=n(31802),y=n(99138),w=n(24219),b=n(57594),g=n(82928),v=n(52611),E=n(35118),S=n(43689),x=n(21159),C=n(53165),k=n(45617),O=n(82805),Z=n(83328),j=c.default.div.withConfig({displayName:"lyric-slides__LyricsContainer",componentId:"sc-vj9x1i-0"})([""," text-align:center;padding-top:3em;font-weight:bold;font-size:","em;"," "," & p{white-space:pre-wrap;}"],(function(e){return e.fullHeight&&"height: 100vh;"}),(function(e){return e.renderScale||"3"}),(function(e){return e.dark&&"background-color: black;"}),(function(e){return e.dark&&"color: white;"})),P=c.default.div.withConfig({displayName:"lyric-slides__PageNumber",componentId:"sc-vj9x1i-1"})(["position:fixed;bottom:5px;right:5px;font-size:1rem;font-weight:normal;color:grey;"]),R=c.default.div.withConfig({displayName:"lyric-slides__SettingsSection",componentId:"sc-vj9x1i-2"})(["margin:3px 0;padding-left:0.5rem;border-left:2px solid lightgrey;&:hover{border-left:2px solid grey;}transition:all 0.2s ease;"]);t.default=function(){var e=i.useContext(Z.k)||{showError:function(){},showSuccess:function(){}},t=e.showError,n=e.showSuccess,c=((0,u.Z)(),i.useRef(null)),a=i.useState(""),_=a[0],T=a[1],M=i.useState([""]),I=M[0],L=M[1],z=i.useState(!1),N=z[0],$=z[1],U=i.useState(0),A=U[0],D=U[1],F=i.useState(3),W=F[0],H=F[1],B=i.useState(!0),q=B[0],V=B[1],K=i.useState("whitespace"),Y=K[0],Q=K[1],X=i.useState(""),G=X[0],J=X[1],ee=i.useState(!1),te=ee[0],ne=ee[1],re=i.useState(!1),oe=re[0],ie=re[1],ce=i.useState(!0),le=ce[0],ae=ce[1],se=i.useState(!0),ue=se[0],de=se[1],fe=function(){return 0!==I.length&&D(Math.min(A+1,I.length-1))},pe=function(){return D(Math.max(A-1,0))},me=i.useCallback((function(e){"ArrowLeft"===e.key?pe():"ArrowRight"===e.key&&fe()})),he=function(){switch(Y){case"whitespace":L(_.split(/\n[^\S\n]*\n\s*/));break;case"configHeading":L(_.replace(/^\s*\[.*?\]\s*/,"").split(/\n\s*\[.*?\][^\S\n]*\n\s*/));break;case"custom":try{L(_.split(new RegExp(String.raw(r||(r=(0,o.Z)(["",""])),G))))}catch(e){t(e.message)}}te&&le&&L((function(e){return e.map((function(e,t){return ue&&0===t?e:e.replace(/^([^\r\n]*?(?:verse|chorus|bridge)[^\r\n]*?)(\n|$)/i,"*$1*$2")}))}))};return i.useEffect((function(){return c.current&&c.current.window.document.addEventListener("keydown",me),function(){c.current&&c.current.window.document.removeEventListener("keydown",me)}}),[N,me]),i.createElement(i.Fragment,null,i.createElement(l.q,null,i.createElement("title",null,"Lyric Slides - dustbringer.github.io"),i.createElement("meta",{name:"description",content:"Lyric Slides"})),i.createElement(k.Z,{maxWidth:"md"},i.createElement(p.Z,{variant:"h4"},"Lyric Slides"),i.createElement(p.Z,{variant:"body1",gutterBottom:!0},"Shows lyrics with slides."),i.createElement(E.Qc,null,i.createElement(S.Z,{title:"Settings"},i.createElement("strong",null,"Warning!")," Changing these display settings while the slides are being presented will result in styling being removed. Please close and reopen the slides after changing these settings.",i.createElement(R,null,"Rendered font size (in ",i.createElement(C.Z,{inline:!0},"em"),")",i.createElement(y.ZP,{value:W,onChange:function(e){return H(e.target.value)},step:.1,marks:!0,min:.5,max:5,valueLabelDisplay:"auto"}),i.createElement(w.Z,{control:i.createElement(b.Z,{checked:q,onChange:function(e){return V(e.target.checked)}}),label:"Dark Mode"})),i.createElement(R,null,i.createElement(p.Z,{variant:"body1"},"Split"),i.createElement(d.Z,{sx:{display:"flex",flexWrap:"nowrap",alignItems:"center",justifyContent:"left"}},i.createElement(v.Z,{color:"primary",size:"small",exclusive:!0,sx:{m:"6px"},value:Y,onChange:function(e,t){return null!==t&&Q(t)}},i.createElement(g.Z,{value:"whitespace",disableRipple:!0,title:"New lines; collapsing duplicates"},"New Lines"),i.createElement(g.Z,{value:"configHeading",disableRipple:!0,title:"A heading in square brackets"},"[Config]"),i.createElement(g.Z,{value:"custom",disableRipple:!0,title:"Custom slide splitter in regex"},"Custom")),i.createElement(m.Z,{placeholder:"Custom Split",value:G,onChange:function(e){return J(e.target.value)},disabled:"custom"!==Y,size:"small"}))),i.createElement(R,null,i.createElement(p.Z,{variant:"body1"},"Styling"),i.createElement(w.Z,{control:i.createElement(b.Z,{checked:te,onChange:function(e){return ne(e.target.checked)}}),label:"Use Markdown"}),i.createElement(w.Z,{control:i.createElement(b.Z,{checked:oe,onChange:function(e){return ie(e.target.checked)},disabled:!te}),label:"Plain Preview",title:"Stop rendering markdown in preview"}),i.createElement("br",null),i.createElement(w.Z,{control:i.createElement(b.Z,{checked:le,onChange:function(e){return ae(e.target.checked)},disabled:!te}),label:"Style Stanza Title",title:"Style first line of stanza if they include: verse, chorus, bridge"}),i.createElement(w.Z,{control:i.createElement(b.Z,{checked:ue,onChange:function(e){return de(e.target.checked)},disabled:!te}),label:"Ignore First Slide"})),i.createElement(f.Z,{variant:"contained",disableRipple:!0,onClick:he,title:"Update"},"Update"))),i.createElement(d.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"stretch"}},i.createElement(m.Z,{label:"Input",rows:10,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",inputProps:{style:{fontFamily:"Roboto Mono"}},sx:{marginTop:"8px",marginBottom:"8px"},value:_,onChange:function(e){return T(e.target.value)}}),i.createElement(f.Z,{variant:"contained",disableRipple:!0,sx:{margin:"8px",marginRight:0},onClick:function(){he(),N||($(!0),n("Slides opened in new window."),D(0))},title:"Run"},i.createElement(h.Z,null))),N&&i.createElement(s(),{ref:c,onUnload:function(){$(!1)}},i.createElement(j,{renderScale:W,dark:q,fullHeight:!0},te?i.createElement(O.Mu,{children:I[A]}):i.createElement("p",null,I[A]),i.createElement(P,null,A+1,"/",I.length))),i.createElement(d.Z,{tabIndex:"0",sx:{padding:"5px",borderRadius:"5px",border:"2px solid white","&:hover":{border:"2px solid lightgrey"},"&:focus":{border:"2px solid grey"}},onKeyDown:me},"Preview",i.createElement(x.Z,{text:A+1+"/"+I.length,onPrev:pe,onNext:fe,prevDisabled:A+1<=1,nextDisabled:A+1>=I.length}),i.createElement(j,{renderScale:W},te&&!oe?i.createElement(O.Mu,{children:I[A]}):i.createElement("p",null,I[A])))))}}}]);
//# sourceMappingURL=component---src-pages-tools-lyric-slides-jsx-ae242a4ec115dcda9787.js.map