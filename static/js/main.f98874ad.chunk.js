(this["webpackJsonpcaffe-table-tracker"]=this["webpackJsonpcaffe-table-tracker"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(8),l=n.n(a),s=(n(15),n(16),n(2));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.createElement("g",null,r.createElement("g",null,r.createElement("circle",{cx:215.001,cy:236.049,r:70.4}))),j=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M215.001,103.849c-72.9,0-132.1,59.3-132.1,132.1s59.2,132.2,132.1,132.2s132.1-59.3,132.1-132.1 S287.901,103.849,215.001,103.849z M215.001,326.449c-50,0-90.4-40.5-90.4-90.4c0-49.9,40.5-90.4,90.4-90.4s90.4,40.5,90.4,90.4 C305.401,285.949,264.901,326.449,215.001,326.449z"}))),b=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M69.001,56.049c-5.5,0-10,4.5-10,10v46h-9.6l-0.4-46c0-5.5-4.5-10-10-10h-0.1c-5.5,0.1-10,4.6-9.9,10.1l0.3,45.9h-9.3v-46 c0-5.5-4.5-10-10-10s-10,4.5-10,10v54.2c0,0.3,0,0.6,0,0.9s0,0.6,0,0.9v25.3c-0.1,17.9,11.9,33.7,29.2,38.4l0.3,190.3h20 l-0.5-190.2c17.7-4.4,30.1-20.4,30.1-38.6v-25.3c0-0.3,0-0.6,0-0.9s0-0.6,0-0.9v-54.1C79.001,60.549,74.501,56.049,69.001,56.049z "}))),d=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M425.001,45.249c-3.2-1.7-7.1-1.6-10.1,0.4l-50.7,32.8c-2.8,1.9-4.6,5-4.5,8.4l0.4,160.1c0,5.5,4.5,10,10,10h9.4 l-10.1,118.2c-0.5,5.5,3.6,10.3,9.1,10.8c0.3,0,0.6,0,0.9,0h41c5.4,0,9.7-4.4,9.6-9.8c0-0.1,0-0.2,0-0.2v-321.9 C430.101,50.449,428.101,47.049,425.001,45.249z"}))),m=r.createElement("g",null),O=r.createElement("g",null),h=r.createElement("g",null),f=r.createElement("g",null),x=r.createElement("g",null),v=r.createElement("g",null),g=r.createElement("g",null),p=r.createElement("g",null),N=r.createElement("g",null),k=r.createElement("g",null),y=r.createElement("g",null),C=r.createElement("g",null),E=r.createElement("g",null),w=r.createElement("g",null),M=r.createElement("g",null);function S(e,t){var n=e.title,c=e.titleId,a=i(e,["title","titleId"]);return r.createElement("svg",u({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 430.004 430.004",style:{enableBackground:"new 0 0 430.004 430.004"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,o,j,b,d,m,O,h,f,x,v,g,p,N,k,y,C,E,w,M)}var P=r.forwardRef(S),z=(n.p,n(17),Object(r.createContext)()),G=function(e){var t=e.children,n=Object(r.useState)({length:4}),a=Object(s.a)(n,2),l=a[0],u=a[1],i=Object(r.useState)({guestNum:"",tableNum:""}),o=Object(s.a)(i,2),j=o[0],b=o[1],d=Object(r.useState)([]),m=Object(s.a)(d,2),O=m[0],h=m[1],f=Object(r.useState)([]),x=Object(s.a)(f,2),v={reducer:function(e,t){return e+t},orders:O,setOrders:h,guest:j,setGuest:b,caffeProfit:x[0],setCaffeProfit:x[1],howManyTables:l,setHowManyTables:u};return Object(c.jsx)(z.Provider,{value:v,children:t})},T=(n(18),function(){var e=Object(r.useContext)(z),t=e.howManyTables,n=e.setHowManyTables;return Object(c.jsxs)("div",{className:"add-remove-tables",children:[Object(c.jsx)("button",{onClick:function(){n((function(e){return{length:e.length-1}}))},children:"\u2212"}),Object(c.jsx)("button",{children:t.length}),Object(c.jsx)("button",{onClick:function(){n((function(e){return{length:e.length+1}}))},children:"+"})]})}),B=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("header",{children:[Object(c.jsx)("h3",{children:"Caffe"}),Object(c.jsx)(P,{className:"icon"}),Object(c.jsxs)("div",{className:"dropdown-container",children:[Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"add-table-icon",children:"\u25bd"}),n&&Object(c.jsxs)("div",{className:"tabels-dropdown",children:[Object(c.jsx)("h4",{className:"tabels-drop-header",children:"Num of Tabels"}),Object(c.jsx)(T,{}),Object(c.jsx)("h4",{className:"tabels-drop-done",onClick:function(){return a(!n)},children:"Done"})]})]})]})},H=n(3),I=(n(19),function(){var e=Object(r.useContext)(z),t=e.guest,n=e.setOrders,a=function(e){t.guestNum&&n((function(n){return n.concat(Object(H.a)(Object(H.a)({},t),{},{product:e}))}))};return Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsxs)("div",{className:"products",children:[Object(c.jsx)("h4",{className:"pasta-pizza-drink-menu",children:"Pasta:"}),[{Milanese:320},{Bolognese:350},{Lasagna:380},{Carbonara:360}].map((function(e){return Object(c.jsxs)("li",{className:"menu-item",onClick:function(){return a(e)},children:[Object.keys(e),""," ",Object.values(e)]},Object.keys(e))}))]}),Object(c.jsxs)("div",{className:"products",children:[Object(c.jsx)("h4",{className:"pasta-pizza-drink-menu",children:"Pizza:"}),[{Sicilian:250},{Caprese:220},{Pepperoni:300},{Margherita:280},{Napoletana:200}].map((function(e){return Object(c.jsxs)("li",{className:"menu-item",onClick:function(){return a(e)},children:[Object.keys(e),""," ",Object.values(e)]},Object.keys(e))}))]}),Object(c.jsxs)("div",{className:"products",children:[Object(c.jsx)("h4",{className:"pasta-pizza-drink-menu",children:"Drink:"}),[{Cola:80},{Sprite:80},{Fanta:80},{Tea:50},{Coffe:60}].map((function(e){return Object(c.jsxs)("li",{className:"menu-item",onClick:function(){return a(e)},children:[Object.keys(e),""," ",Object.values(e)]},Object.keys(e))}))]})]})}),D=n(9),A=n(5),J=(n(20),function(e){var t=e.guestNum,n=e.tableNum,a=e.tabels,l=Object(r.useContext)(z),s=l.orders,u=l.guest,i=l.setGuest,o=l.setOrders;return Object(c.jsxs)("div",{className:"guest",children:[Object(c.jsxs)("h5",{children:[" Guest ",t,":"]}),Object(c.jsx)("div",{className:"ordered-products",children:s.map((function(e){return e.tableNum===n&&e.guestNum===t&&Object(c.jsx)("li",{onClick:function(){return t=e,void(!a[n]&&o((function(e){return e.filter((function(e){return e!==t}))})));var t},className:"order",children:Object.keys(e.product)},1e4*Math.random())}))}),a[n]?Object(c.jsx)("h5",{className:"make-order-disabled",children:"Bill"}):Object(c.jsx)("h5",{onClick:function(){return function(e,t){i({guestNum:e,tableNum:t})}(t,n)},className:u.guestNum===t&&u.tableNum===n?"make-order-active":"make-order",children:"Order"})]})}),F=(n(21),function(e){var t=e.howManyGuests,n=e.setHowManyGuests;return Object(c.jsxs)("div",{className:"add-remove-guest",children:[Object(c.jsx)("button",{onClick:function(){n((function(e){return{length:e.length-1}}))},children:"\u2212"}),Object(c.jsx)("button",{children:t.length}),Object(c.jsx)("button",{onClick:function(){n((function(e){return{length:e.length+1}}))},children:"+"})]})}),L=(n(22),function(e){var t=e.tableNum,n=Object(r.useState)({}),a=Object(s.a)(n,2),l=a[0],u=a[1],i=Object(r.useState)(!1),o=Object(s.a)(i,2),j=o[0],b=o[1],d=Object(r.useState)({length:4}),m=Object(s.a)(d,2),O=m[0],h=m[1],f=Object(r.useContext)(z),x=f.orders,v=f.setGuest,g=f.setOrders,p=f.setCaffeProfit,N=f.reducer,k=x.map((function(e){return t===e.tableNum&&Object.values(e.product).reduce(N)})),y=!!k.length&&k.reduce(N),C=Array.from(O);return Object(c.jsxs)("div",{className:"tabel-container",children:[Object(c.jsxs)("div",{className:"tabel-header",children:[Object(c.jsxs)("div",{children:[" Number of tabel: ",t]}),Object(c.jsx)("div",{className:"add-guest-dropdown-icon",onClick:function(){return b(!j)},children:"\u229c"})]}),j&&Object(c.jsxs)("div",{className:"guest-dropdown",children:[Object(c.jsx)("h4",{children:"Num of Guests"}),Object(c.jsx)(F,{setHowManyGuests:h,howManyGuests:O}),Object(c.jsx)("h4",{className:"guest-drop-done",onClick:function(){return b(!j)},children:"Done"})]}),Object(c.jsxs)("div",{className:"tabel",children:[Object(c.jsx)("div",{className:"guests-container",children:C.map((function(e,n){return Object(c.jsx)(J,{guestNum:n+1,tableNum:t,tabels:l},n+1)}))}),Object(c.jsxs)("div",{className:"tabel-buttons",children:[Object(c.jsx)("button",{onClick:function(){return e=t,v({guestNum:"",tableNum:""}),void u(Object(H.a)(Object(H.a)({},l),{},Object(A.a)({},e,!0)));var e},className:l[t]?"disabled-button":"",children:"Complete"}),Object(c.jsx)("button",{className:l[t]?"":"disable-button",onClick:function(){return e=t,p((function(e){return[].concat(Object(D.a)(e),[y])})),g((function(t){return t.filter((function(t){return t.tableNum!==e}))})),void u(Object(H.a)(Object(H.a)({},l),{},Object(A.a)({},e,!1)));var e},children:"Pay"})]}),Object(c.jsxs)("div",{className:"tabel-bill",children:[Object(c.jsx)("h5",{children:"Total bill:"}),Object(c.jsx)("h5",{className:l[t]?"tabel-price-to-pay":"tabel-price",children:y>0&&y})]})]})]})}),R=(n(23),function(){var e=Object(r.useContext)(z).howManyTables,t=Array.from(e);return Object(c.jsx)("div",{className:"tabels",children:t.map((function(e,t){return Object(c.jsx)(L,{tableNum:t+1},t+1)}))})}),_=(n(24),function(){var e=Object(r.useContext)(z),t=e.caffeProfit,n=e.reducer,a=!!t.length&&t.reduce(n);return Object(c.jsxs)("div",{className:"total-profit",children:[Object(c.jsx)("h1",{className:"profit",children:"Caffe Profit:"}),Object(c.jsxs)("h1",{className:"profit-amount",children:[a," "]})]})}),q=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(G,{children:[Object(c.jsx)(B,{}),Object(c.jsx)(I,{}),Object(c.jsx)(R,{}),Object(c.jsx)(_,{})]})})};l.a.render(Object(c.jsx)(q,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.f98874ad.chunk.js.map