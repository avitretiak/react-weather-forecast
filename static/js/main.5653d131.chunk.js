(this["webpackJsonpreact-weather-forecast"]=this["webpackJsonpreact-weather-forecast"]||[]).push([[0],{22:function(e,t,n){e.exports={fillBlue:"#5596f6",areaBlue:"#eef4fe",white:"#fff"}},52:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),i=n.n(r),o=(n(52),n(53),n(15)),s=n.n(o),l=n(25),u=n(11),d=n(12),j=n(27),f=(n(56),n(68)),h=n(69),p=n(1),b=function(e){var t=e.setLocation,n=e.setValue;function a(e){return c.apply(this,arguments)}function c(){return(c=Object(l.a)(s.a.mark((function e(a){var c,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[a.coords.latitude,a.coords.longitude],r=c[0],i=c[1],e.next=3,Object(j.b)({lat:r,lng:i}).then((function(e){return e.filter((function(e){return"postal_code"===e.types[0]}))})).then((function(e){return e[0].formatted_address.split(", ")})).then((function(e){return"".concat(e[0],", ").concat(e[1])}));case 3:t({lat:r,lng:i}),n("Current Location");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return navigator.geolocation?Object(p.jsx)(f.a,{size:"middle",className:"location-btn",shape:"circle",icon:Object(p.jsx)(h.a,{}),onClick:function(){navigator.geolocation.getCurrentPosition(a)}}):null},m=function(e){var t=e.setLocation,n=Object(a.useState)("Location"),c=Object(u.a)(n,2),r=c[0],i=c[1],o=function(){var e=Object(l.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(n.value.place_id).then((function(e){return Object(j.d)(e[0])})).then((function(e){var n=e.lat,a=e.lng;return t({lat:n,lng:a})}));case 2:a=n.value.terms[1]?"".concat(n.value.terms[0].value,", ").concat(n.value.terms[1].value):"".concat(n.value.terms[0].value),i(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={openMenuOnClick:!1,placeholder:r,noOptionsMessage:function(){return"No Results Found"},components:{IndicatorSeparator:function(){return null},DropdownIndicator:function(){return null}},styles:{style:{input:function(e){return Object(d.a)(Object(d.a)({},e),{},{width:"75%"})}}},className:"location-select-input",classNamePrefix:"location-select-input",label:r,value:r,onSelect:o,onChange:o};return Object(p.jsxs)("div",{className:"location-input-container",children:[Object(p.jsx)(j.a,{apiKey:"AIzaSyCN72ZHM9j72VKxjk5i-9_AZXS9JqkKWok",debounce:1500,selectProps:Object(d.a)({},f)}),Object(p.jsx)(b,{setValue:i,setLocation:t})]})},O=(n(59),function(e){var t=e.iconId,n=e.iconClass,a="block owi owi-".concat(t," ").concat(n);return Object(p.jsx)("i",{className:a})}),v=function(e){var t=e.humidityPercentage;return Object(p.jsxs)("div",{className:"humidity-container",children:[Object(p.jsx)("span",{className:"humidity-text",children:"Humidity"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"humidity-percentage",children:"".concat(t,"%")})]})},x=function(e){var t=e.windSpeed;return Object(p.jsxs)("div",{className:"windspeed-container",children:[Object(p.jsx)("span",{className:"windspeed-text",children:"Wind Speed"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"windspeed-value",children:"".concat(t.toFixed(1)," km/h")})]})},y=n(28),g=n.n(y),w=n(46),N=n.n(w),k=function(e){var t=e.secondsOffset;g.a.extend(N.a);var n=Object(a.useState)(g.a.utc()),c=Object(u.a)(n,2),r=c[0],i=c[1];Object(a.useEffect)((function(){var e=setInterval((function(){i(g.a.utc())}),1e3);return function(){return clearInterval(e)}}),[t]);var o="".concat(r.utcOffset(t/60).format("hh:mm a, dddd, MMM DD, YYYY"));return Object(p.jsx)("span",{className:"date-time-text",children:o})},M=(n(60),function(e){var t=e.weather,n=e.timezoneOffset;return Object(p.jsxs)("div",{className:"weather-card-big",children:[Object(p.jsx)(k,{className:"date-time-container",secondsOffset:n}),Object(p.jsxs)("div",{className:"weather-card-big-current",children:[Object(p.jsx)(O,{iconClass:"wi-main",iconId:t.weather[0].icon}),Object(p.jsx)("span",{className:"temp-display",children:"".concat((t.temp-273.15).toFixed(1),"\xb0c")})]}),Object(p.jsx)("span",{className:"weather-card-big-current-text",children:t.weather[0].main}),Object(p.jsxs)("div",{className:"weather-card-big-lower",children:[Object(p.jsx)(v,{humidityPercentage:t.humidity}),Object(p.jsx)(x,{windSpeed:3.6*t.wind_speed})]})]})}),C=function(e){var t=e.setLocation,n=e.currentWeather,a=e.timezoneOffset;return Object(p.jsxs)("div",{className:"left-pane-container",children:[Object(p.jsx)(m,{setLocation:t}),n?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(M,{weather:n,timezoneOffset:a})}):""]})},S=n(8),D=n(38),B=n(22),I=n.n(B),E=(n(61),{borderCapStyle:"round",borderColor:I.a.fillBlue,borderWidth:2,tension:.4,hoverBorderWidth:3,hoverRadius:6,hoverBorderColor:I.a.white,pointBorderWidth:0,pointBackgroundColor:"rgba(0, 0, 0, 0)",hoverBackgroundColor:I.a.fillBlue}),z=function(e){var t=e.temperatures,n=e.selectedDay,c=Object(a.useRef)(null),r=D.a.registry.getPlugin("tooltip");r.positioners.top=function(e){var n=r.positioners.average(e),a=e[0].element.$context.raw;return!1!==n&&{x:n.x<25?n.x+10:n.x,y:a>0?n.y-4*Math.max.apply(Math,Object(S.a)(t)):n.y+20-3*Math.min.apply(Math,Object(S.a)(t))}};var i={labels:["day1Morn","day1Day","day1Eve","day1Night","day2Morn","day2Day","day2Eve","day2Night","day3Morn","day3Day","day3Eve","day3Night","day4Morn","day4Day","day4Eve","day4Night"],datasets:[{data:t,fill:{target:"origin",above:I.a.areaBlue,below:I.a.areaBlue}}]},o=Object(d.a)(Object(d.a)({},E),{},{events:[],scales:{y:{display:!1,ticks:{display:!1},min:t?Math.min.apply(Math,Object(S.a)(t))-7.5:0,max:t?Math.max.apply(Math,Object(S.a)(t))+7.5:50},x:{ticks:{display:!1},display:!1}},plugins:{legend:{display:!1},tooltip:{position:"top",backgroundColor:"transparent",displayColors:!1,bodyFontSize:32,bodyColor:I.a.fillBlue,bodyFont:{weight:"bold",size:22,family:"Open Sans, sans-serif"},callbacks:{title:function(){return""},label:function(e){return"".concat(t[e.dataIndex].toFixed(1),"\u02dac")}}}}});return Object(a.useEffect)((function(){!function(e){var n=function(e){return 1+4*e};c&&c.current&&t&&(c.current.setActiveElements([{datasetIndex:0,index:n(e)}]),c.current.tooltip.setActiveElements([{datasetIndex:0,index:n(e)}]),c.current.tooltip.update())}(n)}),[n,t]),Object(p.jsx)("div",{className:"weather-chart-container",children:t?Object(p.jsxs)("div",{className:"weather-chart-container",children:[Object(p.jsx)("p",{className:"temperature-chart-title",children:"Daily Average"}),Object(p.jsx)(D.b,{data:i,ref:c,options:o,height:"".concat(120,"px"),className:"weather-chart"})]}):null})},P=(n(62),function(e){var t=e.forecast,n=e.dayOffset,a=e.handleClick,c=e.selectedDay,r="weather-card-small inline-block ".concat(n===c?"selected":"");return Object(p.jsxs)("button",{type:"button",className:r,onClick:function(){return a(n)},children:[Object(p.jsx)("span",{className:"block weather-card-small-day",children:0===n?"Today":"".concat(g()().add(n,"day").format("MMM DD"))}),Object(p.jsx)(O,{iconId:t.weather[0].icon}),Object(p.jsx)(v,{humidityPercentage:t.humidity})]})}),W=function(e){var t,n=e.dailyWeather,c=Object(a.useState)(0),r=Object(u.a)(c,2),i=r[0],o=r[1],s=null===n||void 0===n?void 0:n.slice(0,4),l=null===s||void 0===s||null===(t=s.map((function(e){return[(t=e).temp.morn,t.temp.day,t.temp.eve,t.temp.night].map((function(e){return e-273.15}));var t})))||void 0===t?void 0:t.flat(),d=function(e){o(e)};return Object(p.jsxs)("div",{className:"right-pane-container",children:[Object(p.jsx)(z,{temperatures:l,selectedDay:i}),Object(p.jsx)("div",{className:"small-cards-container",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(p.jsx)(P,{forecast:e,dayOffset:t,selectedDay:i,handleClick:d},"daySelector".concat(t))}))})]})},L=(n(63),function(){var e=Object(a.useState)({lat:0,lng:0}),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),i=Object(u.a)(r,2),o=i[0],d=i[1],j="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n.lat.toPrecision(4),"&lon=").concat(n.lng.toPrecision(4),"&exclude=minutely,hourly,alerts&appid=").concat("2cda4c5eeb60fc8981e9c378d9d83cdd"),f=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.lat&&!n.lng){e.next=3;break}return e.next=3,fetch(j).then((function(e){return e.json()})).then((function(e){return d(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[j]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C,{currentWeather:null===o||void 0===o?void 0:o.current,timezoneOffset:null===o||void 0===o?void 0:o.timezone_offset,location:n,setLocation:c}),Object(p.jsx)(W,{dailyWeather:null===o||void 0===o?void 0:o.daily})]})}),F=function(){return Object(p.jsx)("div",{className:"app-container",children:Object(p.jsx)(L,{})})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.5653d131.chunk.js.map