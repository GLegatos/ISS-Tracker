(this.webpackJsonpfirstapi=this.webpackJsonpfirstapi||[]).push([[0],{11:function(t,e,n){t.exports=n(20)},16:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),i=n(2),r=n.n(i),c=(n(16),n(5)),l=n(6),s=n(9),u=n(8),m=n(10),h=Object({NODE_ENV:"production",PUBLIC_URL:"/ISS-Tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MAP_KEY,p="http://api.open-notify.org/iss-now.json",d=o.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/32px-International_Space_Station.svg.png",alt:"iss",height:"30px"}),g=function(t){var e=t.img;return o.a.createElement("div",null,e)},v=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={center:{lat:0,lng:0},zoom:1},t.getCoordinates=function(){fetch(p).then((function(t){return t.json()})).then((function(e){return t.setState({center:{lat:e.iss_position.latitude,lng:e.iss_position.longitude}})}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getCoordinates(),this.interval=setInterval(this.getCoordinates,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return console.log("LAT:",this.state.center.lat),console.log("LNG:",this.state.center.lng),o.a.createElement("div",null,o.a.createElement("p",null,"Latitude: ",this.state.center.lat),o.a.createElement("p",null,"Longitude: ",this.state.center.lng),o.a.createElement("div",{className:"map",style:{height:"100vh",width:"80%",margin:"0 auto"}},o.a.createElement(m.a,{className:"map",bootstrapURLKeys:{key:h},center:this.state.center,zoom:this.state.zoom},o.a.createElement(g,{lat:this.state.center.lat,lng:this.state.center.lng,img:d}))))}}]),n}(o.a.Component);n(19);var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h3",null,"ISS Tracker"),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.bc824ab7.chunk.js.map