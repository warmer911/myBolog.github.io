var D=Object.defineProperty,_=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var j=(e,a,t)=>a in e?D(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))O.call(a,t)&&j(e,t,a[t]);if(S)for(var t of S(a))F.call(a,t)&&j(e,t,a[t]);return e},p=(e,a)=>_(e,T(a));import{h as f,g as B,U as b,c as Q}from"./index.67bdbe62.js";import{b as k}from"./_@vue_runtime-dom@3.2.31@@vue.240af360.js";import{m as W}from"./_vuex@4.0.2@vuex.35900dea.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import{y as I,z as n,A as l,E as d,C as M,G as L,F as g,J as x,D as o,s as U,m as z,K as E,L as J}from"./_@vue_runtime-core@3.2.31@@vue.b0aa5f29.js";import{q as h,s as C,I as u}from"./_@vue_shared@3.2.31@@vue.7f2d3904.js";import"./_vant@3.4.6@vant.e4fff504.js";import"./_@vant_use@1.3.6@@vant.1b0ef691.js";import"./_@vue_reactivity@3.2.31@@vue.435b5d06.js";import"./_@vant_popperjs@1.1.0@@vant.ae31ad00.js";import"./_vue-mobile-calendar@3.3.0@vue-mobile-calendar.c9c3461a.js";import"./_axios@0.21.4@axios.56d8ec29.js";import"./_vue-router@4.0.14@vue-router.c27d2a8d.js";import"./_qs@6.10.3@qs.59603e06.js";import"./_side-channel@1.0.4@side-channel.0a841574.js";import"./_get-intrinsic@1.1.1@get-intrinsic.46bb42c1.js";import"./_has-symbols@1.0.3@has-symbols.7f361f9b.js";import"./_function-bind@1.1.1@function-bind.09a6b7a3.js";import"./_has@1.0.3@has.dc0c57e0.js";import"./_call-bind@1.0.2@call-bind.c10bfa07.js";import"./_object-inspect@1.12.0@object-inspect.b4aaeeae.js";import"./_lodash@4.17.21@lodash.2e4506b9.js";import"./_dayjs@1.11.0@dayjs.c3a0a36c.js";import"./_echarts@5.2.2@echarts.518f2fa5.js";import"./_tslib@2.3.0@tslib.54efd67f.js";import"./_zrender@5.2.1@zrender.d1d234d3.js";import"./_@vue_devtools-api@6.1.3@@vue.3188b863.js";const P=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABApJREFUeF7t3PtR8zAMAHA56YtXOJZgBgZgArZhAqaBCRiAGVgCSIG+m+/Uo1w/rtAklhzZkv/scY6qXxQniosDACjL6eUaVncA1TWAK/AzG6EyUJUA7jGD/LYoRs/uC+MJAC5ChWDH2ZuBlwzyK/daftwDwI0lSUQGHtxr+f5mlykRGABQlVghlZRwLA4AAxF2FhiIgQjLgLBwrEIMRFgGhIVjFWIgwjIgLByrEAMRlgFh4ViFGIiwDAgLh7VCnAPo93rQ6+WQZw4cfoAttKqC1bqC5XIFi+USKuumfZ8WLCCY+NGwD/1e/o3w24mIOIvlCqazxQZK+yAHQYSj0eAgxM/EI8ZkOt/gaB6kIIN+DqNhc4wtAKJMZ3OYL/SikIG0rQyrlP8zQAKCa8bZyajxZeqvdWX8MVW5ppCA4Jox6PdIL/3zxXKzpmgb3iB4J3t2ckRWHbvryfhjou6W2BsEKwMrhGNghWClaBreIMdHw83zBsfAW+DPyYxjarFzeoPgYp5lGcsXXK/XgIu7puENUpzSrx+760j5PtHk4b8NSBPIcNDfnByz+YLtJPGuEC2XLMTA/hwO7LtxoXiDaFjUdzG2pcGF4g2S+m3vPgxOFG+QlB8M/8LgQvEGwcBSbJ3UweBAIQFJrbnYBIMahQQEg0ql/d4GgxKFDASDiv0FlQ8GFQopiE+ldP0KlwKDAoUcBIOKbZMDJYYvCgvINqgYtgFxYPigsIKwNXyIJubEaIuiFiQERhsUlSAhMZqiqAPpAqMJiiqQLjHqoqgBkYBRB0UFiCSMLcrb+HPvvWLyIBIxUEIliFQMlSCSMdSBSMdQBRIDhhgQ7n1NsWCIAOHe1xQTRucg3PuaYsPoFIR7X1OMGJ2B1EmWzw7AOvMTvTohnyb4g2GTZLVBaTI/eTYJJgwK0iZZTVDazE+QQ9IpgoH4JKsOCudeYtKMH5gsCIgPRp3W9HZHy+nxkO1XW6FQ2EEoMDShsIJQYmhBYQPhwNCAwgLCiZE6CjlICIyUUUhBQmKkikIG0gVGiigkIF1ipIbiDSIBIyUULxBJGKmgtAaRiJECSisQyRixozQGiQEjZpTGIOdnx6EanyTHOdS6x989SuoSJw+CqjGhqACJCUUNSCwoqkBiQFEHIh1FJYhkFLUgUlFUg0hEUQ8iDcVAvvoBUh4eDWSnQSMBxUB+dMy6RjGQPS3MLlEM5JeeclcoBvJHk78LFAM58NYlNIqB1HgNFhLFQGqAhHx4NJCaIKFQGoM0iN/+lDADyf+/LMJcBZnKvZbvbwCuCHI0O8iBDFQlVsg9ANxYrkRk4MGV5fRyDasnALgQEZLeIF4yyK8cfv8vlDuA6touX6HPiKoEcI8Z5LdFMXr+B3DFVCPJ9kazAAAAAElFTkSuQmCC",self.location).href,K=new URL("./assets/apeal_clear_res.e99a0075.png",self.location).href;new URL("./assets/home-server.c140e3d4.png",self.location).href;new URL("./assets/sale.53b840bf.png",self.location).href;new URL("./assets/employee.b31ec0d5.png",self.location).href;const G={name:"commonLayout",setup(e){},data(){return{compApi:{zcxc:{normal:"recordPolicyClick",reverse:"recordDeclarePolicyClick"},xmsb:{normal:"recordDeclarePolicyClick",reverse:"recordPolicyClick"}},defaultUrl:P,chooseSelf:!1,chooseCompanyId:f("get","chooseCompanyId")||"",clearRes:K,needShowImg:!1,buttonData:["\u516C\u793A\u540D\u5355","\u7533\u9886\u5151\u73B0"],className:"",allPages:1,showDeep:!1,loadingOriginalPolicy:!1,initApi:{qyxxtb:{noWord:"getEnterpriseInformationList",hasWord:""},zcxc:{noWord:"searchBasicAndLabelList",hasWord:"getPolicyWordQuery",relevant:"getPolicyRelevantList"},jzts:{noWord:"searchBasicAndLabelList",hasWord:"getPolicyWordQuery",relevant:"getPolicyRelevantList"},xmsb:{noWord:"searchApplyBasicAndLabelList",hasWord:"getApplyPolicyWordQuery",relevant:"getApplyPolicyRelevantList"},msjx:{noWord:"searchFreeBasicAndLabelList",hasWord:"getFreeApplyPolicyWordQuery",relevant:"getFreeApplyPolicyRelevantList",myCash:"searchMyCashList"},bdgs:{noWord:"getMylist",allList:"getAlllist"},yytb:{noWord:"viewIntendList"},fwzyk:{noWord:"getServiceList",hasWord:"getServiceList"}},currentPage:1,total:0,pageSize:10,governmentAffairs:[{title:"\u519C\u836F\u7ECF\u8425\u8BB8\u53EF",postOffice:"\u829D\u7F58\u533A\u519C\u4E1A\u519C\u6751\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=54bc1f6a-d78d-45c4-9d37-4dd4775380ac&taskType=01"},{title:"\u6587\u7269\u5546\u5E97\u8BBE\u7ACB\u8BB8\u53EF",postOffice:"\u829D\u7F58\u533A\u6587\u5316\u548C\u65C5\u6E38\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=1455eb8c-7993-472e-95bc-7dacacaae445&taskType=01"},{title:"\u76F4\u9500\u4F01\u4E1A\u670D\u52A1\u7F51\u70B9\u65B9\u6848\u5BA1\u67E5",postOffice:"\u829D\u7F58\u533A\u5546\u52A1\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=ad267703-e15f-4c1d-84f8-b33e01f24e55&taskType=01"},{title:"\u5EFA\u8BBE\u5DE5\u7A0B\u6D88\u9632\u8BBE\u8BA1\u5BA1\u67E5",postOffice:"\u829D\u7F58\u533A\u4F4F\u623F\u548C\u57CE\u4E61\u5EFA\u8BBE\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=dac95075-2db8-49c8-b654-a4989c7128de&taskType=01"},{title:"\u5E7F\u544A\u53D1\u5E03\u767B\u8BB0",postOffice:"\u829D\u7F58\u533A\u884C\u653F\u5BA1\u6279\u670D\u52A1\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=794635c3-aa95-4725-98bf-5f2ac2c18b9a&taskType=01"},{title:"\u57CE\u5E02\u5EFA\u7B51\u5783\u573E\u5904\u7F6E\u6838\u51C6",postOffice:"\u829D\u7F58\u533A\u7EFC\u5408\u884C\u653F\u6267\u6CD5\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=96bec275-5394-4417-aea1-1fb7d34ccc6d&taskType=01"},{title:"\u4E2D\u4ECB\u673A\u6784\u4ECE\u4E8B\u4EE3\u7406\u8BB0\u8D26\u4E1A\u52A1\u5BA1\u6279",postOffice:"\u829D\u7F58\u533A\u8D22\u653F\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=229e0c75-ba01-4cdf-b0e9-8df6638b05fc&taskType=01"},{title:"\u5EFA\u8BBE\u9879\u76EE\u4F7F\u7528\u6797\u5730\u5BA1\u6279",postOffice:"\u829D\u7F58\u533A\u81EA\u7136\u8D44\u6E90\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=3768a58d-e337-4e2a-afb9-4c6101095d30&taskType=01"},{title:"\u5355\u91C7\u8840\u6D46\u7AD9\u6267\u4E1A\u767B\u8BB0",postOffice:"\u829D\u7F58\u533A\u536B\u751F\u5065\u5EB7\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=7f9836da-62a3-4cef-bcb7-3b5a5533ad2f&taskType=01"},{title:"\u4E2A\u4EBA\u72EC\u8D44\u4F01\u4E1A\u5206\u652F\u673A\u6784\u6CE8\u9500\u767B\u8BB0",postOffice:"\u829D\u7F58\u533A\u5E02\u573A\u76D1\u7763\u7BA1\u7406\u5C40",link:"http://www.yantai.gov.cn/jiqfront/transition/ywTransToDetail.do?areaCode=370602000000&webId=1&itemCode=5fb4e4c0-6c8d-4a06-b959-d162ca75b10d&taskType=01"}],originalTextList:[],serviceRepository:[],originalTextListPolicy:[{policyLabel:["\u91CD\u70B9\u6807\u7B7E","\u653F\u5E9C\u7EA2\u5229","\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E"],closeDate:"",decEndDate:"",decStatus:"1",decStatusName:"\u6709\u6548\u671F\u5185",policyType:"14",policyTypeName:"\u7533\u62A5\u5F81\u96C6",title:"\u6253\u9020\u4F18\u8D28\u670D\u653F\u5E9C\u7EA2\u5229\u52A1\u73AF\u5883",postOffice:"\u533A\u884C\u653F\u5BA1\u6279\u670D\u52A1\u5C40",projectName:"\u6253\u9020\u4F18\u8D28\u670D\u52A1\u73AF\u5883",reportProjectId:"212",suppType:"11",suppTypeName:"\u62DB\u5546\u5F15\u8D44"},{policyLabel:["\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E","\u653F\u5E9C\u7EA2\u5229","\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E"],closeDate:"",decEndDate:"",decStatus:"1",decStatusName:"\u7533\u8BF7\u4E2D",policyType:"14",policyTypeName:"\u7533\u62A5\u5F81\u96C6",title:"\u653F\u5E9C\u7EA2\u5229\u6253\u9020\u4F18\u8D28\u670D\u52A1\u73AF\u5883",postOffice:"\u533A\u884C\u653F\u5BA1\u6279\u670D\u52A1\u5C40",projectName:"\u6253\u9020\u4F18\u8D28\u670D\u52A1\u73AF\u5883",reportProjectId:"212",suppType:"11",suppTypeName:"\u8D44\u91D1\u6276\u6301"},{policyLabel:["\u91CD\u70B9\u6807\u7B7E","\u653F\u5E9C\u7EA2\u5229\u91CD\u70B9\u6807\u7B7E\u91CD\u653F\u5E9C\u7EA2\u5229\u653F\u5E9C\u7EA2\u5229","\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E"],closeDate:"",decEndDate:"",decStatus:"1",decStatusName:"\u6709\u6548\u671F\u5185",policyType:"14",policyTypeName:"\u7533\u62A5\u5F81\u96C6",title:"\u6253\u653F\u5E9C\u7EA2\u5229\u9020\u4F18\u8D28\u670D\u653F\u5E9C\u7EA2\u5229\u52A1\u73AF\u5883",postOffice:"\u533A\u884C\u653F\u5BA1\u6279\u670D\u52A1\u5C40",projectName:"\u6253\u9020\u4F18\u8D28\u670D\u52A1\u73AF\u5883",reportProjectId:"212",suppType:"11",suppTypeName:"\u62DB\u5546\u5F15\u8D44"},{policyLabel:["\u91CD\u70B9\u6807\u7B7E","\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E","\u91CD\u70B9\u6807\u7B7E"],closeDate:"",decEndDate:"",decStatus:"1",decStatusName:"\u7533\u8BF7\u4E2D",policyType:"14",policyTypeName:"\u7533\u62A5\u5F81\u96C6",title:"\u653F\u5E9C\u7EA2\u5229\u6253\u9020\u4F18\u8D28\u670D\u653F\u5E9C\u7EA2\u5229\u52A1\u73AF\u5883",postOffice:"\u533A\u884C\u653F\u5BA1\u6279\u670D\u52A1\u5C40",projectName:"\u6253\u9020\u4F18\u8D28\u670D\u52A1\u73AF\u5883",reportProjectId:"212",suppType:"11",suppTypeName:"\u8D44\u91D1\u6276\u6301"},{policyLabel:["\u91CD\u70B9\u6807\u7B7E","\u653F\u5E9C\u7EA2\u5229","\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E\u91CD\u70B9\u6807\u7B7E"],closeDate:"",decEndDate:"",decStatus:"2",decStatusName:"\u5DF2\u7ED3\u675F",policyType:"14",policyTypeName:"\u7533\u62A5\u5F81\u96C6",title:"\u6253\u9020\u4F18\u8D28\u670D\u52A1\u73AF\u5883\u653F\u5E9C\u7EA2\u5229\u653F\u5E9C\u7EA2\u5229",postOffice:"\u533A\u884C\u653F\u5BA1\u6279\u670D\u52A1\u5C40",projectName:"\u6253\u9020\u4F18\u8D28\u670D\u52A1\u73AF\u5883",reportProjectId:"212",suppType:"11",suppTypeName:"\u62DB\u5546\u5F15\u8D44"}],replyStatus:0,entId:f("get","chooseCompanyId")||"",noticeLabel:[],labelList:[],scrollTop:0,loading:!1,finished:!1,promise:[]}},props:{isPolicyDetail:{type:Number,default:0},isPolcy:{type:Number,default:0},currentIndex:{type:Number,default:0},defaultHeight:{type:Number,default:0},funcName:{type:String,default:""},urlKeyword:{type:String,default:""},isOriginalInfo:{type:Number,default:0},needTop:{type:Boolean,default:!1},isCard:{type:Boolean,default:!1},isRelevant:{type:Boolean,default:!1},tabIndex:{type:Number,default:100},isWebview:{type:Number,default:0},codeParent:{type:String,default:""},isHome:{type:Number,default:0},detailRelevantId:{type:[String,Number],default:""},isMore:{type:Number,default:0},activeIndex:{type:Number,default:0},param:{type:Object,default:()=>{}},timeStrap:{type:[String,Number],default:""},needChildRefresh:{type:Boolean,default:!1},hasNoticeLabel:{type:Boolean,default:!1},routeName:{type:String,default:""}},computed:p(m({},W(["noControl"])),{isNext(){return this.isPolicyDetail==1&&this.currentIndex==0},isRelevantProject(){return this.isPolicyDetail==1&&this.currentIndex==1}}),watch:{currentIndex:{handler(e,a){(this.funcName=="zcxc"||this.funcName=="jzts")&&e&&e==2||(this.finished=!1,this.chooseCompanyId=f("get","chooseCompanyId")||"",this.chooseSelf=!!(f("get","chooseSelf")&&f("get","chooseSelf")=="true"),a!=null&&(this.isPolicyDetail==1&&a!=null&&this.funcName!="jzts"&&(this.currentPage=1,this.originalTextList=[],this.getInitList()),this.funcName=="msjx"&&(this.buttonData=this.currentIndex==0?["\u516C\u793A\u540D\u5355"]:["\u516C\u793A\u540D\u5355","\u7533\u9886\u5151\u73B0"]),this.isPolicyDetail!=1&&(this.funcName=="qyxxtb"||this.funcName=="msjx"||this.funcName=="bdgs"||this.funcName=="yytb")&&(this.currentPage=1,this.originalTextList=[],this.getInitList())))},immediate:!0},urlKeyword:{handler(){this.chooseCompanyId=f("get","chooseCompanyId")||"",this.chooseSelf=!!(f("get","chooseSelf")&&f("get","chooseSelf")=="true"),this.funcName=="msjx"&&this.currentIndex==1&&(this.currentPage=1,this.originalTextList=[],this.getInitList())},immediate:!1},$route:{handler(e,a){this.chooseCompanyId=f("get","chooseCompanyId")||""},immediate:!0},needChildRefresh:{handler(e,a){console.log(e,"9080989080"),console.log(this.funcName,"908098901233eere80"),e&&(this.funcName=="msjx"&&(this.buttonData=this.currentIndex==0?["\u516C\u793A\u540D\u5355"]:["\u516C\u793A\u540D\u5355","\u7533\u9886\u5151\u73B0"]),this.chooseCompanyId=f("get","chooseCompanyId")||"",this.chooseSelf=!!(f("get","chooseSelf")&&f("get","chooseSelf")=="true"),console.log(this.funcName,"come-in"),this.getPath(),this.funcName!="zwfw"&&this.funcName!="zwfwm"&&(this.currentPage=1,this.originalTextList=[],this.getInitList()),console.log(213123))},immediate:!0}},beforeDestroy(){this.currentPage=1,this.originalTextList=[]},methods:{showProjectClass(e){if(e!=0&&!e)return" mode-tip-special ellipsis";if(e==0)return" before-project mode-tip-special ellipsis";if(e==1)return" oning-project mode-tip-special ellipsis";if(e==2)return" over-project mode-tip-special ellipsis";if(e==3)return" other-project mode-tip-special ellipsis"},getSliceStr(e,a=!1,t=!1){return B(e,a,t)},handlerUnit(e){if(e!=0&&!e)return 0;if(String(e).length>3){let a=e;Number(e)>=1e4&&(a=Number(e)/1e4);let t="",i=a.toString().split("."),r=i[0],c=i[1]?"."+i[1].slice(0,1):Number(e)>=1e4?".0":"";for(let N=r.length-1;N>=0;N--)t+=r[r.length-N-1],(r.length-N-1)%3===0&&N!==0&&(t+=",");return t+c}return e.toString()},defaultPromptInfo(){switch(this.funcName){case"qyxxtb":return"\u6682\u65E0\u6570\u636E";case"fwzyk":return"\u672A\u67E5\u8BE2\u5230\u7B26\u5408\u6761\u4EF6\u7684\u670D\u52A1";case"zcxc":case"jzts":return this.currentIndex==1?"\u5F53\u524D\u653F\u7B56\u65E0\u53EF\u7533\u62A5\u9879\u76EE":"\u6682\u65E0\u6570\u636E";case"yytb":return"\u5F53\u524D\u653F\u7B56\u65E0\u610F\u613F\u63D0\u62A5";case"msjx":return this.currentIndex==1?!this.chooseCompanyId||this.chooseSelf?"\u5F53\u524D\u8EAB\u4EFD\u65E0\u6CD5\u67E5\u770B\u8BE5\u529F\u80FD\uFF0C\u8BF7\u5207\u6362\u81F3\u4F01\u4E1A\u7528\u6237":"\u6682\u65E0\u7533\u9886\u5151\u73B0":"\u6682\u65E0\u6570\u636E";case"bdgs":return(!this.chooseCompanyId||this.chooseSelf)&&this.currentIndex==0?"\u5F53\u524D\u8EAB\u4EFD\u65E0\u6CD5\u67E5\u770B\u8BE5\u529F\u80FD\uFF0C\u8BF7\u5207\u6362\u81F3\u4F01\u4E1A\u7528\u6237":"\u6682\u65E0\u516C\u793A\u699C\u5355";default:return"\u6682\u65E0\u6570\u636E"}},showRightStatus(e,a=""){if(e==null||e==null)return"";switch(e){case 0:case"0":return this.funcName=="msjx"&&a?"\u672A\u7533\u9886":this.funcName=="bdgs"?"\u672A\u67E5\u9605":"\u672A\u63D0\u62A5";case 1:case"1":return this.funcName=="msjx"&&a?"\u5DF2\u7533\u9886":this.funcName=="bdgs"?"\u5DF2\u67E5\u9605":"\u5DF2\u63D0\u62A5";default:return""}},showRelevantStatus(e,a=""){if(e==null||e==null)return"";switch(e){case 0:case"0":return this.funcName=="msjx"&&a?"\u672A\u5151\u73B0":"\u672A\u5F00\u59CB";case 1:case"1":return this.funcName=="msjx"&&a?"\u5DF2\u5151\u73B0":"\u8FDB\u884C\u4E2D";case 2:case"2":return"\u5DF2\u7ED3\u675F";case 3:case"3":return"\u5176\u4ED6";default:return""}},filterTime(e){return e&&e.length>5?(e=e.slice(0,10),e):""},viewContentFileInfo(e){uni.navigateTo({url:"/policyDetail?isOriginalInfo=1&funcName=zcxc&isRelevant=true&type=3&id="+e.policeId})},turnFocusPage(e,a){if(!!a)switch(e){case"\u516C\u793A\u540D\u5355":uni.navigateTo({url:"/pages/list-of-public/public-list-page?id="+(this.currentIndex==0?a.id:a.taskId)+"&activeSort="+this.currentIndex});break;case"\u7533\u9886\u5151\u73B0":uni.navigateTo({url:"/pages/apply-for-cash-info/apply-for-cash-info?id="+a.id+"&activeSort="+this.currentIndex+"&taskId="+a.taskId});break;default:return}},getCurrentClass(){if(!this.isNext)switch(!0){case this.needTop:this.className+=" margin-size-large";case this.isCard:this.className+=" active-card";break;default:return}},getListInitParam(e){const a=b.trimAllSpace(this.urlKeyword)!=""?this.funcName=="fwzyk"?{serviceName:this.urlKeyword}:{keyWord:this.urlKeyword}:{},t=this.funcName=="jzts"||this.funcName=="qyxxtb"?{}:e=="noWord"||e=="allList"||this.funcName=="fwzyk"?this.param:{},i=m(m({size:this.pageSize,current:this.currentPage},a),t);switch(this.funcName){case"zcxc":case"jzts":if(this.isRelevantProject)return{policyCode:this.codeParent};case"xmsb":return this.isRelevantProject?{declareId:this.detailRelevantId}:i;case"msjx":return this.currentIndex==0&&!this.isRelevantProject?i:this.isRelevantProject?{outDeclareId:this.detailRelevantId}:!this.isRelevantProject&&this.currentIndex==1?{entId:this.entId,taskName:this.urlKeyword,size:this.pageSize,current:this.currentPage}:void 0;case"yytb":return p(m({},i),{entId:this.entId,applyStatus:this.currentIndex});case"bdgs":return p(m({},i),{entId:this.entId});case"fwzyk":return m({},i);case"qyxxtb":return p(m({},i),{progress:Number(this.currentIndex)+1,entId:f("get","chooseCompanyId")||""});default:return i}},async searchNoticeLable(e){console.log("+++++++++++++++++++++++++++"),this.funcName=="jzts"&&this.$api.searchHasNoticeLabel({entId:this.entId}).then(a=>{if(this.labelList=[],console.log(JSON.stringify(a),"===================================="),a.code==200){this.noticeLabel=a.data&&a.data.length>0?a.data:[],this.$emit("getPushInit",a.data.length>0);let t=[];console.log(JSON.stringify(this.noticeLabel),"eqweeqweqwew"),this.noticeLabel.length>0&&this.noticeLabel.forEach(i=>{this.getAccurateParam(i.typeCode)!=null&&(t[this.getAccurateParam(i.typeCode)]||(t[this.getAccurateParam(i.typeCode)]={},t[this.getAccurateParam(i.typeCode)].labelCodes=[]),t[this.getAccurateParam(i.typeCode)].labelCodes.push(i.labelCode))}),console.log(JSON.stringify(t)),t.length>0&&(this.labelList=t.filter(i=>i))}console.log(JSON.stringify(this.labelList)),this.getInitParam(e)})},getAccurateParam(e){switch(e){case"B001002":return 0;case"B001007":return 1;case"C002001":return 2;case"B002002":return 3;case"B002003":return 4;case"B002004":return 5;case"B002005":return 6;default:return null}},async getInitParam(e,a){if(this.loading=!0,this.labelList.length==0&&this.funcName==="jzts")return;const t=this.funcName==="jzts"?p(m({},this.getListInitParam(e)),{labelList:this.labelList}):this.getListInitParam(e);console.log(t),this.$api[this.initApi[this.funcName][e]](t).then(i=>{console.log(i,"==============="),i.code==200&&(this.isRelevantProject?((this.funcName=="zcxc"||this.funcName=="jzts")&&(this.originalTextList=i.data.policyProjectRelatedAppVOList.length>0?this.originalTextList.concat(i.data.policyProjectRelatedAppVOList.map(r=>this.getItemWord(r))):[]),(this.funcName=="msjx"||this.funcName=="xmsb")&&(this.originalTextList=i.data.length>0?this.originalTextList.concat(i.data.map(r=>this.getItemWord(r))):[])):(this.allPages=i.data.pages,this.funcName=="fwzyk"&&(this.currentPage=i.data.current),this.originalTextList=i.data.records.length>0?this.originalTextList.concat(i.data.records.map(r=>this.getItemWord(r))):[]),this.funcName==="fwzyk"||(this.funcName==="zcxc"||this.funcName==="xmsb")&&!this.isRelevantProject||(this.loading=!1),(this.funcName==="fwzyk"||(this.funcName==="zcxc"||this.funcName==="xmsb")&&!this.isRelevantProject)&&(this.finished=!0),this.originalTextList.length==i.data.total&&(this.finished=!0)),(this.funcName==="fwzyk"||(this.funcName==="zcxc"||this.funcName==="xmsb")&&!this.isRelevantProject)&&(this.loading=!1)}).catch(i=>{this.loading=!1})},async getInitList(e){if(!(this.isNext||(!this.chooseCompanyId||this.chooseSelf)&&(this.funcName=="bdgs"&&this.currentIndex==0||this.funcName=="msjx"&&this.currentIndex==1))&&(this.funcName=="qyxxtb"||this.funcName=="zcxc"||this.funcName=="yytb"||this.funcName=="jzts"||this.funcName=="xmsb"||this.funcName=="msjx"||this.funcName=="bdgs"||this.funcName=="fwzyk")){let a=null;this.isRelevantProject?a="relevant":this.funcName=="msjx"&&this.currentIndex==1?a="myCash":this.funcName=="bdgs"&&this.currentIndex==1?a="allList":a=b.trimAllSpace(this.urlKeyword)!=""?"hasWord":"noWord",this.funcName=="jzts"&&await this.searchNoticeLable(a),await this.getInitParam(a,e)}},handleLabelFormat(e){return e?e.length>0?e=e.split(","):[]:[]},getItemWord(e){if(console.log(this.isRelevantProject),!e)return!1;if(this.funcName=="msjx"&&!this.isRelevantProject&&this.currentIndex==0)return{id:e.id,policyLabel:this.handleLabelFormat(e.highlightLabels),title:e.name,pubStatus:e.pubStatus,status:e.bizStatus,writDt:e.effectiveDate&&e.expirationDate?e.effectiveDate+"~"+e.expirationDate:"",postOffice:e.deptName};if(this.funcName=="msjx"&&!this.isRelevantProject&&this.currentIndex==1)return{id:e.detailId,taskId:e.taskId,policeId:e.policyId,title:e.taskName,pubStatus:e.pubStatus,policyName:e.policyName,replyStatus:e.applyFlag>1?1:e.applyFlag<2&&e.applyFlag!=-1?0:-1,applyFlag:e.cashFlag>1?1:e.cashFlag<2&&e.cashFlag!=-1?0:-1,writDt:e.endTime?"\u7ED3\u675F\u65F6\u95F4\uFF1A"+(e.endTime.length>14?e.endTime.slice(0,-9):e.endTime):e.endTime,postOffice:e.deptName};if(this.funcName=="msjx"&&this.isRelevantProject)return{id:e.id,title:e.policyTitle,status:e.status};if((this.funcName=="zcxc"||this.funcName=="jzts")&&this.isRelevantProject)return{id:e.id,policyTypeName:e.policyTypeName,title:e.name,postOffice:e.majorDeptName,status:e.status,relatedPolicyCode:e.relatedPolicyCode,code:e.code,sourceType:e.sourceType,writDt:e.effectiveDate&&e.expirationDate?"\u7533\u62A5\u65F6\u95F4\uFF1A"+e.effectiveDate+"~"+e.expirationDate:""};if((this.funcName=="zcxc"||this.funcName=="jzts")&&!this.isRelevantProject)return{id:e.id,policyTypeName:e.policyTypeName,policyClickNum:e.policyClickNum,title:e.policyTitle,postOffice:e.postOfficeName,policyLabel:this.handleLabelFormat(e.highlightLabels),writDt:e.releaseDt};if(this.funcName=="xmsb"&&this.isRelevantProject)return{id:e.id,title:e.policyTitle,status:e.status};if(this.funcName=="xmsb"&&!this.isRelevantProject)return{id:e.id,policyTypeName:this.noControl?this.showRelevantStatus(e.declareStatus):!1,status:e.declareStatus,title:e.name,policyClickNum:e.policyClickNum,postOffice:e.majorDeptName,policyLabel:this.handleLabelFormat(e.highlightLabels),writDt:e.isSpecificTime==0?"\u7533\u62A5\u65F6\u95F4\uFF1A"+e.declareStartTime+" ~ "+e.declareEndTime:e.isSpecificTime==1?e.notSpecificTimeFlag==0?"\u968F\u65F6\u53EF\u7533\u62A5":e.notSpecificTimeFlag==1?"\u65E0\u9700\u7533\u62A5":"\u7533\u62A5\u65F6\u95F4\uFF1A\u6682\u672A\u786E\u5B9A":"\u7533\u62A5\u65F6\u95F4\uFF1A\u6682\u672A\u786E\u5B9A"};if(this.funcName=="yytb")return{id:e.detailId,taskId:e.taskId,title:e.taskName,replyStatus:e.applyStatus==-1?-1:e.applyStatus,writDt:e.endTime,postOffice:e.deptName};if(this.funcName=="bdgs")return{id:e.announcementId,billboardId:e.billboardId,title:e.billBoardName,replyStatus:this.currentIndex==1?4:e.checkStatus?1:0,writDt:e.releaseTime&&e.releaseTime.length>12?e.releaseTime.slice(0,-9):e.releaseTime,postOffice:e.deptName};if(this.funcName=="qyxxtb")return{id:e.id,code:e.code,closeDate:"",writDt:this.filterTime(e.startTime)+(this.filterTime(e.startTime)&&this.filterTime(e.endTime)?" ~ ":"")+this.filterTime(e.endTime),replyStatus:e.replyStatus,title:e.name,postOffice:e.viewDept};if(this.funcName=="fwzyk")return{id:e.id,link:e.thumbnailAttach&&e.thumbnailAttach.ossAddr?e.thumbnailAttach.ossAddr:P,serverName:e.serviceName,comName:e.entName,comAddress:e.entRegionNameStr,tag:e.chargeModeStr}},recordClickCount(e){!e||this.$api[this.compApi[this.funcName][this.isRelevantProject?"reverse":"normal"]]({id:e},{"Content-Type":"application/json"}).then(a=>{console.log(a)})},turnPolicyOriginalInfo(e,a){if(this.currentIndex==1&&this.funcName=="msjx"&&!this.isRelevant)return this.turnFocusPage("\u7533\u9886\u5151\u73B0",e);this.detailId=e.id,this.replyStatus=e.replyStatus?e.replyStatus:"",["zcxc","xmsb"].includes(this.funcName)&&!this.noControl&&this.recordClickCount(this.detailId);let t=this.getPath();if(this.funcName=="qyxxtb"&&(t=t+"&replyStatus="+this.replyStatus),this.tabIndex!=100&&(t=t+`&tabIndex=${this.tabIndex}`),this.funcName=="zwfwm"||this.funcName=="zwfw"){Q("openLink",e.link,e.title);return}this.funcName=="fwzyk"&&(t=`${t}?id=${this.detailId}`),this.isRelevantProject&&(this.funcName=="zcxc"||this.funcName=="jzts")&&(t=t+"&type="+e.sourceType),this.funcName!="yytb"&&this.funcName!="fwzyk"&&e.id&&(t=t+`&id=${this.detailId}`),this.funcName=="yytb"&&(t=t+`&taskId=${e.taskId}`),this.funcName=="yytb"&&e.id&&(t=t+`&id=${e.id}`),this.funcName=="yytb"&&(t=t+`&status=${e.replyStatus}`),this.funcName=="bdgs"&&(t=t+`&billboardId=${e.billboardId}`),t=t+"&isMore="+this.isMore,console.log(t),this.$router.push(t),t=null},lowerScroll(){this.currentPage<this.allPages&&(this.funcName==="fwzyk"||(this.funcName==="zcxc"||this.funcName==="xmsb")&&!this.isRelevantProject)&&(this.finished=!1)},async lower(e){this.currentPage<this.allPages&&(!["zwfw","zwfwm"].includes(this.funcName)&&!(this.funcName==="fwzyk"||(this.funcName==="zcxc"||this.funcName==="xmsb")&&!this.isRelevantProject)&&(this.currentPage++,await this.getInitList()),!["zwfw","zwfwm"].includes(this.funcName)&&!this.loading&&(this.funcName==="fwzyk"||(this.funcName==="zcxc"||this.funcName==="xmsb")&&!this.isRelevantProject)&&(this.currentPage++,await this.getInitList()))},getPath(){switch(this.funcName){case"zcxc":case"jzts":return this.isRelevant?`/policyDetail?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}&isRelevant=${this.isRelevant}`:`/policyDetail?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}`;case"xmsb":return this.isRelevant?`/policyDetail?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}&isRelevant=${this.isRelevant}`:`/policyDetail?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}`;case"msjx":return this.isRelevant?`/policyDetail?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}&isRelevant=${this.isRelevant}&activeIndex=${this.currentIndex}`:`/policyDetail?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}&activeIndex=${this.currentIndex}`;case"zwfw":this.originalTextList=JSON.parse(JSON.stringify(this.governmentAffairs));return;case"yytb":return`/pages/wiil-submission-page/wiil-submission-page?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}&activeSort=${this.currentIndex}`;case"bdgs":return`/pages/linked-list-page/linked-list-page?isOriginalInfo=${this.isOriginalInfo}&funcName=${this.funcName}`;case"zwfwm":this.originalTextList=JSON.parse(JSON.stringify(this.governmentAffairs));return;case"fwzyk":return this.originalTextList=JSON.parse(JSON.stringify(this.serviceRepository)),this.needShowImg=!0,"/serviceRepository";case"yytb":return;case"qyxxtb":return`/fillInformationDetail?isOriginalInfo=${this.isOriginalInfo}&tabIndex=${this.currentIndex}&webview=${this.isWebview}`;default:return}},highLightKeyword(e){if(!e)return"";if(b.trimAllSpace(this.urlKeyword)=="")return e;let a=RegExp(b.trimAllSpace(this.urlKeyword),"g"),t=this,i=e.replace(a,function(){return"<text class='f-16 co-blue'>"+b.trimAllSpace(t.urlKeyword)+"</text>"});return a=t=null,i}}},H=e=>(E("data-v-686afd14"),e=e(),J(),e),Y=["onClick"],Z={key:0,class:"common-accurate-state f-12 flex"},X={key:0,class:"common-accurate-state-left flex-ro flex"},V={key:0,class:"point"},$={key:1,class:"common-accurate-state-active-desc bold-font f-14"},ee={key:0,class:"point"},te={key:1,class:"common-accurate-state-active-desc bold-font f-14"},ae={key:2,class:"common-accurate-state-mode"},se={key:1,class:"common-accurate-state-right ellipsis"},ie={class:"main-title policy-text-color"},ce=["innerHTML"],ne=["data-attr","innerHTML"],le={key:1,class:"policy-label flex pad-15"},re={key:0},oe={key:2,class:"gover-border"},ue={class:"util more-text"},de={class:"time count txt-right"},fe={key:0,class:"unit"},he={class:"util more-text"},me={class:"time"},ye=["onClick"],Ne=H(()=>d("div",{class:""},"\u76F8\u5173\uFF1A",-1)),pe={class:"ellipsis"},ge=["onClick"],be={key:1,class:"resource-content-top flex"},we={class:"introduction-info flex",style:{height:"auto",flex:"1"}},Ie={class:"resource-content-sub-tag"},xe={class:"flex justify-side fwzykAdd"},ve={class:"comp-name ellipsis"},Se={class:"comp-name-site ellipsis"},je=["src"],ke={class:"ad-text flex txt-center"},Le={class:"f-14"};function ze(e,a,t,i,r,c){const N=I("van-loading"),A=I("van-image"),R=I("van-list");return n(),l("div",{onScroll:a[1]||(a[1]=(...s)=>c.lowerScroll&&c.lowerScroll(...s)),style:C({position:t.funcName==="fwzyk"||(t.funcName==="zcxc"||t.funcName==="xmsb")&&!c.isRelevantProject?"absolute":"static",top:(t.funcName==="zcxc"||t.funcName==="xmsb")&&!c.isRelevantProject&&e.noControl?"56px":"95px",bottom:"8px",paddingBottom:"1px",width:"100%",overflowY:t.funcName==="fwzyk"||(t.funcName==="zcxc"||t.funcName==="xmsb")&&!c.isRelevantProject?"auto":"hidden"})},[d("div",{class:h(["common-policy-main",{"margin-size-large":t.needTop||!t.needTop&&["msjx","yytb"].includes(t.funcName),"active-card":t.needTop,"no-padding":t.funcName==="fwzyk"||(t.funcName==="zcxc"||t.funcName==="xmsb")&&!c.isRelevantProject}])},[r.originalTextList.length>0?(n(),M(R,{key:0,modelValue:r.loading,"onUpdate:modelValue":a[0]||(a[0]=s=>r.loading=s),finished:r.finished,onLoad:c.lower,offset:"20",class:h({isDetailPage:t.routeName=="policyDetail"})},{default:L(()=>[(n(!0),l(g,null,x(r.originalTextList,(s,v)=>(n(),l("div",{class:h(["common-item box-sizing relative",[t.funcName=="msjx"&&!c.isRelevantProject?(t.currentIndex==0,"has-btn-padding has-no-top-pad"):c.isRelevantProject?"has-bottom-border":["qyxxtb","yytb","jzts"].includes(t.funcName)||t.funcName=="bdgs"&&t.currentIndex==0?"has-top-pad":t.funcName=="bdgs"?"has-no-top-pad":t.funcName=="fwzyk"?"border-special-bottom":"no-btn-padding"]]),key:v,onClick:y=>c.turnPolicyOriginalInfo(s,v)},[!r.needShowImg&&s?(n(),l(g,{key:0},[!(e.noControl&&["zcxc","xmsb"].includes(t.funcName)&&!c.isRelevantProject)&&!["jzts","bdgs","yytb"].includes(t.funcName)?(n(),l("div",Z,[!t.detailRelevantId||["zcxc","jzts"].includes(t.funcName)?(n(),l("div",X,[s.status!=null&&(s.status||s.status==0)&&s.status>-1&&t.funcName!=="zwfwm"&&t.funcName!=="zwfw"&&(t.currentIndex!=1||t.currentIndex==1&&(t.funcName=="zcxc"||t.funcName=="jzts"))?(n(),l("div",{key:0,class:h(["common-accurate-state-active-info flex-ro flex",[s.status==2?"is-over":s.status==1?"is-oning":"is-start"]])},[c.showRelevantStatus(s.status)?(n(),l("text",V)):o("",!0),c.showRelevantStatus(s.status)?(n(),l("text",$,u(c.showRelevantStatus(s.status)),1)):o("",!0)],2)):o("",!0),s.applyFlag!=null&&(s.applyFlag||s.applyFlag==0)&&s.applyFlag>-1&&t.funcName=="msjx"&&t.currentIndex==1?(n(),l("div",{key:1,class:h(["common-accurate-state-active-info flex-ro flex",[s.status==1?"is-over":"is-oning"]])},[c.showRelevantStatus(s.applyFlag)?(n(),l("text",ee)):o("",!0),c.showRelevantStatus(s.applyFlag)?(n(),l("text",te,u(c.showRelevantStatus(s.applyFlag,"applyFlag")),1)):o("",!0)],2)):o("",!0),s.suppTypeName?(n(),l("text",ae,"("+u(s.suppTypeName)+") ",1)):o("",!0)])):o("",!0),s.closeDate&&s.decStatusName=="\u7533\u8BF7\u4E2D"&&t.funcName!=="zwfwm"&&t.funcName!=="zwfw"?(n(),l("text",se," \u8DDD\u7533\u62A5\u622A\u81F3"+u(s.closeDate)+"\u5929 ",1)):o("",!0)])):o("",!0),d("div",ie,[s.policyTypeName?(n(),l("div",{key:1,class:h([[e.noControl&&["zcxc","xmsb"].includes(t.funcName)&&!c.isRelevantProject?t.funcName==="xmsb"?c.showProjectClass(s.status):" ellipsis":" more-text flex",t.funcName=="zwfwm"||t.funcName=="zwfw"?"":"common-text-self-after"],"policy-text-color f-16"]),"data-attr":s.policyTypeName,innerHTML:c.highLightKeyword(s.title)},null,10,ne)):(n(),l("div",{key:0,class:h(["common-text-self policy-text-color f-16",[e.noControl&&["zcxc","xmsb"].includes(t.funcName)&&!c.isRelevantProject?t.funcName==="xmsb"?c.showProjectClass(s.status):" ellipsis":" more-text flex"]]),innerHTML:c.highLightKeyword(s.title)},null,10,ce))]),(t.funcName=="zcxc"||t.funcName=="jzts"||t.funcName=="xmsb"||t.funcName=="msjx"&&t.currentIndex==0)&&s.policyLabel&&s.policyLabel.length>0?(n(),l("div",le,[(n(!0),l(g,null,x(s.policyLabel,(y,w)=>(n(),l("div",{key:w,class:h([y?"label-item-current":""])},[t.funcName!=="zwfwm"&&t.funcName!=="zwfw"&&y?(n(),l("text",re,u(y),1)):o("",!0)],2))),128))])):o("",!0),e.noControl&&["zcxc","xmsb"].includes(t.funcName)&&!c.isRelevantProject?(n(),l("div",oe)):o("",!0),!t.detailRelevantId||["zcxc","jzts"].includes(t.funcName)?(n(),l("div",{key:3,class:h(["remarkf flex f-12",t.funcName=="qyxxtb"?"fill-class":t.funcName=="msjx"?"mar-bot":""])},[e.noControl&&["zcxc","xmsb"].includes(t.funcName)&&!c.isRelevantProject?(n(),l(g,{key:0},[d("text",ue,u(c.getSliceStr({value:s.postOffice,len:16})),1),d("text",de,[U(u("\u70B9\u51FB\u91CF\uFF1A"+c.getSliceStr({value:String(s==null?void 0:s.policyClickNum)||"0",len:10},!0,c.handlerUnit)),1),s.policyClickNum&&Number(s.policyClickNum)>=1e4?(n(),l("i",fe,"\u4E07")):o("",!0)])],64)):(n(),l(g,{key:1},[d("text",he,u(s.postOffice),1),d("text",me,u(s.writDt),1)],64))],2)):o("",!0),s.policyName&&t.currentIndex==1&&t.funcName=="msjx"&&t.funcName!=="zwfwm"&&t.funcName!=="zwfw"&&!t.detailRelevantId?(n(),l("div",{key:4,class:"complex-file flex ellipsis",onClick:k(y=>c.viewContentFileInfo(s),["stop"])},[Ne,d("div",pe,u(s.policyName),1)],8,ye)):o("",!0),t.funcName=="msjx"&&t.funcName!=="zwfwm"&&t.funcName!=="zwfw"&&!c.isRelevantProject&&(s.pubStatus&&t.currentIndex==0||t.currentIndex==1)?(n(),l("div",{key:5,class:h(["operation-box flex",{"border-public":t.currentIndex==0}])},[(n(!0),l(g,null,x(r.buttonData,(y,w)=>(n(),l("div",{class:"operation-item-status box-sizing",key:w,onClick:k(Ce=>c.turnFocusPage(y,s),["stop"])},u(y),9,ge))),128))],2)):o("",!0),c.showRightStatus(s.replyStatus,t.funcName=="msjx"?"cashFlag":"")&&t.funcName!=="xmsb"&&t.funcName!=="zwfwm"&&t.funcName!=="zwfw"&&t.funcName!=="zcxc"&&t.funcName!=="jzts"&&!t.detailRelevantId&&(t.funcName!="msjx"||t.funcName=="msjx"&&t.currentIndex==1)?(n(),l("div",{key:6,class:h(["apply-status-notice absolute",[(t.currentIndex==0||t.funcName=="msjx"&&t.currentIndex==1)&&s.replyStatus==0?"no-submit":(t.currentIndex==0||t.funcName=="msjx"&&t.currentIndex==1)&&s.replyStatus==1?"have-submit":"have-done-status"]])},u(c.showRightStatus(s.replyStatus,t.funcName=="msjx"?"cashFlag":"")),3)):o("",!0)],64)):o("",!0),r.needShowImg&&s?(n(),l("div",be,[z(A,{src:s.link,class:h(["resource-content-logo",{"has-radius":t.funcName==="fwzyk"}]),"error-icon":r.defaultUrl},{loading:L(()=>[z(N,{type:"spinner",size:"20"})]),_:2},1032,["src","class","error-icon"]),d("div",we,[d("div",{class:h(["resource-content-title more-ellipsis-two",{"has-weight":t.funcName==="fwzyk"}])},u(s.serverName),3),d("div",Ie,u(s.tag),1),d("div",xe,[d("div",ve,u(s.comName),1),d("div",Se,u(s.comAddress),1)])])])):o("",!0)],10,Y))),128))]),_:1},8,["modelValue","finished","onLoad","class"])):o("",!0),r.originalTextList.length==0&&(t.funcName!="jzts"||t.hasNoticeLabel)?(n(),l("div",{key:1,class:"ad-model flex flex-center",style:C({background:t.routeName=="policyDetail"?"#ffffff":"none"})},[d("img",{src:r.clearRes,mode:"",class:"ad-img"},null,8,je),d("div",ke,[d("text",Le,u(c.defaultPromptInfo()),1)])],4)):o("",!0)],2)],36)}var it=q(G,[["render",ze],["__scopeId","data-v-686afd14"]]);export{it as default};
