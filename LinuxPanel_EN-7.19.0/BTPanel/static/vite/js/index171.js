import{d as e,r as o,w as a,n as s,$ as l,O as t,X as r,Y as n,M as u}from"./vue.js?v=1732601582185";import{a0 as d,k as g}from"./page_layout.js?v=1732601582185";const c=g(e({__name:"index",props:{log:{default:""},loading:{type:Boolean,default:!1}},setup(e){const g=e,c=o();return a((()=>g.log),(()=>{s((()=>{const e=c.value.$el.querySelector("code");null==e||e.scrollTo({top:9999999})}))}),{immediate:!0}),(e,o)=>{const a=l("highlightjs"),s=d;return t(),r(s,{class:"h-full",show:e.loading},{default:n((()=>[u(a,{ref_key:"logsRef",ref:c,class:"bt-log",language:"log",code:e.log},null,8,["code"])])),_:1},8,["show"])}}}),[["__scopeId","data-v-1e4680e8"]]);export{c as _};