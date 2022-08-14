import{_ as e,b as t,R as s,r as a,B as r,o as i,g as c,w as l,k as o,c as d,e as n,h,K as p,t as u,l as k,C as y,v as f}from"./index.cc0542f8.js";import{r as m}from"./resource.ad00fe08.js";const C={emits:["check"],props:{picker:{type:Boolean,required:!1,default:!1},checked:{type:Array,required:!1},listdata:{type:Array,required:!1}},data:()=>({resource:m,list:[],defaultProps:{children:"children",label:"title"},typeColor:{get:"success",post:"primary",put:"warning",delete:"danger"},trigger:null}),watch:{listdata:{handler:function(e){Array.isArray(e)&&(this.list=e)},immediate:!0},checked:{handler:function(){this.$refs.tree.setCheckedKeys(this.checked)},deep:!0}},methods:{handleCheckChange(e,t,s){const a=this.$refs.tree.getNode(e);a&&(this.$refs.tree.setChecked(a,t),s&&Array.isArray(e.children)&&e.children.length&&e.children.forEach((e=>{this.handleCheckChange(e,t,s)}))),this.$nextTick((()=>{this.trigger()}))},fetchData:function(){this.$store.getPermission().then((e=>{this.list=t(e.menus.concat(e.resources)),this.$nextTick((()=>{this.$refs.tree.setCheckedKeys(this.checked)}))}))}},created:function(){this.listdata||this.fetchData()},mounted(){this.trigger=s((()=>{this.$emit("check",this.$refs.tree.getCheckedNodes())}))}},g={class:"custom-tree-item"},x={class:"flex-1 extendLable"},_={key:0,style:{color:"#67c23a"}},$={key:0,class:"extendGroup"},b=k(" 编辑 "),v=k(" 添加子菜单 "),A=k(" 添加资源 "),w=k(" 删除 "),z={key:1,class:"extendGroup"},P=k(" 批量选择 ");const q=e(C,[["render",function(e,t,s,m,C,q){const K=a("Medal"),j=a("el-icon"),B=a("Position"),D=a("el-tag"),G=a("Link"),L=a("el-button"),N=a("el-tree"),T=r("auth");return i(),c(N,{ref:"tree",class:"custom-tree",data:C.list,props:C.defaultProps,"node-key":"id","default-expand-all":"","show-checkbox":s.picker,"check-strictly":"",onCheckChange:q.handleCheckChange},{default:l((({node:t,data:a})=>[o("div",g,[o("div",x,[1===a.type?(i(),d("span",_,[n(j,null,{default:l((()=>[n(K)])),_:1})])):h("",!0),o("span",{style:{"margin-right":"20px"},class:p({source:1===a.type})},u(a.name),3),1===a.type?(i(),c(D,{key:1,type:C.typeColor[a.method]},{default:l((()=>[n(j,null,{default:l((()=>[n(B)])),_:1}),k(" "+u(a.method.toUpperCase()),1)])),_:2},1032,["type"])):h("",!0),n(D,{type:"info"},{default:l((()=>[0===a.type?(i(),c(j,{key:0},{default:l((()=>[n(G)])),_:1})):h("",!0),k(" "+u(0===a.type?a.route:a.url),1)])),_:2},1024)]),s.picker?(i(),d("span",z,[n(L,{text:"",size:"small",type:"primary",onClick:f((e=>q.handleCheckChange(a,!t.checked,!0)),["stop"])},{default:l((()=>[P])),_:2},1032,["onClick"])])):(i(),d("span",$,[y((i(),c(L,{text:"",size:"small",type:"primary",onClick:f((t=>e.$emit("edit",a)),["stop"])},{default:l((()=>[b])),_:2},1032,["onClick"])),[[T,C.resource.edit]]),0===a.type?y((i(),c(L,{key:0,text:"",size:"small",type:"primary",onClick:f((t=>e.$emit("append",a)),["stop"])},{default:l((()=>[v])),_:2},1032,["onClick"])),[[T,C.resource.add]]):h("",!0),0===a.type?y((i(),c(L,{key:1,text:"",size:"small",type:"primary",onClick:f((t=>e.$emit("add-resource",a)),["stop"])},{default:l((()=>[A])),_:2},1032,["onClick"])),[[T,C.resource.add]]):h("",!0),y((i(),c(L,{text:"",size:"small",type:"danger",onClick:f((t=>e.$emit("remove",a)),["stop"])},{default:l((()=>[w])),_:2},1032,["onClick"])),[[T,C.resource.remove]])]))])])),_:1},8,["data","props","show-checkbox","onCheckChange"])}],["__scopeId","data-v-b94c02fd"]]);export{q as default};
