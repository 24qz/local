import{k as e,M as a,o as l,c as s,w as t,g as i,b as u,e as o,n as r,A as d,N as p,m as n,p as m}from"./index-414aba9e.js";import{_ as c}from"./uni-file-picker.b3833dec.js";import{o as f,r as v}from"./uni-app.es.62e4e15a.js";import{e as _}from"./taskApi.c3c7a53c.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-fetch.cbece254.js";const j=g({__name:"index",setup(g){const j=e(""),k=e([]),x=e([]);f((e=>{j.value=e.id}));const b=a((()=>k.value.map((e=>({url:e.url}))))),V=a((()=>x.value.map((e=>({url:e.url}))))),h=a((()=>b.value.length>0&&V.value.length>0)),y=async()=>{let e={deliverPictureList:b.value,id:j.value,certificatePictureList:V.value},a=await _(e);console.log(a),p({url:"/pages/task/index"})};return(e,a)=>{const p=v(n("uni-file-picker"),c),f=i,_=m;return l(),s(f,{class:"picker-page"},{default:t((()=>[u(f,{class:"example-body"},{default:t((()=>[u(p,{limit:"3",title:"请拍照上传回单凭证",modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e)},null,8,["modelValue"]),u(f,{style:{"margin-top":"30rpx"}},{default:t((()=>[u(p,{limit:"3",title:"请拍照上传货品照片",modelValue:x.value,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),u(_,{class:r([{disabled:!d(h)},"btn"]),onClick:y,disabled:!d(h)},{default:t((()=>[o("交付")])),_:1},8,["class","disabled"])])),_:1})}}},[["__scopeId","data-v-1d14c33f"]]);export{j as default};