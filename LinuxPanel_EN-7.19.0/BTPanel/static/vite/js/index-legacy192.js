System.register(["./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./site-legacy3.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(e,a){"use strict";var l,s,n,t,o,i,r,c,u,d,g,_,p,v,f,y,x,j;return{setters:[e=>{l=e._},e=>{s=e._},e=>{n=e._},e=>{t=e.f},e=>{o=e.b},e=>{i=e.n,r=e.o},e=>{c=e.d,u=e.j,d=e.O,g=e.P,_=e.M,p=e.Y,v=e.Q,f=e.R,y=e.Z,x=e.ak},e=>{j=e.bG},null,null],execute:function(){const a={class:"p-20px pt-24px"},m={class:"w-440px"},h={class:"w-440px"},k={class:"w-440px"},w={class:"text-error"};e("default",c({__name:"index",emits:["refresh"],setup(e,{expose:c,emit:b}){const C=b,S=u({header:"",cookie:"",args:""}),{loading:U,setLoading:H}=o();return(async()=>{try{H(!0);const{message:e}=await i({ruleName:"scan_black"});t(e)&&(S.header=e.header,S.cookie=e.cookie,S.args=e.args)}finally{H(!1)}})(),c({onConfirm:async()=>{await r(x(S)),C("refresh")}}),(e,t)=>{const o=n,i=j,r=s,c=l;return d(),g("div",a,[_(r,null,{default:p((()=>[_(i,{label:"Header",path:"header"},{default:p((()=>[v("div",m,[_(o,{value:f(S).header,"onUpdate:value":t[0]||(t[0]=e=>f(S).header=e),loading:f(U),rows:4},null,8,["value","loading"])])])),_:1}),_(i,{label:"Cookie",path:"cookie"},{default:p((()=>[v("div",h,[_(o,{value:f(S).cookie,"onUpdate:value":t[1]||(t[1]=e=>f(S).cookie=e),loading:f(U),rows:4},null,8,["value","loading"])])])),_:1}),_(i,{label:"Args",path:"args"},{default:p((()=>[v("div",k,[_(o,{value:f(S).args,"onUpdate:value":t[2]||(t[2]=e=>f(S).args=e),loading:f(U),rows:4},null,8,["value","loading"])])])),_:1})])),_:1}),_(c,{class:"mt-8px"},{default:p((()=>[v("li",w,y(e.$t("Waf.Site.Config.index_73")),1),v("li",null,y(e.$t("Waf.Site.Config.index_74")),1)])),_:1})])}}}))}}}));