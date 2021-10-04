(this["webpackJsonpdrumachine-app"]=this["webpackJsonpdrumachine-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var o=a(1),c=a.n(o),n=a(5),r=a.n(n),d=(a(10),a(2)),s=a(4),m=(a(11),a(0)),u={heaterKit:"Heater Kit",smoothPianoKit:"Smooth Piano Kit"},i={heaterKit:[{keyCode:81,key:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,key:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,key:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,key:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,key:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,key:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,key:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,key:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,key:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],smoothPianoKit:[{keyCode:81,key:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,key:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,key:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,key:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,key:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,key:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,key:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,key:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,key:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]},p=function(e){var t=e.play,a=e.deactivateAudio,c=e.sound,n=c.id,r=c.key,d=c.url,s=c.keyCode,u=function(e){if(s===e.keyCode){var o=document.getElementById(r);t(r,n),a(o)}};return Object(o.useEffect)((function(){document.addEventListener("keydown",u)}),[]),Object(m.jsxs)("button",{value:"test",id:s,className:"drum-pad",onClick:function(){return t(r,n)},children:[Object(m.jsx)("audio",{className:"clip",src:d,id:r}),r]})},l=function(e){var t=e.sounds,a=e.play,o=e.power,c=e.deactivateAudio;return Object(m.jsx)("div",{className:"keyboard",children:o?t.map((function(e){return Object(m.jsx)(p,{sound:e,play:a,deactivateAudio:c})})):t.map((function(e){return Object(m.jsx)(p,{sound:Object(s.a)(Object(s.a)({},e),{},{url:"#"}),play:a,deactivateAudio:c})}))})},h=function(e){var t=e.stop,a=e.name,o=e.power,c=e.volume,n=e.handleVolumeChange,r=e.changeSoundGroup;return Object(m.jsxs)("div",{className:"controle",children:[Object(m.jsxs)("button",{onClick:t,children:["Turn Power ",o?"OFF":"ON"]}),Object(m.jsxs)("h2",{children:["Volume: %",Math.round(100*c)]}),Object(m.jsx)("input",{max:"1",min:"0",step:"0.01",type:"range",value:c,onChange:n}),Object(m.jsx)("h2",{id:"display",children:a}),Object(m.jsx)("button",{onClick:r,children:"Change Sounds Group"})]})},y=function(){var e=Object(o.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(o.useState)(1),r=Object(d.a)(n,2),s=r[0],p=r[1],y=Object(o.useState)(""),k=Object(d.a)(y,2),j=k[0],f=k[1],C=Object(o.useState)("heaterKit"),b=Object(d.a)(C,2),O=b[0],v=b[1],w=Object(o.useState)(i[O]),H=Object(d.a)(w,2),g=H[0],_=H[1],x=function(e){setTimeout((function(){e.parentElement.style.backgroundColor="#F2F4F6",e.parentElement.style.color="#000000"}),300)};return Object(m.jsxs)("div",{id:"drum-machine",children:[void g.map((function(e){return document.getElementById(e.key)})).forEach((function(e){e&&(e.volume=s)})),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(l,{sounds:g,play:function(e,t){f(t);var a=document.getElementById(e);!function(e){e.parentElement.style.backgroundColor="#FB7813",e.parentElement.style.color="#C4FB6D"}(a),a.currentTime=0,a.play(),x(a)},power:a,deactivateAudio:x}),Object(m.jsx)(h,{stop:function(){c(!a)},power:a,volume:s,name:j||u[O],changeSoundGroup:function(){f(""),"heaterKit"===O?(v("smoothPianoKit"),_(i.smoothPianoKit)):(v("heaterKit"),_(i.heaterKit))},handleVolumeChange:function(e){p(e.target.value)}})]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,o=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),o(e),c(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),k()}},[[13,1,2]]]);
//# sourceMappingURL=main.de21f5ca.chunk.js.map