import{_ as e}from"./index.e5690914.js";import{r as t,o as l,a as o,w as d,t as a,aB as r,az as i,aE as m,aA as n}from"./ui.7155d707.js";const s=e({props:{model:{type:Object,required:!0},default:{type:Object,required:!1,default:()=>({})},action:{type:String,required:!1,default:"update"},formAttribute:{type:Object,required:!1,default:()=>({})}},data(){return{editForm:this.default}},computed:{modelKey(){return Object.keys(this.model).filter((e=>-1!==this.model[e].scope.indexOf(this.action)))}},methods:{validate(e){return this.$refs.editForm.validate(e)},validateField(e,t){return this.$refs.editForm.validateField(e,t)},resetFields(){return this.$refs.editForm.resetFields()},clearValidate(){return this.$refs.editForm.clearValidate()},genItemValid(e){return"function"==typeof this.model[e].validator?(t,l,o)=>{this.model[e].validator(this.editForm,l,o)}:this.model[e].validator},handleChange(e){this.model[e].asynValid&&this.validateField(e)}}},[["render",function(e,s,u,p,h,f){const c=t("el-form-item"),F=t("el-form");return l(),o(F,m({ref:"editForm",model:h.editForm},Object.assign({size:"small","label-width":"80px"},u.formAttribute)),{default:d((()=>[(l(!0),a(n,null,r(f.modelKey,(e=>(l(),o(c,{key:e,label:u.model[e].label,prop:e,rules:{type:u.model[e].type,required:u.model[e].required,validator:f.genItemValid(e),message:u.model[e].message}},{default:d((()=>["string"===u.model[e].type?(l(),o(i(u.model[e].control),m({key:0,modelValue:h.editForm[e],"onUpdate:modelValue":t=>h.editForm[e]=t,modelModifiers:{trim:!0}},u.model[e].controlOption,{onChange:t=>f.handleChange(e)}),null,16,["modelValue","onUpdate:modelValue","onChange"])):"number"===u.model[e].type?(l(),o(i(u.model[e].control),m({key:1,modelValue:h.editForm[e],"onUpdate:modelValue":t=>h.editForm[e]=t,modelModifiers:{number:!0}},u.model[e].controlOption,{onChange:t=>f.handleChange(e)}),null,16,["modelValue","onUpdate:modelValue","onChange"])):(l(),o(i(u.model[e].control),m({key:2,modelValue:h.editForm[e],"onUpdate:modelValue":t=>h.editForm[e]=t},u.model[e].controlOption,{onChange:t=>f.handleChange(e)}),null,16,["modelValue","onUpdate:modelValue","onChange"]))])),_:2},1032,["label","prop","rules"])))),128))])),_:1},16,["model"])}]]);export{s as default};