import{_ as E,L as v,M as V,r as n,o as p,g as _,w as l,l as d,t as w,h as C,e as o,N as y}from"./index.bb69c137.js";const D={data(){return{loading:!1,formData:{id:null,userInput:null,inputEmail:null},rules:{inputEmail:[{validator:(e,s,a)=>{if(!s)a(new Error("\u8BF7\u8F93\u5165\u5B89\u5168\u90AE\u7BB1"));else{if(this.userEmail){if(this.userEmail!==s)return a(new Error("\u90AE\u7BB1\u4E0D\u6B63\u786E"))}else return y({email:s}).then(t=>{t.data?(this.accountInfo=t.data,a()):a(new Error("\u90AE\u7BB1\u4E0D\u5B58\u5728"))});a()}},trigger:[]}],userInput:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"},{min:4,max:6,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801",trigger:"blur"}]},accountInfo:null}},computed:{userEmail(){return this.$store.state.user.email||""},anonymousEmail(){if(this.userEmail){const i=this.userEmail.split("@")[0].split("");return`${i.map((s,a)=>a===0||a===i.length-1?s:"*").join("")}@${this.userEmail.split("@")[1]}`}return""}},methods:{sendValidCode(){this.$refs.form.validateField("inputEmail",i=>{i&&(this.loading=!0,v({email:this.formData.inputEmail}).then(e=>{this.loading=!1,e.status===200?(this.formData.id=e.data.id,this.$refs.countdownButton.start()):this.$message.warning("\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}).catch(()=>{this.loading=!1}))})},handleSubmit(){this.$refs.form.validateField("userInput",i=>{i&&(this.loading=!0,V(this.formData).then(e=>{this.loading=!1,e.status===200?this.$emit("success",e.data,this.accountInfo):(this.$refs.form.resetFields(),this.$message.warning("\u9A8C\u8BC1\u5931\u8D25"))}).catch(()=>{this.loading=!1}))})}}},I=d(" \u83B7\u53D6\u9A8C\u8BC1\u7801 "),x=d(" \u7ACB\u5373\u9A8C\u8BC1 ");function N(i,e,s,a,t,r){const u=n("el-form-item"),f=n("el-input"),c=n("countdownButton"),h=n("el-button"),g=n("el-form");return p(),_(g,{ref:"form",model:t.formData,rules:t.rules,"label-position":"left",class:"auth_email","v-loading":t.loading},{default:l(()=>[r.anonymousEmail?(p(),_(u,{key:0},{default:l(()=>[d("\u5B89\u5168\u90AE\u7BB1\uFF1A"+w(r.anonymousEmail),1)]),_:1})):C("",!0),o(u,{prop:"inputEmail"},{default:l(()=>[o(f,{size:"large",modelValue:t.formData.inputEmail,"onUpdate:modelValue":e[0]||(e[0]=m=>t.formData.inputEmail=m),placeholder:"\u8BF7\u8F93\u5165\u5B89\u5168\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),o(u,{prop:"userInput"},{default:l(()=>[o(f,{size:"large",modelValue:t.formData.userInput,"onUpdate:modelValue":e[1]||(e[1]=m=>t.formData.userInput=m),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},{append:l(()=>[o(c,{ref:"countdownButton",count:30,onClick:r.sendValidCode},{default:l(()=>[I]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),o(u,null,{default:l(()=>[o(h,{type:"primary",size:"large",style:{width:"100%"},onClick:r.handleSubmit},{default:l(()=>[x]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules","v-loading"])}var S=E(D,[["render",N],["__scopeId","data-v-5ff51b8c"]]);export{S as default};
