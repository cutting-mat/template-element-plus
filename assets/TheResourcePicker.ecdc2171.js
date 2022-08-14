import{_ as B,b as P,R as T,r as c,B as D,o,g as n,w as s,k as C,c as g,e as i,h as d,K as V,t as v,l,C as k,v as p}from"./index.cc0542f8.js";import{r as q}from"./resource.ad00fe08.js";const K={emits:["check"],props:{picker:{type:Boolean,required:!1,default:!1},checked:{type:Array,required:!1},listdata:{type:Array,required:!1}},data(){return{resource:q,list:[],defaultProps:{children:"children",label:"title"},typeColor:{get:"success",post:"primary",put:"warning",delete:"danger"},trigger:null}},watch:{listdata:{handler:function(t){Array.isArray(t)&&(this.list=t)},immediate:!0},checked:{handler:function(){this.$refs.tree.setCheckedKeys(this.checked)},deep:!0}},methods:{handleCheckChange(t,f,h){const m=this.$refs.tree.getNode(t);m&&(this.$refs.tree.setChecked(m,f),h&&Array.isArray(t.children)&&t.children.length&&t.children.forEach(r=>{this.handleCheckChange(r,f,h)})),this.$nextTick(()=>{this.trigger()})},fetchData:function(){this.$store.getPermission().then(t=>{this.list=P(t.menus.concat(t.resources)),this.$nextTick(()=>{this.$refs.tree.setCheckedKeys(this.checked)})})}},created:function(){this.listdata||this.fetchData()},mounted(){this.trigger=T(()=>{this.$emit("check",this.$refs.tree.getCheckedNodes())})}},L={class:"custom-tree-item"},M={class:"flex-1 extendLable"},R={key:0,style:{color:"#67c23a"}},E={key:0,class:"extendGroup"},G=l(" \u7F16\u8F91 "),I=l(" \u6DFB\u52A0\u5B50\u83DC\u5355 "),S=l(" \u6DFB\u52A0\u8D44\u6E90 "),U=l(" \u5220\u9664 "),j={key:1,class:"extendGroup"},F=l(" \u6279\u91CF\u9009\u62E9 ");function H(t,f,h,m,r,x){const b=c("Medal"),y=c("el-icon"),w=c("Position"),$=c("el-tag"),N=c("Link"),a=c("el-button"),z=c("el-tree"),_=D("auth");return o(),n(z,{ref:"tree",class:"custom-tree",data:r.list,props:r.defaultProps,"node-key":"id","default-expand-all":"","show-checkbox":h.picker,"check-strictly":"",onCheckChange:x.handleCheckChange},{default:s(({node:A,data:e})=>[C("div",L,[C("div",M,[e.type===1?(o(),g("span",R,[i(y,null,{default:s(()=>[i(b)]),_:1})])):d("",!0),C("span",{style:{"margin-right":"20px"},class:V({source:e.type===1})},v(e.name),3),e.type===1?(o(),n($,{key:1,type:r.typeColor[e.method]},{default:s(()=>[i(y,null,{default:s(()=>[i(w)]),_:1}),l(" "+v(e.method.toUpperCase()),1)]),_:2},1032,["type"])):d("",!0),i($,{type:"info"},{default:s(()=>[e.type===0?(o(),n(y,{key:0},{default:s(()=>[i(N)]),_:1})):d("",!0),l(" "+v(e.type===0?e.route:e.url),1)]),_:2},1024)]),h.picker?(o(),g("span",j,[i(a,{text:"",size:"small",type:"primary",onClick:p(u=>x.handleCheckChange(e,!A.checked,!0),["stop"])},{default:s(()=>[F]),_:2},1032,["onClick"])])):(o(),g("span",E,[k((o(),n(a,{text:"",size:"small",type:"primary",onClick:p(u=>t.$emit("edit",e),["stop"])},{default:s(()=>[G]),_:2},1032,["onClick"])),[[_,r.resource.edit]]),e.type===0?k((o(),n(a,{key:0,text:"",size:"small",type:"primary",onClick:p(u=>t.$emit("append",e),["stop"])},{default:s(()=>[I]),_:2},1032,["onClick"])),[[_,r.resource.add]]):d("",!0),e.type===0?k((o(),n(a,{key:1,text:"",size:"small",type:"primary",onClick:p(u=>t.$emit("add-resource",e),["stop"])},{default:s(()=>[S]),_:2},1032,["onClick"])),[[_,r.resource.add]]):d("",!0),k((o(),n(a,{text:"",size:"small",type:"danger",onClick:p(u=>t.$emit("remove",e),["stop"])},{default:s(()=>[U]),_:2},1032,["onClick"])),[[_,r.resource.remove]])]))])]),_:1},8,["data","props","show-checkbox","onCheckChange"])}const Q=B(K,[["render",H],["__scopeId","data-v-b94c02fd"]]);export{Q as default};
