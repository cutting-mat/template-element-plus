import{_ as e,a as i,b as o,d as a}from"./index.a7704b88.js";import{l as t}from"./org.9795c9b1.js";import{q as l,aI as s,r as d,o as r,t as c,b as n,w as u,v as m,ax as p}from"./ui.7155d707.js";const h={props:{modelValue:{type:[Number,String],required:!1},adapter:{type:Function,required:!1,default:e=>e},size:{type:String,required:!1}},components:{OrgTree:l((()=>i((()=>import("./OrgTree.87545516.js")),["assets/OrgTree.87545516.js","assets/org.9795c9b1.js","assets/index.a7704b88.js","assets/index.43470bb7.css","assets/ui.7155d707.js"])))},data:()=>({loading:!1,dialogVisible:!1,list:[],checkedNode:[]}),computed:{showTitle(){return this.adapter(this.modelValue)}},methods:{fetchData:function(){this.loading=!0,t().then((e=>{this.loading=!1,e.data&&(this.list=o(e.data))})).catch((()=>{this.loading=!1}))},submit(){const e=s(this.checkedNode);e&&e[0]&&this.$emit("update:modelValue",this.checkedNode[0].id,a(e[0])),this.dialogVisible=!1}},created(){this.fetchData()}},g={class:"orgPick-box"},b={class:"orgPicker"},V=p("确 定"),f=p("取 消");const k=e(h,[["render",function(e,i,o,a,t,l){const s=d("el-input"),p=d("OrgTree"),h=d("el-button"),k=d("el-dialog");return r(),c("div",g,[n(s,{size:o.size,readonly:"",modelValue:l.showTitle,placeholder:"请选择",onClick:i[0]||(i[0]=e=>t.dialogVisible=!0)},null,8,["size","modelValue"]),n(k,{"custom-class":"custom-dialog","append-to-body":"","close-on-click-modal":!1,title:"选择组织",modelValue:t.dialogVisible,"onUpdate:modelValue":i[3]||(i[3]=e=>t.dialogVisible=e),width:"1000px","destroy-on-close":"",onOpen:i[4]||(i[4]=e=>t.checkedNode=[])},{footer:u((()=>[n(h,{type:"primary",onClick:l.submit},{default:u((()=>[V])),_:1},8,["onClick"]),n(h,{onClick:i[2]||(i[2]=e=>t.dialogVisible=!1)},{default:u((()=>[f])),_:1})])),default:u((()=>[m("div",b,[n(p,{value:t.list,picker:"",onPick:i[1]||(i[1]=e=>t.checkedNode=e)},null,8,["value"])])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-115ee4f7"]]);export{k as default};