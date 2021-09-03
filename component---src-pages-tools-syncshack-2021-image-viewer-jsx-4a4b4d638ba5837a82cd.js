"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[300],{33287:function(e,r,t){t.d(r,{Z:function(){return j}});var o=t(42982),n=t(87462),p=(t(45697),t(34131));function a(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}function i(e){var r=function(r){var t=e(r);return r.css?(0,n.Z)({},(0,p.Z)(t,e((0,n.Z)({theme:r.theme},r.css))),a(r.css,[e.filterProps])):r.sx?(0,n.Z)({},(0,p.Z)(t,e((0,n.Z)({theme:r.theme},r.sx))),a(r.sx,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css","sx"].concat((0,o.Z)(e.filterProps)),r}var l=i;var s=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?(0,p.Z)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},u=t(4942),m=t(63592);function c(e,r){return r&&"string"==typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var f=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,p=e.transform,a=function(e){if(null==e[r])return null;var t=e[r],a=c(e.theme,n)||{};return(0,m.k)(e,t,(function(e){var r;return"function"==typeof a?r=a(e):Array.isArray(a)?r=a[e]||e:(r=c(a,e)||e,p&&(r=p(r))),!1===o?r:(0,u.Z)({},o,r)}))};return a.propTypes={},a.filterProps=[r],a};function d(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var h=s(f({prop:"border",themeKey:"borders",transform:d}),f({prop:"borderTop",themeKey:"borders",transform:d}),f({prop:"borderRight",themeKey:"borders",transform:d}),f({prop:"borderBottom",themeKey:"borders",transform:d}),f({prop:"borderLeft",themeKey:"borders",transform:d}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),y=s(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),g=s(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),v=s(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),b=s(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),x=s(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),Z=f({prop:"boxShadow",themeKey:"shadows"});function w(e){return e<=1?"".concat(100*e,"%"):e}var E=f({prop:"width",transform:w}),S=f({prop:"maxWidth",transform:w}),C=f({prop:"minWidth",transform:w}),K=f({prop:"height",transform:w}),P=f({prop:"maxHeight",transform:w}),k=f({prop:"minHeight",transform:w}),z=(f({prop:"size",cssProperty:"width",transform:w}),f({prop:"size",cssProperty:"height",transform:w}),s(E,S,C,K,P,k,f({prop:"boxSizing"}))),I=s(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),N=t(95408),A=t(12112),M=t(94982),R=function(e){var r=(0,A.Z)(e);return function(e,t){return r(e,(0,n.Z)({defaultTheme:M.Z},t))}},T=l(s(h,y,g,v,b,x,Z,z,N.Z,I)),j=R("div")(T,{name:"MuiBox"})},83102:function(e,r,t){var o=t(95318),n=t(20862);r.Z=void 0;var p=n(t(67294)),a=(0,o(t(58786)).default)(p.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");r.Z=a},94343:function(e,r,t){var o=t(95318),n=t(20862);r.Z=void 0;var p=n(t(67294)),a=(0,o(t(58786)).default)(p.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");r.Z=a},75695:function(e,r,t){var o=t(67294),n=t(33287),p=t(80453),a=t(23729),i=t(83102),l=t(94343);r.Z=function(e){var r=e.text,t=e.onPrev,s=e.onNext;return o.createElement(o.Fragment,null,o.createElement(n.Z,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},o.createElement(a.Z,{color:"primary",onClick:t},o.createElement(i.Z,{fontSize:"small"})),o.createElement(p.Z,{color:"primary"},r),o.createElement(a.Z,{color:"primary",onClick:s},o.createElement(l.Z,{fontSize:"small"}))))}},74126:function(e,r,t){t.r(r);var o=t(67294),n=t(35414),p=t(10920),a=t(71293),i=t(80453),l=t(12176),s=t(55694),u=t(75695),m=(0,p.Z)((function(e){return{button:{},container:{display:"flex",flexDirection:"column",justifyContent:"space-between"},mono:{fontFamily:"Roboto Mono"},latex:{fontFamily:"Computer Modern",fontSize:"1.4rem"}}}));r.default=function(){var e=m(),r=o.useState(""),t=r[0],p=r[1],c=o.useState([]),f=c[0],d=c[1],h=o.useState(0),y=h[0],g=h[1];return o.useEffect((function(){try{var e=JSON.parse(t);d(e),g(0)}catch(r){d([]),g(0)}}),[t]),o.createElement(o.Fragment,null,o.createElement(n.q,null,o.createElement("title",null,"Image Viewer - dustbringer.github.io"),o.createElement("meta",{name:"description",content:"Markdown Renderer"})),o.createElement(a.Z,{maxWidth:"md",className:e.container},o.createElement(i.Z,{variant:"h4"},"Image Viewer"),o.createElement(i.Z,{variant:"body1",gutterBottom:!0},"Tool for SYNCS Hackathon 2021. Views images with json input, format is below."),o.createElement(s.Z,{language:"json"},'[\n  {\n    "link": IMG_URL,\n  },\n  // ...\n]'),o.createElement(l.Z,{label:"Input JSON",rows:2,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",InputProps:{classes:{input:e.mono}},value:t,onChange:function(e){return p(e.target.value)}}),f&&0!==f.length?o.createElement("img",{src:f[y].link,alt:"parsed output"}):"No images to display or error...",o.createElement(u.Z,{text:y,onPrev:function(){return g(Math.max(0,y-1))},onNext:function(){0===f.length?g(0):g(Math.min(f.length-1,y+1))}})))}}}]);
//# sourceMappingURL=component---src-pages-tools-syncshack-2021-image-viewer-jsx-4a4b4d638ba5837a82cd.js.map