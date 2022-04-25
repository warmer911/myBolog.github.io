var U=Object.defineProperty,B=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var I=(e,t,l)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,x=(e,t)=>{for(var l in t||(t={}))R.call(t,l)&&I(e,l,t[l]);if(V)for(var l of V(t))q.call(t,l)&&I(e,l,t[l]);return e},k=(e,t)=>B(e,L(t));import{U as P,h as E}from"./index.67bdbe62.js";import{b as C,a as H}from"./_@vue_runtime-dom@3.2.31@@vue.240af360.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import{y,z as s,A as n,C as _,D as r,m as h,G as g,r as N,s as v,u as z,E as m,F as S,J as D,K as O,L as W}from"./_@vue_runtime-core@3.2.31@@vue.b0aa5f29.js";import{I as p,s as M}from"./_@vue_shared@3.2.31@@vue.7f2d3904.js";import"./_vant@3.4.6@vant.e4fff504.js";import"./_@vant_use@1.3.6@@vant.1b0ef691.js";import"./_@vue_reactivity@3.2.31@@vue.435b5d06.js";import"./_@vant_popperjs@1.1.0@@vant.ae31ad00.js";import"./_vue-mobile-calendar@3.3.0@vue-mobile-calendar.c9c3461a.js";import"./_axios@0.21.4@axios.56d8ec29.js";import"./_vuex@4.0.2@vuex.35900dea.js";import"./_@vue_devtools-api@6.1.3@@vue.3188b863.js";import"./_vue-router@4.0.14@vue-router.c27d2a8d.js";import"./_qs@6.10.3@qs.59603e06.js";import"./_side-channel@1.0.4@side-channel.0a841574.js";import"./_get-intrinsic@1.1.1@get-intrinsic.46bb42c1.js";import"./_has-symbols@1.0.3@has-symbols.7f361f9b.js";import"./_function-bind@1.1.1@function-bind.09a6b7a3.js";import"./_has@1.0.3@has.dc0c57e0.js";import"./_call-bind@1.0.2@call-bind.c10bfa07.js";import"./_object-inspect@1.12.0@object-inspect.b4aaeeae.js";import"./_lodash@4.17.21@lodash.2e4506b9.js";import"./_dayjs@1.11.0@dayjs.c3a0a36c.js";import"./_echarts@5.2.2@echarts.518f2fa5.js";import"./_tslib@2.3.0@tslib.54efd67f.js";import"./_zrender@5.2.1@zrender.d1d234d3.js";const J={name:"RichInput",data(){return{errMessage:"",autocomplete:"off",labelWidth:"0",showPicker:!1,showDate:!1,minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),dateTime:null,selfValue:"",nowVal:new Date}},props:{sortChild:{type:[String,Number],default:""},sortParent:{type:[String,Number],default:""},choiceRes:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},valueBase:{type:[String,Number,Boolean],required:!0},type:{type:String,default:"string"},placeholder:{type:String,default:""}},watch:{valueBase:{handler(e){this.selfValue!==e&&(this.selfValue=e)},deep:!0,immediate:!0},selfValue:{handler(e){this.$emit("getCurrentVal",{val:e,sortChild:this.sortChild,sortParent:this.sortParent})},deep:!0},type:{handler(e){e==5&&this.nowTime()},deep:!0}},methods:{invalidNumber(e){if(console.log(e),console.log(this.selfValue),!/^[0-9]+\.?[0-9]*$/.test(this.selfValue))return this.selfValue="",this.errMessage="\u8BF7\u8F93\u5165\u6570\u5B57\u683C\u5F0F";this.errMessage=""},showDateTimePicker(e){this.disabled||(this[e]=!0)},nowTime(){this.valueBase?this.nowVal=new Date(this.selfValue):this.nowVal=new Date},formatter(e,t){return e==="year"?`${t}\u5E74`:e==="month"?`${t}\u6708`:e==="day"?`${t}\u65E5`:t},onConfirm(e,t){t==="date"&&(this.selfValue=P.formatTime(e,!0,"yyyy-M-d")),t==="date"&&(this.showDate=!1),t==="time"&&(this.selfValue=e),t==="time"&&(this.showPicker=!1),console.log(this.selfValue)},radioChange(e){this.selfValue=e}}},A={key:1},G={key:2},K={key:3},j=v("\u662F"),F=v("\u5426"),Q={key:1},X=["readonly","disabled","placeholder"];function Y(e,t,l,f,o,a){const d=y("van-field"),w=y("van-datetime-picker"),c=y("van-popup"),b=y("van-radio"),u=y("van-radio-group");return s(),n("div",null,[l.type==="number"?(s(),_(d,{key:0,modelValue:o.selfValue,"onUpdate:modelValue":t[0]||(t[0]=i=>o.selfValue=i),type:"number","label-width":o.labelWidth,autocomplete:o.autocomplete,maxlength:"150",class:"data-input error-info-textarea",readonly:l.disabled,disabled:l.disabled,rows:"1",autosize:"","error-message":o.errMessage,required:"",placeholder:l.placeholder,onInput:a.invalidNumber},null,8,["modelValue","label-width","autocomplete","readonly","disabled","error-message","placeholder","onInput"])):r("",!0),l.type==="dateTime"?(s(),n("div",A,[h(d,{readonly:"",class:"data-input",clickable:!l.disabled,name:"datetimePicker",modelValue:o.selfValue,"onUpdate:modelValue":t[1]||(t[1]=i=>o.selfValue=i),autocomplete:o.autocomplete,"label-width":o.labelWidth,onClick:t[2]||(t[2]=C(i=>a.showDateTimePicker("showPicker"),["prevent"]))},null,8,["clickable","modelValue","autocomplete","label-width"]),h(c,{show:o.showPicker,"onUpdate:show":t[6]||(t[6]=i=>o.showPicker=i),position:"bottom"},{default:g(()=>[h(w,{type:"time",modelValue:l.valueBase,"onUpdate:modelValue":t[3]||(t[3]=i=>l.valueBase=i),disabled:l.disabled,onCancel:t[4]||(t[4]=i=>o.showPicker=!1),onConfirm:t[5]||(t[5]=i=>a.onConfirm(i,"time"))},null,8,["modelValue","disabled"])]),_:1},8,["show"])])):r("",!0),l.type==="date"?(s(),n("div",G,[h(d,{readonly:"",class:"data-input",clickable:!l.disabled,name:"date",modelValue:o.selfValue,"onUpdate:modelValue":t[7]||(t[7]=i=>o.selfValue=i),"label-width":"0",onClick:t[8]||(t[8]=C(i=>a.showDateTimePicker("showDate"),["prevent"]))},null,8,["clickable","modelValue"]),h(c,{show:o.showDate,"onUpdate:show":t[12]||(t[12]=i=>o.showDate=i),position:"bottom"},{default:g(()=>[h(w,{type:"date",modelValue:o.nowVal,"onUpdate:modelValue":t[9]||(t[9]=i=>o.nowVal=i),formatter:a.formatter,disabled:l.disabled,onCancel:t[10]||(t[10]=i=>o.showDate=!1),onConfirm:t[11]||(t[11]=i=>a.onConfirm(i,"date"))},null,8,["modelValue","formatter","disabled"])]),_:1},8,["show"])])):r("",!0),l.type==="boolean"?(s(),n("div",K,[l.disabled?r("",!0):(s(),_(u,{key:0,modelValue:o.selfValue,"onUpdate:modelValue":t[13]||(t[13]=i=>o.selfValue=i),onChange:a.radioChange,direction:"horizontal",disabled:l.disabled},{default:g(()=>[h(b,{name:"\u662F","icon-size":"14px"},{default:g(()=>[j]),_:1}),h(b,{name:"\u5426","icon-size":"14px"},{default:g(()=>[F]),_:1})]),_:1},8,["modelValue","onChange","disabled"])),l.disabled&&l.choiceRes!=""?(s(),n("div",Q,p(l.choiceRes),1)):r("",!0)])):r("",!0),l.type==="idcard"?N((s(),n("input",{key:4,class:"uni-input",maxlength:"18",readonly:l.disabled,disabled:l.disabled,type:"idcard","onUpdate:modelValue":t[14]||(t[14]=i=>o.selfValue=i),placeholder:l.placeholder},null,8,X)),[[H,o.selfValue]]):r("",!0),l.type==="password"?(s(),_(d,{key:5,modelValue:o.selfValue,"onUpdate:modelValue":t[15]||(t[15]=i=>o.selfValue=i),"label-width":o.labelWidth,type:"password",placeholder:l.placeholder,autocomplete:o.autocomplete,disabled:l.disabled,class:"data-input",maxlength:"150",readonly:l.disabled},null,8,["modelValue","label-width","placeholder","autocomplete","disabled","readonly"])):r("",!0),l.type==="digit"?(s(),_(d,{key:6,modelValue:o.selfValue,"onUpdate:modelValue":t[16]||(t[16]=i=>o.selfValue=i),"label-width":o.labelWidth,type:"number",class:"uni-input data-input",maxlength:"150",disabled:l.disabled,autocomplete:o.autocomplete,readonly:l.disabled,placeholder:l.placeholder},null,8,["modelValue","label-width","disabled","autocomplete","readonly","placeholder"])):r("",!0),l.type==="string"?(s(),_(d,{key:7,modelValue:o.selfValue,"onUpdate:modelValue":t[17]||(t[17]=i=>o.selfValue=i),"label-width":o.labelWidth,maxlength:"150",readonly:l.disabled,disabled:l.disabled,rows:"1",autosize:"",type:"textarea",autocomplete:o.autocomplete,class:"data-input",placeholder:l.placeholder},null,8,["modelValue","label-width","readonly","disabled","autocomplete","placeholder"])):r("",!0)])}var Z=T(J,[["render",Y],["__scopeId","data-v-fd7236f0"]]);const $=new URL("./assets/apeal_clear_res.e99a0075.png",self.location).href,ee={components:{RichInput:Z},data(){return{noClick:!0,type:[0,1,2],typeBox:["string","number","string","dateTime","date","boolean"],formInfo:{},tabIndex:0,detailId:null,defaultHeight:54,showDeep:!0,loadingOriginalInfo:!1,clearRes:$,name:"",age:"",date:"",boolean:"",dateTime:"",isWebview:0,replyStatus:0,error:!1,entId:E("get","chooseCompanyId")||"",questionnaireId:null,isOriginalInfo:0,isHome:0}},created(){const{query:e}=this.$route;this.getParams(e),this.getInfo()},methods:{getCurrentVal(e){e&&(this.formInfo.formList[e.sortParent].children[e.sortChild].point.content=e.val)},filterTime(e){return e&&e.length>5?(e=e.slice(0,10),e):""},getParams(e){this.isWebview=e.webview?Number(e.webview):0,this.isHome=e.isHome?Number(e.isHome):0,this.detailId=e.id,this.tabIndex=e.tabIndex&&e.tabIndex==0?0:1,this.replyStatus=e.replyStatus,this.$store.dispatch("SET_CURRENT_FUNC",this.replyStatus==0&&this.tabIndex==0?this.clickRight:null),this.isOriginalInfo=e.isOriginalInfo?Number(e.isOriginalInfo):0},recombinationConstructor(e){if(!e)return[];let t=[],l=0;return e.forEach(f=>{f.pointId!=-1&&t[l-1]&&t[l-1].children.push(f),f.pointId==-1&&(f.children=[],t.push(f),l++)}),l=null,t},getInfo(){this.$api.getEnterpriseDetail({id:this.detailId}).then(e=>{if(e.code==200){this.error=!1;let t=e.data?k(x({},e.data),{formList:this.recombinationConstructor(e.data.questionnairePoints)}):{};this.questionnaireId=e.data.id?e.data.id:null,this.formInfo=JSON.parse(JSON.stringify(t)),console.log(this.formInfo)}else this.error=!0;this.$nextTick(()=>{this.$refs.fillHead&&(this.defaultHeight=this.$refs.fillHead.offsetHeight+48)})})},clickRight(){this.replyStatus==1||this.tabIndex==1||this.error||P.debounce(this.formSubmit(!0))},leftEvent(){uni.navigateBack()},formSubmit(e=!1){if(console.log(this.formInfo),!!this.questionnaireId&&!this.error&&this.replyStatus==0&&this.tabIndex==0&&this.formInfo.formList&&this.formInfo.formList.length>0){let t=!1,l=[];if(this.formInfo.formList.forEach(a=>{a.children&&a.children.length>0&&a.children.forEach(d=>{d.point&&d.point.content==""&&(t=!0),l.push({content:d.point.content,pointId:d.point.id})})}),t&&!e)return this.$toast("\u8BF7\u5B8C\u5584\u6240\u6709\u8868\u5355\u9879");let f={entId:this.entId,questionnaireId:this.questionnaireId,surveyAnswerList:l},o=e?"saveEnterpriseInformation":"submitEnterpriseInformation";this.$api[o](f).then(a=>{if(a.code==200){if(e)return this.$toast("\u4FDD\u5B58\u6210\u529F",{duration:2e3});let d=setTimeout(()=>{this.$router.go(-1),clearTimeout(d)},600)}f=l=o=null})}}}},te=e=>(O("data-v-55fbbfe6"),e=e(),W(),e),oe={class:"fill-information-form-container"},le={class:"information-body"},ie={key:0,class:"information-introduce",ref:"fillHead"},se={class:"title mian-text more-ellipsis-two"},ne={class:"sub-text ellipsis"},re={class:"sub-text word-break-custom"},ae={key:1,class:"no-content ad-model flex flex-center"},de=["src"],ue=te(()=>m("div",{class:"ad-text flex flex-center"},[m("text",{class:"f-14 txt-center"},[v(" \u6B64\u9879\u95EE\u5377\u5185\u5BB9\u5DF2\u7ED3\u675F "),m("br"),v(" \u60A8\u672A\u63D0\u4EA4\u95EE\u5377\u5185\u5BB9 ")])],-1)),fe={class:"information-form-container"},me={class:"form-title word-break-custom"},he={key:0,class:"form-body"},ce={key:0,class:"label word-break-custom"},pe={key:1,class:"pompt-info-input"},be={key:3,class:"uni-btn-submit absolute"},ye=v(" \u63D0\u4EA4 "),_e=[ye];function ge(e,t,l,f,o,a){const d=y("rich-input"),w=z("debounce");return s(),n("div",oe,[m("div",le,[!o.error&&JSON.stringify(o.formInfo)!="{}"?(s(),n("div",ie,[m("div",se,p(o.formInfo.name),1),m("div",ne,"\u53D1\u5E03\u5355\u4F4D\uFF1A"+p(o.formInfo.viewDept||"\u65E0"),1),m("div",re,"\u95EE\u5377\u8BF4\u660E\uFF1A"+p(o.formInfo.summary||"\u65E0"),1)],512)):r("",!0),o.replyStatus==0&&o.tabIndex==1?(s(),n("div",ae,[m("img",{src:o.clearRes,mode:"",class:"ad-img"},null,8,de),ue])):r("",!0),o.formInfo.questionnairePoints&&o.formInfo.questionnairePoints.length>0&&!o.error&&!(o.replyStatus==0&&o.tabIndex==1)?(s(),n("div",{key:2,class:"domanic-form-content box-sizing absolute",style:M({top:o.defaultHeight+"px",bottom:!o.error&&o.replyStatus==0&&o.tabIndex==0&&o.formInfo.formList&&o.formInfo.formList.length>0?"62px":"8px"})},[(s(!0),n(S,null,D(o.formInfo.formList,(c,b)=>(s(),n("div",{class:"information-form",key:b},[m("div",fe,[m("span",me,p(c.content),1),c.children&&c.children.length>0?(s(),n("form",he,[(s(!0),n(S,null,D(c.children,(u,i)=>(s(),n("div",{class:"form-item",key:b},[u.point?(s(),n("div",ce,p(u.point.viewName),1)):r("",!0),u.point.demand?(s(),n("div",pe,"( "+p(u.point.demand)+" ) ",1)):r("",!0),u.point?(s(),_(d,{key:2,valueBase:u.point.content,choiceRes:u.point.dataType==5?u.point.content:"",type:o.typeBox[u.point.dataType],placeholder:"",sortChild:i,sortParent:b,onGetCurrentVal:a.getCurrentVal,disabled:!(o.replyStatus==0&&o.tabIndex==0),class:"indot-font"},null,8,["valueBase","choiceRes","type","sortChild","sortParent","onGetCurrentVal","disabled"])):r("",!0)]))),128))])):r("",!0)])]))),128))],4)):r("",!0),!o.error&&o.replyStatus==0&&o.tabIndex==0&&o.formInfo.formList&&o.formInfo.formList.length>0?N((s(),n("div",be,_e)),[[w,[a.formSubmit]]]):r("",!0)])])}var Fe=T(ee,[["render",ge],["__scopeId","data-v-55fbbfe6"]]);export{Fe as default};
