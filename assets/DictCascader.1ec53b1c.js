import{m as e}from"./util.d12da382.js";import{_ as t}from"./index.a7704b88.js";import{r as i,o as a,a as r,aE as o}from"./ui.7155d707.js";const s=t({mixins:[e],props:{modelValue:{type:[String,Number],required:!1},valueKey:{type:String,required:!1,default:()=>"value"},labelKey:{type:String,required:!1,default:()=>"label"},nullAble:{type:Boolean,required:!1,default:()=>!0},request:{type:Function,required:!1},param:{type:String,required:!1,default(){}},responseTransfer:{type:Function,required:!1,default:e=>e}},data:()=>({bindValue:[],list:[]}),watch:{modelValue:{handler(){this.modelValue&&(this.bindValue=this.modelValue)},immediate:!0}},methods:{fetchData:async function(){if(!this.$DictcontrolOption&&!this.$DictcontrolOption.request&&!this.request)return console.warn("DictControl: The required configuration [request] is missing!");const e=this.request||this.$DictcontrolOption.request;if("function"!=typeof e)return console.warn("DictControl: [request] must be a Function!");this.list=this.responseTransfer(await e(this.param))}},created(){this.fetchData()}},[["render",function(e,t,s,n,l,u){const d=i("el-cascader");return a(),r(d,o(e.$attrs,{modelValue:l.bindValue,"onUpdate:modelValue":t[0]||(t[0]=e=>l.bindValue=e),options:l.list,props:{value:this.valueKey,label:this.labelKey},onChange:t[1]||(t[1]=t=>e.$emit("update:modelValue",t))}),null,16,["modelValue","options","props"])}]]);export{s as default};
