var G=Object.defineProperty;var V=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,z=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&q(e,o,t[o]);if(V)for(var o of V(t))H.call(t,o)&&q(e,o,t[o]);return e};import{b as S}from"./_@vue_runtime-dom@3.2.31@@vue.240af360.js";import{U as y,h as Q,c as X}from"./index.67bdbe62.js";import{u as Y}from"./_vue-router@4.0.14@vue-router.c27d2a8d.js";import{m as Z,u as x}from"./_vuex@4.0.2@vuex.35900dea.js";import{_ as ee}from"./icon_serch_new.7f20fba6.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import{I as P,s as ae}from"./_@vue_shared@3.2.31@@vue.7f2d3904.js";import{l as oe,w as se,y as I,z as s,A as l,E as i,D as p,C as T,G as B,F as E,J as N,m as ie,g as le,K as ne,L as re}from"./_@vue_runtime-core@3.2.31@@vue.b0aa5f29.js";import{r as u}from"./_@vue_reactivity@3.2.31@@vue.435b5d06.js";import"./_vant@3.4.6@vant.e4fff504.js";import"./_@vant_use@1.3.6@@vant.1b0ef691.js";import"./_@vant_popperjs@1.1.0@@vant.ae31ad00.js";import"./_vue-mobile-calendar@3.3.0@vue-mobile-calendar.c9c3461a.js";import"./_axios@0.21.4@axios.56d8ec29.js";import"./_qs@6.10.3@qs.59603e06.js";import"./_side-channel@1.0.4@side-channel.0a841574.js";import"./_get-intrinsic@1.1.1@get-intrinsic.46bb42c1.js";import"./_has-symbols@1.0.3@has-symbols.7f361f9b.js";import"./_function-bind@1.1.1@function-bind.09a6b7a3.js";import"./_has@1.0.3@has.dc0c57e0.js";import"./_call-bind@1.0.2@call-bind.c10bfa07.js";import"./_object-inspect@1.12.0@object-inspect.b4aaeeae.js";import"./_lodash@4.17.21@lodash.2e4506b9.js";import"./_dayjs@1.11.0@dayjs.c3a0a36c.js";import"./_echarts@5.2.2@echarts.518f2fa5.js";import"./_tslib@2.3.0@tslib.54efd67f.js";import"./_zrender@5.2.1@zrender.d1d234d3.js";import"./_@vue_devtools-api@6.1.3@@vue.3188b863.js";const pe=oe({setup(e){const t=le(),o=Y(),b=x(),{locationParam:v,noControl:m,appealTabStatus:f,appealLight:_}=b.getters,L=m&&!y.isEmptyObject(v)?v.tabIndex:o.query.tabIndex||0,w=m&&!y.isEmptyObject(v)?v.keyWord:o.query.keyWord||"",a=t.appContext.config.globalProperties.$api,C=m&&f&&f.length===1?u(f[0]):u(Number(L)),n=u([]),c=u(!1),h=u(!1),$=u(0),D=u(0),K=u(w),R=u(!1),k=Q("get","chooseCompanyId"),U=()=>{$.value<D.value&&!c.value&&(h.value=!1)},M=()=>{if(c.value)return;c.value=!0;let j={current:++$.value,size:10,status:C.value+2,title:K.value,entId:k!=null&&k&&k.indexOf("null")===-1&&k||""};_&&(j.lightCode=_),a[m?"getEnterpriseDemandsList":"getEnterpriseDemandsListBase"](j,{"Content-Type":"application/x-www-form-urlencoded"},!1).then(r=>{if(c.value=!1,r.code==200&&r.data&&r.data.current&&r.data.pages&&r.data.records.length>0){let d=[];D.value=r.data.pages,d=r.data.records,d.map((A,g)=>{A.aplContentVOList.length>2||A.returnVisitTime?d[g].haszuijia=!1:d[g].haszuijia=!0,A.aplContentVOList.map((O,je)=>{O.entEvaluate||(d[g].hasPinjia=!0,d[g].hasPinjiaId=O.id,d[g].haszuijia=!1)})}),n.value=n.value.concat(JSON.parse(JSON.stringify(d))),c.value=!1,h.value=!0,n.value.length==r.data.total&&(h.value=!0)}else h.value=!0}).catch(r=>{c.value=!1,h.value=!0})},F=()=>{h.value=!1,n.value=[],$.value=0,D.value=0,M()};return se(C,(j,W)=>{F()}),{replyModel:R,active:C,list:n,onLoad:M,getCurrentStatus:U,loading:c,finished:h,urlKeyword:K}},computed:z({},Z(["noControl","locationParam","appealTabStatus","appealLight"])),created(){},data(){return{tabOptions:["\u5904\u7406\u4E2D","\u5904\u7406\u5B8C\u6210"]}},watch:{},methods:{replyAppeal(){this.$router.push({path:"/replyDetail"})},turnAppealDetailInfo(e){if(console.log(e),this.noControl){this.$router.push({path:"/apealDetail",query:{id:e.id,statue:5,tabIndex:this.active}});return}if(this.active===0)this.$router.push({name:"apealDetail",query:{id:e.id,statue:4,tabIndex:this.active}});else{let t=e.hasPinjia?1:2;e.haszuijia&&(t=4),this.gotoDetail(t,e)}},gotoDetail(e,t){e===1&&this.$router.push({name:"apealDetail",query:{id:t.id,statue:2,pingjiaId:t.hasPinjiaId,tabIndex:this.active}}),e===2&&this.$router.push({name:"apealDetail",query:{id:t.id,statue:4,tabIndex:this.active}}),e===3&&this.$router.push({name:"appealExtend",query:{id:t.id,tabIndex:this.active}}),e===4&&this.$router.push({name:"apealDetail",query:{id:t.id,statue:3,tabIndex:this.active}})},showList(){console.log(this.list)},clickAdd(){this.$router.push({name:"appealNew"})},highLightKeyword(e){if(!e)return"";if(y.trimAllSpace(this.urlKeyword)=="")return e;let t=RegExp(y.trimAllSpace(this.urlKeyword),"g"),o=this,b=e.replace(t,function(){return"<text class='f-16 co-blue'>"+y.trimAllSpace(o.urlKeyword)+"</text>"});return t=o=null,b},gotoSearch(){this.$router.push({name:"search",query:{tabIndex:this.active,urlKeyword:this.urlKeyword}})},goBack(){X()}},mounted(){},beforeCreate(){},beforeMount(){},beforeUpdate(){},updated(){},beforeRouteLeave(e,t,o){this.$store.commit("SET_PAGE_TRANSFORM_PARAM",{}),o()},beforeDestroy(){},activated(){}}),ue=e=>(ne("data-v-ad1249e0"),e=e(),re(),e),de={class:"appeal-cont relative"},ce={class:"top"},he=ue(()=>i("img",{src:ee},null,-1)),ve={class:"ellipsis"},me={class:"box"},fe=["onClick"],ge=["innerHTML"],ye={class:"list_2 flex-ro justify-side"},be={class:"ellipsis appeal_code"},_e={class:"sub_time"},Ce={key:0,class:"btns flex-ro justify-end"},ke=["onClick"],Se=["onClick"],Ie=["onClick"],Le={key:1,class:"btns flex-ro justify-end"},we=["onClick"],$e={key:0,class:"btmButton"};function De(e,t,o,b,v,m){const f=I("van-tab"),_=I("van-tabs"),L=I("van-list"),w=I("none-data");return s(),l(E,null,[i("div",de,[i("div",ce,[e.noControl?p("",!0):(s(),l("div",{key:0,class:"search flex-ro flex-center ellipsis box-sizing",onClick:t[0]||(t[0]=(...a)=>e.gotoSearch&&e.gotoSearch(...a))},[he,i("span",ve,P(e.urlKeyword||"\u641C\u7D22"),1)])),e.appealTabStatus&&e.appealTabStatus.length!=1&&!e.replyModel?(s(),T(_,{key:1,class:"tabs",active:e.active,"onUpdate:active":t[1]||(t[1]=a=>e.active=a),"line-width":"20","line-height":"2","title-active-color":"rgb(35, 110, 237)"},{default:B(()=>[(s(!0),l(E,null,N(e.tabOptions,a=>(s(),T(f,{key:a,title:a},null,8,["title"]))),128))]),_:1},8,["active"])):p("",!0)]),i("div",{class:"absolute appeal-van-list",style:ae({top:e.noControl?e.noControl&&e.appealTabStatus&&e.appealTabStatus.length==1?"16px":e.replyModel?"40px":"65px":"95px",bottom:e.noControl?"0":"68px"}),onScroll:t[3]||(t[3]=(...a)=>e.getCurrentStatus&&e.getCurrentStatus(...a))},[i("div",me,[ie(L,{class:"appealList",modelValue:e.loading,"onUpdate:modelValue":t[2]||(t[2]=a=>e.loading=a),finished:e.finished,onLoad:e.onLoad},{default:B(()=>[(s(!0),l(E,null,N(e.list,(a,C)=>(s(),l("div",{class:"list",onClick:n=>e.turnAppealDetailInfo(a)},[i("div",{class:"list_1 ellipsis",innerHTML:e.highLightKeyword(a.title)},null,8,ge),i("div",ye,[i("div",be,P(a.code),1),i("div",_e,"\u63D0\u4EA4\u65F6\u95F4\uFF1A"+P(a.createTime),1)]),e.active==1&&!e.noControl?(s(),l("div",Ce,[a.hasPinjia?(s(),l("div",{key:0,class:"sp",onClick:S(n=>e.gotoDetail(1,a),["stop"])},"\u8BC4\u4EF7",8,ke)):p("",!0),a.hasPinjia?p("",!0):(s(),l("div",{key:1,onClick:S(n=>e.gotoDetail(2,a),["stop"])},"\u67E5\u770B\u8BC4\u4EF7",8,Se)),a.haszuijia&&!a.isForward2Warden?(s(),l("div",{key:2,class:"sp",onClick:S(n=>e.gotoDetail(3,a),["stop"])}," \u8FFD\u52A0\u8BC9\u6C42 ",8,Ie)):p("",!0)])):p("",!0),e.noControl&&!e.replyModel?(s(),l("div",Le,[i("div",{onClick:S(n=>e.turnAppealDetailInfo(a),["stop"])},"\u67E5\u770B",8,we)])):p("",!0)],8,fe))),256))]),_:1},8,["modelValue","finished","onLoad"])])],36),e.noControl?p("",!0):(s(),l("div",$e,[i("button",{type:"button",class:"normal-btn",onClick:t[4]||(t[4]=(...a)=>e.clickAdd&&e.clickAdd(...a))},"\u65B0\u589E")]))]),e.finished&&e.list.length==0?(s(),T(w,{key:0})):p("",!0)],64)}var it=te(pe,[["render",De],["__scopeId","data-v-ad1249e0"]]);export{it as default};
