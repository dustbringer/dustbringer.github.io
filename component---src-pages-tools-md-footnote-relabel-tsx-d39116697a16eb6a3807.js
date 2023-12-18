"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[695],{93919:function(e,t,n){n.r(t),n.d(t,{Head:function(){return te},default:function(){return ee}});var a=n(72087),r=n(59364),o=n(10760),l=n(9316),i=n(79504),s=n(75490),c=n(8345),d=n(20925),p=n(50451),u=n(79028),m=n(22376),h=n(65863),g=n(2213),f=n(37743),v=n(54103),x=n(56710),b=n(27734),Z=n(36190),w=n(77202);function S(e){return(0,w.Z)("MuiDialog",e)}var y=(0,Z.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var E=r.createContext({}),k=n(93254),W=n(29230),C=n(4404);const M=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],D=(0,o.ZP)(k.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),P=(0,o.ZP)(f.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),R=(0,o.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.container,t[`scroll${(0,g.Z)(n.scroll)}`]]}})((({ownerState:e})=>(0,p.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),A=(0,o.ZP)(x.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`scrollPaper${(0,g.Z)(n.scroll)}`],t[`paperWidth${(0,g.Z)(String(n.maxWidth))}`],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})((({theme:e,ownerState:t})=>(0,p.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${y.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${y.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${y.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})));var $=r.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiDialog"}),a=(0,W.Z)(),o={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":i,BackdropComponent:s,BackdropProps:c,children:f,className:Z,disableEscapeKeyDown:w=!1,fullScreen:y=!1,fullWidth:k=!1,maxWidth:$="sm",onBackdropClick:F,onClose:B,open:I,PaperComponent:N=x.Z,PaperProps:T={},scroll:j="paper",TransitionComponent:z=v.Z,transitionDuration:L=o,TransitionProps:_}=n,H=(0,d.Z)(n,M),K=(0,p.Z)({},n,{disableEscapeKeyDown:w,fullScreen:y,fullWidth:k,maxWidth:$,scroll:j}),O=(e=>{const{classes:t,scroll:n,maxWidth:a,fullWidth:r,fullScreen:o}=e,l={root:["root"],container:["container",`scroll${(0,g.Z)(n)}`],paper:["paper",`paperScroll${(0,g.Z)(n)}`,`paperWidth${(0,g.Z)(String(a))}`,r&&"paperFullWidth",o&&"paperFullScreen"]};return(0,m.Z)(l,S,t)})(K),U=r.useRef(),Y=(0,h.Z)(i),X=r.useMemo((()=>({titleId:Y})),[Y]);return(0,C.jsx)(P,(0,p.Z)({className:(0,u.Z)(O.root,Z),closeAfterTransition:!0,components:{Backdrop:D},componentsProps:{backdrop:(0,p.Z)({transitionDuration:L,as:s},c)},disableEscapeKeyDown:w,onClose:B,open:I,ref:t,onClick:e=>{U.current&&(U.current=null,F&&F(e),B&&B(e,"backdropClick"))},ownerState:K},H,{children:(0,C.jsx)(z,(0,p.Z)({appear:!0,in:I,timeout:L,role:"presentation"},_,{children:(0,C.jsx)(R,{className:(0,u.Z)(O.container),onMouseDown:e=>{U.current=e.target===e.currentTarget},ownerState:K,children:(0,C.jsx)(A,(0,p.Z)({as:N,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":Y},T,{className:(0,u.Z)(O.paper,T.className),ownerState:K,children:(0,C.jsx)(E.Provider,{value:X,children:f})}))})}))}))}));function F(e){return(0,w.Z)("MuiDialogActions",e)}(0,Z.Z)("MuiDialogActions",["root","spacing"]);const B=["className","disableSpacing"],I=(0,o.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,p.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})));var N=r.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiDialogActions"}),{className:a,disableSpacing:r=!1}=n,o=(0,d.Z)(n,B),l=(0,p.Z)({},n,{disableSpacing:r}),i=(e=>{const{classes:t,disableSpacing:n}=e,a={root:["root",!n&&"spacing"]};return(0,m.Z)(a,F,t)})(l);return(0,C.jsx)(I,(0,p.Z)({className:(0,u.Z)(i.root,a),ownerState:l,ref:t},o))}));function T(e){return(0,w.Z)("MuiDialogContent",e)}(0,Z.Z)("MuiDialogContent",["root","dividers"]);var j=(0,Z.Z)("MuiDialogTitle",["root"]);const z=["className","dividers"],L=(0,o.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})((({theme:e,ownerState:t})=>(0,p.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${j.root} + &`]:{paddingTop:0}})));var _=r.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiDialogContent"}),{className:a,dividers:r=!1}=n,o=(0,d.Z)(n,z),l=(0,p.Z)({},n,{dividers:r}),i=(e=>{const{classes:t,dividers:n}=e,a={root:["root",n&&"dividers"]};return(0,m.Z)(a,T,t)})(l);return(0,C.jsx)(L,(0,p.Z)({className:(0,u.Z)(i.root,a),ownerState:l,ref:t},o))})),H=n(571),K=n(98173),O=n(61158),U=(n(74989),n(69817),n(45956));const Y=e=>(0,U.Z)(e.matchAll(/^[^\S\r\n]*\[\^([a-zA-Z0-9_.-]+)\]:/gm)).map((e=>e[1])),X=e=>(0,U.Z)(e.matchAll(/^[^\S\r\n]*\[\^(\d+)\]:/gm)).map((e=>e[1])),G=e=>Math.max.apply(Math,(0,U.Z)(e.filter((e=>{return t=e,Number.isInteger(t)||/^\d+$/.test(t);var t})).map((e=>parseInt(e,10))))),J=function(e,t){void 0===t&&(t=1),t<0&&console.error("indexFrom must be non-negative");let n=e,a=Y(e);return a.forEach(((e,r)=>{const o=Math.max(G(a)+1,a.length+t);n=n.replaceAll("[^"+e+"]","[^"+(r+o)+"]")})),a=Y(n),a.forEach(((e,a)=>{n=n.replaceAll("[^"+e+"]","[^"+(a+t)+"]")})),n},V=function(e,t){if(void 0===t&&(t=1),t<0)throw new Error("indexFrom must be non-negative");let n=e,a=X(e);return a.forEach(((e,r)=>{const o=Math.max(G(a)+1,a.length+t);n=n.replaceAll("[^"+e+"]","[^"+(r+o)+"]")})),a=X(n),a.forEach(((e,a)=>{n=n.replaceAll("[^"+e+"]","[^"+(a+t)+"]")})),n};var q;const Q=(0,o.ZP)("input")(q||(q=(0,a.Z)(["\n  display: none;\n"])));var ee=function(){const[e,t]=r.useState(""),[n,a]=r.useState(1),[o,d]=r.useState(""),[p,u]=r.useState(!1),[m,h]=r.useState("No File Selected"),[g,f]=r.useState(!1),[v,x]=r.useState(""),[b,Z]=r.useState(1),w=function(e,t){var n;void 0===t&&(t=!1),e.preventDefault();const a=t?V(v,b):J(v,b),r=new Blob([a]),o=URL.createObjectURL(r),l=document.createElement("a");l.href=o,l.setAttribute("download","edited_"+m),document.body.appendChild(l),l.click(),null===(n=l.parentNode)||void 0===n||n.removeChild(l)},S=function(t,a){void 0===a&&(a=!1),t.preventDefault();const r=a?V(e,n):J(e,n);d(r),u(!0)};return r.createElement(r.Fragment,null,r.createElement(H.Z,{maxWidth:"md"},r.createElement(s.Z,{variant:"h4",gutterBottom:!0},"Markdown/Pandoc Footnote Relabeller"),r.createElement(s.Z,{variant:"body1",gutterBottom:!0},"Replace the labels of markdown footnotes with ascending integers. The barebones Javascript code can be found at"," ",r.createElement(K.Z,{href:"https://gist.github.com/dustbringer/6675f9aad4ff47725933abeb7affb891"},"this GitHub gist"),"."),r.createElement(s.Z,{variant:"body1",gutterBottom:!0},"Note, none of the files you upload is saved anywhere, all the text processing is done in your browser and thrown back at you."),r.createElement(c.Z,{label:"Input",rows:6,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",inputProps:{style:{fontFamily:"Roboto Mono"}},value:e,onChange:e=>t(e.target.value)}),r.createElement(l.Z,{sx:{display:"flex",alignItems:"center"}},r.createElement("div",null,r.createElement(c.Z,{label:"Index from",type:"number",inputProps:{step:"1"},value:n,onChange:e=>a(Math.max(0,parseInt(e.target.value,10))),size:"small",sx:{margin:"10px 0"}})),r.createElement("div",null,r.createElement(i.Z,{variant:"contained",component:"span",onClick:e=>S(e),sx:{margin:"5px 0",marginLeft:"10px"}},"Replace All"),r.createElement(i.Z,{variant:"contained",component:"span",onClick:e=>S(e,!0),sx:{margin:"5px 0",marginLeft:"10px"}},"Replace Int"))),r.createElement($,{open:p,onClose:()=>u(!1),fullWidth:!0},r.createElement(_,null,r.createElement(c.Z,{size:"small",multiline:!0,rows:16,placeholder:"Empty",InputProps:{readOnly:!0,sx:{fontSize:"0.8em",whiteSpace:"pre"}},defaultValue:o,autoFocus:!0,onFocus:e=>e.target.select(),fullWidth:!0})),r.createElement(N,null,r.createElement(i.Z,{onClick:()=>u(!1),color:"primary"},"Close"))),r.createElement(l.Z,null,r.createElement(O.Z,{title:"File Upload and Download"},r.createElement(l.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"center"}},r.createElement("label",null,r.createElement(Q,{type:"file",multiple:!1,accept:".md,.txt,.text,text/plain",onChange:e=>{var t;e.preventDefault();const n=null===(t=e.target.files)||void 0===t?void 0:t[0],a=new FileReader;a.onload=e=>{var t;const a=null===(t=e.target)||void 0===t?void 0:t.result;n&&(x(a||""),h(n.name),f(!0))},n&&a.readAsText(n)}}),r.createElement(i.Z,{variant:"contained",component:"span"},"Upload")),r.createElement(s.Z,{variant:"body1",sx:{margin:"0 10px"}},m)),r.createElement("div",null,r.createElement(c.Z,{label:"Index from",type:"number",inputProps:{step:"1"},value:b,onChange:e=>Z(Math.max(0,parseInt(e.target.value,10))),disabled:!g,size:"small",sx:{margin:"10px 0"}})),r.createElement("div",null,r.createElement(i.Z,{variant:"contained",component:"span",onClick:e=>w(e),disabled:!g},"Replace All"),r.createElement(i.Z,{variant:"contained",component:"span",onClick:e=>w(e,!0),disabled:!g,sx:{marginLeft:"10px"}},"Replace Int"))))))};function te(){return r.createElement(r.Fragment,null,r.createElement("title",null,"Markdown Footnote Relabeller | dustbringer.github.io"),r.createElement("meta",{name:"description",content:"Markdown Footnote Relabeller"}))}},62352:function(e,t,n){var a=n(42219),r=n(11074),o=Math.floor,l=a("".charAt),i=a("".replace),s=a("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,p,u){var m=n+e.length,h=a.length,g=d;return void 0!==p&&(p=r(p),g=c),i(u,g,(function(r,i){var c;switch(l(i,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,m);case"<":c=p[s(i,1,-1)];break;default:var d=+i;if(0===d)return r;if(d>h){var u=o(d/10);return 0===u?r:u<=h?void 0===a[u-1]?l(i,1):a[u-1]+l(i,1):r}c=a[d-1]}return void 0===c?"":c}))}},61072:function(e,t,n){var a=n(22739),r=n(63312),o=n(42219),l=n(91704),i=n(25216),s=n(32739),c=n(69816),d=n(4189),p=n(36658),u=n(67556),m=n(62352),h=n(70269),g=n(13855),f=h("replace"),v=TypeError,x=o("".indexOf),b=o("".replace),Z=o("".slice),w=Math.max,S=function(e,t,n){return n>e.length?-1:""===t?n:x(e,t,n)};a({target:"String",proto:!0},{replaceAll:function(e,t){var n,a,o,h,y,E,k,W,C,M=l(this),D=0,P=0,R="";if(!s(e)){if((n=c(e))&&(a=d(l(u(e))),!~x(a,"g")))throw new v("`.replaceAll` does not allow non-global regexes");if(o=p(e,f))return r(o,e,M,t);if(g&&n)return b(d(M),e,t)}for(h=d(M),y=d(e),(E=i(t))||(t=d(t)),k=y.length,W=w(1,k),D=S(h,y,0);-1!==D;)C=E?d(t(y,D,h)):m(y,h,D,[],void 0,t),R+=Z(h,P,D)+C,P=D+k,D=S(h,y,D+W);return P<h.length&&(R+=Z(h,P)),R}})},69817:function(e,t,n){n(61072)}}]);
//# sourceMappingURL=component---src-pages-tools-md-footnote-relabel-tsx-d39116697a16eb6a3807.js.map