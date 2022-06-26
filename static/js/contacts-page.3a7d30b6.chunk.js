"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[141],{9623:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(2791),s=n(885),i=n(7459),r=n(9434),c="ContactForm_form__Yhze-",l="ContactForm_label__evum1",o="ContactForm_input__6Ahzm",m=n(3071),u=n(2015),d=n(184),_=function(){var e=(0,a.useState)(""),t=(0,s.Z)(e,2),n=t[0],_=t[1],h=(0,a.useState)(""),x=(0,s.Z)(h,2),p=x[0],f=x[1],b=(0,r.v9)(m.l.K2),j=(0,r.v9)(u.u.LP),v=(0,r.I0)(),C=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":_(a);break;case"number":f(a)}},N=function(){_(""),f("")};return(0,d.jsxs)("form",{className:c,onSubmit:function(e){if(e.preventDefault(),b.find((function(e){return e.name===n})))return alert("".concat(n," is already in contacts")),void _("");v(m.m.addContact({user:{name:n,number:p},token:j})),N()},children:[(0,d.jsxs)("label",{className:l,children:["Name:",(0,d.jsx)("input",{type:"text",name:"name",value:n,onChange:C,className:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{className:l,children:["Number:",(0,d.jsx)("input",{type:"number",name:"number",value:p,onChange:C,className:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)(i.Z,{type:"submit",title:"Add"})]})},h=n(3504),x=n(6871),p={description:"ContactListItem_description__tdKz8",box:"ContactListItem_box__F2z-F",number:"ContactListItem_number__9siMi",list:"ContactListItem_list__ZtYXg",item:"ContactListItem_item__+t0+z"},f=function(e){var t=e.name,n=e.number,a=e.id,s=e.token,c=(0,r.I0)(),l=(0,x.TH)();return(0,d.jsxs)("div",{className:p.description,children:[(0,d.jsxs)("div",{className:p.box,children:[(0,d.jsxs)("p",{children:[t,":"]}),(0,d.jsx)("span",{className:p.number,children:n})]}),(0,d.jsx)("div",{className:p.boxButton,children:(0,d.jsxs)("ul",{className:p.list,children:[(0,d.jsx)("li",{className:p.item,children:(0,d.jsx)(i.Z,{type:"button",title:"Delete",onClick:function(){return function(e){c(m.m.deleteContact({id:e,token:s}))}(a)}})}),(0,d.jsx)("li",{className:p.item,children:(0,d.jsx)(h.rU,{to:{pathname:"".concat(l.pathname,"/").concat(a),state:{id:a,from:l}},children:(0,d.jsx)(i.Z,{type:"button",title:"Update",onClick:function(){c(m.m.stateModal(!0))}})})})]})})]})},b="ContactList_list__tHlqa",j="ContactList_item__rkWZR",v=function(){var e=(0,r.v9)(m.l.Jr),t=(0,r.v9)(u.u.LP),n=(0,r.I0)();return(0,a.useEffect)((function(){t&&n(m.m.getContacts(t))}),[n,t]),(0,d.jsx)("ul",{className:b,children:e&&e.map((function(e){var n=e.name,a=e.number,s=e.id;return(0,d.jsx)("li",{className:j,children:(0,d.jsx)(f,{name:n,number:a,id:s,token:t})},s)}))})},C="Filter_filter__YIGsx",N="Filter_label__zpcfF",k="Filter_input__8xWX+",g=function(){var e=(0,r.v9)(m.l.zK),t=(0,r.I0)();return(0,d.jsx)("div",{className:C,children:(0,d.jsxs)("label",{className:N,children:["Enter name for filter:",(0,d.jsx)("input",{type:"text",value:e,onChange:function(e){return t(m.m.filter(e.target.value))},className:k})]})})},z=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(_,{}),(0,d.jsx)(g,{}),(0,d.jsx)(v,{})]})}}}]);
//# sourceMappingURL=contacts-page.3a7d30b6.chunk.js.map