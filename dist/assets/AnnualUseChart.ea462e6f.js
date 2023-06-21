import{i as c}from"./index.f597358c.js";import{d,o as p,c as u,_ as f}from"./index.7be5bb68.js";const m={id:"AnnualUseChart",class:"echarts"},h=d({__name:"AnnualUseChart",setup(y,{expose:n}){return n({initChart:(t={})=>{const r=document.getElementById("AnnualUseChart"),l=["rgba(254, 219, 101,0.1)","rgba(0, 122, 254,0.1)","rgba(255, 75, 122, 0.1)"],s=c(r),i={tooltip:{trigger:"axis",axisPointer:{type:"none"},borderWidth:0,padding:0,backgroundColor:"transparent",formatter:e=>{let o="";return e.forEach(a=>{o+=`
          <div class="year-item">
            <span class="year-dot" style="background-color: ${a.color};"></span>
            <span class="year-name">${a.seriesName}</span>
            <span class="year-value">${a.data>=1e4?(a.data/1e4).toFixed(2)+"w":a.data}</span>
          </div>
          `}),`
                    <div class="annual-tooTip">
                      <span class="annual-month">${e[0].dataIndex+1}\u6708</span>
                      <div class="annual-list">
                        ${o}
                      </div>
                    </div>
                  `}},legend:{right:"2%",top:"0%",itemWidth:15,itemHeight:6,align:"auto",icon:"rect",itemGap:15,textStyle:{color:"#ebebf0"}},grid:{top:"20%",left:"40",right:"4%",bottom:"15%"},xAxis:[{name:"(\u6708\u4EFD)",type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{color:"#7ec7ff",padding:0,fontSize:12,formatter:function(e){return e}},splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:t.columns}],yAxis:{name:"(\u4EBA\u6570)",nameTextStyle:{color:"#D6DFEA",fontSize:12,padding:[0,30,0,0]},minInterval:1,splitNumber:5,splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,color:"#B9D6D6",padding:0,formatter:function(e){return e>=1e4&&(e=e/1e4+"w"),e}},axisTick:{show:!1}},series:t.data.map((e,o)=>({name:e.label,type:"line",symbol:"circle",showSymbol:!1,smooth:!0,lineStyle:{width:1,color:t.colors[o],borderColor:t.colors[o]},itemStyle:{color:t.colors[o],borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:t.colors[o]},{offset:1,color:l[o]}],global:!1},shadowColor:"rgba(25,163,223, 0.3)",shadowBlur:20},data:e.value}))};return s.setOption(i),s}}),(t,r)=>(p(),u("div",m))}});const w=f(h,[["__scopeId","data-v-90f4fcbf"]]);export{w as default};
