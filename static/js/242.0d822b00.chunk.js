"use strict";(self.webpackChunkMovie_Box=self.webpackChunkMovie_Box||[]).push([[242],{9688:function(n,t,e){e.d(t,{X:function(){return c}});var i,r=e(6907),s=e(168),o=e(9202).Z.button(i||(i=(0,s.Z)(["\n  /* position: absolute; */\n  top: 30px;\n  width: 80px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  color: #f33f3f;\n"]))),a=(e(2791),e(184)),c=function(){return(0,a.jsxs)(o,{children:[(0,a.jsx)(r.YNj,{}),(0,a.jsx)("p",{children:"Go back"})]})}},3957:function(n,t,e){e.d(t,{C8:function(){return Z},Dx:function(){return g},EF:function(){return k},Ee:function(){return v},Mo:function(){return b},Pz:function(){return y},TO:function(){return m},W2:function(){return h},aV:function(){return w},mo:function(){return j}});var i,r,s,o,a,c,l,d,f,u,x=e(168),p=e(9202),h=p.Z.div(i||(i=(0,x.Z)(["\n  /* padding: 60px; */\n  /* width: 580px; */\n"]))),m=p.Z.div(r||(r=(0,x.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 45px;\n  margin-bottom: 45px;\n  border: 1px solid gray;\n  border-radius: 8px;\n"]))),j=p.Z.div(s||(s=(0,x.Z)(["\n  /* width: 100%; */\n  width: 645px;\n  /* padding: 15px;\n  padding-right: 35px; */\n"]))),v=p.Z.img(o||(o=(0,x.Z)(["\n  width: 300px;\n  height: 475px;\n"]))),g=p.Z.h2(a||(a=(0,x.Z)(["\n  font-size: 36px;\n  margin-bottom: 10px;\n  font-family: 'Lato', sans-serif;\n"]))),b=p.Z.h2(c||(c=(0,x.Z)(["\n  font-size: 26px;\n  margin-bottom: 10px;\n  font-family: 'Lato', sans-serif;\n"]))),Z=p.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  /* width: 131px; */\n  /* height: 95px; */\n  border: 1px solid #a41b1b;\n  border-radius: 8px;\n  text-align: center;\n  padding: 15px;\n  background-color: #3b3b3b;\n\n  p {\n    display: block;\n    font-size: 24px;\n    margin-bottom: auto;\n  }\n  h3 {\n    font-size: 48px;\n    color: #f33f3f;\n  }\n"]))),y=p.Z.p(d||(d=(0,x.Z)(["\n  font-family: 'Lato', sans-serif;\n  font-size: 18px;\n  line-height: 2.5cap;\n  margin-bottom: 25px;\n"]))),w=p.Z.ul(f||(f=(0,x.Z)(["\n  display: flex;\n  gap: 15px;\n  font-family: 'Lato', sans-serif;\n\n  li:not(:last-child) {\n  }\n\n  li:last-child {\n    margin-right: 25px;\n  }\n"]))),k=p.Z.li(u||(u=(0,x.Z)(["\n  font-family: 'Lato', sans-serif;\n  font-size: 24px;\n  a {\n    :active {\n      color: #f33f3f;\n    }\n    :hover {\n      color: #f33f3f;\n    }\n  }\n"])))},9838:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var i=e(5861),r=e(9439),s=e(4687),o=e.n(s),a=e(2791),c=e(9545),l=e(8549),d=e(9688);function f(n){if(isNaN(n)||n<0)return"Invalid input";var t=Math.floor(n/60),e=n%60;return"".concat(t,"hr"," : ").concat(e,"min")}var u=e(7351),x=e(1574),p=e(851),h=e(3957),m=e(4420),j=e(9869),v=e(184),g=function(n){var t=n.card,e=n.isAdded,i=t.id,s=t.title,o=t.poster_path,c=t.release_date,l=t.overview,d=t.genres,g=t.runtime,b=t.vote_count,Z=o,y=c,w=(0,a.useState)("fdf"),k=(0,r.Z)(w,2),z=k[0],E=k[1],L=(0,m.I0)(),W=(0,m.v9)(j.hS);(0,a.useEffect)((function(){E(e?"Remove from wtchlist":"Add to Watchlist")}),[e]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(h.TO,{children:[o?(0,v.jsx)(h.Ee,{src:"".concat("https://image.tmdb.org/t/p/w200").concat(o),alt:s}):(0,v.jsx)(h.Ee,{src:u,alt:"No image"}),(0,v.jsxs)(h.mo,{children:[(0,v.jsx)(h.Dx,{children:s}),(0,v.jsxs)("div",{style:{display:"flex",marginBottom:50,maxWidth:580},children:[(0,v.jsx)(h.aV,{children:d&&d.map((function(n){var t=n.id,e=n.name;return(0,v.jsxs)("li",{children:[" ",e]},t)}))}),(0,v.jsx)("p",{style:{color:"yellow"},children:f(g)})]}),(0,v.jsx)(h.Mo,{children:"Overview"}),(0,v.jsx)(h.Pz,{children:l}),(0,v.jsxs)("div",{style:{display:"flex",alignItems:"end",justifyContent:"space-between"},children:[(0,v.jsxs)(h.C8,{children:[(0,v.jsx)("p",{children:"Score"}),(0,v.jsx)("h3",{children:b})]}),(0,v.jsx)(x.ax,{style:{width:239},onClick:function(){W&&("Add to Watchlist"===z?(L((0,p.dO)({id:i,title:s,img:Z,relise:y})),E("Remove from Watchlist")):(L((0,p.gL)(i)),E("Add to Watchlist")))},children:z})]})]})]})})},b=e(5499),Z=e(7689),y=e(1087),w=(0,a.lazy)((function(){return e.e(72).then(e.bind(e,9072))})),k=(0,a.lazy)((function(){return e.e(733).then(e.bind(e,7733))})),z=function(){var n,t,e=(0,m.v9)(b.j),s=(0,a.useState)(!1),f=(0,r.Z)(s,2),u=f[0],x=f[1],p=(0,a.useState)({}),j=(0,r.Z)(p,2),z=j[0],E=j[1],L=(0,Z.UO)().movieId,W=(0,a.useState)(!1),A=(0,r.Z)(W,2),C=A[0],O=A[1],S=(0,Z.TH)(),I=(0,a.useRef)(null!==(n=null===(t=S.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,a.useEffect)((function(){var n=parseInt(L,10),t=e.some((function(t){return t.id===n}));O(t)}),[L,e]),(0,a.useEffect)((function(){function n(){return(n=(0,i.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(L){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,(0,c.TP)(L);case 5:t=n.sent,E(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:return n.prev=12,x(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})))).apply(this,arguments)}x(!0),function(){n.apply(this,arguments)}()}),[L,e]),(0,v.jsxs)(h.W2,{children:[(0,v.jsx)(y.rU,{to:I.current,children:(0,v.jsx)(d.X,{})}),u&&(0,v.jsx)(l.T,{}),(0,v.jsx)(g,{card:z,isAdded:C}),(0,v.jsxs)(h.aV,{style:{marginBottom:25},children:[(0,v.jsx)(h.EF,{children:(0,v.jsx)(y.OL,{to:"cast",children:"Cast"})}),(0,v.jsx)(h.EF,{children:(0,v.jsx)(y.OL,{to:"reviews",children:"Reviews"})})]}),(0,v.jsxs)(a.Suspense,{fallback:(0,v.jsx)("div",{children:"Is Loading..."}),children:[(0,v.jsx)(Z.j3,{}),(0,v.jsxs)(Z.Z5,{children:[(0,v.jsx)(Z.AW,{path:"cast",element:(0,v.jsx)(k,{})}),(0,v.jsx)(Z.AW,{path:"reviews",element:(0,v.jsx)(w,{})})]})]})]})}},5499:function(n,t,e){e.d(t,{j:function(){return i}});var i=function(n){return n.watchlist.watchlist}},7351:function(n,t,e){n.exports=e.p+"static/media/no-available-image.0ee629d08e998d7c4c0d.png"}}]);
//# sourceMappingURL=242.0d822b00.chunk.js.map