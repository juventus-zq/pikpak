var pe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))me.call(t,o)&&H(e,o,t[o]);return e};import{d as b,u as ge,r as f,o as q,a as G,b as v,c as K,w as c,e as n,f as r,N as he,g as fe,h as _e,z as ve,i as ke,j as ye,k as Y,l as Ee,m as we,n as Fe,p as xe,q as Ae,s as y,t as De,v as Ne,x as Ce,y as E,A as I,B as be,C as Ie,D as N,E as g,F as Z,G as Pe,H as Se,I as P,L as $e,J as X,K as Le,M as Be,O as Oe,P as Te,Q as Me,R as Ve,S as Re,T as ze,U as Q,V as je,W as Je,X as Ue,Y as He,Z as We,_ as qe,$ as Ge,a0 as Ke,a1 as Ye}from"./vendor.220f2a04.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Ze();const Xe=b({setup(e){return window.$message=ge(),(t,o)=>null}}),Qe=["https://pikpakzq.suzenaqiang.workers.dev"],et=b({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return q(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(Qe))}),(o,a)=>{const s=G("router-view");return v(),K(r(ye),{locale:r(ve),"date-locale":r(ke),"theme-overrides":t.value},{default:c(()=>[n(r(_e),null,{default:c(()=>[n(r(he),null,{default:c(()=>[n(r(fe),null,{default:c(()=>[n(Xe),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),tt="modulepreload",ee={},ot="/pikpak/",_=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${ot}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":tt,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((A,m)=>{u.addEventListener("load",A),u.addEventListener("error",m)})})).then(()=>t())};var st="/pikpak/assets/logo1.08eb9157.png";const d=Y.create({});d.interceptors.request.use(e=>{const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`);const o=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(o.length>0){const a=Math.floor(Math.random()*o.length);e.url=o[a]+"/"+e.url}return e});let F=!1;d.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const s=window.localStorage.getItem("pikpakLoginData"),i=s?JSON.parse(s):{};return i.username&&i.password&&!F?(console.log("wait",o.url),F=!0,d.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),F=!1,d(o))).catch(()=>(C.push("/login"),!1))):i.username&&i.password&&F?new Promise((u,A)=>{const m=setInterval(()=>{F||(clearInterval(m),u(d(o)))},100)}):(C.push("/login"),!1);default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const te=Y.create({});te.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const At=te,oe=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const at=g("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[g("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),g("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},nt=E("\u4F1A\u5458\u7801"),it={style:{"margin-bottom":"0"}},ut=g("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),lt=E(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),ct={class:"bottom-user-info"},pt={key:0,src:st,class:"user-info-avatar"},dt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},mt={class:"user-info-name"},gt={key:0},ht={class:"action"},ft=E(" \u9000\u51FA\u767B\u5F55 "),_t=g("p",null,[g("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),vt=E("\u6DFB\u52A0"),kt=b({setup(e){const t=f(!1),o=l=>()=>Q(P,null,{default:()=>Q(l)}),a=Ee(),s=we(),i=f([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(je)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ue)}]),u=f(),A=()=>{d.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},m=f(),S=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{m.value=l.data}).catch(l=>{console.log(l)})},k=f(),se=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},ae=(l,p)=>{console.log(p),a.push("/"+p.key)};q(()=>{A(),S(),se()});const D=f(),w=f(!1),re=()=>{d.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:D.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),S()}).catch(l=>{console.log(l)}).finally(()=>{w.value=!1})},$=f(!1),ne=l=>{$.value=l<800,t.value||(t.value=l<800)};Fe(s,()=>{$.value&&(t.value=!0)});const ie=xe(),ue=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{d.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const le=G("router-view"),ce=Ae("resize");return v(),y(ze,null,[De(n(r(X),{"has-sider":"",onResize:ne},{default:c(()=>[n(r(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=h=>t.value=!0),onExpand:p[2]||(p[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,L,B,O,T,M,V,R,z,j,J;return[at,n(r(Ce),{options:i.value,value:String(r(s).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?N("",!0):(v(),y("div",rt,[E(I(r(oe)((h=m.value)==null?void 0:h.quota.usage))+" / "+I(r(oe)((L=m.value)==null?void 0:L.quota.limit))+" ",1),n(r(be),{type:"primary",onClick:p[0]||(p[0]=wt=>w.value=!0)},{default:c(()=>[nt]),_:1}),((B=m.value)==null?void 0:B.quota)?(v(),K(r(Ie),{key:0,type:"line",percentage:Number((((O=m.value)==null?void 0:O.quota.usage)/((T=m.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((M=k.value)==null?void 0:M.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):N("",!0),g("p",it,[n(r(Z),{placement:"right"},{trigger:c(()=>[ut]),default:c(()=>[lt]),_:1})])])),t.value?N("",!0):(v(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((V=k.value)==null?void 0:V.status)==="ok"}])},[g("div",ct,[((R=k.value)==null?void 0:R.status)==="ok"?(v(),y("img",pt)):(v(),y("img",dt)),g("div",mt,[E(I((z=u.value)==null?void 0:z.name)+" ",1),((j=k.value)==null?void 0:j.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",gt,[n(r(Se),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):N("",!0)]),g("div",ht,[n(r(Z),null,{trigger:c(()=>[n(r(P),{onClick:ue},{default:c(()=>[n(r($e))]),_:1})]),default:c(()=>[ft]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(r(X),null,{default:c(()=>[n(r(Le),{style:{height:"100vh"}},{default:c(()=>[n(r(Be),{style:{"max-height":"100vh"}},{default:c(()=>[n(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ce]]),n(r(Re),{show:w.value,"onUpdate:show":p[5]||(p[5]=h=>w.value=h)},{default:c(()=>[n(r(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(r(P),{onClick:p[3]||(p[3]=h=>w.value=!1)},{default:c(()=>[n(r(Te))]),_:1})]),action:c(()=>[n(r(Me),{block:!0,type:"primary",disabled:!D.value,onClick:re},{default:c(()=>[vt]),_:1},8,["disabled"])]),default:c(()=>[n(r(Ve),{placeholder:"\u4F1A\u5458\u7801",value:D.value,"onUpdate:value":p[4]||(p[4]=h=>D.value=h)},null,8,["value"]),_t]),_:1})]),_:1},8,["show"])],64)}}}),yt=[{path:"/",name:"home",component:kt,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>_(()=>import("./list.e8ca9b2a.js"),["assets/list.e8ca9b2a.js","assets/list.764e0448.css","assets/vendor.220f2a04.js"])},{path:"trash",name:"trash",component:()=>_(()=>import("./trash.43c2c7b0.js"),["assets/trash.43c2c7b0.js","assets/trash.99a3677d.css","assets/vendor.220f2a04.js"])},{path:"setting",name:"setting",component:()=>_(()=>import("./setting.a37beef7.js"),["assets/setting.a37beef7.js","assets/setting.f947579c.css","assets/vendor.220f2a04.js"])},{path:"share",name:"share",component:()=>_(()=>import("./share.c9e45c3a.js"),["assets/share.c9e45c3a.js","assets/share.4f9c11c6.css","assets/vendor.220f2a04.js"])}]},{path:"/t/:id?",name:"test",component:()=>_(()=>import("./test.9a416115.js"),["assets/test.9a416115.js","assets/vendor.220f2a04.js"])},{path:"/login",name:"login",component:()=>_(()=>import("./login.d23ea055.js"),["assets/login.d23ea055.js","assets/login.a8b45006.css","assets/vendor.220f2a04.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>_(()=>import("./sms.a939e339.js"),["assets/sms.a939e339.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.220f2a04.js"])},{path:"/register",name:"register",component:()=>_(()=>import("./register.6a43b516.js"),["assets/register.6a43b516.js","assets/register.5588ce76.css","assets/vendor.220f2a04.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>_(()=>import("./testtest.bb1b4ee8.js"),["assets/testtest.bb1b4ee8.js","assets/vendor.220f2a04.js"])}],Et=We({history:qe(),routes:yt});var C=Et;const x=Ge(et);x.directive("resize",{mounted(e,t,o){e.$$erd=Ke({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,i=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});x.config.globalProperties.$http=d;x.use(C);x.use(Ye,{router:C,siteIdList:[1280510106]});x.mount("#app");export{oe as b,d as i,At as n,Qe as p};
