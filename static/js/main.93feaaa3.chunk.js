(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/guitarBG.d9f88e45.jpg"},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(22),r=a.n(s),l=a(21),o=(a(30),a(6)),c=a(7),m=a(9),u=a(8),d=a(10),h=a(14),g=a(16),p=(a(35),a(37),function(){return i.a.createElement("section",{className:"landing",id:"landing"},i.a.createElement("section",{className:"landing"},i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement("ion-icon",{name:"medical"}),"About ")),i.a.createElement("div",{class:"row wrapper"},i.a.createElement("div",{className:"card text-white bg-dark "},i.a.createElement("h2",{className:"card-header"},i.a.createElement("ion-icon",{name:"musical-notes",large:!0})," Choose your music"),i.a.createElement("p",{className:"card-body alert-secondary"},"The world is full of music; why should you have to listen to music that someone else chose?")),i.a.createElement("div",{className:"card text-white bg-dark "},i.a.createElement("h2",{className:"card-header"},i.a.createElement("ion-icon",{name:"infinite"})," Unlimited, streaming, ad-free"),i.a.createElement("p",{className:"card-body alert-secondary"},"No arbitrary limits. No distractions.")),i.a.createElement("div",{className:"card text-white bg-dark"},i.a.createElement("h2",{className:"card-header"}," ",i.a.createElement("ion-icon",{name:"phone-portrait"})," Mobile enabled"),i.a.createElement("p",{className:"card-body alert-secondary"}," Listen to your music on the go. This streaming service is available on all mobile platforms.")))))}),v=a(13),E=[{title:"The Colors",artist:"Pablo Picasso",releaseInfo:"1909 Spanish Records",albumCover:"/assets/images/album_covers/01.jpg",slug:"the-colors",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]},{title:"The Telephone",artist:"Guglielmo Marconi",releaseInfo:"1909 EM",albumCover:"/assets/images/album_covers/02.jpg",slug:"the-telephone",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]}],f=(a(39),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={albums:E},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"library",id:"library"},i.a.createElement("div",{style:{backgroundColor:"#8b9183",color:"#fff",height:"4rem",paddingTop:"0.5rem"}},i.a.createElement("h1",null,i.a.createElement("ion-icon",{name:"medical"}),"music ")),this.state.albums.map(function(e,t){return i.a.createElement("div",{className:"card flex-row flex-wr",style:{width:"12rem",height:"12rem"}},i.a.createElement("img",{className:"card-img-top",src:e.albumCover,alt:e.title}),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{style:{width:"18rem"}},i.a.createElement("h4",{class:"card-title"},e.title)),i.a.createElement("div",{className:"card-text"},e.artist," | ",e.songs.length," songs"),i.a.createElement(v.a,{to:"/album/".concat(e.slug),key:t},i.a.createElement("div",{className:"btn btn-primary",style:{marginTop:"1rem"}},"View Album"))))}))}}]),t}(n.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"player-bar"},i.a.createElement("section",{id:"buttons",style:{display:"flex",justifyContent:"center"}},i.a.createElement("button",{id:"previous",onClick:this.props.handlePrevClick},i.a.createElement("span",{className:"ion-md-skip-backward",style:{fontSize:"30px"}})),i.a.createElement("button",{id:"play-pause",onClick:this.props.handleSongClick},i.a.createElement("span",{className:this.props.isPlaying?"ion-md-pause":"ion-md-play",style:{fontSize:"30px",color:"#8da38c"}})),i.a.createElement("button",{id:"next",onClick:this.props.handleNextClick},i.a.createElement("span",{className:"ion-md-skip-forward",style:{fontSize:"30px"}}))),i.a.createElement("section",{id:"time-control",style:{display:"flex",justifyContent:"center"}},this.props.formatTime(this.props.currentTime),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.currentTime/this.props.duration||0,max:"1",min:"0",step:"0.01",onChange:this.props.handleTimeChange}),this.props.formatTime(this.props.duration)),i.a.createElement("section",{id:"volume-control",style:{display:"flex",justifyContent:"center"}},i.a.createElement("div",{className:"volume"}),i.a.createElement("ion-icon",{name:"volume-mute"}),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.volume,max:"1",min:"0",step:"0.01",onChange:this.props.handleVolumeChange}),i.a.createElement("ion-icon",{name:"volume-high"})))}}]),t}(n.Component),y=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e));var n=E.find(function(e){return e.slug===a.props.match.params.slug});return a.state={album:n,currentSong:n.songs[""],isPLaying:!1,currentTime:0,volume:0,duration:n.songs[0].duration,isMouseInside:!1,songLength:n.songs.length},a.audioElement=document.createElement("audio"),a.audioElement.src=n.songs[0].audioSrc,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.eventListeners={timeupdate:function(t){e.setState({currentTime:e.audioElement.currentTime})},durationchange:function(t){e.setState({duration:e.audioElement.duration})},volumechange:function(t){e.setState({volume:e.audioElement.volume})}},this.audioElement.addEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.addEventListener("durationchange",this.eventListeners.durationchange),this.audioElement.addEventListener("volumechange",this.eventListeners.volumechange)}},{key:"componentWillUnmount",value:function(){this.audioElement.src=null,this.audioElement.removeEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.removeEventListener("durationchange",this.eventListeners.durationchange),this.audioElement.removeEventListener("volumechange",this.eventListeners.volumechange)}},{key:"play",value:function(){this.audioElement.play(),this.setState({isPlaying:!0})}},{key:"pause",value:function(){this.audioElement.pause(),this.setState({isPlaying:!1})}},{key:"setSong",value:function(e){this.audioElement.src=e.audioSrc,this.setState({currentSong:e})}},{key:"handleSongClick",value:function(e){var t=this.state.currentSong===e;this.state.isPlaying&&t?this.pause():(t||this.setSong(e),this.play())}},{key:"handlePrevClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t}),a=Math.max(0,t-1),n=this.state.album.songs[a];this.setSong(n),this.play()}},{key:"handleNextClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t})+1,a=this.state.songLength,n=t<a?t:a-1,i=this.state.album.songs[n];this.setSong(i),this.play()}},{key:"handleTimeChange",value:function(e){var t=this.audioElement.duration*e.target.value;this.audioElement.currentTime=t,this.setState({currentTime:t})}},{key:"handleIconToggle",value:function(e,t){var a=this.state.currentSong===e;return this.state.isMouseInside!==t+1||this.state.isPLaying||a?this.state.isMouseInside===t+1&&this.state.isPLaying?i.a.createElement("span",{className:"ion-md-pause"}):a&&this.state.isPlaying?i.a.createElement("span",{className:"ion-md-pause"}):a&&!this.state.isPlaying?i.a.createElement("span",{className:"ion-md-play"}):t+1:i.a.createElement("span",{className:"ion-md-play"})}},{key:"handleVolumeChange",value:function(e){var t=e.target.value;this.audioElement.volume=t,this.setState({volume:t})}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),a=Math.floor(e-60*t);return(t<10?+t:t)+":"+(a<10?"0"+a:a)}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"album"},i.a.createElement("div",{className:"card flex-row flex-wr "},i.a.createElement("img",{className:"card-img-top",id:"album-cover-art",style:{width:"40rem",height:"40rem"},src:this.state.album.albumCover,alt:this.state.album.title}),i.a.createElement("div",{className:"album-details card-body"},i.a.createElement("h1",{id:"album-title"},this.state.album.title),i.a.createElement("h2",{className:"artist"},this.state.album.artist),i.a.createElement("div",{id:"release-info"},this.state.album.releaseInfo),i.a.createElement("table",{className:"table table-hover table-striped table-dark",id:"song-list",style:{marginTop:"3rem"}},i.a.createElement("colgroup",null,i.a.createElement("col",{id:"song-number-column"}),i.a.createElement("col",{id:"song-title-column"}),i.a.createElement("col",{id:"song-duration-column"})),i.a.createElement("tbody",null,i.a.createElement("tr",{style:{backgroundColor:"#000"}},i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Song"),i.a.createElement("th",null,"Duration")),this.state.album.songs.map(function(t,a){return i.a.createElement("tr",{className:"song",key:a,onClick:function(){return e.handleSongClick(t)},onMouseEnter:function(){return e.setState({isMouseInside:a+1})},onMouseLeave:function(){return e.setState({isMouseInside:!1})}},i.a.createElement("td",{className:"song-number"},e.handleIconToggle(t,a)),i.a.createElement("td",{className:"song-title"}," ",t.title),i.a.createElement("td",{className:"song-duration"}," ",e.formatTime(t.duration)))}))),i.a.createElement(b,{isPlaying:this.state.isPlaying,currentSong:this.state.currentSong,currentTime:this.audioElement.currentTime,duration:this.audioElement.duration,volume:this.audioElement.volume,handleSongClick:function(){return e.handleSongClick(e.state.currentSong)},handlePrevClick:function(){return e.handlePrevClick()},handleNextClick:function(){return e.handleNextClick()},handleTimeChange:function(t){return e.handleTimeChange(t)},handleVolumeChange:function(t){return e.handleVolumeChange(t)},formatTime:function(t){return e.formatTime(t)}}))))}}]),t}(n.Component),k=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"headerSection"},i.a.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top",id:"navbar"},i.a.createElement("ul",{class:"navbar-nav mr-auto mt-2 mt-lg-0"},i.a.createElement("li",{class:"nav-item"},i.a.createElement(g.HashLink,{className:"nav-link",smooth:!0,to:"/home"},"Home")),i.a.createElement("li",{class:"nav-item"},i.a.createElement(g.HashLink,{className:"nav-link",smooth:!0,to:"/#landingSection"},"About")),i.a.createElement("li",{class:"nav-item"},i.a.createElement(g.HashLink,{className:"nav-link",smooth:!0,to:"/library#librarySection"},"Music")))),i.a.createElement("div",{className:"headerdiv"},i.a.createElement("div",{className:"top"},i.a.createElement("h1",{className:"titlename "}," b l o c j a m s. "),i.a.createElement("p",{className:"subtitle anim-typewriter"},"where words fail, music speaks ")))),i.a.createElement("main",null,i.a.createElement("div",{id:"landingSection"},i.a.createElement(h.a,{exact:!0,path:"/",component:p})),i.a.createElement("div",{id:"librarySection"},i.a.createElement(h.a,{path:"/library",component:f})),i.a.createElement(h.a,{path:"/album/:slug",component:y})))}}]),t}(n.Component)),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(l.a,null,i.a.createElement(k,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/bloc-jams",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/bloc-jams","/service-worker.js");N?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()}},[[24,2,1]]]);
//# sourceMappingURL=main.93feaaa3.chunk.js.map