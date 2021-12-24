(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(19),r=s.n(c),l=(s(26),s(9)),i=s(2),o=s(3),d=(s(27),s(11)),m=s(10),j=Object(a.createContext)(),b=s(0),x=function(e){var t=Object(a.useContext)(j).deleteNote,s=e.note,n=e.updateNote;return Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("div",{className:"card my-3 border-secondary",style:{borderRadius:"20px"},children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("h6",{className:"card-title",children:s.title}),Object(b.jsx)("i",{className:"far fa-edit mx-2",onClick:function(){n(s)}}),Object(b.jsx)("i",{className:"far fa-trash-alt",onClick:function(){t(s._id),e.showAlert("Deleted note successfully","success")}}),Object(b.jsx)("i",{className:"fa fa-eye mx-2","aria-hidden":"true"})]}),Object(b.jsx)("p",{className:"card-text",children:s.description?s.description.slice(0,40):""})]})})})},u=function(e){var t=Object(a.useContext)(j).addNote,s=Object(a.useState)({title:"",description:"",tag:""}),n=Object(l.a)(s,2),c=n[0],r=n[1],i=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{className:"container mt-4",children:[Object(b.jsx)("div",{className:"font-bold self-center text-xl sm:text-2xl uppercase text-gray-800 my-4",children:"Add Notes"}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"title",value:c.title,name:"title",onChange:i,minLength:3,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"description",value:c.description,name:"description",onChange:i,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"tag",value:c.tag,name:"tag",onChange:i,minLength:3,required:!0})]}),Object(b.jsx)("button",{type:"submit",disabled:c.title.length<3||c.description.length<5||c.tag.length<3,className:"btn btn-secondary",onClick:function(s){t(c.title,c.description,c.tag),r({title:"",description:"",tag:""}),e.showAlert("Added note successfully","success"),s.preventDefault()},children:"Add Note"})]})]})},h=function(e){var t=Object(o.f)(),s=Object(a.useContext)(j),n=s.notes,c=s.getNotes,r=s.editNote;Object(a.useEffect)((function(){localStorage.getItem("token")?c():t.push("/MyNotebook")}),[]);var i=Object(a.useRef)(null),h=Object(a.useRef)(null),p=Object(a.useState)({id:"",etitle:"",edescription:"",etag:""}),g=Object(l.a)(p,2),f=g[0],O=g[1],v=function(e){i.current.click(),O({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},N=function(e){O(Object(m.a)(Object(m.a)({},f),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{showAlert:e.showAlert},"addingNote"),Object(b.jsx)("button",{ref:i,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(b.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{className:"my-3",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:f.etitle,"aria-describedby":"emailHelp",onChange:N,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:f.edescription,onChange:N,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:f.etag,onChange:N})]})]})}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{ref:h,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{disabled:f.etitle.length<3||f.edescription.length<5||f.etag.length<3,onClick:function(t){r(f.id,f.etitle,f.edescription,f.etag),h.current.click(),e.showAlert("Updated note successfully","success")},type:"button",className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(b.jsx)("div",{className:"container mt-4",children:Object(b.jsxs)("div",{className:"row my-1",children:[Object(b.jsx)("p",{className:"font-bold self-center text-xl sm:text-2xl uppercase text-gray-800 my-1",children:"Your Notes"}),Object(b.jsx)("div",{className:"container mx-2",children:0===n.length&&"No notes to display"}),n.map((function(t){return Object(b.jsx)(x,{updateNote:v,showAlert:e.showAlert,note:t},t._id)}))]})})]})},p=function(e){var t=e.showAlert;return Object(b.jsx)("div",{children:Object(b.jsx)(h,{showAlert:t})})},g=s(5),f=s.n(g),O=s(12),v=function(e){var t=Object(o.f)(),s=Object(a.useState)({name:"",email:"",password:""}),n=Object(l.a)(s,2),c=n[0],r=n[1],j=function(){var s=Object(O.a)(f.a.mark((function s(a){var n,l,i,o,d;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),n=c.name,l=c.email,i=c.password,s.next=4,fetch("http://localhost:5000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:l,password:i})});case 4:return o=s.sent,s.next=7,o.json();case 7:d=s.sent,console.log(d),d.success?(localStorage.setItem("token",d.authtoken),e.showAlert("Account created successfully","success"),t.push("/notes")):e.showAlert("Invalid credentials","danger"),r({email:"",password:""});case 11:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),x=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",style:{fontFamily:"Lato"},children:Object(b.jsxs)("div",{className:"px-8 py-4 mx-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3",children:[Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-20 h-20 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(b.jsx)("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),Object(b.jsx)("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]})}),Object(b.jsx)("h3",{className:"text-2xl font-bold text-center",children:"Join us"}),Object(b.jsx)("form",{onSubmit:j,children:Object(b.jsxs)("div",{className:"mx-2",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"block",htmlFor:"Name",children:"Name"}),Object(b.jsx)("input",{type:"text",placeholder:"Name",id:"name",name:"name",onChange:x,className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"})]}),Object(b.jsxs)("div",{className:"mt-4",children:[Object(b.jsx)("label",{className:"block",htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"text",placeholder:"Email",id:"email",name:"email",onChange:x,className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"})]}),Object(b.jsxs)("div",{className:"mt-4",children:[Object(b.jsx)("label",{className:"block",children:"Password"}),Object(b.jsx)("input",{type:"password",placeholder:"Password",id:"password",name:"password",onChange:x,className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"})]}),Object(b.jsxs)("div",{className:"mt-4",children:[Object(b.jsx)("label",{className:"block",children:"Confirm Password"}),Object(b.jsx)("input",{type:"password",placeholder:"Password",id:"cpassword",name:"cpassword",onChange:x,className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"})]}),Object(b.jsx)("span",{className:"text-xs text-red-400",children:"Password must be same!"}),Object(b.jsx)("div",{className:"flex",children:Object(b.jsx)("button",{className:"w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900",children:"Create Account"})}),Object(b.jsxs)("div",{className:"mt-6 text-grey-dark",children:["Already have an account?",Object(b.jsx)(i.b,{className:"text-blue-600 hover:underline ml-2",to:"/login",children:"Log in"})]})]})})]})})},N=function(e){var t=Object(o.f)(),s=Object(a.useState)({email:"",password:""}),n=Object(l.a)(s,2),c=n[0],r=n[1],j=function(){var s=Object(O.a)(f.a.mark((function s(a){var n,l;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),s.next=3,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.email,password:c.password})});case 3:return n=s.sent,s.next=6,n.json();case 6:(l=s.sent).success?(localStorage.setItem("token",l.authtoken),e.showAlert("Logged in successfully","success"),t.push("/notes")):e.showAlert("Invalid credentials","danger"),r({email:"",password:""});case 9:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),x=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("link",{rel:"stylesheet",to:"https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"}),Object(b.jsx)("div",{className:"flex flex-col items-center justify-center bg-gray-300",style:{minHeight:"92vh"},children:Object(b.jsxs)("div",{className:"flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md",children:[Object(b.jsx)("div",{className:"font-medium self-center text-xl sm:text-2xl uppercase text-gray-800",children:"Login To Your Account"}),Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsxs)("form",{onSubmit:j,children:[Object(b.jsxs)("div",{className:"flex flex-col mb-6",children:[Object(b.jsx)("label",{htmlFor:"email",className:"mb-1 text-xs sm:text-sm tracking-wide text-gray-600",children:"E-Mail Address:"}),Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("div",{className:"inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400",children:Object(b.jsx)("svg",{className:"h-6 w-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})})}),Object(b.jsx)("input",{id:"email",type:"email",name:"email",value:c.email,onChange:x,className:"text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",placeholder:"E-Mail Address"})]})]}),Object(b.jsxs)("div",{className:"flex flex-col mb-6",children:[Object(b.jsx)("label",{htmlFor:"password",className:"mb-1 text-xs sm:text-sm tracking-wide text-gray-600",children:"Password:"}),Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("div",{className:"inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400",children:Object(b.jsx)("span",{children:Object(b.jsx)("svg",{className:"h-6 w-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})})}),Object(b.jsx)("input",{id:"password",type:"password",name:"password",value:c.password,onChange:x,className:"text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",placeholder:"Password"})]})]}),Object(b.jsx)("div",{className:"flex items-center mb-6 -mt-4",children:Object(b.jsx)("div",{className:"flex ml-auto",children:Object(b.jsx)(i.b,{to:"/",className:"inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700",children:"Forgot Your Password?"})})}),Object(b.jsx)("div",{className:"flex w-full",children:Object(b.jsxs)("button",{type:"submit",className:"flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in",children:[Object(b.jsx)("span",{className:"mr-2 uppercase",children:"Login"}),Object(b.jsx)("span",{children:Object(b.jsx)("svg",{className:"h-6 w-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})})]})}),Object(b.jsxs)("div",{className:"flex justify-center items-center mt-6",children:[Object(b.jsx)("span",{className:"mr-2",children:"Don't have an account ?"}),Object(b.jsxs)(i.b,{to:"/signup",className:"inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center",children:[Object(b.jsx)("span",{children:Object(b.jsx)("svg",{className:"h-6 w-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})})}),Object(b.jsx)("span",{className:"ml-2",children:"Register here"})]})]})]})})]})},y=function(){var e=Object(o.f)(),t=Object(o.g)();return n.a.useEffect((function(){}),[t]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/notes",children:"MyNotebook"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link ".concat("/MyNotebook"===t.pathname?"active":""),"aria-current":"page",to:"/notes",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link ".concat("/about"===t.pathname?"active":""),to:"/about",children:"About"})})]}),localStorage.getItem("token")?Object(b.jsx)("div",{className:"navbar-nav",children:Object(b.jsx)("button",{className:"btn btn-dark",onClick:function(){localStorage.removeItem("token"),e.push("/MyNotebook")},children:"Logout"})}):""]})]})})},w=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"j"})})},k=function(e){var t="http://localhost:5000",s=Object(a.useState)([]),n=Object(l.a)(s,2),c=n[0],r=n[1],i=function(){var e=Object(O.a)(f.a.mark((function e(){var s,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(O.a)(f.a.mark((function e(s,a,n){var l,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:s,description:a,tag:n})});case 2:return l=e.sent,e.next=5,l.json();case 5:i=e.sent,r(c.concat(i));case 7:case"end":return e.stop()}}),e)})));return function(t,s,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(O.a)(f.a.mark((function e(s){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(s),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:e.sent,n=c.filter((function(e){return e._id!==s})),r(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(f.a.mark((function e(s,a,n,l){var i,o,d;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(s),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:l})});case 2:return i=e.sent,e.next=5,i.json();case 5:e.sent,o=JSON.parse(JSON.stringify(c)),d=0;case 8:if(!(d<c.length)){e.next=18;break}if(o[d]._id!==s){e.next=15;break}return o[d].title=a,o[d].description=n,o[d].tag=l,e.abrupt("break",18);case 15:d++,e.next=8;break;case 18:r(o);case 19:case"end":return e.stop()}}),e)})));return function(t,s,a,n){return e.apply(this,arguments)}}();return Object(b.jsx)(j.Provider,{value:{notes:c,addNote:o,deleteNote:d,editNote:m,getNotes:i},children:e.children})};var C=function(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})},L=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"relative bg-white overflow-hidden",children:[Object(b.jsx)("div",{className:"max-w-7xl mx-auto",children:Object(b.jsxs)("div",{className:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[Object(b.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:Object(b.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:Object(b.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[Object(b.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:Object(b.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[Object(b.jsxs)(i.b,{to:"/workflow",children:[Object(b.jsx)("span",{className:"sr-only",children:"Workflow"}),Object(b.jsx)("img",{className:"h-8 w-auto sm:h-10",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:""})]}),Object(b.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:Object(b.jsxs)("button",{type:"button",className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500","aria-expanded":"false",children:[Object(b.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(b.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),Object(b.jsxs)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:[Object(b.jsx)(i.b,{to:"/product",className:"font-medium text-gray-500 hover:text-gray-900",children:"Product"}),Object(b.jsx)(i.b,{to:"/features",className:"font-medium text-gray-500 hover:text-gray-900",children:"Features"}),Object(b.jsx)(i.b,{to:"/marketplace",className:"font-medium text-gray-500 hover:text-gray-900",children:"Marketplace"}),Object(b.jsx)(i.b,{to:"/company",className:"font-medium text-gray-500 hover:text-gray-900",children:"Company"}),Object(b.jsx)(i.b,{to:"/login",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Log in"})]})]})}),Object(b.jsx)("div",{className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:Object(b.jsxs)("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",children:[Object(b.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:""})}),Object(b.jsx)("div",{className:"-mr-2",children:Object(b.jsxs)("button",{type:"button",className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(b.jsx)("span",{className:"sr-only",children:"Close main menu"}),Object(b.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})})]}),Object(b.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(b.jsx)(i.b,{to:"/product",className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:"Product"}),Object(b.jsx)(i.b,{to:"/features",className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:"Features"}),Object(b.jsx)(i.b,{to:"/marketplace",className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:"Marketplace"}),Object(b.jsx)(i.b,{to:"/company",className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:"Company"})]}),Object(b.jsx)(i.b,{to:"/login",className:"block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100",children:"Log in"})]})})]}),Object(b.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:Object(b.jsxs)("div",{className:"sm:text-center lg:text-left",children:[Object(b.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[Object(b.jsx)("span",{className:"block xl:inline",children:"Data to enrich your"}),Object(b.jsx)("span",{className:"block text-indigo-600 xl:inline",children:"online business"})]}),Object(b.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),Object(b.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:[Object(b.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:Object(b.jsx)(i.b,{to:"/getStarted",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",children:"Get Started"})}),Object(b.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:Object(b.jsx)(i.b,{to:"/signup",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",children:"Register"})})]})]})})]})}),Object(b.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:Object(b.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",alt:""})})]})})};var S=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],n=t[1],c=function(e,t){n({msg:e,type:t}),setTimeout((function(){n(null)}),2e3)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(k,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(C,{alert:s}),Object(b.jsx)("div",{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/MyNotebook",children:Object(b.jsx)(L,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/notes",children:Object(b.jsx)(p,{showAlert:c})}),Object(b.jsx)(o.a,{exact:!0,path:"/about",children:Object(b.jsx)(w,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/login",children:Object(b.jsx)(N,{showAlert:c})}),Object(b.jsx)(o.a,{exact:!0,path:"/signup",children:Object(b.jsx)(v,{showAlert:c})})]})})]})})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b241fb79.chunk.js.map