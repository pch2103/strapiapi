"use strict";(self.webpackChunkstrapiapi=self.webpackChunkstrapiapi||[]).push([[3964],{93964:(ss,B,s)=>{s.d(B,{ProtectedCreatePage:()=>H});var a=s(19968),I=s(62552),U=s(48112),K=s(28464),P=s(48936),C=s(35676),T=s(42816),d=s(5e3),g=s(63358),W=s(28724),h=s(70996),f=s(62492),j=s(25352),y=s(5540),r=s(50648),x=s(15396),u=s(61748),p=s(31812),S=s(14632),R=s(49008),$=s(39380),F=s(69372),O=s(52540),n=s(63952),N=s(28104),as=s(54320),ts=s(5240),_s=s(91892),os=s(36196),rs=s(20880),ns=s(21424),Es=s(70516),is=s(18424),ds=s(21968),es=s(12132),ls=s(48632),Ps=s(85676),Ms=s(35184),Ds=s(99568),Os=s(96556),ms=s(13192),Cs=s(30840),gs=s(77784),hs=s(79371),Rs=s(67888),As=s(52600),vs=s(95752),Ls=s(37388),cs=s(61840),Bs=s(49108),Is=s(44632),Us=s(50840),Ks=s(20252),Ts=s(86432),Ws=s(22612),fs=s(24808),js=s(24024),ys=s(40960),xs=s(33656),us=s(43280),ps=s(79804),Ss=s(19632),$s=s(29576),Fs=s(61152),Ns=s(9589),zs=s(45488),Vs=s(75516),Qs=s(56781),Hs=s(30680);const z=O.kt().shape({name:O.Qb().required(r.aO.required),description:O.Qb().required(r.aO.required)}),V=()=>{const t=(0,R.SU)("/settings/roles/duplicate/:id"),e=(0,r.eo)(),{lockApp:Z,unlockApp:G}=(0,r.H6)(),{formatMessage:_}=(0,S.c)(),{replace:J}=(0,R.Uz)(),m=I.useRef(null),{trackUsage:A}=(0,r.m4)(),{_unstableFormatAPIError:v,_unstableFormatValidationErrors:L}=(0,r.An)(),M=t?.params.id??null,{isLoading:X,data:c}=(0,n.A)({role:M??""}),{data:Y,isLoading:b}=(0,n.B)({id:M},{skip:!M,refetchOnMountOrArgChange:!0}),[k]=(0,n.D)(),[w]=(0,n.E)(),q=async(D,E)=>{try{Z(),A(M?"willDuplicateRole":"willCreateNewRole");const o=await k(D);if("error"in o){(0,n.x)(o.error)&&o.error.name==="ValidationError"?E.setErrors(L(o.error)):e({type:"warning",message:v(o.error)});return}const{permissionsToSend:l}=m.current?.getPermissions()??{};if(o.data.id&&Array.isArray(l)&&l.length>0){const i=await w({id:o.data.id,permissions:l});if("error"in i){(0,n.x)(i.error)&&i.error.name==="ValidationError"?E.setErrors(L(i.error)):e({type:"warning",message:v(i.error)});return}}e({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),J(`/settings/roles/${o.data.id}`)}catch{e({type:"warning",message:{id:"notification.error"}})}finally{G()}};return(0,a.jsxs)(U.G,{children:[(0,a.jsx)(r.K8,{name:"Roles"}),(0,a.jsx)(p.QJ,{initialValues:{name:"",description:`${_({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,u.c)(new Date,"PPP")}`},onSubmit:q,validationSchema:z,validateOnChange:!1,children:({values:D,errors:E,handleReset:o,handleChange:l,isSubmitting:i})=>(0,a.jsx)(r.QF,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(K.a,{primaryAction:(0,a.jsxs)(P.C,{gap:2,children:[(0,a.jsx)(C.Z,{variant:"secondary",onClick:()=>{o(),m.current?.resetForm()},size:"L",children:_({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,a.jsx)(C.Z,{type:"submit",loading:i,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})]}),title:_({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,a.jsx)(y.c,{as:$.Af,startIcon:(0,a.jsx)(x.c,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(T.S,{children:(0,a.jsxs)(P.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,a.jsx)(d.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsxs)(P.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsxs)(P.C,{justifyContent:"space-between",children:[(0,a.jsxs)(d.k,{children:[(0,a.jsx)(d.k,{children:(0,a.jsx)(g.O,{fontWeight:"bold",children:_({id:"global.details",defaultMessage:"Details"})})}),(0,a.jsx)(d.k,{children:(0,a.jsx)(g.O,{variant:"pi",textColor:"neutral600",children:_({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,a.jsx)(Q,{children:_({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,a.jsxs)(W.y,{gap:4,children:[(0,a.jsx)(h.C,{col:6,children:(0,a.jsx)(f.g,{name:"name",error:E.name&&_({id:E.name}),label:_({id:"global.name",defaultMessage:"Name"}),onChange:l,required:!0,value:D.name})}),(0,a.jsx)(h.C,{col:6,children:(0,a.jsx)(j.A,{label:_({id:"global.description",defaultMessage:"Description"}),id:"description",error:E.description&&_({id:E.description}),onChange:l,children:D.description})})]})]})}),!X&&!b&&c?(0,a.jsx)(d.k,{shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(N.P,{isFormDisabled:!1,ref:m,permissions:Y,layout:c})}):(0,a.jsx)(d.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(r.Wm,{})})]})})]})})})]})},Q=F.cp.div`
  border: 1px solid ${({theme:t})=>t.colors.primary200};
  background: ${({theme:t})=>t.colors.primary100};
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  color: ${({theme:t})=>t.colors.primary600};
  border-radius: ${({theme:t})=>t.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,H=()=>{const t=(0,n.j)(e=>e.admin_app.permissions.settings?.roles.create);return(0,a.jsx)(r.rF,{permissions:t,children:(0,a.jsx)(V,{})})}}}]);
