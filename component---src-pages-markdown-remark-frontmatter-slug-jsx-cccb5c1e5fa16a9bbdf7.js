"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[370],{20922:function(e,t,n){var o=n(37547),i=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(e){var t;if("tr"===e.tagName||"td"===e.tagName||"th"===e.tagName)for(t in r)i.call(r,t)&&void 0!==e.properties[t]&&(l(e,r[t],e.properties[t]),delete e.properties[t])}function l(e,t,n){var o=(e.properties.style||"").trim();o&&!/;\s*/.test(o)&&(o+=";"),o&&(o+=" ");var i=o+t+": "+n+";";e.properties.style=i}e.exports=function(e){return o(e,"element",a),e}},72563:function(e){function t(e){if("string"==typeof e)return function(e){return t;function t(t){return Boolean(t&&t.type===e)}}(e);if(null==e)return i;if("object"==typeof e)return("length"in e?o:n)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function n(e){return function(t){var n;for(n in e)if(t[n]!==e[n])return!1;return!0}}function o(e){var n=function(e){for(var n=[],o=e.length,i=-1;++i<o;)n[i]=t(e[i]);return n}(e),o=n.length;return function(){var e=-1;for(;++e<o;)if(n[e].apply(this,arguments))return!0;return!1}}function i(){return!0}e.exports=t},79840:function(e,t,n){e.exports=a;var o=n(72563),i="skip",r=!1;function a(e,t,n,a){var d;function c(e,o,f){var s,p=[];return(t&&!d(e,o,f[f.length-1]||null)||(p=l(n(e,f)))[0]!==r)&&e.children&&p[0]!==i?(s=l(function(e,t){var n,o=-1,i=a?-1:1,l=(a?e.length:o)+i;for(;l>o&&l<e.length;){if((n=c(e[l],l,t))[0]===r)return n;l="number"==typeof n[1]?n[1]:l+i}}(e.children,f.concat(e))),s[0]===r?s:p):p}"function"==typeof t&&"function"!=typeof n&&(a=n,n=t,t=null),d=o(t),c(e,null,[])}function l(e){return null!==e&&"object"==typeof e&&"length"in e?e:"number"==typeof e?[true,e]:[e]}a.CONTINUE=true,a.SKIP=i,a.EXIT=r},37547:function(e,t,n){e.exports=l;var o=n(79840),i=o.CONTINUE,r=o.SKIP,a=o.EXIT;function l(e,t,n,i){"function"==typeof t&&"function"!=typeof n&&(i=n,n=t,t=null),o(e,t,(function(e,t){var o=t[t.length-1],i=o?o.children.indexOf(e):null;return n(e,i,o)}),i)}l.CONTINUE=i,l.SKIP=r,l.EXIT=a},26759:function(e,t,n){var o=n(67294).createContext();t.Z=o},8230:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(67294),i=n(26759);function r(){return o.useContext(i.Z)}},2215:function(e,t,n){n(67294);var o=n(53583),i=n(85616),r=(0,o.default)(i.Z).withConfig({displayName:"Container",componentId:"sc-9r31jc-0"})(["display:flex;flex-direction:column;justify-content:space-between;"]);t.Z=r},76677:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var o=n(67294),i=n(35414),r=n(53583),a=n(53946),l=n(20922),d=n.n(l),c=n(68775),f={}.hasOwnProperty,s=new Set(["table","thead","tbody","tfoot","tr","th","td"]);var p=function(e){if(!e||"function"!=typeof e.createElement)throw new TypeError("createElement is not a function");var t=e.createElement;function n(n,o,i){if(i&&s.has(n)&&(i=i.filter((function(e){return!(0,c.Q)(e)}))),e.components&&f.call(e.components,n)){var r=e.components[n];return e.passNode&&"function"==typeof r&&(o=Object.assign({node:this},o)),t(r,o,i)}return t(n,o,i)}Object.assign(this,{Compiler:function(o){var i=(0,a.l)(n,d()(o),e.prefix);if("root"===o.type)return i=i&&"object"==typeof i&&"type"in i&&"props"in i&&"div"===i.type&&(1!==o.children.length||"element"!==o.children[0].type)?i.props.children:[i],t(e.Fragment||"div",{},i);return i}})},u=n(49308),m=n(2215),h=r.default.blockquote.withConfig({displayName:"BlockQuote",componentId:"sc-20ndyo-0"})(["color:#6a737d;border-left:4px solid #dfe2e5;padding:0.25em 1em;margin:0.75em;& > p{margin:0.25em 0;}"]),g=(0,r.css)(["margin:0;"]),y=r.default.h1.withConfig({displayName:"Heading__StyledH1",componentId:"sc-1gzcjpd-0"})(["",";font-size:3em;font-weight:500;"],g),w=r.default.h2.withConfig({displayName:"Heading__StyledH2",componentId:"sc-1gzcjpd-1"})(["",";font-size:2.5em;font-weight:500;"],g),b=r.default.h3.withConfig({displayName:"Heading__StyledH3",componentId:"sc-1gzcjpd-2"})(["",";font-size:2em;font-weight:600;"],g),v=r.default.h4.withConfig({displayName:"Heading__StyledH4",componentId:"sc-1gzcjpd-3"})(["",";font-size:1.75em;font-weight:600;"],g),k=r.default.h5.withConfig({displayName:"Heading__StyledH5",componentId:"sc-1gzcjpd-4"})(["",";font-size:1.5em;font-weight:700;"],g),x=r.default.h6.withConfig({displayName:"Heading__StyledH6",componentId:"sc-1gzcjpd-5"})(["",";font-size:1.25em;font-weight:700;"],g),C=r.default.hr.withConfig({displayName:"HorizontalRule",componentId:"sc-13jm1gi-0"})(["height:0.25em;padding:0;margin:24px 0;background-color:#e1e4e8;border:0;"]),_=r.default.img.withConfig({displayName:"Image__StyledImg",componentId:"sc-c87vw9-0"})(["max-width:100%;"]),N=r.default.span.withConfig({displayName:"Image__CenterDiv",componentId:"sc-c87vw9-1"})(["display:flex;flex-direction:column;align-items:center;"]),I=function(e){return o.createElement(N,null,o.createElement(_,e))},E=n(98348),j=n(36190),z=(0,E.ZP)(j.Z)({color:"#0f6dd8",textDecoration:"none","&:hover":{color:"#0f6dd8",textDecoration:"underline"}}),H=function(e){return o.createElement(o.Fragment,null,e.className&&e.className.includes("header-link-class")?o.createElement("a",e):o.createElement(z,{href:e.href,target:"_blank",rel:"noopener noreferrer"},e.children))},T=r.default.li.withConfig({displayName:"ListItem",componentId:"sc-6uqrgi-0"})(["",";"],(function(e){return"task-list-item"===e.className&&(0,r.css)(["&::marker{content:none;}margin-left:-40px;"])})),S=n(21348),O=(0,r.default)(S.Z).withConfig({displayName:"Checkbox__StyledCheckbox",componentId:"sc-1sxst7e-0"})(["&.MuiIconButton-root.Mui-disabled{color:#1976d2;}"]),Z=function(e){return o.createElement(o.Fragment,null,"checkbox"===e.type?o.createElement(O,{className:e.className,color:"default",checked:e.checked,size:"small",disableRipple:!0,disabled:!0}):o.createElement("input",e))},R=r.default.table.withConfig({displayName:"Table",componentId:"sc-mx8fyw-0"})(["background-color:#ffffff;border:1px solid #dddddd;border-spacing:0;border-collapse:collapse;margin:1em 0;"]),D=(0,r.css)(["border:1px solid #dddddd;padding:6px 13px;"]),F=r.default.th.withConfig({displayName:"TableCellHeader",componentId:"sc-18ct0kj-0"})(["",";"],D),P=(0,r.css)(["border:1px solid #dddddd;padding:6px 13px;"]),M=r.default.td.withConfig({displayName:"TableCellData",componentId:"sc-e2afs5-0"})(["",";"],P),q=r.default.thead.withConfig({displayName:"TableHead",componentId:"sc-1xiuyh0-0"})(["border-bottom:2px solid #dddddd;"]),A=r.default.tr.withConfig({displayName:"TableRow",componentId:"sc-64z0il-0"})(["&:nth-child(2n){background-color:#f6f8fa;}"]),B=r.default.div.withConfig({displayName:"Contents__FormatDiv",componentId:"sc-1l6gpvw-0"})(['font-family:"Open Sans","Roboto","Helvetica","Arial","sans-serif";font-size:16px;user-select:none;white-space:pre-line;width:200px;position:sticky;top:1vw;margin-left:-210px;margin-top:50px;border-left:2px solid #2f324155;@media (max-width:1375px){display:none;}']),K=(0,r.css)(["display:block;margin:0;padding:0;padding-left:","px;font-size:0.8em;font-weight:700;cursor:pointer;opacity:50%;&:hover{opacity:75%;background-color:#efefef;}&:active{opacity:100%;}white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"],(function(e){return 10*e.depth})),U=r.default.a.withConfig({displayName:"Contents__StyledA",componentId:"sc-1l6gpvw-1"})(["color:black;text-decoration:none;",""],K),X=r.default.span.withConfig({displayName:"Contents__Top",componentId:"sc-1l6gpvw-2"})(["",";background-color:#dddddd;opacity:60%;&:hover{background-color:#dddddd;}"],K),Q=function(e){return e.replace(/(<([^>]+)>)/gi,"")},L=function(e){var t=e.headings;return o.createElement(B,null,o.createElement(X,{depth:1,title:"Top",role:"button",onClick:function(){return window.scrollTo(0,0)}},"Top"),t.map((function(e,t){return o.createElement(U,{depth:e.depth,title:Q(e.value),role:"button",key:t,href:"#"+e.id},Q(e.value))})))},W=(0,r.default)(u.Z).withConfig({displayName:"MarkdownRemarkfrontmatter__slug__Frontmatter",componentId:"sc-dj8905-0"})(["font-size:0.8em;color:#aaaaaa;"]),G=(0,r.css)(["overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;"]),J=r.default.div.withConfig({displayName:"MarkdownRemarkfrontmatter__slug__MarkdownFormatDiv",componentId:"sc-dj8905-1"})(["width:100%;",";"],G),V=r.default.div.withConfig({displayName:"MarkdownRemarkfrontmatter__slug__ContentsPositionDiv",componentId:"sc-dj8905-2"})(['font-family:"Open Sans","Roboto","Helvetica","Arial","sans-serif";display:flex;flex-direction:row;']),Y=function(e){var t=e.data,n=(e.location,t.markdownRemark),r=n.frontmatter,a=n.htmlAst,l=n.headings,d=new p({createElement:o.createElement,components:{blockquote:h,h1:y,h2:w,h3:b,h4:v,h5:k,h6:x,hr:C,img:I,a:H,li:T,input:Z,table:R,th:F,td:M,thead:q,tr:A}}).Compiler;return o.createElement(o.Fragment,null,o.createElement(i.q,null,o.createElement("title",null,r.title," - dustbringer.github.io"),o.createElement("meta",{name:"description",content:"Blog - "+r.title})),o.createElement(m.Z,{maxWidth:"md"},o.createElement(W,{variant:"body1"},r.title,", written by ",r.author," on ",r.date),o.createElement(V,null,o.createElement("div",null,o.createElement(L,{headings:l})),o.createElement(J,null,d(a)))))}}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-jsx-cccb5c1e5fa16a9bbdf7.js.map