import{d as o,J as e,j as a,o as l,c as t,w as n,q as s,x as u}from"./vendor.19817775.js";import{J as r,_ as d}from"./index.ef31a281.js";var i=o({name:"StyledDialog",components:{GDialog:r,DialogToolbar:d},props:{modelValue:{type:Boolean,default:!1}},emits:{"update:modelValue":o=>!0},setup(o,{emit:a}){const l=e(o,"modelValue",a);return{value:l,onClose:()=>{l.value=!1}}}});const m=u("h4",null," Styled Dialog ",-1),p=u("div",{p:"x-5 y-4"},[u("p",null," Some content ")],-1);i.render=function(o,e,u,r,d,i){const c=a("DialogToolbar"),f=a("GDialog");return l(),t(f,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=e=>o.value=e),transition:"custom-rotate-transition","overlay-background":"rgba(143, 108, 249, 0.4)","max-width":400},{default:n((()=>[s(c,{onClose:o.onClose},{default:n((()=>[m])),_:1},8,["onClose"]),p])),_:1},8,["modelValue"])};export{i as default};
//# sourceMappingURL=StyledDialog.962f864c.js.map