(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),i=c.n(s),r=c(0),l={outline:"1px solid green",display:"inline-block"},d=function(e){var t=e.name,c=e.tag,a=e.location,n=e.avatar,s=e.followers,i=e.views,d=e.likes;return Object(r.jsxs)("div",{class:"profile",style:l,children:[Object(r.jsxs)("div",{class:"description",children:[Object(r.jsx)("img",{src:n,alt:t,class:"avatar",width:"240"}),Object(r.jsx)("p",{class:"name",children:t}),Object(r.jsxs)("p",{class:"tag",children:["@",c]}),Object(r.jsx)("p",{class:"location",children:a})]}),Object(r.jsxs)("ul",{class:"stats",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{class:"label",children:"Followers: "}),Object(r.jsx)("span",{class:"quantity",children:s})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{class:"label",children:"Views: "}),Object(r.jsx)("span",{class:"quantity",children:i})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{class:"label",children:"Likes: "}),Object(r.jsx)("span",{class:"quantity",children:d})]})]})]})},o=c(5),b=c.n(o),j=function(e){var t=e.label,c=e.percentage;return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{class:"label",children:t}),Object(r.jsx)("span",{class:"percentage",children:c})]})},u=Math.floor(16777215*Math.random()).toString(16),p={backgroundColor:"#".concat(u)},f={outline:"2px solid grey",display:"inline-block"},y=function(e){var t=e.title,c=e.items;return Object(r.jsxs)("section",{class:"statistics",style:f,children:[t&&Object(r.jsx)("h2",{class:"title",children:t}),Object(r.jsx)("ul",{class:"stat-list",children:c.map((function(e){return Object(r.jsx)("li",{class:"item",style:p,children:Object(r.jsx)(j,{label:e.label,percentage:e.percentage})},e.id)}))})]})};y.defaultProps={title:b.a.string};var h=y,O=function(e){var t=e.isOnline,c=e.avatar,a=e.name;e.id;return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:t?"On":"Off"}),Object(r.jsx)("img",{class:"avatar",src:c,alt:a,width:"48"}),Object(r.jsx)("p",{class:"name",children:a})]})},m={outline:"1px solid green",display:"inline-block"},x=function(e){var t=e.friends;return Object(r.jsx)("ul",{style:m,children:t.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(O,{isOnline:e.isOnline,avatar:e.avatar,name:e.name})},e.id)}))})},v=function(e){var t=e.type,c=e.amount,a=e.currency;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:a})]})},w=function(e){var t=e.items;return Object(r.jsxs)("table",{class:"transaction-history",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Currency"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(v,{type:e.type,amount:e.amount,currency:e.currency})}))})]})},g=c(2),k=c(6),U=c(7),J=c(8),S=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{name:g.name,tag:g.tag,location:g.location,avatar:g.avatar,alt:g.name,followers:g.stats.followers,viewers:g.stats.viewers,likes:g.stats.likes}),Object(r.jsx)(h,{title:"Upload stats",items:k}),Object(r.jsx)(x,{friends:U}),Object(r.jsx)(w,{items:J})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},6:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},7:function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},8:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.57a1e32d.chunk.js.map