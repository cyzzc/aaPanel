import{l as a,a as t,b as s,m as i,a6 as e}from"./page_layout.js?v=1732601582185";async function o(){await a(),await t(),await s("/static/ace/ace.js?v=1732601582185"),await s("/static/laydate/laydate.js?v=1732601582185"),await s("/static/vite/oldjs/site.js?v=1732601582185"),await s("/static/vite/oldjs/soft.js?v=1732601582185")}async function l(a){const t=i.loading("Loading, please wait...");try{await o(),site.set_ssl(a)}finally{t.close()}}async function c(a){const t=i.loading("Loading, please wait...");try{if(await o(),e)try{site_waf_config&&site.site_waf(a)}catch(s){site.plugin_firewall((()=>{site.site_waf(a)})),console.error(s)}}finally{t.close()}}export{l as a,o as l,c as o};