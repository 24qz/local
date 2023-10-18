import{s as e,a as t,o as a,c as r,w as l,r as i,b as s,n,d as o,e as u,f as d,t as m,i as c,g as f,h,j as g,k as p,l as b,I as v,m as y,p as _}from"./index-414aba9e.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as M}from"./uni-app.es.62e4e15a.js";import{l as w}from"./api.9a16dbfa.js";import{u as S}from"./uni-fetch.cbece254.js";const k=x({name:"uniFormsItem",options:{virtualHost:!0},provide(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:()=>null},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:()=>({errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}),computed:{msg(){return this.errorMessage||this.errMsg}},watch:{"form.formRules"(e){this.init()},"form.labelWidth"(e){this.localLabelWidth=this._labelWidthUnit(e)},"form.labelPosition"(e){this.localLabelPos=this._labelPosition()},"form.labelAlign"(e){}},created(){this.init(!0),this.name&&this.form&&this.$watch((()=>this.form._getDataValue(this.name,this.form.localData)),((e,t)=>{if(!this.form._isEqual(e,t)){const t=this.itemSetValue(e);this.onFieldChange(t,!1)}}),{immediate:!1})},unmounted(){this.__isUnmounted=!0,this.unInit()},methods:{setRules(e=null){this.userRules=e,this.init(!1)},setValue(){},async onFieldChange(a,r=!0){const{formData:l,localData:i,errShowType:s,validateCheck:n,validateTrigger:o,_isRequiredField:u,_realName:d}=this.form,m=d(this.name);a||(a=this.form.formData[m]);const c=this.itemRules.rules&&this.itemRules.rules.length;if(!this.validator||!c||0===c)return;const f=u(this.itemRules.rules||[]);let h=null;return"bind"===o||r?(h=await this.validator.validateUpdate({[m]:a},l),f||void 0!==a&&""!==a||(h=null),h&&h.errorMessage?("undertext"===s&&(this.errMsg=h?h.errorMessage:""),"toast"===s&&e({title:h.errorMessage||"校验错误",icon:"none"}),"modal"===s&&t({title:"提示",content:h.errorMessage||"校验错误"})):this.errMsg="",n(h||null)):this.errMsg="",h||null},init(e=!1){const{validator:t,formRules:a,childrens:r,formData:l,localData:i,_realName:s,labelWidth:n,_getDataValue:o,_setDataValue:u}=this.form||{};if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(n),this.localLabelPos=this._labelPosition(),this.form&&e&&r.push(this),!t||!a)return;this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;const d=s(this.name),m=this.userRules||this.rules;"object"==typeof a&&m&&(a[d]={rules:m},t.updateSchema(a));const c=a[d]||{};this.itemRules=c,this.validator=t,this.itemSetValue(o(this.name,i))},unInit(){if(this.form){const{childrens:e,formData:t,_realName:a}=this.form;e.forEach(((e,r)=>{e===this&&(this.form.childrens.splice(r,1),delete t[a(e.name)])}))}},itemSetValue(e){const t=this.form._realName(this.name),a=this.itemRules.rules||[],r=this.form._getValue(t,e,a);return this.form._setDataValue(t,this.form.formData,r),r},clearValidate(){this.errMsg=""},_isRequired(){return this.required},_justifyContent(){if(this.form){const{labelAlign:e}=this.form;let t=this.labelAlign?this.labelAlign:e;if("left"===t)return"flex-start";if("center"===t)return"center";if("right"===t)return"flex-end"}return"flex-start"},_labelWidthUnit(e){return this.num2px(this.labelWidth?this.labelWidth:e||(this.label?65:"auto"))},_labelPosition(){return this.form&&this.form.labelPosition||"left"},isTrigger:(e,t,a)=>"submit"!==e&&e?"bind":void 0===e?"bind"!==t?t?"submit":""===a?"bind":"submit":"bind":"submit",num2px:e=>"number"==typeof e?`${e}px`:e}},[["render",function(e,t,h,g,p,b){const v=c,y=f;return a(),r(y,{class:n(["uni-forms-item",["is-direction-"+p.localLabelPos,p.border?"uni-forms-item--border":"",p.border&&p.isFirstBorder?"is-first-border":""]])},{default:l((()=>[i(e.$slots,"label",{},(()=>[s(y,{class:n(["uni-forms-item__label",{"no-label":!h.label&&!h.required}]),style:o({width:p.localLabelWidth,justifyContent:p.localLabelAlign})},{default:l((()=>[h.required?(a(),r(v,{key:0,class:"is-required"},{default:l((()=>[u("*")])),_:1})):d("",!0),s(v,null,{default:l((()=>[u(m(h.label),1)])),_:1})])),_:1},8,["class","style"])]),!0),s(y,{class:"uni-forms-item__content"},{default:l((()=>[i(e.$slots,"default",{},void 0,!0),s(y,{class:n(["uni-forms-item__error",{"msg--active":b.msg}])},{default:l((()=>[s(v,null,{default:l((()=>[u(m(b.msg),1)])),_:1})])),_:1},8,["class"])])),_:3})])),_:3},8,["class"])}],["__scopeId","data-v-540b8126"]]);var j={email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")};const A={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function F(e,t=""){["label"].forEach((t=>{void 0===e[t]&&(e[t]="")}));let a=t;for(let r in e){let t=new RegExp("{"+r+"}");a=a.replace(t,e[r])}return a}const V={integer:e=>V.number(e)&&parseInt(e,10)===e,string:e=>"string"==typeof e,number:e=>!isNaN(e)&&"number"==typeof e,boolean:function(e){return"boolean"==typeof e},float:function(e){return V.number(e)&&!V.integer(e)},array:e=>Array.isArray(e),object:e=>"object"==typeof e&&!V.array(e),date:e=>e instanceof Date,timestamp(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:e=>"string"==typeof e.url,email:e=>"string"==typeof e&&!!e.match(j.email)&&e.length<255,url:e=>"string"==typeof e&&!!e.match(j.url),pattern(e,t){try{return new RegExp(e).test(t)}catch(a){return!1}},method:e=>"function"==typeof e,idcard:e=>"string"==typeof e&&!!e.match(j.idcard),"url-https"(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":e=>e.startsWith("://"),"url-web":e=>!1};const R={required:(e,t,a)=>e.required&&function(e,t){return null==e||"string"==typeof e&&!e||!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length}(t,e.format||typeof t)?F(e,e.errorMessage||a.required):null,range(e,t,a){const{range:r,errorMessage:l}=e;let i=new Array(r.length);for(let n=0;n<r.length;n++){const e=r[n];V.object(e)&&void 0!==e.value?i[n]=e.value:i[n]=e}let s=!1;return Array.isArray(t)?s=new Set(t.concat(i)).size===i.length:i.indexOf(t)>-1&&(s=!0),s?null:F(e,l||a.enum)},rangeNumber(e,t,a){if(!V.number(t))return F(e,e.errorMessage||a.pattern.mismatch);let{minimum:r,maximum:l,exclusiveMinimum:i,exclusiveMaximum:s}=e,n=i?t<=r:t<r,o=s?t>=l:t>l;return void 0!==r&&n?F(e,e.errorMessage||a.number[i?"exclusiveMinimum":"minimum"]):void 0!==l&&o?F(e,e.errorMessage||a.number[s?"exclusiveMaximum":"maximum"]):void 0!==r&&void 0!==l&&(n||o)?F(e,e.errorMessage||a.number.range):null},rangeLength(e,t,a){if(!V.string(t)&&!V.array(t))return F(e,e.errorMessage||a.pattern.mismatch);let r=e.minLength,l=e.maxLength,i=t.length;return void 0!==r&&i<r?F(e,e.errorMessage||a.length.minLength):void 0!==l&&i>l?F(e,e.errorMessage||a.length.maxLength):void 0!==r&&void 0!==l&&(i<r||i>l)?F(e,e.errorMessage||a.length.range):null},pattern:(e,t,a)=>V.pattern(e.pattern,t)?null:F(e,e.errorMessage||a.pattern.mismatch),format(e,t,a){var r=Object.keys(V),l=A[e.format]?A[e.format]:e.format||e.arrayType;return r.indexOf(l)>-1&&!V[l](t)?F(e,e.errorMessage||a.typeError):null},arrayTypeFormat(e,t,a){if(!Array.isArray(t))return F(e,e.errorMessage||a.typeError);for(let r=0;r<t.length;r++){const l=t[r];let i=this.format(e,l,a);if(null!==i)return i}return null}};class D extends class{constructor(e){this._message=e}async validateRule(e,t,a,r,l){var i=null;let s=t.rules;if(s.findIndex((e=>e.required))<0){if(null==a)return i;if("string"==typeof a&&!a.length)return i}var n=this._message;if(void 0===s)return n.default;for(var o=0;o<s.length;o++){let u=s[o],d=this._getValidateType(u);if(Object.assign(u,{label:t.label||`["${e}"]`}),R[d]&&null!=(i=R[d](u,a,n)))break;if(u.validateExpr){let e=Date.now();if(!1===u.validateExpr(a,l,e)){i=this._getMessage(u,u.errorMessage||this._message.default);break}}if(u.validateFunction&&null!==(i=await this.validateFunction(u,a,r,l,d)))break}return null!==i&&(i=n.TAG+i),i}async validateFunction(e,t,a,r,l){let i=null;try{let s=null;const n=await e.validateFunction(e,t,r||a,(e=>{s=e}));(s||"string"==typeof n&&n||!1===n)&&(i=this._getMessage(e,s||n,l))}catch(s){i=this._getMessage(e,s.message,l)}return i}_getMessage(e,t,a){return F(e,t||e.errorMessage||this._message[a]||t.default)}_getValidateType(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}{constructor(e,t){super(D.message),this._schema=e,this._options=t||null}updateSchema(e){this._schema=e}async validate(e,t){let a=this._checkFieldInSchema(e);return a||(a=await this.invokeValidate(e,!1,t)),a.length?a[0]:null}async validateAll(e,t){let a=this._checkFieldInSchema(e);return a||(a=await this.invokeValidate(e,!0,t)),a}async validateUpdate(e,t){let a=this._checkFieldInSchema(e);return a||(a=await this.invokeValidateUpdate(e,!1,t)),a.length?a[0]:null}async invokeValidate(e,t,a){let r=[],l=this._schema;for(let i in l){let s=l[i],n=await this.validateRule(i,s,e[i],e,a);if(null!=n&&(r.push({key:i,errorMessage:n}),!t))break}return r}async invokeValidateUpdate(e,t,a){let r=[];for(let l in e){let i=await this.validateRule(l,this._schema[l],e[l],e,a);if(null!=i&&(r.push({key:l,errorMessage:i}),!t))break}return r}_checkFieldInSchema(e){var t=Object.keys(e),a=Object.keys(this._schema);if(new Set(t.concat(a)).size===a.length)return"";var r=t.filter((e=>a.indexOf(e)<0));return[{key:"invalid",errorMessage:F({field:JSON.stringify(r)},D.message.TAG+D.message.defaultInvalid)}]}}D.message=new function(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}};const N=(e,t,a)=>{const r=a.find((e=>{return e.format&&("int"===(t=e.format)||"double"===t||"number"===t||"timestamp"===t);var t})),l=a.find((e=>e.format&&"boolean"===e.format||"bool"===e.format));return r&&(t=t||0===t?E(Number(t))?Number(t):t:null),l&&(t=!!P(t)&&t),t},O=(e,t)=>C(t,e),L=(e,t={})=>{const a=I(e);if("object"==typeof a&&Array.isArray(a)&&a.length>1){return a.reduce(((e,t)=>e+`#${t}`),"_formdata_")}return a[0]||e},$=e=>{let t=e.replace("_formdata_#","");return t=t.split("#").map((e=>E(e)?Number(e):e)),t},q=(e,t,a)=>("object"!=typeof e||I(t).reduce(((e,t,r,l)=>r===l.length-1?(e[t]=a,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(l[r+1])?[]:{}),e[t])),e),e);function I(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}const C=(e,t,a="undefined")=>{let r=I(t).reduce(((e,t)=>(e||{})[t]),e);return r&&void 0===r?a:r},E=e=>!isNaN(Number(e)),P=e=>"boolean"==typeof e;const T=x({name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:()=>null},modelValue:{type:Object,default:()=>null},model:{type:Object,default:()=>null},rules:{type:Object,default:()=>({})},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide(){return{uniForm:this}},data:()=>({formData:{},formRules:{}}),computed:{localData(){const e=this.model||this.modelValue||this.value;return e?(t=e,JSON.parse(JSON.stringify(t))):{};var t}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created(){h().$vm.$.appContext.config.globalProperties.binddata||(h().$vm.$.appContext.config.globalProperties.binddata=function(e,t,a){if(a)this.$refs[a].setValue(e,t);else{let a;for(let e in this.$refs){const t=this.$refs[e];if(t&&t.$options&&"uniForms"===t.$options.name){a=t;break}}if(!a)return console.error("当前 uni-froms 组件缺少 ref 属性");a.setValue(e,t)}}),this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new D(e)},setValue(e,t){let a=this.childrens.find((t=>t.name===e));return a?(this.formData[e]=N(0,t,this.formRules[e]&&this.formRules[e].rules||[]),a.onFieldChange(this.formData[e])):null},validate(e,t){return this.checkAll(this.formData,e,t)},validateField(e=[],t){e=[].concat(e);let a={};return this.childrens.forEach((t=>{const r=L(t.name);-1!==e.indexOf(r)&&(a=Object.assign({},a,{[r]:this.formData[r]}))})),this.checkAll(a,[],t)},clearValidate(e=[]){e=[].concat(e),this.childrens.forEach((t=>{if(0===e.length)t.errMsg="";else{const a=L(t.name);-1!==e.indexOf(a)&&(t.errMsg="")}}))},submit(e,t,a){for(let r in this.dataValue){this.childrens.find((e=>e.name===r))&&void 0===this.formData[r]&&(this.formData[r]=this._getValue(r,this.dataValue[r]))}return a||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},async checkAll(e,t,a,r){if(!this.validator)return;let l,i=[];for(let u in e){const e=this.childrens.find((e=>L(e.name)===u));e&&i.push(e)}a||"function"!=typeof t||(a=t),!a&&"function"!=typeof a&&Promise&&(l=new Promise(((e,t)=>{a=function(a,r){a?t(a):e(r)}})));let s=[],n=JSON.parse(JSON.stringify(e));for(let u in i){const e=i[u];let t=L(e.name);const a=await e.onFieldChange(n[t]);if(a&&(s.push(a),"toast"===this.errShowType||"modal"===this.errShowType))break}Array.isArray(s)&&0===s.length&&(s=null),Array.isArray(t)&&t.forEach((e=>{let t=L(e),a=O(e,this.localData);void 0!==a&&(n[t]=a)})),"submit"===r?this.$emit("submit",{detail:{value:n,errors:s}}):this.$emit("validate",s);let o={};return o=((e={},t)=>{let a=JSON.parse(JSON.stringify(e)),r={};for(let l in a){let e=$(l);q(r,e,a[l])}return r})(n,this.name),a&&"function"==typeof a&&a(s,o),l&&a?l:null},validateCheck(e){this.$emit("validate",e)},_getValue:N,_isRequiredField:e=>{let t=!1;for(let a=0;a<e.length;a++){if(e[a].required){t=!0;break}}return t},_setDataValue:(e,t,a)=>(t[e]=a,a||""),_getDataValue:O,_realName:L,_isRealName:e=>/^_formdata_#*/.test(e),_isEqual:(e,t)=>{if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var a=toString.call(e);if(a!==toString.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}if("[object Object]"==a){var r=Object.getOwnPropertyNames(e),l=Object.getOwnPropertyNames(t);if(r.length!=l.length)return!1;for(var i=0;i<r.length;i++){var s=r[i];if(e[s]!==t[s])return!1}return!0}return"[object Array]"==a?e.toString()==t.toString():void 0}}},[["render",function(e,t,n,o,u,d){const m=g,c=f;return a(),r(c,{class:"uni-forms"},{default:l((()=>[s(m,null,{default:l((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-7b66846a"]]),W=x({__name:"index",setup(e){const t=S(),i=p(!0),o=p(!1);p(!0);const h=p(!0),g=p(!1);p("手机号登录"),p("账号登录");const x=p({account:"yangMr",password:""}),j=p(),A={account:{rules:[{required:!0,errorMessage:"请填写账号"},{pattern:/^[a-zA-Z0-9]{6,8}$/,errorMessage:"登录账号格式不正确"}]},password:{rules:[{required:!0,errorMessage:"请填写密码"},{pattern:/^\d{6}$/,errorMessage:"登录密码格式不正确"}]}},F=e=>{console.log(e.detail.cursor),x.value.password=e.detail.value,e.detail.cursor>0?(o.value=!0,i.value=!1):(o.value=!1,i.value=!0)},V=e=>{x.value.password="",o.value=!1},R=async()=>{console.log(11111);try{const e=await j.value.validate();let a=await w(e);i.value=!1,t.count=a.data,b({url:"/pages/task/index"})}catch(e){}},D=async()=>{g.value=!g.value,g.value||(tabIndex.value=Math.abs(tabIndex.value-1))};return(e,t)=>{const p=f,b=c,w=v,S=M(y("uni-forms-item"),k),N=M(y("uni-forms"),T),O=_;return a(),r(p,{class:"content"},{default:l((()=>[s(p,{class:"top"},{default:l((()=>[s(p,{class:"title"},{default:l((()=>[u(m(g.value?"手机号登录":"账号登录"),1)])),_:1}),s(p,{style:{display:"flex","align-items":"center"}},{default:l((()=>[s(b,{class:"ctitle",onClick:D},{default:l((()=>[u(m(g.value?"账号登录":"手机号登录"),1)])),_:1}),s(b,{class:"iconfont iconStyle icon-caret"})])),_:1})])),_:1}),s(p,{class:"nav"},{default:l((()=>[g.value?d("",!0):(a(),r(N,{key:0,ref_key:"onformData",ref:j,modelValue:x.value,rules:A},{default:l((()=>[s(S,{name:"account",style:{"border-bottom":"2rpx solid #f9f9f9"}},{default:l((()=>[s(w,{type:"text",modelValue:x.value.account,"onUpdate:modelValue":t[0]||(t[0]=e=>x.value.account=e),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),s(S,{name:"password",style:{"border-bottom":"2rpx solid #f9f9f9"}},{default:l((()=>[s(p,{class:"uni-form-item uni-column"},{default:l((()=>[s(p,{class:"uni-input-wrapper"},{default:l((()=>[s(w,{class:"uni-input",placeholder:"请输入密码",value:x.value.password,password:h.value,onInput:F},null,8,["value","password"]),o.value?(a(),r(b,{key:0,class:"iconfont icon-clear clear",onClick:V})):d("",!0),h.value?(a(),r(b,{key:1,class:"iconfont icon-close eye",onClick:t[1]||(t[1]=e=>h.value=!1)})):(a(),r(b,{key:2,class:"iconfont icon-eye eye",onClick:t[2]||(t[2]=e=>h.value=!0)}))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])),s(O,{disabled:i.value,class:n([i.value?"disabled":"","loginBtn"]),onClick:R},{default:l((()=>[u("登录")])),_:1},8,["disabled","class"])])),_:1})])),_:1})}}},[["__scopeId","data-v-41dae774"]]);export{W as default};