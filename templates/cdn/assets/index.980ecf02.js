import{S as Q,i as W,s as Z,w as B,b as f,f as y,g as E,x as O,n as w,e as T,t as U,Y as X,ae as ye,ak as we,h as Y,a as D,C as q,B as I,N as Le,y as Ee,F as ge,ad as je,a6 as G,P as Ae,c as P,m as R,j as F,k as N,o as V,Q as Me,X as Ce,R as ze,T as Be,U as Te,V as Se,D as be,E as ke}from"./index.98155427.js";import{U as Fe}from"./Upload.660f83a6.js";import{M as Ne}from"./ModifyUpload.cecce8cd.js";import{B as Ue}from"./BlockLabel.677b0876.js";import{g as Xe}from"./color.b25386aa.js";import{_ as J,m as K,Z as x}from"./linear.955f0731.js";import{a as Ye}from"./csv.27f5436c.js";import"./dsv.7fe76a93.js";function De(l){let e,t,n;return{c(){e=B("svg"),t=B("path"),n=B("path"),f(t,"d","M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z"),f(t,"fill","currentColor"),f(n,"d","M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z"),f(n,"fill","currentColor"),f(e,"width","1em"),f(e,"height","1em"),f(e,"viewBox","0 0 32 32")},m(r,s){y(r,e,s),E(e,t),E(e,n)},p:O,i:O,o:O,d(r){r&&w(e)}}}class ve extends Q{constructor(e){super(),W(this,e,null,De,Z,{})}}function $(l){let e;return Array.isArray(l)?e=l.reduce((t,{values:n})=>[...t,...n.map(({y:r})=>r)],[]):e=l.values,[Math.min(...e),Math.max(...e)]}function ee(l,e,t){const n=Object.entries(l[0]).reduce((r,s,o)=>(!e&&o===0||e&&s[0]===e?r.x.name=s[0]:(!t||t&&t.includes(s[0]))&&r.y.push({name:s[0],values:[]}),r),{x:{name:"",values:[]},y:[]});for(let r=0;r<l.length;r++){const s=Object.entries(l[r]);for(let o=0;o<s.length;o++){let[_,i]=s[o];_===n.x.name?n.x.values.push(parseFloat(i)):n.y[o-1].values.push({y:parseFloat(s[o][1]),x:parseFloat(s[0][1])})}}return n}function He(l){let e,t,n,r;return{c(){e=T("div"),t=T("span"),n=U(l[0]),f(t,"class","inline-block w-3 h-3 mr-1 rounded-sm"),X(t,"background",l[3]),f(e,"class","bg-black bg-opacity-80 text-white py-1 px-[0.4rem] absolute text-xs flex items-center justify-center rounded"),X(e,"top",l[2]-l[5]/2+"px"),X(e,"left",l[1]-l[4]-7+"px"),ye(()=>l[6].call(e))},m(s,o){y(s,e,o),E(e,t),E(e,n),r=we(e,l[6].bind(e))},p(s,[o]){o&8&&X(t,"background",s[3]),o&1&&Y(n,s[0]),o&36&&X(e,"top",s[2]-s[5]/2+"px"),o&18&&X(e,"left",s[1]-s[4]-7+"px")},i:O,o:O,d(s){s&&w(e),r()}}}function Oe(l,e,t){let{text:n}=e,{x:r}=e,{y:s}=e,{color:o}=e,_,i;function b(){_=this.offsetWidth,i=this.offsetHeight,t(4,_),t(5,i)}return l.$$set=g=>{"text"in g&&t(0,n=g.text),"x"in g&&t(1,r=g.x),"y"in g&&t(2,s=g.y),"color"in g&&t(3,o=g.color)},[n,r,s,o,_,i,b]}class Pe extends Q{constructor(e){super(),W(this,e,Oe,He,Z,{text:0,x:1,y:2,color:3})}}function Re(l,{color:e,text:t}){let n;function r(i){return n=new Pe({props:{text:t,x:i.pageX,y:i.pageY,color:e},target:document.body}),i}function s(i){n.$set({x:i.pageX,y:i.pageY})}function o(){n.$destroy()}const _=l;return _.addEventListener("mouseover",r),_.addEventListener("mouseleave",o),_.addEventListener("mousemove",s),{destroy(){_.removeEventListener("mouseover",r),_.removeEventListener("mouseleave",o),_.removeEventListener("mousemove",s)}}}function le(l,e,t){const n=l.slice();n[16]=e[t].name,n[17]=e[t].values;const r=n[8][n[16]];return n[18]=r,n}function te(l,e,t){const n=l.slice();return n[0]=e[t].x,n[1]=e[t].y,n}function ne(l,e,t){const n=l.slice();n[16]=e[t].name,n[17]=e[t].values;const r=n[8][n[16]];return n[18]=r,n}function oe(l,e,t){const n=l.slice();return n[0]=e[t].x,n[1]=e[t].y,n}function re(l,e,t){const n=l.slice();return n[27]=e[t],n}function se(l,e,t){const n=l.slice();return n[27]=e[t],n}function ie(l,e,t){const n=l.slice();return n[16]=e[t].name,n}function ae(l){let e,t,n,r=l[16]+"",s,o;return{c(){e=T("div"),t=T("span"),n=D(),s=U(r),o=D(),f(t,"class","inline-block w-[12px] h-[12px] rounded-sm "),X(t,"background-color",l[8][l[16]]),f(e,"class","mx-2 flex gap-1 items-center")},m(_,i){y(_,e,i),E(e,t),E(e,n),E(e,s),E(e,o)},p(_,i){i[0]&260&&X(t,"background-color",_[8][_[16]]),i[0]&4&&r!==(r=_[16]+"")&&Y(s,r)},d(_){_&&w(e)}}}function fe(l){let e,t,n,r,s,o,_=l[27]+"",i,b,g;return{c(){e=B("line"),o=B("text"),i=U(_),f(e,"stroke-width","0.5"),f(e,"x1",t=l[5](l[27])),f(e,"x2",n=l[5](l[27])),f(e,"y1",r=l[4](l[9][0]<l[6][0]?l[9][0]:l[6][0])+10),f(e,"y2",s=l[4](l[6][1]>l[9][l[9].length-1]?l[6][1]:l[9][l[9].length-1])),f(e,"stroke","#aaa"),f(o,"class","font-mono text-xs dark:fill-slate-200"),f(o,"text-anchor","middle"),f(o,"x",b=l[5](l[27])),f(o,"y",g=l[4](l[9][0])+30)},m(a,h){y(a,e,h),y(a,o,h),E(o,i)},p(a,h){h[0]&1056&&t!==(t=a[5](a[27]))&&f(e,"x1",t),h[0]&1056&&n!==(n=a[5](a[27]))&&f(e,"x2",n),h[0]&592&&r!==(r=a[4](a[9][0]<a[6][0]?a[9][0]:a[6][0])+10)&&f(e,"y1",r),h[0]&592&&s!==(s=a[4](a[6][1]>a[9][a[9].length-1]?a[6][1]:a[9][a[9].length-1]))&&f(e,"y2",s),h[0]&1024&&_!==(_=a[27]+"")&&Y(i,_),h[0]&1056&&b!==(b=a[5](a[27]))&&f(o,"x",b),h[0]&528&&g!==(g=a[4](a[9][0])+30)&&f(o,"y",g)},d(a){a&&w(e),a&&w(o)}}}function _e(l){let e,t,n,r,s,o,_=l[27]+"",i,b,g;return{c(){e=B("line"),o=B("text"),i=U(_),f(e,"stroke-width","0.5"),f(e,"y1",t=l[4](l[27])),f(e,"y2",n=l[4](l[27])),f(e,"x1",r=l[5](l[10][0]<l[7][0]?l[10][0]:l[7][0])-10),f(e,"x2",s=l[5](l[7][1]>l[10][l[10].length-1]?l[7][1]:l[10][l[10].length-1])),f(e,"stroke","#aaa"),f(o,"class","font-mono text-xs dark:fill-slate-200"),f(o,"text-anchor","end"),f(o,"y",b=l[4](l[27])+4),f(o,"x",g=l[5](l[10][0])-20)},m(a,h){y(a,e,h),y(a,o,h),E(o,i)},p(a,h){h[0]&528&&t!==(t=a[4](a[27]))&&f(e,"y1",t),h[0]&528&&n!==(n=a[4](a[27]))&&f(e,"y2",n),h[0]&1184&&r!==(r=a[5](a[10][0]<a[7][0]?a[10][0]:a[7][0])-10)&&f(e,"x1",r),h[0]&1184&&s!==(s=a[5](a[7][1]>a[10][a[10].length-1]?a[7][1]:a[10][a[10].length-1]))&&f(e,"x2",s),h[0]&512&&_!==(_=a[27]+"")&&Y(i,_),h[0]&528&&b!==(b=a[4](a[27])+4)&&f(o,"y",b),h[0]&1056&&g!==(g=a[5](a[10][0])-20)&&f(o,"x",g)},d(a){a&&w(e),a&&w(o)}}}function ue(l){let e,t,n,r,s,o,_=l[6][1]+"",i,b,g;return{c(){e=B("line"),o=B("text"),i=U(_),f(e,"stroke-width","0.5"),f(e,"y1",t=l[4](l[6][1])),f(e,"y2",n=l[4](l[6][1])),f(e,"x1",r=l[5](l[10][0])),f(e,"x2",s=l[5](l[7][1])),f(e,"stroke","#aaa"),f(o,"class","font-mono text-xs dark:fill-slate-200"),f(o,"text-anchor","end"),f(o,"y",b=l[4](l[6][1])+4),f(o,"x",g=l[5](l[10][0])-20)},m(a,h){y(a,e,h),y(a,o,h),E(o,i)},p(a,h){h[0]&80&&t!==(t=a[4](a[6][1]))&&f(e,"y1",t),h[0]&80&&n!==(n=a[4](a[6][1]))&&f(e,"y2",n),h[0]&1056&&r!==(r=a[5](a[10][0]))&&f(e,"x1",r),h[0]&160&&s!==(s=a[5](a[7][1]))&&f(e,"x2",s),h[0]&64&&_!==(_=a[6][1]+"")&&Y(i,_),h[0]&80&&b!==(b=a[4](a[6][1])+4)&&f(o,"y",b),h[0]&1056&&g!==(g=a[5](a[10][0])-20)&&f(o,"x",g)},d(a){a&&w(e),a&&w(o)}}}function ce(l){let e,t,n,r;return{c(){e=B("circle"),f(e,"r","3.5"),f(e,"cx",t=l[5](l[0])),f(e,"cy",n=l[4](l[1])),f(e,"stroke-width","1.5"),f(e,"stroke",r=l[18]),f(e,"fill","none")},m(s,o){y(s,e,o)},p(s,o){o[0]&36&&t!==(t=s[5](s[0]))&&f(e,"cx",t),o[0]&20&&n!==(n=s[4](s[1]))&&f(e,"cy",n),o[0]&260&&r!==(r=s[18])&&f(e,"stroke",r)},d(s){s&&w(e)}}}function me(l){let e,t,n,r=l[17],s=[];for(let o=0;o<r.length;o+=1)s[o]=ce(oe(l,r,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=B("path"),f(e,"d",t=J().curve(K)(l[17].map(l[13]))),f(e,"fill","none"),f(e,"stroke",n=l[18]),f(e,"stroke-width","3")},m(o,_){for(let i=0;i<s.length;i+=1)s[i].m(o,_);y(o,e,_)},p(o,_){if(_[0]&308){r=o[17];let i;for(i=0;i<r.length;i+=1){const b=oe(o,r,i);s[i]?s[i].p(b,_):(s[i]=ce(b),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=r.length}_[0]&52&&t!==(t=J().curve(K)(o[17].map(o[13])))&&f(e,"d",t),_[0]&260&&n!==(n=o[18])&&f(e,"stroke",n)},d(o){q(s,o),o&&w(e)}}}function he(l){let e,t,n,r,s,o;return{c(){e=B("circle"),f(e,"r","7"),f(e,"cx",t=l[5](l[0])),f(e,"cy",n=l[4](l[1])),f(e,"stroke","black"),f(e,"fill","black"),X(e,"cursor","pointer"),X(e,"opacity","0")},m(_,i){y(_,e,i),s||(o=Le(r=Re.call(null,e,{color:l[18],text:`(${l[0]}, ${l[1]})`})),s=!0)},p(_,i){l=_,i[0]&36&&t!==(t=l[5](l[0]))&&f(e,"cx",t),i[0]&20&&n!==(n=l[4](l[1]))&&f(e,"cy",n),r&&Ee(r.update)&&i[0]&260&&r.update.call(null,{color:l[18],text:`(${l[0]}, ${l[1]})`})},d(_){_&&w(e),s=!1,o()}}}function de(l){let e,t=l[17],n=[];for(let r=0;r<t.length;r+=1)n[r]=he(te(l,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=I()},m(r,s){for(let o=0;o<n.length;o+=1)n[o].m(r,s);y(r,e,s)},p(r,s){if(s[0]&308){t=r[17];let o;for(o=0;o<t.length;o+=1){const _=te(r,t,o);n[o]?n[o].p(_,s):(n[o]=he(_),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(r){q(n,r),r&&w(e)}}}function Ve(l){let e,t,n,r,s,o,_,i,b,g,a=l[3].name+"",h,k=l[2],m=[];for(let c=0;c<k.length;c+=1)m[c]=ae(ie(l,k,c));let L=l[10],v=[];for(let c=0;c<L.length;c+=1)v[c]=fe(se(l,L,c));let S=l[9],j=[];for(let c=0;c<S.length;c+=1)j[c]=_e(re(l,S,c));let p=l[6][1]>l[9][l[9].length-1]&&ue(l),A=l[2],M=[];for(let c=0;c<A.length;c+=1)M[c]=me(ne(l,A,c));let H=l[2],d=[];for(let c=0;c<H.length;c+=1)d[c]=de(le(l,H,c));return{c(){e=T("div"),t=T("div");for(let c=0;c<m.length;c+=1)m[c].c();n=D(),r=B("svg"),s=B("g");for(let c=0;c<v.length;c+=1)v[c].c();o=I();for(let c=0;c<j.length;c+=1)j[c].c();_=I(),p&&p.c();for(let c=0;c<M.length;c+=1)M[c].c();i=I();for(let c=0;c<d.length;c+=1)d[c].c();b=D(),g=T("div"),h=U(a),f(t,"class","flex justify-center items-center text-sm dark:text-slate-200"),f(r,"class","w-full"),f(r,"viewBox","-70 -20 700 420"),f(g,"class","flex justify-center align-items-center text-sm dark:text-slate-200"),f(e,"class","mt-3")},m(c,C){y(c,e,C),E(e,t);for(let u=0;u<m.length;u+=1)m[u].m(t,null);E(e,n),E(e,r),E(r,s);for(let u=0;u<v.length;u+=1)v[u].m(s,null);E(s,o);for(let u=0;u<j.length;u+=1)j[u].m(s,null);E(s,_),p&&p.m(s,null);for(let u=0;u<M.length;u+=1)M[u].m(r,null);E(r,i);for(let u=0;u<d.length;u+=1)d[u].m(r,null);E(e,b),E(e,g),E(g,h)},p(c,C){if(C[0]&260){k=c[2];let u;for(u=0;u<k.length;u+=1){const z=ie(c,k,u);m[u]?m[u].p(z,C):(m[u]=ae(z),m[u].c(),m[u].m(t,null))}for(;u<m.length;u+=1)m[u].d(1);m.length=k.length}if(C[0]&1648){L=c[10];let u;for(u=0;u<L.length;u+=1){const z=se(c,L,u);v[u]?v[u].p(z,C):(v[u]=fe(z),v[u].c(),v[u].m(s,o))}for(;u<v.length;u+=1)v[u].d(1);v.length=L.length}if(C[0]&1712){S=c[9];let u;for(u=0;u<S.length;u+=1){const z=re(c,S,u);j[u]?j[u].p(z,C):(j[u]=_e(z),j[u].c(),j[u].m(s,_))}for(;u<j.length;u+=1)j[u].d(1);j.length=S.length}if(c[6][1]>c[9][c[9].length-1]?p?p.p(c,C):(p=ue(c),p.c(),p.m(s,null)):p&&(p.d(1),p=null),C[0]&308){A=c[2];let u;for(u=0;u<A.length;u+=1){const z=ne(c,A,u);M[u]?M[u].p(z,C):(M[u]=me(z),M[u].c(),M[u].m(r,i))}for(;u<M.length;u+=1)M[u].d(1);M.length=A.length}if(C[0]&308){H=c[2];let u;for(u=0;u<H.length;u+=1){const z=le(c,H,u);d[u]?d[u].p(z,C):(d[u]=de(z),d[u].c(),d[u].m(r,null))}for(;u<d.length;u+=1)d[u].d(1);d.length=H.length}C[0]&8&&a!==(a=c[3].name+"")&&Y(h,a)},i:O,o:O,d(c){c&&w(e),q(m,c),q(v,c),q(j,c),p&&p.d(),q(M,c),q(d,c)}}}function qe(l,e,t){let n,r,s,o,_,i,b,g,{value:a}=e,{x:h=void 0}=e,{y:k=void 0}=e,{colors:m=[]}=e;const L=ge();let v;function S(p){let A=m[p%m.length];return A&&A in G?G[A]?.primary:A||G[Xe(p)].primary}je(()=>{L("process",{x:n,y:r})});const j=({x:p,y:A})=>[_(p),i(A)];return l.$$set=p=>{"value"in p&&t(11,a=p.value),"x"in p&&t(0,h=p.x),"y"in p&&t(1,k=p.y),"colors"in p&&t(12,m=p.colors)},l.$$.update=()=>{l.$$.dirty[0]&2051&&t(3,{x:n,y:r}=ee(typeof a=="string"?Ye(a):a,h,k),n,(t(2,r),t(11,a),t(0,h),t(1,k))),l.$$.dirty[0]&8&&t(7,s=$(n)),l.$$.dirty[0]&4&&t(6,o=$(r)),l.$$.dirty[0]&128&&t(5,_=x(s,[0,600]).nice()),l.$$.dirty[0]&64&&t(4,i=x(o,[350,0]).nice()),l.$$.dirty[0]&32&&t(10,b=_.ticks(8)),l.$$.dirty[0]&16&&t(9,g=i.ticks(8)),l.$$.dirty[0]&4&&t(8,v=r.reduce((p,A,M)=>({...p,[A.name]:S(M)}),{}))},[h,k,r,n,i,_,o,s,v,g,b,a,m,j]}class pe extends Q{constructor(e){super(),W(this,e,qe,Ve,Z,{value:11,x:0,y:1,colors:12},null,[-1,-1])}}function Ie(l){let e,t,n;return t=new Fe({props:{filetype:"text/csv",include_file_metadata:!1,$$slots:{default:[Ze]},$$scope:{ctx:l}}}),t.$on("load",l[16]),{c(){e=T("div"),P(t.$$.fragment),f(e,"class","h-full min-h-[8rem]")},m(r,s){y(r,e,s),R(t,e,null),n=!0},p(r,s){const o={};s&1052672&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){n||(F(t.$$.fragment,r),n=!0)},o(r){N(t.$$.fragment,r),n=!1},d(r){r&&w(e),V(t)}}}function Qe(l){let e,t,n,r,s;return t=new Ne({}),t.$on("clear",l[14]),r=new pe({props:{value:l[10],y:l[3],x:l[4],colors:l[8]}}),r.$on("process",l[15]),{c(){e=T("div"),P(t.$$.fragment),n=D(),P(r.$$.fragment),f(e,"class","input-model w-full h-60 flex justify-center items-center bg-gray-200 dark:bg-gray-600 relative")},m(o,_){y(o,e,_),R(t,e,null),E(e,n),R(r,e,null),s=!0},p(o,_){const i={};_&1024&&(i.value=o[10]),_&8&&(i.y=o[3]),_&16&&(i.x=o[4]),_&256&&(i.colors=o[8]),r.$set(i)},i(o){s||(F(t.$$.fragment,o),F(r.$$.fragment,o),s=!0)},o(o){N(t.$$.fragment,o),N(r.$$.fragment,o),s=!1},d(o){o&&w(e),V(t),V(r)}}}function We(l){let e,t,n,r;const s=[Je,Ge],o=[];function _(i,b){return i[11]?0:1}return e=_(l),t=o[e]=s[e](l),{c(){t.c(),n=I()},m(i,b){o[e].m(i,b),y(i,n,b),r=!0},p(i,b){let g=e;e=_(i),e===g?o[e].p(i,b):(be(),N(o[g],1,1,()=>{o[g]=null}),ke(),t=o[e],t?t.p(i,b):(t=o[e]=s[e](i),t.c()),F(t,1),t.m(n.parentNode,n))},i(i){r||(F(t),r=!0)},o(i){N(t),r=!1},d(i){o[e].d(i),i&&w(n)}}}function Ze(l){let e=l[12]("interface.drop_csv")+"",t,n,r,s,o=l[12]("or")+"",_,i,b,g,a=l[12]("interface.click_to_upload")+"",h;return{c(){t=U(e),n=D(),r=T("br"),s=U("- "),_=U(o),i=U(" -"),b=T("br"),g=D(),h=U(a)},m(k,m){y(k,t,m),y(k,n,m),y(k,r,m),y(k,s,m),y(k,_,m),y(k,i,m),y(k,b,m),y(k,g,m),y(k,h,m)},p(k,m){m&4096&&e!==(e=k[12]("interface.drop_csv")+"")&&Y(t,e),m&4096&&o!==(o=k[12]("or")+"")&&Y(_,o),m&4096&&a!==(a=k[12]("interface.click_to_upload")+"")&&Y(h,a)},d(k){k&&w(t),k&&w(n),k&&w(r),k&&w(s),k&&w(_),k&&w(i),k&&w(b),k&&w(g),k&&w(h)}}}function Ge(l){let e,t,n,r;return n=new ve({}),{c(){e=T("div"),t=T("div"),P(n.$$.fragment),f(t,"class","h-5 dark:text-white opacity-50"),f(e,"class","h-full min-h-[15rem] flex justify-center items-center")},m(s,o){y(s,e,o),E(e,t),R(n,t,null),r=!0},p:O,i(s){r||(F(n.$$.fragment,s),r=!0)},o(s){N(n.$$.fragment,s),r=!1},d(s){s&&w(e),V(n)}}}function Je(l){let e,t;return e=new pe({props:{value:l[11],colors:l[8]}}),{c(){P(e.$$.fragment)},m(n,r){R(e,n,r),t=!0},p(n,r){const s={};r&2048&&(s.value=n[11]),r&256&&(s.colors=n[8]),e.$set(s)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){V(e,n)}}}function Ke(l){let e,t,n,r,s,o,_,i;e=new Ue({props:{show_label:l[7],Icon:ve,label:l[6]||"TimeSeries"}});const b=[l[9]];let g={};for(let m=0;m<b.length;m+=1)g=ze(g,b[m]);n=new Be({props:g});const a=[We,Qe,Ie],h=[];function k(m,L){return m[5]==="static"?0:m[10]?1:m[0]===void 0||m[0]===null?2:-1}return~(s=k(l))&&(o=h[s]=a[s](l)),{c(){P(e.$$.fragment),t=D(),P(n.$$.fragment),r=D(),o&&o.c(),_=I()},m(m,L){R(e,m,L),y(m,t,L),R(n,m,L),y(m,r,L),~s&&h[s].m(m,L),y(m,_,L),i=!0},p(m,L){const v={};L&128&&(v.show_label=m[7]),L&64&&(v.label=m[6]||"TimeSeries"),e.$set(v);const S=L&512?Te(b,[Se(m[9])]):{};n.$set(S);let j=s;s=k(m),s===j?~s&&h[s].p(m,L):(o&&(be(),N(h[j],1,1,()=>{h[j]=null}),ke()),~s?(o=h[s],o?o.p(m,L):(o=h[s]=a[s](m),o.c()),F(o,1),o.m(_.parentNode,_)):o=null)},i(m){i||(F(e.$$.fragment,m),F(n.$$.fragment,m),F(o),i=!0)},o(m){N(e.$$.fragment,m),N(n.$$.fragment,m),N(o),i=!1},d(m){V(e,m),m&&w(t),V(n,m),m&&w(r),~s&&h[s].d(m),m&&w(_)}}}function xe(l){let e,t;return e=new Ae({props:{visible:l[2],variant:l[5]==="dynamic"&&!l[10]?"dashed":"solid",color:"grey",padding:!1,elem_id:l[1],$$slots:{default:[Ke]},$$scope:{ctx:l}}}),{c(){P(e.$$.fragment)},m(n,r){R(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.visible=n[2]),r&1056&&(s.variant=n[5]==="dynamic"&&!n[10]?"dashed":"solid"),r&2&&(s.elem_id=n[1]),r&1056761&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){V(e,n)}}}function $e(l){return l.data.map(e=>e.reduce((t,n,r)=>({...t,[l.headers[r]]:n}),{}))}function el(l){const e=atob(l.split(",")[1]),t=l.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(e.length),r=new Uint8Array(n);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return new Blob([n],{type:t})}function ll(l,e){const t=[],n=[];t.push(l.name),e.forEach(({name:r})=>t.push(r));for(let r=0;r<l.values.length;r++){let s=[];s.push(l.values[r]),e.forEach(({values:o})=>s.push(o[r].y)),n.push(s)}return{headers:t,data:n}}function tl(l,e,t){let n,r;Me(l,Ce,d=>t(12,r=d));const s=ge();let{elem_id:o=""}=e,{visible:_=!0}=e,{value:i}=e,{y:b}=e,{x:g}=e,{mode:a}=e,{label:h}=e,{show_label:k}=e,{colors:m}=e,{loading_status:L}=e,v;function S(d){const c=new FileReader;c.addEventListener("loadend",C=>{t(10,v=C.srcElement.result)}),c.readAsText(d)}function j(d){d.headers&&t(10,v=d.headers.join(",")),d.data.forEach(C=>{t(10,v=v+`
`),t(10,v=v+C.join(","))})}function p(d){return t(0,i={data:d}),d}function A({detail:d}){t(0,i=null),s("change"),s("clear")}const M=({detail:{x:d,y:c}})=>t(0,i=ll(d,c)),H=({detail:d})=>p(d);return l.$$set=d=>{"elem_id"in d&&t(1,o=d.elem_id),"visible"in d&&t(2,_=d.visible),"value"in d&&t(0,i=d.value),"y"in d&&t(3,b=d.y),"x"in d&&t(4,g=d.x),"mode"in d&&t(5,a=d.mode),"label"in d&&t(6,h=d.label),"show_label"in d&&t(7,k=d.show_label),"colors"in d&&t(8,m=d.colors),"loading_status"in d&&t(9,L=d.loading_status)},l.$$.update=()=>{l.$$.dirty&1&&(i&&i.data&&typeof i.data=="string"?i?S(el(i.data)):t(10,v=null):i&&i.data&&typeof i.data!="string"&&(i||t(10,v=null),j(i))),l.$$.dirty&1025&&t(10,v=i==null?null:v),l.$$.dirty&33&&t(11,n=a==="static"&&i&&$e(i)),l.$$.dirty&1&&s("change")},[i,o,_,b,g,a,h,k,m,L,v,n,r,p,A,M,H]}class nl extends Q{constructor(e){super(),W(this,e,tl,xe,Z,{elem_id:1,visible:2,value:0,y:3,x:4,mode:5,label:6,show_label:7,colors:8,loading_status:9})}}var cl=nl;const ml=["static","dynamic"],hl=l=>({type:"{data: Array<Array<number>> | string; headers?: Array<string>;}",description:"dataset of series"});export{cl as Component,hl as document,ml as modes};
//# sourceMappingURL=index.980ecf02.js.map
