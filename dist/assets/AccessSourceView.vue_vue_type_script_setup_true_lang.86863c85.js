import{i as r}from"./index.f597358c.js";import{u as a}from"./useEcharts.c4abc40b.js";import{d as i,j as l,J as o,o as c,c as f}from"./index.7be5bb68.js";const h=i({__name:"AccessSourceView",setup(s){const t=l();return o(()=>{let u=r(t.value);a(u,{color:["#59A2FE","#FFB717","#FC8F6B","#70E07B","#FBDA3D","#11E5F1","#E3A0FF"],title:{text:"\u8BBF\u95EE\u6765\u6E90",subtext:"\u5168\u7AD9\u6765\u6E90\u7EDF\u8BA1",left:"center"},tooltip:{trigger:"item",backgroundColor:"#ffffff",formatter:function(e){return"\u8BBF\u95EE\u6765\u6E90</br>"+e.marker+e.name+"</br>\u6570\u91CF\uFF1A"+e.data.value+"</br>\u5360\u6BD4\uFF1A"+e.percent+"%"}},legend:{orient:"vertical",itemWidth:25,itemHeight:15,left:"2%",align:"left",top:"2%",textStyle:{fontSize:12,fontFamily:"PingFangSC-Regular, PingFang SC",fontWeight:400,color:"#0D1134",lineHeight:17}},series:[{type:"pie",radius:[0,100],labelLine:{length:20,length2:30},label:{formatter:`{a|{b}}
{per|{d}%}`,rich:{a:{fontSize:12,lineHeight:16,align:"center"},per:{color:"#545454",align:"center",fontSize:12,lineHeight:16}}},data:[{value:5920,name:"\u6296\u97F3"},{value:2640,name:"\u5FEB\u624B"},{value:2125,name:"\u5FAE\u535A"},{value:1925,name:"\u864E\u7259"},{value:1220,name:"\u6597\u9C7C"},{value:635,name:"\u4EBA\u6C11\u65E5\u62A5"},{value:4638,name:"\u5FAE\u4FE1"}]}]})}),(u,n)=>(c(),f("div",{ref_key:"echartsRef",ref:t,class:"w-100",style:{height:"350px"}},null,512))}});export{h as _};