(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{201:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(42),c=n.n(i),o=n(18),l=n(6),u=n(32),s=n(7),m=n(43),d=n(44),p=n(47),h=n(46),g=n(203),E=n(202),b=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderError=function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message visible"},r.a.createElement("div",{className:"header"},t))},e.renderInput=function(t){var n=t.input,a=t.label,i=t.meta;console.log(i);var c="field ".concat(i.error&&i.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({autoComplete:"off"},n)),e.renderError(i))},e.onSubmit=function(e){console.log(e)},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form"},r.a.createElement(g.a,{name:"title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(g.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),n}(r.a.Component),f=Object(E.a)({form:"streamCreate",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(b),v=function(){return r.a.createElement("div",null,"StreamDelete")},I=function(){return r.a.createElement("div",null,"StreamEdit")},O=function(){return r.a.createElement("div",null,"StreamList")},S=function(){return r.a.createElement("div",null,"StreamShow")},N=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"542325085646-ekq1l3r0mc7ghejk1u6d2o9nnj895ie7.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){var e=this;return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{className:"ui google red button",onClick:function(){return e.auth.signOut()}},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{className:"ui google red button",onClick:function(){return e.auth.signIn()}},r.a.createElement("i",{className:"google icon"}),"Sign In")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderAuthButton())}}]),n}(r.a.Component),j=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(N),w=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(u.b,{className:"item",to:"/"},r.a.createElement("i",{className:"big video icon"}),r.a.createElement("strong",null,"Glitch")),r.a.createElement("div",{className:"right menu"},r.a.createElement(u.b,{className:"ui item",to:"/"},"All Streams"),r.a.createElement(j,null)))},y=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(u.a,null,r.a.createElement(w,null),r.a.createElement(s.a,{path:"/",exact:!0,component:O}),r.a.createElement(s.a,{path:"/streams/new",exact:!0,component:f}),r.a.createElement(s.a,{path:"/streams/edit",exact:!0,component:I}),r.a.createElement(s.a,{path:"/streams/delete",exact:!0,component:v}),r.a.createElement(s.a,{path:"/streams/show",exact:!0,component:S})))},_=n(204),k=n(33),C={isSignedIn:null,userId:null},A=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(k.a)(Object(k.a)({},e),{},{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(k.a)(Object(k.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},form:_.a}),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,D=Object(l.e)(A,x(Object(l.a)()));c.a.render(r.a.createElement(o.a,{store:D},r.a.createElement(y,null)),document.getElementById("root"))},95:function(e,t,n){e.exports=n(201)}},[[95,1,2]]]);
//# sourceMappingURL=main.3c9883d9.chunk.js.map