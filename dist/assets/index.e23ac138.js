import{bP as g,X as f}from"./index.7be5bb68.js";let t=null,C=1;const v=(a,u,h)=>{t&&t.destroy(),t=null;let m=C++;const e=document.createElement("div"),s=document.body,c=g(h,{data:u,onClose:()=>{t&&t.destroy()}});f(c,e),s.appendChild(e.firstElementChild);const n=c.el,{offsetWidth:x,offsetHeight:y}=n,{clientWidth:l}=s,{clientX:o,clientY:i}=a,r=l-o>x?"left":"right",d=window.innerHeight-i>y?"top":"bottom",b=Math.abs(l-o);n.style[r]=r==="left"?`${o+20}px`:`${b}px`,n.style[d]=d==="bottom"?"2px":`${i}px`;const p={id:m,destroy:()=>{t=null,f(null,e)}};return t=p,p};export{v as c};