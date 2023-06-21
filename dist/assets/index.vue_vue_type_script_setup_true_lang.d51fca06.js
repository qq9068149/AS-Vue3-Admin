import{d as X,j as H,J as ne,a0 as pe,n as C,b as h,aA as Se,at as de,A as q,h as O,aS as je,aT as Ue,q as we,D as He,v as G,x as ze,K as ge,E as We,C as ce,R as qe,F as be,az as Ge,aU as Ye,aV as Xe,aQ as Je,aW as Qe,o as Ze,c as et}from"./index.7be5bb68.js";import{o as fe}from"./omit.51d8d70a.js";import{K as Y}from"./KeyCode.246a5a61.js";import{w as le}from"./raf.997cffb5.js";import{i as Ve}from"./styleChecker.e34e40ed.js";import{_ as tt}from"./TextArea.5513df14.js";import{R as nt}from"./index.1cf7c7ff.js";import{_ as se}from"./index.a1e4e001.js";import{u as it}from"./useMergedState.c4caf120.js";var at=["noStyle","disabled"],ot={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},rt=X({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,o){var r=o.slots,t=o.emit,l=o.attrs,u=o.expose,d=H(),v=function(y){var T=y.keyCode;T===Y.ENTER&&y.preventDefault()},i=function(y){var T=y.keyCode;T===Y.ENTER&&t("click",y)},m=function(y){t("click",y)},g=function(){d.value&&d.value.focus()},V=function(){d.value&&d.value.blur()};return ne(function(){e.autofocus&&g()}),u({focus:g,blur:V}),function(){var S,y=e.noStyle,T=e.disabled,c=pe(e,at),b={};return y||(b=C({},ot)),T&&(b.pointerEvents="none"),h("div",C(C(C({role:"button",tabindex:0,ref:d},c),l),{},{onClick:m,onKeydown:v,onKeyup:i,style:C(C({},b),l.style||{})}),[(S=r.default)===null||S===void 0?void 0:S.call(r)])}}});const Ce=rt;var lt=function(){return{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String}},st=X({compatConfig:{MODE:3},name:"Editable",props:lt(),setup:function(e,o){var r=o.emit,t=o.slots,l=Se({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});de(function(){return e.value},function(c){l.current=c});var u=H();ne(function(){if(u.value){var c,b=(c=u.value)===null||c===void 0?void 0:c.resizableTextArea,B=b==null?void 0:b.textArea;B.focus();var K=B.value.length;B.setSelectionRange(K,K)}});function d(c){u.value=c}function v(c){var b=c.target.value;l.current=b.replace(/[\r\n]/g,""),r("change",l.current)}function i(){l.inComposition=!0}function m(){l.inComposition=!1}function g(c){var b=c.keyCode;b===Y.ENTER&&c.preventDefault(),!l.inComposition&&(l.lastKeyCode=b)}function V(c){var b=c.keyCode,B=c.ctrlKey,K=c.altKey,p=c.metaKey,w=c.shiftKey;l.lastKeyCode===b&&!l.inComposition&&!B&&!K&&!p&&!w&&(b===Y.ENTER?(y(),r("end")):b===Y.ESC&&(l.current=e.originContent,r("cancel")))}function S(){y()}function y(){r("save",l.current.trim())}var T=q(function(){var c;return c={},O(c,"".concat(e.prefixCls),!0),O(c,"".concat(e.prefixCls,"-edit-content"),!0),O(c,"".concat(e.prefixCls,"-rtl"),e.direction==="rtl"),c});return function(){return h("div",{class:T.value},[h(tt,{ref:d,maxlength:e.maxlength,value:l.current,onChange:v,onKeydown:g,onKeyup:V,onCompositionstart:i,onCompositionend:m,onBlur:S,rows:1,autoSize:e.autoSize===void 0||e.autoSize},null),t.enterIcon?t.enterIcon({className:"".concat(e.prefixCls,"-edit-content-confirm")}):h(je,{class:"".concat(e.prefixCls,"-edit-content-confirm")},null)])}}});const ut=st;var dt=3,ct=8,D,ue={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function pt(n){var e=Array.prototype.slice.apply(n);return e.map(function(o){return"".concat(o,": ").concat(n.getPropertyValue(o),";")}).join("")}function Te(n,e){n.setAttribute("aria-hidden","true");var o=window.getComputedStyle(e),r=pt(o);n.setAttribute("style",r),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.paddingTop="0",n.style.paddingBottom="0",n.style.borderTopWidth="0",n.style.borderBottomWidth="0",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function ft(n){var e=document.createElement("div");Te(e,n),e.appendChild(document.createTextNode("text")),document.body.appendChild(e);var o=e.getBoundingClientRect().height;return document.body.removeChild(e),o}const vt=function(n,e,o,r,t){D||(D=document.createElement("div"),D.setAttribute("aria-hidden","true"),document.body.appendChild(D));var l=e.rows,u=e.suffix,d=u===void 0?"":u,v=ft(n),i=Math.round(v*l*100)/100;Te(D,n);var m=Ue({render:function(){return h("div",{style:ue},[h("span",{style:ue},[o,d]),h("span",{style:ue},[r])])}});m.mount(D);function g(){var p=Math.round(D.getBoundingClientRect().height*100)/100;return p-.1<=i}if(g())return m.unmount(),{content:o,text:D.innerHTML,ellipsis:!1};var V=Array.prototype.slice.apply(D.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(p){var w=p.nodeType,N=p.data;return w!==ct&&N!==""}),S=Array.prototype.slice.apply(D.childNodes[0].childNodes[1].cloneNode(!0).childNodes);m.unmount();var y=[];D.innerHTML="";var T=document.createElement("span");D.appendChild(T);var c=document.createTextNode(t+d);T.appendChild(c),S.forEach(function(p){D.appendChild(p)});function b(p){T.insertBefore(p,c)}function B(p,w){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:w.length,ae=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,M=Math.floor((N+A)/2),J=w.slice(0,M);if(p.textContent=J,N>=A-1)for(var L=A;L>=N;L-=1){var z=w.slice(0,L);if(p.textContent=z,g()||!z)return L===w.length?{finished:!1,vNode:w}:{finished:!0,vNode:z}}return g()?B(p,w,M,A,M):B(p,w,N,M,ae)}function K(p){var w=p.nodeType;if(w===dt){var N=p.textContent||"",A=document.createTextNode(N);return b(A),B(A,N)}return{finished:!1,vNode:null}}return V.some(function(p){var w=K(p),N=w.finished,A=w.vNode;return A&&y.push(A),N}),{content:y,text:D.innerHTML,ellipsis:!0}};var mt=["prefixCls","class","direction","component"],ht=function(){return{prefixCls:String,direction:String,component:String}},yt=X({name:"ATypography",inheritAttrs:!1,props:ht(),setup:function(e,o){var r=o.slots,t=o.attrs,l=we("typography",e),u=l.prefixCls,d=l.direction;return function(){var v,i=C(C({},e),t);i.prefixCls,i.class,i.direction;var m=i.component,g=m===void 0?"article":m,V=pe(i,mt);return h(g,C({class:He(u.value,O({},"".concat(u.value,"-rtl"),d.value==="rtl"),t.class)},V),{default:function(){return[(v=r.default)===null||v===void 0?void 0:v.call(r)]}})}}});const gt=yt;var bt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var o=document.activeElement,r=[],t=0;t<e.rangeCount;t++)r.push(e.getRangeAt(t));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(l){e.addRange(l)}),o&&o.focus()}};const Ct=bt;var xe={"text/plain":"Text","text/html":"Url",default:"Text"},xt="Copy to clipboard: #{key}, Enter";function Et(n){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return n.replace(/#{\s*key\s*}/g,e)}function St(n,e){var o,r,t,l,u,d=!1;e||(e={});var v=e.debug||!1;try{r=Ct(),t=document.createRange(),l=document.getSelection(),u=document.createElement("span"),u.textContent=n,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(m){if(m.stopPropagation(),e.format)if(m.preventDefault(),typeof m.clipboardData>"u"){v&&console.warn("unable to use e.clipboardData"),v&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var g=xe[e.format]||xe.default;window.clipboardData.setData(g,n)}else m.clipboardData.clearData(),m.clipboardData.setData(e.format,n);e.onCopy&&(m.preventDefault(),e.onCopy(m.clipboardData))}),document.body.appendChild(u),t.selectNodeContents(u),l.addRange(t);var i=document.execCommand("copy");if(!i)throw new Error("copy command was unsuccessful");d=!0}catch(m){v&&console.error("unable to copy using execCommand: ",m),v&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",n),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(g){v&&console.error("unable to copy using clipboardData: ",g),v&&console.error("falling back to prompt"),o=Et("message"in e?e.message:xt),window.prompt(o,n)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(t):l.removeAllRanges()),u&&document.body.removeChild(u),r()}return d}var wt=["type","disabled","content","class","style"],Vt=Ve("webkitLineClamp"),Tt=Ve("textOverflow"),Ee="...",ke=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},kt=X({compatConfig:{MODE:3},name:"Base",inheritAttrs:!1,props:ke(),setup:function(e,o){var r=o.slots,t=o.attrs,l=o.emit,u=we("typography",e),d=u.prefixCls,v=u.direction,i=Se({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),m=H(),g=H(),V=q(function(){var a=e.ellipsis;return a?C({rows:1,expandable:!1},G(a)==="object"?a:null):{}});ne(function(){i.clientRendered=!0}),ze(function(){clearTimeout(i.copyId),le.cancel(i.rafId)}),de([function(){return V.value.rows},function(){return e.content}],function(){ge(function(){J()})},{flush:"post",deep:!0,immediate:!0}),We(function(){e.content===void 0&&(ce(!e.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),ce(!e.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))});function S(){var a,s;return e.ellipsis||e.editable?e.content:(a=m.value)===null||a===void 0||(s=a.$el)===null||s===void 0?void 0:s.innerText}function y(a){var s=V.value.onExpand;i.expanded=!0,s==null||s(a)}function T(a){a.preventDefault(),i.originContent=e.content,M(!0)}function c(a){b(a),M(!1)}function b(a){var s=p.value.onChange;a!==e.content&&(l("update:content",a),s==null||s(a))}function B(){var a,s;(a=(s=p.value).onCancel)===null||a===void 0||a.call(s),M(!1)}function K(a){a.preventDefault(),a.stopPropagation();var s=e.copyable,f=C({},G(s)==="object"?s:null);f.text===void 0&&(f.text=S()),St(f.text||""),i.copied=!0,ge(function(){f.onCopy&&f.onCopy(),i.copyId=setTimeout(function(){i.copied=!1},3e3)})}var p=q(function(){var a=e.editable;return a?C({},G(a)==="object"?a:null):{editing:!1}}),w=it(!1,{value:q(function(){return p.value.editing})}),N=qe(w,2),A=N[0],ae=N[1];function M(a){var s=p.value.onStart;a&&s&&s(),ae(a)}de(A,function(a){if(!a){var s;(s=g.value)===null||s===void 0||s.focus()}},{flush:"post"});function J(){le.cancel(i.rafId),i.rafId=le(function(){z()})}var L=q(function(){var a=V.value,s=a.rows,f=a.expandable,x=a.suffix,_=a.onEllipsis,E=a.tooltip;return x||E||e.editable||e.copyable||f||_?!1:s===1?Tt:Vt}),z=function(){var s,f,x=i.ellipsisText,_=i.isEllipsis,E=V.value,k=E.rows,F=E.suffix,$=E.onEllipsis;if(!(!k||k<0||!((s=m.value)!==null&&s!==void 0&&s.$el)||i.expanded||e.content===void 0)&&!L.value){var R=vt((f=m.value)===null||f===void 0?void 0:f.$el,{rows:k,suffix:F},e.content,ve(!0),Ee),W=R.content,j=R.text,P=R.ellipsis;(x!==j||i.isEllipsis!==P)&&(i.ellipsisText=j,i.ellipsisContent=W,i.isEllipsis=P,_!==P&&$&&$(P))}};function Ne(a,s){var f=a.mark,x=a.code,_=a.underline,E=a.delete,k=a.strong,F=a.keyboard,$=s;function R(W,j){if(!!W){var P=function(){return $}();$=h(j,null,{default:function(){return[P]}})}}return R(k,"strong"),R(_,"u"),R(E,"del"),R(x,"code"),R(f,"mark"),R(F,"kbd"),$}function _e(a){var s=V.value,f=s.expandable,x=s.symbol;if(!f||!a&&(i.expanded||!i.isEllipsis))return null;var _=(r.ellipsisSymbol?r.ellipsisSymbol():x)||i.expandStr;return h("a",{key:"expand",class:"".concat(d.value,"-expand"),onClick:y,"aria-label":i.expandStr},[_])}function De(){if(!!e.editable){var a=e.editable,s=a.tooltip,f=a.triggerType,x=f===void 0?["icon"]:f,_=r.editableIcon?r.editableIcon():h(Xe,{role:"button"},null),E=r.editableTooltip?r.editableTooltip():i.editStr,k=typeof E=="string"?E:"";return x.indexOf("icon")!==-1?h(se,{key:"edit",title:s===!1?"":E},{default:function(){return[h(Ce,{ref:g,class:"".concat(d.value,"-edit"),onClick:T,"aria-label":k},{default:function(){return[_]}})]}}):null}}function Ae(){if(!!e.copyable){var a=e.copyable.tooltip,s=i.copied?i.copiedStr:i.copyStr,f=r.copyableTooltip?r.copyableTooltip({copied:i.copied}):s,x=typeof f=="string"?f:"",_=i.copied?h(Je,null,null):h(Qe,null,null),E=r.copyableIcon?r.copyableIcon({copied:!!i.copied}):_;return h(se,{key:"copy",title:a===!1?"":f},{default:function(){return[h(Ce,{class:["".concat(d.value,"-copy"),O({},"".concat(d.value,"-copy-success"),i.copied)],onClick:K,"aria-label":x},{default:function(){return[E]}})]}})}}function Fe(){var a=t.class,s=t.style,f=p.value,x=f.maxlength,_=f.autoSize,E=f.onEnd;return h(ut,{class:a,style:s,prefixCls:d.value,value:e.content,originContent:i.originContent,maxlength:x,autoSize:_,onSave:c,onChange:b,onCancel:B,onEnd:E,direction:v.value},{enterIcon:r.editableEnterIcon})}function ve(a){return[_e(a),De(),Ae()].filter(function(s){return s})}return function(){var a,s=p.value.triggerType,f=s===void 0?["icon"]:s,x=e.ellipsis||e.editable?e.content!==void 0?e.content:(a=r.default)===null||a===void 0?void 0:a.call(r):r.default?r.default():e.content;return A.value?Fe():h(Ye,{componentName:"Text",children:function(E){var k,F=C(C({},e),t),$=F.type,R=F.disabled;F.content;var W=F.class,j=F.style,P=pe(F,wt),Q=V.value,I=Q.rows,me=Q.suffix,oe=Q.tooltip,Re=E.edit,Be=E.copy,Oe=E.copied,$e=E.expand;i.editStr=Re,i.copyStr=Be,i.copiedStr=Oe,i.expandStr=$e;var Pe=fe(P,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),Z=L.value,Ie=I===1&&Z,he=I&&I>1&&Z,U=x,Ke;if(I&&i.isEllipsis&&!i.expanded&&!Z){var re,ye=P.title,ee=ye||"";!ye&&(typeof x=="string"||typeof x=="number")&&(ee=String(x)),ee=(re=ee)===null||re===void 0?void 0:re.slice(String(i.ellipsisContent||"").length),U=h(be,null,[Ge(i.ellipsisContent),h("span",{title:ee,"aria-hidden":"true"},[Ee]),me])}else U=h(be,null,[x,me]);U=Ne(e,U);var Me=oe&&I&&i.isEllipsis&&!i.expanded&&!Z,Le=r.ellipsisTooltip?r.ellipsisTooltip():oe;return h(nt,{onResize:J,disabled:!I},{default:function(){return[h(gt,C({ref:m,class:[(k={},O(k,"".concat(d.value,"-").concat($),$),O(k,"".concat(d.value,"-disabled"),R),O(k,"".concat(d.value,"-ellipsis"),I),O(k,"".concat(d.value,"-single-line"),I===1&&!i.isEllipsis),O(k,"".concat(d.value,"-ellipsis-single-line"),Ie),O(k,"".concat(d.value,"-ellipsis-multiple-line"),he),k),W],style:C(C({},j),{},{WebkitLineClamp:he?I:void 0}),"aria-label":Ke,direction:v.value,onClick:f.indexOf("text")!==-1?T:function(){}},Pe),{default:function(){return[Me?h(se,{title:oe===!0?x:Le},{default:function(){return[h("span",null,[U])]}}):U,ve()]}})]}})}},null)}}});const Nt=kt;var _t=function(){return C(C({},fe(ke(),["component"])),{},{ellipsis:{type:[Boolean,Object],default:void 0}})},ie=function(e,o){var r=o.slots,t=o.attrs,l=e.ellipsis;ce(G(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var u=C(C({},e),{},{ellipsis:l&&G(l)==="object"?fe(l,["expandable","rows"]):l,component:"span"},t);return h(Nt,u,r)};ie.displayName="ATypographyText";ie.inheritAttrs=!1;ie.props=_t();const Ut=ie;var te=function(){return te=Object.assign||function(n){for(var e,o=1,r=arguments.length;o<r;o++)for(var t in e=arguments[o])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},te.apply(this,arguments)},Dt=function(){function n(e,o,r){var t=this;this.endVal=o,this.options=r,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(l){t.startTime||(t.startTime=l);var u=l-t.startTime;t.remaining=t.duration-u,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(u,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(u,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(u/t.duration);var d=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=d?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),u<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(l){var u,d,v,i,m=l<0?"-":"";u=Math.abs(l).toFixed(t.options.decimalPlaces);var g=(u+="").split(".");if(d=g[0],v=g.length>1?t.options.decimal+g[1]:"",t.options.useGrouping){i="";for(var V=3,S=0,y=0,T=d.length;y<T;++y)t.options.useIndianSeparators&&y===4&&(V=2,S=1),y!==0&&S%V==0&&(i=t.options.separator+i),S++,i=d[T-y-1]+i;d=i}return t.options.numerals&&t.options.numerals.length&&(d=d.replace(/[0-9]/g,function(c){return t.options.numerals[+c]}),v=v.replace(/[0-9]/g,function(c){return t.options.numerals[+c]})),m+t.options.prefix+d+v+t.options.suffix},this.easeOutExpo=function(l,u,d,v){return d*(1-Math.pow(2,-10*l/v))*1024/1023+u},this.options=te(te({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(o),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(l){return l()})},this.handleScroll(this)))}return n.prototype.handleScroll=function(e){if(e&&window&&!e.once){var o=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),t=r.top+window.pageYOffset,l=r.top+r.height+window.pageYOffset;l<o&&l>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>l||t>o)&&!e.paused&&e.reset()}},n.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var o=e-this.startVal;if(Math.abs(o)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var r=this.countDown?1:-1;this.endVal=e+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},n.prototype.start=function(e){this.error||(e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(e){var o;if(this.el){var r=this.formattingFn(e);!((o=this.options.plugin)===null||o===void 0)&&o.render?this.options.plugin.render(this.el,r):this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r}},n.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},n.prototype.validateValue=function(e){var o=Number(e);return this.ensureNumber(o)?o:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();const Ht=X({__name:"index",props:{end:{type:Number,default:0},options:{type:Object,validator(n){let e=["startVal","decimalPlaces","duration","useGrouping","useEasing","smartEasingThreshold","smartEasingAmount","separator","decimal","prefix","suffix","numerals"];for(const o in n)if(!e.includes(o))return console.error(" CountUp \u4F20\u5165\u7684 options \u503C\u4E0D\u7B26\u5408 CountUpOptions"),!1;return!0},default(){return{startVal:0,decimalPlaces:2,duration:2,useGrouping:!0,useEasing:!0,smartEasingThreshold:500,smartEasingAmount:300,separator:",",decimal:".",prefix:"",suffix:"",numerals:[]}}}},setup(n,{expose:e}){const o=n;let r=H(null);const t=H();ne(()=>{l()});const l=()=>{r=new Dt(t.value,o.end,o.options),r.start()};return e({initCount:l,updateCount:d=>{r.update(d)}}),(d,v)=>(Ze(),et("span",{ref_key:"countupRef",ref:t},null,512))}});export{Nt as B,gt as T,Ht as _,Ut as a,ke as b};
