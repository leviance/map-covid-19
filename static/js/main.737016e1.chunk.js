(this["webpackJsonpmap-covid-19"]=this["webpackJsonpmap-covid-19"]||[]).push([[0],{22:function(e,t,a){e.exports=a(47)},28:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),l=a.n(o),r=a(8),s=a.n(r),i=a(21),u=a(9),m=a.n(u);a(28),a(29);s.a.accessToken="pk.eyJ1IjoiZHJkdW5nMTk5OSIsImEiOiJjazkzdm05MjkwNmZ6M2ZvbW45bHRjdnI4In0.DyZ4IJKI0CozWJrmPGzbow";var d=function(){var e=Object(n.useRef)(null),t=Object(i.a)("https://corona.lmao.ninja/v2/jhucsse",(function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.map((function(e,t){return{type:"Feature",geometry:{type:"Point",coordinates:[e.coordinates.longitude,e.coordinates.latitude]},properties:{id:t,country:e.country,province:e.province,cases:e.stats.confirmed,deaths:e.stats.deaths}}}))}))})).data;return Object(n.useEffect)((function(){if(t){var a=new s.a.Map({container:e.current,style:"mapbox://styles/mapbox/dark-v10",center:[108,15],zoom:3});a.addControl(new s.a.NavigationControl),a.once("load",(function(){a.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:t}}),a.addLayer({id:"circles",source:"points",type:"circle",paint:{"circle-opacity":.75,"circle-stroke-width":["interpolate",["linear"],["get","cases"],1,1,1e5,1.75],"circle-radius":["interpolate",["linear"],["get","cases"],1,4,1e3,8,4e3,10,8e3,14,12e3,18,1e5,40],"circle-color":["interpolate",["linear"],["get","cases"],1,"#ffffb2",5e3,"#fed976",1e4,"#feb24c",25e3,"#fd8d3c",5e4,"#fc4e2a",75e3,"#e31a1c",1e5,"#f00"]}});var e,n=new s.a.Popup({closeButton:!1,closeOnClick:!1});a.on("mousemove","circles",(function(t){var c=t.features[0].properties.id;if(c!==e){var o,l;e=c;var r=t.features[0].properties,s=r.cases,i=r.deaths,u=r.country,d=r.province;a.getCanvas().style.cursor="pointer";for(var v=t.features[0].geometry.coordinates.slice(),h=(null===(o=m.a.byCountry(u))||void 0===o?void 0:o.iso2)||(null===(l=m.a.byInternet(u))||void 0===l?void 0:l.iso2),p="null"!==d?"<p>Khu v\u1ef1c: <b>".concat(d,"</b></p>"):"",f=(i/s*100).toFixed(2),E=Boolean(h)?'<img src="https://www.countryflags.io/'.concat(h,'/flat/64.png"></img>'):"",y="<p>Qu\u1ed1c gia: <b>".concat(u,"</b></p>\n                ").concat(p,"\n                <p>T\u1ed5ng s\u1ed1 ng\u01b0\u1eddi m\u1eafc: <b>").concat(s,"</b></p>\n                <p>T\u1eed vong: <b>").concat(i,"</b></p>\n                <p>T\u1ef7 l\u1ec7 t\u1eed vong: <b>").concat(f,"%</b></p>\n                ").concat(E);Math.abs(t.lngLat.lng-v[0])>180;)v[0]+=t.lngLat.lng>v[0]?360:-360;n.setLngLat(v).setHTML(y).addTo(a)}})),a.on("mouseleave","circles",(function(){e=void 0,a.getCanvas().style.cursor="",n.remove()}))}))}})),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"mapContainer"},c.a.createElement("div",{className:"mapBox",ref:e})))},v=a(2),h=a(3),p=a(6),f=a(5),E=a(4),y=a.n(E);function b(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function g(e){return c.a.createElement("div",{className:"total-patients"},"T\u1ed5ng s\u1ed1 ng\u01b0\u1eddi m\u1eafc : ",c.a.createElement("span",null,e.content))}var j=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={dataToRender:[]},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries?sort=cases").then((function(t){var a=[];t.data.forEach((function(e){a.push(c.a.createElement("li",null,c.a.createElement("span",null,b(e.cases)),e.country))})),e.setState({dataToRender:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"total-patients-each-country"},c.a.createElement("div",{className:"title"},"S\u1ed1 ng\u01b0\u1eddi m\u1eafc theo t\u1eebng qu\u1ed1c gia : "),c.a.createElement("ul",null,this.state.dataToRender))}}]),a}(n.Component),N=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={TotalPatients:null},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/all").then((function(t){e.setState({TotalPatients:b(t.data.cases)})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"big-col-left"},c.a.createElement(g,{content:this.state.TotalPatients}),c.a.createElement(j,null))}}]),a}(n.Component);function O(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var w=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={totalDeaths:[]},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries?sort=deaths").then((function(t){var a=[];t.data.forEach((function(e){a.push(c.a.createElement("li",null,c.a.createElement("span",{className:"color-red"},O(e.deaths)),e.country))})),e.setState({totalDeaths:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{id:"col-total-deaths",className:"column-data"},c.a.createElement("div",{className:"title-deaths title"},"S\u1ed1 ng\u01b0\u1eddi ch\u1ebft ",c.a.createElement("p",null,this.props.deaths)),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,this.state.totalDeaths)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("div",{className:"btn-view col-total-deaths active"},"S\u1ed1 ng\u01b0\u1eddi ch\u1ebft"),c.a.createElement("div",{className:"btn-view col-today-deaths"},"S\u1ed1 ng\u01b0\u1eddi ch\u1ebft h\xf4m nay")))}}]),a}(n.Component),S=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={totalRecovered:[]},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries?sort=recovered").then((function(t){var a=[];t.data.forEach((function(e){a.push(c.a.createElement("li",null,c.a.createElement("span",{className:"color-blue"},O(e.recovered)),e.country))})),e.setState({totalRecovered:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"column-data",id:"col-total-recovered"},c.a.createElement("div",{className:"title-recovered title"},"S\u1ed1 kh\u1ecfi b\u1ec7nh ",c.a.createElement("p",null,this.props.recovered)),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,this.state.totalRecovered)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("div",{className:"btn-view col-total-recovered active"},"S\u1ed1 ng\u01b0\u1eddi kh\u1ecfi b\u1ec7nh"),c.a.createElement("div",{className:"btn-view col-new-patients"},"S\u1ed1 ng\u01b0\u1eddi m\u1eafc m\u1edbi h\xf4m nay")))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={totalDeathsTodayEachCountry:[]},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries?sort=todayDeaths").then((function(t){var a=[];t.data.forEach((function(e){a.push(c.a.createElement("li",null,c.a.createElement("span",{className:"color-red"},O(e.todayDeaths)),e.country))})),e.setState({totalDeathsTodayEachCountry:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"column-data",id:"col-today-deaths"},c.a.createElement("div",{className:"title-deaths title"},"S\u1ed1 ng\u01b0\u1eddi ch\u1ebft h\xf4m nay",c.a.createElement("p",null,this.props.todayDeaths)),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,this.state.totalDeathsTodayEachCountry)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("div",{className:"btn-view col-total-deaths"},"S\u1ed1 ng\u01b0\u1eddi ch\u1ebft"),c.a.createElement("div",{className:"btn-view col-today-deaths active"},"S\u1ed1 ng\u01b0\u1eddi ch\u1ebft h\xf4m nay")))}}]),a}(n.Component),T=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={newPatientsToday:null},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries?sort=todayCases").then((function(t){var a=[];t.data.forEach((function(e){a.push(c.a.createElement("li",null,c.a.createElement("span",{className:"color-blue"},O(e.todayCases)),e.country))})),e.setState({newPatientsToday:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"column-data",id:"col-new-patients"},c.a.createElement("div",{className:"title-recovered title"},"S\u1ed1 ca m\u1eafc m\u1edbi ",c.a.createElement("p",null,this.props.newPatientsToday)),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,this.state.newPatientsToday)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("div",{className:"btn-view col-total-recovered "},"S\u1ed1 ng\u01b0\u1eddi kh\u1ecfi b\u1ec7nh"),c.a.createElement("div",{className:"btn-view col-new-patients active"},"S\u1ed1 ng\u01b0\u1eddi m\u1eafc m\u1edbi h\xf4m nay")))}}]),a}(n.Component),C=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={totalCases:null,totalDeaths:null,newPatientsToday:null,totalRecovered:null},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/countries/704").then((function(t){e.setState({totalCases:t.data.cases,totalDeaths:t.data.deaths,newPatientsToday:t.data.todayCases,totalRecovered:t.data.recovered})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"infor-of-vietnam"},c.a.createElement("h1",null,"VI\u1ec6T NAM"),c.a.createElement("h3",null,"T\u1ed5ng s\u1ed1 ng\u01b0\u1eddi m\u1eafc: ",c.a.createElement("span",{className:"color-red"},this.state.totalCases)),c.a.createElement("h3",null,"S\u1ed1 ng\u01b0\u1eddi \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1eefa kh\u1ecfi: ",c.a.createElement("span",null,this.state.totalRecovered)),c.a.createElement("h3",null,"S\u1ed1 ng\u01b0\u1eddi m\u1eafc m\u1edbi trong h\xf4m nay: ",c.a.createElement("span",{className:"color-red"},this.state.newPatientsToday)),c.a.createElement("h3",null,"S\u1ed1 ng\u01b0\u1eddi ch\u1ebft: ",c.a.createElement("span",{className:"color-red"},this.state.totalDeaths)),c.a.createElement("h3",null,"T\u1ef7 l\u1ec7 t\u1eed vong: ",c.a.createElement("span",{className:"color-red"},"0%")))}}]),a}(n.Component),D=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={totalRecovered:null,totalDeaths:null,todayDeaths:null,newPatientsToday:null},n}return Object(h.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://corona.lmao.ninja/v2/all").then((function(t){e.setState({totalRecovered:O(t.data.recovered)}),e.setState({totalDeaths:O(t.data.deaths)}),e.setState({todayDeaths:O(t.data.todayDeaths)}),e.setState({newPatientsToday:O(t.data.todayCases)})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"big-col-right"},c.a.createElement("div",{className:"top-component"},c.a.createElement(w,{deaths:this.state.totalDeaths}),c.a.createElement(k,{todayDeaths:this.state.todayDeaths}),c.a.createElement(S,{recovered:this.state.totalRecovered}),c.a.createElement(T,{newPatientsToday:this.state.newPatientsToday})),c.a.createElement("div",{className:"bottom-component"},c.a.createElement(C,null)))}}]),a}(n.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null),c.a.createElement(d,null),c.a.createElement(D,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.737016e1.chunk.js.map