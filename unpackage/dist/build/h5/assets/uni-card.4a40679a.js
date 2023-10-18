import{o as a,c as e,w as t,r as l,b as i,f as s,e as d,t as n,d as r,n as c,D as o,g as u,i as _}from"./index-414aba9e.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const f=p({name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick(a){this.$emit("click",a)}}},[["render",function(p,f,g,h,x,y){const m=o,k=u,b=_;return a(),e(k,{class:c(["uni-card",{"uni-card--full":g.isFull,"uni-card--shadow":g.isShadow,"uni-card--border":g.border}]),style:r({margin:g.isFull?0:g.margin,padding:g.spacing,"box-shadow":g.isShadow?g.shadow:""})},{default:t((()=>[l(p.$slots,"cover",{},(()=>[g.cover?(a(),e(k,{key:0,class:"uni-card__cover"},{default:t((()=>[i(m,{class:"uni-card__cover-image",mode:"widthFix",onClick:f[0]||(f[0]=a=>y.onClick("cover")),src:g.cover},null,8,["src"])])),_:1})):s("",!0)]),!0),l(p.$slots,"title",{},(()=>[g.title||g.extra?(a(),e(k,{key:0,class:"uni-card__header"},{default:t((()=>[i(k,{class:"uni-card__header-box",onClick:f[1]||(f[1]=a=>y.onClick("title"))},{default:t((()=>[g.thumbnail?(a(),e(k,{key:0,class:"uni-card__header-avatar"},{default:t((()=>[i(m,{class:"uni-card__header-avatar-image",src:g.thumbnail,mode:"aspectFit"},null,8,["src"])])),_:1})):s("",!0),i(k,{class:"uni-card__header-content"},{default:t((()=>[i(b,{class:"uni-card__header-content-title uni-ellipsis"},{default:t((()=>[d(n(g.title),1)])),_:1}),g.title&&g.subTitle?(a(),e(b,{key:0,class:"uni-card__header-content-subtitle uni-ellipsis"},{default:t((()=>[d(n(g.subTitle),1)])),_:1})):s("",!0)])),_:1})])),_:1}),i(k,{class:"uni-card__header-extra",onClick:f[2]||(f[2]=a=>y.onClick("extra"))},{default:t((()=>[i(b,{class:"uni-card__header-extra-text"},{default:t((()=>[d(n(g.extra),1)])),_:1})])),_:1})])),_:1})):s("",!0)]),!0),i(k,{class:"uni-card__content",style:r({padding:g.padding}),onClick:f[3]||(f[3]=a=>y.onClick("content"))},{default:t((()=>[l(p.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),i(k,{class:"uni-card__actions",onClick:f[4]||(f[4]=a=>y.onClick("actions"))},{default:t((()=>[l(p.$slots,"actions",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-b4135a35"]]);export{f as _};
