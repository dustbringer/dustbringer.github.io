"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[602],{54650:function(e,t,n){n.r(t);var a,r=n(81880),l=n(67294),i=n(47087),c=n(35414),u=n(43656),s=(n(73964),n(32203)),h=n(49308),m=n(45617),o=n(12873),g=n(21159),d=n(70062),p=(0,u.ZP)("div")(a||(a=(0,r.Z)(["\n  min-height: 74vh;\n"])));t.default=function(e){var t=e.location,n=e.data.allMarkdownRemark.edges,a=l.useState(1),r=a[0],u=a[1];return l.useEffect((function(){var e=s.parse(t.search,{ignoreQueryPrefix:!0}).page;e&&!isNaN(parseInt(e,10))&&e>0&&e<=Math.ceil(n.length/d.U)&&u(parseInt(e,10))}),[t.search,n.length]),l.createElement(l.Fragment,null,l.createElement(c.q,null,l.createElement("title",null,"Posts | dustbringer.github.io"),l.createElement("meta",{name:"description",content:"List of blog posts"})),l.createElement(m.Z,{maxWidth:"md"},l.createElement(h.Z,{variant:"h4",gutterBottom:!0},"Posts"),l.createElement("div",null,n.length>0?l.createElement(l.Fragment,null,l.createElement(p,null,(0,d.f)(n,r,d.U).map((function(e,t){var n=e.node,a=n.id,r=n.path,i=n.frontmatter;return l.createElement(o.Z,{key:t+"-"+a,title:i.title,description:i.description,date:i.date,tags:i.tags,name:i.slug.match(/^.*\/(.+?)$/)[1],path:r})}))),l.createElement(g.Z,{text:r,onPrev:function(){return r>1&&(0,i.navigate)(t.pathname+"?page="+Math.max(r-1,1))},onNext:function(){return r<Math.ceil(n.length/d.U)&&(0,i.navigate)(t.pathname+"?page="+Math.min(r+1,Math.ceil(n.length/d.U)))}})):l.createElement(h.Z,null,"There seems to be nothing here..."))))}}}]);
//# sourceMappingURL=component---src-pages-posts-index-jsx-5aea8ef82eabbd400032.js.map