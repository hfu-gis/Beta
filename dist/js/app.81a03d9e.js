(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],v=0,u=[];v<o.length;v++)n=o[v],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"020e":function(t,e,a){"use strict";var s=a("1d07"),i=a.n(s);i.a},"034f":function(t,e,a){"use strict";var s=a("1530"),i=a.n(s);i.a},"10d9":function(t,e,a){"use strict";var s=a("6251"),i=a.n(s);i.a},"11ba":function(t,e,a){t.exports=a.p+"img/ocean.21b5a530.jpg"},1530:function(t,e,a){},"15db":function(t,e,a){},"1d07":function(t,e,a){},"28cb":function(t,e,a){},3439:function(t,e,a){t.exports=a.p+"img/BitOfAdvice_logo_2.3331460e.png"},"375e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire"}},[s("v-navigation-drawer",{attrs:{right:"",temporary:"",fixed:"",color:"#8F94A6"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list-item",{on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[s("v-list-item-avatar",[s("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/39.jpg",height:"40",width:"50"}})],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Peter Olaf Droschbart")])],1)],1),s("v-divider"),s("br"),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",[s("registration")],1),s("v-col",[s("v-btn",{attrs:{depressed:"",color:"#D9A566",link:"",to:{path:"/login"}}},[t._v("Sign In")])],1)],1),s("br"),s("v-divider"),s("v-list",{attrs:{dense:""}},[s("v-list-item",{attrs:{link:"",to:{path:"/homepage"}}},[s("v-list-item-action",[s("v-icon",[t._v("mdi-home")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Home")])],1)],1),s("v-list-item",{attrs:{link:"",to:{path:"/postinglist"}}},[s("v-list-item-action",[s("v-icon",[t._v("mdi-sort")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("PostingList")])],1)],1),s("v-list-item",{attrs:{link:"",to:{path:"/views/Profilesettings"}}},[s("v-list-item-action",[s("v-icon",[t._v("mdi-sort")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Profilesettings")])],1)],1),s("v-list-item",{attrs:{link:"",to:{path:"/profile.json"}}},[s("v-list-item-action",[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Profile")])],1)],1),s("v-list-item",t._g({attrs:{color:"primary",dark:""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[t._v("Open Dialog> "),s("v-list-item-action",[s("v-icon",{attrs:{"mdi-eye":""}})],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Register")])],1)]}}])},t.on))],1)],1),s("v-app-bar",{attrs:{app:"",color:"#132B40",right:"",dark:""}},[s("a",{attrs:{to:{path:"/homepage"}}},[s("img",{attrs:{contain:"",src:a("3439"),height:"50"}})]),s("v-spacer"),s("div",{attrs:{id:"searchbox"}},[s("v-text-field",{attrs:{outlined:"",rounded:"",dense:"",label:"search",id:"txtsearch"}})],1),s("v-btn",{staticClass:"mx-10",attrs:{icon:""}},[s("v-icon",[t._v("mdi-magnify")])],1),s("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),s("v-content",[s("div",{attrs:{id:"app"}},[s("v-dialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[s("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/39.jpg",height:"200px"}}),s("v-card-title",[t._v(" Peter Olaf Droschbart ")]),s("v-card-subtitle",[t._v(" Profi - 1.024 erstellte Beiträge ")])],1)],1)],1),s("router-view")],1)])],1)},r=[],n=a("59ca"),o=a.n(n),l=(a("e71f"),{apiKey:"AIzaSyDTaJU7UfdTnjfY7XIvP5nMm8LLQgadMmY",authDomain:"bitofadvice-ff8b5.firebaseapp.com",databaseURL:"https://bitofadvice-ff8b5.firebaseio.com",projectId:"bitofadvice-ff8b5",storageBucket:"bitofadvice-ff8b5.appspot.com",messagingSenderId:"807677565886",appId:"1:807677565886:web:1b2644c88deeb78e8bb7ef",measurementId:"G-BCEY57FVGQ"}),c=o.a.initializeApp(l).firestore(),d=c,v=o.a.firestore,u=(v.TimeStamp,v.GeoPoint,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body-1"})}),m=[],p={name:"template",components:{},props:{},data:function(){return{}},watch:{},methods:[],created:function(){}},f=p,h=(a("b539"),a("2877")),g=Object(h["a"])(f,u,m,!1,null,"43cf315a",null),b=(g.exports,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{persistent:"","max-width":"600px"},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.registration=!1},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.registration=!1}]},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({attrs:{solo:"",depressed:"",flat:"",color:"#D9A566"}},a),[t._v("Register")])]}}]),model:{value:t.registration,callback:function(e){t.registration=e},expression:"registration"}},[s("v-card",[s("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSignup(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-parallax",{staticClass:"oceanbackground",attrs:{src:a("11ba"),width:"width",height:"100%"}},[s("v-card-title",[s("v-row",{attrs:{justify:"center"}},[s("span",{staticClass:"headline"},[t._v("User Profile")])])],1),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{solo:"",flat:"",filled:"",name:"username",label:"User Name*",id:"username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{solo:"",flat:"",filled:"",name:"email",type:"email",label:"E-mail*",id:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{filled:"",solo:"",flat:"",name:"password",label:"Password*",type:"password",id:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{filled:"",solo:"",flat:"",name:"confirmpassword",type:"password",label:"Confirm Password*",id:"confirmpassword",rules:[t.comparepassword]},model:{value:t.confirmpassword,callback:function(e){t.confirmpassword=e},expression:"confirmpassword"}})],1)],1)],1),s("small",[t._v("*indicates required field")])],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{text:"",type:"submit"},on:{click:function(e){t.registration=!1}}},[t._v("Close")]),s("v-btn",{attrs:{text:""},on:{click:t.validate}},[t._v("Save")])],1)],1)],1)],1)],1)],1)}),x=[],w=(a("4160"),a("159b"),{data:function(){return{registration:!1,valid:!0,success:!1,username:"",email:"",password:"",confirmpassword:""}},name:"registration",components:{},props:{},watch:{},computed:{comparepassword:function(){return this.password!==this.confirmpassword?"passwords do not match":""}},methods:{onSignup:function(){console.log({email:this.email,password:this.password,confirmpassword:this.confirmpassword})}},created:function(){var t=this,e=d.collection("Users");e.get().then((function(e){e.forEach((function(e){return t.username.push(e.data())}))}))}}),_=w,y=(a("8468"),Object(h["a"])(_,b,x,!1,null,"faffe2f8",null)),C=y.exports,k=void 0,j={name:"LayoutsDemosBaselineFlipped",components:{registration:C},props:{source:String},data:function(){return{valid:!0,drawer:null,dialog:!1,dialog2:!1,dialog3:!1}},watch:{},methods:{validate:function(){k.$refs.form.validate()&&k.register().then((function(t){alert(t)}))},register:function(){var t=d.collection("Users").doc(k.userdata.firstname);t.set(k.userdata).catch((function(t){return console.debug("Error",t)}))},twoToThree:function(){this.dialog2=!0,this.dialog3=!1},threeToTwo:function(){this.dialog2=!1,this.dialog3=!0}},created:function(){this.$router.push({name:"homepage"})}},P=j,O=(a("034f"),Object(h["a"])(P,i,r,!1,null,null,null)),S=O.exports,F=a("ce5b"),E=a.n(F),$=a("fcf4");a("bf40");s["default"].use(E.a);var A=new E.a({theme:{themes:{light:{primary:$["a"].indigo,secondary:$["a"].amber,accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),D=a("8c4f"),T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("html",[t._m(0),s("body",[s("v-parallax",{staticClass:"oceanbackground",attrs:{src:a("11ba"),width:"width",height:"100%"}},[s("v-container",[s("v-layout",[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-flex",{attrs:{xs12:"",xs5:"","offset-md12)":""}},[s("v-card-text",[s("v-form",{staticClass:"px-3"},[s("div",{attrs:{id:"login"}},[s("header",[s("h1",[s("strong",[t._v(" Login ")])])]),s("br"),s("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:t.userdata.txtemail,callback:function(e){t.$set(t.userdata,"txtemail",e)},expression:"userdata.txtemail"}}),s("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.userdata.txtpassword,callback:function(e){t.$set(t.userdata,"txtpassword",e)},expression:"userdata.txtpassword"}}),s("v-row",{attrs:{"no-gutters":""}},[s("v-btn",{attrs:{color:"#D9A566"},on:{click:t.auth}},[t._v("Sign up")]),s("registration"),s("v-spacer")],1)],1)],1)]),s("br")],1)],1)],1)],1)],1)],1)],1)])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("head",[t._v("Login "),a("meta",{attrs:{charset:"UTF-8"}}),a("title",[t._v(" Transparent Login Form ")])])}],L={name:"login",components:{registration:C},props:{},data:function(){return{valid:!0,success:!1,userdata:{txtemail:"testpersonFuwa@gmail.com",txtpassword:"furtwangen"}}},methods:{auth:function(){var t=this;d.auth().signInWithEmailAndPassword(this.userdata.txtemail,this.userdata.txtpassword).then((function(){t.$router.push("/postinglist")}))}},created:function(){}},M=L,I=(a("020e"),Object(h["a"])(M,T,B,!1,null,"dfd8a834",null)),U=I.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",[s("v-parallax",{staticClass:"oceanbackground",attrs:{src:a("11ba"),width:"width",height:"100%"}},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"img-circle",attrs:{src:"https://randomuser.me/api/portraits/men/39.jpg",height:"150",width:"150",align:"center"}}),s("v-btn",{attrs:{fab:"","x-small":"",dark:""}},[s("v-icon",[t._v("mdi-pencil")])],1),s("header",[s("h1",{staticClass:"h1"},[s("strong",[t._v("Profile Name")]),s("v-btn",{attrs:{fab:"","x-small":"",dark:""}},[s("v-icon",[t._v("mdi-pencil")])],1)],1)])],1),s("v-row",{attrs:{align:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[s("div",{staticClass:"my-2"},[s("v-btn",{staticClass:"button md5",attrs:{width:"100em",height:"8em",outlined:""}},[t._v("Profile")])],1),s("br"),s("div",{staticClass:"my-2"},[s("v-btn",{staticClass:"button",attrs:{width:"100em",height:"8em",outlined:""}},[t._v("Notification")])],1)]),s("v-col",{staticClass:"text-center",attrs:{sm:"3"}},[s("div",{staticClass:"my-2"},[s("v-btn",{staticClass:"button",attrs:{width:"100em","min-height":"8em",outlined:""}},[t._v("My Posts")])],1),s("br"),s("div",{staticClass:"my-2"},[s("v-btn",{staticClass:"button",attrs:{width:"100em","min-height":"8em",outlined:""}},[t._v("Submit an Idea")])],1)]),s("v-col",{staticClass:"text-center",attrs:{sm:"3"}},[s("div",{staticClass:"my-2"},[s("v-btn",{staticClass:"button",attrs:{width:"100em","min-height":"8em",outlined:""}},[t._v("Statistics")])],1),s("br"),s("div",{staticClass:"my-2"},[s("v-btn",{staticClass:"button",attrs:{width:"100em","min-height":"8em",outlined:""}},[t._v("My Reports")])],1)]),s("v-col",{staticClass:"text-center",attrs:{sm:"3"}},[s("div",{staticClass:"my-2"},[s("v-btn",{staticClass:"button",attrs:{width:"100em","min-height":"8em",outlined:""}},[t._v("Abo`s/Friends")])],1),s("br"),s("div",{staticClass:"my-2"},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){e.hover;return[s("v-btn",{staticClass:"button",attrs:{width:"100em","min-height":"8em",outlined:""}},[t._v("Logout ")])]}}])})],1)])],1)],1)],1)},z=[],H={name:"profil",components:{},props:{},data:function(){return{}},watch:{},methods:[],created:function(){}},R=H,q=(a("a10c"),Object(h["a"])(R,J,z,!1,null,"867a8216",null)),G=q.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body-1"},[a("v-col",{staticClass:"align-center"},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{md:"2"}},[a("v-btn",[t._v("#Sucheingabe")])],1),a("v-col",{attrs:{md:"1"}},[a("v-btn",[t._v(" + ")])],1)],1)],1),a("section",{attrs:{id:"filter"}},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{color:"grey darken-1",dark:""}},s),[t._v(" Filter ")])]}}])},[a("v-list",[a("v-list-item",[t._v("Datum")]),a("v-list-item",[t._v("Relevanz")])],1)],1)],1)],1),t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{staticClass:"img-circle",attrs:{src:e.src}})],1),a("div",{staticClass:"d-flex d-inline-flex"},[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}})],1)],1)],1)}))],2)},K=[],W={name:"postinglist",components:{},props:{},data:function(){return{items:[{color:"#8F94A6",src:"https://randomuser.me/api/portraits/men/39.jpg",title:"Supermodel",artist:"Foster the People"},{color:"#8F94A6",src:"https://randomuser.me/api/portraits/men/49.jpg",title:"Halcyon Days",artist:"Ellie Goulding"}]}},watch:{},methods:[],created:function(){}},Y=W,Q=(a("10d9"),Object(h["a"])(Y,N,K,!1,null,"1411b3ea",null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"body-1",attrs:{id:"cloud"}},[a("br"),a("wordcloud",{attrs:{data:t.defaultWords,nameKey:"name",valueKey:"value",color:t.myColors,showTooltip:!0,wordClick:t.wordClickHandler}})],1),a("div",[a("v-app",[a("v-card",{staticClass:"mx-auto",attrs:{color:"#8F94A6",width:"80%"}},[a("v-system-bar",{attrs:{color:"#D9A566",dark:""}},[a("v-spacer"),a("v-icon",[t._v("mdi-window-minimize")]),a("v-icon",[t._v("mdi-window-maximize")]),a("v-icon",[t._v("mdi-close")])],1),a("v-spacer"),a("v-toolbar",{attrs:{color:"#132B40",dark:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("latest posts")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",link:"",to:{path:"/postinglist"}}},[a("v-icon",[t._v("mdi-magnify")])],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.posts,(function(e){return a("v-col",{key:e.title,attrs:{cols:e.flex}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"95%"}},[a("v-card-text",[a("p",{staticClass:"display-1 text--primary",domProps:{textContent:t._s(e.title)}}),a("p",{domProps:{textContent:t._s(e.hashtag)}},[t._v("adjective")]),a("div",{staticClass:"text--primary",domProps:{textContent:t._s(e.text)}})]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"#BF4974"}},[t._v(" Learn More ")])],1)],1)],1)})),1)],1)],1)],1)],1),a("br"),a("br"),a("div",[a("v-app",{attrs:{id:"inspire"}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#8F94A6","max-width":"80%"}},[a("v-spacer"),a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return a("v-col",{key:e.title,attrs:{cols:e.flex}},[a("v-card",{attrs:{color:"#D9A566"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[a("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bookmark")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)],1)],1),a("v-footer",[t._v(" @2019 HFU Beta "),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-spacer")],1)],1)},Z=[],tt=a("9b23"),et=a.n(tt),at={name:"homepage",components:{Registration:C,wordcloud:et.a},methods:{wordClickHandler:function(t,e,a){console.log("wordClickHandler",t,e,a)}},data:function(){return{cards:[{title:"Camera",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:3},{title:"Video",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:3},{title:"Java",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:3},{title:"C#",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:3},{title:"Blender",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:3},{title:"Simulation",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:3},{title:"Latex",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:3},{title:"MS office",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:3}],posts:[{title:"camera",hashtag:"#camera",text:"text1",flex:12},{title:"best movie",hashtag:"#movietime",text:"text2",flex:12},{title:"simulation in Java",hashtag:"#Java",text:"text3",flex:12},{title:"fusee",hashtag:"#CSharp",text:"text4",flex:12}],rotate:{from:0,to:0,numOfOrientation:0},spiral:"rectangular",showTooltip:!1,myColors:["#1f77b4","#629fc9","#94bedb","#c9e0ef"],defaultWords:[{name:"Cat",value:26},{name:"fish",value:19},{name:"things",value:18},{name:"look",value:16},{name:"two",value:15},{name:"fun",value:9},{name:"know",value:9},{name:"good",value:9},{name:"good",value:9},{name:"good",value:34},{name:"good",value:22},{name:"good",value:14},{name:"play",value:33}]}}},st=at,it=Object(h["a"])(st,X,Z,!1,null,"ffd0bf42",null),rt=it.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"success",attrs:{text:""}},s),[t._v(" Einstellungen ")])]}}])},[a("v-dialog",{attrs:{"max-width":"600px"}},[a("v-card",[a("v-card-title",[a("h2",[t._v("Profilesettings")])])],1),a("v-card-text",{staticClass:"white"},[a("v-form",{staticClass:"px-3"},[a("v-text-field",{attrs:{label:"firstname"},model:{value:t.settings.firstname,callback:function(e){t.$set(t.settings,"firstname",e)},expression:"settings.firstname"}}),a("v-text-field",{attrs:{label:"middlename"},model:{value:t.settings.middlename,callback:function(e){t.$set(t.settings,"middlename",e)},expression:"settings.middlename"}}),a("v-text-field",{attrs:{label:"lastname"},model:{value:t.settings.lastname,callback:function(e){t.$set(t.settings,"lastname",e)},expression:"settings.lastname"}})],1)],1)],1)],1)},ot=[],lt={name:"profilesettings",components:{},props:{},data:function(){return{settings:{firstname:"",middlename:"",lastname:""}}},watch:{},methods:[],created:function(){this.settings=a("72fb")}},ct=lt,dt=(a("6371"),Object(h["a"])(ct,nt,ot,!1,null,"ccece78e",null)),vt=dt.exports;s["default"].use(D["a"]);var ut=new D["a"]({routes:[{path:"/",name:"root",component:S},{path:"/login",component:U},{path:"/profile.json",component:G},{path:"/profilesettings",component:vt},{path:"/postinglist",component:V},{path:"/registration",component:C},{path:"/homepage",component:rt}]});a("d5e8"),a("5363");s["default"].config.productionTip=!1,new s["default"]({vuetify:A,router:ut,render:function(t){return t(S)}}).$mount("#app")},6251:function(t,e,a){},6371:function(t,e,a){"use strict";var s=a("d79d"),i=a.n(s);i.a},"72fb":function(t){t.exports=JSON.parse('{"firstname":"","middlename":"","lastname":""}')},8468:function(t,e,a){"use strict";var s=a("15db"),i=a.n(s);i.a},a10c:function(t,e,a){"use strict";var s=a("375e"),i=a.n(s);i.a},b539:function(t,e,a){"use strict";var s=a("28cb"),i=a.n(s);i.a},d79d:function(t,e,a){}});
//# sourceMappingURL=app.81a03d9e.js.map