"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[274],{89131:function(e,t,n){var a=n(74579);t.Z=void 0;var r=a(n(22511)),o=n(4404),l=(0,r.default)((0,o.jsx)("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}),"DirectionsRun");t.Z=l},21333:function(e,t,n){var a=n(74579);t.Z=void 0;var r=a(n(22511)),o=n(4404),l=(0,r.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.Z=l},5962:function(e,t,n){var a=n(74579);t.Z=void 0;var r=a(n(22511)),o=n(4404),l=(0,r.default)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=l},9316:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(86415),r=n(89241),o=n(7783),l=n(59288);var i=(0,n(36190).Z)("MuiBox",["root"]);const s=(0,o.Z)();var c=(0,a.Z)({themeId:l.Z,defaultTheme:s,defaultClassName:i.root,generateClassName:r.Z.generate})},86415:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(50451),r=n(20925),o=n(59364),l=n(79028),i=n(2162),s=n(5545),c=n(3375),u=n(87841),m=n(4404);const d=["className","component"];function f(e={}){const{themeId:t,defaultTheme:n,defaultClassName:f="MuiBox-root",generateClassName:g}=e,h=(0,i.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return o.forwardRef((function(e,o){const i=(0,u.Z)(n),s=(0,c.Z)(e),{className:Z,component:v="div"}=s,p=(0,r.Z)(s,d);return(0,m.jsx)(h,(0,a.Z)({as:v,ref:o,className:(0,l.Z)(Z,g?g(f):f),theme:t&&i[t]||i},p))}))}},96200:function(e,t,n){var a=n(59364),r=n(9316),o=n(75490),l=n(54177),i=n(21333),s=n(5962);t.Z=function(e){let{text:t,onPrev:n,onNext:c,prevDisabled:u=!0,nextDisabled:m=!0}=e;return a.createElement(r.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},a.createElement(l.Z,{color:"primary",onClick:n,size:"large",disabled:u},a.createElement(i.Z,{fontSize:"small"})),a.createElement(o.Z,{variant:"body1"},t),a.createElement(l.Z,{color:"primary",onClick:c,size:"large",disabled:m},a.createElement(s.Z,{fontSize:"small"})))}},6770:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f}});var a=n(59364),r=n(9316),o=n(79504),l=n(75490),i=n(8345),s=n(89131),c=n(58017),u=n(571),m=n(96200),d=n(65997);function f(){return a.createElement(a.Fragment,null,a.createElement("title",null,"Image Viewer | dustbringer.github.io"),a.createElement("meta",{name:"description",content:"Markdown Renderer"}))}t.default=function(){const e=a.useContext(d.kn),{showError:t,showSuccess:n}=e||{showError:()=>{},showSuccess:()=>{}},[f,g]=a.useState(""),[h,Z]=a.useState([]),[v,p]=a.useState(0);return a.createElement(a.Fragment,null,a.createElement(u.Z,{maxWidth:"md"},a.createElement(l.Z,{variant:"h4"},"Image Viewer"),a.createElement(l.Z,{variant:"body1",gutterBottom:!0},"Tool for SYNCS Hackathon 2021. Views images with json input, format is below."),a.createElement(c.Z,{language:"json"},'[\n  {\n    "link": IMG_URL\n    // More props is ok\n  },\n  // ...\n]'),a.createElement(r.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"stretch"}},a.createElement(i.Z,{label:"Input JSON",rows:2,multiline:!0,margin:"dense",size:"small",fullWidth:!0,autoFocus:!0,variant:"outlined",inputProps:{style:{fontFamily:"Roboto Mono"}},sx:{marginTop:"8px",marginBottom:"8px"},value:f,onChange:e=>g(e.target.value)}),a.createElement(o.Z,{variant:"contained",disableRipple:!0,sx:{margin:"8px",marginRight:0},onClick:()=>{try{const e=JSON.parse(f);Z(e),p(0),n&&n("Successfully parsed")}catch(e){e instanceof Error&&(Z([]),p(0),t&&t(e.message))}},title:"Run"},a.createElement(s.Z,null))),a.createElement(m.Z,{text:String(v),onPrev:()=>{p(Math.max(0,v-1))},onNext:()=>{0===h.length?p(0):p(Math.min(h.length-1,v+1))}}),h&&0!==h.length?a.createElement("img",{src:h[v].link,alt:"parsed output"}):"No images to display or error..."))}}}]);
//# sourceMappingURL=component---src-pages-tools-syncshack-2021-image-viewer-tsx-6f5b776105eea03e72b7.js.map