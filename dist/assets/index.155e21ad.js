import{B as u,b as g,T as r,a as f}from"./index.vue_vue_type_script_setup_true_lang.d51fca06.js";import{n as a,a0 as T,C as _,v as b,b as h,aX as x}from"./index.7be5bb68.js";import{o as P}from"./omit.51d8d70a.js";var A=["ellipsis","rel"],$=function(){return P(a(a({},g()),{},{ellipsis:{type:Boolean,default:void 0}}),["component"])},v=function(s,t){var p=t.slots,l=t.attrs,o=a(a({},s),l),i=o.ellipsis,c=o.rel,n=T(o,A);_(b(i)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var m=a(a({},n),{},{rel:c===void 0&&n.target==="_blank"?"noopener noreferrer":c,ellipsis:!!i,component:"a"});return delete m.navigate,h(u,m,p)};v.displayName="ATypographyLink";v.inheritAttrs=!1;v.props=$();const k=v;var B=function(){return P(g(),["component"])},d=function(s,t){var p=t.slots,l=t.attrs,o=a(a({},s),{},{component:"div"},l);return h(u,o,p)};d.displayName="ATypographyParagraph";d.inheritAttrs=!1;d.props=B();const L=d;var j=["level"],E=x(1,2,3,4,5),I=function(){return a(a({},P(g(),["component","strong"])),{},{level:Number})},y=function(s,t){var p=t.slots,l=t.attrs,o=s.level,i=o===void 0?1:o,c=T(s,j),n;E.indexOf(i)!==-1?n="h".concat(i):(_(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),n="h1");var m=a(a({},c),{},{component:n},l);return h(u,m,p)};y.displayName="ATypographyTitle";y.inheritAttrs=!1;y.props=I();const N=y;r.Text=f;r.Title=N;r.Paragraph=L;r.Link=k;r.Base=u;r.install=function(e){return e.component(r.name,r),e.component(r.Text.displayName,f),e.component(r.Title.displayName,N),e.component(r.Paragraph.displayName,L),e.component(r.Link.displayName,k),e};export{N as _};
