"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(e,n,t){t.r(n);var a=t(439),r=t(689),i=t(87),l=t(791),c=t(184);n.default=function(){var e=(0,r.TH)(),n=(0,l.useState)(null),t=(0,a.Z)(n,2),u=t[0],o=t[1],s=(0,l.useState)(!0),h=(0,a.Z)(s,2),d=h[0],f=h[1];return(0,l.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=31c7a05a32884484d4b383be2a7a18a3").then((function(e){return e.json()})).then((function(e){o(e.results)})).finally((function(){f(!1)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Trending today"}),(0,c.jsx)("ul",{children:d?(0,c.jsx)("p",{children:"Loading..."}):u&&u.map((function(n){var t=n.id,a=n.name,r=n.title;return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{to:"movies/".concat(t),state:{from:e},children:null!==r&&void 0!==r?r:a})},t)}))})]})}}}]);
//# sourceMappingURL=415.69a4d8ef.chunk.js.map