(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(13),n(4)),u=n(3),l=(n(14),function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],i=r[1];return o.a.createElement("form",{className:"to-do-form",onSubmit:function(e){e.preventDefault(),c&&(t(c),i(""))}},o.a.createElement("input",{type:"text",placeholder:"Type text here",value:c,onChange:function(e){return i(e.target.value)}}),o.a.createElement("button",{type:"submit"},"+"))}),s=function(e){var t=e.items,n=e.onClick,a=(e.onChange,function(e){n(e)});return o.a.createElement("div",null,t.map((function(e){return o.a.createElement("form",{key:e.id},o.a.createElement("input",{type:"text",value:e.text}),o.a.createElement("button",{type:"submit",onClick:a},"x"))})))},m=n(7),f=["Hello Tun!","Todo List"],d=function(){var e=Object(m.a)(),t=e.result,n=e.dencrypt;return a.useEffect((function(){var e=0,t=setInterval((function(){n(f[e]),e=e===f.length-1?0:e+1}),2e3);return function(){return clearInterval(t)}}),[n]),a.createElement("code",null,t)},p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement(l,{onSubmit:function(e){var t={id:n.length+1,text:e},a=Object(i.a)(n);a.push(t),r(a)}}),o.a.createElement(s,{items:n,onClick:function(e){var t=n.findIndex((function(t){return t.id===e.id})),a=Object(i.a)(n);a.splice(t,1),r(a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.458a66dd.chunk.js.map