import{d as q,j as f,q as D,A as J,v as K,at as j,K as C,J as V,an as X,h as s,b as d,n as S,P as $}from"./index.7be5bb68.js";import{u as G}from"./useBreakpoint.ecfdd4be.js";import{r as Q}from"./responsiveObserve.7339ae6c.js";import{R as U}from"./index.1cf7c7ff.js";import{u as Y}from"./useSize.ac7df1a8.js";import{e as Z}from"./eagerComputed.a07f0796.js";var ee=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:$.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},ae=q({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ee(),slots:["icon"],setup:function(e,A){var y=A.slots,g=A.attrs,m=f(!0),E=f(!1),h=f(1),p=f(null),z=f(null),O=D("avatar",e),R=O.prefixCls,_=Y(),n=J(function(){return e.size==="default"?_.value:e.size}),T=G(),o=Z(function(){if(K(e.size)==="object"){var r=Q.find(function(t){return T.value[t]}),a=e.size[r];return a}}),W=function(a){return o.value?{width:"".concat(o.value,"px"),height:"".concat(o.value,"px"),lineHeight:"".concat(o.value,"px"),fontSize:"".concat(a?o.value/2:18,"px")}:{}},x=function(){if(!(!p.value||!z.value)){var a=p.value.offsetWidth,t=z.value.offsetWidth;if(a!==0&&t!==0){var l=e.gap,c=l===void 0?4:l;c*2<t&&(h.value=t-c*2<a?(t-c*2)/a:1)}}},k=function(){var a=e.loadError,t=a==null?void 0:a();t!==!1&&(m.value=!1)};return j(function(){return e.src},function(){C(function(){m.value=!0,h.value=1})}),j(function(){return e.gap},function(){C(function(){x()})}),V(function(){C(function(){x(),E.value=!0})}),function(){var r,a,t=e.shape,l=e.src,c=e.alt,N=e.srcset,w=e.draggable,B=e.crossOrigin,u=X(y,e,"icon"),i=R.value,H=(r={},s(r,"".concat(g.class),!!g.class),s(r,i,!0),s(r,"".concat(i,"-lg"),n.value==="large"),s(r,"".concat(i,"-sm"),n.value==="small"),s(r,"".concat(i,"-").concat(t),t),s(r,"".concat(i,"-image"),l&&m.value),s(r,"".concat(i,"-icon"),u),r),M=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:u?"".concat(n.value/2,"px"):"18px"}:{},P=(a=y.default)===null||a===void 0?void 0:a.call(y),v;if(l&&m.value)v=d("img",{draggable:w,src:l,srcset:N,onError:k,alt:c,crossorigin:B},null);else if(u)v=u;else if(E.value||h.value!==1){var b="scale(".concat(h.value,") translateX(-50%)"),F={msTransform:b,WebkitTransform:b,transform:b},L=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};v=d(U,{onResize:x},{default:function(){return[d("span",{class:"".concat(i,"-string"),ref:p,style:S(S({},L),F)},[P])]}})}else v=d("span",{class:"".concat(i,"-string"),ref:p,style:{opacity:0}},[P]);return d("span",S(S({},g),{},{ref:z,class:H,style:[M,W(!!u),g.style]}),[v])}}});const ce=ae;export{ce as A};
