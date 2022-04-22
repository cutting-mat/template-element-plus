import{_ as T,b as D,S as P,r as c,A as V,o,g as n,w as s,k as C,c as g,e as i,h as d,J as q,t as v,l,B as k,v as p}from"./index.6119e3c9.js";import{r as L}from"./resource.7067f5cd.js";const M={emits:["check"],props:{picker:{type:Boolean,required:!1,default:!1},checked:{type:Array,required:!1},listdata:{type:Array,required:!1}},data(){return{resource:L,list:[],defaultProps:{children:"children",label:"title"},typeColor:{get:"success",post:"primary",put:"warning",delete:"danger"},trigger:null}},watch:{listdata:{handler:function(t){Array.isArray(t)&&(this.list=t)},immediate:!0},checked:{handler:function(){this.$refs.tree.setCheckedKeys(this.checked)},deep:!0}},methods:{handleCheckChange(t,f,h){const y=this.$refs.tree.getNode(t);y&&(this.$refs.tree.setChecked(y,f),h&&Array.isArray(t.children)&&t.children.length&&t.children.forEach(r=>{this.handleCheckChange(r,f,h)})),this.$nextTick(()=>{this.trigger()})},fetchData:function(){this.$store.action("permission").then(t=>{this.list=D(t.menus.concat(t.resources)),this.$nextTick(()=>{this.$refs.tree.setCheckedKeys(this.checked)})})}},created:function(){this.listdata||this.fetchData()},mounted(){this.trigger=P(()=>{this.$emit("check",this.$refs.tree.getCheckedNodes())})}},E={class:"custom-tree-item"},G={class:"flex-1 extendLable"},K={key:0,style:{color:"#67c23a"}},R={key:0,class:"extendGroup"},S=l(" \u7F16\u8F91 "),z=l(" \u6DFB\u52A0\u5B50\u83DC\u5355 "),I=l(" \u6DFB\u52A0\u8D44\u6E90 "),J=l(" \u5220\u9664 "),U={key:1,class:"extendGroup"},j=l(" \u6279\u91CF\u9009\u62E9 ");function F(t,f,h,y,r,x){const b=c("Medal"),m=c("el-icon"),w=c("Position"),$=c("el-tag"),A=c("Link"),a=c("el-button"),N=c("el-tree"),_=V("auth");return o(),n(N,{ref:"tree",class:"custom-tree",data:r.list,props:r.defaultProps,"node-key":"id","default-expand-all":"","show-checkbox":h.picker,"check-strictly":"",onCheckChange:x.handleCheckChange},{default:s(({node:B,data:e})=>[C("div",E,[C("div",G,[e.type===1?(o(),g("span",K,[i(m,null,{default:s(()=>[i(b)]),_:1})])):d("",!0),C("span",{style:{"margin-right":"20px"},class:q({source:e.type===1})},v(e.name),3),e.type===1?(o(),n($,{key:1,type:r.typeColor[e.method]},{default:s(()=>[i(m,null,{default:s(()=>[i(w)]),_:1}),l(" "+v(e.method.toUpperCase()),1)]),_:2},1032,["type"])):d("",!0),i($,{type:"info"},{default:s(()=>[e.type===0?(o(),n(m,{key:0},{default:s(()=>[i(A)]),_:1})):d("",!0),l(" "+v(e.type===0?e.route:e.url),1)]),_:2},1024)]),h.picker?(o(),g("span",U,[i(a,{type:"text",onClick:p(u=>x.handleCheckChange(e,!B.checked,!0),["stop"])},{default:s(()=>[j]),_:2},1032,["onClick"])])):(o(),g("span",R,[k((o(),n(a,{type:"text",onClick:p(u=>t.$emit("edit",e),["stop"])},{default:s(()=>[S]),_:2},1032,["onClick"])),[[_,r.resource.edit]]),e.type===0?k((o(),n(a,{key:0,type:"text",onClick:p(u=>t.$emit("append",e),["stop"])},{default:s(()=>[z]),_:2},1032,["onClick"])),[[_,r.resource.add]]):d("",!0),e.type===0?k((o(),n(a,{key:1,type:"text",onClick:p(u=>t.$emit("add-resource",e),["stop"])},{default:s(()=>[I]),_:2},1032,["onClick"])),[[_,r.resource.add]]):d("",!0),k((o(),n(a,{type:"text",onClick:p(u=>t.$emit("remove",e),["stop"])},{default:s(()=>[J]),_:2},1032,["onClick"])),[[_,r.resource.remove]])]))])]),_:1},8,["data","props","show-checkbox","onCheckChange"])}var Q=T(M,[["render",F],["__scopeId","data-v-2cfcb698"]]);export{Q as default};