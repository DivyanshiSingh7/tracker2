(this["webpackJsonpov-tracker"]=this["webpackJsonpov-tracker"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},15:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),s=(a(13),a(14),a(15),a(4)),i=a(5),c=a(1),d=a(7),m=a(6),u=(a(16),a(17),a(23),a(26),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=new Date(n.state.selectDate),a=Number(n.state.selectValue),l=new Date(n.state.selectDate),r=new Date(n.state.selectDate),o=new Date(n.state.selectDate);t.setDate(t.getDate()+a-14),l.setDate(l.getDate()+a-17),r.setDate(r.getDate()+a-12),o.setDate(o.getDate()+a-13),n.setState({newdate:t.getDate(),newmonth:t.getMonth(),newyear:t.getFullYear(),newday:t.getDay()}),n.setState({f_day:l.getDay(),f_date:l.getDate(),f_month:l.getMonth(),f_year:l.getFullYear()}),n.setState({m_day:r.getDay(),m_date:r.getDate(),m_month:r.getMonth(),m_year:r.getFullYear()}),n.setState({n_day:o.getDay(),n_date:o.getDate(),n_month:o.getMonth(),n_year:o.getFullYear()}),console.log(t+"hello"+l+"hello"+r);var s=t.getMonth()+1,i=t.getDate();s<10&&(s="0"+s),i<10&&(i="0"+i);var c=t.getFullYear()+"-"+s+"-"+i;console.log(c),n.setState({newdatestring:c,submitted:!0})},n.state={selectValue:0,selectDate:"",newday:"",newdate:"",newmonth:"",newyear:"",arrmonth:["January","February","March","April","May","June","July","August","September","October","November","December"],arrdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],newdatestring:"",submitted:!1,f_day:"",f_date:"",f_month:"",f_year:"",m_day:"",m_date:"",m_month:"",m_year:"",n_day:"",n_date:"",n_month:"",n_year:""},n.handleDropdownChange=n.handleDropdownChange.bind(Object(c.a)(n)),n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"handleDropdownChange",value:function(e){this.setState({selectValue:e.target.value})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"mainbox"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",{style:{textAlign:"center",color:"#163948",paddingTop:"4%",paddingBottom:"1%",paddingLeft:"35%"}},"Ovulation Calculator"),l.a.createElement("p",{style:{paddingLeft:"5%",paddingRight:"5%",textAlign:"center",paddingBottom:"4%"}},"Information regarding when you will ovulate can help you easily track your fertility window and increase your chances of getting pregnant. Below is a simple, hassle-free tool below to help you easily track your ovulation.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("p",{style:{marginLeft:"15%",color:"#163948",paddingLeft:"2%"}},l.a.createElement("strong",null,"When did you get your most recent period?")," ")),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("p",{style:{marginLeft:"15%",color:"#163948",paddingLeft:"4%"}},l.a.createElement("strong",null,"What is your average menstrual cycle length?")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{className:"inputDate",type:"date",onChange:function(t){return e.setState({selectDate:t.target.value})}})),l.a.createElement("div",{className:"col"},l.a.createElement("select",{style:{marginLeft:"33%",width:"200px",height:"50px",color:"#163948",borderRadius:"25px",paddingLeft:"4%",borderWidth:"3px",borderColor:"#163948"},id:"dropdown",onChange:this.handleDropdownChange},l.a.createElement("option",{value:""},"Select days"),l.a.createElement("option",{value:"20"},"20 days"),l.a.createElement("option",{value:"21"},"21 days"),l.a.createElement("option",{value:"22"},"22 days"),l.a.createElement("option",{value:"23"},"23 days"),l.a.createElement("option",{value:"24"},"24 days"),l.a.createElement("option",{value:"25"},"25 days"),l.a.createElement("option",{value:"26"},"26 days"),l.a.createElement("option",{value:"27"},"27 days"),l.a.createElement("option",{value:"28"},"28 days"),l.a.createElement("option",{value:"29"},"29 days"),l.a.createElement("option",{value:"30"},"30 days"),l.a.createElement("option",{value:"31"},"31 days"),l.a.createElement("option",{value:"32"},"32 days"),l.a.createElement("option",{value:"33"},"33 days"),l.a.createElement("option",{value:"34"},"34 days"),l.a.createElement("option",{value:"35"},"35 days"),l.a.createElement("option",{value:"36"},"36 days"),l.a.createElement("option",{value:"37"},"37 days"),l.a.createElement("option",{value:"38"},"38 days"),l.a.createElement("option",{value:"39"},"39 days"),l.a.createElement("option",{value:"40"},"40 days"),l.a.createElement("option",{value:"41"},"41 days"),l.a.createElement("option",{value:"42"},"42 days"),l.a.createElement("option",{value:"43"},"43 days"),l.a.createElement("option",{value:"44"},"44 days"),l.a.createElement("option",{value:"45"},"45 days")))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"myButton",style:{marginLeft:"45%",marginTop:"2%"},onClick:function(){return e.handleClick()}},"Submit")),l.a.createElement("div",null,this.state.submitted?l.a.createElement("div",{style:{backgroundColor:"white",marginTop:"5%",paddingBottom:"3%",border:"solid",borderRadius:"28px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{style:{textAlign:"left",paddingTop:"5%",color:"#54595F",marginLeft:"10%"}},"Predicted ovulation date : "),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{style:{textAlign:"left",paddingTop:"0.5%",color:"black",marginLeft:"-220px",marginTop:"60px"}},this.state.arrdays[this.state.newday],", ",this.state.newdate," ",this.state.arrmonth[this.state.newmonth]," ",this.state.newyear))),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{style:{textAlign:"left",paddingTop:"5%",color:"#54595F",marginLeft:"10%"}},"Most fertile days : "),l.a.createElement("h5",{style:{textAlign:"left",paddingTop:"0.5%",color:"black",marginLeft:"10%"}},this.state.arrdays[this.state.f_day],", ",this.state.f_date," ",this.state.arrmonth[this.state.f_month]," ",this.state.f_year," to ",this.state.arrdays[this.state.newday],", ",this.state.newdate," ",this.state.arrmonth[this.state.newmonth]," ",this.state.newyear)),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{style:{textAlign:"left",paddingTop:"5%",color:"#54595F",marginLeft:"10%"}},"Potentially fertile days : "),l.a.createElement("h5",{style:{textAlign:"left",paddingTop:"0.5%",color:"black",marginLeft:"10%"}},this.state.arrdays[this.state.n_day],", ",this.state.n_date," ",this.state.arrmonth[this.state.n_month]," ",this.state.n_year," and ",this.state.arrdays[this.state.m_day],", ",this.state.m_date," ",this.state.arrmonth[this.state.m_month]," ",this.state.m_year))),l.a.createElement("div",{className:"col"},l.a.createElement("p",{style:{marginLeft:"35%",marginTop:"25%"}},l.a.createElement("strong",null,"View Ovulation Date in Calendar")),l.a.createElement("input",{className:"inputDate",style:{marginLeft:"40%",marginTop:"0%"},type:"date",value:this.state.newdatestring}))),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("a",{style:{marginLeft:"45%",marginTop:"2%"},className:"myButton",href:"http://DivyanshiSingh7.github.io/tracker2/"},"Redo")))):null)))}}]),a}(n.Component));var h=function(){return l.a.createElement(u,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(27);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(28)}},[[8,1,2]]]);
//# sourceMappingURL=main.7f0ef4dd.chunk.js.map