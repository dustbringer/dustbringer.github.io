"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[259],{12873:function(e,a,o){o.d(a,{Z:function(){return V}});var t=o(67294),c=o(73964),l=o.n(c),n=o(4942),r=o(63366),i=o(87462),s=o(85505),d=o(9236),p=o(67663),v=o(12067),m=o(85893),u=(0,v.Z)((0,m.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),b=o(65973),g=o(49240),Z=o(53679),f=o(10184),h=o(43656),C=o(19508),y=o(31351);function k(e){return(0,y.Z)("MuiChip",e)}var S=(0,C.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),x=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],I=(0,h.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,a){var o=e.ownerState,t=o.color,c=o.iconColor,l=o.clickable,r=o.onDelete,i=o.size,s=o.variant;return[(0,n.Z)({},"& .".concat(S.avatar),a.avatar),(0,n.Z)({},"& .".concat(S.avatar),a["avatar".concat((0,g.Z)(i))]),(0,n.Z)({},"& .".concat(S.avatar),a["avatarColor".concat((0,g.Z)(t))]),(0,n.Z)({},"& .".concat(S.icon),a.icon),(0,n.Z)({},"& .".concat(S.icon),a["icon".concat((0,g.Z)(i))]),(0,n.Z)({},"& .".concat(S.icon),a["iconColor".concat((0,g.Z)(c))]),(0,n.Z)({},"& .".concat(S.deleteIcon),a.deleteIcon),(0,n.Z)({},"& .".concat(S.deleteIcon),a["deleteIcon".concat((0,g.Z)(i))]),(0,n.Z)({},"& .".concat(S.deleteIcon),a["deleteIconColor".concat((0,g.Z)(t))]),(0,n.Z)({},"& .".concat(S.deleteIcon),a["deleteIcon".concat((0,g.Z)(s),"Color").concat((0,g.Z)(t))]),a.root,a["size".concat((0,g.Z)(i))],a["color".concat((0,g.Z)(t))],l&&a.clickable,l&&"default"!==t&&a["clickableColor".concat((0,g.Z)(t),")")],r&&a.deletable,r&&"default"!==t&&a["deletableColor".concat((0,g.Z)(t))],a[s],a["".concat(s).concat((0,g.Z)(t))]]}})((function(e){var a,o=e.theme,t=e.ownerState,c="light"===o.palette.mode?o.palette.grey[700]:o.palette.grey[300];return(0,i.Z)((a={maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,n.Z)(a,"&.".concat(S.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"}),(0,n.Z)(a,"& .".concat(S.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:c,fontSize:o.typography.pxToRem(12)}),(0,n.Z)(a,"& .".concat(S.avatarColorPrimary),{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark}),(0,n.Z)(a,"& .".concat(S.avatarColorSecondary),{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark}),(0,n.Z)(a,"& .".concat(S.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)}),(0,n.Z)(a,"& .".concat(S.icon),(0,i.Z)({marginLeft:5,marginRight:-6},"small"===t.size&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&(0,i.Z)({color:o.vars?o.vars.palette.Chip.defaultIconColor:c},"default"!==t.color&&{color:"inherit"}))),(0,n.Z)(a,"& .".concat(S.deleteIcon),(0,i.Z)({WebkitTapHighlightColor:"transparent",color:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / 0.26)"):(0,p.Fq)(o.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / 0.4)"):(0,p.Fq)(o.palette.text.primary,.4)}},"small"===t.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==t.color&&{color:o.vars?"rgba(".concat(o.vars.palette[t.color].contrastTextChannel," / 0.7)"):(0,p.Fq)(o.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[t.color].contrastText}})),a),"small"===t.size&&{height:24},"default"!==t.color&&{backgroundColor:(o.vars||o).palette[t.color].main,color:(o.vars||o).palette[t.color].contrastText},t.onDelete&&(0,n.Z)({},"&.".concat(S.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selectedChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,p.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}),t.onDelete&&"default"!==t.color&&(0,n.Z)({},"&.".concat(S.focusVisible),{backgroundColor:(o.vars||o).palette[t.color].dark}))}),(function(e){var a,o=e.theme,t=e.ownerState;return(0,i.Z)({},t.clickable&&(a={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selectedChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,p.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}},(0,n.Z)(a,"&.".concat(S.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selectedChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,p.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}),(0,n.Z)(a,"&:active",{boxShadow:(o.vars||o).shadows[1]}),a),t.clickable&&"default"!==t.color&&(0,n.Z)({},"&:hover, &.".concat(S.focusVisible),{backgroundColor:(o.vars||o).palette[t.color].dark}))}),(function(e){var a,o,t=e.theme,c=e.ownerState;return(0,i.Z)({},"outlined"===c.variant&&(a={backgroundColor:"transparent",border:t.vars?"1px solid ".concat(t.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[700])},(0,n.Z)(a,"&.".concat(S.clickable,":hover"),{backgroundColor:(t.vars||t).palette.action.hover}),(0,n.Z)(a,"&.".concat(S.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,n.Z)(a,"& .".concat(S.avatar),{marginLeft:4}),(0,n.Z)(a,"& .".concat(S.avatarSmall),{marginLeft:2}),(0,n.Z)(a,"& .".concat(S.icon),{marginLeft:4}),(0,n.Z)(a,"& .".concat(S.iconSmall),{marginLeft:2}),(0,n.Z)(a,"& .".concat(S.deleteIcon),{marginRight:5}),(0,n.Z)(a,"& .".concat(S.deleteIconSmall),{marginRight:3}),a),"outlined"===c.variant&&"default"!==c.color&&(o={color:(t.vars||t).palette[c.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[c.color].mainChannel," / 0.7)"):(0,p.Fq)(t.palette[c.color].main,.7))},(0,n.Z)(o,"&.".concat(S.clickable,":hover"),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[c.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,p.Fq)(t.palette[c.color].main,t.palette.action.hoverOpacity)}),(0,n.Z)(o,"&.".concat(S.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[c.color].mainChannel," / ").concat(t.vars.palette.action.focusOpacity,")"):(0,p.Fq)(t.palette[c.color].main,t.palette.action.focusOpacity)}),(0,n.Z)(o,"& .".concat(S.deleteIcon),{color:t.vars?"rgba(".concat(t.vars.palette[c.color].mainChannel," / 0.7)"):(0,p.Fq)(t.palette[c.color].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[c.color].main}}),o))})),w=(0,h.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,a){var o=e.ownerState.size;return[a.label,a["label".concat((0,g.Z)(o))]]}})((function(e){var a=e.ownerState;return(0,i.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===a.size&&{paddingLeft:8,paddingRight:8})}));function z(e){return"Backspace"===e.key||"Delete"===e.key}var O=t.forwardRef((function(e,a){var o=(0,f.Z)({props:e,name:"MuiChip"}),c=o.avatar,l=o.className,n=o.clickable,p=o.color,v=void 0===p?"default":p,h=o.component,C=o.deleteIcon,y=o.disabled,S=void 0!==y&&y,O=o.icon,E=o.label,R=o.onClick,D=o.onDelete,F=o.onKeyDown,M=o.onKeyUp,P=o.size,T=void 0===P?"medium":P,V=o.variant,L=void 0===V?"filled":V,N=o.tabIndex,q=o.skipFocusWhenDisabled,K=void 0!==q&&q,W=(0,r.Z)(o,x),j=t.useRef(null),U=(0,b.Z)(j,a),Y=function(e){e.stopPropagation(),D&&D(e)},_=!(!1===n||!R)||n,A=_||D?Z.Z:h||"div",B=(0,i.Z)({},o,{component:A,disabled:S,size:T,color:v,iconColor:t.isValidElement(O)&&O.props.color||v,onDelete:!!D,clickable:_,variant:L}),H=function(e){var a=e.classes,o=e.disabled,t=e.size,c=e.color,l=e.iconColor,n=e.onDelete,r=e.clickable,i=e.variant,s={root:["root",i,o&&"disabled","size".concat((0,g.Z)(t)),"color".concat((0,g.Z)(c)),r&&"clickable",r&&"clickableColor".concat((0,g.Z)(c)),n&&"deletable",n&&"deletableColor".concat((0,g.Z)(c)),"".concat(i).concat((0,g.Z)(c))],label:["label","label".concat((0,g.Z)(t))],avatar:["avatar","avatar".concat((0,g.Z)(t)),"avatarColor".concat((0,g.Z)(c))],icon:["icon","icon".concat((0,g.Z)(t)),"iconColor".concat((0,g.Z)(l))],deleteIcon:["deleteIcon","deleteIcon".concat((0,g.Z)(t)),"deleteIconColor".concat((0,g.Z)(c)),"deleteIcon".concat((0,g.Z)(i),"Color").concat((0,g.Z)(c))]};return(0,d.Z)(s,k,a)}(B),G=A===Z.Z?(0,i.Z)({component:h||"div",focusVisibleClassName:H.focusVisible},D&&{disableRipple:!0}):{},J=null;D&&(J=C&&t.isValidElement(C)?t.cloneElement(C,{className:(0,s.Z)(C.props.className,H.deleteIcon),onClick:Y}):(0,m.jsx)(u,{className:(0,s.Z)(H.deleteIcon),onClick:Y}));var Q=null;c&&t.isValidElement(c)&&(Q=t.cloneElement(c,{className:(0,s.Z)(H.avatar,c.props.className)}));var X=null;return O&&t.isValidElement(O)&&(X=t.cloneElement(O,{className:(0,s.Z)(H.icon,O.props.className)})),(0,m.jsxs)(I,(0,i.Z)({as:A,className:(0,s.Z)(H.root,l),disabled:!(!_||!S)||void 0,onClick:R,onKeyDown:function(e){e.currentTarget===e.target&&z(e)&&e.preventDefault(),F&&F(e)},onKeyUp:function(e){e.currentTarget===e.target&&(D&&z(e)?D(e):"Escape"===e.key&&j.current&&j.current.blur()),M&&M(e)},ref:U,tabIndex:K&&S?-1:N,ownerState:B},G,W,{children:[Q||X,(0,m.jsx)(w,{className:(0,s.Z)(H.label),ownerState:B,children:E}),J]}))})),E=o(30664),R=o(42469),D=o(75510),F=o(49308),M=o(39211),P=o(86453),T={root:{textAlign:"left",margin:"10px",backgroundColor:"#fdfdfd",transition:"border-color 0.25s","&:hover":{borderColor:"secondary.main"}},media:{height:140},tag:{margin:"0 2px"}};var V=function(e){var a=e.name,o=e.title,c=e.description,n=e.date,r=e.tags,i=e.path;return t.createElement(E.Z,{sx:T.root,variant:"outlined"},t.createElement(P.t,{to:i},t.createElement(R.Z,{title:a+".md"},t.createElement(D.Z,null,t.createElement(M.Z,{sx:{marginBottom:1}},t.createElement(F.Z,{variant:"h5",component:"h5",display:"inline"},o||"Unknown Title"),t.createElement(F.Z,{variant:"body2",color:"textSecondary",component:"i"}," ",n&&l()(n).isValid()?l()(n).format("DD MMMM YYYY"):"Unknown Date"),t.createElement(F.Z,{variant:"body2",component:"p"},c)),r&&r.map((function(e,a){return t.createElement(O,{key:a,sx:T.tag,size:"small",label:e})}))))))}}}]);
//# sourceMappingURL=485d3f3e92bf8f81abf81abca89714110c4ba7df-96f6658da0dbe0f593ca.js.map