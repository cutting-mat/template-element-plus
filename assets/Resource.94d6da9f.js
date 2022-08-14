import{_ as e,D as t,d as o,b as l,r,B as d,C as a,o as i,c as s,e as m,k as u,w as n,g as c,F as h,i as p,h as f,a as g,l as F,t as b}from"./index.cc0542f8.js";import{r as _}from"./resource.ad00fe08.js";const V={components:{TheResourcePicker:t((()=>g((()=>import("./TheResourcePicker.ecdc2171.js")),["assets/TheResourcePicker.ecdc2171.js","assets/TheResourcePicker.55cef8ca.css","assets/index.cc0542f8.js","assets/index.43470bb7.css","assets/resource.ad00fe08.js"])))},data(){return{resource:_,loading:!1,list:[],editForm:{pid:null,method:"get",name:"",url:"",type:0},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],url:[{required:!0,message:"请输入路由/URL",trigger:"blur"}],method:[{validator:(e,t,o)=>{if(1===this.editForm.type&&!t)return o(new Error("请填写Method!"));o()},trigger:"blur"}]},requestMethods:[{label:"GET"},{label:"POST"},{label:"PUT"},{label:"DELETE"}]}},methods:{edit:function(e){this.editForm=o(e),this.editForm.method=this.editForm.method.toLowerCase()},append(e){this.editForm={pid:e.id,name:"",route:"",type:0}},addResource(e){this.editForm={pid:e.id,method:"get",name:"",url:"",type:1}},save(){this.$refs.editForm.validate((e=>{if(e){let e=o(this.editForm);const t=_;Array.isArray(e.pid)&&(e.pid=e.pid.pop()),e.method&&(e.method=e.method.toLowerCase()),this.loading=!0,(e.id?t.edit:t.add)(e).then((()=>{this.fetchData(),this.$message({message:"添加成功",type:"success"})})).catch((()=>{this.loading=!1}))}}))},resetFrom:function(){this.editForm={pid:"",name:"",route:""},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove(e){if(!e||!e.id)return null;const t=_;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.loading=!0,t.remove({id:e.id}).then((()=>{this.fetchData(),this.$message({message:"删除成功",type:"success"})})).catch((()=>{this.loading=!1}))}))},fetchData:function(){this.loading=!0,this.$store.getPermission({cache:"update"}).then((e=>{this.loading=!1,this.list=l(e.menus.concat(e.resources))})).catch((()=>{this.loading=!1}))}},created:function(){this.fetchData()}},y={class:"flex-col scrollbar"},v={class:"flex-1 flex-row"},k={class:"resourceWrap flex-1 scrollbar"},x=F("保 存"),R=F("重 置");const T=e(V,[["render",function(e,t,o,l,g,_){const V=r("ToolBar"),T=r("TheResourcePicker"),E=r("el-input"),U=r("el-form-item"),w=r("el-radio"),C=r("el-radio-group"),A=r("el-cascader"),D=r("el-button"),L=r("el-form"),M=d("loading");return a((i(),s("div",y,[m(V),u("div",v,[u("div",k,[m(T,{listdata:g.list,onEdit:_.edit,onAppend:_.append,onAddResource:_.addResource,onRemove:_.remove},null,8,["listdata","onEdit","onAppend","onAddResource","onRemove"])]),m(L,{class:"resourceEditFrom",ref:"editForm",rules:g.rules,model:g.editForm,"label-width":"80px"},{default:n((()=>[m(U,{label:"名称",prop:"name"},{default:n((()=>[m(E,{modelValue:g.editForm.name,"onUpdate:modelValue":t[0]||(t[0]=e=>g.editForm.name=e),modelModifiers:{trim:!0},maxlength:100},null,8,["modelValue"])])),_:1}),1===g.editForm.type?(i(),c(U,{key:0,label:"方法",prop:"method"},{default:n((()=>[m(C,{modelValue:g.editForm.method,"onUpdate:modelValue":t[1]||(t[1]=e=>g.editForm.method=e)},{default:n((()=>[(i(!0),s(h,null,p(g.requestMethods,((e,t)=>(i(),c(w,{label:e.label.toLowerCase()},{default:n((()=>[F(b(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1})):f("",!0),1===g.editForm.type?(i(),c(U,{key:1,label:"URL",prop:"url"},{default:n((()=>[m(E,{modelValue:g.editForm.url,"onUpdate:modelValue":t[2]||(t[2]=e=>g.editForm.url=e),modelModifiers:{trim:!0}},null,8,["modelValue"])])),_:1})):(i(),c(U,{key:2,label:"路由",prop:"route"},{default:n((()=>[m(E,{modelValue:g.editForm.route,"onUpdate:modelValue":t[3]||(t[3]=e=>g.editForm.route=e),modelModifiers:{trim:!0},maxlength:100},null,8,["modelValue"])])),_:1})),m(U,{label:"父级"},{default:n((()=>[m(A,{modelValue:g.editForm.pid,"onUpdate:modelValue":t[4]||(t[4]=e=>g.editForm.pid=e),options:g.list,props:{checkStrictly:!0,label:"name",value:"id"}},null,8,["modelValue","options"])])),_:1}),m(U,{label:"序号"},{default:n((()=>[m(E,{modelValue:g.editForm.orderNum,"onUpdate:modelValue":t[5]||(t[5]=e=>g.editForm.orderNum=e),modelModifiers:{trim:!0},type:"number"},null,8,["modelValue"])])),_:1}),m(U,null,{default:n((()=>[m(D,{type:"primary",onClick:_.save},{default:n((()=>[x])),_:1},8,["onClick"]),m(D,{onClick:_.resetFrom},{default:n((()=>[R])),_:1},8,["onClick"])])),_:1})])),_:1},8,["rules","model"])])])),[[M,g.loading]])}],["__scopeId","data-v-9e327008"]]);export{T as default};
