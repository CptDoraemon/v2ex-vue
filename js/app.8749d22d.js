(function(t){function e(e){for(var s,o,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/v2ex-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1748:function(t,e,a){"use strict";a("c0d1")},2395:function(t,e,a){},"31fd":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"568c":function(t,e,a){"use strict";a("e441")},"56d7":function(t,e,a){"use strict";a.r(e);a("b0c0"),a("30a0");var s=a("83d8"),n=(a("2ef0f"),a("9839")),r=(a("9a33"),a("f933")),o=(a("6ba6"),a("5efb")),c=(a("dd98"),a("3779")),i=(a("7f6b"),a("8592")),l=(a("8fb1"),a("0c63")),u=(a("fbd8"),a("55f1")),d=(a("1a62"),a("98c5")),p=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticClass:"layout-root"},[a("side-bar",{attrs:{collapsed:t.isMenuCollapsed}}),a("a-layout",[a("global-header",{attrs:{collapsed:t.isMenuCollapsed},on:{"update:collapsed":function(e){t.isMenuCollapsed=e}}}),a("router-view")],1),a("a-back-top")],1)},b=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-sider",{attrs:{trigger:null,collapsible:""},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[a("h1",{staticClass:"title"},[t._v(" v2ex-vue ")]),a("a-menu",{attrs:{theme:"dark",mode:"inline",selectedKeys:t.selectedTab,defaultOpenKeys:t.collapsed?null:["tabs"]}},[a("a-sub-menu",{key:"tabs"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"appstore"}}),a("span",{staticClass:"menu-item"},[t._v("Tabs")])],1),t._l(t.menuItems,(function(e,s){return a("a-menu-item",{key:s},[a("router-link",{attrs:{to:e.link}},[a("span",{staticClass:"menu-item"},[t._v(t._s(s))])])],1)}))],2),a("a-menu-item",[a("router-link",{attrs:{to:t.routes.about}},[a("a-icon",{attrs:{type:"team"}}),a("span",{staticClass:"menu-item"},[t._v("About")])],1)],1)],1)],1)},j=[],h=(a("d3b7"),a("25f0"),a("8c4f")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main-content-wrapper",[t.isLoading?a("div",{staticClass:"message-container"},[a("a-spin",{attrs:{tip:"Fetching Posts..."}})],1):t._e(),t.isError?a("div",{staticClass:"message-container"},[a("a-result",{attrs:{status:"error",title:"Server Error","sub-title":t.errorMessage},scopedSlots:t._u([{key:"extra",fn:function(){return[a("a-button",{attrs:{type:"primary"},on:{click:t.fetchData}},[t._v(" Try Again ")])]},proxy:!0}],null,!1,1024352388)})],1):t._e(),!t.isLoading&&t.hasData?a("div",{staticClass:"posts-container"},[a("div",[a("post-list-options")],1),t._l(t.data,(function(t,e){return a("post-card",{key:e,attrs:{data:t}})}))],2):t._e()])},v=[],y=a("5530"),_=a("2f62"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{staticClass:"header"},[a("h2",{staticClass:"title"},[t._v(" "+t._s(t.data.title)+" ")])]),a("div",{staticClass:"content"},[t._v(" "+t._s(t.data.content)+" ")]),a("div",{staticClass:"details"},[a("div",{staticClass:"details-item"},[a("tooltip-wrapper",{attrs:{title:"tag"}},[a("div",{staticClass:"tag",attrs:{"aria-label":"tag"}},[t._v(" "+t._s(t.data.node.title)+" ")])])],1),a("div",{staticClass:"details-item"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.data.member.avatar_large}}),a("tooltip-wrapper",{attrs:{title:"username"}},[a("span",{attrs:{"aria-label":"username"}},[t._v(" "+t._s(t.data.member.username)+" ")])])],1)]),a("div",{staticClass:"details-item"},[a("tooltip-wrapper",{attrs:{title:"created"}},[a("span",{attrs:{"aria-label":"created"}},[t._v(" "+t._s(t.getTimeString(t.data.created))+" ")])])],1),a("div",{staticClass:"details-item"},[a("tooltip-wrapper",{attrs:{title:"replies"}},[a("a",{staticClass:"replies",attrs:{"aria-label":"replies",href:t.data.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.replies)+" ")])])],1)])])},k=[],w=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-tooltip",[a("template",{slot:"title"},[t._v(" "+t._s(t.title)+" ")]),t._t("default",[t._v(t._s("123"))])],2)}),x=[],S={name:"TooltipWrapper",props:{title:String}},C=S,D=a("2877"),M=Object(D["a"])(C,w,x,!1,null,"a3f5697c",null),z=M.exports,E={name:"PostCard",components:{TooltipWrapper:z},props:{data:Object},methods:{getTimeString:function(t){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=new Date(1e3*t),s=a.getHours()<10?"0".concat(a.getHours()):a.getHours(),n=a.getMinutes()<10?"0".concat(a.getMinutes()):a.getMinutes();return"".concat(a.getDate()," ").concat(e[a.getMonth()],", ").concat(a.getFullYear()," - ").concat(s,":").concat(n)}}},B=E,L=(a("568c"),Object(D["a"])(B,O,k,!1,null,"effdb4a2",null)),T=L.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-content",{staticClass:"content"},[t._t("default")],2)},$=[],F={name:"MainContentWrapper"},W=F,H=(a("f3e8"),Object(D["a"])(W,P,$,!1,null,"6b28543c",null)),I=H.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{staticClass:"select-group"},[a("span",[t._v(" Sort by: ")]),a("a-select",{style:t.selectStyle,attrs:{value:t.sortBy,dropdownStyle:t.optionStyle},on:{change:function(e){return t.changeSort({sortBy:e})}}},t._l(t.sortByOptions,(function(e){return a("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),a("div",{staticClass:"select-group"},[a("span",[t._v(" Sort order: ")]),a("a-select",{style:t.selectStyle,attrs:{value:t.sortOrder,dropdownStyle:t.optionStyle},on:{change:function(e){return t.changeSort({sortOrder:e})}}},t._l(t.sortOrderOptions,(function(e){return a("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1)])},J=[],N={name:"PostListOptions",data:function(){return{selectStyle:{minWidth:"150px",textTransform:"capitalize"},optionStyle:{textTransform:"capitalize"}}},computed:Object(y["a"])({},Object(_["d"])("postData",["sortBy","sortByOptions","sortOrder","sortOrderOptions"])),methods:Object(y["a"])({},Object(_["b"])("postData",["changeSort"]))},q=N,G=(a("1748"),Object(D["a"])(q,A,J,!1,null,"f6a74630",null)),K=G.exports,R={name:"PostList",components:{PostListOptions:K,MainContentWrapper:I,PostCard:T},props:{tab:String},computed:Object(y["a"])(Object(y["a"])({},Object(_["d"])("postData",["errorMessage","isLoading","sortBy","data"])),Object(_["c"])("postData",["isError","hasData"])),methods:{fetchData:function(){this.$store.dispatch("postData/fetchData",this.tab)}},mounted:function(){this.fetchData()},watch:{tab:function(t,e){t!==e&&this.fetchData()}}},U=R,Y=(a("6ff8"),Object(D["a"])(U,g,v,!1,null,"21315fe3",null)),Q=Y.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main-content-wrapper",[t._v(" about ")])},X=[],Z={name:"AboutPage",components:{MainContentWrapper:I},props:{data:Object}},tt=Z,et=Object(D["a"])(tt,V,X,!1,null,"023d98c2",null),at=et.exports,st={root:"/",new:"/tab/new",popular:"/tab/popular",about:"/about"},nt=[{path:"/",redirect:st.new},{path:"/tab/:tab",component:Q,props:function(t){return{tab:t.params.tab}}},{path:"/about",component:at}],rt=new h["a"]({routes:nt,mode:"history",base:"/v2ex-vue/"}),ot=st,ct={name:"SideBar",components:{},data:function(){return{routes:ot,menuItems:{new:{link:ot.new},popular:{link:ot.popular}}}},props:{collapsed:Boolean},computed:{selectedTab:function(t){return void 0===t.$route.params.tab?[]:[t.$route.params.tab.toString()]}}},it=ct,lt=(a("ec19"),Object(D["a"])(it,m,j,!1,null,"7a606169",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout-header",{staticStyle:{background:"#fff",padding:"0"}},[a("a-icon",{staticClass:"trigger",attrs:{type:t.collapsed?"menu-unfold":"menu-fold"},on:{click:function(e){return t.$emit("update:collapsed",!t.collapsed)}}})],1)},pt=[],ft={name:"GlobalHeader",components:{},props:{collapsed:Boolean}},bt=ft,mt=(a("8244"),Object(D["a"])(bt,dt,pt,!1,null,"3ac1057f",null)),jt=mt.exports,ht={name:"App",components:{GlobalHeader:jt,SideBar:ut},data:function(){return{isMenuCollapsed:!1}},created:function(){window.innerWidth<800&&(this.isMenuCollapsed=!0)}},gt=ht,vt=(a("7c55"),Object(D["a"])(gt,f,b,!1,null,null,null)),yt=vt.exports,_t=(a("4160"),a("96cf"),a("1da1")),Ot=a("2ef0"),kt=a("bc3a"),wt=a.n(kt),xt=a("b054"),St=a.n(xt),Ct={namespaced:!0,state:{data:[],isLoading:!1,errorMessage:"",sortBy:"created",sortByOptions:["created","replies"],sortOrder:"descending",sortOrderOptions:["ascending","descending"]},getters:{isError:function(t){return""!==t.errorMessage},hasData:function(t){return t.data.length>0}},mutations:{startFetching:function(t){t.data=[],t.isLoading=!0,t.errorMessage=""},endFetchingWithData:function(t,e){t.data=Object(Ot["cloneDeep"])(e),t.isLoading=!1},endFetchingWithError:function(t,e){t.errorMessage=e,t.isLoading=!1},changeSort:function(t,e){["sortBy","sortOrder"].forEach((function(a){void 0!==e[a]&&(t[a]=e[a])}))},sortData:function(t){var e="descending"===t.sortOrder?-1:1,a=t.sortBy,s=Object(Ot["cloneDeep"])(t.data);s.sort((function(t,s){return(t[a]-s[a])*e})),t.data=s},setIsLoading:function(t,e){t.isLoading=e}},actions:{changeSort:function(t,e){var a=t.state,s=t.commit,n=t.dispatch;a.isLoading||(s("changeSort",e),n("_sortData"))},_sortData:function(t){var e=t.commit;e("setIsLoading",!0),setTimeout((function(){return e("sortData")})),setTimeout((function(){return e("setIsLoading",!1)}))},_fetchData:function(){var t=Object(_t["a"])(regeneratorRuntime.mark((function t(e,a){var s,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,n=e.state,t.prev=1,!n.isLoading){t.next=4;break}return t.abrupt("return");case 4:return s("startFetching"),t.next=7,wt.a.get(a);case 7:r=t.sent,s("endFetchingWithData",r.data.data),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),o=t.t0.response&&t.t0.response.message?t.t0.response.message:"Failed to fetch the post data at the moment, please try again later.",s("endFetchingWithError",o);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));function e(e,a){return t.apply(this,arguments)}return e}(),fetchData:function(t,e){var a=t.dispatch;switch(e){case"new":a("_fetchData","https://www.xiaoxihome.com/api/v2ex/new"),a("changeSort",{sortBy:"created",sortOrder:"descending"});break;case"popular":a("_fetchData","https://www.xiaoxihome.com/api/v2ex/popular"),a("changeSort",{sortBy:"replies",sortOrder:"descending"});break;default:a("_fetchData","https://www.xiaoxihome.com/api/v2ex/new"),a("changeSort",{sortBy:"created",sortOrder:"descending"})}}}};p["a"].use(_["a"]);var Dt=new _["a"].Store({modules:{postData:Ct},plugins:[St()()]}),Mt=Dt;p["a"].component(d["a"].name,d["a"]),p["a"].component(d["a"].Sider.name,d["a"].Sider),p["a"].component(d["a"].Header.name,d["a"].Header),p["a"].component(d["a"].Content.name,d["a"].Content),p["a"].component(u["a"].name,u["a"]),p["a"].component(u["a"].Item.name,u["a"].Item),p["a"].component(u["a"].SubMenu.name,u["a"].SubMenu),p["a"].component(l["a"].name,l["a"]),p["a"].component(i["a"].name,i["a"]),p["a"].component(c["a"].name,c["a"]),p["a"].component(o["a"].name,o["a"]),p["a"].component(r["a"].name,r["a"]),p["a"].component(n["a"].name,n["a"]),p["a"].component(n["a"].Option.name,n["a"].Option),p["a"].component(s["a"].name,s["a"]),p["a"].use(h["a"]),p["a"].config.productionTip=!1,new p["a"]({render:function(t){return t(yt)},router:rt,store:Mt}).$mount("#app")},"638f":function(t,e,a){},"6b5c":function(t,e,a){},"6ff8":function(t,e,a){"use strict";a("638f")},"7c55":function(t,e,a){"use strict";a("2395")},8244:function(t,e,a){"use strict";a("9842")},9842:function(t,e,a){},c0d1:function(t,e,a){},e441:function(t,e,a){},ec19:function(t,e,a){"use strict";a("6b5c")},f3e8:function(t,e,a){"use strict";a("31fd")}});
//# sourceMappingURL=app.8749d22d.js.map