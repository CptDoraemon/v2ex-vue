(function(e){function t(t){for(var s,c,o=t[0],i=t[1],l=t[2],f=0,u=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/v2ex-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2222:function(e,t,a){"use strict";a("7077")},"3e8e":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"47f1":function(e,t,a){"use strict";a("d89e")},"56d7":function(e,t,a){"use strict";a.r(t);a("b0c0"),a("dd98");var s=a("3779"),n=(a("7f6b"),a("8592")),r=(a("8fb1"),a("0c63")),c=(a("fbd8"),a("55f1")),o=(a("1a62"),a("98c5")),i=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{staticClass:"root"},[a("side-bar",{attrs:{collapsed:e.collapsed}}),a("a-layout",[a("global-header",{attrs:{collapsed:e.collapsed},on:{"toggle-collapsed":e.toggleCollapsed}}),a("router-view")],1)],1)},d=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-sider",{attrs:{trigger:null,collapsible:""},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[a("h1",{staticClass:"title"},[e._v(" v2ex-vue ")]),a("a-menu",{attrs:{theme:"dark",mode:"inline",selectedKeys:e.selected}},e._l(e.menuItems,(function(t,s){return a("router-link",{key:s,attrs:{to:t.link}},[a("a-menu-item",[a("a-icon",{attrs:{type:"user"}}),a("span",{staticClass:"menu-item"},[e._v(e._s(s))])],1)],1)})),1)],1)},u=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-content",{staticClass:"content"},[e.isLoading?a("div",{staticClass:"message-container"},[a("a-spin",{attrs:{tip:"Fetching Posts..."}})],1):e._e(),e.isError?a("div",{staticClass:"message-container"},[a("a-result",{attrs:{status:"error",title:"Server Error","sub-title":e.errorMessage}})],1):e._e(),e._l(e.data,(function(e,t){return a("post-card",{key:t,attrs:{data:e}})}))],2)},j=[],p=a("5530"),m=a("2f62"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" "+e._s(e.data.title)+" ")])},g=[],v={name:"PostCard",props:{data:Object}},y=v,k=a("2877"),w=Object(k["a"])(y,h,g,!1,null,"1ea139f5",null),x=w.exports,_={name:"MainContent",components:{PostCard:x},computed:Object(p["a"])(Object(p["a"])(Object(p["a"])({},Object(m["c"])("postData",["data","errorMessage","isLoading"])),Object(m["b"])("postData",["isError"])),{},{tab:function(e){return e.$route.params.tab}}),methods:{fetchData:function(){this.$store.dispatch("postData/fetchData",this.tab)}},mounted:function(){this.fetchData()},watch:{tab:function(e,t){e!==t&&this.fetchData()}}},O=_,z=(a("2222"),Object(k["a"])(O,b,j,!1,null,"062c5d2c",null)),D=z.exports,C=a("8c4f"),E={root:"/",new:"/tab/new",popular:"/tab/popular"},M=[{path:"/",redirect:E.new},{path:"/tab/:tab",component:D}],S=new C["a"]({routes:M,mode:"history",base:"/v2ex-vue/"}),P=E,$={name:"SideBar",components:{},data:function(){return{menuItems:{new:{link:P.new},popular:{link:P.popular}}}},props:{collapsed:Boolean},computed:{selected:function(e){return[e.$route.params.tab]}}},F=$,L=(a("8aff"),Object(k["a"])(F,f,u,!1,null,"13225157",null)),B=L.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-header",{staticStyle:{background:"#fff",padding:"0"}},[a("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:function(t){return e.$emit("toggle-collapsed")}}})],1)},I=[],T={name:"GlobalHeader",components:{},props:{collapsed:Boolean}},W=T,q=(a("47f1"),Object(k["a"])(W,H,I,!1,null,"68c0be1e",null)),G=q.exports,J={name:"App",components:{GlobalHeader:G,SideBar:B},data:function(){return{collapsed:!1}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed}}},N=J,R=(a("999f"),Object(k["a"])(N,l,d,!1,null,"ccd9ec5a",null)),U=R.exports,A=(a("96cf"),a("1da1")),K=a("2ef0"),Q=a("bc3a"),V=a.n(Q),X={namespaced:!0,state:{data:[],isLoading:!1,errorMessage:""},getters:{isError:function(e){return""!==e.errorMessage}},mutations:{startFetching:function(e){e.data=[],e.isLoading=!0,e.errorMessage=""},endFetchingWithData:function(e,t){e.data=Object(K["cloneDeep"])(t),e.isLoading=!1},endFetchingWithError:function(e,t){e.errorMessage=t,e.isLoading=!1}},actions:{_fetchData:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t,a){var s,n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=t.commit,n=t.state,e.prev=1,!n.isLoading){e.next=4;break}return e.abrupt("return");case 4:return s("startFetching"),e.next=7,V.a.get(a);case 7:r=e.sent,s("endFetchingWithData",r.data.data),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),c=e.t0.response&&e.t0.response.message?e.t0.response.message:"Failed to fetch the post data at the moment, please try again later.",s("endFetchingWithError",c);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,a){return e.apply(this,arguments)}return t}(),fetchData:function(e,t){var a=e.dispatch;switch(t){case"new":a("_fetchData","https://www.xiaoxihome.com/api/v2ex/new");break;case"popular":a("_fetchData","https://www.xiaoxihome.com/api/v2ex/popular");break;default:a("_fetchData","https://www.xiaoxihome.com/api/v2ex/new")}}}};i["a"].use(m["a"]);var Y=new m["a"].Store({modules:{postData:X}}),Z=Y;i["a"].component(o["a"].name,o["a"]),i["a"].component(o["a"].Sider.name,o["a"].Sider),i["a"].component(o["a"].Header.name,o["a"].Header),i["a"].component(o["a"].Content.name,o["a"].Content),i["a"].component(c["a"].name,c["a"]),i["a"].component(c["a"].Item.name,c["a"].Item),i["a"].component(r["a"].name,r["a"]),i["a"].component(n["a"].name,n["a"]),i["a"].component(s["a"].name,s["a"]),i["a"].use(C["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(U)},router:S,store:Z}).$mount("#app")},7077:function(e,t,a){},"8aff":function(e,t,a){"use strict";a("ab00")},"999f":function(e,t,a){"use strict";a("3e8e")},ab00:function(e,t,a){},d89e:function(e,t,a){}});
//# sourceMappingURL=app.9d096d7a.js.map