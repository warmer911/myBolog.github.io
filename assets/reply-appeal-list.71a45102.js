var j=Object.defineProperty;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var E=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,V=(e,t)=>{for(var o in t||(t={}))K.call(t,o)&&E(e,o,t[o]);if($)for(var o of $(t))R.call(t,o)&&E(e,o,t[o]);return e};import{b as z}from"./_@vue_runtime-dom@3.2.31@@vue.240af360.js";import{U as f,h as N,c as D}from"./index.67bdbe62.js";import{u as B}from"./_vue-router@4.0.14@vue-router.c27d2a8d.js";import{m as q,u as U}from"./_vuex@4.0.2@vuex.35900dea.js";import{_ as F}from"./icon_serch_new.7f20fba6.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import{l as J,y as M,z as n,A as d,E as s,D as C,m as W,G as H,F as P,J as x,C as Y,g as Q,K as X,L as Z}from"./_@vue_runtime-core@3.2.31@@vue.b0aa5f29.js";import{r as c}from"./_@vue_reactivity@3.2.31@@vue.435b5d06.js";import{I as v,s as ee}from"./_@vue_shared@3.2.31@@vue.7f2d3904.js";import"./_vant@3.4.6@vant.e4fff504.js";import"./_@vant_use@1.3.6@@vant.1b0ef691.js";import"./_@vant_popperjs@1.1.0@@vant.ae31ad00.js";import"./_vue-mobile-calendar@3.3.0@vue-mobile-calendar.c9c3461a.js";import"./_axios@0.21.4@axios.56d8ec29.js";import"./_qs@6.10.3@qs.59603e06.js";import"./_side-channel@1.0.4@side-channel.0a841574.js";import"./_get-intrinsic@1.1.1@get-intrinsic.46bb42c1.js";import"./_has-symbols@1.0.3@has-symbols.7f361f9b.js";import"./_function-bind@1.1.1@function-bind.09a6b7a3.js";import"./_has@1.0.3@has.dc0c57e0.js";import"./_call-bind@1.0.2@call-bind.c10bfa07.js";import"./_object-inspect@1.12.0@object-inspect.b4aaeeae.js";import"./_lodash@4.17.21@lodash.2e4506b9.js";import"./_dayjs@1.11.0@dayjs.c3a0a36c.js";import"./_echarts@5.2.2@echarts.518f2fa5.js";import"./_tslib@2.3.0@tslib.54efd67f.js";import"./_zrender@5.2.1@zrender.d1d234d3.js";import"./_@vue_devtools-api@6.1.3@@vue.3188b863.js";const te=J({setup(e){const t=Q(),o=B(),g=U(),{locationParam:m,noControl:S,appealTabStatus:b,appealLight:y}=g.getters;S&&!f.isEmptyObject(m)?m.tabIndex:o.query.tabIndex;const a=S&&!f.isEmptyObject(m)?m.keyWord:o.query.keyWord||"",I=t.appContext.config.globalProperties.$api,p=c([]),l=c(!1),u=c(!1),T=c(0),A=c(0),k=c(a),_=N("get","chooseCompanyId");return{list:p,onLoad:()=>{if(l.value)return;l.value=!0;let w={current:++T.value,size:10,status:3,title:k.value,entId:_!=null&&_&&_.indexOf("null")===-1&&_||""};y&&(w.lightCode=y),I.getReplyPageAll(w,{"Content-Type":"application/x-www-form-urlencoded"},!1).then(i=>{if(l.value=!1,i.code==200&&i.data&&i.data.current&&i.data.pages&&i.data.records.length>0){let r=[];A.value=i.data.pages,r=i.data.records,r.map((L,h)=>{L.aplContentVOList.length>2||L.returnVisitTime?r[h].haszuijia=!1:r[h].haszuijia=!0,L.aplContentVOList.map((O,Se)=>{O.entEvaluate||(r[h].hasPinjia=!0,r[h].hasPinjiaId=O.id,r[h].haszuijia=!1)})}),p.value=p.value.concat(JSON.parse(JSON.stringify(r))),l.value=!1,u.value=!0,p.value.length==i.data.total&&(u.value=!0)}else u.value=!0}).catch(i=>{l.value=!1,u.value=!0})},getCurrentStatus:()=>{T.value<A.value&&!l.value&&(u.value=!1)},loading:l,finished:u,urlKeyword:k}},computed:V({},q(["noControl","locationParam","appealTabStatus","appealLight","replyModel"])),created(){this.$store.commit("SET_REPLY_MODEL",!0),this.$store.commit("SET_CONTROL_STATUS",!0)},data(){return{tabOptions:["\u5904\u7406\u4E2D","\u5904\u7406\u5B8C\u6210"]}},methods:{initTime(e){return e?e&&e.length>9?e.slice(0,10):e:""},replyAppeal(e){!e.id||this.$router.push({path:"/replyCommit",query:{appealId:e.id}})},turnAppealDetailInfo(e){if(console.log(e),!!e.id&&this.replyModel)return this.$router.push({path:"/replyDetail",query:{appealId:e.id}})},highLightKeyword(e){if(!e)return"";if(f.trimAllSpace(this.urlKeyword)=="")return e;let t=RegExp(f.trimAllSpace(this.urlKeyword),"g"),o=this,g=e.replace(t,function(){return"<text class='f-16 co-blue'>"+f.trimAllSpace(o.urlKeyword)+"</text>"});return t=o=null,g},gotoSearch(){this.$router.push({name:"search",query:{tabIndex:1,urlKeyword:this.urlKeyword}})},goBack(){D()}},beforeRouteLeave(e,t,o){this.$store.commit("SET_PAGE_TRANSFORM_PARAM",{}),o()}}),oe=e=>(X("data-v-642101ea"),e=e(),Z(),e),ae={class:"reply-appeal-cont relative"},se={class:"top"},ie=oe(()=>s("img",{src:F},null,-1)),re={class:"ellipsis"},le={class:"box"},ne=["onClick"],pe={class:"list_2 flex-ro justify-side space-margin"},ue={class:"ellipsis appeal_code_id"},de=["innerHTML"],ce={key:0,class:"list_1 more-ellipsis-two space-margin f-12"},me={class:"list_2 flex-ro justify-side"},he={class:"ellipsis appeal_code"},fe={class:"sub_time"},ve={key:1,class:"btns flex-ro justify-end active"},ge=["onClick"];function ye(e,t,o,g,m,S){const b=M("van-list"),y=M("none-data");return n(),d(P,null,[s("div",ae,[s("div",se,[!e.noControl||e.noControl&&e.replyModel?(n(),d("div",{key:0,class:"search flex-ro ellipsis box-sizing box-sizing",onClick:t[0]||(t[0]=(...a)=>e.gotoSearch&&e.gotoSearch(...a))},[ie,s("span",re,v(e.urlKeyword||"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"),1)])):C("",!0)]),s("div",{class:"absolute appeal-van-list",style:ee({top:e.noControl?e.noControl&&e.appealTabStatus&&e.appealTabStatus.length==1?"16px":e.replyModel?"64px":"65px":"95px",bottom:e.noControl?"0":"68px"}),onScroll:t[2]||(t[2]=(...a)=>e.getCurrentStatus&&e.getCurrentStatus(...a))},[s("div",le,[W(b,{class:"appealList",modelValue:e.loading,"onUpdate:modelValue":t[1]||(t[1]=a=>e.loading=a),finished:e.finished,onLoad:e.onLoad},{default:H(()=>[(n(!0),d(P,null,x(e.list,(a,I)=>(n(),d("div",{class:"list relative",onClick:p=>e.turnAppealDetailInfo(a)},[s("div",pe,[s("div",ue,v("ID: "+a.code),1)]),s("div",{class:"list_1 ellipsis",style:{"padding-bottom":"4px"},innerHTML:e.highLightKeyword(a.title)},null,8,de),a&&a.aplContentVOList&&a.aplContentVOList.length>0?(n(),d("div",ce,v(a.aplContentVOList[0].aplContent),1)):C("",!0),s("div",me,[s("div",he,v(a.entName),1),s("div",fe,"\u5904\u7406\u5B8C\u6210\u65F6\u95F4\uFF1A"+v(e.initTime(a.updateTime)),1)]),e.replyModel?(n(),d("div",ve,[s("div",{onClick:z(p=>e.replyAppeal(a),["stop"])},"\u53BB\u70B9\u8BC4",8,ge)])):C("",!0)],8,ne))),256))]),_:1},8,["modelValue","finished","onLoad"])])],36)]),e.finished&&e.list.length==0?(n(),Y(y,{key:0,value:"\u6682\u65E0\u6570\u636E"})):C("",!0)],64)}var Qe=G(te,[["render",ye],["__scopeId","data-v-642101ea"]]);export{Qe as default};
