import{_ as e,a as i,b as o,d as t}from"./index.711114fb.js";import{l as a}from"./org.484cc44d.js";import{q as l,aI as s,r as d,o as c,t as r,b as n,w as u,v as m,ax as p}from"./ui.7155d707.js";const h={props:{modelValue:{type:[Number,String],required:!1},adapter:{type:Function,required:!1,default:e=>e},size:{type:String,required:!1}},components:{OrgTree:l((()=>i((()=>import("./OrgTree.11484898.js")),["assets/OrgTree.11484898.js","assets/org.484cc44d.js","assets/index.711114fb.js","assets/index.43470bb7.css","assets/ui.7155d707.js"])))},data:()=>({loading:!1,dialogVisible:!1,list:[],checkedNode:[]}),computed:{showTitle(){return this.adapter(this.modelValue)}},methods:{fetchData:function(){this.loading=!0,a().then((e=>{this.loading=!1,e.data&&(this.list=o(e.data))})).catch((()=>{this.loading=!1}))},submit(){const e=s(this.checkedNode);e&&e[0]&&this.$emit("update:modelValue",this.checkedNode[0].id,t(e[0])),this.dialogVisible=!1}},created(){this.fetchData()}},g={class:"orgPick-box"},b={class:"orgPicker"},f=p("确 定"),V=p("取 消");const k=e(h,[["render",function(e,i,o,t,a,l){const s=d("el-input"),p=d("OrgTree"),h=d("el-button"),k=d("el-dialog");return c(),r("div",g,[n(s,{size:o.size,readonly:"",modelValue:l.showTitle,placeholder:"请选择",onClick:i[0]||(i[0]=e=>a.dialogVisible=!0)},null,8,["size","modelValue"]),n(k,{"custom-class":"custom-dialog","append-to-body":"","close-on-click-modal":!1,title:"选择组织",modelValue:a.dialogVisible,"onUpdate:modelValue":i[3]||(i[3]=e=>a.dialogVisible=e),width:"1000px","destroy-on-close":"",onOpen:i[4]||(i[4]=e=>a.checkedNode=[])},{footer:u((()=>[n(h,{type:"primary",onClick:l.submit},{default:u((()=>[f])),_:1},8,["onClick"]),n(h,{onClick:i[2]||(i[2]=e=>a.dialogVisible=!1)},{default:u((()=>[V])),_:1})])),default:u((()=>[m("div",b,[n(p,{value:a.list,picker:"",onPick:i[1]||(i[1]=e=>a.checkedNode=e)},null,8,["value"])])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-115ee4f7"]]);export{k as default};
