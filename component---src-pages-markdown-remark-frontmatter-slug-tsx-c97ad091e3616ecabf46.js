"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[141],{29149:function(e,t,n){var o=n(67169),r=Object.prototype.hasOwnProperty,a={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function i(e){var t;if("tr"===e.tagName||"td"===e.tagName||"th"===e.tagName)for(t in a)r.call(a,t)&&void 0!==e.properties[t]&&(l(e,a[t],e.properties[t]),delete e.properties[t])}function l(e,t,n){var o=(e.properties.style||"").trim();o&&!/;\s*/.test(o)&&(o+=";"),o&&(o+=" ");var r=o+t+": "+n+";";e.properties.style=r}e.exports=function(e){return o(e,"element",i),e}},67522:function(e){function t(e){if("string"==typeof e)return function(e){return t;function t(t){return Boolean(t&&t.type===e)}}(e);if(null==e)return r;if("object"==typeof e)return("length"in e?o:n)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function n(e){return function(t){var n;for(n in e)if(t[n]!==e[n])return!1;return!0}}function o(e){var n=function(e){for(var n=[],o=e.length,r=-1;++r<o;)n[r]=t(e[r]);return n}(e),o=n.length;return function(){var e=-1;for(;++e<o;)if(n[e].apply(this,arguments))return!0;return!1}}function r(){return!0}e.exports=t},67169:function(e,t,n){e.exports=l;var o=n(95444),r=o.CONTINUE,a=o.SKIP,i=o.EXIT;function l(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null),o(e,t,(function(e,t){var o=t[t.length-1],r=o?o.children.indexOf(e):null;return n(e,r,o)}),r)}l.CONTINUE=r,l.SKIP=a,l.EXIT=i},95444:function(e,t,n){e.exports=l;var o=n(67522),r=!0,a="skip",i=!1;function l(e,t,n,r){var l;function c(e,o,d){var p,u=[];return(t&&!l(e,o,d[d.length-1]||null)||(u=s(n(e,d)))[0]!==i)&&e.children&&u[0]!==a?(p=s(function(e,t){var n,o=-1,a=r?-1:1,l=(r?e.length:o)+a;for(;l>o&&l<e.length;){if((n=c(e[l],l,t))[0]===i)return n;l="number"==typeof n[1]?n[1]:l+a}}(e.children,d.concat(e))),p[0]===i?p:u):u}"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null),l=o(t),c(e,null,[])}function s(e){return null!==e&&"object"==typeof e&&"length"in e?e:"number"==typeof e?[r,e]:[e]}l.CONTINUE=r,l.SKIP=a,l.EXIT=i},79504:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(20925),r=n(50451),a=n(59364),i=n(79028),l=n(4674),s=n(22376),c=n(6506),d=n(10760),p=n(27734),u=n(29812),h=n(2213),f=n(36190),m=n(77202);function v(e){return(0,m.Z)("MuiButton",e)}var y=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=a.createContext({});var g=a.createContext(void 0),x=n(4404);const w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,h.Z)(n.color)}`],t[`size${(0,h.Z)(n.size)}`],t[`${n.variant}Size${(0,h.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,o;const a="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${y.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${y.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(o=e.palette).getContrastText)?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}})),z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),k=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))));var C=a.forwardRef((function(e,t){const n=a.useContext(b),c=a.useContext(g),d=(0,l.Z)(n,e),u=(0,p.Z)({props:d,name:"MuiButton"}),{children:f,color:m="primary",component:y="button",className:S,disabled:C=!1,disableElevation:E=!1,disableFocusRipple:I=!1,endIcon:$,focusVisibleClassName:N,fullWidth:R=!1,size:P="medium",startIcon:O,type:T,variant:B="text"}=u,W=(0,o.Z)(u,w),j=(0,r.Z)({},u,{color:m,component:y,disabled:C,disableElevation:E,disableFocusRipple:I,fullWidth:R,size:P,type:T,variant:B}),F=(e=>{const{color:t,disableElevation:n,fullWidth:o,size:a,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(a)}`,`${i}Size${(0,h.Z)(a)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(a)}`]},d=(0,s.Z)(c,v,l);return(0,r.Z)({},l,d)})(j),M=O&&(0,x.jsx)(z,{className:F.startIcon,ownerState:j,children:O}),L=$&&(0,x.jsx)(k,{className:F.endIcon,ownerState:j,children:$}),V=c||"";return(0,x.jsxs)(Z,(0,r.Z)({ownerState:j,className:(0,i.Z)(n.className,F.root,S,V),component:y,disabled:C,focusRipple:!I,focusVisibleClassName:(0,i.Z)(F.focusVisible,N),ref:t,type:T},W,{classes:F,children:[M,f,L]}))}))},46168:function(e,t,n){const o=n(59364).createContext(void 0);t.Z=o},12301:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(59364),r=n(46168);function a(){return o.useContext(r.Z)}},571:function(e,t,n){var o,r=n(72087),a=n(10760),i=n(1672);const l=(0,a.ZP)(i.Z)(o||(o=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));t.Z=l},13313:function(e,t,n){n.r(t),n.d(t,{Head:function(){return J},default:function(){return G}});var o=n(72087),r=n(59364),a=n(10760),i=n(52049),l=n(25910),s=n(75782),c=n(22901),d=n(23940),p=n(10508),u=n(19854),h=n(36415),f=n(33873),m=n(82337);const v={}.hasOwnProperty;function y(e,t,n){if("function"!=typeof e)throw new TypeError("h is not a function");const o=function(e){const t=e("div",{});return Boolean(t&&("_owner"in t||"_store"in t)&&(void 0===t.key||null===t.key))}(e),r=function(e){const t=e("div",{});return Boolean(t&&t.context&&t.context._isVue)}(e),a=function(e){const t=e("div",{});return"VirtualNode"===t.type}(e);let i,l;if("string"==typeof n||"boolean"==typeof n?(i=n,n={}):(n||(n={}),i=n.prefix),t&&"root"===t.type){const e=t.children[0];l=1===t.children.length&&"element"===e.type?e:{type:"element",tagName:"div",properties:{},children:t.children}}else{if(!t||"element"!==t.type)throw new Error("Expected root or element, not `"+(t&&t.type||t)+"`");l=t}return b(e,l,{schema:"svg"===n.space?c.YP:c.dy,prefix:null==i?o||r||a?"h-":void 0:"string"==typeof i?i:i?"h-":void 0,key:0,react:o,vue:r,vdom:a,hyperscript:x(e)})}function b(e,t,n){const o=n.schema;let r=o,a=t.tagName;const i={},l=[];let s,d=-1;for(s in"html"===o.space&&"svg"===a.toLowerCase()&&(r=c.YP,n.schema=r),t.properties)t.properties&&v.call(t.properties,s)&&g(i,s,t.properties[s],n,a);if(n.vdom&&("html"===r.space?a=a.toUpperCase():r.space&&(i.namespace=m.t[r.space])),n.prefix&&(n.key++,i.key=n.prefix+n.key),t.children)for(;++d<t.children.length;){const o=t.children[d];"element"===o.type?l.push(b(e,o,n)):"text"===o.type&&l.push(o.value)}return n.schema=o,l.length>0?e.call(t,a,i,l):e.call(t,a,i)}function g(e,t,n,o,r){const a=(0,d.s)(o.schema,t);let i;null==n||"number"==typeof n&&Number.isNaN(n)||!1===n&&(o.vue||o.vdom||o.hyperscript)||!n&&a.boolean&&(o.vue||o.vdom||o.hyperscript)||(Array.isArray(n)&&(n=a.commaSeparated?(0,h.P)(n):(0,u.P)(n)),a.boolean&&o.hyperscript&&(n=""),"style"===a.property&&"string"==typeof n&&(o.react||o.vue||o.vdom)&&(n=function(e,t){const n={};try{(0,f.Z)(e,((e,t)=>{"-ms-"===e.slice(0,4)&&(e="ms-"+e.slice(4)),n[e.replace(/-([a-z])/g,((e,t)=>t.toUpperCase()))]=t}))}catch(o){const e=o;throw e.message=t+"[style]"+e.message.slice(9),e}return n}(n,r)),o.vue?"style"!==a.property&&(i="attrs"):a.mustUseProperty||(o.vdom?"style"!==a.property&&(i="attributes"):o.hyperscript&&(i="attrs")),i?e[i]=Object.assign(e[i]||{},{[a.attribute]:n}):a.space&&o.react?e[p.D[a.property]||a.property]=n:e[a.attribute]=n)}function x(e){return"context"in e&&"cleanup"in e}var w=n(29149),S=n(56711);const Z={}.hasOwnProperty,z=new Set(["table","thead","tbody","tfoot","tr"]);function k(e){if(!e||"function"!=typeof e.createElement)throw new TypeError("createElement is not a function");const t=e.createElement,n=!1!==e.fixTableCellAlign;function o(n,o,r){if(r&&z.has(n)&&(r=r.filter((e=>!(0,S.Q)(e)))),e.components&&Z.call(e.components,n)){const a=e.components[n];return e.passNode&&"function"==typeof a&&(o=Object.assign({node:this},o)),t(a,o,r)}return t(n,o,r)}Object.assign(this,{Compiler:function(r){let a=y(o,n?w(r):r,e.prefix);if("root"===r.type)return a=a&&"object"==typeof a&&"type"in a&&"props"in a&&"div"===a.type&&(1!==r.children.length||"element"!==r.children[0].type)?a.props.children:[a],t(e.Fragment||"div",{},a);return a}})}var C,E,I,$,N=n(67606),R=n(75490),P=n(571),O=n(1660),T=n(35694),B=n(9092),W=n(47834),j=n(73574),F=n(37888),M=n(26470),L=n(14011),V=n(95857),A=n(42699),U=n(42901),_=n(82524),q=n(58017),K=n(26219),X=n(26578);const D=(0,a.ZP)(R.Z)(C||(C=(0,o.Z)(["\n  font-size: 0.8em;\n  color: #aaaaaa;\n"]))),H=(0,i.css)(E||(E=(0,o.Z)(["\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  -ms-word-break: break-all;\n  /* This is the dangerous one in WebKit, as it breaks things wherever */\n  word-break: break-all;\n  /* Instead use this non-standard one: */\n  word-break: break-word;\n\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n"]))),Q=(0,a.ZP)("div")(I||(I=(0,o.Z)(["\n  width: 100%;\n  // white-space: pre-line;\n  ",";\n"])),H),Y=(0,a.ZP)("div")($||($=(0,o.Z)(['\n  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";\n  display: flex;\n  flex-direction: row;\n'])));var G=function(e){let{data:t,location:n}=e;const{markdownRemark:o}=t,{frontmatter:a,htmlAst:i,headings:c}=o,d=(0,l.l)().use(s.Z,N.Sl).use(k,{createElement:r.createElement,components:{blockquote:O.Z,input:M.Z,code:q.Z,pre:K.Z,h1:T.XU,h2:T.xD,h3:T.eX,h4:T.Qt,h5:T.qQ,h6:T.hi,hr:B.Z,img:W.Z,a:j.Z,li:F.Z,table:L.Z,td:A.Z,th:V.Z,thead:U.Z,tr:_.Z}});return r.createElement(r.Fragment,null,r.createElement(P.Z,{maxWidth:"md"},r.createElement(D,{variant:"body1"},a.title,", written by ",a.author," ",a.date&&"on "+a.date+" ",a.edited&&a.edited!==a.date&&"(Edited "+a.edited+")"),r.createElement(Y,null,r.createElement("div",null,r.createElement(X.KM,{headings:c})),r.createElement(Q,null,d.stringify(d.runSync(i))))))};function J(e){let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:o}=n;return r.createElement(r.Fragment,null,r.createElement("title",null,o.title," | dustbringer.github.io"),r.createElement("meta",{name:"description",content:""+o.title}))}}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-tsx-c97ad091e3616ecabf46.js.map