var s=!1;try{var e=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch{}const n=s;export{n as s};