(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["ExperiencesBeforeHomefeed"],{SCHJ:function(e,t,a){a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));const n={type:"OPEN_GDPR_MODAL"},r={type:"OPEN_GDPR_PARENT_CONSENT_MODAL"},i={type:"CLOSE_GDPR_MODAL"},o=e=>({openGDPRModal:()=>e(n),openGDPRParentConsentModal:()=>e(r),closeGDPRModal:()=>e(i)})},inSI:function(e,t,a){t.a=(e,t)=>{let a;return t.some(t=>{const n=t(e);return n.errors.length>0&&(a=n.errors[0],!0)}),a}},zYLT:function(e,t,a){a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n);function i({size:e,noCircle:t}){return r.a.createElement("svg",{height:e,style:{display:"block"},viewBox:t?"3 3 70 70":"-3 -3 82 82",width:e},t?null:r.a.createElement("circle",{cx:"38",cy:"38",fill:"white",r:"40"}),r.a.createElement("path",{d:"M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z",fill:"#e60023",fillRule:"evenodd"}))}},zrAC:function(e,t,a){a.r(t);var n=a("q1tI"),r=a.n(n),i=a("/MKj"),o=a("xAAE"),s=a("Ye/N"),l=a("zYLT"),c=a("inSI"),m=a("SCHJ"),d=a("U4JR"),g=a("0/lc"),p=a("zXAL"),u=a("joD6"),h=a("c50B"),E=a("n6mq"),f=a("fArA");function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const S="age",b="parent_info",P=16,x=13,_=30,y=500735;var C=Object(f.compose)(Object(i.connect)(),p.a,u.a)(class extends n.PureComponent{constructor(...e){super(...e),w(this,"state",{age:"",ageValidatorError:"",parentEmail:"",parentEmailValidatorError:"",step:this.props.skipAgeStep?b:S}),w(this,"handleAgeChange",({value:e})=>{this.setState({age:e,ageValidatorError:""})}),w(this,"handleAgeSubmit",()=>{const e=[Object(h.a)({invalidAgeString:s.a._("Please enter a valid number.","Error message when user enters invalid age.","Error message when user enters invalid age."),ageTooShortString:s.a._("Please enter at least two digits.","Error message when user input for age is too short","Error message when user input for age is too short")})],t=Object(c.a)(this.state.age,e);t?this.setState({age:"",ageValidatorError:t}):parseInt(this.state.age,10)<x?this.setState({age:"",ageValidatorError:s.a._("Age must be at least 13.","Error message when user enters age less than 13","Error message when user enters age less than 13")}):this.completeAgeStep()}),w(this,"handleParentEmailSubmit",()=>{const e=[Object(h.e)({message:s.a._("Hmm... that doesn't look like an email address.","Error message when user enters invalid email address","Error message when user enters invalid email address")})],t=Object(c.a)(this.state.parentEmail,e);t?this.setState({age:"",parentEmailValidatorError:t}):this.props.viewer.email===this.state.parentEmail?this.setState({age:"",parentEmailValidatorError:s.a._("Not a valid email.","Invalid email error message","Invalid email error message")}):this.completeParentConsentStep()}),w(this,"handleParentEmailChange",({value:e})=>{this.setState({parentEmail:e,parentEmailValidatorError:""})})}componentDidMount(){this.contextLogView(3175)}contextLogView(e){Object(d.a)(13,{view:205,viewParameter:e})}contextLogClick(e){Object(d.a)(101,{component:17,element:1112,view:205,viewParameter:e})}completeAgeStep(){const{dispatch:e,experienceClient:t}=this.props,a={age:this.state.age};e(Object(g.f)({updateUserData:a})).then(()=>{this.contextLogClick(3175),parseInt(this.state.age,10)<P?(t.fetchExperienceForPlacement(_),this.setState({step:b}),this.contextLogView(3176)):(t.completeExperience(_,y),e(m.a))})}completeParentConsentStep(){const{dispatch:e,experienceClient:t}=this.props,a={parent_email:this.state.parentEmail};e(Object(g.f)({updateUserData:a})).then(()=>{this.contextLogClick(3176),t.fetchExperienceForPlacement(_),Object(o.a)("/"),e(m.a)})}renderAgeStep(){const e=s.a._("To continue using Pinterest, let us know how old you are.","Subtext on age step of GDPR flow.","Subtext on age step of GDPR flow.");return r.a.createElement(E.c,{alignItems:"center",direction:"column",display:"flex"},r.a.createElement(E.c,{margin:3},r.a.createElement(E.m,null,s.a._("Tell us your age","Prompt asking user to enter age","Prompt asking user to enter age"))),r.a.createElement(E.c,{marginBottom:6,marginEnd:12,marginStart:12,marginTop:5},r.a.createElement(E.K,{color:"darkGray",overflow:"normal"},e)),r.a.createElement(E.c,{marginBottom:3,marginEnd:12,marginStart:12,width:300},r.a.createElement("div",{ref:e=>{this._ageTextField=e}},r.a.createElement(E.M,{id:"age",onChange:this.handleAgeChange,placeholder:"Age",size:"lg",type:"number",value:this.state.age})),this.state.ageValidatorError?r.a.createElement(E.k,{anchor:this._ageTextField,color:"red",idealDirection:"right",onDismiss:()=>{},shouldFocus:!1,size:"xs"},r.a.createElement(E.c,{padding:3},r.a.createElement(E.K,{color:"white",weight:"bold"},r.a.createElement("span",null,this.state.ageValidatorError)))):null),r.a.createElement(E.c,{marginBottom:3,marginEnd:12,marginStart:12,width:300},r.a.createElement(E.d,{color:"red",disabled:!this.state.age,onClick:this.handleAgeSubmit,text:s.a._("Submit","Text on submit button on GDPR age step","Text on submit button on GDPR age step"),type:"submit"})))}renderParentInfoStep(){const e=s.a._("In some countries, you can only use Pinterest if you're old enough to consent to us using your information under the laws of your country, or if your parent or guardian has agreed that you can use Pinterest.","Subtext in parent consent step for underaged users.","Subtext in parent consent step for underaged users."),t=s.a._("If you'd like for us to contact your parent or guardian, let us know how to reach them.","Prompt in parent consent step asking underaged users for parent information.","Prompt in parent consent step asking underaged users for parent information.");return r.a.createElement(E.c,{alignItems:"center",direction:"column",display:"flex"},r.a.createElement(E.c,{margin:3},r.a.createElement(E.m,null,s.a._("Get parental consent","Title text for parent consent information step","Title text for parent consent information step"))),r.a.createElement(E.c,{marginEnd:12,marginStart:12,marginTop:5,maxWidth:400},r.a.createElement(E.K,{color:"darkGray",overflow:"normal"},e)),r.a.createElement(E.c,{marginBottom:6,marginEnd:12,marginStart:12,marginTop:5,maxWidth:400},r.a.createElement(E.K,{color:"darkGray",overflow:"normal"},t)),r.a.createElement(E.c,{marginBottom:3,marginEnd:12,marginStart:12,width:300},r.a.createElement("div",{ref:e=>{this._parentEmailField=e}},r.a.createElement(E.M,{id:"email",onChange:this.handleParentEmailChange,placeholder:"Parent's email",size:"lg",type:"email",value:this.state.parentEmail})),this.state.parentEmailValidatorError?r.a.createElement(E.k,{anchor:this._parentEmailField,color:"red",idealDirection:"right",onDismiss:()=>{},shouldFocus:!1,size:"xs"},r.a.createElement(E.c,{padding:3},r.a.createElement(E.K,{color:"white",weight:"bold"},r.a.createElement("span",null,this.state.parentEmailValidatorError)))):null),r.a.createElement(E.c,{marginBottom:3,marginEnd:12,marginStart:12,width:300},r.a.createElement(E.d,{color:"red",disabled:!this.state.parentEmail,onClick:this.handleParentEmailSubmit,text:s.a._("Send","Text on submit button on GDPR parent consent email step","Text on submit button on GDPR parent consent email step"),type:"submit"})))}render(){return r.a.createElement(E.c,{alignItems:"center",color:"white",direction:"column",display:"flex",height:540,overflow:"hidden",rounding:2,width:400},r.a.createElement(E.c,{marginTop:7},r.a.createElement(l.a,{size:50})),this.state.step===S?this.renderAgeStep():this.renderParentInfoStep())}}),v=a("SASd"),D=a("rYoy"),A=a("IaZi");const O=Object(n.lazy)(()=>Promise.all([a.e(49),a.e("RenuxContainerCommon")]).then(a.bind(null,"ItC7")));t.default=({experience:e,isNux:t,showGDPRModal:a,showGDPRParentConsentModal:n})=>r.a.createElement(r.a.Fragment,null,t||(e=>!!(e&&e.display_data&&e.display_data.is_partner_renux))(e)?r.a.createElement(A.f,{placementId:11}):r.a.createElement(D.a,null,r.a.createElement(O,{experience:e,hideFollowedInterests:!0})),r.a.createElement(A.g,{placementId:11}),r.a.createElement(A.e,{placementId:11}),r.a.createElement(A.d,{placementId:11}),r.a.createElement(A.c,{placementId:11}),a&&r.a.createElement(v.a,{noButton:!0},r.a.createElement(C,{skipAgeStep:n,additionalChildren:null})))}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/ExperiencesBeforeHomefeed-434a3316826fc1c3663e.mjs.map
