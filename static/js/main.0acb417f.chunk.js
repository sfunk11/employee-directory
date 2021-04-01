(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(13),s=n.n(r),i=(n(20),n(3)),l=n(15),o=(n(21),c.a.createContext({})),d=n(0),j=function(){var e=Object(a.useContext)(o).tableState;return Object(d.jsx)("tbody",{children:void 0!==e.filteredUsers[0]?e.filteredUsers.map((function(e){var t=e.login,n=e.name,a=e.picture,c=e.phone,r=e.email,s=e.location;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(d.jsx)("img",{src:a.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(d.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(d.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(d.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(d.jsx)("a",{href:"mailto:"+r,target:"__blank",children:r})}),Object(d.jsxs)("td",{"data-th":"Location",className:"align-middle",children:[s.city,", ",s.state]})]},t.uuid)})):Object(d.jsx)(d.Fragment,{})})},b=(n(23),function(){var e=Object(a.useContext)(o),t=e.tableState,n=e.handleSort;return Object(d.jsx)("div",{className:"datatable mt-5",children:Object(d.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:t.headings.map((function(e){var t=e.name,a=e.width;return Object(d.jsxs)("th",{className:"col",style:{width:a},onClick:function(){n(t.toLowerCase())},children:[t,Object(d.jsx)("span",{className:"pointer"})]},t)}))})}),Object(d.jsx)(j,{})]})})}),h=(n(24),function(){var e=Object(a.useContext)(o).handleNameChange;return Object(d.jsx)("div",{className:"searchbox",children:Object(d.jsxs)("form",{className:"form-inline",children:[Object(d.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Enter First Name","aria-label":"Search",onChange:function(t){return e(t)}}),Object(d.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search Name"})]})})}),u=(n(25),function(){var e=Object(a.useContext)(o).handleLocationChange;return Object(d.jsx)("div",{className:"searchbox",children:Object(d.jsxs)("form",{className:"form-inline",children:[Object(d.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Enter State","aria-label":"Search",onChange:function(t){return e(t)}}),Object(d.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search Location"})]})})});n(26);var m=function(){return Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light float-center bg-light",children:[Object(d.jsx)("div",{className:"search-area float-left col-6",children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:"search-area justify-right col-6",children:Object(d.jsx)(u,{})})]})},f=n(14),O=n.n(f),x=function(){return O.a.get("https://randomuser.me/api/?results=100&nat=us")},g=(n(45),function(){var e=Object(a.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"Location",width:"20%"}]}),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){x().then((function(e){console.log(e),c(Object(i.a)(Object(i.a)({},n),{},{users:e.data.results,filteredUsers:e.data.results})),console.log(n.filteredUsers)}))}),[]),Object(d.jsxs)(o.Provider,{value:{tableState:n,handleSort:function(e){"descend"===n.order?c({order:"ascend"}):c({order:"descend"});var t=n.filteredUsers.sort((function(t,a){if("ascend"===n.order)return void 0===t[e]?1:void 0===a[e]?-1:"name"===e?t[e].first.localeCompare(a[e].first):a[e]-t[e]}));c(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:t}))},handleNameChange:function(e){var t=e.target.value,a=n.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));c(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:a}))},handleLocationChange:function(e){var t=e.target.value,a=n.users.filter((function(e){return-1!==e.location.state.toLowerCase().indexOf(t.toLowerCase())}));c(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:a}))}},children:["\xa0\xa0\xa0\xa0\xa0\xa0",Object(d.jsx)(m,{}),Object(d.jsx)(b,{}),"\xa0\xa0\xa0\xa0"]})});n(46);var p=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g,{})})},v=(n(47),function(e){return Object(d.jsx)("main",Object(i.a)({className:"wrapper"},e))});n(48);var N=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Employee Directory"}),Object(d.jsx)("p",{children:"You can search by either Name or Location to filter the list."}),Object(d.jsx)("p",{children:"Or you can sort the list by clicking on the heading for the Name column."})]})},y=(n(49),function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("span",{children:"Created by Sam Funk 2021"})})});n(50);var C=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(v,{children:[Object(d.jsx)(N,{}),Object(d.jsx)(p,{}),Object(d.jsx)(y,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(51);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),w()}},[[52,1,2]]]);
//# sourceMappingURL=main.0acb417f.chunk.js.map