import{B as l}from"./button.bbfe174f.js";import{as as m,d,q as g,A as h,b as y,B as C,h as s}from"./index.7be5bb68.js";function v(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,m(a.key),a)}}function _(e,n,r){return n&&v(e.prototype,n),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var x=_(function e(n){w(this,e),this.error=new Error("unreachable case: ".concat(JSON.stringify(n)))}),k=function(){return{prefixCls:String,size:{type:String}}};const u=d({compatConfig:{MODE:3},name:"AButtonGroup",props:k(),setup:function(n,r){var a=r.slots,c=g("btn-group",n),i=c.prefixCls,p=c.direction,b=h(function(){var t,f=n.size,o="";switch(f){case"large":o="lg";break;case"small":o="sm";break;case"middle":case void 0:break;default:console.warn(new x(f).error)}return t={},s(t,"".concat(i.value),!0),s(t,"".concat(i.value,"-").concat(o),o),s(t,"".concat(i.value,"-rtl"),p.value==="rtl"),t});return function(){var t;return y("div",{class:b.value},[C((t=a.default)===null||t===void 0?void 0:t.call(a))])}}});l.Group=u;l.install=function(e){return e.component(l.name,l),e.component(u.name,u),e};export{_,w as a};
