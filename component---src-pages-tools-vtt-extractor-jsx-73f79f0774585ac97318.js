(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[615],{38125:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(32174)),o=n(85893),i=(0,r.default)((0,o.jsx)("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}),"DirectionsRun");t.Z=i},39211:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),o=n(67294),i=n(85505),l=n(11727),c=n(12037),s=n(18297),d=n(48377),u=n(85893),p=["className","component"];var m=n(79742),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,m=void 0===n?"MuiBox-root":n,v=e.generateClassName,f=(0,l.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(c.Z);return o.forwardRef((function(e,n){var o=(0,d.Z)(t),l=(0,s.Z)(e),c=l.className,h=l.component,g=void 0===h?"div":h,x=(0,r.Z)(l,p);return(0,u.jsx)(f,(0,a.Z)({as:g,ref:n,className:(0,i.Z)(c,v?v(m):m),theme:o},x))}))}({defaultTheme:(0,n(78790).Z)(),defaultClassName:"MuiBox-root",generateClassName:m.Z.generate}),f=v},76968:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var a=n(4942),r=n(63366),o=n(87462),i=n(67294),l=n(85505),c=n(96193),s=n(9236),d=n(67663),u=n(43656),p=n(10184),m=n(53679),v=n(49240),f=n(19508),h=n(31351);function g(e){return(0,h.Z)("MuiButton",e)}var x=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Z=i.createContext({}),b=n(85893),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],E=function(e){return(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},y=(0,u.ZP)(m.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,v.Z)(n.color))],t["size".concat((0,v.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,v.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,r,i=e.theme,l=e.ownerState;return(0,o.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===l.variant&&"inherit"!==l.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[l.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[l.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===l.variant&&"inherit"!==l.color&&{border:"1px solid ".concat((i.vars||i).palette[l.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[l.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[l.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===l.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===l.variant&&"inherit"!==l.color&&{backgroundColor:(i.vars||i).palette[l.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[l.color].main}}),"&:active":(0,o.Z)({},"contained"===l.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,a.Z)(t,"&.".concat(x.focusVisible),(0,o.Z)({},"contained"===l.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,a.Z)(t,"&.".concat(x.disabled),(0,o.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===l.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===l.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===l.variant&&{padding:"6px 8px"},"text"===l.variant&&"inherit"!==l.color&&{color:(i.vars||i).palette[l.color].main},"outlined"===l.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===l.variant&&"inherit"!==l.color&&{color:(i.vars||i).palette[l.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[l.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[l.color].main,.5))},"contained"===l.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(r=i.palette).getContrastText)?void 0:n.call(r,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===l.variant&&"inherit"!==l.color&&{color:(i.vars||i).palette[l.color].contrastText,backgroundColor:(i.vars||i).palette[l.color].main},"inherit"===l.color&&{color:"inherit",borderColor:"currentColor"},"small"===l.size&&"text"===l.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===l.size&&"text"===l.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===l.size&&"outlined"===l.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===l.size&&"outlined"===l.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===l.size&&"contained"===l.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===l.size&&"contained"===l.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},l.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(t,"&.".concat(x.focusVisible),{boxShadow:"none"}),(0,a.Z)(t,"&:active",{boxShadow:"none"}),(0,a.Z)(t,"&.".concat(x.disabled),{boxShadow:"none"}),t)})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,v.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},E(t))})),z=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,v.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},E(t))})),R=i.forwardRef((function(e,t){var n=i.useContext(Z),a=(0,c.Z)(n,e),d=(0,p.Z)({props:a,name:"MuiButton"}),u=d.children,m=d.color,f=void 0===m?"primary":m,h=d.component,x=void 0===h?"button":h,E=d.className,R=d.disabled,k=void 0!==R&&R,C=d.disableElevation,I=void 0!==C&&C,T=d.disableFocusRipple,N=void 0!==T&&T,P=d.endIcon,M=d.focusVisibleClassName,F=d.fullWidth,W=void 0!==F&&F,B=d.size,V=void 0===B?"medium":B,$=d.startIcon,A=d.type,O=d.variant,q=void 0===O?"text":O,L=(0,r.Z)(d,S),j=(0,o.Z)({},d,{color:f,component:x,disabled:k,disableElevation:I,disableFocusRipple:N,fullWidth:W,size:V,type:A,variant:q}),D=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,r=e.size,i=e.variant,l=e.classes,c={root:["root",i,"".concat(i).concat((0,v.Z)(t)),"size".concat((0,v.Z)(r)),"".concat(i,"Size").concat((0,v.Z)(r)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,v.Z)(r))],endIcon:["endIcon","iconSize".concat((0,v.Z)(r))]},d=(0,s.Z)(c,g,l);return(0,o.Z)({},l,d)}(j),_=$&&(0,b.jsx)(w,{className:D.startIcon,ownerState:j,children:$}),J=P&&(0,b.jsx)(z,{className:D.endIcon,ownerState:j,children:P});return(0,b.jsxs)(y,(0,o.Z)({ownerState:j,className:(0,l.Z)(n.className,D.root,E),component:x,disabled:k,focusRipple:!N,focusVisibleClassName:(0,l.Z)(D.focusVisible,M),ref:t,type:A},L,{classes:D,children:[_,u,J]}))}))},10647:function(e,t,n){var a=n(1702),r=n(47908),o=Math.floor,i=a("".charAt),l=a("".replace),c=a("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,u,p){var m=n+e.length,v=a.length,f=d;return void 0!==u&&(u=r(u),f=s),l(p,f,(function(r,l){var s;switch(i(l,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,m);case"<":s=u[c(l,1,-1)];break;default:var d=+l;if(0===d)return r;if(d>v){var p=o(d/10);return 0===p?r:p<=v?void 0===a[p-1]?i(l,1):a[p-1]+i(l,1):r}s=a[d-1]}return void 0===s?"":s}))}},47850:function(e,t,n){var a=n(70111),r=n(84326),o=n(5112)("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},67066:function(e,t,n){"use strict";var a=n(19670);e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},34706:function(e,t,n){var a=n(46916),r=n(92597),o=n(47976),i=n(67066),l=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in l||r(e,"flags")||!o(l,e)?t:a(i,e)}},41340:function(e,t,n){var a=n(70648),r=String;e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},68757:function(e,t,n){"use strict";var a=n(82109),r=n(46916),o=n(1702),i=n(84488),l=n(60614),c=n(68554),s=n(47850),d=n(41340),u=n(58173),p=n(34706),m=n(10647),v=n(5112),f=n(31913),h=v("replace"),g=TypeError,x=o("".indexOf),Z=o("".replace),b=o("".slice),S=Math.max,E=function(e,t,n){return n>e.length?-1:""===t?n:x(e,t,n)};a({target:"String",proto:!0},{replaceAll:function(e,t){var n,a,o,v,y,w,z,R,k,C=i(this),I=0,T=0,N="";if(!c(e)){if((n=s(e))&&(a=d(i(p(e))),!~x(a,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(o=u(e,h))return r(o,e,C,t);if(f&&n)return Z(d(C),e,t)}for(v=d(C),y=d(e),(w=l(t))||(t=d(t)),z=y.length,R=S(1,z),I=E(v,y,0);-1!==I;)k=w?d(t(y,I,v)):m(y,v,I,[],void 0,t),N+=b(v,T,I)+k,T=I+z,I=E(v,y,I+R);return T<v.length&&(N+=b(v,T)),N}})},27207:function(e,t,n){n(68757)},27980:function(e,t,n){"use strict";var a,r=n(81880),o=(n(67294),(0,n(43656).ZP)("li")(a||(a=(0,r.Z)(["\n  ",";\n"])),(function(e){return"task-list-item"===e.className&&"\n      &::marker {\n        content: none;\n      }\n      margin-left: -40px;\n    "})));t.Z=o},93537:function(e,t,n){"use strict";var a,r,o=n(81880),i=n(67294),l=n(43656),c=(0,l.ZP)("table")(a||(a=(0,o.Z)(["\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 1em 0;\n  & tr {\n    background-color: ",";\n    &:nth-of-type(even) {\n      background-color: ",";\n    }\n  }\n"])),(function(e){return"dark"===e.theme.palette.mode?"#333333":"#ffffff"}),(function(e){return"dark"===e.theme.palette.mode?"#2A2A2A":"#f6f8fa"})),s=(0,l.ZP)("span")(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px 0;\n"])));t.Z=function(e){return i.createElement(s,null,i.createElement(c,e))}},2621:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){return a.createElement("tbody",e)}},64143:function(e,t,n){"use strict";var a,r=n(81880),o=(n(67294),(0,n(43656).ZP)("td")(a||(a=(0,r.Z)(["\n  border: 1px solid\n    ",";\n  padding: 6px 13px;\n"])),(function(e){return"dark"===e.theme.palette.mode?"#666":"#dddddd"})));t.Z=o},66993:function(e,t,n){"use strict";var a,r=n(81880),o=(n(67294),(0,n(43656).ZP)("th")(a||(a=(0,r.Z)(["\n  border: 1px solid\n    ",";\n  padding: 6px 13px;\n"])),(function(e){return"dark"===e.theme.palette.mode?"#666":"#dddddd"})));t.Z=o},20711:function(e,t,n){"use strict";var a,r=n(81880),o=(n(67294),(0,n(43656).ZP)("thead")(a||(a=(0,r.Z)(["\n  border-bottom: 2px solid\n    ",";\n"])),(function(e){return"dark"===e.theme.palette.mode?"#666":"#dddddd"})));t.Z=o},75972:function(e,t,n){"use strict";var a,r=n(81880),o=(n(67294),(0,n(43656).ZP)("tr")(a||(a=(0,r.Z)(["\n  // &:nth-of-type(even) {\n  //   background-color: #f6f8fa;\n  // }\n"]))));t.Z=o},31967:function(e,t,n){"use strict";n.r(t);var a,r,o,i,l,c=n(81880),s=(n(27207),n(67294)),d=n(35414),u=n(39211),p=n(76968),m=n(49308),v=n(63018),f=n(38125),h=n(35118),g=n(89867),x=n(84265),Z=n(45617),b=n(27980),S=n(93537),E=n(20711),y=n(2621),w=n(75972),z=n(66993),R=n(64143),k=n(83328),C=[{p:String.raw(a||(a=(0,c.Z)(["^(.*-0)[^S\r\n]*$"],["^(.*-0)[^\\S\\r\\n]*$"]))),f:"gm",r:"\n$1"},{p:String.raw(r||(r=(0,c.Z)(["^[^S\r\n]+$"],["^[^\\S\\r\\n]+$"]))),f:"gm",r:""},{p:String.raw(o||(o=(0,c.Z)(["\n(?:[^\r\n]*\n)?[^\r\n]*--\x3e[^\r\n]*\n"],["\\n(?:[^\\r\\n]*\\n)?[^\\r\\n]*--\x3e[^\\r\\n]*\\n"]))),f:"g",r:""},{p:String.raw(i||(i=(0,c.Z)(["^([^\r\n]+)\n(?!\n)"],["^([^\\r\\n]+)\\n(?!\\n)"]))),f:"gm",r:"$1 "},{p:String.raw(l||(l=(0,c.Z)(["^s*|s*$"],["^\\s*|\\s*$"]))),f:"g",r:""}];t.default=function(){s.useContext(k.k);var e=s.useState(""),t=e[0],n=e[1],a=s.useState(""),r=a[0],o=a[1];return s.createElement(s.Fragment,null,s.createElement(d.q,null,s.createElement("title",null,"VTT Extractor | dustbringer.github.io"),s.createElement("meta",{name:"description",content:"VTT Extractor"})),s.createElement(Z.Z,{maxWidth:"md"},s.createElement(m.Z,{variant:"h4"},"VTT Extractor"),s.createElement(m.Z,{variant:"body1",gutterBottom:!0},"Extracts the subtitle text from VTT files."),s.createElement(h.Qc,null,s.createElement(g.Z,{title:"Details"},s.createElement(m.Z,{variant:"body2",component:"span",gutterBottom:!0},"Input Assumptions:",s.createElement("ul",null,s.createElement(b.Z,null,"Formatted in VTT"),s.createElement(b.Z,null,"Empty lines separate each subtitle block"),s.createElement(b.Z,null,"Sequence lines are optional"),s.createElement(b.Z,null,"Sequence lines ending with ",s.createElement(x.Z,{inline:!0},"-0")," indicate the start of a paragraph"))),s.createElement(m.Z,{variant:"body2",gutterBottom:!0},"Regular expression used in the process:"),s.createElement(S.Z,null,s.createElement(E.Z,null,s.createElement(w.Z,null,s.createElement(z.Z,null,"Number"),s.createElement(z.Z,null,"Regular Expression"),s.createElement(z.Z,null,"Replace"))),s.createElement(y.Z,null,C.map((function(e,t){return s.createElement(w.Z,{key:t},s.createElement(R.Z,null,t),s.createElement(R.Z,null,s.createElement(x.Z,{inline:!0},"/"+e.p+"/"+e.f)),s.createElement(R.Z,null,s.createElement(x.Z,{inline:!0},JSON.stringify(""+e.r))))})))),"Explanation",s.createElement("ol",{start:"0"},s.createElement(b.Z,null,"Add new lines before all new paragraphs, indicated by"," ",s.createElement(x.Z,{inline:!0},"-0")," in the sequence line (ignoring trailing whitespace)."),s.createElement(b.Z,null,"Remove whitespace characters on seemingly empty lines."),s.createElement(b.Z,null,"Remove VTT subtitle metadata."),s.createElement(b.Z,null,"Replace new lines inside each paragraph with a space."),s.createElement(b.Z,null,"Remove leading and trailing whitespace.")))),s.createElement(u.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"stretch"}},s.createElement(v.Z,{label:"VTT",rows:4,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",inputProps:{style:{fontFamily:"Roboto Mono"}},sx:{marginTop:"8px",marginBottom:"8px"},value:t,onChange:function(e){return n(e.target.value)}}),s.createElement(p.Z,{variant:"contained",disableRipple:!0,sx:{margin:"8px",marginRight:0},onClick:function(){var e="\n"+t+"\n";C.forEach((function(t){return e=e.replaceAll(RegExp(t.p,t.f),t.r)})),o(e)},title:"Run"},s.createElement(f.Z,null))),s.createElement(v.Z,{label:"Output",minRows:2,maxRows:8,multiline:!0,margin:"dense",size:"small",fullWidth:!0,variant:"outlined",InputProps:{readOnly:!0},inputProps:{style:{fontFamily:"Roboto Mono"}},sx:{marginTop:"8px",marginBottom:"8px"},value:r,onFocus:function(e){return e.target.select()}})))}}}]);
//# sourceMappingURL=component---src-pages-tools-vtt-extractor-jsx-73f79f0774585ac97318.js.map