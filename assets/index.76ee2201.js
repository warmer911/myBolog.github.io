import{a as c}from"./_@vue_runtime-dom@3.2.31@@vue.240af360.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p}from"./_@vue_reactivity@3.2.31@@vue.435b5d06.js";import{y as x,u as v,z as m,A as g,E as t,r as l,C as y,G as b,F as C,K as D,L as N,s as u}from"./_@vue_runtime-core@3.2.31@@vue.b0aa5f29.js";import{s as w}from"./_@vue_shared@3.2.31@@vue.7f2d3904.js";const L={setup(o){const s=p(!1),i=p([]),a=p([]),e=p("");return{isPopShow:s,showPopup:()=>{s.value=!0},columns:a,columnsData:i,chooseAreaName:e}},data(){return{basicArea:"\u5C71\u4E1C\u7701/\u70DF\u53F0\u5E02/\u829D\u7F58\u533A",isfull:!1,navStyle:{navTitle:"\u4F01\u4E1A\u7533\u7801",color:"#fff",backgroundColor:"#236EED",leftIcon:"arrowthinleft",rightText:"\u4FDD\u5B58"},formData:{name:"",creditCode:"",userName:""},postName:"",busniessCard:{id:""},licenceCard_1:{id:""},licenceCard_2:{id:""},upWidth:"80%",parentCode:"370602",status:1,btnLoading:!1}},mounted(){},watch:{formData:{handler(o,s){if(o.creditCode){let i=o.creditCode.split("");i.map((a,e)=>{!/^\d+$/.test(i[e])&&!/^[A-Za-z]+$/.test(i[e])&&(i[e]="")}),this.formData.creditCode=i.join("")}for(const i in o)if(!o[i].trim()){this.isfull=!1;return}this.isfull=!0},deep:!0}},methods:{ruler(){const{name:o,creditCode:s,userName:i}=this.formData;let a={name:o.trim(),creditCode:s.trim(),userName:i.trim()},e=[{name:"name",type:"required",errmsg:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0"},{name:"creditCode",type:"required",errmsg:"\u8BF7\u8F93\u5165\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801"},{name:"userName",type:"required",errmsg:"\u8BF7\u8F93\u5165\u59D3\u540D"}],n=this.$validate.validate(a,e);return n.isOk?!0:(this.$toast(n.errmsg),!1)},changeStatue(){if(this.isfull&&this.ruler()){const o=this.$handleLocalStorage("get","mobile")||"",s=this.postName&&this.postName.trim(),i=Object.assign({},this.formData,{mobile:o,postName:s});this.btnLoading=!0,this.$api.fastLink(i).then(a=>{this.btnLoading=!1,a.code==200&&this.$router.push({name:"applyCodeSuccess",query:{contextInfo:"\u5173\u8054\u6210\u529F"}})}).catch(a=>{this.btnLoading=!1})}}}},d=o=>(D("data-v-81bc4184"),o=o(),N(),o),S=d(()=>t("div",{class:"tips"}," \u63D0\u793A\uFF1A\u8BF7\u5173\u8054\u5DF2\u8BA4\u8BC1\u901A\u8FC7\u7684\u4F01\u4E1A\uFF0C\u5FEB\u901F\u5173\u8054\u540E\u60A8\u5C06\u6210\u4E3A\u8BE5\u4F01\u4E1A\u7684\u6210\u5458\u3002 ",-1)),k={class:"cont-new"},j={class:"inputList"},E={class:"inputCont flex-ro justify-side border"},I=d(()=>t("div",{class:"input-title flex-ro",style:{width:"112px"}},[t("text",{class:"sp"},"*"),u(" \u4F01\u4E1A\u540D\u79F0 ")],-1)),V={class:"input-text"},A={class:"inputCont flex-ro justify-side"},q=d(()=>t("div",{class:"input-title flex-ro"},[t("text",{class:"sp"},"*"),u(" \u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801 ")],-1)),z={class:"input-text"},B={class:"inputList"},T={class:"inputCont flex-ro justify-side"},U=d(()=>t("div",{class:"input-title flex-ro",style:{width:"112px"}},[t("text",{class:"sp"},"*"),u(" \u59D3\u540D ")],-1)),O={class:"input-text"},P={class:"inputCont flex-ro justify-side"},F=d(()=>t("div",{class:"input-title flex-ro",style:{width:"112px"}}," \u5C97\u4F4D ",-1)),R={class:"input-text"},G={class:"btn",style:{"margin-top":"20px"}},K=u(" \u63D0\u4EA4 ");function M(o,s,i,a,e,n){const f=x("van-button"),h=v("debounce");return m(),g(C,null,[S,t("div",k,[t("div",j,[t("div",E,[I,t("div",V,[l(t("input",{type:"text",maxlength:"100","onUpdate:modelValue":s[0]||(s[0]=r=>e.formData.name=r),placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0"},null,512),[[c,e.formData.name]])])]),t("div",A,[q,t("div",z,[l(t("input",{type:"text",maxlength:"30","onUpdate:modelValue":s[1]||(s[1]=r=>e.formData.creditCode=r),placeholder:"\u8BF7\u8F93\u5165\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801"},null,512),[[c,e.formData.creditCode]])])])]),t("div",B,[t("div",T,[U,t("div",O,[l(t("input",{type:"text",maxlength:"14","onUpdate:modelValue":s[2]||(s[2]=r=>e.formData.userName=r),placeholder:"\u8BF7\u8F93\u5165"},null,512),[[c,e.formData.userName]])])]),t("div",P,[F,t("div",R,[l(t("input",{type:"text",maxlength:"14","onUpdate:modelValue":s[3]||(s[3]=r=>e.postName=r),placeholder:"\u8BF7\u8F93\u5165"},null,512),[[c,e.postName]])])])]),t("div",G,[l((m(),y(f,{type:"primary",style:w([{color:"#ffffff","font-size":"18px",border:"none","border-radius":"5px"},{backgroundColor:e.isfull?"#236EED":"rgba(35, 110, 237, .3)"}]),loading:e.btnLoading,class:"normal-btn"},{default:b(()=>[K]),_:1},8,["style","loading"])),[[h,[n.changeStatue]]])])])],64)}var X=_(L,[["render",M],["__scopeId","data-v-81bc4184"]]);export{X as default};
