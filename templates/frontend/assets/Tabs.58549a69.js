import{S as A,i as D,s as E,B as S,f as h,n as g,p as F,e as v,a as w,b as m,d as T,g as p,ab as I,u as M,q as N,r as Q,j as z,k as G,Q as H,F as J,$ as K,ar as L,a1 as O,a0 as P,t as C,l as R,h as j}from"./index.4395ab38.js";function q(i,e,s){const t=i.slice();return t[11]=e[s],t}function U(i){let e,s=i[11].name+"",t,f,o,a;function n(){return i[9](i[11])}return{c(){e=v("button"),t=C(s),f=w(),m(e,"class","px-4 pb-2 pt-1.5 border-transparent text-gray-400 hover:text-gray-700 -mb-[2px] border-2 border-b-0")},m(d,u){h(d,e,u),p(e,t),p(e,f),o||(a=R(e,"click",n),o=!0)},p(d,u){i=d,u&4&&s!==(s=i[11].name+"")&&j(t,s)},d(d){d&&g(e),o=!1,a()}}}function V(i){let e,s=i[11].name+"",t,f;return{c(){e=v("button"),t=C(s),f=w(),m(e,"class","bg-white px-4 pb-2 pt-1.5 rounded-t-lg border-gray-200 -mb-[2px] border-2 border-b-0")},m(o,a){h(o,e,a),p(e,t),p(e,f)},p(o,a){a&4&&s!==(s=o[11].name+"")&&j(t,s)},d(o){o&&g(e)}}}function B(i,e){let s,t;function f(n,d){return n[11].id===n[3]?V:U}let o=f(e),a=o(e);return{key:i,first:null,c(){s=S(),a.c(),t=S(),this.first=s},m(n,d){h(n,s,d),a.m(n,d),h(n,t,d)},p(n,d){e=n,o===(o=f(e))&&a?a.p(e,d):(a.d(1),a=o(e),a&&(a.c(),a.m(t.parentNode,t)))},d(n){n&&g(s),a.d(n),n&&g(t)}}}function W(i){let e,s,t=[],f=new Map,o,a,n=i[2];const d=l=>l[11].id;for(let l=0;l<n.length;l+=1){let c=q(i,n,l),b=d(c);f.set(b,t[l]=B(b,c))}const u=i[8].default,_=F(u,i,i[7],null);return{c(){e=v("div"),s=v("div");for(let l=0;l<t.length;l+=1)t[l].c();o=w(),_&&_.c(),m(s,"class","flex border-b-2 flex-wrap dark:border-gray-700"),m(e,"class","tabs flex flex-col my-4"),m(e,"id",i[1]),T(e,"hidden",!i[0])},m(l,c){h(l,e,c),p(e,s);for(let b=0;b<t.length;b+=1)t[b].m(s,null);p(e,o),_&&_.m(e,null),a=!0},p(l,[c]){c&44&&(n=l[2],t=I(t,c,d,1,l,n,f,s,L,B,null,q)),_&&_.p&&(!a||c&128)&&M(_,u,l,l[7],a?Q(u,l[7],c,null):N(l[7]),null),(!a||c&2)&&m(e,"id",l[1]),c&1&&T(e,"hidden",!l[0])},i(l){a||(z(_,l),a=!0)},o(l){G(_,l),a=!1},d(l){l&&g(e);for(let c=0;c<t.length;c+=1)t[c].d();_&&_.d(l)}}}const X={};function Y(i,e,s){let t,{$$slots:f={},$$scope:o}=e,{visible:a=!0}=e,{elem_id:n}=e,{selected:d}=e,u=[];const _=O(!1);H(i,_,r=>s(3,t=r));const l=J();K(X,{register_tab:r=>{u.push({name:r.name,id:r.id}),_.update(k=>k??r.id),s(2,u)},unregister_tab:r=>{const k=u.findIndex(y=>y.id===r.id);u.splice(k,1),_.update(y=>y===r.id?u[k]?.id||u[u.length-1]?.id:y)},selected_tab:_});function c(r){P(_,t=r,t),l("change")}const b=r=>c(r.id);return i.$$set=r=>{"visible"in r&&s(0,a=r.visible),"elem_id"in r&&s(1,n=r.elem_id),"selected"in r&&s(6,d=r.selected),"$$scope"in r&&s(7,o=r.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&d!==null&&c(d)},[a,n,u,t,_,c,d,o,f,b]}class x extends A{constructor(e){super(),D(this,e,Y,W,E,{visible:0,elem_id:1,selected:6})}}export{x as T,X as a};
//# sourceMappingURL=Tabs.58549a69.js.map
