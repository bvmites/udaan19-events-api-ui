(function(e){function t(t){for(var s,r,i=t[0],l=t[1],u=t[2],v=0,p=[];v<i.length;v++)r=i[v],a[r]&&p.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1296:function(e,t,n){},15:function(e,t){},2040:function(e,t,n){},"466e":function(e,t,n){"use strict";var s=n("e614"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),a=n("9f7b"),o=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbarComponent"),n("transition",{attrs:{name:"slide"}},[n("router-view")],1)],1)}),r=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-navbar",{attrs:{toggleable:"md",type:"dark"}},[s("b-navbar-brand",{attrs:{href:"#",to:"/listEvents"}},[s("img",{attrs:{src:n("cf05"),alt:"genesis logo"}}),s("span",{staticClass:"brand-title"},[e._v("Genesis 18")])]),e.user.authToken?s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}):e._e(),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",{staticClass:"ml-auto"},[e.user.authToken?s("b-navbar-nav",[s("b-nav-item",{staticClass:"mx-auto",attrs:{href:"#",to:"/listEvents"}},[e._v("List events")])],1):e._e(),e.user.authToken?s("b-navbar-nav",[s("b-nav-item",{staticClass:"mx-auto",attrs:{href:"#",to:"/addEvent"}},[e._v("Add Event")])],1):e._e(),e.user.authToken?s("b-navbar-nav",[s("b-nav-item",{staticClass:"mx-auto",attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")])],1):e._e()],1)],1)],1)],1)},l=[],u=n("2f62"),c={name:"navbarComponent",methods:{logout(){this.$store.commit("logout"),this.$router.push("/"),localStorage.clear()}},computed:{...Object(u["b"])({user:e=>e.user})},created(){localStorage.getItem("user")&&(this.$store.state.user=JSON.parse(localStorage.getItem("user")))}},v=c,p=(n("a75f"),n("2877")),d=Object(p["a"])(v,i,l,!1,null,"278ebe34",null);d.options.__file="navbarComponent.vue";var m=d.exports,h={name:"MainComponent",components:{navbarComponent:m}},f=h,b=(n("cf25"),Object(p["a"])(f,o,r,!1,null,null,null));b.options.__file="App.vue";var g=b.exports,_=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",{staticClass:"container login"},[n("div",[n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Name"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"password",type:"password","min-length":"3"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.login(t):null}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("button",{staticClass:"btn mx-auto",on:{click:e.login}},[e._v("Login")]),e.errorMessage?n("div",{staticClass:"heading"},[e._v("\n      "+e._s(e.errorMessage)+"\n    ")]):e._e()])])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading-text"},[n("span",[e._v("login")])])}],k={name:"Login",data(){return{id:null,password:null,errorMessage:null}},methods:{login(){this.$http.post("https://nameless-retreat-73671.herokuapp.com/users/login",{username:this.id,password:this.password}).then(function(e){this.$store.commit("login",{name:this.id,number:this.password,authToken:e.body.token}),this.$router.push("/listEvents")}).catch(function(e){this.errorMessage=e.body.message})}},mounted(){localStorage.user&&this.$router.push("/listEvents")}},y=k,x=(n("9f26"),Object(p["a"])(y,C,E,!1,null,"11784e56",null));x.options.__file="Login.vue";var S=x.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container-fluid"},[0===e.events.length?n("div",{staticClass:"heading"},[e._v("There are no events to show")]):e._e(),e.events.length>0?n("div",[n("div",{staticClass:"heading"},[e._v("Events")]),e._l(e.events,function(t){return n("b-card",[n("div",{staticClass:"body"},[e._v("\n          "+e._s(t.eventName)+"\n        ")]),n("div",{staticClass:"action-buttons"},[n("hr"),n("button",{staticClass:"btn",on:{click:function(n){e.editEvent(t._id)}}},[n("font-awesome-icon",{attrs:{icon:"pen"}})],1),n("button",{staticClass:"btn",on:{click:function(n){e.deleteEvent(t._id)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)])])})],2):e._e()])])},$=[],O={name:"ListEvent",data(){return{events:null}},methods:{editEvent(e){this.$router.push("/editEvent/"+e)},deleteEvent(e){this.$http.delete("https://nameless-retreat-73671.herokuapp.com/events/"+e,{headers:{Authorization:this.user.authToken}}).then(function(e){console.log(e),this.$router.push("/")})}},computed:{...Object(u["b"])({user:e=>e.user})},mounted(){this.$http.get("https://nameless-retreat-73671.herokuapp.com/events",{headers:{Authorization:this.user.authToken}}).then(function(e){console.log(e.body),e.body!==[]&&(this.events=e.body)})}},T=O,z=(n("575f"),Object(p["a"])(T,w,$,!1,null,"3601950a",null));z.options.__file="ListEvent.vue";var j=z.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("inputComponent",{attrs:{event:e.event},on:{updateEvent:function(t){e.sendEvent(t)}}})],1)])},N=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Event Name"},model:{value:e.event.eventName,callback:function(t){e.$set(e.event,"eventName",t)},expression:"event.eventName"}})],1),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-select",{attrs:{options:e.departmentOptions},model:{value:e.event.department,callback:function(t){e.$set(e.event,"department",t)},expression:"event.department"}})],1),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Entry Fee"},model:{value:e.event.entryFee,callback:function(t){e.$set(e.event,"entryFee",t)},expression:"event.entryFee"}})],1),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-select",{attrs:{options:e.typeOptions},model:{value:e.event.eventType,callback:function(t){e.$set(e.event,"eventType",t)},expression:"event.eventType"}})],1),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Tagline"},model:{value:e.event.tagline,callback:function(t){e.$set(e.event,"tagline",t)},expression:"event.tagline"}})],1),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Team Size"},model:{value:e.event.teamSize,callback:function(t){e.$set(e.event,"teamSize",t)},expression:"event.teamSize"}})],1),n("div",{staticClass:"managers"},[n("div",{staticClass:"sub heading"},[e._v("Managers")]),e.event.managers.length>0?n("b-card",[n("div",{staticClass:"row details"},[n("div",{staticClass:"col-sm-1"},[e._v("Sr. no.")]),n("div",{staticClass:"col-sm-4"},[e._v("Manager's Name")]),n("div",{staticClass:"col-sm-4"},[e._v("Manager's Number")])]),e._l(e.event.managers,function(t,s){return n("div",{staticClass:"details row"},[n("div",{staticClass:"col-sm-1"},[e._v(e._s(s+1)+".")]),n("div",{staticClass:"col-sm-4"},[e._v(e._s(t.name))]),n("div",{staticClass:"col-sm-4"},[e._v(e._s(t.phone))])])})],2):e._e(),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Manager Name"},model:{value:e.manager.name,callback:function(t){e.$set(e.manager,"name",t)},expression:"manager.name"}})],1),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Manager Number"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addManager(t):null}},model:{value:e.manager.phone,callback:function(t){e.$set(e.manager,"phone",t)},expression:"manager.phone"}})],1),n("button",{staticClass:"btn ml-auto",on:{click:e.addManager}},[e._v("Add Manager")])],1),n("div",{staticClass:"rounds"},[n("div",{staticClass:"sub heading"},[e._v("Rounds")]),e.event.rounds.length>0?n("b-card",[n("div",{staticClass:"row details"},[n("div",{staticClass:"col-sm-2"},[e._v("Round no.")]),n("div",{staticClass:"col-sm-6"},[e._v("Round Details")])]),e._l(e.event.rounds,function(t,s){return n("div",{staticClass:"row details"},[n("div",{staticClass:"col-sm-2"},[e._v(e._s(s+1))]),n("div",{staticClass:"col-sm-6"},[e._v(e._s(t))])])})],2):e._e(),n("b-input-group",{attrs:{size:"lg"}},[n("b-form-input",{attrs:{placeholder:"Round Description"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addRound(t):null}},model:{value:e.round,callback:function(t){e.round=t},expression:"round"}})],1),n("button",{staticClass:"btn ml-auto",on:{click:e.addRound}},[e._v("Add Round")])],1),n("div",{staticClass:"action-buttons"},[n("button",{staticClass:"btn",on:{click:e.submit}},[e._v("Submit")]),n("button",{staticClass:"btn btn-warning",on:{click:function(t){e.$router.push("/")}}},[e._v("Cancel")])])],1)},I=[],F={name:"inputComponent",props:["event"],data(){return{manager:{name:null,phone:null},round:null,typeOptions:[{value:null,text:"Select Event Type"},{value:"tech",text:"Tech"},{value:"non-tech",text:"Non-Tech"},{value:"ssip",text:"SSIP"}],departmentOptions:[{value:null,text:"Select Department"},{value:"ecel",text:"EC/EL"},{value:"mech",text:"Mechanical"},{value:"ee",text:"Electrical"},{value:"non-tech",text:"Non Tech"},{value:"ssip",text:"SSIP"},{value:"cpit",text:"CP/IT"},{value:"prod",text:"Production"},{value:"civil",text:"Civil"}]}},methods:{addManager(){let e=Object.assign({},this.manager);this.event.managers.push(e),this.manager.name=null,this.manager.phone=null},addRound(){const e=this.round;this.event.rounds.push(e),this.round=null},submit(){this.event["entryFee"]=parseInt(this.event.entryFee),this.event["teamSize"]=parseInt(this.event.teamSize),console.log(this.event),this.$emit("updateEvent",this.event)}},computed:{...Object(u["b"])({user:e=>e.user})}},P=F,L=(n("466e"),Object(p["a"])(P,A,I,!1,null,"7b9f6371",null));L.options.__file="inputComponent.vue";var R=L.exports,J={name:"EditEvents",components:{inputComponent:R},data(){return{event:null}},methods:{sendEvent(e){this.event=e,this.$http.put("https://nameless-retreat-73671.herokuapp.com/events",this.event,{headers:{Authorization:this.user.authToken}}).then(function(e){this.$router.push("/listEvents")})}},computed:{...Object(u["b"])({user:e=>e.user})},mounted(){let e=this.$route.params.id;this.$http.get("https://nameless-retreat-73671.herokuapp.com/events/"+e,{headers:{Authorization:this.user.authToken}}).then(function(e){this.event=e.body,console.log(e.body)})}},D=J,q=(n("8934"),Object(p["a"])(D,M,N,!1,null,"45461457",null));q.options.__file="EditEvents.vue";var B=q.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("inputComponent",{attrs:{event:e.event},on:{updateEvent:function(t){e.sendEvent(t)}}})],1)])},H=[],K={name:"AddEvent",components:{inputComponent:R},data(){return{event:{department:null,description:"genesis event",prizeMoney:[20],entryFee:null,eventName:null,eventType:null,managers:[],rounds:[],tagline:null,teamSize:null}}},computed:{...Object(u["b"])({user:e=>e.user})},methods:{sendEvent(e){this.event=e,console.log(this.event),this.$http.post("https://nameless-retreat-73671.herokuapp.com/events",this.event,{headers:{Authorization:this.user.authToken}}).then(function(e){console.log(e),this.$router.push("listEvents")})}}},Q=K,U=(n("ca0e"),Object(p["a"])(Q,G,H,!1,null,"3b4527f3",null));U.options.__file="AddEvent.vue";var V=U.exports;s["a"].use(u["a"]);const W=new u["a"].Store({state:{user:{name:null,number:null,authToken:null}},mutations:{login(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},logout(e){e.user.name=null,e.user.number=null,e.user.authToken=null}}});s["a"].use(_["a"]);var X=new _["a"]({routes:[{path:"/",name:"login",component:S},{path:"/listEvents",name:"listEvents",component:j,beforeEnter:(e,t,n)=>{"listEvents"===e.name?localStorage.user?(W.state.user=JSON.parse(localStorage.getItem("user")),n()):n(!1):n()}},{path:"/editEvent/:id",name:"editEvent",component:B,beforeEnter:(e,t,n)=>{"editEvent"===e.name?localStorage.user?(W.state.user=JSON.parse(localStorage.getItem("user")),n()):n(!1):n()}},{path:"/addEvent",name:"addEvent",component:V,beforeEnter:(e,t,n)=>{"addEvent"===e.name?localStorage.user?(W.state.user=JSON.parse(localStorage.getItem("user")),n()):n(!1):n()}}]}),Y=n("28dd"),Z=n("9483");Object(Z["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ee=n("ecee"),te=n("c074"),ne=n("7a55");ee["library"].add(te["a"]),s["a"].component("font-awesome-icon",ne["FontAwesomeIcon"]),s["a"].config.productionTip=!1,s["a"].use(a["a"]),s["a"].use(Y["a"]),new s["a"]({router:X,store:W,render:e=>e(g)}).$mount("#app")},"575f":function(e,t,n){"use strict";var s=n("a503"),a=n.n(s);a.a},7386:function(e,t,n){},8934:function(e,t,n){"use strict";var s=n("8a57"),a=n.n(s);a.a},"8a57":function(e,t,n){},"9f26":function(e,t,n){"use strict";var s=n("1296"),a=n.n(s);a.a},a503:function(e,t,n){},a75f:function(e,t,n){"use strict";var s=n("ef95"),a=n.n(s);a.a},ca0e:function(e,t,n){"use strict";var s=n("2040"),a=n.n(s);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.49ab2038.png"},cf25:function(e,t,n){"use strict";var s=n("7386"),a=n.n(s);a.a},e614:function(e,t,n){},ef95:function(e,t,n){}});
//# sourceMappingURL=app.50cf9ecc.js.map