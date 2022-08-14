import{_ as e,D as l,d as a,r as i,B as t,C as o,o as s,c as r,e as d,w as n,g as m,a as c,l as u}from"./index.cc0542f8.js";import{r as h,a as g,e as f,b as p,l as b}from"./role.b1f6a579.js";const k={components:{TheResourcePicker:l((()=>c((()=>import("./TheResourcePicker.ecdc2171.js")),["assets/TheResourcePicker.ecdc2171.js","assets/TheResourcePicker.55cef8ca.css","assets/index.cc0542f8.js","assets/index.43470bb7.css","assets/resource.ad00fe08.js"])))},data:()=>({role:h,dialogVisible:!1,loading:!1,list:[],editForm:{name:"",remark:"",resources:[]},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],remark:[{min:0,max:255,message:"长度 0 到 255 个字符",trigger:"blur"}]}}),methods:{edit(e){this.editForm=a(e),this.editForm.resources=e.resources,this.dialogVisible=!0},save(){this.$refs.editForm.validate((e=>{if(e){this.loading=!0;let e=a(this.editForm);this.handleCloseDialog(),(e.id?f:g)(e).then((()=>{this.fetchData(),this.$message({message:"添加成功",type:"success"})})).catch((()=>{this.loading=!1}))}}))},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={name:"",remark:"",resources:[]},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove(e){if(!e||!e.id)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.loading=!0,p({id:e.id}).then((()=>{this.fetchData(),this.$message({message:"删除成功",type:"success"})})).catch((()=>{this.loading=!1}))}))},fetchData:function(){this.loading=!0,b().then((e=>{this.loading=!1,this.list=e.data})).catch((()=>{this.loading=!1}))}},created:function(){this.fetchData()}},_={class:"scrollbar"},F=u(" 添加 "),V=u("编辑"),C=u("删除"),x=u("确 定"),y=u("取 消");const D=e(k,[["render",function(e,l,a,c,u,h){const g=i("plus"),f=i("el-icon"),p=i("el-button"),b=i("ToolBar"),k=i("el-table-column"),D=i("el-table"),w=i("el-input"),v=i("el-form-item"),T=i("TheResourcePicker"),$=i("el-form"),B=i("el-dialog"),P=t("auth"),R=t("loading");return o((s(),r("div",_,[d(b,null,{default:n((()=>[o((s(),m(p,{type:"primary",onClick:l[0]||(l[0]=e=>u.dialogVisible=!0)},{default:n((()=>[d(f,null,{default:n((()=>[d(g)])),_:1}),F])),_:1})),[[P,u.role.add]])])),_:1}),d(D,{data:u.list,style:{width:"100%"}},{default:n((()=>[d(k,{prop:"name",label:"角色名称",align:"center"}),d(k,{prop:"remark",label:"备注"}),d(k,{label:"操作",width:"300",align:"center"},{default:n((e=>[o((s(),m(p,{type:"info",plain:"",onClick:l=>h.edit(e.row)},{default:n((()=>[V])),_:2},1032,["onClick"])),[[P,u.role.edit]]),o((s(),m(p,{type:"danger",plain:"",onClick:l=>h.remove(e.row)},{default:n((()=>[C])),_:2},1032,["onClick"])),[[P,u.role.remove]])])),_:1})])),_:1},8,["data"]),d(B,{"close-on-click-modal":!1,"custom-class":"comDialog",title:"权限信息",modelValue:u.dialogVisible,"onUpdate:modelValue":l[5]||(l[5]=e=>u.dialogVisible=e),width:"600px",onClose:h.handleCloseDialog},{footer:n((()=>[d(p,{type:"primary",onClick:h.save},{default:n((()=>[x])),_:1},8,["onClick"]),d(p,{onClick:l[4]||(l[4]=e=>u.dialogVisible=!1)},{default:n((()=>[y])),_:1})])),default:n((()=>[d($,{ref:"editForm",rules:u.rules,model:u.editForm,"label-width":"80px"},{default:n((()=>[d(v,{label:"角色名称",prop:"name"},{default:n((()=>[d(w,{modelValue:u.editForm.name,"onUpdate:modelValue":l[1]||(l[1]=e=>u.editForm.name=e),modelModifiers:{trim:!0},maxlength:100},null,8,["modelValue"])])),_:1}),d(v,{label:"备注",prop:"remark"},{default:n((()=>[d(w,{modelValue:u.editForm.remark,"onUpdate:modelValue":l[2]||(l[2]=e=>u.editForm.remark=e),modelModifiers:{trim:!0},type:"textarea",maxlength:1e3},null,8,["modelValue"])])),_:1}),d(v,{label:"权限"},{default:n((()=>[d(T,{picker:"",checked:u.editForm.resources,onCheck:l[3]||(l[3]=e=>u.editForm.resources=e.map((e=>e.id)))},null,8,["checked"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue","onClose"])])),[[R,u.loading]])}]]);export{D as default};
