import{i as s}from"./index.f597358c.js";import{u as c}from"./useEcharts.c4abc40b.js";import{d as f,j as a,o as p,c as u,_}from"./index.7be5bb68.js";const x=f({__name:"pie",setup(y,{expose:n}){const i=a();return n({initChart:e=>{const l=s(i.value);c(l,{title:{text:"Gitee / GitHub",subtext:"\u8BBF\u95EE\u5360\u6BD4",left:"56%",top:"45%",textAlign:"center",textStyle:{fontSize:14,color:"#767676"},subtextStyle:{fontSize:15,color:"#a1a1a1"}},tooltip:{trigger:"item"},legend:{top:"4%",left:"2%",orient:"vertical",icon:"circle",align:"left",itemGap:20,textStyle:{fontSize:13,color:"#a1a1a1",fontWeight:500},formatter:function(o){let r="";for(let t=0;t<e.length;t++){if(e[t].name==o&&e[t].value>=1e4)return r=(e[t].value/1e4).toFixed(2),o+"      "+r+"w";if(e[t].name==o)return r=e[t].value,o+"      "+r}return""}},series:[{type:"pie",radius:["70%","40%"],center:["57%","52%"],silent:!0,clockwise:!0,startAngle:150,data:e,labelLine:{length:80,length2:30,lineStyle:{width:1}},label:{position:"outside",show:!0,formatter:"{d}%",fontWeight:400,fontSize:19,color:"#a1a1a1"},color:[{type:"linear",x:0,y:0,x2:.5,y2:1,colorStops:[{offset:0,color:"#feb791"},{offset:1,color:"#fe8b4c"}]},{type:"linear",x:0,y:0,x2:1,y2:.5,colorStops:[{offset:0,color:"#b898fd"},{offset:1,color:"#8347fd"}]}]}]})}}),(e,l)=>(p(),u("div",{ref_key:"echartsRef",ref:i,class:"echarts"},null,512))}});const v=_(x,[["__scopeId","data-v-f429f805"]]);export{v as default};