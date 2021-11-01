(this["webpackJsonpreact-aframe-spike"]=this["webpackJsonpreact-aframe-spike"]||[]).push([[0],{22:function(e,t,a){},31:function(e,t,a){},40:function(e,t){var a=window,s=a.AFRAME,n=a.THREE;s.registerComponent("star-system",{schema:{color:{type:"string",default:"#FFF"},radius:{type:"number",default:300,min:0},depth:{type:"number",default:300,min:0},size:{type:"number",default:1,min:0},count:{type:"number",default:1e4,min:0},texture:{type:"asset",default:""}},update:function(){var e={};this.data.texture&&(e.transparent=!0,e.map=(new n.TextureLoader).load(this.data.texture));for(var t=[],a=[];t.length<this.data.count;)t.push(this.randomVectorBetweenSpheres(this.data.radius,this.data.depth)),a.push(0,parseInt(Math.random()),parseInt(Math.random()));var s=(new n.BufferGeometry).setFromPoints(t);s.setAttribute("color",new n.Float32BufferAttribute(a,3)),console.log(s,"<--- stars");var r=new n.PointsMaterial(Object.assign(e,{color:this.data.color,size:this.data.size}));this.el.setObject3D("star-system",new n.Points(s,r))},remove:function(){this.el.removeObject3D("star-system")},randomVectorBetweenSpheres:function(e,t){var a=Math.floor(Math.random()*(e+t-e+1)+e);return this.randomSphereSurfaceVector(a)},randomSphereSurfaceVector:function(e){var t=2*Math.PI*Math.random(),a=Math.acos(2*Math.random()-1),s=e*Math.sin(a)*Math.cos(t),r=e*Math.sin(a)*Math.sin(t),c=e*Math.cos(a);return new n.Vector3(s,r,c)}})},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(14),c=a.n(r),i=(a(22),a(9)),o=a(2),l=a(6),d=a(0),m=function(e){var t=e.setModelName;return Object(d.jsxs)("nav",{id:"nav-bar",children:[Object(d.jsxs)("div",{classame:"row",children:[Object(d.jsx)(l.b,{className:"button",to:"/vr",children:"VR"}),Object(d.jsx)(l.b,{className:"button",to:"/ar",children:"AR"}),Object(d.jsx)(l.b,{className:"button",to:"/ar_no_marker",children:"AR no marker"}),Object(d.jsx)(l.b,{className:"button",to:"/test_ui_look",children:"Test UI Look"})]}),Object(d.jsxs)("div",{className:"row",children:["Planet:",["mars","venus"].map((function(e){return Object(d.jsx)("button",{className:"button",onClick:function(){return t(e)},children:e},e)}))]})]})},b=a(17),j=function(e){var t=e.src,a=e.modelName,n=Object(s.useState)(!1),r=Object(i.a)(n,2),c=r[0],o=r[1],l=Object(s.useState)(null),m=Object(i.a)(l,2),j=m[0],u=m[1];return Object(s.useEffect)((function(){window.addEventListener("message",(function(e){e.data&&"iframe"===e.data.from&&u(e.data.msg)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"AR.js embbeded in React app by iframe"}),j&&Object(d.jsxs)("span",{children:["Msg from iframe: ",j]}),Object(d.jsxs)("div",{id:"iframe-container",children:[Object(d.jsxs)("div",{id:"question",className:c?"show":"",children:[Object(d.jsx)("p",{children:"Question 1."}),Object(d.jsx)("p",{children:"How many moons does mars has?"}),Object(d.jsx)("div",{className:"answer-button-wrapper",children:Array(4).fill().map((function(e,t){return Object(d.jsx)("button",{className:"answer-button button",type:"input",children:t},t)}))}),Object(d.jsxs)("button",{className:"button show-question-button",onClick:function(){o((function(e){return!e}))},children:["Show",Object(d.jsx)("br",{}),"Quiz"]})]}),Object(d.jsx)(b.a,{id:"iframe",src:a?"".concat(t,"?model=").concat(a):t})]})]})},u=a.p+"static/media/mars-badge.5d7c3826.png",h=(a(31),function(){return Object(d.jsx)("section",{id:"test-ui-look",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"badge",src:u,alt:"mars-badge"}),Object(d.jsx)("p",{children:"Mars is the fourth planet from the Sun \u2013 a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past."})]})})}),p=(a(32),a(38),a(40),a(5)),x=a.p+"static/media/sun_small.dd23b4a7.glb",O=a.p+"static/media/mercury_small_brighten.0f6add62.glb",f=a.p+"static/media/venus_small.ba5eb1dc.glb",v=a.p+"static/media/mars_small.8e7916d3.glb",g=function(){return Object(d.jsxs)(p.Scene,{"vr-mode-ui":"enabled: false",embedded:!0,className:"a-scene",children:[Object(d.jsx)(p.Entity,{id:"camera",camera:{active:!0},position:"0 5 0","orbit-controls":{target:"0 0 0",enableDamping:!0,dampingFactor:.25,autoRotate:!1,rotateSpeed:.16,minDistance:3,maxDistance:15},children:Object(d.jsx)("a-light",{type:"ambient",position:"0 0 0",color:"#fff",intensity:"1.0"})}),Object(d.jsx)(p.Entity,{id:"mouseCursor",cursor:{rayOrigin:"mouse"}}),Object(d.jsx)(p.Entity,{id:"sun","gltf-model":x,position:"0 0 0",scale:"2.4 2.4 2.4",class:"clickable","gesture-handler":!0}),Object(d.jsx)(p.Entity,{id:"mercury","gltf-model":O,position:"16 0 0",scale:"0.15 0.15 0.15",class:"clickable","gesture-handler":!0}),Object(d.jsx)(p.Entity,{id:"venus","gltf-model":f,position:"20 0 0",scale:"0.372 0.372 0.372",class:"clickable","gesture-handler":!0}),Object(d.jsx)(p.Entity,{id:"mars","gltf-model":v,position:"36 0 0",scale:"0.29 0.29 0.29",class:"clickable","gesture-handler":!0}),Object(d.jsx)("a-sky",{color:"#000000"}),Object(d.jsx)(p.Entity,{"star-system":{count:1e3,radius:250,depth:0,size:.5}})]})};a(41);var y=function(){var e=Object(s.useState)("mars"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{setModelName:n}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:["/","/vr"],children:Object(d.jsx)(j,{src:"./vr.html",modelName:a})}),Object(d.jsx)(o.a,{exact:!0,path:"/ar",children:Object(d.jsx)(j,{src:"./ar.html",modelName:a})}),Object(d.jsx)(o.a,{exact:!0,path:"/ar_no_marker",children:Object(d.jsx)(j,{src:"./ar_no_marker.html",modelName:a})}),Object(d.jsx)(o.a,{exact:!0,path:"/test_ui_look",children:Object(d.jsx)(h,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/aframe_vr",children:Object(d.jsx)(g,{})})]})]})};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(l.a,{basename:"/react-aframe-spike",children:Object(d.jsx)(y,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d8e47220.chunk.js.map