"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[723],{79018:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var a,r=n(72087),l=n(59364),i=n(31403),c=n(10760),o=n(90241),s=n(75490),h=n(571),m=n(6116),u=n(96200),g=n(82646);const d=(0,c.ZP)("div")(a||(a=(0,r.Z)(["\n  min-height: 75vh;\n"])));t.default=function(e){let{location:t,data:n}=e;const{nodes:a}=n.allMarkdownRemark,[r,c]=l.useState(1);return l.useEffect((()=>{const e=parseInt(o.parse(t.search).page,10);!isNaN(e)&&e>0&&e<=Math.ceil(a.length/g.U)&&c(e)}),[t.search,a.length]),l.createElement(l.Fragment,null,l.createElement(h.Z,{maxWidth:"md"},l.createElement(s.Z,{variant:"h4",gutterBottom:!0},"Notes"),l.createElement("div",null,a.length>0?l.createElement(l.Fragment,null,l.createElement(d,null,(0,g.f)(a,r,g.U).map(((e,t)=>{var n;const{id:a,path:r,frontmatter:i}=e;return l.createElement(m.Z,{key:t+"-"+a,title:i.title,description:i.description,date:i.edited,tags:i.tags,name:null===(n=i.slug.match(/^.*\/(.+?)$/))||void 0===n?void 0:n[1],path:r})}))),l.createElement(u.Z,{text:String(r),onPrev:()=>r>1&&(0,i.navigate)(t.pathname+"?page="+Math.max(r-1,1)),onNext:()=>r<Math.ceil(a.length/g.U)&&(0,i.navigate)(t.pathname+"?page="+Math.min(r+1,Math.ceil(a.length/g.U)))})):l.createElement(s.Z,null,"There seems to be nothing here..."))))};function p(){return l.createElement(l.Fragment,null,l.createElement("title",null,"Notes | dustbringer.github.io"),l.createElement("meta",{name:"description",content:"List of Notes"}))}}}]);
//# sourceMappingURL=component---src-pages-notes-index-tsx-316ed211f03f9c6e17aa.js.map