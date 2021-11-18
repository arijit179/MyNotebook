(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),r=a.n(c),l=(a(26),a(8)),o=a(11),i=a(2),d=(a(27),a(10)),b=a(9),j=Object(n.createContext)(),m=a(0),u=function(e){var t=Object(n.useContext)(j).deleteNote,a=e.note,s=e.updateNote;return Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)("div",{className:"card my-3",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsx)("h6",{className:"card-title",children:a.title}),Object(m.jsx)("i",{className:"far fa-edit mx-2",onClick:function(){s(a)}}),Object(m.jsx)("i",{className:"far fa-trash-alt",onClick:function(){t(a._id),e.showAlert("Deleted note successfully","success")}})]}),Object(m.jsx)("p",{className:"card-text",children:a.description})]})})})},h=function(e){var t=Object(n.useContext)(j).addNote,a=Object(n.useState)({title:"",description:"",tag:""}),s=Object(l.a)(a,2),c=s[0],r=s[1],o=function(e){r(Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{style:{marginTop:"60px"},children:" Add Note "}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"title",value:c.title,name:"title",onChange:o,minLength:3,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"description",value:c.description,name:"description",onChange:o,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"tag",value:c.tag,name:"tag",onChange:o,minLength:3,required:!0})]}),Object(m.jsx)("button",{type:"submit",disabled:c.title.length<3||c.description.length<5||c.tag.length<3,className:"btn btn-primary",onClick:function(a){t(c.title,c.description,c.tag),r({title:"",description:"",tag:""}),e.showAlert("Added note successfully","success"),a.preventDefault()},children:"Add Note"})]})]})},p=function(e){var t=Object(i.f)(),a=Object(n.useContext)(j),s=a.notes,c=a.getNotes,r=a.editNote;Object(n.useEffect)((function(){localStorage.getItem("token")?c():t.push("/login")}),[]);var o=Object(n.useRef)(null),p=Object(n.useRef)(null),x=Object(n.useState)({id:"",etitle:"",edescription:"",etag:""}),O=Object(l.a)(x,2),f=O[0],g=O[1],N=function(e){o.current.click(),g({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},v=function(e){g(Object(b.a)(Object(b.a)({},f),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{showAlert:e.showAlert},"addingNote"),Object(m.jsx)("button",{ref:o,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(m.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsxs)("form",{className:"my-3",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:f.etitle,"aria-describedby":"emailHelp",onChange:v,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:f.edescription,onChange:v,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:f.etag,onChange:v})]})]})}),Object(m.jsxs)("div",{className:"modal-footer",children:[Object(m.jsx)("button",{ref:p,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(m.jsx)("button",{disabled:f.etitle.length<3||f.edescription.length<5||f.etag.length<3,onClick:function(t){r(f.id,f.etitle,f.edescription,f.etag),p.current.click(),e.showAlert("Updated note successfully","success")},type:"button",className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(m.jsxs)("div",{className:"row my-3",children:[Object(m.jsx)("h2",{children:"You Notes"}),Object(m.jsx)("div",{className:"container mx-2",children:0===s.length&&"No notes to display"}),s.map((function(t){return Object(m.jsx)(u,{updateNote:N,showAlert:e.showAlert,note:t},t._id)}))]})]})},x=function(e){var t=e.showAlert;return Object(m.jsx)("div",{children:Object(m.jsx)(p,{showAlert:t})})},O=a(4),f=a.n(O),g=a(12),N=function(e){var t=Object(i.f)(),a=Object(n.useState)({name:"",email:"",password:""}),s=Object(l.a)(a,2),c=s[0],r=s[1],o=function(){var a=Object(g.a)(f.a.mark((function a(n){var s,l,o,i,d;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),s=c.name,l=c.email,o=c.password,a.next=4,fetch("http://localhost:5000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:l,password:o})});case 4:return i=a.sent,a.next=7,i.json();case 7:d=a.sent,console.log(d),d.success?(localStorage.setItem("token",d.authtoken),t.push("/"),e.showAlert("Account created successfully","success")):e.showAlert("Invalid credentials","danger"),r({email:"",password:""});case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),j=function(e){r(Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container mt-4",children:[Object(m.jsx)("h2",{children:"Create an account to use iNotebook"}),Object(m.jsxs)("form",{onSubmit:o,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(m.jsx)("input",{type:"name",className:"form-control",id:"name",name:"name",onChange:j})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",onChange:j,"aria-describedby":"emailHelp"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"current-password",className:"form-control",id:"password",name:"password",onChange:j,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:"cPassword"}),Object(m.jsx)("input",{type:"current-password",className:"form-control",id:"cpassword",name:"cpassword",onChange:j,minLength:5,required:!0})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},v=function(e){var t=Object(i.f)(),a=Object(n.useState)({email:"",password:""}),s=Object(l.a)(a,2),c=s[0],r=s[1],o=function(){var a=Object(g.a)(f.a.mark((function a(n){var s,l;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.email,password:c.password})});case 3:return s=a.sent,a.next=6,s.json();case 6:l=a.sent,console.log(l),l.success?(localStorage.setItem("token",l.authtoken),e.showAlert("Logged in successfully","success"),t.push("/")):e.showAlert("Invalid credentials","danger"),r({email:"",password:""});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),j=function(e){r(Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container mt-3",children:[Object(m.jsx)("h2",{children:"Login to continue to iNotebook"}),Object(m.jsxs)("form",{onSubmit:o,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:c.email,onChange:j,"aria-describedby":"emailHelp"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"current-password",className:"form-control",name:"password",value:c.password,onChange:j})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},y=function(){var e=Object(i.f)(),t=Object(i.g)();return s.a.useEffect((function(){}),[t]),Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(o.b,{className:"navbar-brand",to:"/",children:"iNotebook"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(m.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link ".concat("/"===t.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{className:"nav-link ".concat("/about"===t.pathname?"active":""),to:"/about",children:"About"})})]}),localStorage.getItem("token")?Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){localStorage.removeItem("token"),e.push("/login")},children:"Logout"}):Object(m.jsxs)("form",{className:"d-flex",children:[Object(m.jsx)(o.b,{className:"btn btn-primary mx-1",to:"/signup",role:"button",children:"Signup"}),Object(m.jsx)(o.b,{className:"btn btn-primary mx-1",to:"/login",role:"button",children:"Login"})]})]})]})})},w=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"This is about page."})})},k=function(e){var t="http://localhost:5000",a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],r=s[1],o=function(){var e=Object(g.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(g.a)(f.a.mark((function e(a,n,s){var l,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:s})});case 2:return l=e.sent,e.next=5,l.json();case 5:o=e.sent,r(c.concat(o));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(g.a)(f.a.mark((function e(a){var n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent,s=c.filter((function(e){return e._id!==a})),r(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(g.a)(f.a.mark((function e(a,n,s,l){var o,i,d;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:n,description:s,tag:l})});case 2:return o=e.sent,e.next=5,o.json();case 5:e.sent,i=JSON.parse(JSON.stringify(c)),d=0;case 8:if(!(d<c.length)){e.next=18;break}if(i[d]._id!==a){e.next=15;break}return i[d].title=n,i[d].description=s,i[d].tag=l,e.abrupt("break",18);case 15:d++,e.next=8;break;case 18:r(i);case 19:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}();return Object(m.jsx)(j.Provider,{value:{notes:c,addNote:i,deleteNote:d,editNote:b,getNotes:o},children:e.children})};var C=function(e){return e.alert&&Object(m.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(m.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var S=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],c=function(e,t){s({msg:e,type:t}),setTimeout((function(){s(null)}),2e3)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(k,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(C,{alert:a}),Object(m.jsx)("div",{className:"container",style:{maxWidth:"1200px"},children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",children:Object(m.jsx)(x,{showAlert:c})}),Object(m.jsx)(i.a,{exact:!0,path:"/about",children:Object(m.jsx)(w,{})}),Object(m.jsx)(i.a,{exact:!0,path:"/login",children:Object(m.jsx)(v,{showAlert:c})}),Object(m.jsx)(i.a,{exact:!0,path:"/signup",children:Object(m.jsx)(N,{showAlert:c})})]})})]})})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d074c330.chunk.js.map