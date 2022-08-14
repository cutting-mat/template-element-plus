import{_ as e,d as t,b as o,a as l}from"./index.711114fb.js";import{r as a}from"./resource.32486f65.js";import{q as r,r as d,aX as i,aY as s,o as m,t as u,b as n,v as c,w as p,a as h,aA as f,aB as g,aC as F,ax as b,ay as _}from"./ui.7155d707.js";const y={components:{TheResourcePicker:r((()=>l((()=>import("./TheResourcePicker.6e113ff7.js")),["assets/TheResourcePicker.6e113ff7.js","assets/TheResourcePicker.55cef8ca.css","assets/index.711114fb.js","assets/index.43470bb7.css","assets/ui.7155d707.js","assets/resource.32486f65.js"])))},data(){return{resource:a,loading:!1,list:[],editForm:{pid:null,method:"get",name:"",url:"",type:0},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],url:[{required:!0,message:"请输入路由/URL",trigger:"blur"}],method:[{validator:(e,t,o)=>{if(1===this.editForm.type&&!t)return o(new Error("请填写Method!"));o()},trigger:"blur"}]},requestMethods:[{label:"GET"},{label:"POST"},{label:"PUT"},{label:"DELETE"}]}},methods:{edit:function(e){this.editForm=t(e),this.editForm.method=this.editForm.method.toLowerCase()},append(e){this.editForm={pid:e.id,name:"",route:"",type:0}},addResource(e){this.editForm={pid:e.id,method:"get",name:"",url:"",type:1}},save(){this.$refs.editForm.validate((e=>{if(e){let e=t(this.editForm);const o=a;Array.isArray(e.pid)&&(e.pid=e.pid.pop()),e.method&&(e.method=e.method.toLowerCase()),this.loading=!0,(e.id?o.edit:o.add)(e).then((()=>{this.fetchData(),this.$message({message:"添加成功",type:"success"})})).catch((()=>{this.loading=!1}))}}))},resetFrom:function(){this.editForm={pid:"",name:"",route:""},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove(e){if(!e||!e.id)return null;const t=a;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.loading=!0,t.remove({id:e.id}).then((()=>{this.fetchData(),this.$message({message:"删除成功",type:"success"})})).catch((()=>{this.loading=!1}))}))},fetchData:function(){this.loading=!0,this.$store.getPermission({cache:"update"}).then((e=>{this.loading=!1,this.list=o(e.menus.concat(e.resources))})).catch((()=>{this.loading=!1}))}},created:function(){this.fetchData()}},V={class:"flex-col scrollbar"},v={class:"flex-1 flex-row"},x={class:"resourceWrap flex-1 scrollbar"},R=b("保 存"),k=b("重 置");const T=e(y,[["render",function(e,t,o,l,a,r){const y=d("ToolBar"),T=d("TheResourcePicker"),E=d("el-input"),U=d("el-form-item"),w=d("el-radio"),A=d("el-radio-group"),C=d("el-cascader"),L=d("el-button"),M=d("el-form"),P=i("loading");return s((m(),u("div",V,[n(y),c("div",v,[c("div",x,[n(T,{listdata:a.list,onEdit:r.edit,onAppend:r.append,onAddResource:r.addResource,onRemove:r.remove},null,8,["listdata","onEdit","onAppend","onAddResource","onRemove"])]),n(M,{class:"resourceEditFrom",ref:"editForm",rules:a.rules,model:a.editForm,"label-width":"80px"},{default:p((()=>[n(U,{label:"名称",prop:"name"},{default:p((()=>[n(E,{modelValue:a.editForm.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.editForm.name=e),modelModifiers:{trim:!0},maxlength:100},null,8,["modelValue"])])),_:1}),1===a.editForm.type?(m(),h(U,{key:0,label:"方法",prop:"method"},{default:p((()=>[n(A,{modelValue:a.editForm.method,"onUpdate:modelValue":t[1]||(t[1]=e=>a.editForm.method=e)},{default:p((()=>[(m(!0),u(f,null,g(a.requestMethods,((e,t)=>(m(),h(w,{label:e.label.toLowerCase()},{default:p((()=>[b(_(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1})):F("",!0),1===a.editForm.type?(m(),h(U,{key:1,label:"URL",prop:"url"},{default:p((()=>[n(E,{modelValue:a.editForm.url,"onUpdate:modelValue":t[2]||(t[2]=e=>a.editForm.url=e),modelModifiers:{trim:!0}},null,8,["modelValue"])])),_:1})):(m(),h(U,{key:2,label:"路由",prop:"route"},{default:p((()=>[n(E,{modelValue:a.editForm.route,"onUpdate:modelValue":t[3]||(t[3]=e=>a.editForm.route=e),modelModifiers:{trim:!0},maxlength:100},null,8,["modelValue"])])),_:1})),n(U,{label:"父级"},{default:p((()=>[n(C,{modelValue:a.editForm.pid,"onUpdate:modelValue":t[4]||(t[4]=e=>a.editForm.pid=e),options:a.list,props:{checkStrictly:!0,label:"name",value:"id"}},null,8,["modelValue","options"])])),_:1}),n(U,{label:"序号"},{default:p((()=>[n(E,{modelValue:a.editForm.orderNum,"onUpdate:modelValue":t[5]||(t[5]=e=>a.editForm.orderNum=e),modelModifiers:{trim:!0},type:"number"},null,8,["modelValue"])])),_:1}),n(U,null,{default:p((()=>[n(L,{type:"primary",onClick:r.save},{default:p((()=>[R])),_:1},8,["onClick"]),n(L,{onClick:r.resetFrom},{default:p((()=>[k])),_:1},8,["onClick"])])),_:1})])),_:1},8,["rules","model"])])])),[[P,a.loading]])}],["__scopeId","data-v-9e327008"]]);export{T as default};