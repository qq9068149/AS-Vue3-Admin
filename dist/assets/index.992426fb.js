import{am as $,d as h,n as o,j as A,q as b,A as j,b as i,S as T,P as d,H as g,F as E}from"./index.7be5bb68.js";import{t as I,_ as O,a as R}from"./index.a1e4e001.js";import{o as z}from"./omit.51d8d70a.js";import{i as F}from"./initDefaultProps.500766f6.js";var S=function(){return o(o({},R()),{},{content:d.any,title:d.any})},q=h({compatConfig:{MODE:3},name:"APopover",props:F(S(),o(o({},I()),{},{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(n,p){var P=p.expose,r=p.slots,u=A();P({getPopupDomNode:function(){var t,e;return(t=u.value)===null||t===void 0||(e=t.getPopupDomNode)===null||e===void 0?void 0:e.call(t)}});var v=b("popover",n),l=v.prefixCls,y=v.configProvider,C=j(function(){return y.getPrefixCls()}),x=function(){var t,e,c=n.title,a=c===void 0?g((t=r.title)===null||t===void 0?void 0:t.call(r)):c,f=n.content,s=f===void 0?g((e=r.content)===null||e===void 0?void 0:e.call(r)):f,m=!!(Array.isArray(a)?a.length:a),N=!!(Array.isArray(s)?s.length:a);if(!(!m&&!N))return i(E,null,[m&&i("div",{class:"".concat(l.value,"-title")},[a]),i("div",{class:"".concat(l.value,"-inner-content")},[s])])};return function(){return i(O,o(o({},z(n,["title","content"])),{},{prefixCls:l.value,ref:u,transitionName:T(C.value,"zoom-big",n.transitionName)}),{title:x,default:r.default})}}});const V=$(q);export{V as _};
