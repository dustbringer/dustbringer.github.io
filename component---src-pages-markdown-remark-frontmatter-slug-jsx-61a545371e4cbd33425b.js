"use strict";(self.webpackChunkdustbringer_github_io=self.webpackChunkdustbringer_github_io||[]).push([[370],{20922:function(n,e,l){var t=l(37547),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,l){var t=(n.properties.style||"").trim();t&&!/;\s*/.test(t)&&(t+=";"),t&&(t+=" ");var o=t+e+": "+l+";";n.properties.style=o}n.exports=function(n){return t(n,"element",a),n}},72563:function(n){function e(n){if("string"==typeof n)return function(n){return e;function e(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return o;if("object"==typeof n)return("length"in n?t:l)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function l(n){return function(e){var l;for(l in n)if(e[l]!==n[l])return!1;return!0}}function t(n){var l=function(n){for(var l=[],t=n.length,o=-1;++o<t;)l[o]=e(n[o]);return l}(n),t=l.length;return function(){var n=-1;for(;++n<t;)if(l[n].apply(this,arguments))return!0;return!1}}function o(){return!0}n.exports=e},79840:function(n,e,l){n.exports=i;var t=l(72563),o=!0,r="skip",a=!1;function i(n,e,l,o){var i;function s(n,t,c){var p,d=[];return(e&&!i(n,t,c[c.length-1]||null)||(d=u(l(n,c)))[0]!==a)&&n.children&&d[0]!==r?(p=u(function(n,e){var l,t=-1,r=o?-1:1,i=(o?n.length:t)+r;for(;i>t&&i<n.length;){if((l=s(n[i],i,e))[0]===a)return l;i="number"==typeof l[1]?l[1]:i+r}}(n.children,c.concat(n))),p[0]===a?p:d):d}"function"==typeof e&&"function"!=typeof l&&(o=l,l=e,e=null),i=t(e),s(n,null,[])}function u(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[o,n]:[n]}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},37547:function(n,e,l){n.exports=i;var t=l(79840),o=t.CONTINUE,r=t.SKIP,a=t.EXIT;function i(n,e,l,o){"function"==typeof e&&"function"!=typeof l&&(o=l,l=e,e=null),t(n,e,(function(n,e){var t=e[e.length-1],o=t?t.children.indexOf(n):null;return l(n,o,t)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},26759:function(n,e,l){var t=l(67294).createContext(void 0);e.Z=t},8230:function(n,e,l){l.d(e,{Z:function(){return r}});var t=l(67294),o=l(26759);function r(){return t.useContext(o.Z)}},39046:function(n,e,l){var t,o=l(81880),r=(l(67294),(0,l(43656).ZP)("li")(t||(t=(0,o.Z)(["\n  ",";\n"])),(function(n){return"task-list-item"===n.className&&"\n      &::marker {\n        content: none;\n      }\n      margin-left: -40px;\n    "})));e.Z=r},63264:function(n,e,l){l.r(e),l.d(e,{default:function(){return Ee}});var t={};l.r(t),l.d(t,{boolean:function(){return w},booleanish:function(){return P},commaOrSpaceSeparated:function(){return L},commaSeparated:function(){return E},number:function(){return S},overloadedBoolean:function(){return C},spaceSeparated:function(){return Z}});var o=l(81880),r=l(67294),a=l(35414),i=l(43656),u=l(23431),s=l(41034),c=l(4942),p=l(43144),d=l(15671),h=(0,p.Z)((function n(e,l,t){(0,d.Z)(this,n),this.property=e,this.normal=l,t&&(this.space=t)}));function f(n,e){for(var l={},t={},o=-1;++o<n.length;)Object.assign(l,n[o].property),Object.assign(t,n[o].normal);return new h(l,t,e)}function g(n){return n.toLowerCase()}h.prototype.property={},h.prototype.normal={},h.prototype.space=null;var m=l(97326),y=l(60136),v=l(82963),k=l(61120),b=(0,p.Z)((function n(e,l){(0,d.Z)(this,n),this.property=e,this.attribute=l}));b.prototype.space=null,b.prototype.boolean=!1,b.prototype.booleanish=!1,b.prototype.overloadedBoolean=!1,b.prototype.number=!1,b.prototype.commaSeparated=!1,b.prototype.spaceSeparated=!1,b.prototype.commaOrSpaceSeparated=!1,b.prototype.mustUseProperty=!1,b.prototype.defined=!1;var x=0,w=O(),P=O(),C=O(),S=O(),Z=O(),E=O(),L=O();function O(){return Math.pow(2,++x)}function D(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var l,t=(0,k.Z)(n);if(e){var o=(0,k.Z)(this).constructor;l=Reflect.construct(t,arguments,o)}else l=t.apply(this,arguments);return(0,v.Z)(this,l)}}var M=Object.keys(t),R=function(n){(0,y.Z)(l,n);var e=D(l);function l(n,o,r,a){var i;(0,d.Z)(this,l);var u=-1;if(i=e.call(this,n,o),T((0,m.Z)(i),"space",a),"number"==typeof r)for(;++u<M.length;){var s=M[u];T((0,m.Z)(i),M[u],(r&t[s])===t[s])}return i}return(0,p.Z)(l)}(b);function T(n,e,l){l&&(n[e]=l)}R.prototype.defined=!0;var A={}.hasOwnProperty;function z(n){var e,l={},t={};for(e in n.properties)if(A.call(n.properties,e)){var o=n.properties[e],r=new R(e,n.transform(n.attributes||{},e),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(e)&&(r.mustUseProperty=!0),l[e]=r,t[g(e)]=e,t[g(r.attribute)]=e}return new h(l,t,n.space)}var U=z({space:"xlink",transform:function(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),I=z({space:"xml",transform:function(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function B(n,e){return e in n?n[e]:e}function N(n,e){return B(n,e.toLowerCase())}var H=z({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:N,properties:{xmlns:null,xmlnsXLink:null}}),F=z({transform:function(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:P,ariaAutoComplete:null,ariaBusy:P,ariaChecked:P,ariaColCount:S,ariaColIndex:S,ariaColSpan:S,ariaControls:Z,ariaCurrent:null,ariaDescribedBy:Z,ariaDetails:null,ariaDisabled:P,ariaDropEffect:Z,ariaErrorMessage:null,ariaExpanded:P,ariaFlowTo:Z,ariaGrabbed:P,ariaHasPopup:null,ariaHidden:P,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Z,ariaLevel:S,ariaLive:null,ariaModal:P,ariaMultiLine:P,ariaMultiSelectable:P,ariaOrientation:null,ariaOwns:Z,ariaPlaceholder:null,ariaPosInSet:S,ariaPressed:P,ariaReadOnly:P,ariaRelevant:null,ariaRequired:P,ariaRoleDescription:Z,ariaRowCount:S,ariaRowIndex:S,ariaRowSpan:S,ariaSelected:P,ariaSetSize:S,ariaSort:null,ariaValueMax:S,ariaValueMin:S,ariaValueNow:S,ariaValueText:null,role:null}}),j=z({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:N,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:E,acceptCharset:Z,accessKey:Z,action:null,allow:null,allowFullScreen:w,allowPaymentRequest:w,allowUserMedia:w,alt:null,as:null,async:w,autoCapitalize:null,autoComplete:Z,autoFocus:w,autoPlay:w,capture:w,charSet:null,checked:w,cite:null,className:Z,cols:S,colSpan:null,content:null,contentEditable:P,controls:w,controlsList:Z,coords:S|E,crossOrigin:null,data:null,dateTime:null,decoding:null,default:w,defer:w,dir:null,dirName:null,disabled:w,download:C,draggable:P,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:w,formTarget:null,headers:Z,height:S,hidden:w,high:S,href:null,hrefLang:null,htmlFor:Z,httpEquiv:Z,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:w,itemId:null,itemProp:Z,itemRef:Z,itemScope:w,itemType:Z,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:w,low:S,manifest:null,max:null,maxLength:S,media:null,method:null,min:null,minLength:S,multiple:w,muted:w,name:null,nonce:null,noModule:w,noValidate:w,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:w,optimum:S,pattern:null,ping:Z,placeholder:null,playsInline:w,poster:null,preload:null,readOnly:w,referrerPolicy:null,rel:Z,required:w,reversed:w,rows:S,rowSpan:S,sandbox:Z,scope:null,scoped:w,seamless:w,selected:w,shape:null,size:S,sizes:null,slot:null,span:S,spellCheck:P,src:null,srcDoc:null,srcLang:null,srcSet:null,start:S,step:null,style:null,tabIndex:S,target:null,title:null,translate:null,type:null,typeMustMatch:w,useMap:null,value:P,width:S,wrap:null,align:null,aLink:null,archive:Z,axis:null,background:null,bgColor:null,border:S,borderColor:null,bottomMargin:S,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:w,declare:w,event:null,face:null,frame:null,frameBorder:null,hSpace:S,leftMargin:S,link:null,longDesc:null,lowSrc:null,marginHeight:S,marginWidth:S,noResize:w,noHref:w,noShade:w,noWrap:w,object:null,profile:null,prompt:null,rev:null,rightMargin:S,rules:null,scheme:null,scrolling:P,standby:null,summary:null,text:null,topMargin:S,valueType:null,version:null,vAlign:null,vLink:null,vSpace:S,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:w,disableRemotePlayback:w,prefix:null,property:null,results:S,security:null,unselectable:null}}),V=z({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:B,properties:{about:L,accentHeight:S,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:S,amplitude:S,arabicForm:null,ascent:S,attributeName:null,attributeType:null,azimuth:S,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:S,by:null,calcMode:null,capHeight:S,className:Z,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:S,diffuseConstant:S,direction:null,display:null,dur:null,divisor:S,dominantBaseline:null,download:w,dx:null,dy:null,edgeMode:null,editable:null,elevation:S,enableBackground:null,end:null,event:null,exponent:S,externalResourcesRequired:null,fill:null,fillOpacity:S,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:E,g2:E,glyphName:E,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:S,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:S,horizOriginX:S,horizOriginY:S,id:null,ideographic:S,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:S,k:S,k1:S,k2:S,k3:S,k4:S,kernelMatrix:L,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:S,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:S,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:S,overlineThickness:S,paintOrder:null,panose1:null,path:null,pathLength:S,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Z,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:S,pointsAtY:S,pointsAtZ:S,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:L,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:L,rev:L,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:L,requiredFeatures:L,requiredFonts:L,requiredFormats:L,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:S,specularExponent:S,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:S,strikethroughThickness:S,string:null,stroke:null,strokeDashArray:L,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:S,strokeOpacity:S,strokeWidth:null,style:null,surfaceScale:S,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:L,tabIndex:S,tableValues:null,target:null,targetX:S,targetY:S,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:L,to:null,transform:null,u1:null,u2:null,underlinePosition:S,underlineThickness:S,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:S,values:null,vAlphabetic:S,vMathematical:S,vectorEffect:null,vHanging:S,vIdeographic:S,version:null,vertAdvY:S,vertOriginX:S,vertOriginY:S,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:S,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),K=f([I,U,H,F,j],"html"),W=f([I,U,H,F,V],"svg"),q=/^data[-\w.:]+$/i,X=/-[a-z]/g,Y=/[A-Z]/g;function _(n){return"-"+n.toLowerCase()}function J(n){return n.charAt(1).toUpperCase()}var G={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var $=l(93433);var Q=l(86646),nn=l(39626),en={}.hasOwnProperty;function ln(n,e,l){if("function"!=typeof n)throw new TypeError("h is not a function");var t,o,r=function(n){var e=n("div",{});return Boolean(e&&("_owner"in e||"_store"in e)&&(void 0===e.key||null===e.key))}(n),a=function(n){var e=n("div",{});return Boolean(e&&e.context&&e.context._isVue)}(n),i=function(n){var e=n("div",{});return"VirtualNode"===e.type}(n);if("string"==typeof l||"boolean"==typeof l?(t=l,l={}):(l||(l={}),t=l.prefix),e&&"root"===e.type){var u=e.children[0];o=1===e.children.length&&"element"===u.type?u:{type:"element",tagName:"div",properties:{},children:e.children}}else{if(!e||"element"!==e.type)throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");o=e}return tn(n,o,{schema:"svg"===l.space?W:K,prefix:null==t?r||a||i?"h-":void 0:"string"==typeof t?t:t?"h-":void 0,key:0,react:r,vue:a,vdom:i,hyperscript:rn(n)})}function tn(n,e,l){var t,o=l.schema,r=o,a=e.tagName,i={},u=[],s=-1;for(t in"html"===o.space&&"svg"===a.toLowerCase()&&(r=W,l.schema=r),e.properties)e.properties&&en.call(e.properties,t)&&on(i,t,e.properties[t],l,a);if(l.vdom&&("html"===r.space?a=a.toUpperCase():r.space&&(i.namespace=nn.t[r.space])),l.prefix&&(l.key++,i.key=l.prefix+l.key),e.children)for(;++s<e.children.length;){var c=e.children[s];"element"===c.type?u.push(tn(n,c,l)):"text"===c.type&&u.push(c.value)}return l.schema=o,u.length>0?n.call(e,a,i,u):n.call(e,a,i)}function on(n,e,l,t,o){var r,a,i,u,s=function(n,e){var l=g(e),t=e,o=b;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&"data"===l.slice(0,4)&&q.test(e)){if("-"===e.charAt(4)){var r=e.slice(5).replace(X,J);t="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{var a=e.slice(4);if(!X.test(a)){var i=a.replace(Y,_);"-"!==i.charAt(0)&&(i="-"+i),e="data"+i}}o=R}return new o(t,e)}(t.schema,e);null==l||"number"==typeof l&&Number.isNaN(l)||!1===l&&(t.vue||t.vdom||t.hyperscript)||!l&&s.boolean&&(t.vue||t.vdom||t.hyperscript)||(Array.isArray(l)&&(l=s.commaSeparated?(u=i||{},(""===(a=l)[a.length-1]?[].concat((0,$.Z)(a),[""]):a).join((u.padRight?" ":"")+","+(!1===u.padLeft?"":" ")).trim()):function(n){return n.join(" ").trim()}(l)),s.boolean&&t.hyperscript&&(l=""),"style"===s.property&&"string"==typeof l&&(t.react||t.vue||t.vdom)&&(l=function(n,e){var l={};try{(0,Q.Z)(n,(function(n,e){"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4)),l[n.replace(/-([a-z])/g,(function(n,e){return e.toUpperCase()}))]=e}))}catch(o){var t=o;throw t.message=e+"[style]"+t.message.slice("undefined".length),t}return l}(l,o)),t.vue?"style"!==s.property&&(r="attrs"):s.mustUseProperty||(t.vdom?"style"!==s.property&&(r="attributes"):t.hyperscript&&(r="attrs")),r?n[r]=Object.assign(n[r]||{},(0,c.Z)({},s.attribute,l)):s.space&&t.react?n[G[s.property]||s.property]=l:n[s.attribute]=l)}function rn(n){return"context"in n&&"cleanup"in n}var an=l(20922),un=l.n(an);var sn={}.hasOwnProperty,cn=new Set(["table","thead","tbody","tfoot","tr"]);function pn(n){if(!n||"function"!=typeof n.createElement)throw new TypeError("createElement is not a function");var e=n.createElement;function l(l,t,o){if(o&&cn.has(l)&&(o=o.filter((function(n){return!("string"==typeof(l=(e=n)&&"object"==typeof e&&"text"===e.type?e.value||"":e)&&""===l.replace(/[ \t\n\f\r]/g,""));var e,l}))),n.components&&sn.call(n.components,l)){var r=n.components[l];return n.passNode&&"function"==typeof r&&(t=Object.assign({node:this},t)),e(r,t,o)}return e(l,t,o)}Object.assign(this,{Compiler:function(t){var o=ln(l,un()(t),n.prefix);if("root"===t.type)return o=o&&"object"==typeof o&&"type"in o&&"props"in o&&"div"===o.type&&(1!==t.children.length||"element"!==t.children[0].type)?o.props.children:[o],e(n.Fragment||"div",{},o);return o}})}var dn,hn,fn,gn,mn,yn,vn,kn,bn,xn,wn,Pn=l(49308),Cn=l(45617),Sn=(0,i.ZP)("blockquote")(dn||(dn=(0,o.Z)(["\n  color: #6a737d;\n  border-left: 4px solid #dfe2e5;\n  padding: 0.25em 1em;\n  margin: 0.75em;\n  & > p {\n    margin: 0.25em 0;\n  }\n"]))),Zn=(0,u.css)(hn||(hn=(0,o.Z)(["\n  margin: 0;\n"]))),En=(0,i.ZP)("h1")(fn||(fn=(0,o.Z)(["\n  ",";\n  font-size: 3em;\n  font-weight: 500;\n"])),Zn),Ln=(0,i.ZP)("h2")(gn||(gn=(0,o.Z)(["\n  ",";\n  font-size: 2.5em;\n  font-weight: 500;\n"])),Zn),On=(0,i.ZP)("h3")(mn||(mn=(0,o.Z)(["\n  ",";\n  font-size: 2em;\n  font-weight: 600;\n"])),Zn),Dn=(0,i.ZP)("h4")(yn||(yn=(0,o.Z)(["\n  ",";\n  font-size: 1.75em;\n  font-weight: 600;\n"])),Zn),Mn=(0,i.ZP)("h5")(vn||(vn=(0,o.Z)(["\n  ",";\n  font-size: 1.5em;\n  font-weight: 700;\n"])),Zn),Rn=(0,i.ZP)("h6")(kn||(kn=(0,o.Z)(["\n  ",";\n  font-size: 1.25em;\n  font-weight: 700;\n"])),Zn),Tn=(0,i.ZP)("hr")(bn||(bn=(0,o.Z)(["\n  height: 0.25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n"]))),An=(0,i.ZP)("img")(xn||(xn=(0,o.Z)(["\n  max-width: 100%;\n"]))),zn=(0,i.ZP)("span")(wn||(wn=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px 0;\n"])));var Un=function(n){return r.createElement(zn,null,r.createElement(An,n))},In=l(12470),Bn=(0,i.ZP)(In.Z)({color:"#0f6dd8",textDecoration:"none","&:hover":{color:"#0f6dd8",textDecoration:"underline"}}),Nn=["https","http","mailto"];var Hn,Fn=function(n){return r.createElement(r.Fragment,null,Nn.some((function(e){return n.href&&n.href.startsWith(e)}))?r.createElement(Bn,{href:n.href,target:"_blank",rel:"noopener noreferrer"},n.children):r.createElement(Bn,n))},jn=l(39046),Vn=l(21348),Kn=(0,i.ZP)(Vn.Z)(Hn||(Hn=(0,o.Z)(["\n  // color: #1976d2;\n  // &:checked {\n  //   color: #1976d2;\n  // }\n\n  &.MuiIconButton-root.Mui-disabled {\n    color: #1976d2;\n  }\n"])));var Wn,qn,Xn=function(n){return r.createElement(r.Fragment,null,"checkbox"===n.type?r.createElement(Kn,{className:n.className,color:"default",checked:n.checked,size:"small",disableRipple:!0,disabled:!0}):r.createElement("input",n))},Yn=(0,i.ZP)("table")(Wn||(Wn=(0,o.Z)(["\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 1em 0;\n"]))),_n=(0,i.ZP)("span")(qn||(qn=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px 0;\n"])));var Jn,Gn,$n,Qn,ne,ee,le,te,oe,re,ae=function(n){return r.createElement(_n,null,r.createElement(Yn,n))},ie=(0,u.css)(Jn||(Jn=(0,o.Z)(["\n  border: 1px solid #dddddd;\n  padding: 6px 13px;\n"]))),ue=(0,i.ZP)("th")(Gn||(Gn=(0,o.Z)(["\n  ",";\n"])),ie),se=(0,u.css)($n||($n=(0,o.Z)(["\n  border: 1px solid #dddddd;\n  padding: 6px 13px;\n"]))),ce=(0,i.ZP)("td")(Qn||(Qn=(0,o.Z)(["\n  ",";\n"])),se),pe=(0,i.ZP)("thead")(ne||(ne=(0,o.Z)(["\n  border-bottom: 2px solid #dddddd;\n"]))),de=(0,i.ZP)("tr")(ee||(ee=(0,o.Z)(["\n  &:nth-child(2n) {\n    background-color: #f6f8fa;\n  }\n"]))),he=(0,i.ZP)("div")(le||(le=(0,o.Z)(['\n  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";\n  font-size: 16px;\n  user-select: none;\n  white-space: pre-line;\n  width: 200px;\n  position: sticky;\n  top: 1vw;\n  margin-left: -210px;\n  margin-top: 50px;\n  border-left: 2px solid #2f324155;\n  @media (max-width: 1375px) {\n    display: none;\n  }\n']))),fe=(0,u.css)(te||(te=(0,o.Z)(["\n  display: block;\n  margin: 0;\n  padding: 0;\n  padding-left: ","px;\n  font-size: 0.8em;\n  font-weight: 700;\n  cursor: pointer;\n  opacity: 50%;\n  &:hover {\n    opacity: 75%;\n    background-color: #efefef;\n  }\n  &:active {\n    opacity: 100%;\n  }\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return 10*n.depth})),ge=(0,i.ZP)("a")(oe||(oe=(0,o.Z)(["\n  color: black;\n  text-decoration: none;\n  ","\n"])),fe),me=(0,i.ZP)("span")(re||(re=(0,o.Z)(["\n  ",";\n  background-color: #dddddd;\n  opacity: 60%;\n  &:hover {\n    background-color: #dddddd;\n  }\n"])),fe),ye=function(n){return n.replace(/(<([^>]+)>)/gi,"")};var ve,ke,be,xe,we=function(n){var e=n.headings;return r.createElement(he,null,r.createElement(me,{depth:1,title:"Top",role:"button",onClick:function(){return window.scrollTo(0,0)}},"Top"),e.map((function(n,e){return r.createElement(ge,{depth:n.depth,title:ye(n.value),role:"button",key:e,href:"#"+n.id},ye(n.value))})))},Pe=(0,i.ZP)(Pn.Z)(ve||(ve=(0,o.Z)(["\n  font-size: 0.8em;\n  color: #aaaaaa;\n"]))),Ce=(0,u.css)(ke||(ke=(0,o.Z)(["\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  -ms-word-break: break-all;\n  /* This is the dangerous one in WebKit, as it breaks things wherever */\n  word-break: break-all;\n  /* Instead use this non-standard one: */\n  word-break: break-word;\n\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n"]))),Se=(0,i.ZP)("div")(be||(be=(0,o.Z)(["\n  width: 100%;\n  // white-space: pre-line;\n  ",";\n"])),Ce),Ze=(0,i.ZP)("div")(xe||(xe=(0,o.Z)(['\n  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";\n  display: flex;\n  flex-direction: row;\n'])));var Ee=function(n){var e=n.data,l=(n.location,e.markdownRemark),t=l.frontmatter,o=l.htmlAst,i=l.headings,u=(0,s.l)().use(pn,{createElement:r.createElement,components:{blockquote:Sn,h1:En,h2:Ln,h3:On,h4:Dn,h5:Mn,h6:Rn,hr:Tn,img:Un,a:Fn,li:jn.Z,input:Xn,table:ae,th:ue,td:ce,thead:pe,tr:de}});return r.createElement(r.Fragment,null,r.createElement(a.q,null,r.createElement("title",null,t.title," - dustbringer.github.io"),r.createElement("meta",{name:"description",content:""+t.title})),r.createElement(Cn.Z,{maxWidth:"md"},r.createElement(Pe,{variant:"body1"},t.title,", written by ",t.author," on ",t.date),r.createElement(Ze,null,r.createElement("div",null,r.createElement(we,{headings:i})),r.createElement(Se,null,u.stringify(o)))))}},84506:function(n,e,l){l.d(e,{Z:function(){return i}});var t=l(83878),o=l(59199),r=l(40181),a=l(25267);function i(n){return(0,t.Z)(n)||(0,o.Z)(n)||(0,r.Z)(n)||(0,a.Z)()}}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-jsx-61a545371e4cbd33425b.js.map