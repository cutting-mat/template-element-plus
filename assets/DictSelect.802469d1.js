import{m as p}from"./util.d12da382.js";import{_ as d,r as s,o as r,g as n,w as m,h as f,c,i as b,F as h,m as y}from"./index.bb69c137.js";const q={mixins:[p],props:{modelValue:{type:[String,Number],required:!1},valueKey:{type:String,required:!1},labelKey:{type:String,required:!1},nullAble:{type:Boolean,required:!1,default(){return!0}},request:{type:Function,required:!1},param:{type:String,required:!1},responseTransfer:{type:Function,required:!1,default(e){return e.data}}},data(){return{bindValue:"",list:[]}},watch:{modelValue:{handler(){this.modelValue&&(this.bindValue=this.modelValue)},immediate:!0}},methods:{fetchData:async function(){const e=this.propsFinnal.request;if(typeof e!="function")return console.warn("DictControl: The required configuration [request] is missing!");if(typeof e!="function")return console.warn("DictControl: [request] must be a Function!");this.list=this.propsFinnal.responseTransfer(await e(this.param))}},created(){this.fetchData()}};function V(e,l,i,g,a,F){const o=s("el-option"),u=s("el-select");return r(),n(u,y(e.$attrs,{modelValue:a.bindValue,"onUpdate:modelValue":l[0]||(l[0]=t=>a.bindValue=t),onChange:l[1]||(l[1]=t=>e.$emit("update:modelValue",t))}),{default:m(()=>[i.nullAble?(r(),n(o,{key:0,label:e.$attrs.placeholder||"\u5168\u90E8",value:""},null,8,["label"])):f("",!0),(r(!0),c(h,null,b(a.list,t=>(r(),n(o,{label:t[e.propsFinnal.labelKey||"label"],value:t[e.propsFinnal.valueKey||"value"]},null,8,["label","value"]))),256))]),_:1},16,["modelValue"])}var w=d(q,[["render",V]]);export{w as default};
