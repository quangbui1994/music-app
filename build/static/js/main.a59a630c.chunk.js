(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{12:function(e,t,a){e.exports={Home:"Home_Home__Hrybx",heroImage:"Home_heroImage__3r1dx",songImage:"Home_songImage__3RkUh",rotating:"Home_rotating__2MPNV",modalContainer:"Home_modalContainer__JKQRP","modal-enter":"Home_modal-enter__hxWVn","modal-enter-active":"Home_modal-enter-active__32D6r","modal-exit":"Home_modal-exit__pHyqC","modal-exit-active":"Home_modal-exit-active__15962"}},16:function(e,t,a){e.exports={SongItem:"SongItem_SongItem__2spQC",songImage:"SongItem_songImage__OugUL",title:"SongItem_title__2cK9h",artist:"SongItem_artist__1HsQ7",icon:"SongItem_icon__3_wOv",playIcon:"SongItem_playIcon__7sEWP"}},18:function(e,t,a){e.exports={Login:"Login_Login__1ujut",submitButton:"Login_submitButton__1go-i",error:"Login_error__17Wu6"}},22:function(e,t,a){e.exports={TopBar:"TopBar_TopBar__2m4qr",searchIcon:"TopBar_searchIcon__-I_65",searchField:"TopBar_searchField__3Sxlf",auth:"TopBar_auth__192iU"}},23:function(e,t,a){e.exports={playGround:"SongList_playGround__2-hG8",callout:"SongList_callout__1f3UM",discover:"SongList_discover__3opQX",songContainer:"SongList_songContainer__1axJd"}},25:function(e,t,a){e.exports={SideBar:"SideBar_SideBar__ZWmGg",logo:"SideBar_logo__2xyb0",icon:"SideBar_icon__3cR0X"}},41:function(e,t,a){e.exports=a.p+"static/media/audio-e-guitars-guitars-music-6966.b82cedb3.jpg"},43:function(e,t,a){e.exports=a(73)},6:function(e,t,a){e.exports={PlayerHolder:"Player_PlayerHolder__3DHUB",songHolder:"Player_songHolder__3TYGJ",playButton:"Player_playButton__3itnf",volumeHandler:"Player_volumeHandler__1TnQF",player:"Player_player__2p7ty",loop:"Player_loop__3bsY8",stop:"Player_stop__3HK_B",unLoop:"Player_unLoop__3TDRi",unStop:"Player_unStop__3QmKj",imgCover:"Player_imgCover__3c9G2",songDetails:"Player_songDetails__3EqaY",songName:"Player_songName__1aMBY",songArtist:"Player_songArtist__1341u"}},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(3),u=a.n(l),s=a(5),i=a(4),m=a(12),p=a.n(m),d=a(13),v=a.n(d),f=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://deezerdevs-deezer.p.rapidapi.com/search",a={"content-type":"application/octet-stream","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"c6c7e08e51msh4f4bc912554a897p1d68a8jsndda3de7e4c6f"},n={q:t},e.next=5,v.a.get("https://deezerdevs-deezer.p.rapidapi.com/search",{headers:a,params:n});case 5:return e.next=7,e.sent.data.data;case 7:return r=e.sent,console.log(r),c=r.map((function(e){return{name:e.title,artist:e.artist.name,smallImage:e.album.cover_small,bigImage:e.album.cover_big,mediumImage:e.album.cover_medium,preview:e.preview}})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=a(22),_=a.n(g),b=a(8),O=a(11),h=a(2),E=r.a.createContext({auth:!1,setAuth:function(e){}}),j=function(e){var t=e.children,a={auth:""!==localStorage.getItem("auth"),setAuth:function(e){u(Object(h.a)(Object(h.a)({},l),{},{auth:e}))}},c=Object(n.useState)(a),o=Object(i.a)(c,2),l=o[0],u=o[1];return r.a.createElement(E.Provider,{value:l},t)},y=function(e){var t=e.onSearch,a=e.onClick,c=Object(n.useContext)(E),o=Object(n.useState)(""),l=Object(i.a)(o,2),m=l[0],p=l[1],d=Object(n.useRef)(null),v=function(){var e=Object(s.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(m),p(""),null===(n=d.current)||void 0===n||n.focus();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:_.a.TopBar},r.a.createElement("form",{onSubmit:v},r.a.createElement("label",null,r.a.createElement(b.a,{icon:O.d,className:_.a.searchIcon})),r.a.createElement("input",{ref:d,placeholder:"Search here",className:_.a.searchField,type:"text",value:m,onChange:function(e){return p(e.target.value)}}),r.a.createElement("span",{className:_.a.auth,onClick:a},c.auth?"Log out":"Log in")))},S=a(15),x=a(75),w=a(41),N=a.n(w),k=a(6),P=a.n(k),I=a(17),C=r.a.createContext({sound:new I.Howl({}),setSound:function(e){}}),H=function(e){var t=e.children,a={sound:new I.Howl({}),setSound:function(e){u(Object(h.a)(Object(h.a)({},a),{},{sound:e}))}},c=Object(n.useState)(a),o=Object(i.a)(c,2),l=o[0],u=o[1];return r.a.createElement(C.Provider,{value:l},t)},L=Object(S.b)((function(e){return{app:e.app}}),(function(e){return{tooglePlay:function(){return e({type:"TOOGLE_PLAY"})},stopPlay:function(){return e({type:"STOP_PLAY"})}}}))((function(e){var t,a,c,o=e.app,l=e.tooglePlay,u=e.stopPlay,s=Object(n.useState)(0),m=Object(i.a)(s,2),p=m[0],d=m[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),g=f[0],_=f[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),j=E[0],y=E[1],S=Object(n.useContext)(C);return requestAnimationFrame((function e(){d(o.playing?S.sound.seek():p),requestAnimationFrame(e)})),o.currentSong?r.a.createElement("div",{className:P.a.PlayerHolder},r.a.createElement("div",{className:P.a.songHolder},r.a.createElement("div",{className:P.a.imgCover,style:{backgroundImage:"url(".concat(null===(t=o.currentSong)||void 0===t?void 0:t.smallImage,")")}}),r.a.createElement("div",{className:P.a.songDetails},r.a.createElement("div",{className:P.a.songName},null===(a=o.currentSong)||void 0===a?void 0:a.name),r.a.createElement("div",{className:P.a.songArtist},null===(c=o.currentSong)||void 0===c?void 0:c.artist))),r.a.createElement("div",{className:P.a.playButton,onClick:function(){var e,t;o.playing?null===(e=S.sound)||void 0===e||e.pause():(null===(t=S.sound)||void 0===t||t.play(),y(!1));l()}},r.a.createElement(b.a,{icon:o.playing?O.b:O.c})),r.a.createElement("div",{className:P.a.volumeHandler},r.a.createElement(b.a,{icon:O.g})),r.a.createElement("div",{className:P.a.player},r.a.createElement("progress",{id:"file",value:p,max:"100"}),r.a.createElement(b.a,{icon:O.f,className:g?P.a.loop:P.a.unLoop,onClick:function(){var e;g?S.sound.loop(!1):null===(e=S.sound)||void 0===e||e.loop();_(!g)}}),r.a.createElement(b.a,{icon:O.e,className:j?P.a.stop:P.a.unStop,onClick:function(){var e;j||(null===(e=S.sound)||void 0===e||e.stop(),u());y(!j)}}))):null})),B=a(25),A=a.n(B),T=a(21),G=function(e){var t=e.onClick,a=Object(n.useContext)(E);return r.a.createElement("div",{className:A.a.SideBar},r.a.createElement("div",{className:A.a.logo}),a.auth&&r.a.createElement(b.a,{className:A.a.icon,size:"lg",icon:T.a,onClick:t}))},Y=a(24),z=a(18),D=a.n(z),F=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat("/auth","/login"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat("/auth","/logout"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){var t=e.closeModal,a=Object(n.useContext)(E),c=function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],c=a[1];return[r,function(e){c(Object(h.a)(Object(h.a)({},r),{},Object(Y.a)({},e.target.id,e.target.value)))}]}({Email:"",Password:""}),o=Object(i.a)(c,2),l=o[0],m=o[1],p=Object(n.useState)({Email:"",Password:""}),d=Object(i.a)(p,2),v=d[0],f=d[1],g=Object(n.useState)(!1),_=Object(i.a)(g,2),b=_[0],O=_[1];!function(e,t){var a=Object(n.useRef)(!1);Object(n.useEffect)((function(){a.current?e():a.current=!0}),t)}((function(){O(Object.values(v).every((function(e){return""===e}))&&Object.keys(l).every((function(e){return l[e]})))}),[v]);var j=function(e){m(e);var t=e.target,a=t.value;switch(t.id){case"Email":y(a);break;case"Password":S(a);break;default:return}},y=function(e){var t=/@gmail\.com$/.test(e);return f(t?Object(h.a)(Object(h.a)({},v),{},{Email:""}):Object(h.a)(Object(h.a)({},v),{},{Email:"Email contains only 5 to 10 words or numbers"})),t},S=function(e){var t=/^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{5,}$/.test(e);return f(t?Object(h.a)(Object(h.a)({},v),{},{Password:""}):Object(h.a)(Object(h.a)({},v),{},{Password:"Password must contains at least 1 uppercase letter, 1 number and no special character"})),t},x=function(){var e=Object(s.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={email:l.Email,password:l.Password},e.prev=2,e.next=5,F(r);case 5:t(),a.setAuth(!0),localStorage.setItem("auth","true"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),w=Object.values(v).find((function(e){return""!==e})),N=r.a.createElement("div",{className:D.a.error},w);return r.a.createElement("div",{className:D.a.Login},r.a.createElement("form",{className:D.a.form,onSubmit:x},Object.keys(l).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("input",{value:l.field,id:e,type:"Password"===e?"password":"text",placeholder:e,onChange:j}),r.a.createElement("label",{className:D.a.label,htmlFor:e},e))})),r.a.createElement("button",{disabled:!b,className:D.a.submitButton,onClick:x},"Submit"),N))},M=(a(71),function(e){var t=e.onClick;return r.a.createElement("div",{className:"closeHolder",onClick:t},r.a.createElement("div",{className:"item"}))}),Q=a(23),J=a.n(Q),U=a(16),K=a.n(U),W=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/songs");case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{like:!0})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/songs",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat("/songs","/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=Object(S.b)(null,(function(e){return{playSong:function(t){return e(function(e){return{type:"PLAY_SONG",payload:e}}(t))}}}))((function(e){var t=e.song,a=e.playSong,c=Object(n.useContext)(C),o=Object(n.useContext)(E),l=Object(n.useState)(!!t.like),u=Object(i.a)(l,2),s=u[0],m=u[1];I.Howler.volume(.5);var p;return r.a.createElement("div",{className:K.a.SongItem},r.a.createElement("div",{className:K.a.songImage,style:{backgroundImage:"url(".concat(t.mediumImage,")")}},r.a.createElement("div",null,r.a.createElement(b.a,{icon:T.b,className:K.a.playIcon,onClick:function(){return function(e){var n=new I.Howl({src:e});console.log(e),n.play(),null===c||void 0===c||c.setSound(n),a(t)}(t.preview)}}))),r.a.createElement("div",{className:K.a.title},(p=t.name).length>18?p.slice(0,15).trim().concat("..."):p),r.a.createElement("div",{className:K.a.artist},t.artist),o.auth&&r.a.createElement(b.a,{icon:s?O.a:T.a,onClick:function(){s?V(t.id):Z(t),m(!s)},className:K.a.icon}))})),$=function(e){var t=e.songs;return 0!==t.length?r.a.createElement("div",{className:J.a.playGround},r.a.createElement("h3",{className:J.a.callout},"Start to"),r.a.createElement("h2",{className:J.a.discover},"Discover"),r.a.createElement("div",{className:J.a.songContainer},t.map((function(e,t){return r.a.createElement(X,{key:t,song:e})})))):null},ee=Object(S.b)((function(e){return{app:e.app}}))((function(e){var t,a=e.app,c=Object(n.useState)([]),o=Object(i.a)(c,2),l=o[0],m=o[1],d=Object(n.useState)(!1),v=Object(i.a)(d,2),g=v[0],_=v[1],b=Object(n.useContext)(E),O=Object(n.useRef)(null),h=Object(n.useRef)(null),j=function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:a=e.sent,m(a),S(O);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t;e.current&&window.scrollTo(0,null===(t=e.current)||void 0===t?void 0:t.offsetTop)},w=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W();case 3:t=e.sent,m(t),S(O),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=a.currentSong?r.a.createElement("div",{className:p.a.heroImage},r.a.createElement("div",{className:p.a.songImage,style:{backgroundImage:"url(".concat(null===(t=a.currentSong)||void 0===t?void 0:t.bigImage,")")}})):r.a.createElement("div",{className:p.a.heroImage,style:{backgroundImage:"url(".concat(N.a,")")}});return r.a.createElement("div",{className:p.a.Home},r.a.createElement(y,{onSearch:j,onClick:function(){b.auth?(R(),b.setAuth(!1),localStorage.setItem("auth","")):_(!0)}}),r.a.createElement(L,null),r.a.createElement(G,{onClick:w}),r.a.createElement(x.a,{unmountOnExit:!0,mountOnEnter:!0,timeout:300,in:g,classNames:{enter:p.a["modal-enter"],enterActive:p.a["modal-enter-active"],exit:p.a["modal-exit"],exitActive:p.a["modal-exit-active"]}},r.a.createElement("div",{className:p.a.modalContainer,ref:h},r.a.createElement("h2",null,"Log in"),r.a.createElement(M,{onClick:function(){return _(!1)}}),r.a.createElement(q,{closeModal:function(){return _(!1)}}))),k,r.a.createElement("div",{ref:O},r.a.createElement($,{songs:l})))})),te=function(){return r.a.createElement("div",null,r.a.createElement(ee,null))},ae=(a(72),a(20)),ne={currentSong:null,playing:!1},re=Object(ae.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_SONG":return Object(h.a)(Object(h.a)({},e),{},{currentSong:t.payload,playing:!0});case"TOOGLE_PLAY":case"STOP_PLAY":return Object(h.a)(Object(h.a)({},e),{},{playing:!e.playing});default:return e}}}),ce=Object(ae.c)(re);o.a.render(r.a.createElement(S.a,{store:ce},r.a.createElement(j,null,r.a.createElement(H,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null))))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a59a630c.chunk.js.map