import{d as T,y as he,A as d,i as xe,P as E,j as h,aD as Ce,a0 as D,b as m,n as r,D as H,at as Se}from"./index.7be5bb68.js";import{R as ne}from"./index.1cf7c7ff.js";var ae=Symbol("OverflowContextProviderKey"),X=T({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup:function(e,v){var u=v.slots;return he(ae,d(function(){return e.value})),function(){var f;return(f=u.default)===null||f===void 0?void 0:f.call(u)}}}),ke=function(){return xe(ae,d(function(){return null}))},Re=["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"],F=void 0;const q=T({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:E.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:E.any,invalidate:Boolean},setup:function(e,v){var u=v.slots,f=v.expose,c=d(function(){return e.responsive&&!e.display}),x=h();f({itemNodeRef:x});function C(l){e.registerSize(e.itemKey,l)}return Ce(function(){C(null)}),function(){var l,S=e.prefixCls,k=e.invalidate,y=e.item,w=e.renderItem,g=e.responsive;e.registerSize,e.itemKey,e.display;var z=e.order,p=e.component,j=p===void 0?"div":p,I=D(e,Re),W=(l=u.default)===null||l===void 0?void 0:l.call(u),R=w&&y!==F?w(y):W,K;k||(K={opacity:c.value?0:1,height:c.value?0:F,overflowY:c.value?"hidden":F,order:g?z:F,pointerEvents:c.value?"none":F,position:c.value?"absolute":F});var $={};return c.value&&($["aria-hidden"]=!0),m(ne,{disabled:!g,onResize:function(_){var P=_.offsetWidth;C(P)}},{default:function(){return m(j,r(r(r({class:H(!k&&S),style:K},$),I),{},{ref:x}),{default:function(){return[R]}})}})}}});var Ne=["component"],ze=["className"],Ie=["class"];const _e=T({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:E.any,title:E.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function}},setup:function(e,v){var u=v.slots,f=v.attrs,c=ke();return function(){if(!c.value){var x,C=e.component,l=C===void 0?"div":C,S=D(e,Ne);return m(l,r(r({},S),f),{default:function(){return[(x=u.default)===null||x===void 0?void 0:x.call(u)]}})}var k=c.value,y=k.className,w=D(k,ze),g=f.class,z=D(f,Ie);return m(X,{value:null},{default:function(){return[m(q,r(r(r({class:H(y,g)},w),z),e),u)]}})}}});var Oe=["class","style"],re="responsive",ie="invalidate";function Fe(o){return"+ ".concat(o.length," ...")}var Ee=function(){return{id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:E.any,component:String,itemComponent:E.any,onVisibleChange:Function,ssr:String,onMousedown:Function}},B=T({name:"Overflow",inheritAttrs:!1,props:Ee(),emits:["visibleChange"],setup:function(e,v){var u=v.attrs,f=v.emit,c=v.slots,x=d(function(){return e.ssr==="full"}),C=h(null),l=d(function(){return C.value||0}),S=h(new Map),k=h(0),y=h(0),w=h(0),g=h(null),z=h(null),p=d(function(){return z.value===null&&x.value?Number.MAX_SAFE_INTEGER:z.value||0}),j=h(!1),I=d(function(){return"".concat(e.prefixCls,"-item")}),W=d(function(){return Math.max(k.value,y.value)}),R=d(function(){return!!(e.data.length&&e.maxCount===re)}),K=d(function(){return e.maxCount===ie}),$=d(function(){return R.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount}),N=d(function(){var n=e.data;return R.value?C.value===null&&x.value?n=e.data:n=e.data.slice(0,Math.min(e.data.length,l.value/e.itemWidth)):typeof e.maxCount=="number"&&(n=e.data.slice(0,e.maxCount)),n}),_=d(function(){return R.value?e.data.slice(p.value+1):e.data.slice(N.value.length)}),P=function(t,a){var i;return typeof e.itemKey=="function"?e.itemKey(t):(i=e.itemKey&&(t==null?void 0:t[e.itemKey]))!==null&&i!==void 0?i:a},oe=d(function(){return e.renderItem||function(n){return n}}),V=function(t,a){z.value=t,a||(j.value=t<e.data.length-1,f("visibleChange",t))},ue=function(t,a){C.value=a.clientWidth},Y=function(t,a){var i=new Map(S.value);a===null?i.delete(t):i.set(t,a),S.value=i},le=function(t,a){k.value=y.value,y.value=a},ve=function(t,a){w.value=a},G=function(t){return S.value.get(P(N.value[t],t))};return Se([l,S,y,w,function(){return e.itemKey},N],function(){if(l.value&&W.value&&N.value){var n=w.value,t=N.value.length,a=t-1;if(!t){V(0),g.value=null;return}for(var i=0;i<t;i+=1){var M=G(i);if(M===void 0){V(i-1,!0);break}if(n+=M,a===0&&n<=l.value||i===a-1&&n+G(a)<=l.value){V(a),g.value=null;break}else if(n+W.value>l.value){V(i-1),g.value=n-M-w.value+y.value;break}}e.suffix&&G(0)+w.value>l.value&&(g.value=null)}}),function(){var n=j.value&&!!_.value.length,t=e.itemComponent,a=e.renderRawItem,i=e.renderRawRest,M=e.renderRest,J=e.prefixCls,se=J===void 0?"rc-overflow":J,Q=e.suffix,Z=e.component,de=Z===void 0?"div":Z,fe=e.id,ce=e.onMousedown,me=u.class,ge=u.style,ye=D(u,Oe),ee={};g.value!==null&&R.value&&(ee={position:"absolute",left:"".concat(g.value,"px"),top:0});var A={prefixCls:I.value,responsive:R.value,component:t,invalidate:K.value},we=a?function(b,s){var O=P(b,s);return m(X,{key:O,value:r(r({},A),{},{order:s,item:b,itemKey:O,registerSize:Y,display:s<=p.value})},{default:function(){return[a(b,s)]}})}:function(b,s){var O=P(b,s);return m(q,r(r({},A),{},{order:s,key:O,item:b,renderItem:oe.value,itemKey:O,registerSize:Y,display:s<=p.value}),null)},L=function(){return null},te={order:n?p.value:Number.MAX_SAFE_INTEGER,className:"".concat(I.value," ").concat(I.value,"-rest"),registerSize:le,display:n};if(i)i&&(L=function(){return m(X,{value:r(r({},A),te)},{default:function(){return[i(_.value)]}})});else{var U=M||Fe;L=function(){return m(q,r(r({},A),te),{default:function(){return typeof U=="function"?U(_.value):U}})}}var pe=function(){var s;return m(de,r({id:fe,class:H(!K.value&&se,me),style:ge,onMousedown:ce},ye),{default:function(){return[N.value.map(we),$.value?L():null,Q&&m(q,r(r({},A),{},{order:p.value,class:"".concat(I.value,"-suffix"),registerSize:ve,display:!0,style:ee}),{default:function(){return Q}}),(s=c.default)===null||s===void 0?void 0:s.call(c)]}})};return m(ne,{disabled:!R.value,onResize:ue},{default:pe})}}});B.Item=_e;B.RESPONSIVE=re;B.INVALIDATE=ie;const Me=B,Ae=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var o=navigator.userAgent||navigator.vendor||window.opera;return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(o==null?void 0:o.substr(0,4)))};function De(o){var e=typeof o=="function"?o():o,v=h(e);function u(f){v.value=f}return[v,u]}export{Me as O,Ae as i,De as u};
