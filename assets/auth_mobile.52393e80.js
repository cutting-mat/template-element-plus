import{m as h,b}from"./auth.fb89abed.js";import{_ as g,r,o as v,h as M,w as o,e as l,k as m,t as V}from"./index.325e0c38.js";const w={data(){return{loading:!1,formData:{id:null,userInput:null,inputMobile:null},rules:{inputMobile:[{validator:(e,s,i)=>{s?(this.userMobile!==s&&i(new Error("\u90AE\u7BB1\u4E0D\u6B63\u786E")),i()):i(new Error("\u8BF7\u8F93\u5165\u7ED1\u5B9A\u624B\u673A"))}}],userInput:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"},{min:4,max:6,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801",trigger:"blur"}]}}},computed:{userMobile(){return String(this.$store.state.user.contactNumber)},anonymousMobile(){if(this.userMobile){const t=this.userMobile.split("");return`${t.map((s,i)=>i<3||t.length-i<3?s:"*").join("")}`}return""}},methods:{sendValidCode(){this.$refs.form.validateField("inputMobile",t=>{t&&(this.loading=!0,h({mobile:this.formData.inputMobile}).then(e=>{this.loading=!1,e.status===200?(this.formData.id=e.data.id,this.$refs.countdownButton.start()):this.$message.warning("\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}).catch(()=>{this.loading=!1}))})},handleSubmit(){this.$refs.form.validateField("userInput",t=>{t&&(this.loading=!0,b(this.formData).then(e=>{this.loading=!1,e.status===200?this.$emit("success",e.data):(this.$refs.form.resetFields(),this.$message.warning("\u9A8C\u8BC1\u5931\u8D25"))}).catch(()=>{this.loading=!1}))})}}},y=m(" \u83B7\u53D6\u9A8C\u8BC1\u7801 "),C=m("\u7ACB\u5373\u9A8C\u8BC1");function D(t,e,s,i,n,u){const a=r("el-form-item"),f=r("el-input"),p=r("countdownButton"),_=r("el-button"),c=r("el-form");return v(),M(c,{ref:"form",model:n.formData,rules:n.rules,"label-position":"left",class:"auth_mobile","v-loading":n.loading},{default:o(()=>[l(a,null,{default:o(()=>[m("\u7ED1\u5B9A\u624B\u673A\uFF1A"+V(u.anonymousMobile),1)]),_:1}),l(a,{prop:"inputMobile"},{default:o(()=>[l(f,{modelValue:n.formData.inputMobile,"onUpdate:modelValue":e[0]||(e[0]=d=>n.formData.inputMobile=d),placeholder:"\u8BF7\u8F93\u5165\u7ED1\u5B9A\u624B\u673A","prefix-icon":"message",size:"large"},null,8,["modelValue"])]),_:1}),l(a,{prop:"userInput"},{default:o(()=>[l(f,{modelValue:n.formData.userInput,"onUpdate:modelValue":e[1]||(e[1]=d=>n.formData.userInput=d),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",size:"large"},{append:o(()=>[l(p,{ref:"countdownButton",count:30,onClick:u.sendValidCode},{default:o(()=>[y]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),l(a,null,{default:o(()=>[l(_,{"native-type":"button",type:"primary",style:{width:"100%"},onClick:u.handleSubmit},{default:o(()=>[C]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules","v-loading"])}var B=g(w,[["render",D],["__scopeId","data-v-489a7ddd"]]);export{B as default};
