"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,n){n.r(t);var a=n(439),r=n(689),c=n(791),i=n(184);t.default=function(){var e=(0,r.UO)().movieId,t=(0,c.useState)(null),n=(0,a.Z)(t,2),s=n[0],o=n[1],h=(0,c.useState)(!0),u=(0,a.Z)(h,2),l=u[0],p=u[1];return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=31c7a05a32884484d4b383be2a7a18a3")).then((function(e){return e.json()})).then((function(e){o(e)})).finally((function(){p(!1)}))}),[e]),(0,i.jsx)(i.Fragment,{children:l?(0,i.jsx)("p",{children:"Loading..."}):s&&s.cast.map((function(e){var t=e.id,n=e.profile_path,a=e.name,r=e.character;return(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+n,alt:"Actor Img"}),(0,i.jsx)("p",{children:a}),(0,i.jsxs)("p",{children:["Character: ",(0,i.jsx)("span",{children:r||"-"})]})]},t)}))})}}}]);
//# sourceMappingURL=115.c0e5f5be.chunk.js.map