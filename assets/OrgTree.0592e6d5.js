import{l as e}from"./org.22e24e45.js";import{_ as a,P as t,Q as l,r as i,o,g as s,w as n,h,e as r,l as d,t as c,f as p}from"./index.cc0542f8.js";const u=a({props:{value:{type:Array,required:!1,default:()=>[]},picker:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1}},data:()=>({loading:!1,tableData:[],selection:[]}),watch:{value:{handler(){this.tableData=this.value},deep:!0},selection:{handler(){this.picker&&this.$emit("pick",t(this.selection))},deep:!0}},methods:{handleSelectionChange(e){(e=e.map((e=>l(e)?t(e):e))).length>1&&!this.multiple?e.forEach(((a,t)=>{this.$refs.table.toggleRowSelection(a,t===e.length-1)})):this.selection=e},load(e,a,t){this.fetchData(e?{pid:e.id}:null).then((e=>{t(e.data)}))},fetchData(a){return this.loading=!0,e(a).then((e=>(this.loading=!1,e))).catch((()=>{this.loading=!1}))}},created(){this.value.length?this.tableData=this.value:this.fetchData().then((e=>{this.tableData=e.data}))}},[["render",function(e,a,t,l,u,f){const g=i("el-table-column"),b=i("el-table");return o(),s(b,{ref:"table",height:"100%","row-key":"id",lazy:"",data:u.tableData,load:f.load,onSelectionChange:f.handleSelectionChange},{default:n((()=>[t.picker?(o(),s(g,{key:0,type:"selection",width:"50"})):h("",!0),r(g,{prop:"name",label:"名称"}),r(g,{prop:"fullName",label:"全称"}),r(g,{label:"创建时间"},{default:n((a=>[d(c(e.$filter.date(a.row.createTime)),1)])),_:1}),t.picker?h("",!0):(o(),s(g,{key:1,label:"操作",width:"260"},{default:n((a=>[p(e.$slots,"action",{row:a.row})])),_:3}))])),_:3},8,["data","load","onSelectionChange"])}]]);export{u as default};
