(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[615],{38125:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;var a=o(n(32174)),r=n(85893),i=(0,a.default)((0,r.jsx)("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}),"DirectionsRun");t.Z=i},39211:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(87462),a=n(63366),r=n(67294),i=n(85505),l=n(8619),c=n(12037),s=n(18297),d=n(23182),u=n(85893),p=["className","component"];var m=n(86756),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,m=void 0===n?"MuiBox-root":n,v=e.generateClassName,g=(0,l.ZP)("div")(c.Z),h=r.forwardRef((function(e,n){var r=(0,d.Z)(t),l=(0,s.Z)(e),c=l.className,h=l.component,f=void 0===h?"div":h,x=(0,a.Z)(l,p);return(0,u.jsx)(g,(0,o.Z)({as:f,ref:n,className:(0,i.Z)(c,v?v(m):m),theme:r},x))}));return h}({defaultTheme:(0,n(78790).Z)(),defaultClassName:"MuiBox-root",generateClassName:m.Z.generate}),g=v},76968:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var o=n(4942),a=n(63366),r=n(87462),i=n(67294),l=n(85505),c=n(96193),s=n(49408),d=n(67663),u=n(98348),p=n(32371),m=n(53679),v=n(49240),g=n(48416);function h(e){return(0,g.Z)("MuiButton",e)}var f=(0,n(62194).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=i.createContext({}),b=n(85893),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=(0,u.ZP)(m.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,v.Z)(n.color))],t["size".concat((0,v.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,v.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,r.Z)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:(0,d.Fq)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:(0,d.Fq)(n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:"1px solid ".concat(n.palette[a.color].main),backgroundColor:(0,d.Fq)(n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:n.palette[a.color].dark,"@media (hover: none)":{backgroundColor:n.palette[a.color].main}}),"&:active":(0,r.Z)({},"contained"===a.variant&&{boxShadow:n.shadows[8]})},(0,o.Z)(t,"&.".concat(f.focusVisible),(0,r.Z)({},"contained"===a.variant&&{boxShadow:n.shadows[6]})),(0,o.Z)(t,"&.".concat(f.disabled),(0,r.Z)({color:n.palette.action.disabled},"outlined"===a.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===a.variant&&"secondary"===a.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===a.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:n.palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===a.variant&&"inherit"!==a.color&&{color:n.palette[a.color].main,border:"1px solid ".concat((0,d.Fq)(n.palette[a.color].main,.5))},"contained"===a.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:n.palette[a.color].contrastText,backgroundColor:n.palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(t,"&.".concat(f.focusVisible),{boxShadow:"none"}),(0,o.Z)(t,"&:active",{boxShadow:"none"}),(0,o.Z)(t,"&.".concat(f.disabled),{boxShadow:"none"}),t)})),y=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,v.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},Z(t))})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,v.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},Z(t))})),C=i.forwardRef((function(e,t){var n=i.useContext(x),o=(0,c.Z)(n,e),d=(0,p.Z)({props:o,name:"MuiButton"}),u=d.children,m=d.color,g=void 0===m?"primary":m,f=d.component,Z=void 0===f?"button":f,C=d.className,R=d.disabled,E=void 0!==R&&R,T=d.disableElevation,k=void 0!==T&&T,I=d.disableFocusRipple,M=void 0!==I&&I,N=d.endIcon,F=d.focusVisibleClassName,B=d.fullWidth,W=void 0!==B&&B,V=d.size,A=void 0===V?"medium":V,P=d.startIcon,$=d.type,O=d.variant,j=void 0===O?"text":O,L=(0,a.Z)(d,S),D=(0,r.Z)({},d,{color:g,component:Z,disabled:E,disableElevation:k,disableFocusRipple:M,fullWidth:W,size:A,type:$,variant:j}),q=function(e){var t=e.color,n=e.disableElevation,o=e.fullWidth,a=e.size,i=e.variant,l=e.classes,c={root:["root",i,"".concat(i).concat((0,v.Z)(t)),"size".concat((0,v.Z)(a)),"".concat(i,"Size").concat((0,v.Z)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,v.Z)(a))],endIcon:["endIcon","iconSize".concat((0,v.Z)(a))]},d=(0,s.Z)(c,h,l);return(0,r.Z)({},l,d)}(D),_=P&&(0,b.jsx)(y,{className:q.startIcon,ownerState:D,children:P}),U=N&&(0,b.jsx)(w,{className:q.endIcon,ownerState:D,children:N});return(0,b.jsxs)(z,(0,r.Z)({ownerState:D,className:(0,l.Z)(C,n.className),component:Z,disabled:E,focusRipple:!M,focusVisibleClassName:(0,l.Z)(q.focusVisible,F),ref:t,type:$},L,{classes:q,children:[_,u,U]}))}))},70648:function(e,t,n){var o=n(17854),a=n(51694),r=n(60614),i=n(84326),l=n(5112)("toStringTag"),c=o.Object,s="Arguments"==i(function(){return arguments}());e.exports=a?i:function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=c(e),l))?n:s?i(t):"Object"==(o=i(t))&&r(t.callee)?"Arguments":o}},10647:function(e,t,n){var o=n(1702),a=n(47908),r=Math.floor,i=o("".charAt),l=o("".replace),c=o("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,o,u,p){var m=n+e.length,v=o.length,g=d;return void 0!==u&&(u=a(u),g=s),l(p,g,(function(a,l){var s;switch(i(l,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,m);case"<":s=u[c(l,1,-1)];break;default:var d=+l;if(0===d)return a;if(d>v){var p=r(d/10);return 0===p?a:p<=v?void 0===o[p-1]?i(l,1):o[p-1]+i(l,1):a}s=o[d-1]}return void 0===s?"":s}))}},47850:function(e,t,n){var o=n(70111),a=n(84326),r=n(5112)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==a(e))}},67066:function(e,t,n){"use strict";var o=n(19670);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},51694:function(e,t,n){var o={};o[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(o)},41340:function(e,t,n){var o=n(17854),a=n(70648),r=o.String;e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},68757:function(e,t,n){"use strict";var o=n(82109),a=n(17854),r=n(46916),i=n(1702),l=n(84488),c=n(60614),s=n(47850),d=n(41340),u=n(58173),p=n(67066),m=n(10647),v=n(5112),g=n(31913),h=v("replace"),f=RegExp.prototype,x=a.TypeError,b=i(p),S=i("".indexOf),Z=i("".replace),z=i("".slice),y=Math.max,w=function(e,t,n){return n>e.length?-1:""===t?n:S(e,t,n)};o({target:"String",proto:!0},{replaceAll:function(e,t){var n,o,a,i,p,v,C,R,E,T=l(this),k=0,I=0,M="";if(null!=e){if((n=s(e))&&(o=d(l("flags"in f?e.flags:b(e))),!~S(o,"g")))throw x("`.replaceAll` does not allow non-global regexes");if(a=u(e,h))return r(a,e,T,t);if(g&&n)return Z(d(T),e,t)}for(i=d(T),p=d(e),(v=c(t))||(t=d(t)),C=p.length,R=y(1,C),k=w(i,p,0);-1!==k;)E=v?d(t(p,k,i)):m(p,i,k,[],void 0,t),M+=z(i,I,k)+E,I=k+C,k=w(i,p,k+R);return I<i.length&&(M+=z(i,I)),M}})},27207:function(e,t,n){n(68757)},5511:function(e,t,n){"use strict";n.r(t);n(27207);var o=n(67294),a=n(35414),r=n(39211),i=n(76968),l=n(49308),c=n(81049),s=n(38125),d=n(2215),u=n(1591),p=/^(.*-0)$/gm,m=/^[^\S\r\n]+$/gm,v=/\n(?:(?![\n\r])[\s\S])*\x2D[0-9]\n(?:(?![\n\r])[\s\S])*\x2D\x2D>(?:(?![\n\r])[\s\S])*\n((?:(?:(?![\n\r])[\s\S])*\n)?(?:(?![\n\r])[\s\S])*)(?=\n)/g,g=/^([^\r\n]+)\n(?!\n)/gm;t.default=function(){o.useContext(u.k);var e=o.useState(""),t=e[0],n=e[1],h=o.useState(""),f=h[0],x=h[1];return o.createElement(o.Fragment,null,o.createElement(a.q,null,o.createElement("title",null,"VTT Extractor - dustbringer.github.io"),o.createElement("meta",{name:"description",content:"VTT Extractor"})),o.createElement(d.Z,{maxWidth:"md"},o.createElement(l.Z,{variant:"h4"},"VTT Extractor"),o.createElement(l.Z,{variant:"body1",gutterBottom:!0},"Extracts the subtitle text from VTT files."),o.createElement(r.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"stretch"}},o.createElement(c.Z,{label:"VTT",rows:4,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",inputProps:{style:{fontFamily:"Roboto Mono"}},sx:{marginTop:"8px",marginBottom:"8px"},value:t,onChange:function(e){return n(e.target.value)}}),o.createElement(i.Z,{variant:"contained",disableRipple:!0,sx:{margin:"8px",marginRight:0},onClick:function(){x(("\n"+t+"\n").replaceAll(p,"\n$1").replaceAll(m,"").replaceAll(v,"$1").replaceAll(g,"$1 "))},title:"Run"},o.createElement(s.Z,null))),o.createElement(c.Z,{label:"Output",minRows:2,maxRows:8,multiline:!0,margin:"dense",size:"small",fullWidth:!0,variant:"outlined",InputProps:{readOnly:!0},inputProps:{style:{fontFamily:"Roboto Mono"}},sx:{marginTop:"8px",marginBottom:"8px"},value:f,onFocus:function(e){return e.target.select()}})))}}}]);
//# sourceMappingURL=component---src-pages-tools-vtt-extractor-jsx-70f69a1b1b93eea3ddc4.js.map