import{S as J,i as M,s as N,p as P,e as D,a as Q,b as o,d as p,f as V,g as R,l as s,W as h,z as b,u as X,q as Y,r as Z,j as x,k as $,n as ee,A as le,F as te,K as y,I as ne}from"./index.4395ab38.js";function ie(t){let l,i,a,g,m,c,f,d,k,F;const _=t[14].default,r=P(_,t,t[13],null);return{c(){l=D("div"),r&&r.c(),i=Q(),a=D("input"),o(a,"class","hidden-upload hidden"),o(a,"type","file"),o(a,"accept",t[0]),a.multiple=g=t[4]==="multiple"||void 0,o(a,"webkitdirectory",m=t[4]==="directory"||void 0),o(a,"mozdirectory",c=t[4]==="directory"||void 0),o(l,"class",f="w-full cursor-pointer h-full items-center justify-center text-gray-400 md:text-xl "+(t[1]?"min-h-[10rem] md:min-h-[15rem] max-h-[15rem] xl:max-h-[18rem] 2xl:max-h-[20rem]":"")),p(l,"text-center",t[2]),p(l,"flex",t[3])},m(n,u){V(n,l,u),r&&r.m(l,null),R(l,i),R(l,a),t[22](a),d=!0,k||(F=[s(a,"change",t[8]),s(l,"drag",h(b(t[15]))),s(l,"dragstart",h(b(t[16]))),s(l,"dragend",h(b(t[17]))),s(l,"dragover",h(b(t[18]))),s(l,"dragenter",h(b(t[19]))),s(l,"dragleave",h(b(t[20]))),s(l,"drop",h(b(t[21]))),s(l,"click",t[7]),s(l,"drop",t[9]),s(l,"dragenter",t[6]),s(l,"dragleave",t[6])],k=!0)},p(n,[u]){r&&r.p&&(!d||u&8192)&&X(r,_,n,n[13],d?Z(_,n[13],u,null):Y(n[13]),null),(!d||u&1)&&o(a,"accept",n[0]),(!d||u&16&&g!==(g=n[4]==="multiple"||void 0))&&(a.multiple=g),(!d||u&16&&m!==(m=n[4]==="directory"||void 0))&&o(a,"webkitdirectory",m),(!d||u&16&&c!==(c=n[4]==="directory"||void 0))&&o(a,"mozdirectory",c),(!d||u&2&&f!==(f="w-full cursor-pointer h-full items-center justify-center text-gray-400 md:text-xl "+(n[1]?"min-h-[10rem] md:min-h-[15rem] max-h-[15rem] xl:max-h-[18rem] 2xl:max-h-[20rem]":"")))&&o(l,"class",f),u&6&&p(l,"text-center",n[2]),u&10&&p(l,"flex",n[3])},i(n){d||(x(r,n),d=!0)},o(n){$(r,n),d=!1},d(n){n&&ee(l),r&&r.d(n),t[22](null),k=!1,le(F)}}}function ae(t,l,i){let{$$slots:a={},$$scope:g}=l,{filetype:m=null}=l,{include_file_metadata:c=!0}=l,{dragging:f=!1}=l,{boundedheight:d=!0}=l,{center:k=!0}=l,{flex:F=!0}=l,{file_count:_="single"}=l,{disable_click:r=!1}=l,n;const u=te(),A=()=>{i(10,f=!f)},q=()=>{r||(i(5,n.value="",n),n.click())},j=e=>{let w=Array.from(e);if(!(!e.length||!window.FileReader)){_==="single"&&(w=[e[0]]);var z=[];w.forEach((U,G)=>{let v=new FileReader;v.readAsDataURL(U),v.onloadend=function(){z[G]=c?{name:U.name,size:U.size,data:this.result}:this.result,z.filter(H=>H!==void 0).length===e.length&&u("load",_=="single"?z[0]:z)}})}},E=e=>{const w=e.target;!w.files||j(w.files)},S=e=>{i(10,f=!1),e.dataTransfer?.files&&j(e.dataTransfer.files)};function T(e){y.call(this,t,e)}function C(e){y.call(this,t,e)}function I(e){y.call(this,t,e)}function K(e){y.call(this,t,e)}function L(e){y.call(this,t,e)}function O(e){y.call(this,t,e)}function W(e){y.call(this,t,e)}function B(e){ne[e?"unshift":"push"](()=>{n=e,i(5,n)})}return t.$$set=e=>{"filetype"in e&&i(0,m=e.filetype),"include_file_metadata"in e&&i(11,c=e.include_file_metadata),"dragging"in e&&i(10,f=e.dragging),"boundedheight"in e&&i(1,d=e.boundedheight),"center"in e&&i(2,k=e.center),"flex"in e&&i(3,F=e.flex),"file_count"in e&&i(4,_=e.file_count),"disable_click"in e&&i(12,r=e.disable_click),"$$scope"in e&&i(13,g=e.$$scope)},[m,d,k,F,_,n,A,q,E,S,f,c,r,g,a,T,C,I,K,L,O,W,B]}class de extends J{constructor(l){super(),M(this,l,ae,ie,N,{filetype:0,include_file_metadata:11,dragging:10,boundedheight:1,center:2,flex:3,file_count:4,disable_click:12})}}export{de as U};
//# sourceMappingURL=Upload.7fd2c50a.js.map
