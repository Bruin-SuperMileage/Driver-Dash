(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{37:function(e,t,a){e.exports=a(74)},42:function(e,t,a){},53:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(32),i=a.n(s),l=(a(42),a(7)),o=a(13),c=a(9),m=a(8),u=a(10),p=a(24),d=a.n(p),h={apiKey:"AIzaSyAnFTWZTgWEugKOSUM6WY_NkxrPzRzn6dU",authDomain:"bruin-racing.firebaseapp.com",databaseURL:"https://bruin-racing.firebaseio.com",projectId:"bruin-racing",storageBucket:"bucket.appspot.com"};d.a.initializeApp(h);var b,v=d.a,g=(a(53),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"speed has-text-centered big"},this.props.speed.speed),r.a.createElement("p",{className:"speed has-text-centered km"},"km/h")))}}]),t}(r.a.Component)),T=a(15),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={timerOn:!1,timerStart:0,timerTime:0,isRunning:"False",lapNumber:1},a.startTimer=function(){a.setState({timerOn:!0,timerTime:a.state.timerTime,timerStart:Date.now()-a.state.timerTime}),a.timer=setInterval((function(){a.setState({timerTime:Date.now()-a.state.timerStart})}),10)},a.stopTimer=function(){a.setState({timerOn:!1}),clearInterval(a.timer)},a.resetTimer=function(){a.setState({timerStart:Date.now(),timerTime:0})},a.componentDidMount=function(){"True"===a.props.lap.running&&("True"===a.props.lap.running?(a.resetTimer(),a.startTimer(),a.setState({isRunning:"True"})):"False"===a.props.lap.running&&(a.stopTimer(),a.setState({isRunning:"False"})))},a.componentDidUpdate=function(){var e=a.state,t=e.isRunning,n=e.lapNumber;t!==a.props.lap.running&&("True"===a.props.lap.running?(console.log("Starting start"),a.resetTimer(),a.startTimer(),a.setState({isRunning:"True"})):"False"===a.props.lap.running&&(console.log("Ending end"),a.stopTimer(),a.setState({isRunning:"False"}))),console.log("state: "+n),console.log("current: "+a.props.lap.current),n!==a.props.lap.current&&(console.log("lapNumber"),a.resetTimer(),a.setState({lapNumber:a.props.lap.current}),console.log("setState"))},a.render=function(){var e=a.state.timerTime,t=("0"+Math.floor(e/10)%100).slice(-2),n=("0"+Math.floor(e/1e3)%60).slice(-2),s=("0"+Math.floor(e/6e4)%60).slice(-2),i=26e4-e,l=("0"+Math.floor(i/10)%100).slice(-2),o=("0"+Math.floor(i/1e3)%60).slice(-2),c=("0"+Math.floor(i/6e4)%60).slice(-2);return r.a.createElement("div",null,r.a.createElement("div",{className:"lap"},r.a.createElement("div",{className:"card-content columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Lap ",a.props.lap.current),r.a.createElement("p",null,"Remaining")),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,s," : ",n," : ",t),r.a.createElement("p",null,c," : ",o," : ",l)))))},a.startTimer=a.startTimer.bind(Object(T.a)(a)),a.stopTimer=a.stopTimer.bind(Object(T.a)(a)),a.resetTimer=a.resetTimer.bind(Object(T.a)(a)),a}return Object(u.a)(t,e),t}(r.a.Component),S=a(34),E=a.n(S),O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement(E.a,{minValue:0,maxValue:70,needleHeightRatio:.8,maxSegmentLabels:8,segments:5555,value:this.props.speedometer.speed,textColor:"white",width:1e3,height:450,needleTransition:"easePolyIn",ringWidth:120,paddingVertical:150,valueTextFontSize:0,labelFontSize:50,paddingHorizontal:100})))}}]),t}(r.a.Component);(b=document.documentElement).requestFullScreen?b.requestFullScreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.webkitRequestFullScreen&&b.webkitRequestFullScreen();var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={latestTime:"",latestTrial:"",latestData:{},lap:{},speed:{},speedometer:{}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=v.database();t.ref("Latest Time").on("value",(function(a){var n=a.val();t.ref("Latest Trial").on("value",(function(a){var r=a.val();t.ref(r).child(n).on("value",(function(t){var a,n=(a=t.val()).speed,r=a.lap;e.setState({latestData:a,speed:n,speedometer:n,lap:r})})),e.setState({latestTrial:r})})),e.setState({latestTime:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"canvas color-dark",style:{paddingTop:"45px"}},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column is-one-third"},r.a.createElement(g,{speed:this.state.speed})),r.a.createElement("div",{className:"column "},r.a.createElement(O,{speedometer:this.state.speed}),r.a.createElement(f,{lap:this.state.lap}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.cba07151.chunk.js.map