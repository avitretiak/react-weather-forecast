(this["webpackJsonpreact-weather-forecast"]=this["webpackJsonpreact-weather-forecast"]||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(16),i=n.n(a),r=(n(44),n(45),n(22)),s=n(24),u=n(26),l=n.n(u),j=n(29),f=n(23),b=(n(48),n(49),n(58)),d=n(59),p=n(3),O=function(){function t(t){console.log(t.coords.latitude),console.log(t.coords.longitude)}return navigator.geolocation?Object(p.jsx)(b.a,{size:"middle",className:"location-btn",shape:"circle",icon:Object(p.jsx)(d.a,{}),onClick:function(){navigator.geolocation.getCurrentPosition(t)}}):null},h=function(t){var e=t.setLocation,n=Object(c.useState)(),o=Object(r.a)(n,2),a=o[0],i=o[1],u={placeholder:"Location",noOptionsMessage:function(){return"No Results Found"},components:{IndicatorSeparator:function(){return null},DropdownIndicator:function(){return null}},styles:{style:{input:function(t){return Object(s.a)(Object(s.a)({},t),{},{width:"75%"})}}},className:"location-select-input",classNamePrefix:"location-select-input",value:a,onSelect:function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,Object(f.b)(n.value.place_id).then((function(t){return Object(f.c)(t[0])})).then((function(t){var n=t.lat,c=t.lng;return e({lat:n,lng:c})}));case 3:i(n.value.terms[0].value);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};return Object(p.jsxs)("div",{className:"location-container",children:[Object(p.jsx)(f.a,{apiKey:"AIzaSyCN72ZHM9j72VKxjk5i-9_AZXS9JqkKWok",debounce:1500,selectProps:Object(s.a)({},u)}),Object(p.jsx)(O,{})]})},v=(n(52),function(t){t.location;var e=t.setLocation;return Object(p.jsx)("div",{className:"left-pane-container",children:Object(p.jsx)(h,{setLocation:e})})}),g=(n(53),function(){var t=Object(c.useState)({}),e=Object(r.a)(t,2),n=e[0],o=e[1];return Object(p.jsx)("div",{className:"weather-forecast-container",children:Object(p.jsx)(v,{location:n,setLocation:o})})});var x=function(){return Object(p.jsx)("div",{className:"app-container",children:Object(p.jsx)(g,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),m()}},[[54,1,2]]]);
//# sourceMappingURL=main.029bdfb1.chunk.js.map