"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[382],{68920:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var a,l=n(72087),r=n(59364),i=n(31403),s=n(10760),c=n(90241),h=n(75490),o=n(571),m=n(6116),u=n(96200),g=n(82646);const d=(0,s.ZP)("div")(a||(a=(0,l.Z)(["\n  min-height: 75vh;\n"])));t.default=function(e){let{location:t,data:n}=e;const{nodes:a}=n.allMarkdownRemark,[l,s]=r.useState(1);return r.useEffect((()=>{const e=parseInt(c.parse(t.search).page,10);!isNaN(e)&&e>0&&e<=Math.ceil(a.length/g.U)&&s(e)}),[t.search,a.length]),r.createElement(r.Fragment,null,r.createElement(o.Z,{maxWidth:"md"},r.createElement(h.Z,{variant:"h4",gutterBottom:!0},"Posts"),r.createElement("div",null,a.length>0?r.createElement(r.Fragment,null,r.createElement(d,null,(0,g.f)(a,l,g.U).map(((e,t)=>{var n;const{id:a,path:l,frontmatter:i}=e;return r.createElement(m.Z,{key:t+"-"+a,title:i.title,description:i.description,date:i.edited,tags:i.tags,name:null===(n=i.slug.match(/^.*\/(.+?)$/))||void 0===n?void 0:n[1],path:l})}))),a.length>g.U&&r.createElement(u.Z,{text:String(l),onPrev:()=>l>1&&(0,i.navigate)(t.pathname+"?page="+Math.max(l-1,1)),onNext:()=>l<Math.ceil(a.length/g.U)&&(0,i.navigate)(t.pathname+"?page="+Math.min(l+1,Math.ceil(a.length/g.U))),prevDisabled:l<=1,nextDisabled:l>=Math.ceil(a.length/g.U)})):r.createElement(h.Z,null,"There seems to be nothing here..."))))};function p(){return r.createElement(r.Fragment,null,r.createElement("title",null,"Posts | dustbringer.github.io"),r.createElement("meta",{name:"description",content:"List of blog posts"}))}}}]);
//# sourceMappingURL=component---src-pages-posts-index-tsx-f8d0499eb40e6bf6bece.js.map