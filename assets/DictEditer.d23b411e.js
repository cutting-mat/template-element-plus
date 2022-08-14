import{_ as e,c as i,d as t,n as l,o as a,p as d,q as o,b as s}from"./index.a7704b88.js";import{r,aX as n,o as u,a as c,w as m,aY as h,t as p,b as f,v as g,ax as C}from"./ui.7155d707.js";const b={props:{visible:{type:Boolean,required:!1,default:!1},dictCode:{type:String,required:!1}},data:()=>({dict:i,loading:!0,dialogVisible:!1,queryParam:{dictCode:""},list:[],editForm:{pid:"",value:"",dictCode:""},rules:{value:[{required:!0,message:"请输入数据值",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],dictCode:[{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}]}}),watch:{dictCode:function(){this.queryParam.dictCode=this.dictCode}},methods:{append(e){this.editForm.pid=e.id,this.dialogVisible=!0},edit(e){const i=Object.assign({},e);this.editForm=i,this.dialogVisible=!0},save(){this.$refs.editForm.validate((e=>{if(e){let e=t(this.editForm);e.dictCode=this.queryParam.dictCode,this.handleCloseDialog(),this.loading=!0,e.id?a(e).then((()=>{this.fetchData(),this.$message({message:"编辑成功",type:"success"})})):l(e).then((()=>{this.fetchData(),this.$message({message:"添加成功",type:"success"})}))}}))},remove(e){if(!e)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{d({id:e.id}).then((()=>{this.fetchData(),this.$message({message:"删除成功",type:"success"})}))}))},handleCloseDialog:function(){this.editForm={pid:"",value:"",dictCode:""},this.dialogVisible=!1},requireClose(){this.list=[],this.$emit("close")},fetchData(){this.loading=!0,o(this.queryParam).then((e=>{this.loading=!1,this.list=s(e.data)}))},handleInit(){this.queryParam.dictCode&&this.fetchData()}},created(){}},v={class:"myform flex-col"},y=C(" 添加数据 "),V={class:"flex-1 scrollbar"},_=C("编辑"),k=C("添加下级"),x=C("删除"),w=C("确 定"),q=C("取 消");const F=e(b,[["render",function(e,i,t,l,a,d){const o=r("plus"),s=r("el-icon"),C=r("el-button"),b=r("ToolBar"),F=r("el-table-column"),D=r("el-table"),$=r("el-input"),O=r("el-form-item"),P=r("el-form"),B=r("el-dialog"),E=r("el-drawer"),U=n("auth"),j=n("loading");return u(),c(E,{modelValue:t.visible,"onUpdate:modelValue":i[5]||(i[5]=e=>t.visible=e),direction:"rtl",size:"900px",withHeader:!1,onOpened:d.handleInit,onClose:d.requireClose},{default:m((()=>[h((u(),p("div",v,[f(b,{title:"字典数据维护",back:d.requireClose},{default:m((()=>[h((u(),c(C,{type:"primary",onClick:i[0]||(i[0]=e=>a.dialogVisible=!0)},{default:m((()=>[f(s,null,{default:m((()=>[f(o)])),_:1}),y])),_:1})),[[U,a.dict.itemAdd]])])),_:1},8,["back"]),g("div",V,[f(D,{data:a.list,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","default-expand-all":""},{default:m((()=>[f(F,{prop:"value",label:"值"}),f(F,{prop:"dictCode",label:"CODE",align:"center"}),f(F,{label:"操作",width:"300",align:"center"},{default:m((e=>[h((u(),c(C,{onClick:i=>d.edit(e.row)},{default:m((()=>[_])),_:2},1032,["onClick"])),[[U,a.dict.itemEdit]]),h((u(),c(C,{onClick:i=>d.append(e.row)},{default:m((()=>[k])),_:2},1032,["onClick"])),[[U,a.dict.itemEdit]]),h((u(),c(C,{type:"danger",plain:"",onClick:i=>d.remove(e.row)},{default:m((()=>[x])),_:2},1032,["onClick"])),[[U,a.dict.itemRemove]])])),_:1})])),_:1},8,["data"])]),f(B,{"close-on-click-modal":!1,title:"字典数据",modelValue:a.dialogVisible,"onUpdate:modelValue":i[4]||(i[4]=e=>a.dialogVisible=e),width:"600px","append-to-body":"",onClose:d.handleCloseDialog},{footer:m((()=>[g("div",null,[f(C,{type:"primary",onClick:d.save},{default:m((()=>[w])),_:1},8,["onClick"]),f(C,{onClick:i[3]||(i[3]=e=>a.dialogVisible=!1)},{default:m((()=>[q])),_:1})])])),default:m((()=>[f(P,{ref:"editForm",rules:a.rules,model:a.editForm,"label-width":"80px"},{default:m((()=>[f(O,{label:"值",prop:"value"},{default:m((()=>[f($,{modelValue:a.editForm.value,"onUpdate:modelValue":i[1]||(i[1]=e=>a.editForm.value=e)},null,8,["modelValue"])])),_:1}),f(O,{label:"CODE",prop:"dictCode"},{default:m((()=>[f($,{modelValue:a.editForm.dictCode,"onUpdate:modelValue":i[2]||(i[2]=e=>a.editForm.dictCode=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue","onClose"])])),[[j,a.loading]])])),_:1},8,["modelValue","onOpened","onClose"])}],["__scopeId","data-v-195064d1"]]);export{F as default};
