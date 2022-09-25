(function(){"use strict";var e={8062:function(e,t,n){var c=n(9242),r=n(3396),i=n(7139);const o={class:"widget"},a={class:"widget-header"},u={class:"widget-header-choice"},s={class:"widget-header-choice-buttons"},l={class:"widget-body"},d={class:"widget-body-count"},_={class:"widget-body-content"},h={class:"widget-pagination"};function f(e,t,n,f,g,m){const y=(0,r.up)("choice-button"),v=(0,r.up)("custom-card");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",a,[(0,r._)("h1",null,"Курс "+(0,i.zw)(e.get_select_corrency)+" на "+(0,i.zw)(e.get_current_data()),1),(0,r._)("div",u,[(0,r._)("button",{onClick:t[0]||(t[0]=t=>e.set_new_size(0)),class:"widget-header-choice-navigation"}," ◃ "),(0,r._)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.get_page,((t,n)=>((0,r.wg)(),(0,r.j4)(y,{onClick:t=>e.change_select_index(n),key:n,index:n,text:t},null,8,["onClick","index","text"])))),128))]),(0,r._)("button",{onClick:t[1]||(t[1]=t=>e.set_new_size(1)),class:"widget-header-choice-navigation"}," ▹ ")])]),(0,r._)("div",l,[(0,r._)("div",d,[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.count_money=t)},null,512),[[c.nr,e.count_money]]),(0,r._)("a",null,(0,i.zw)(e.get_select_corrency),1)]),(0,r._)("div",_,[(0,r.Wm)(v,{class:"custom-card-1",defalt_meaning:70,factor:e.count_money,currency_conver:"RUB",currency:e.get_select_corrency},null,8,["factor","currency"]),(0,r.Wm)(v,{class:"custom-card-2",defalt_meaning:90,factor:e.count_money,currency_conver:"CAN",currency:e.get_select_corrency},null,8,["factor","currency"]),(0,r.Wm)(v,{class:"custom-card-3",defalt_meaning:40,factor:e.count_money,currency_conver:"HRK",currency:e.get_select_corrency},null,8,["factor","currency"]),(0,r.Wm)(v,{class:"custom-card-4",defalt_meaning:60,factor:e.count_money,currency_conver:"JPY",currency:e.get_select_corrency},null,8,["factor","currency"])])]),(0,r._)("div",h,[(0,r._)("button",{onClick:t[3]||(t[3]=t=>e.change_select_index(e.select_index-1))}," ◃ Назад "),(0,r._)("button",{onClick:t[4]||(t[4]=t=>e.change_select_index(e.select_index+1))}," вперёд ▹ ")])])}n(7658);const g=["id"];function m(e,t,n,c,o,a){return(0,r.wg)(),(0,r.iD)("button",{class:"choice-button choice-button-default",id:"choice-button-"+e.index,onClick:t[0]||(t[0]=t=>e.button_change_style())},(0,i.zw)(e.text),9,g)}var y=(0,r.aZ)({name:"choice-button",props:{index:Number,text:{default:"EUR",type:String}},methods:{button_change_style(){let e=document.querySelectorAll("button.choice-button");if(e.length>0)for(let n=0;n<e.length;n++)e[n].classList.remove("choice-button-active"),e[n].classList.remove("choice-button-default"),e[n].classList.add("choice-button-default");let t=document.getElementById("choice-button-"+this.index);null!=t&&(t.classList.remove("choice-button-active"),t.classList.remove("choice-button-default"),t.classList.add("choice-button-active"))}}}),v=n(89);const b=(0,v.Z)(y,[["render",m]]);var x=b;const p={class:"custom-card"},w={style:{color:"#b9b9b9"}},k={style:{"font-size":"48px"}};function U(e,t,n,c,o,a){return(0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("h5",null,[(0,r.Uk)((0,i.zw)(e.factor)+" ",1),(0,r._)("span",w,(0,i.zw)(e.currency)+" =",1)]),(0,r._)("h1",null,[(0,r._)("span",k,(0,i.zw)(e.calc_result),1),(0,r.Uk)(" "+(0,i.zw)(e.currency_conver),1)])])}var z=(0,r.aZ)({name:"custom-card",props:{currency_conver:{default:"USD",type:String},currency:{default:"USD",type:String},factor:{type:Number,default:1},defalt_meaning:{type:Number,default:60}},computed:{calc_result(){if(0==this.factor)return"0";if(this.factor<=1)return this.defalt_meaning.toString();let e=(e,t)=>e*t;return e(this.factor,this.defalt_meaning).toString()}}});const C=(0,v.Z)(z,[["render",U]]);var O=C,D=(0,r.aZ)({components:{choiceButton:x,CustomCard:O},name:"App",data(){return{all_currency:[],count_money:1,select_index:0,min_index:0,max_index:7,test_data:["RUB","EUR","USD","GBP","RUB","EUR","USD","GBP"]}},mounted(){let e=90,t=window.innerWidth;this.max_index=Math.floor(t/e-1)},computed:{get_select_corrency(){return this.test_data[this.select_index]},get_page(){let e=[],t=90,n=window.innerWidth,c=Math.floor(n/t-1);console.log(this.max_index);for(let r=this.min_index;r<this.test_data.length;r++){if(0==c)break;if(r>=this.max_index)break;e.push(this.test_data[r]),c--}return e}},methods:{set_new_size(e){switch(e){case 0:if(this.min_index<=0)return;this.min_index-=1,this.max_index-=1,this.select_index-=1;break;case 1:if(this.max_index>=this.test_data.length)return;this.min_index+=1,this.max_index+=1,this.select_index+=1;break}},get_current_data:()=>{let e=new Date;return e.getFullYear()+"."+e.getMonth()+"."+e.getDate()},change_select_index(e){e<=0||e>=this.test_data.length||(this.select_index=e)}}});const S=(0,v.Z)(D,[["render",f]]);var j=S;(0,c.ri)(j).mount("#app")}},t={};function n(c){var r=t[c];if(void 0!==r)return r.exports;var i=t[c]={exports:{}};return e[c](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,c,r,i){if(!c){var o=1/0;for(l=0;l<e.length;l++){c=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,u=0;u<c.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](c[u])}))?c.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[c,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var c in t)n.o(t,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,c){var r,i,o=c[0],a=c[1],u=c[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(t&&t(c);s<o.length;s++)i=o[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},c=self["webpackChunkcurrency_widget"]=self["webpackChunkcurrency_widget"]||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))}();var c=n.O(void 0,[998],(function(){return n(8062)}));c=n.O(c)})();
//# sourceMappingURL=app.d89cbb5a.js.map