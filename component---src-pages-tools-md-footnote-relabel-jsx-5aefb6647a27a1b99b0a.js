(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[321],{10647:function(e,t,n){var r=n(1702),a=n(47908),o=Math.floor,i=r("".charAt),l=r("".replace),c=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,p){var m=n+e.length,f=r.length,v=u;return void 0!==d&&(d=a(d),v=s),l(p,v,(function(a,l){var s;switch(i(l,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,m);case"<":s=d[c(l,1,-1)];break;default:var u=+l;if(0===u)return a;if(u>f){var p=o(u/10);return 0===p?a:p<=f?void 0===r[p-1]?i(l,1):r[p-1]+i(l,1):a}s=r[u-1]}return void 0===s?"":s}))}},68757:function(e,t,n){"use strict";var r=n(82109),a=n(46916),o=n(1702),i=n(84488),l=n(60614),c=n(68554),s=n(47850),u=n(41340),d=n(58173),p=n(34706),m=n(10647),f=n(5112),v=n(31913),h=f("replace"),g=TypeError,x=o("".indexOf),b=o("".replace),Z=o("".slice),w=Math.max,S=function(e,t,n){return n>e.length?-1:""===t?n:x(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,o,f,y,E,k,W,C,M=i(this),D=0,P=0,R="";if(!c(e)){if((n=s(e))&&(r=u(i(p(e))),!~x(r,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(o=d(e,h))return a(o,e,M,t);if(v&&n)return b(u(M),e,t)}for(f=u(M),y=u(e),(E=l(t))||(t=u(t)),k=y.length,W=w(1,k),D=S(f,y,0);-1!==D;)C=E?u(t(y,D,f)):m(y,f,D,[],void 0,t),R+=Z(f,P,D)+C,P=D+k,D=S(f,y,D+W);return P<f.length&&(R+=Z(f,P)),R}})},27207:function(e,t,n){n(68757)},87289:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(81880),a=n(67294),o=n(43656),i=n(35414),l=n(39211),c=n(76968),s=n(49308),u=n(63018),d=n(4942),p=n(63366),m=n(87462),f=n(85505),v=n(9236),h=n(95025),g=n(49240),x=n(1883),b=n(8290),Z=n(85349),w=n(10184),S=n(19508),y=n(31351);function E(e){return(0,y.Z)("MuiDialog",e)}var k=(0,S.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var W=a.createContext({}),C=n(18008),M=n(66449),D=n(85893),P=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],R=(0,o.ZP)(C.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),A=(0,o.ZP)(x.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),F=(0,o.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var n=e.ownerState;return[t.container,t["scroll".concat((0,g.Z)(n.scroll))]]}})((function(e){var t=e.ownerState;return(0,m.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),B=(0,o.ZP)(Z.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var n=e.ownerState;return[t.paper,t["scrollPaper".concat((0,g.Z)(n.scroll))],t["paperWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})((function(e){var t=e.theme,n=e.ownerState;return(0,m.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===n.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===n.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===n.maxWidth&&(0,d.Z)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(k.paperScrollBody),(0,d.Z)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),n.maxWidth&&"xs"!==n.maxWidth&&(0,d.Z)({maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(k.paperScrollBody),(0,d.Z)({},t.breakpoints.down(t.breakpoints.values[n.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&(0,d.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(k.paperScrollBody),{margin:0,maxWidth:"100%"}))})),N=a.forwardRef((function(e,t){var n=(0,w.Z)({props:e,name:"MuiDialog"}),r=(0,M.Z)(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},i=n["aria-describedby"],l=n["aria-labelledby"],c=n.BackdropComponent,s=n.BackdropProps,u=n.children,d=n.className,x=n.disableEscapeKeyDown,S=void 0!==x&&x,y=n.fullScreen,k=void 0!==y&&y,C=n.fullWidth,N=void 0!==C&&C,I=n.maxWidth,T=void 0===I?"sm":I,j=n.onBackdropClick,z=n.onClose,L=n.open,$=n.PaperComponent,_=void 0===$?Z.Z:$,K=n.PaperProps,O=void 0===K?{}:K,U=n.scroll,Y=void 0===U?"paper":U,H=n.TransitionComponent,X=void 0===H?b.Z:H,q=n.transitionDuration,G=void 0===q?o:q,J=n.TransitionProps,V=(0,p.Z)(n,P),Q=(0,m.Z)({},n,{disableEscapeKeyDown:S,fullScreen:k,fullWidth:N,maxWidth:T,scroll:Y}),ee=function(e){var t=e.classes,n=e.scroll,r=e.maxWidth,a=e.fullWidth,o=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,g.Z)(n))],paper:["paper","paperScroll".concat((0,g.Z)(n)),"paperWidth".concat((0,g.Z)(String(r))),a&&"paperFullWidth",o&&"paperFullScreen"]};return(0,v.Z)(i,E,t)}(Q),te=a.useRef(),ne=(0,h.Z)(l),re=a.useMemo((function(){return{titleId:ne}}),[ne]);return(0,D.jsx)(A,(0,m.Z)({className:(0,f.Z)(ee.root,d),closeAfterTransition:!0,components:{Backdrop:R},componentsProps:{backdrop:(0,m.Z)({transitionDuration:G,as:c},s)},disableEscapeKeyDown:S,onClose:z,open:L,ref:t,onClick:function(e){te.current&&(te.current=null,j&&j(e),z&&z(e,"backdropClick"))},ownerState:Q},V,{children:(0,D.jsx)(X,(0,m.Z)({appear:!0,in:L,timeout:G,role:"presentation"},J,{children:(0,D.jsx)(F,{className:(0,f.Z)(ee.container),onMouseDown:function(e){te.current=e.target===e.currentTarget},ownerState:Q,children:(0,D.jsx)(B,(0,m.Z)({as:_,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":ne},O,{className:(0,f.Z)(ee.paper,O.className),ownerState:Q,children:(0,D.jsx)(W.Provider,{value:re,children:u})}))})}))}))}));function I(e){return(0,y.Z)("MuiDialogActions",e)}(0,S.Z)("MuiDialogActions",["root","spacing"]);var T=["className","disableSpacing"],j=(0,o.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,m.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),z=a.forwardRef((function(e,t){var n=(0,w.Z)({props:e,name:"MuiDialogActions"}),r=n.className,a=n.disableSpacing,o=void 0!==a&&a,i=(0,p.Z)(n,T),l=(0,m.Z)({},n,{disableSpacing:o}),c=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,v.Z)(n,I,t)}(l);return(0,D.jsx)(j,(0,m.Z)({className:(0,f.Z)(c.root,r),ownerState:l,ref:t},i))}));function L(e){return(0,y.Z)("MuiDialogContent",e)}(0,S.Z)("MuiDialogContent",["root","dividers"]);var $,_=(0,S.Z)("MuiDialogTitle",["root"]),K=["className","dividers"],O=(0,o.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dividers&&t.dividers]}})((function(e){var t=e.theme,n=e.ownerState;return(0,m.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:(0,d.Z)({},".".concat(_.root," + &"),{paddingTop:0}))})),U=a.forwardRef((function(e,t){var n=(0,w.Z)({props:e,name:"MuiDialogContent"}),r=n.className,a=n.dividers,o=void 0!==a&&a,i=(0,p.Z)(n,K),l=(0,m.Z)({},n,{dividers:o}),c=function(e){var t=e.classes,n={root:["root",e.dividers&&"dividers"]};return(0,v.Z)(n,L,t)}(l);return(0,D.jsx)(O,(0,m.Z)({className:(0,f.Z)(c.root,r),ownerState:l,ref:t},i))})),Y=n(45617),H=n(60043),X=n(89867),q=(n(13728),n(27207),n(93433)),G=function(e){return(0,q.Z)(e.matchAll(/^[^\S\r\n]*\[\^([a-zA-Z0-9_.-]+)\]:/gm)).map((function(e){return e[1]}))},J=function(e){return(0,q.Z)(e.matchAll(/^[^\S\r\n]*\[\^(\d+)\]:/gm)).map((function(e){return e[1]}))},V=function(e){return Math.max.apply(Math,(0,q.Z)(e.filter((function(e){return t=e,Number.isInteger(t)||/^\d+$/.test(t);var t})).map((function(e){return parseInt(e,10)}))))},Q=function(e,t){void 0===t&&(t=1),t<0&&console.error("indexFrom must be non-negative");var n=e,r=G(e);return r.forEach((function(e,a){var o=Math.max(V(r)+1,r.length+t);n=n.replaceAll("[^"+e+"]","[^"+(a+o)+"]")})),(r=G(n)).forEach((function(e,r){n=n.replaceAll("[^"+e+"]","[^"+(r+t)+"]")})),n},ee=function(e,t){if(void 0===t&&(t=1),t<0)throw new Error("indexFrom must be non-negative");var n=e,r=J(e);return r.forEach((function(e,a){var o=Math.max(V(r)+1,r.length+t);n=n.replaceAll("[^"+e+"]","[^"+(a+o)+"]")})),(r=J(n)).forEach((function(e,r){n=n.replaceAll("[^"+e+"]","[^"+(r+t)+"]")})),n},te=(0,o.ZP)("input")($||($=(0,r.Z)(["\n  display: none;\n"])));var ne=function(){var e=a.useState(""),t=e[0],n=e[1],r=a.useState(1),o=r[0],d=r[1],p=a.useState(""),m=p[0],f=p[1],v=a.useState(!1),h=v[0],g=v[1],x=a.useState("No File Selected"),b=x[0],Z=x[1],w=a.useState(!1),S=w[0],y=w[1],E=a.useState(""),k=E[0],W=E[1],C=a.useState(1),M=C[0],D=C[1],P=function(e,t){void 0===t&&(t=!1),e.preventDefault();var n=t?ee(k,M):Q(k,M),r=new Blob([n]),a=URL.createObjectURL(r),o=document.createElement("a");o.href=a,o.setAttribute("download","edited_"+b),document.body.appendChild(o),o.click(),o.parentNode.removeChild(o)},R=function(e,n){void 0===n&&(n=!1),e.preventDefault();var r=n?ee(t,o):Q(t,o);f(r),g(!0)};return a.createElement(a.Fragment,null,a.createElement(i.q,null,a.createElement("title",null,"Markdown Footnote Relabeller | dustbringer.github.io"),a.createElement("meta",{name:"description",content:"Markdown Footnote Relabeller"})),a.createElement(Y.Z,{maxWidth:"md"},a.createElement(s.Z,{variant:"h4",gutterBottom:!0},"Markdown/Pandoc Footnote Relabeller"),a.createElement(s.Z,{variant:"body1",gutterBottom:!0},"Replace the labels of markdown footnotes with ascending integers. The barebones Javascript code can be found at"," ",a.createElement(H.Z,{href:"https://gist.github.com/dustbringer/6675f9aad4ff47725933abeb7affb891"},"this GitHub gist"),"."),a.createElement(s.Z,{variant:"body1",gutterBottom:!0},"Note, none of the files you upload is saved anywhere, all the text processing is done in your browser and thrown back at you."),a.createElement(u.Z,{label:"Input",rows:6,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",inputProps:{style:{fontFamily:"Roboto Mono"}},value:t,onChange:function(e){return n(e.target.value)}}),a.createElement(l.Z,{sx:{display:"flex",alignItems:"center"}},a.createElement("div",null,a.createElement(u.Z,{label:"Index from",type:"number",inputProps:{step:"1"},value:o,onChange:function(e){return d(Math.max(0,e.target.value))},size:"small",sx:{margin:"10px 0"}})),a.createElement("div",null,a.createElement(c.Z,{variant:"contained",component:"span",onClick:function(e){return R(e)},sx:{margin:"5px 0",marginLeft:"10px"}},"Replace All"),a.createElement(c.Z,{variant:"contained",component:"span",onClick:function(e){return R(e,!0)},sx:{margin:"5px 0",marginLeft:"10px"}},"Replace Int"))),a.createElement(N,{open:h,onClose:function(){return g(!1)},fullWidth:!0},a.createElement(U,null,a.createElement(u.Z,{size:"small",multiline:!0,rows:16,placeholder:"Empty",InputProps:{readOnly:!0,sx:{fontSize:"0.8em",whiteSpace:"pre"}},defaultValue:m,autoFocus:!0,onFocus:function(e){return e.target.select()},fullWidth:!0})),a.createElement(z,null,a.createElement(c.Z,{onClick:function(){return g(!1)},color:"primary"},"Close"))),a.createElement(l.Z,null,a.createElement(X.Z,{title:"File Upload and Download"},a.createElement(l.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"center"}},a.createElement("label",null,a.createElement(te,{type:"file",multiple:!1,accept:".md,.txt,.text,text/plain",onChange:function(e){e.preventDefault();var t=e.target.files[0],n=new FileReader;n.onload=function(e){var n=e.target.result;W(n),Z(t.name),y(!0)},t&&n.readAsText(t)}}),a.createElement(c.Z,{variant:"contained",component:"span"},"Upload")),a.createElement(s.Z,{variant:"body1",sx:{margin:"0 10px"}},b)),a.createElement("div",null,a.createElement(u.Z,{label:"Index from",type:"number",inputProps:{step:"1"},value:M,onChange:function(e){return D(Math.max(0,e.target.value))},disabled:!S,size:"small",sx:{margin:"10px 0"}})),a.createElement("div",null,a.createElement(c.Z,{variant:"contained",component:"span",onClick:function(e){return P(e)},disabled:!S},"Replace All"),a.createElement(c.Z,{variant:"contained",component:"span",onClick:function(e){return P(e,!0)},disabled:!S,sx:{marginLeft:"10px"}},"Replace Int"))))))}}}]);
//# sourceMappingURL=component---src-pages-tools-md-footnote-relabel-jsx-5aefb6647a27a1b99b0a.js.map