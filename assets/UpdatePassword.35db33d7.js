import{z as g,_ as v,r as s,A as b,B as D,o as u,c as y,e as o,v as k,w as l,g as V,h as x,l as B}from"./index.bb69c137.js";const q=(a,t)=>g.put("/updatePassword",a,t),C={data(){return{loading:!1,formData:{captcha:"",checkPass:"",newPassword:""},rules:{newPassword:[{validator:(c,r,e)=>{r===""?e(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):(this.formData.checkPass!==""&&this.$refs.form.validateField("checkPass"),e())},trigger:"blur"},{min:6,max:30,message:"\u957F\u5EA6\u5728 6 \u5230 30 \u4E2A\u5B57\u7B26",trigger:"blur"}],checkPass:[{validator:(c,r,e)=>{r===""?e(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):r!==this.formData.newPassword?e(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):e()},trigger:"blur"}]}}},methods:{submitForm(){this.$refs.form.validate(a=>{if(a){this.loading=!0;let t=Object.assign({},this.formData,{account:this.$store.state.user.accountNumber});delete t.checkPass,this.$route.query.account&&Object.assign(t,{account:this.$route.query.account}),q(t).then(()=>{this.loading=!1,this.$alert("\u5BC6\u7801\u4FEE\u6539\u6210\u529F",{callback:()=>{this.$router.go(-1)}})}).catch(()=>{this.loading=!1})}})}},created:function(){this.$route.query.authCode&&(this.formData.captcha=this.$route.query.authCode)}},E=B("\u63D0\u4EA4");function N(a,t,c,r,e,m){const d=s("ToolBar"),f=s("el-alert"),p=s("input-password"),n=s("el-form-item"),h=s("el-input"),_=s("el-button"),w=s("el-form"),P=b("loading");return D((u(),y("div",null,[o(d),o(w,{class:"wrap",model:e.formData,"status-icon":"",rules:e.rules,ref:"form","label-width":"100px",onSubmit:k(m.submitForm,["prevent"])},{default:l(()=>[e.formData.captcha?x("",!0):(u(),V(f,{key:0,title:"\u672A\u9A8C\u8BC1\u7528\u6237\u8EAB\u4EFD\uFF0C\u8BF7\u8FD4\u56DE\u91CD\u8BD5\uFF01",type:"error","show-icon":"",closable:!1,style:{"margin-bottom":"20px"}})),o(n,{label:"\u65B0\u5BC6\u7801",prop:"newPassword"},{default:l(()=>[o(p,{modelValue:e.formData.newPassword,"onUpdate:modelValue":t[0]||(t[0]=i=>e.formData.newPassword=i),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"checkPass"},{default:l(()=>[o(h,{type:"password",modelValue:e.formData.checkPass,"onUpdate:modelValue":t[1]||(t[1]=i=>e.formData.checkPass=i),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(n,null,{default:l(()=>[o(_,{type:"primary","native-type":"submit"},{default:l(()=>[E]),_:1})]),_:1})]),_:1},8,["model","rules","onSubmit"])])),[[P,e.loading,void 0,{fullscreen:!0}]])}var F=v(C,[["render",N]]);export{F as default};