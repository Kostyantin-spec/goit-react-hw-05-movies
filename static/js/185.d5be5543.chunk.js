"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[185],{304:function(e,t,n){n.d(t,{Hg:function(){return u},M1:function(){return d},TP:function(){return l},Ui:function(){return o},tx:function(){return p}});var r=n(861),a=n(757),s=n.n(a),c=n(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="82b15f29a57dd2f4f8de80b94d94c598",u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("serch/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},185:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(689),u=n(87),o=n(791),l=n(304),p=n(807),d="moviesDetails_list__j6pib",f="moviesDetails_items__85CIs",v="moviesDetails_link__ZWCT0",h="moviesDetails_btn__wd-co",m=n(184),x=function(){var e,t,n=(0,i.UO)().movieId,s=(0,o.useState)(""),x=(0,a.Z)(s,2),g=x[0],_=x[1],j=(0,o.useState)(!1),w=(0,a.Z)(j,2),k=w[0],b=w[1],Z=(0,i.TH)(),y=(0,o.useRef)(null!==(e=null===(t=Z.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,l.TP)(n);case 4:t=e.sent,_(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var U=g.poster_path,N=g.original_title,S=g.genres,C=g.vote_average,D=g.overview;return(0,m.jsxs)("div",{children:[(0,m.jsx)(u.rU,{to:y.current,children:(0,m.jsx)("button",{type:"button",className:h,children:"Go back"})}),k&&(0,m.jsx)(p.a,{}),(0,m.jsx)("div",{children:(0,m.jsx)("img",{width:"300px",alt:N,src:"".concat(U?"https://image.tmdb.org/t/p/w500/".concat(U):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700")})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:N}),(0,m.jsxs)("p",{children:["Rating: ",Math.round(C)]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:D}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{className:d,children:null===S||void 0===S?void 0:S.map((function(e){return(0,m.jsx)("li",{className:f,children:e.name},e.id)}))})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{className:d,children:[(0,m.jsx)("li",{className:v,children:(0,m.jsx)(u.rU,{to:"cast",state:{from:Z},children:"Cast"})}),(0,m.jsx)("li",{className:v,children:(0,m.jsx)(u.rU,{to:"reviews",state:{from:Z},children:"Reviews"})})]})]}),(0,m.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=185.d5be5543.chunk.js.map