import{_ as a}from"./index96.js?v=1732601582185";import{h as t,j as l,k as n}from"./page_layout.js?v=1732601582185";import{J as e}from"./public.js?v=1732601582185";import{d as s,W as o,O as i,P as p,Q as r,Z as m,c as u,R as d,M as _,Y as c}from"./vue.js?v=1732601582185";import"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const f={class:"p-16px"},x={class:"item"},b=n(s({__name:"app-install-third",props:{data:{}},setup(n,{expose:s}){const{t:b}=o(),g=n,{data:h,callback:j}=g.data;return s({onConfirm:async()=>{await e({name:h.name,tmp_path:h.tmp_path,title:b("Soft.index_21")},(()=>{null==j||j()}))}}),(n,e)=>{const s=l,o=a;return i(),p("div",f,[r("div",x,[r("p",null,[r("b",null,m(n.$t("Docker.App.Install.index_1")),1),u("："+m(d(h).title),1)]),r("p",null,[r("b",null,m(n.$t("Docker.Container.config.image.index_6")),1),u("："+m(d(h).versions),1)]),r("p",null,[r("b",null,m(n.$t("Docker.Container.config.image.index_11")),1),u("："+m(d(h).ps),1)]),r("p",null,[r("b",null,m(n.$t("Database.tools.index_14")),1),u("："+m(d(t)(d(h).size)),1)]),r("p",null,[r("b",null,m(n.$t("Docker.Container.config.image.index_12")),1),u("："+m(d(h).author),1)]),r("p",null,[r("b",null,m(n.$t("Docker.CloudImage.index_7")),1),e[0]||(e[0]=u("：")),_(s,{href:d(h).home,target:"_blank"},{default:c((()=>[u(m(d(h).home),1)])),_:1},8,["href"])])]),_(o,{class:"pt-16px"},{default:c((()=>[r("li",null,m(n.$t("Soft.index_19")),1),r("li",null,m(n.$t("Soft.index_20")),1)])),_:1})])}}}),[["__scopeId","data-v-9b7b7bd6"]]);export{b as default};