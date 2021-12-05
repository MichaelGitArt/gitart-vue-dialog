import{L as e,d as a,y as l,a as n,o,b as u,x as t,E as d,D as r,M as s,r as m,J as i,j as p,c,w as v,q as f}from"./vendor.19817775.js";const g=()=>{const a=e();if(!a)throw new Error("useComponentId used out of setup function");return a.uid},h=Symbol("GroupRadio");var V=a({name:"Radio",props:{value:{type:[String,Boolean],default:!0},label:{type:String,default:""},name:{type:String,default:""}},emits:["change"],setup(e,{emit:a}){const o=l(h),u=g();return{computedName:n((()=>e.name&&!o?e.name:(null==o?void 0:o.name.value)||`radio-${u}`)),onChange:()=>{a("change"),null==o||o.onChange(e.value)},selected:n((()=>(null==o?void 0:o.modelValue.value)===e.value))}}});const y=["name","checked"];V.render=function(e,a,l,n,s,m){return o(),u("div",null,[t("label",null,[t("input",{type:"radio",name:e.computedName,checked:e.selected,onChange:a[0]||(a[0]=(...a)=>e.onChange&&e.onChange(...a))},null,40,y),d(" "+r(e.label),1)])])};var b=a({name:"RadioGroup",props:{name:{type:String,default:""},modelValue:{type:[Boolean,String],default:""}},emits:{"update:modelValue":e=>!0},setup(e,{emit:a}){const l=g(),o=n((()=>e.name||`radio-group-${l}`)),u=n((()=>e.modelValue));s(h,{name:o,modelValue:u,onChange(e){a("update:modelValue",e)}})}});b.render=function(e,a,l,n,t,d){return o(),u("div",null,[m(e.$slots,"default")])};var S=a({name:"BooleanSwitch",components:{Radio:V,RadioGroup:b},props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:null}},setup:(e,{emit:a})=>({value:i(e,"modelValue",a)})});S.render=function(e,a,l,n,u,t){const s=p("Radio"),m=p("RadioGroup");return o(),c(m,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a)},{default:v((()=>[d(r(e.label)+" ",1),f(s,{value:!0,label:"True"}),f(s,{value:!1,label:"False"})])),_:1},8,["modelValue"])};export{S as _};
//# sourceMappingURL=BooleanSwitch.abdebb4d.js.map
