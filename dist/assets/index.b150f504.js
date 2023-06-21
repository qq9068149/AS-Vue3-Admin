import{j as k,x as Je,d as ce,A as q,b as f,D as ye,h as W,E as Oe,n as A,R as B,J as De,at as me,bz as Dt,P as Ke,y as Kt,i as Wt,b5 as Ft,a1 as st,bA as Ee,B as $t,ag as zt,bm as Ht,ah as Ze,q as jt,v as Gt,G as Ut,bB as Vt}from"./index.7be5bb68.js";import{w as _e}from"./raf.997cffb5.js";import{K as ie}from"./KeyCode.246a5a61.js";import{M as Yt,_ as Xt,D as Zt}from"./index.c8bb9e4c.js";import{u as U,i as qt}from"./useState.846cf245.js";import{R as dt}from"./index.1cf7c7ff.js";import{u as Jt}from"./useRefs.55e2a81f.js";import{k as Tt,t as Qt,a as ea,c as ta,h as aa,l as na}from"./_flatRest.fb83e075.js";import{v as ia}from"./isEqual.f93d4904.js";import{i as ft}from"./isObject.53606487.js";import{c as ra}from"./vnode.5c7906f9.js";import{u as bt}from"./useMergedState.c4caf120.js";import{o as la}from"./omit.51d8d70a.js";import{i as Ct}from"./initDefaultProps.500766f6.js";function oa(r){var e=k(),t=k(!1);function l(){for(var a=arguments.length,n=new Array(a),u=0;u<a;u++)n[u]=arguments[u];t.value||(_e.cancel(e.value),e.value=_e(function(){r.apply(void 0,n)}))}return Je(function(){t.value=!0,_e.cancel(e.value)}),l}function ua(r){var e=k([]),t=k(typeof r=="function"?r():r),l=oa(function(){var n=t.value;e.value.forEach(function(u){n=u(n)}),e.value=[],t.value=n});function a(n){e.value.push(n),l()}return[t,a]}const ca=ce({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var l=t.expose,a=t.attrs,n=k();function u(v){var s;(s=e.tab)!==null&&s!==void 0&&s.disabled||e.onClick(v)}l({domRef:n});function c(v){var s;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(s=e.tab)===null||s===void 0?void 0:s.key,event:v})}var i=q(function(){var v;return e.editable&&e.closable!==!1&&!((v=e.tab)!==null&&v!==void 0&&v.disabled)});return function(){var v,s,b=e.prefixCls,g=e.id,N=e.active,P=e.tab,F=P.key,E=P.tab,H=P.disabled,x=P.closeIcon,d=e.renderWrapper,R=e.removeAriaLabel,j=e.editable,L=e.onFocus,_="".concat(b,"-tab"),O=f("div",{key:F,ref:n,class:ye(_,(v={},W(v,"".concat(_,"-with-remove"),i.value),W(v,"".concat(_,"-active"),N),W(v,"".concat(_,"-disabled"),H),v)),style:a.style,onClick:u},[f("div",{role:"tab","aria-selected":N,id:g&&"".concat(g,"-tab-").concat(F),class:"".concat(_,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(F),"aria-disabled":H,tabindex:H?null:0,onClick:function(D){D.stopPropagation(),u(D)},onKeydown:function(D){[ie.SPACE,ie.ENTER].includes(D.which)&&(D.preventDefault(),u(D))},onFocus:L},[typeof E=="function"?E():E]),i.value&&f("button",{type:"button","aria-label":R||"remove",tabindex:0,class:"".concat(_,"-remove"),onClick:function(D){D.stopPropagation(),c(D)}},[(x==null?void 0:x())||((s=j.removeIcon)===null||s===void 0?void 0:s.call(j))||"\xD7"])]);return d?d(O):O}}});var mt={width:0,height:0,left:0,top:0};function va(r,e){var t=k(new Map);return Oe(function(){for(var l,a=new Map,n=r.value,u=e.value.get((l=n[0])===null||l===void 0?void 0:l.key)||mt,c=u.left+u.width,i=0;i<n.length;i+=1){var v=n[i].key,s=e.value.get(v);if(!s){var b;s=e.value.get((b=n[i-1])===null||b===void 0?void 0:b.key)||mt}var g=a.get(v)||A({},s);g.right=c-g.left-g.width,a.set(v,g)}t.value=new Map(a)}),t}const It=ce({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var l=t.expose,a=t.attrs,n=k();return l({domRef:n}),function(){var u=e.prefixCls,c=e.editable,i=e.locale;return!c||c.showAdd===!1?null:f("button",{ref:n,type:"button",class:"".concat(u,"-nav-add"),style:a.style,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(s){c.onEdit("add",{event:s})}},[c.addIcon?c.addIcon():"+"])}}});var sa={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ke.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const da=ce({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:sa,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var l=t.attrs,a=t.slots,n=U(!1),u=B(n,2),c=u[0],i=u[1],v=U(null),s=B(v,2),b=s[0],g=s[1],N=function(d){for(var R=e.tabs.filter(function(V){return!V.disabled}),j=R.findIndex(function(V){return V.key===b.value})||0,L=R.length,_=0;_<L;_+=1){j=(j+d+L)%L;var O=R[j];if(!O.disabled){g(O.key);return}}},P=function(d){var R=d.which;if(!c.value){[ie.DOWN,ie.SPACE,ie.ENTER].includes(R)&&(i(!0),d.preventDefault());return}switch(R){case ie.UP:N(-1),d.preventDefault();break;case ie.DOWN:N(1),d.preventDefault();break;case ie.ESC:i(!1);break;case ie.SPACE:case ie.ENTER:b.value!==null&&e.onTabClick(b.value,d);break}},F=q(function(){return"".concat(e.id,"-more-popup")}),E=q(function(){return b.value!==null?"".concat(F.value,"-").concat(b.value):null}),H=function(d,R){d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:R,event:d})};return De(function(){me(b,function(){var x=document.getElementById(E.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),me(c,function(){c.value||g(null)}),function(){var x,d=e.prefixCls,R=e.id,j=e.tabs,L=e.locale,_=e.mobile,O=e.moreIcon,V=O===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||f(Dt,null,null):O,D=e.moreTransitionName,z=e.editable,ve=e.tabBarGutter,p=e.rtl,o=e.onTabClick,y="".concat(d,"-dropdown"),T=L==null?void 0:L.dropdownAriaLabel,K=W({},p?"marginRight":"marginLeft",ve);j.length||(K.visibility="hidden",K.order=1);var $=ye(W({},"".concat(y,"-rtl"),p)),C=_?null:f(Zt,{prefixCls:y,trigger:["hover"],visible:c.value,transitionName:D,onVisibleChange:i,overlayClassName:$,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return f(Yt,{onClick:function(w){var Y=w.key,re=w.domEvent;o(Y,re),i(!1)},id:F.value,tabindex:-1,role:"listbox","aria-activedescendant":E.value,selectedKeys:[b.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[j.map(function(w){var Y,re,xe=z&&w.closable!==!1&&!w.disabled;return f(Xt,{key:w.key,id:"".concat(F.value,"-").concat(w.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(w.key),disabled:w.disabled},{default:function(){return[f("span",null,[typeof w.tab=="function"?w.tab():w.tab]),xe&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(y,"-menu-item-remove"),onClick:function(se){se.stopPropagation(),H(se,w.key)}},[((Y=w.closeIcon)===null||Y===void 0?void 0:Y.call(w))||((re=z.removeIcon)===null||re===void 0?void 0:re.call(z))||"\xD7"])]}})})]}})},default:function(){return f("button",{type:"button",class:"".concat(d,"-nav-more"),style:K,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":F.value,id:"".concat(R,"-more"),"aria-expanded":c.value,onKeydown:P},[V])}});return f("div",{class:ye("".concat(d,"-nav-operations"),l.class),style:l.style},[C,f(It,{prefixCls:d,locale:L,editable:z},null)])}}});var Pt=Symbol("tabsContextKey"),kt=function(e){Kt(Pt,e)},Et=function(){return Wt(Pt,{tabs:k([]),prefixCls:k()})};ce({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var l=t.slots;return kt(Ft(e)),function(){var a;return(a=l.default)===null||a===void 0?void 0:a.call(l)}}});var fa=.1,yt=.01,Ne=20,ht=Math.pow(.995,Ne);function ba(r,e){var t=U(),l=B(t,2),a=l[0],n=l[1],u=U(0),c=B(u,2),i=c[0],v=c[1],s=U(0),b=B(s,2),g=b[0],N=b[1],P=U(),F=B(P,2),E=F[0],H=F[1],x=k();function d(p){var o=p.touches[0],y=o.screenX,T=o.screenY;n({x:y,y:T}),clearInterval(x.value)}function R(p){if(!!a.value){p.preventDefault();var o=p.touches[0],y=o.screenX,T=o.screenY,K=y-a.value.x,$=T-a.value.y;e(K,$),n({x:y,y:T});var C=Date.now();N(C-i.value),v(C),H({x:K,y:$})}}function j(){if(!!a.value){var p=E.value;if(n(null),H(null),p){var o=p.x/g.value,y=p.y/g.value,T=Math.abs(o),K=Math.abs(y);if(Math.max(T,K)<fa)return;var $=o,C=y;x.value=setInterval(function(){if(Math.abs($)<yt&&Math.abs(C)<yt){clearInterval(x.value);return}$*=ht,C*=ht,e($*Ne,C*Ne)},Ne)}}}var L=k();function _(p){var o=p.deltaX,y=p.deltaY,T=0,K=Math.abs(o),$=Math.abs(y);K===$?T=L.value==="x"?o:y:K>$?(T=o,L.value="x"):(T=y,L.value="y"),e(-T,-T)&&p.preventDefault()}var O=k({onTouchStart:d,onTouchMove:R,onTouchEnd:j,onWheel:_});function V(p){O.value.onTouchStart(p)}function D(p){O.value.onTouchMove(p)}function z(p){O.value.onTouchEnd(p)}function ve(p){O.value.onWheel(p)}De(function(){var p,o;document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",z,{passive:!1}),(p=r.value)===null||p===void 0||p.addEventListener("touchstart",V,{passive:!1}),(o=r.value)===null||o===void 0||o.addEventListener("wheel",ve,{passive:!1})}),Je(function(){document.removeEventListener("touchmove",D),document.removeEventListener("touchend",z)})}function gt(r,e){var t=k(r);function l(a){var n=typeof a=="function"?a(t.value):a;n!==t.value&&e(n,t.value),t.value=n}return[t,l]}function ma(r,e,t,l){if(!ft(r))return r;e=Tt(e,r);for(var a=-1,n=e.length,u=n-1,c=r;c!=null&&++a<n;){var i=Qt(e[a]),v=t;if(i==="__proto__"||i==="constructor"||i==="prototype")return r;if(a!=u){var s=c[i];v=l?l(s,i,c):void 0,v===void 0&&(v=ft(s)?s:ia(e[a+1])?[]:{})}ea(c,i,v),c=c[i]}return r}function ya(r,e,t){for(var l=-1,a=e.length,n={};++l<a;){var u=e[l],c=ta(r,u);t(c,u)&&ma(n,Tt(u,r),c)}return n}function ha(r,e){return ya(r,e,function(t,l){return aa(r,l)})}var ga=na(function(r,e){return r==null?{}:ha(r,e)});const _t=ga;var pt={width:0,height:0,left:0,top:0,right:0},pa=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Ke.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const St=ce({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:pa(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var l=t.attrs,a=t.slots,n=Et(),u=n.tabs,c=n.prefixCls,i=k(),v=k(),s=k(),b=k(),g=Jt(),N=B(g,2),P=N[0],F=N[1],E=q(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),H=gt(0,function(h,S){E.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"left":"right"})}),x=B(H,2),d=x[0],R=x[1],j=gt(0,function(h,S){!E.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"top":"bottom"})}),L=B(j,2),_=L[0],O=L[1],V=U(0),D=B(V,2),z=D[0],ve=D[1],p=U(0),o=B(p,2),y=o[0],T=o[1],K=U(null),$=B(K,2),C=$[0],Se=$[1],he=U(null),w=B(he,2),Y=w[0],re=w[1],xe=U(0),ge=B(xe,2),Te=ge[0],se=ge[1],Be=U(0),Q=B(Be,2),We=Q[0],Re=Q[1],Ae=ua(new Map),pe=B(Ae,2),Fe=pe[0],$e=pe[1],we=va(u,Fe),Rt=q(function(){return"".concat(c.value,"-nav-operations-hidden")}),Ce=k(0),Ie=k(0);Oe(function(){E.value?e.rtl?(Ce.value=0,Ie.value=Math.max(0,z.value-C.value)):(Ce.value=Math.min(0,C.value-z.value),Ie.value=0):(Ce.value=Math.min(0,Y.value-y.value),Ie.value=0)});var ze=function(S){return S<Ce.value?Ce.value:S>Ie.value?Ie.value:S},Qe=k(),At=U(),et=B(At,2),He=et[0],tt=et[1],je=function(){tt(Date.now())},Ge=function(){clearTimeout(Qe.value)},at=function(S,m){S(function(M){var I=ze(M+m);return I})};ba(i,function(h,S){if(E.value){if(C.value>=z.value)return!1;at(R,h)}else{if(Y.value>=y.value)return!1;at(O,S)}return Ge(),je(),!0}),me(He,function(){Ge(),He.value&&(Qe.value=setTimeout(function(){tt(0)},100))});var nt=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,m=we.value.get(S)||{width:0,height:0,left:0,right:0,top:0};if(E.value){var M=d.value;e.rtl?m.right<d.value?M=m.right:m.right+m.width>d.value+C.value&&(M=m.right+m.width-C.value):m.left<-d.value?M=-m.left:m.left+m.width>-d.value+C.value&&(M=-(m.left+m.width-C.value)),O(0),R(ze(M))}else{var I=_.value;m.top<-_.value?I=-m.top:m.top+m.height>-_.value+Y.value&&(I=-(m.top+m.height-Y.value)),R(0),O(ze(I))}},Ue=k(0),Ve=k(0);Oe(function(){var h,S,m,M,I,X,Z,fe=we.value;["top","bottom"].includes(e.tabPosition)?(S="width",I=C.value,X=z.value,Z=Te.value,m=e.rtl?"right":"left",M=Math.abs(d.value)):(S="height",I=Y.value,X=z.value,Z=We.value,m="top",M=-_.value);var ee=I;X+Z>I&&X<I&&(ee=I-Z);var le=u.value;if(!le.length){var oe;return oe=[0,0],Ue.value=oe[0],Ve.value=oe[1],oe}for(var be=le.length,G=be,te=0;te<be;te+=1){var ae=fe.get(le[te].key)||pt;if(ae[m]+ae[S]>M+ee){G=te-1;break}}for(var ue=0,J=be-1;J>=0;J-=1){var ne=fe.get(le[J].key)||pt;if(ne[m]<M){ue=J+1;break}}return h=[ue,G],Ue.value=h[0],Ve.value=h[1],h});var Ye=function(){var S,m,M,I,X,Z=((S=i.value)===null||S===void 0?void 0:S.offsetWidth)||0,fe=((m=i.value)===null||m===void 0?void 0:m.offsetHeight)||0,ee=((M=b.value)===null||M===void 0?void 0:M.$el)||{},le=ee.offsetWidth||0,oe=ee.offsetHeight||0;Se(Z),re(fe),se(le),Re(oe);var be=(((I=v.value)===null||I===void 0?void 0:I.offsetWidth)||0)-le,G=(((X=v.value)===null||X===void 0?void 0:X.offsetHeight)||0)-oe;ve(be),T(G),$e(function(){var te=new Map;return u.value.forEach(function(ae){var ue=ae.key,J=F.value.get(ue),ne=(J==null?void 0:J.$el)||J;ne&&te.set(ue,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),te})},it=q(function(){return[].concat(st(u.value.slice(0,Ue.value)),st(u.value.slice(Ve.value+1)))}),wt=U(),rt=B(wt,2),Mt=rt[0],Nt=rt[1],de=q(function(){return we.value.get(e.activeKey)}),lt=k(),ot=function(){_e.cancel(lt.value)};me([de,E,function(){return e.rtl}],function(){var h={};de.value&&(E.value?(e.rtl?h.right=Ee(de.value.right):h.left=Ee(de.value.left),h.width=Ee(de.value.width)):(h.top=Ee(de.value.top),h.height=Ee(de.value.height))),ot(),lt.value=_e(function(){Nt(h)})}),me([function(){return e.activeKey},de,we,E],function(){nt()},{flush:"post"}),me([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return u.value}],function(){Ye()},{flush:"post"});var Xe=function(S){var m=S.position,M=S.prefixCls,I=S.extra;if(!I)return null;var X=I==null?void 0:I({position:m});return X?f("div",{class:"".concat(M,"-extra-content")},[X]):null};return Je(function(){Ge(),ot()}),function(){var h,S=e.id,m=e.animated,M=e.activeKey,I=e.rtl,X=e.editable,Z=e.locale,fe=e.tabPosition,ee=e.tabBarGutter,le=e.onTabClick,oe=l.class,be=l.style,G=c.value,te=!!it.value.length,ae="".concat(G,"-nav-wrap"),ue,J,ne,ut;E.value?I?(J=d.value>0,ue=d.value+C.value<z.value):(ue=d.value<0,J=-d.value+C.value<z.value):(ne=_.value<0,ut=-_.value+Y.value<y.value);var Me={};fe==="top"||fe==="bottom"?Me[I?"marginRight":"marginLeft"]=typeof ee=="number"?"".concat(ee,"px"):ee:Me.marginTop=typeof ee=="number"?"".concat(ee,"px"):ee;var ct=u.value.map(function(Pe,vt){var ke=Pe.key;return f(ca,{id:S,prefixCls:G,key:ke,tab:Pe,style:vt===0?void 0:Me,closable:Pe.closable,editable:X,active:ke===M,removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:P(ke),onClick:function(Ot){le(ke,Ot)},onFocus:function(){nt(ke),je(),i.value&&(I||(i.value.scrollLeft=0),i.value.scrollTop=0)}},a)});return f("div",{role:"tablist",class:ye("".concat(G,"-nav"),oe),style:be,onKeydown:function(){je()}},[f(Xe,{position:"left",prefixCls:G,extra:a.leftExtra},null),f(dt,{onResize:Ye},{default:function(){return[f("div",{class:ye(ae,(h={},W(h,"".concat(ae,"-ping-left"),ue),W(h,"".concat(ae,"-ping-right"),J),W(h,"".concat(ae,"-ping-top"),ne),W(h,"".concat(ae,"-ping-bottom"),ut),h)),ref:i},[f(dt,{onResize:Ye},{default:function(){return[f("div",{ref:v,class:"".concat(G,"-nav-list"),style:{transform:"translate(".concat(d.value,"px, ").concat(_.value,"px)"),transition:He.value?"none":void 0}},[ct,f(It,{ref:b,prefixCls:G,locale:Z,editable:X,style:A(A({},ct.length===0?void 0:Me),{},{visibility:te?"hidden":null})},null),f("div",{class:ye("".concat(G,"-ink-bar"),W({},"".concat(G,"-ink-bar-animated"),m.inkBar)),style:Mt.value},null)])]}})])]}}),f(da,A(A({},e),{},{removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:s,prefixCls:G,tabs:it.value,class:!te&&Rt.value}),_t(a,["moreIcon"])),f(Xe,{position:"right",prefixCls:G,extra:a.rightExtra},null),f(Xe,{position:"right",prefixCls:G,extra:a.tabBarExtraContent},null)])}}}),Sa=ce({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Et(),l=t.tabs,a=t.prefixCls;return function(){var n=e.id,u=e.activeKey,c=e.animated,i=e.tabPosition,v=e.rtl,s=e.destroyInactiveTabPane,b=c.tabPane,g=a.value,N=l.value.findIndex(function(P){return P.key===u});return f("div",{class:"".concat(g,"-content-holder")},[f("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(i),W({},"".concat(g,"-content-animated"),b)],style:N&&b?W({},v?"marginRight":"marginLeft","-".concat(N,"00%")):null},[l.value.map(function(P){return ra(P.node,{key:P.key,prefixCls:g,tabKey:P.key,id:n,animated:b,active:P.key===u,destroyInactiveTabPane:s})})])])}}});var xt=0,Bt=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Ke.any}};function xa(r){return r.map(function(e){if(zt(e)){for(var t=A({},e.props||{}),l=0,a=Object.entries(t);l<a.length;l++){var n=B(a[l],2),u=n[0],c=n[1];delete t[u],t[Ht(u)]=c}var i=e.children||{},v=e.key!==void 0?e.key:void 0,s=t.tab,b=s===void 0?i.tab:s,g=t.disabled,N=t.forceRender,P=t.closable,F=t.animated,E=t.active,H=t.destroyInactiveTabPane;return A(A({key:v},t),{},{node:e,closeIcon:i.closeIcon,tab:b,disabled:g===""||g,forceRender:N===""||N,closable:P===""||P,animated:F===""||F,active:E===""||E,destroyInactiveTabPane:H===""||H})}return null}).filter(function(e){return e})}var Ta=ce({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:A(A({},Ct(Bt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var l=t.attrs,a=t.slots;Ze(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ze(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ze(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var n=jt("tabs",e),u=n.prefixCls,c=n.direction,i=n.size,v=n.rootPrefixCls,s=q(function(){return c.value==="rtl"}),b=q(function(){var o=e.animated,y=e.tabPosition;return o===!1||["left","right"].includes(y)?{inkBar:!1,tabPane:!1}:o===!0?{inkBar:!0,tabPane:!0}:A({inkBar:!0,tabPane:!1},Gt(o)==="object"?o:{})}),g=U(!1),N=B(g,2),P=N[0],F=N[1];De(function(){F(qt())});var E=bt(function(){var o;return(o=e.tabs[0])===null||o===void 0?void 0:o.key},{value:q(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),H=B(E,2),x=H[0],d=H[1],R=U(function(){return e.tabs.findIndex(function(o){return o.key===x.value})}),j=B(R,2),L=j[0],_=j[1];Oe(function(){var o=e.tabs.findIndex(function(T){return T.key===x.value});if(o===-1){var y;o=Math.max(0,Math.min(L.value,e.tabs.length-1)),d((y=e.tabs[o])===null||y===void 0?void 0:y.key)}_(o)});var O=bt(null,{value:q(function(){return e.id})}),V=B(O,2),D=V[0],z=V[1],ve=q(function(){return P.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});De(function(){e.id||(z("rc-tabs-".concat(xt)),xt+=1)});var p=function(y,T){var K;(K=e.onTabClick)===null||K===void 0||K.call(e,y,T);var $=y!==x.value;if(d(y),$){var C;(C=e.onChange)===null||C===void 0||C.call(e,y)}};return kt({tabs:q(function(){return e.tabs}),prefixCls:u}),function(){var o,y=e.id,T=e.type,K=e.tabBarGutter,$=e.tabBarStyle,C=e.locale,Se=e.destroyInactiveTabPane,he=e.renderTabBar,w=he===void 0?a.renderTabBar:he,Y=e.onTabScroll,re=e.hideAdd,xe=e.centered,ge={id:D.value,activeKey:x.value,animated:b.value,tabPosition:ve.value,rtl:s.value,mobile:P.value},Te;T==="editable-card"&&(Te={onEdit:function(Re,Ae){var pe,Fe=Ae.key,$e=Ae.event;(pe=e.onEdit)===null||pe===void 0||pe.call(e,Re==="add"?$e:Fe,Re)},removeIcon:function(){return f(Ut,null,null)},addIcon:a.addIcon?a.addIcon:function(){return f(Vt,null,null)},showAdd:re!==!0});var se,Be=A(A({},ge),{},{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Te,locale:C,tabBarGutter:K,onTabClick:p,onTabScroll:Y,style:$});w?se=w(A(A({},Be),{},{DefaultTabBar:St})):se=f(St,Be,_t(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Q=u.value;return f("div",A(A({},l),{},{id:y,class:ye(Q,"".concat(Q,"-").concat(ve.value),(o={},W(o,"".concat(Q,"-").concat(i.value),i.value),W(o,"".concat(Q,"-card"),["card","editable-card"].includes(T)),W(o,"".concat(Q,"-editable-card"),T==="editable-card"),W(o,"".concat(Q,"-centered"),xe),W(o,"".concat(Q,"-mobile"),P.value),W(o,"".concat(Q,"-editable"),T==="editable-card"),W(o,"".concat(Q,"-rtl"),s.value),o),l.class)}),[se,f(Sa,A(A({destroyInactiveTabPane:Se},ge),{},{animated:b.value}),null)])}}});const Le=ce({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:Ct(Bt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var l=t.attrs,a=t.slots,n=t.emit,u=function(i){n("update:activeKey",i),n("change",i)};return function(){var c,i=xa($t((c=a.default)===null||c===void 0?void 0:c.call(a)));return f(Ta,A(A(A({},la(e,["onUpdate:activeKey"])),l),{},{onChange:u,tabs:i}),a)}}});var Ca=function(){return{tab:Ke.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const qe=ce({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:Ca(),slots:["closeIcon","tab"],setup:function(e,t){var l=t.attrs,a=t.slots,n=k(e.forceRender);me([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?n.value=!0:e.destroyInactiveTabPane&&(n.value=!1)},{immediate:!0});var u=q(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var c,i=e.prefixCls,v=e.forceRender,s=e.id,b=e.active,g=e.tabKey;return f("div",{id:s&&"".concat(s,"-panel-").concat(g),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(g),"aria-hidden":!b,style:[u.value,l.style],class:["".concat(i,"-tabpane"),b&&"".concat(i,"-tabpane-active"),l.class]},[(b||n.value||v)&&((c=a.default)===null||c===void 0?void 0:c.call(a))])}}});Le.TabPane=qe;Le.install=function(r){return r.component(Le.name,Le),r.component(qe.name,qe),r};export{Le as T,qe as _};
