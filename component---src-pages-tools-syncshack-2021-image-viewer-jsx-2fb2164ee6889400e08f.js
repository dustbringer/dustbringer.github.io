"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[300],{83102:function(e,r,t){var o=t(95318),n=t(20862);r.Z=void 0;var p=n(t(67294)),a=(0,o(t(58786)).default)(p.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");r.Z=a},94343:function(e,r,t){var o=t(95318),n=t(20862);r.Z=void 0;var p=n(t(67294)),a=(0,o(t(58786)).default)(p.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");r.Z=a},14943:function(e,r,t){t.r(r),t.d(r,{default:function(){return U}});var o=t(67294),n=t(35414),p=t(10920),a=t(71293),i=t(80453),l=t(12176),s=t(55694),u=t(42982),m=t(87462),c=(t(45697),t(34131));function f(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}function d(e){var r=function(r){var t=e(r);return r.css?(0,m.Z)({},(0,c.Z)(t,e((0,m.Z)({theme:r.theme},r.css))),f(r.css,[e.filterProps])):r.sx?(0,m.Z)({},(0,c.Z)(t,e((0,m.Z)({theme:r.theme},r.sx))),f(r.sx,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css","sx"].concat((0,u.Z)(e.filterProps)),r}var h=d;var y=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?(0,c.Z)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},g=t(4942),v=t(63592);function b(e,r){return r&&"string"==typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var x=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,p=e.transform,a=function(e){if(null==e[r])return null;var t=e[r],a=b(e.theme,n)||{};return(0,v.k)(e,t,(function(e){var r;return"function"==typeof a?r=a(e):Array.isArray(a)?r=a[e]||e:(r=b(a,e)||e,p&&(r=p(r))),!1===o?r:(0,g.Z)({},o,r)}))};return a.propTypes={},a.filterProps=[r],a};function Z(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var w=y(x({prop:"border",themeKey:"borders",transform:Z}),x({prop:"borderTop",themeKey:"borders",transform:Z}),x({prop:"borderRight",themeKey:"borders",transform:Z}),x({prop:"borderBottom",themeKey:"borders",transform:Z}),x({prop:"borderLeft",themeKey:"borders",transform:Z}),x({prop:"borderColor",themeKey:"palette"}),x({prop:"borderRadius",themeKey:"shape"})),E=y(x({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),x({prop:"display"}),x({prop:"overflow"}),x({prop:"textOverflow"}),x({prop:"visibility"}),x({prop:"whiteSpace"})),S=y(x({prop:"flexBasis"}),x({prop:"flexDirection"}),x({prop:"flexWrap"}),x({prop:"justifyContent"}),x({prop:"alignItems"}),x({prop:"alignContent"}),x({prop:"order"}),x({prop:"flex"}),x({prop:"flexGrow"}),x({prop:"flexShrink"}),x({prop:"alignSelf"}),x({prop:"justifyItems"}),x({prop:"justifySelf"})),C=y(x({prop:"gridGap"}),x({prop:"gridColumnGap"}),x({prop:"gridRowGap"}),x({prop:"gridColumn"}),x({prop:"gridRow"}),x({prop:"gridAutoFlow"}),x({prop:"gridAutoColumns"}),x({prop:"gridAutoRows"}),x({prop:"gridTemplateColumns"}),x({prop:"gridTemplateRows"}),x({prop:"gridTemplateAreas"}),x({prop:"gridArea"})),K=y(x({prop:"position"}),x({prop:"zIndex",themeKey:"zIndex"}),x({prop:"top"}),x({prop:"right"}),x({prop:"bottom"}),x({prop:"left"})),P=y(x({prop:"color",themeKey:"palette"}),x({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),k=x({prop:"boxShadow",themeKey:"shadows"});function z(e){return e<=1?"".concat(100*e,"%"):e}var I=x({prop:"width",transform:z}),N=x({prop:"maxWidth",transform:z}),A=x({prop:"minWidth",transform:z}),M=x({prop:"height",transform:z}),R=x({prop:"maxHeight",transform:z}),T=x({prop:"minHeight",transform:z}),j=(x({prop:"size",cssProperty:"width",transform:z}),x({prop:"size",cssProperty:"height",transform:z}),y(I,N,A,M,R,T,x({prop:"boxSizing"}))),F=t(95408),L=y(x({prop:"fontFamily",themeKey:"typography"}),x({prop:"fontSize",themeKey:"typography"}),x({prop:"fontStyle",themeKey:"typography"}),x({prop:"fontWeight",themeKey:"typography"}),x({prop:"letterSpacing"}),x({prop:"lineHeight"}),x({prop:"textAlign"})),W=t(12112),B=t(94982),G=function(e){var r=(0,W.Z)(e);return function(e,t){return r(e,(0,m.Z)({defaultTheme:B.Z},t))}},O=h(y(w,E,S,C,K,P,k,j,F.Z,L)),_=G("div")(O,{name:"MuiBox"}),H=t(23729),D=t(83102),V=t(94343),J=function(e){var r=e.text,t=e.onPrev,n=e.onNext;return o.createElement(o.Fragment,null,o.createElement(_,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},o.createElement(H.Z,{color:"primary",onClick:t},o.createElement(D.Z,{fontSize:"small"})),o.createElement(i.Z,{color:"primary"},r),o.createElement(H.Z,{color:"primary",onClick:n},o.createElement(V.Z,{fontSize:"small"}))))},q=(0,p.Z)((function(e){return{button:{},container:{display:"flex",flexDirection:"column",justifyContent:"space-between"},mono:{fontFamily:"Roboto Mono"},latex:{fontFamily:"Computer Modern",fontSize:"1.4rem"}}})),U=function(){var e=q(),r=o.useState(""),t=r[0],p=r[1],u=o.useState([]),m=u[0],c=u[1],f=o.useState(0),d=f[0],h=f[1];return o.useEffect((function(){try{var e=JSON.parse(t);c(e),h(0)}catch(r){c([]),h(0)}}),[t]),o.createElement(o.Fragment,null,o.createElement(n.q,null,o.createElement("title",null,"Image Viewer - dustbringer.github.io"),o.createElement("meta",{name:"description",content:"Markdown Renderer"})),o.createElement(a.Z,{maxWidth:"md",className:e.container},o.createElement(i.Z,{variant:"h4"},"Image Viewer"),o.createElement(i.Z,{variant:"body1",gutterBottom:!0},"Tool for SYNCS Hackathon 2021. Views images with json input, format is below."),o.createElement(s.Z,{language:"json"},'[\n  {\n    "link": IMG_URL,\n  },\n  // ...\n]'),o.createElement(l.Z,{label:"Input JSON",rows:2,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",InputProps:{classes:{input:e.mono}},value:t,onChange:function(e){return p(e.target.value)}}),m&&0!==m.length?o.createElement("img",{src:m[d].link,alt:"parsed output"}):"No images to display or error...",o.createElement(J,{text:d,onPrev:function(){return h(Math.max(0,d-1))},onNext:function(){0===m.length?h(0):h(Math.min(m.length-1,d+1))}})))}}}]);
//# sourceMappingURL=component---src-pages-tools-syncshack-2021-image-viewer-jsx-2fb2164ee6889400e08f.js.map