"use strict";(self.webpackChunkstrapiapi=self.webpackChunkstrapiapi||[]).push([[9164],{89164:(j,c,t)=>{t.d(c,{ProtectedListView:()=>dt});var s=t(19968),d=t(62552),R=t(48112),B=t(28464),i=t(81504),D=t(42816),o=t(50648),r=t(48636),a=t(12132),P=t(14632),e=t(49008),K=t(63952),f=t(71076),C=t(49748),W=t(72984),x=t(54320),z=t(5240),F=t(91892),V=t(36196),G=t(20880),Y=t(21424),u=t(70516),H=t(31812),J=t(18424),Q=t(52540),X=t(21968),n=t(48632),E=t(85676),O=t(35184),T=t(99568),m=t(96556),M=t(13192),l=t(30840),g=t(77784),A=t(79371),y=t(67888),Z=t(52600),w=t(95752),b=t(37388),q=t(61840),tt=t(49108),_=t(44632),st=t(50840),S=t(20252),Ot=t(86432),Tt=t(22612),mt=t(24808),At=t(24024),ct=t(40960),It=t(33656),Lt=t(43280),Ct=t(79804),gt=t(19632),vt=t(29576),Ut=t(61152),ht=t(9589),Rt=t(45488),Bt=t(75516);const ot=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],Et=()=>{(0,o.G0)();const{formatMessage:I}=(0,P.c)(),v=(0,o.eo)(),it=(0,K.j)(L=>L.admin_app.permissions.settings?.["api-tokens"]),{allowedActions:{canCreate:k,canDelete:rt,canUpdate:lt,canRead:U}}=(0,o.aU)(it),{push:at}=(0,e.Uz)(),{trackUsage:p}=(0,o.m4)(),{startSection:et}=(0,o.sg)(),{_unstableFormatAPIError:N}=(0,o.An)();d.useEffect(()=>{et("apiTokens")},[et]),d.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]);const Pt=ot.map(L=>({...L,metadatas:{...L.metadatas,label:I(L.metadatas.label)}}));(0,K.b)(()=>{p("willAccessTokenList",{tokenType:C.A})});const{data:h=[],isLoading:nt,error:$}=(0,f.u)(void 0,{skip:!U});d.useEffect(()=>{$&&v({type:"warning",message:N($)})},[$,N,v]),d.useEffect(()=>{p("didAccessTokenList",{number:h.length,tokenType:C.A})},[h,p]);const[Mt]=(0,f.a)(),Dt=async L=>{try{const _t=await Mt(L);if("error"in _t){v({type:"warning",message:N(_t.error)});return}p("didDeleteToken")}catch{v({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}};return(0,s.jsxs)(R.G,{"aria-busy":nt,children:[(0,s.jsx)(o.K8,{name:"API Tokens"}),(0,s.jsx)(B.a,{title:I({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:I({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:k&&(0,s.jsx)(i.E,{"data-testid":"create-api-token-button",startIcon:(0,s.jsx)(r.c,{}),size:"S",onClick:()=>p("willAddTokenFromList",{tokenType:C.A}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),(0,s.jsxs)(D.S,{children:[!U&&(0,s.jsx)(o.o5,{}),U&&h.length>0&&(0,s.jsx)(W.T,{permissions:{canRead:U,canDelete:rt,canUpdate:lt},headers:Pt,contentType:"api-tokens",isLoading:nt,onConfirmDelete:Dt,tokens:h,tokenType:C.A}),U&&k&&h.length===0&&(0,s.jsx)(o.kP,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:(0,s.jsx)(i.E,{variant:"secondary",startIcon:(0,s.jsx)(r.c,{}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}),U&&!k&&h.length===0&&(0,s.jsx)(o.kP,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},dt=()=>{const I=(0,K.j)(v=>v.admin_app.permissions.settings?.["api-tokens"].main);return(0,s.jsx)(o.rF,{permissions:I,children:(0,s.jsx)(Et,{})})}},72984:(j,c,t)=>{t.d(c,{T:()=>V});var s=t(19968),d=t(62552),R=t(48744),B=t(76512),i=t(9752),D=t(63358),o=t(48936),r=t(5e3),a=t(23264),P=t(5540),e=t(50648),K=t(71324),f=t(14032),C=t(89940),W=t(14632),x=t(49008),z=t(39380),F=t(69372);const V=({permissions:n,headers:E=[],contentType:O,isLoading:T=!1,tokens:m=[],onConfirmDelete:M,tokenType:l})=>{const{canDelete:g,canUpdate:A,canRead:y}=n;return(0,s.jsx)(e.AL,{headers:E,contentType:O,rows:m,withBulkActions:g||A||y,isLoading:T,onConfirmDelete:M,children:(0,s.jsx)(G,{tokenType:l,permissions:n,onConfirmDelete:M})})},G=({tokenType:n,permissions:E,rows:O=[],withBulkActions:T,onConfirmDelete:m})=>{const{canDelete:M,canUpdate:l,canRead:g}=E,[{query:A}]=(0,e.WK)(),{formatMessage:y}=(0,W.c)(),[,Z]=A&&A.sort?A.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,x.Uz)(),{trackUsage:q}=(0,e.m4)(),tt=[...O].sort((_,st)=>{const S=_.name.localeCompare(st.name);return Z==="DESC"?-S:S});return(0,s.jsx)(R.K,{children:tt.map(_=>(0,s.jsxs)(B.Tr,{...(0,e.on)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:l}),children:[(0,s.jsx)(i.Td,{maxWidth:(0,e.W8)(250),children:(0,s.jsx)(D.O,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(i.Td,{maxWidth:(0,e.W8)(250),children:(0,s.jsx)(D.O,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,s.jsx)(i.Td,{children:(0,s.jsx)(D.O,{textColor:"neutral800",children:(0,s.jsx)(e.od,{timestamp:new Date(_.createdAt)})})}),(0,s.jsx)(i.Td,{children:_.lastUsedAt&&(0,s.jsx)(D.O,{textColor:"neutral800",children:(0,s.jsx)(e.od,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),T&&(0,s.jsx)(i.Td,{children:(0,s.jsxs)(o.C,{justifyContent:"end",children:[l&&(0,s.jsx)(X,{tokenName:_.name,tokenId:_.id}),!l&&g&&(0,s.jsx)(Q,{tokenName:_.name,tokenId:_.id}),M&&(0,s.jsx)(J,{tokenName:_.name,onClickDelete:()=>m?.(_.id),tokenType:n})]})})]},_.id))})},Y={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},u=({tokenName:n,tokenId:E,buttonType:O="edit",children:T})=>{const{formatMessage:m}=(0,W.c)(),{location:{pathname:M}}=(0,x.Uz)();return(0,s.jsx)(H,{forwardedAs:z.Af,to:`${M}/${E}`,title:m(Y[O],{target:n}),children:T})},H=(0,F.cp)(P.c)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,J=({tokenName:n,onClickDelete:E,tokenType:O})=>{const{formatMessage:T}=(0,W.c)(),{trackUsage:m}=(0,e.m4)(),[M,l]=d.useState(!1),g=()=>{l(!1),m("willDeleteToken",{tokenType:O}),E()};return(0,s.jsxs)(r.k,{paddingLeft:1,onClick:A=>A.stopPropagation(),children:[(0,s.jsx)(a.w,{onClick:()=>{l(!0)},label:T({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(K.c,{})}),(0,s.jsx)(e.cz,{onToggleDialog:()=>l(!1),onConfirm:g,isOpen:M})]})},Q=({tokenName:n,tokenId:E})=>(0,s.jsx)(u,{tokenName:n,tokenId:E,buttonType:"read",children:(0,s.jsx)(f.c,{})}),X=({tokenName:n,tokenId:E})=>(0,s.jsx)(u,{tokenName:n,tokenId:E,children:(0,s.jsx)(C.c,{width:12})})},71076:(j,c,t)=>{t.d(c,{a:()=>D,b:()=>B,c:()=>i,d:()=>o,u:()=>R});var s=t(63952);const d=s.n.injectEndpoints({endpoints:r=>({getAPITokens:r.query({query:()=>"/admin/api-tokens",transformResponse:a=>a.data,providesTags:(a,P)=>[...a?.map(({id:e})=>({type:"ApiToken",id:e}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:r.query({query:a=>`/admin/api-tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),createAPIToken:r.mutation({query:a=>({url:"/admin/api-tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:r.mutation({query:a=>({url:`/admin/api-tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),updateAPIToken:r.mutation({query:({id:a,...P})=>({url:`/admin/api-tokens/${a}`,method:"PUT",data:P}),transformResponse:a=>a.data,invalidatesTags:(a,P,{id:e})=>[{type:"ApiToken",id:e}]})}),overrideExisting:!1}),{useGetAPITokensQuery:R,useGetAPITokenQuery:B,useCreateAPITokenMutation:i,useDeleteAPITokenMutation:D,useUpdateAPITokenMutation:o}=d},49748:(j,c,t)=>{t.d(c,{A:()=>s,T:()=>d});const s="api-token",d="transfer-token"}}]);
