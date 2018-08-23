(function(t){function e(e){for(var n,c,u=e[0],s=e[1],i=e[2],d=0,l=[];d<u.length;d++)c=u[d],o[c]&&l.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(l.length)l.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},a=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"86e5e868"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=n);var a,s=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(t),a=function(e){i.onerror=i.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");c.type=n,c.request=a,r[1](c)}o[t]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,s.appendChild(i)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("c21b"),o=r.n(n);o.a},"0acd":function(t,e,r){"use strict";var n=r("57cc"),o=r.n(n);o.a},1914:function(t,e,r){},"21bb":function(t,e,r){"use strict";var n=r("1914"),o=r.n(n);o.a},"2a3a":function(t,e,r){"use strict";var n=r("f518"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container",attrs:{id:"app"}},[r("HeaderApp"),r("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("nav",{staticClass:"header__nav nav"},[t._m(0),r("ul",{staticClass:"nav__list"},[r("li",{staticClass:"nav__item"},[r("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[t._v("Home")])],1),r("li",{staticClass:"nav__item"},[r("router-link",{staticClass:"nav__link",attrs:{to:"/about"}},[t._v("About")])],1)]),r("ShoppingCart",{staticClass:"nav__cart"})],1)])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("a",{staticClass:"logo__link",attrs:{href:"/"}},[r("span",[t._v("Vue")]),t._v("Shop")])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("router-link",{staticClass:"cart__link",attrs:{to:"/cart"}},[n("img",{attrs:{src:r("6058"),alt:"Cart"}}),t.numberProductsCart?n("span",{staticClass:"cart__counter"},[t._v(t._s(t.numberProductsCart))]):t._e()])],1)},i=[],d=r("c93e"),p=r("2f62"),l={name:"ShoppingCart",computed:Object(d["a"])({},Object(p["b"])(["numberProductsCart"])),methods:{getProducts:function(){this.$store.dispatch("getProductsCart")}},created:function(){this.getProducts()}},f=l,v=(r("0acd"),r("2877")),m=Object(v["a"])(f,s,i,!1,null,null,null);m.options.__file="ShoppingCart.vue";var h=m.exports,_={name:"HeaderApp",components:{ShoppingCart:h}},b=_,g=(r("2a3a"),Object(v["a"])(b,c,u,!1,null,null,null));g.options.__file="HeaderApp.vue";var C=g.exports,P={name:"app",components:{HeaderApp:C}},x=P,w=(r("034f"),Object(v["a"])(x,o,a,!1,null,null,null));w.options.__file="App.vue";var y=w.exports,O=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("Products")]),r("div",{staticClass:"products"},t._l(t.products,function(t){return r("product",{key:t.id,staticClass:"products__item",attrs:{product:t}})}))])},j=[],S=r("be6f"),E={name:"home",components:{Product:S["a"]},data:function(){return{products:[{id:1,product:"iPhone X",price:"78000"},{id:2,product:"Xiaomi 4x",price:"14000"},{id:3,product:"Samsung GT666",price:"66000"},{id:4,product:"Huawei P9 Lite",price:"23000"},{id:5,product:"iPhone 5",price:"8000"},{id:6,product:"Xiaomi 4x note",price:"28000"},{id:7,product:"Samsung Galaxy 9",price:"88000"},{id:8,product:"Huawei P9 Lite",price:"15000"}]}}},U=E,$=(r("21bb"),Object(v["a"])(U,k,j,!1,null,null,null));$.options.__file="Home.vue";var A=$.exports;n["a"].use(O["a"]);var R=new O["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/cart",name:"cart",component:function(){return r.e("about").then(r.bind(null,"b789"))}}]}),T=(r("96cf"),r("3040")),I={BASE_URL:"http://89.108.65.123:8080",$http:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET";return fetch("".concat(this.BASE_URL).concat(t),{method:e}).then(function(t){return t.json()})},getProductsOfCart:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?"?user_id=".concat(t):"";return this.$http("/shop".concat(e))},addProductInCart:function(t,e){var r="?user_id=".concat(t,"&product=").concat(e.product,"&price=").concat(e.price);return this.$http("/shop".concat(r),"POST")},removeProductFromCart:function(t,e){var r="?user_id=".concat(t,"&product_id=").concat(e);return this.$http("/shop".concat(r),"DELETE")}},H=I,L={state:{products:[]},getters:{productsInCart:function(t){return t.products},numberProductsCart:function(t){return t.products.length}},mutations:{setProducts:function(t,e){t.products=e}},actions:{getProductsCart:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(e){var r,n,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("hasUser");case 4:if(!t.sent){t.next=13;break}return t.next=7,r("getUser");case 7:return a=t.sent,t.next=10,H.getProductsOfCart(a.id);case 10:o=t.sent,t.next=17;break;case 13:return t.next=15,H.getProductsOfCart();case 15:o=t.sent,r("setUser",{id:o.user_id});case 17:n("setProducts",o.cart),t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](1),console.log(t.t0);case 23:case"end":return t.stop()}},t,this,[[1,20]])}));return function(e){return t.apply(this,arguments)}}(),addProductCart:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(e,r){var n,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,o=r.product,t.prev=2,t.next=5,n("getUser");case 5:return a=t.sent,t.next=8,H.addProductInCart(a.id,o);case 8:n("getProductsCart"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}},t,this,[[2,11]])}));return function(e,r){return t.apply(this,arguments)}}(),removeProductCart:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.prev=1,t.next=4,n("getUser");case 4:return o=t.sent,t.next=7,H.removeProductFromCart(o.id,r.id);case 7:n("getProductsCart"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e,r){return t.apply(this,arguments)}}()}},B=L,M=(r("7f7f"),{state:{id:null,name:null},getters:{userName:function(t){return t.name},userId:function(t){return t.id},hasUser:function(t){return!!t.id}},mutations:{setUser:function(t,e){t.id=e.id,t.name=e.name}},actions:{setUser:function(t,e){var r=t.commit,n=e.id,o=e.name,a=void 0===o?"Гость":o;localStorage.setItem("user_id",n),localStorage.setItem("user_name",a),console.log(n),r("setUser",{id:n,name:a})},hasUser:function(t){var e=t.dispatch,r=t.state;return!r.id&&localStorage.getItem("user_id")&&e("setUser",{id:localStorage.getItem("user_id")}),r.id||!r.id&&localStorage.getItem("user_id")},getUser:function(t){var e=t.state;return{id:e.id,name:e.name}}}}),G=M;n["a"].use(p["a"]);var X=new p["a"].Store({modules:{cart:B,user:G},state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:R,store:X,render:function(t){return t(y)}}).$mount("#app")},"57cc":function(t,e,r){},6058:function(t,e,r){t.exports=r.p+"img/icon-cart.9b3a588d.svg"},"6d2c":function(t,e,r){},"7cd1":function(t,e,r){"use strict";var n=r("6d2c"),o=r.n(n);o.a},be6f:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("h2",{staticClass:"product__title"},[t._v(t._s(t.product.product))]),r("p",{staticClass:"product__price"},[r("span",[t._v(t._s(t.product.price))]),t._v(" RUB")]),t.product.product_id?t._e():r("button",{staticClass:"product__btn",on:{click:t.addProduct}},[t._v("Add to cart")]),t.product.product_id?r("button",{staticClass:"product__btn"},[t._v("Buy")]):t._e(),t.product.product_id?r("button",{staticClass:"product__btn product__btn--red",on:{click:t.removeProduct}},[t._v("Remove")]):t._e()])},o=[],a={name:"product",props:["product"],methods:{addProduct:function(){this.$store.dispatch("addProductCart",{product:this.product})},removeProduct:function(){this.$store.dispatch("removeProductCart",{id:this.product.product_id})}}},c=a,u=(r("7cd1"),r("2877")),s=Object(u["a"])(c,n,o,!1,null,null,null);s.options.__file="Product.vue";e["a"]=s.exports},c21b:function(t,e,r){},f518:function(t,e,r){}});
//# sourceMappingURL=app.fda55fa3.js.map