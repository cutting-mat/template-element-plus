import{c as o,d as c}from"./auth.fb89abed.js";import{_ as d,r as m,o as n,h as u,w as p,f as h,c as f,i as g,K as _,m as I,k as v}from"./index.325e0c38.js";const D={props:{imgWidth:{type:String,required:!1,default:"76px"},imgHeight:{type:String,required:!1,default:"38px"}},data(){return{loading:!1,formData:{id:null,userInput:null},img:{src:null}}},methods:{fetchData(){if(this.loading)return null;this.loading=!0,o().then(t=>{this.loading=!1,t.status===200?(this.formData.id=t.data.id,this.img.src=t.data.content):console.warn("\u56FE\u5F62\u9A8C\u8BC1\u7801\u83B7\u53D6\u5931\u8D25")}).catch(()=>{this.loading=!1})},valid(){return new Promise((t,e)=>{this.formData.userInput?c(this.formData).then(a=>{a.status===200?t(a.data):e("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}).catch(()=>{e("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}):e("\u8BF7\u586B\u5199\u9A8C\u8BC1\u7801")})}},created(){this.fetchData()}},x=v(" \u52A0\u8F7D\u4E2D... "),w=["src"];function y(t,e,a,C,s,l){const r=m("el-input");return n(),u(r,I({placeholder:"\u9A8C\u8BC1\u7801",modelValue:s.formData.userInput,"onUpdate:modelValue":e[1]||(e[1]=i=>s.formData.userInput=i)},t.$attrs,{class:"InputCaptchaImage"}),{append:p(()=>[h("div",{class:"valid_image_wrap flex-row align-center",slot:"append",style:_({height:a.imgHeight,width:a.imgWidth,margin:"0 -20px"}),onClick:e[0]||(e[0]=(...i)=>l.fetchData&&l.fetchData(...i))},[x,!s.loading&&s.img.src?(n(),f("img",{key:0,class:"valid_image",src:s.img.src,style:{height:"100%",width:"100%","object-fit":"contain"}},null,8,w)):g("",!0)],4)]),_:1},16,["modelValue"])}var B=d(D,[["render",y],["__scopeId","data-v-6c72cfb4"]]);export{B as default};
