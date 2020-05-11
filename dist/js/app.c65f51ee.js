(function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],p=0,v=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("8c4f"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"app"}},[r("mvHeader"),r("v-content",{staticClass:"mx-5 mb-4 my-6"},[r("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},e._l(e.links,(function(t){return r("v-list-item",{key:t.text,attrs:{router:"",to:t.route},on:{click:function(t){e.drawer=!1}}},[r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.text))])],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",color:"success",light:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-spacer"),r("v-toolbar-title",{staticClass:"white--text font-weight-light center"},[e._v("MOVIE")]),r("v-toolbar-title",{staticClass:"white--text font-weight-bold"},[e._v("VUER")])],1)],1)},s=[],u=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),l=r("2f62");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={data:function(){return{selectedGenre:"",links:[{icon:"mdi-thumb-up-outline",text:"Popular Movies",route:"/popular"},{icon:"mdi-skip-forward-outline",text:"Upcoming Movies",route:"/upcoming"},{icon:"mdi-drama-masks",text:"Browse by Genre",route:"/genre"},{icon:"mdi-information-outline",text:"About",route:"/about"}],drawer:!1}},mounted:function(){this.$store.dispatch("getGenres")},props:["source"],computed:v({},Object(l["b"])(["genres"]))},b=f,g=r("2877"),m=r("6544"),d=r.n(m),h=r("40dc"),O=r("5bc1"),j=r("132d"),y=r("8860"),w=r("da13"),P=r("1800"),_=r("5d23"),M=r("f774"),C=r("2fa4"),E=r("2a7f"),x=Object(g["a"])(b,c,s,!1,null,null,null),S=x.exports;d()(x,{VAppBar:h["a"],VAppBarNavIcon:O["a"],VIcon:j["a"],VList:y["a"],VListItem:w["a"],VListItemAction:P["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VNavigationDrawer:M["a"],VSpacer:C["a"],VToolbarTitle:E["a"]});var V={name:"app",components:{mvHeader:S}},k=V,D=r("7496"),G=r("a75b"),$=Object(g["a"])(k,a,i,!1,null,null,null),I=$.exports;d()($,{VApp:D["a"],VContent:G["a"]});r("99af"),r("d3b7");var T=r("3835");n["a"].use(l["a"]);var L="https://api.themoviedb.org/3",N="85c2a7cfb3c501f6918366050b39a378",B=new l["a"].Store({state:{popularMovies:[],upcomingMovies:[],genreMovies:[],genres:[]},actions:{getMovies:function(e,t){var r=e.commit,n=Object(T["a"])(t,2),o=n[0],a=n[1];fetch("".concat(L,"/movie/").concat(o,"?api_key=").concat(N,"&language=en-US&page=").concat(a)).then((function(e){return e.json()})).then((function(e){var t=e;"popular"==o?r("SET_POPULAR",t):"upcoming"==o&&r("SET_UPCOMING",t)})).catch((function(e){alert(e)}))},getMovieByGenre:function(e,t){var r=e.commit,n=Object(T["a"])(t,2),o=n[0],a=n[1];fetch("".concat(L,"/discover/movie?api_key=").concat(N,"&with_genres=").concat(o,"&page=").concat(a)).then((function(e){return e.json()})).then((function(e){var t=e;r("SET_MOVIE_BY_GENRE",t)})).catch((function(e){alert(e)}))},getGenres:function(e){var t=e.commit;fetch("".concat(L,"/genre/movie/list?api_key=").concat(N,"&language=en-US")).then((function(e){return e.json()})).then((function(e){var r=e.genres;t("SET_GENRE",r)})).catch((function(e){alert(e)}))}},mutations:{SET_POPULAR:function(e,t){e.popularMovies=t},SET_UPCOMING:function(e,t){e.upcomingMovies=t},SET_MOVIE_BY_GENRE:function(e,t){e.genreMovies=t},SET_GENRE:function(e,t){e.genres=t}}}),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popular"},[r("h1",{staticClass:"headline font-weight-light"},[e._v("Popular Movies")]),r("mvMovieList"),r("mvPagination",{attrs:{page:e.page,totalNumOfPages:e.popularMovies.total_pages,requestingComponent:this.$route.path}})],1)},A=[];function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H={data:function(){return{page:1}},computed:q({},Object(l["b"])(["popularMovies"]))},J=H,Y=Object(g["a"])(J,R,A,!1,null,null,null),z=Y.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"upcoming"},[r("h1",{staticClass:"headline font-weight-light"},[e._v("Upcoming Movies")]),r("mvMovieList"),r("mvPagination",{attrs:{"v-model":e.page,totalNumOfPages:e.upcomingMovies.total_pages,requestingComponent:this.$route.path}})],1)},K=[];function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X={data:function(){return{page:1}},computed:W({},Object(l["b"])(["upcomingMovies"]))},Z=X,ee=Object(g["a"])(Z,F,K,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popular"},[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"5"}},[r("h1",{staticClass:"headline font-weight-light"},[e._v("Browse by Genre")])]),r("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"2"}},[r("v-select",{attrs:{items:e.genres,name:"genre","item-text":"name","item-value":"id",label:"Select a Genre",color:"light-green"},model:{value:e.selectedGenre,callback:function(t){e.selectedGenre=t},expression:"selectedGenre"}})],1)],1),r("mvMovieList",{attrs:{selectedGenre:e.selectedGenre}}),r("mvPagination",{attrs:{page:e.page,totalNumOfPages:e.genreMovies.total_pages,requestingComponent:this.selectedGenre}})],1)},ne=[],oe=new n["a"];function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={data:function(){return{selectedGenre:"",page:1}},watch:{selectedGenre:function(e,t){e!==t&&(this.page=1,this.$store.dispatch("getMovieByGenre",[this.selectedGenre,1]),oe.$emit("genreChanged",this.page))}},computed:ie({},Object(l["b"])(["genres"]),{},Object(l["b"])(["genreMovies"]))},se=ce,ue=r("62ad"),le=r("0fd9"),pe=r("b974"),ve=Object(g["a"])(se,re,ne,!1,null,null,null),fe=ve.exports;d()(ve,{VCol:ue["a"],VRow:le["a"],VSelect:pe["a"]});var be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"headline font-weight-light"},[e._v("About")]),r("p",[e._v("This page uses the MovieDB API and was build by "),r("a",{attrs:{href:"marius.gessler",target:"_blank"}},[e._v("Marius Gessler.")])])])}],me={},de=Object(g["a"])(me,be,ge,!1,null,null,null),he=de.exports,Oe=[{path:"/popular",component:z},{path:"/upcoming",component:te},{path:"/genre",component:fe},{path:"/about",component:he},{path:"/",redirect:"/popular"}],je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-container",{staticClass:"my-5"},["/popular"==this.$route.path?r("v-row",{attrs:{justify:"center"}},e._l(e.popularMovies.results,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12"}},[r("mvMovieCard",{attrs:{movies:e}})],1)})),1):"/upcoming"==this.$route.path?r("v-row",{attrs:{justify:"center"}},e._l(e.upcomingMovies.results,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12"}},[r("mvMovieCard",{attrs:{movies:e}})],1)})),1):"/genre"==this.$route.path?r("v-row",{attrs:{justify:"center"}},e._l(e.genreMovies.results,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12"}},[r("mvMovieCard",{attrs:{movies:e}})],1)})),1):e._e()],1)],1)},ye=[],we=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{"max-width":"600px",light:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between mobile-card"},[r("div",{staticClass:"info-container"},[r("div",[r("v-card-title",{staticClass:"headline ",domProps:{textContent:e._s(e.movies.title)}}),r("v-card-subtitle",{staticClass:"overline ",domProps:{textContent:e._s("Rating:"+e.movies.vote_average+"/10")}})],1),r("v-card-subtitle",{staticClass:"pt-0",domProps:{textContent:e._s(e.movies.overview)}}),r("v-card-action",[r("v-btn",{attrs:{block:"",elevation:"",text:"",color:"success",href:e.moreInfoLink}},[e._v(" More Info ")])],1)],1),r("v-img",{attrs:{src:e.posterPath,"max-width":"150px"}})],1)])},Pe=[];function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ce={props:["movies"],data:function(){return{posterPath:"https://image.tmdb.org/t/p/w500/".concat(this.movies.poster_path),moreInfoLink:"https://www.themoviedb.org/movie/".concat(this.movies.id)}},computed:Me({},Object(l["b"])(["genres"]))},Ee=Ce,xe=(r("64aa"),r("8336")),Se=r("b0af"),Ve=r("99d9"),ke=r("adda"),De=Object(g["a"])(Ee,we,Pe,!1,null,null,null),Ge=De.exports;function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}d()(De,{VBtn:xe["a"],VCard:Se["a"],VCardSubtitle:Ve["a"],VCardTitle:Ve["b"],VImg:ke["a"]});var Te={beforeMount:function(){this.$store.dispatch("getMovies",["popular",1]),this.$store.dispatch("getMovies",["upcoming",1])},components:{mvMovieCard:Ge},props:["selectedGenre"],computed:Ie({},Object(l["b"])(["popularMovies"]),{},Object(l["b"])(["upcomingMovies"]),{},Object(l["b"])(["genreMovies"]))},Le=Te,Ne=r("a523"),Be=r("a722"),Re=Object(g["a"])(Le,je,ye,!1,null,null,null),Ae=Re.exports;d()(Re,{VCol:ue["a"],VContainer:Ne["a"],VLayout:Be["a"],VRow:le["a"]});var Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("v-pagination",{attrs:{length:e.totalNumOfPages},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}},[e._v(e._s(e.page))])],1)},qe=[],He={data:function(){return{page:1}},props:["totalNumOfPages","requestingComponent"],watch:{page:function(){var e=this;"/popular"===this.requestingComponent?this.$store.dispatch("getMovies",["popular",this.page]):"/upcoming"===this.requestingComponent?this.$store.dispatch("getMovies",["upcoming",this.page]):(oe.$on("genreChanged",(function(){e.page=1})),this.$store.dispatch("getMovieByGenre",[this.requestingComponent,this.page]))}}},Je=He,Ye=r("891e"),ze=Object(g["a"])(Je,Ue,qe,!1,null,null,null),Fe=ze.exports;d()(ze,{VPagination:Ye["a"]});var Ke=r("f309");r("5363");n["a"].use(Ke["a"],{theme:{}});var Qe=new Ke["a"]({});n["a"].use(o["a"]),n["a"].component("mvMovieList",Ae),n["a"].component("mvPagination",Fe);var We=new o["a"]({mode:"history",routes:Oe});new n["a"]({el:"#app",router:We,store:B,vuetify:Qe,render:function(e){return e(I)}}).$mount("#app")},"5b2d":function(e,t,r){},"64aa":function(e,t,r){"use strict";var n=r("5b2d"),o=r.n(n);o.a}});
//# sourceMappingURL=app.c65f51ee.js.map