"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[300],{26828:function(e,t,n){var a=n(95318);t.Z=void 0;var r=a(n(32174)),l=n(85893),o=(0,r.default)((0,l.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.Z=o},7564:function(e,t,n){var a=n(95318);t.Z=void 0;var r=a(n(32174)),l=n(85893),o=(0,r.default)((0,l.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=o},39211:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(87462),r=n(63366),l=n(67294),o=n(85505),i=n(8619),u=n(12037),c=n(18297),m=n(23182),s=n(85893),f=["className","component"];var d=n(86756),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,d=void 0===n?"MuiBox-root":n,g=e.generateClassName,v=(0,i.ZP)("div")(u.Z),Z=l.forwardRef((function(e,n){var l=(0,m.Z)(t),i=(0,c.Z)(e),u=i.className,Z=i.component,h=void 0===Z?"div":Z,p=(0,r.Z)(i,f);return(0,s.jsx)(v,(0,a.Z)({as:h,ref:n,className:(0,o.Z)(u,g?g(d):d),theme:l},p))}));return Z}({defaultTheme:(0,n(78790).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate}),v=g},75695:function(e,t,n){var a=n(67294),r=n(39211),l=n(49308),o=n(90581),i=n(26828),u=n(7564);t.Z=function(e){var t=e.text,n=e.onPrev,c=e.onNext;return a.createElement(a.Fragment,null,a.createElement(r.Z,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},a.createElement(o.Z,{color:"primary",onClick:n,size:"large"},a.createElement(i.Z,{fontSize:"small"})),a.createElement(l.Z,{color:"primary"},t),a.createElement(o.Z,{color:"primary",onClick:c,size:"large"},a.createElement(u.Z,{fontSize:"small"}))))}},74126:function(e,t,n){n.r(t);var a=n(67294),r=n(35414),l=n(49308),o=n(46825),i=n(55694),u=n(2215),c=n(75695);t.default=function(){var e=a.useState(""),t=e[0],n=e[1],m=a.useState([]),s=m[0],f=m[1],d=a.useState(0),g=d[0],v=d[1];return a.useEffect((function(){try{var e=JSON.parse(t);f(e),v(0)}catch(n){f([]),v(0)}}),[t]),a.createElement(a.Fragment,null,a.createElement(r.q,null,a.createElement("title",null,"Image Viewer - dustbringer.github.io"),a.createElement("meta",{name:"description",content:"Markdown Renderer"})),a.createElement(u.Z,{maxWidth:"md"},a.createElement(l.Z,{variant:"h4"},"Image Viewer"),a.createElement(l.Z,{variant:"body1",gutterBottom:!0},"Tool for SYNCS Hackathon 2021. Views images with json input, format is below."),a.createElement(i.Z,{language:"json"},'[\n  {\n    "link": IMG_URL,\n  },\n  // ...\n]'),a.createElement(o.Z,{label:"Input JSON",rows:2,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",InputProps:{sx:{fontFamily:"Roboto Mono"}},value:t,onChange:function(e){return n(e.target.value)}}),s&&0!==s.length?a.createElement("img",{src:s[g].link,alt:"parsed output"}):"No images to display or error...",a.createElement(c.Z,{text:g,onPrev:function(){return v(Math.max(0,g-1))},onNext:function(){0===s.length?v(0):v(Math.min(s.length-1,g+1))}})))}}}]);
//# sourceMappingURL=component---src-pages-tools-syncshack-2021-image-viewer-jsx-7c8b5eada1b61956e5c6.js.map