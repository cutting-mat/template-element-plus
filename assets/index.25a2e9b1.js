import{_ as e}from"./index.3253e0ab.js";import{o as r,t,ay as s,aF as n}from"./ui.9933098f.js";const i={class:"countdown"},a={key:0};const m=e({name:"count-down",emits:["start","end"],props:{count:{type:Number,required:!0},format:{type:Function,default:e=>`${e}s`}},data:()=>({renderNumber:null,timer:null}),methods:{start(){return new Promise((e=>{this.renderNumber=this.count,this.timer=setInterval((()=>{this.renderNumber&&this.renderNumber-1>0?this.renderNumber--:(this.reset(),e(),this.$emit("end"))}),1e3),this.$emit("start")}))},reset(){this.timer=clearInterval(this.timer),this.renderNumber=null}}},[["render",function(e,m,u,o,d,l){return r(),t("span",i,[d.renderNumber?(r(),t("span",a,s(u.format(d.renderNumber)),1)):n(e.$slots,"default",{key:1})])}]]);export{m as default};
