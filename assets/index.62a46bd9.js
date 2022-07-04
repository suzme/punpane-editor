const Cl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const i of f.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerpolicy&&(f.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?f.credentials="include":o.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function n(o){if(o.ep)return;o.ep=!0;const f=l(o);fetch(o.href,f)}};Cl();function dt(){}const qt=e=>e;function _l(e){return e()}function Gt(){return Object.create(null)}function Ve(e){e.forEach(_l)}function Jt(e){return typeof e=="function"}function Kl(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ml(e){return Object.keys(e).length===0}const hl=typeof window!="undefined";let yl=hl?()=>window.performance.now():()=>Date.now(),Ut=hl?e=>requestAnimationFrame(e):dt;const et=new Set;function gl(e){et.forEach(t=>{t.c(e)||(et.delete(t),t.f())}),et.size!==0&&Ut(gl)}function ml(e){let t;return et.size===0&&Ut(gl),{promise:new Promise(l=>{et.add(t={c:e,f:l})}),abort(){et.delete(t)}}}function r(e,t){e.appendChild(t)}function vl(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Nl(e){const t=p("style");return Pl(vl(e),t),t.sheet}function Pl(e,t){r(e.head||e,t)}function Ke(e,t,l){e.insertBefore(t,l||null)}function ke(e){e.parentNode.removeChild(e)}function tt(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function p(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function b(){return L(" ")}function kl(){return L("")}function m(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function s(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Ht(e){return e===""?null:+e}function Sl(e){return Array.from(e.childNodes)}function Je(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Dt(e,t){e.value=t==null?"":t}function w(e,t,l,n){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}function U(e,t,l){e.classList[l?"add":"remove"](t)}function Fl(e,t,{bubbles:l=!1,cancelable:n=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,l,n,t),o}const Mt=new Map;let Nt=0;function Ol(e){let t=5381,l=e.length;for(;l--;)t=(t<<5)-t^e.charCodeAt(l);return t>>>0}function Rl(e,t){const l={stylesheet:Nl(t),rules:{}};return Mt.set(e,l),l}function bl(e,t,l,n,o,f,i,y=0){const h=16.666/n;let d=`{
`;for(let v=0;v<=1;v+=h){const k=t+(l-t)*f(v);d+=v*100+`%{${i(k,1-k)}}
`}const N=d+`100% {${i(l,1-l)}}
}`,A=`__svelte_${Ol(N)}_${y}`,F=vl(e),{stylesheet:P,rules:E}=Mt.get(F)||Rl(F,e);E[A]||(E[A]=!0,P.insertRule(`@keyframes ${A} ${N}`,P.cssRules.length));const C=e.style.animation||"";return e.style.animation=`${C?`${C}, `:""}${A} ${n}ms linear ${o}ms 1 both`,Nt+=1,A}function jt(e,t){const l=(e.style.animation||"").split(", "),n=l.filter(t?f=>f.indexOf(t)<0:f=>f.indexOf("__svelte")===-1),o=l.length-n.length;o&&(e.style.animation=n.join(", "),Nt-=o,Nt||Ll())}function Ll(){Ut(()=>{Nt||(Mt.forEach(e=>{const{stylesheet:t}=e;let l=t.cssRules.length;for(;l--;)t.deleteRule(l);e.rules={}}),Mt.clear())})}let Vt;function pt(e){Vt=e}const ut=[],Qt=[],Et=[],Wt=[],Tl=Promise.resolve();let It=!1;function zl(){It||(It=!0,Tl.then(wl))}function lt(e){Et.push(e)}const Lt=new Set;let At=0;function wl(){const e=Vt;do{for(;At<ut.length;){const t=ut[At];At++,pt(t),Bl(t.$$)}for(pt(null),ut.length=0,At=0;Qt.length;)Qt.pop()();for(let t=0;t<Et.length;t+=1){const l=Et[t];Lt.has(l)||(Lt.add(l),l())}Et.length=0}while(ut.length);for(;Wt.length;)Wt.pop()();It=!1,Lt.clear(),pt(e)}function Bl(e){if(e.fragment!==null){e.update(),Ve(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(lt)}}let ct;function Dl(){return ct||(ct=Promise.resolve(),ct.then(()=>{ct=null})),ct}function Pt(e,t,l){e.dispatchEvent(Fl(`${t?"intro":"outro"}${l}`))}const Ct=new Set;let Le;function jl(){Le={r:0,c:[],p:Le}}function Il(){Le.r||Ve(Le.c),Le=Le.p}function Kt(e,t){e&&e.i&&(Ct.delete(e),e.i(t))}function Xt(e,t,l,n){if(e&&e.o){if(Ct.has(e))return;Ct.add(e),Le.c.push(()=>{Ct.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}}const Al={duration:0};function ql(e,t,l){let n=t(e,l),o=!1,f,i,y=0;function h(){f&&jt(e,f)}function d(){const{delay:A=0,duration:F=300,easing:P=qt,tick:E=dt,css:C}=n||Al;C&&(f=bl(e,0,1,F,A,P,C,y++)),E(0,1);const v=yl()+A,k=v+F;i&&i.abort(),o=!0,lt(()=>Pt(e,!0,"start")),i=ml(X=>{if(o){if(X>=k)return E(1,0),Pt(e,!0,"end"),h(),o=!1;if(X>=v){const ze=P((X-v)/F);E(ze,1-ze)}}return o})}let N=!1;return{start(){N||(N=!0,jt(e),Jt(n)?(n=n(),Dl().then(d)):d())},invalidate(){N=!1},end(){o&&(h(),o=!1)}}}function Jl(e,t,l){let n=t(e,l),o=!0,f;const i=Le;i.r+=1;function y(){const{delay:h=0,duration:d=300,easing:N=qt,tick:A=dt,css:F}=n||Al;F&&(f=bl(e,1,0,d,h,N,F));const P=yl()+h,E=P+d;lt(()=>Pt(e,!1,"start")),ml(C=>{if(o){if(C>=E)return A(0,1),Pt(e,!1,"end"),--i.r||Ve(i.c),!1;if(C>=P){const v=N((C-P)/d);A(1-v,v)}}return o})}return Jt(n)?Dl().then(()=>{n=n(),y()}):y(),{end(h){h&&n.tick&&n.tick(1,0),o&&(f&&jt(e,f),o=!1)}}}function Ul(e,t,l,n){const{fragment:o,on_mount:f,on_destroy:i,after_update:y}=e.$$;o&&o.m(t,l),n||lt(()=>{const h=f.map(_l).filter(Jt);i?i.push(...h):Ve(h),e.$$.on_mount=[]}),y.forEach(lt)}function Vl(e,t){const l=e.$$;l.fragment!==null&&(Ve(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Yl(e,t){e.$$.dirty[0]===-1&&(ut.push(e),zl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Gl(e,t,l,n,o,f,i,y=[-1]){const h=Vt;pt(e);const d=e.$$={fragment:null,ctx:null,props:f,update:dt,not_equal:o,bound:Gt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Gt(),dirty:y,skip_bound:!1,root:t.target||h.$$.root};i&&i(d.root);let N=!1;if(d.ctx=l?l(e,t.props||{},(A,F,...P)=>{const E=P.length?P[0]:F;return d.ctx&&o(d.ctx[A],d.ctx[A]=E)&&(!d.skip_bound&&d.bound[A]&&d.bound[A](E),N&&Yl(e,A)),F}):[],d.update(),N=!0,Ve(d.before_update),d.fragment=n?n(d.ctx):!1,t.target){if(t.hydrate){const A=Sl(t.target);d.fragment&&d.fragment.l(A),A.forEach(ke)}else d.fragment&&d.fragment.c();t.intro&&Kt(e.$$.fragment),Ul(e,t.target,t.anchor,t.customElement),wl()}pt(h)}class Hl{$destroy(){Vl(this,1),this.$destroy=dt}$on(t,l){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!Ml(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Zt(e,{delay:t=0,duration:l=400,easing:n=qt}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:l,easing:n,css:f=>`opacity: ${f*o}`}}function xt(e,t,l){const n=e.slice();return n[79]=t[l],n[81]=l,n}function $t(e,t,l){const n=e.slice();return n[82]=t[l],n[84]=l,n}function el(e,t,l){const n=e.slice();return n[79]=t[l],n[81]=l,n}function tl(e,t,l){const n=e.slice();return n[86]=t[l],n}function ll(e,t,l){const n=e.slice();return n[89]=t[l],n[81]=l,n}function nl(e,t,l){const n=e.slice();return n[91]=t[l],n}function ol(e){let t,l=`${Ue-e[91]}px`,n=`${St-e[91]}px`;return{c(){t=p("div"),s(t,"class","panel_back svelte-y4ofk3"),w(t,"width",l,!1),w(t,"height",n,!1),w(t,"background",e[21][e[22][e[81]]],!1)},m(o,f){Ke(o,t,f)},p(o,f){f[0]&32768&&l!==(l=`${Ue-o[91]}px`)&&w(t,"width",l,!1),f[0]&32768&&n!==(n=`${St-o[91]}px`)&&w(t,"height",n,!1)},d(o){o&&ke(t)}}}function sl(e){let t,l,n,o=e[23][e[81]]+"",f,i,y=`${Ue+1}px`,h=`${St+1}px`,d=`${e[19][e[81]]*St}px`,N=`${e[20][e[81]]*Ue}px`,A,F,P=e[15][e[81]],E=[];for(let C=0;C<P.length;C+=1)E[C]=ol(nl(e,P,C));return{c(){t=p("div");for(let C=0;C<E.length;C+=1)E[C].c();l=b(),n=p("div"),f=L(o),i=b(),s(n,"class","svelte-y4ofk3"),s(t,"class","panel svelte-y4ofk3"),w(t,"width",y,!1),w(t,"height",h,!1),w(t,"top",d,!1),w(t,"left",N,!1),w(t,"background",e[17][e[81]],!1)},m(C,v){Ke(C,t,v);for(let k=0;k<E.length;k+=1)E[k].m(t,null);r(t,l),r(t,n),r(n,f),r(t,i),A||(F=m(t,"click",e[30](e[81])),A=!0)},p(C,v){if(e=C,v[0]&6324224){P=e[15][e[81]];let k;for(k=0;k<P.length;k+=1){const X=nl(e,P,k);E[k]?E[k].p(X,v):(E[k]=ol(X),E[k].c(),E[k].m(t,l))}for(;k<E.length;k+=1)E[k].d(1);E.length=P.length}v[0]&131072&&w(t,"background",e[17][e[81]],!1)},d(C){C&&ke(t),tt(E,C),A=!1,F()}}}function rl(e){let t,l=`${Te+1}px`,n=`${e[18]/e[1]*2+1}px`,o=`${e[86]*2}px`,f=`${e[81]*Te}px`,i,y;function h(){return e[53](e[86])}return{c(){t=p("div"),s(t,"class","grid svelte-y4ofk3"),w(t,"width",l,!1),w(t,"height",n,!1),w(t,"top",o,!1),w(t,"left",f,!1)},m(d,N){Ke(d,t,N),i||(y=m(t,"click",h),i=!0)},p(d,N){e=d,N[0]&2&&n!==(n=`${e[18]/e[1]*2+1}px`)&&w(t,"height",n,!1),N[0]&16384&&o!==(o=`${e[86]*2}px`)&&w(t,"top",o,!1)},d(d){d&&ke(t),i=!1,y()}}}function il(e){let t,l=e[14],n=[];for(let o=0;o<l.length;o+=1)n[o]=rl(tl(e,l,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=kl()},m(o,f){for(let i=0;i<n.length;i+=1)n[i].m(o,f);Ke(o,t,f)},p(o,f){if(f[0]&17055762){l=o[14];let i;for(i=0;i<l.length;i+=1){const y=tl(o,l,i);n[i]?n[i].p(y,f):(n[i]=rl(y),n[i].c(),n[i].m(t.parentNode,t))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(o){tt(n,o),o&&ke(t)}}}function fl(e){let t,l=`${e[10]*2}px`,n=`${Te*18}px`;return{c(){t=p("div"),s(t,"class","cursor_play svelte-y4ofk3"),w(t,"top",l,!1),w(t,"width",n,!1)},m(o,f){Ke(o,t,f)},p(o,f){f[0]&1024&&l!==(l=`${o[10]*2}px`)&&w(t,"top",l,!1)},d(o){o&&ke(t)}}}function al(e){let t,l=`${Te+1}px`,n=`${Tt}px`,o=`${e[82]*2-Tt/2}px`,f=`${e[81]*Te}px`;return{c(){t=p("div"),s(t,"class","note svelte-y4ofk3"),w(t,"width",l,!1),w(t,"height",n,!1),w(t,"top",o,!1),w(t,"left",f,!1),w(t,"background",e[21][e[22][e[81]]],!1)},m(i,y){Ke(i,t,y)},p(i,y){y[0]&65536&&o!==(o=`${i[82]*2-Tt/2}px`)&&w(t,"top",o,!1)},d(i){i&&ke(t)}}}function cl(e){let t,l=e[79],n=[];for(let o=0;o<l.length;o+=1)n[o]=al($t(e,l,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=kl()},m(o,f){for(let i=0;i<n.length;i+=1)n[i].m(o,f);Ke(o,t,f)},p(o,f){if(f[0]&6356992){l=o[79];let i;for(i=0;i<l.length;i+=1){const y=$t(o,l,i);n[i]?n[i].p(y,f):(n[i]=al(y),n[i].c(),n[i].m(t.parentNode,t))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(o){tt(n,o),o&&ke(t)}}}function ul(e){let t,l,n,o,f,i,y;return{c(){t=p("div"),l=L(e[7]),s(t,"class","message svelte-y4ofk3"),w(t,"background",e[8],!1)},m(h,d){Ke(h,t,d),r(t,l),f=!0,i||(y=m(t,"click",e[56]),i=!0)},p(h,d){(!f||d[0]&128)&&Je(l,h[7]),d[0]&256&&w(t,"background",h[8],!1)},i(h){f||(lt(()=>{o&&o.end(1),n=ql(t,Zt,{duration:100}),n.start()}),f=!0)},o(h){n&&n.invalidate(),o=Jl(t,Zt,{duration:300}),f=!1},d(h){h&&ke(t),h&&o&&o.end(),i=!1,y()}}}function Ql(e){let t,l,n,o=e[4]+1+"",f,i,y=(e[0]-e[4]*192)/(e[18]/e[1])+1+"",h,d,N,A,F=Math.round(e[13])+"",P,E,C,v,k,X,ze,Be,be,Me,B,V,j,T,Y,Z,O,g,x,z,oe,je,W,Ne,G,Ie,se,ye,re,ge,H,we,$,Ye,pe,de,De,_t,M,Ge,me,nt,Ae,ht,_e,yt,Ee,Pe,ot,I,qe,He,Se,Qe=`${(e[0]-e[4]*e[18])*2}px`,Ft=`${Te*18}px`,gt,Ot=`${e[18]*2+10}px`,mt,ie,vt,We=e[11].toFixed(2)+"",st,kt,fe,bt,Xe=e[12].toFixed(2)+"",rt,wt,ae,c,_,S,K,Q,ue,R,q,Fe,it,Oe,ft,Ce,ve,at,he,ce,Rt,Yt,Ze=e[2],ee=[];for(let a=0;a<Ze.length;a+=1)ee[a]=sl(ll(e,Ze,a));let xe=e[16],te=[];for(let a=0;a<xe.length;a+=1)te[a]=il(el(e,xe,a));let le=e[10]>=0&&fl(e),$e=e[16],ne=[];for(let a=0;a<$e.length;a+=1)ne[a]=cl(xt(e,$e,a));let J=e[7]!==""&&ul(e);return{c(){t=p("main"),l=p("div"),n=p("div"),f=L(o),i=L("\u5C0F\u7BC0\u76EE, "),h=L(y),d=L("/"),N=L(e[1]),A=L(" ("),P=L(F),E=L("f)"),C=b(),v=p("div"),k=p("input"),ze=b(),Be=p("label"),Be.textContent="\u3053\u306E\u5C0F\u7BC0\u3067\u8A2D\u5B9A\u5909\u66F4",be=L(` |\r
      `),Me=p("label"),Me.textContent="\u958B\u59CB\u30D5\u30EC\u30FC\u30E0:",B=b(),V=p("input"),j=b(),T=p("label"),T.textContent="BPM:",Y=b(),Z=p("input"),O=b(),g=p("div"),x=p("input"),z=b(),oe=p("input"),je=b(),W=p("input"),Ne=b(),G=p("input"),Ie=b(),se=p("input"),ye=b(),re=p("input"),ge=b(),H=p("input"),we=b(),$=p("input"),Ye=b(),pe=p("input"),de=b(),De=p("input"),_t=b(),M=p("input"),Ge=b(),me=p("input"),nt=b(),Ae=p("input"),ht=b(),_e=p("input"),yt=b(),Ee=p("div"),Pe=p("div");for(let a=0;a<ee.length;a+=1)ee[a].c();ot=b(),I=p("div");for(let a=0;a<te.length;a+=1)te[a].c();qe=b(),le&&le.c(),He=b(),Se=p("div"),gt=b();for(let a=0;a<ne.length;a+=1)ne[a].c();mt=b(),ie=p("div"),vt=L("\u97F3\u91CF("),st=L(We),kt=L(`)\r
      `),fe=p("input"),bt=L(`\r
      \u901F\u5EA6(`),rt=L(Xe),wt=L(`)\r
      `),ae=p("input"),c=b(),_=p("div"),_.textContent="\u753B\u9762\u306B\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF/\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u307F",S=b(),K=p("div"),Q=p("input"),ue=b(),R=p("input"),q=b(),Fe=p("input"),it=b(),Oe=p("div"),J&&J.c(),ft=b(),Ce=p("footer"),ve=p("a"),ve.textContent="\u4F7F\u7528\u3057\u3066\u3044\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u30E9\u30A4\u30BB\u30F3\u30B9\u8868\u793A",at=L(` |\r
      `),he=p("a"),he.textContent=`Pun\u25C7Pane Editor Ver.${El}`,s(k,"type","checkbox"),k.checked=X=e[6]===e[4],s(k,"id","fix"),s(Be,"for","fix"),s(Be,"class","svelte-y4ofk3"),s(Me,"for","begin_frame"),s(Me,"class","svelte-y4ofk3"),s(V,"type","number"),V.value=e[5],s(V,"id","begin_frame"),s(V,"class","svelte-y4ofk3"),s(T,"for","bpm"),s(T,"class","svelte-y4ofk3"),s(Z,"type","number"),Z.value=e[3],s(Z,"step","0.01"),s(Z,"id","bpm"),s(Z,"class","svelte-y4ofk3"),s(v,"class","main_input svelte-y4ofk3"),s(x,"type","button"),x.value="4",s(x,"title","1\u30AD\u30FC: \u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\u9593\u9694\u30924\u5206\u306B\u5909\u66F4"),s(x,"class","svelte-y4ofk3"),U(x,"selected",e[1]===4),s(oe,"type","button"),oe.value="8",s(oe,"title","2\u30AD\u30FC: \u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\u9593\u9694\u30928\u5206\u306B\u5909\u66F4"),s(oe,"class","svelte-y4ofk3"),U(oe,"selected",e[1]===8),s(W,"type","button"),W.value="16",s(W,"title","3\u30AD\u30FC: \u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\u9593\u9694\u309216\u5206\u306B\u5909\u66F4"),s(W,"class","svelte-y4ofk3"),U(W,"selected",e[1]===16),s(G,"type","button"),G.value="32",s(G,"title","R\u30AD\u30FC: \u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\u9593\u9694\u309232\u5206\u306B\u5909\u66F4"),s(G,"class","svelte-y4ofk3"),U(G,"selected",e[1]===32),s(se,"type","button"),se.value="12",s(se,"title","4\u30AD\u30FC: \u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\u9593\u9694\u309212\u5206(8\u52063\u9023)\u306B\u5909\u66F4"),s(se,"class","svelte-y4ofk3"),U(se,"selected",e[1]===12),s(re,"type","button"),re.value="24",s(re,"title","5\u30AD\u30FC: \u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\u9593\u9694\u309224\u5206(16\u52063\u9023)\u306B\u5909\u66F4"),s(re,"class","svelte-y4ofk3"),U(re,"selected",e[1]===24),s(H,"type","button"),H.value="48",s(H,"title","6\u30AD\u30FC: \u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\u9593\u9694\u309248\u5206(32\u52063\u9023)\u306B\u5909\u66F4"),s(H,"class","svelte-y4ofk3"),U(H,"selected",e[1]===48),s($,"type","button"),$.value="\u2190",s($,"title","\u5DE6\u77E2\u5370\u30AD\u30FC: \u524D\u306E\u5C0F\u7BC0\u306B\u79FB\u52D5"),s($,"class","svelte-y4ofk3"),s(pe,"type","button"),pe.value="\u2191",s(pe,"title","\u4E0A\u77E2\u5370/E/B: \u30AB\u30FC\u30BD\u30EB\u3092\u4E0A\u306B\u79FB\u52D5"),s(pe,"class","svelte-y4ofk3"),s(De,"type","button"),De.value="\u2193",s(De,"title","\u4E0B\u77E2\u5370/D/\u30B9\u30DA\u30FC\u30B9: \u30AB\u30FC\u30BD\u30EB\u3092\u4E0B\u306B\u79FB\u52D5"),s(De,"class","svelte-y4ofk3"),s(M,"type","button"),M.value="\u2192",s(M,"title","\u53F3\u77E2\u5370\u30AD\u30FC: \u6B21\u306E\u5C0F\u7BC0\u306B\u79FB\u52D5"),s(M,"class","svelte-y4ofk3"),s(me,"type","button"),me.value="BS",s(me,"title","Backspace: \u30AB\u30FC\u30BD\u30EB\u3092\u524D\u306B\u79FB\u52D5\u3057\u3066\u30D1\u30CD\u30EB\u3092\u524A\u9664"),s(me,"class","svelte-y4ofk3"),s(Ae,"type","button"),Ae.value="DEL",s(Ae,"title","Delete: \u30AB\u30FC\u30BD\u30EB\u306E\u3042\u308B\u884C\u306E\u30D1\u30CD\u30EB\u3092\u524A\u9664"),s(Ae,"class","svelte-y4ofk3"),s(_e,"type","button"),_e.value="Enter",s(_e,"title","Enter: \u66F2\u518D\u751F\u306E\u958B\u59CB/\u505C\u6B62"),s(_e,"class","svelte-y4ofk3"),s(g,"class","main_buttons svelte-y4ofk3"),s(Pe,"class","panels svelte-y4ofk3"),s(Pe,"style",`left: ${Te*18+20}px; width: ${Ue*5}px;`),s(Se,"class","cursor svelte-y4ofk3"),w(Se,"top",Qe,!1),w(Se,"width",Ft,!1),s(I,"class","notes svelte-y4ofk3"),s(Ee,"class","punpane_editor svelte-y4ofk3"),w(Ee,"height",Ot,!1),s(fe,"type","range"),s(fe,"min","0"),s(fe,"max","1"),s(fe,"step","0.01"),s(ae,"type","range"),s(ae,"min","0.1"),s(ae,"max","1.5"),s(ae,"step","0.1"),s(ie,"class","music_control svelte-y4ofk3"),s(_,"class","drop_area svelte-y4ofk3"),U(_,"dragover",e[9]),s(Q,"type","button"),Q.value="\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u304B\u3089\u8AAD\u307F\u8FBC\u307F",s(Q,"class","svelte-y4ofk3"),s(R,"type","button"),R.value="\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u4FDD\u5B58",s(R,"class","svelte-y4ofk3"),s(Fe,"type","button"),Fe.value="dos\u306E\u4FDD\u5B58",s(Fe,"class","svelte-y4ofk3"),s(K,"class","save_buttons svelte-y4ofk3"),s(Oe,"class","message_container svelte-y4ofk3"),s(ve,"href","./thirdparty_license.txt"),s(ve,"target","_blank"),s(ve,"rel","noopener noreferrer"),s(ve,"class","svelte-y4ofk3"),s(he,"href","https://github.com/suzme/punpane-editor"),s(he,"target","_blank"),s(he,"rel","noopener noreferrer"),s(he,"class","svelte-y4ofk3"),s(Ce,"class","svelte-y4ofk3"),s(l,"class","container svelte-y4ofk3"),U(l,"dragover",e[9]),w(l,"width",`${Te*18+20+Ue*5}px`,!1)},m(a,D){Ke(a,t,D),r(t,l),r(l,n),r(n,f),r(n,i),r(n,h),r(n,d),r(n,N),r(n,A),r(n,P),r(n,E),r(l,C),r(l,v),r(v,k),r(v,ze),r(v,Be),r(v,be),r(v,Me),r(v,B),r(v,V),r(v,j),r(v,T),r(v,Y),r(v,Z),r(l,O),r(l,g),r(g,x),r(g,z),r(g,oe),r(g,je),r(g,W),r(g,Ne),r(g,G),r(g,Ie),r(g,se),r(g,ye),r(g,re),r(g,ge),r(g,H),r(g,we),r(g,$),r(g,Ye),r(g,pe),r(g,de),r(g,De),r(g,_t),r(g,M),r(g,Ge),r(g,me),r(g,nt),r(g,Ae),r(g,ht),r(g,_e),r(l,yt),r(l,Ee),r(Ee,Pe);for(let u=0;u<ee.length;u+=1)ee[u].m(Pe,null);r(Ee,ot),r(Ee,I);for(let u=0;u<te.length;u+=1)te[u].m(I,null);r(I,qe),le&&le.m(I,null),r(I,He),r(I,Se),r(I,gt);for(let u=0;u<ne.length;u+=1)ne[u].m(I,null);r(l,mt),r(l,ie),r(ie,vt),r(ie,st),r(ie,kt),r(ie,fe),Dt(fe,e[11]),r(ie,bt),r(ie,rt),r(ie,wt),r(ie,ae),Dt(ae,e[12]),r(l,c),r(l,_),r(l,S),r(l,K),r(K,Q),r(K,ue),r(K,R),r(K,q),r(K,Fe),r(l,it),r(l,Oe),J&&J.m(Oe,null),r(l,ft),r(l,Ce),r(Ce,ve),r(Ce,at),r(Ce,he),ce=!0,Rt||(Yt=[m(window,"beforeunload",e[47]),m(window,"keydown",e[45]),m(window,"wheel",e[46]),m(window,"drop",e[44]),m(window,"dragover",e[42]),m(window,"dragleave",e[43]),m(k,"change",e[39]),m(V,"change",e[40]),m(Z,"change",e[41]),m(x,"click",e[29](4)),m(oe,"click",e[29](8)),m(W,"click",e[29](16)),m(G,"click",e[29](32)),m(se,"click",e[29](12)),m(re,"click",e[29](24)),m(H,"click",e[29](48)),m($,"click",e[27]),m(pe,"click",e[25]),m(De,"click",e[26]),m(M,"click",e[28]),m(me,"click",e[32]),m(Ae,"click",e[31]),m(_e,"click",e[36]),m(fe,"change",e[54]),m(fe,"input",e[54]),m(fe,"input",e[37]),m(ae,"change",e[55]),m(ae,"input",e[55]),m(ae,"input",e[38]),m(Q,"click",e[34]),m(R,"click",e[33]),m(Fe,"click",e[35])],Rt=!0)},p(a,D){if((!ce||D[0]&16)&&o!==(o=a[4]+1+"")&&Je(f,o),(!ce||D[0]&19)&&y!==(y=(a[0]-a[4]*192)/(a[18]/a[1])+1+"")&&Je(h,y),(!ce||D[0]&2)&&Je(N,a[1]),(!ce||D[0]&8192)&&F!==(F=Math.round(a[13])+"")&&Je(P,F),(!ce||D[0]&80&&X!==(X=a[6]===a[4]))&&(k.checked=X),(!ce||D[0]&32&&V.value!==a[5])&&(V.value=a[5]),(!ce||D[0]&8&&Z.value!==a[3])&&(Z.value=a[3]),D[0]&2&&U(x,"selected",a[1]===4),D[0]&2&&U(oe,"selected",a[1]===8),D[0]&2&&U(W,"selected",a[1]===16),D[0]&2&&U(G,"selected",a[1]===32),D[0]&2&&U(se,"selected",a[1]===12),D[0]&2&&U(re,"selected",a[1]===24),D[0]&2&&U(H,"selected",a[1]===48),D[0]&1090158596){Ze=a[2];let u;for(u=0;u<Ze.length;u+=1){const Re=ll(a,Ze,u);ee[u]?ee[u].p(Re,D):(ee[u]=sl(Re),ee[u].c(),ee[u].m(Pe,null))}for(;u<ee.length;u+=1)ee[u].d(1);ee.length=Ze.length}if(D[0]&17121298){xe=a[16];let u;for(u=0;u<xe.length;u+=1){const Re=el(a,xe,u);te[u]?te[u].p(Re,D):(te[u]=il(Re),te[u].c(),te[u].m(I,qe))}for(;u<te.length;u+=1)te[u].d(1);te.length=xe.length}if(a[10]>=0?le?le.p(a,D):(le=fl(a),le.c(),le.m(I,He)):le&&(le.d(1),le=null),D[0]&17&&Qe!==(Qe=`${(a[0]-a[4]*a[18])*2}px`)&&w(Se,"top",Qe,!1),D[0]&6356992){$e=a[16];let u;for(u=0;u<$e.length;u+=1){const Re=xt(a,$e,u);ne[u]?ne[u].p(Re,D):(ne[u]=cl(Re),ne[u].c(),ne[u].m(I,null))}for(;u<ne.length;u+=1)ne[u].d(1);ne.length=$e.length}(!ce||D[0]&2048)&&We!==(We=a[11].toFixed(2)+"")&&Je(st,We),D[0]&2048&&Dt(fe,a[11]),(!ce||D[0]&4096)&&Xe!==(Xe=a[12].toFixed(2)+"")&&Je(rt,Xe),D[0]&4096&&Dt(ae,a[12]),D[0]&512&&U(_,"dragover",a[9]),a[7]!==""?J?(J.p(a,D),D[0]&128&&Kt(J,1)):(J=ul(a),J.c(),Kt(J,1),J.m(Oe,null)):J&&(jl(),Xt(J,1,1,()=>{J=null}),Il()),D[0]&512&&U(l,"dragover",a[9])},i(a){ce||(Kt(J),ce=!0)},o(a){Xt(J),ce=!1},d(a){a&&ke(t),tt(ee,a),tt(te,a),le&&le.d(),tt(ne,a),J&&J.d(),Rt=!1,Ve(Yt)}}}const El="20220704-1",pl=18,Ue=96,St=96,Te=20,Tt=6,Wl=100,dl=0,zt=200,Bt=160;function Xl(e,t,l){let n,o,f,i,y,h,d,N,A,F,P;const C=[0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3],v=[0,1,2,3,4,.5,1.5,2.5,3.5,.5,1.5,2.5,3.5,0,1,2,3,4],k=["#cccccc","#9999ff","#99ffff","#ffff99","#ff9966","#ffffff"],X=[1,2,5,3,4,1,2,3,4,1,2,3,4,1,2,5,3,4],ze="7890-UIOPJKL;NM<>/".split(""),Be="aa,ab,ac,ad,ae,ba,bb,bc,bd,ca,cb,cc,cd,da,db,dc,dd,de".split(","),be={success:"#99ccff",error:"#ffcccc"};let Me=1,B=0,V=16,j=[0],T=[zt],Y=[Bt],Z=null,O="",g=be.success,x=!1,z=new Array(pl).fill([]),oe,je=-1,W=1,Ne=1;const G=new AudioContext,Ie=G.createGain();Ie.connect(G.destination);let se,ye,re=!1,ge=!1;const H=c=>{l(7,O=""),ge&&Math.floor(c/192)!==Math.floor(B/192)&&setTimeout(I,0),l(0,B=c)},we=()=>H(B-3*64/V),$=()=>H(B+3*64/V),Ye=()=>H((n-1)*192),pe=()=>H((n+1)*192),de=c=>()=>{l(7,O=""),l(1,V=c),l(0,B=Math.floor(B/(192/c))*(192/c))},De=(c,_)=>{l(2,z[c]=[...z[c],_],z)},_t=(c,_)=>{l(2,z[c]=z[c].filter(S=>S!==_),z)},M=c=>()=>{l(7,O=""),z[c].includes(B)?_t(c,B):De(c,B),Z===null&&(Z=setTimeout(()=>{Z=null,$()},Wl))},Ge=()=>{l(7,O=""),l(2,z=z.map(c=>c.filter(_=>_!==B)))},me=()=>{we(),Ge()},nt=(c,_="\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002")=>{navigator.clipboard?(navigator.clipboard.writeText(c),l(7,O=_),l(8,g=be.success)):prompt("\u30B3\u30D4\u30FC\u3057\u3066\u4FDD\u5B58\u3057\u3066\u304F\u3060\u3055\u3044\u3002",c)},Ae=()=>JSON.stringify({panels:z,label_measures:j,begin_frames:T,bpms:Y,resolution:192,chart_num:Me,editor_version:El,save_data_version:0}),ht=()=>nt(Ae(),"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002"),_e=c=>{var S,K,Q,ue;let _;if(confirm("\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u73FE\u5728\u7DE8\u96C6\u4E2D\u306E\u30C7\u30FC\u30BF\u306F\u5931\u308F\u308C\u307E\u3059\u3002\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F")!==!1){try{_=JSON.parse(c)}catch(R){console.log(R),l(7,O="\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002"),l(8,g=be.error);return}l(2,z=(S=_.panels)!=null?S:new Array(pl).fill([])),l(48,j=(K=_.label_measures)!=null?K:[]),l(49,T=(Q=_.begin_frames)!=null?Q:[]),l(50,Y=(ue=_.bpms)!=null?ue:[]),Me=_.chart_num}},yt=()=>{if(navigator.clipboard)navigator.clipboard.readText().then(c=>_e(c));else{const c=prompt("\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002");c&&c!==""&&_e(c)}},Ee=()=>z.map((c,_)=>`|${Be[_]}_data=`+[...c.map(S=>{var it,Oe,ft,Ce,ve,at;const K=Math.floor(S/192),Q=Math.max(...j.filter(he=>K>=he)),ue=j.findIndex(he=>he===Q),R=(Oe=(it=j[ue])!=null?it:j[0])!=null?Oe:dl,q=(Ce=(ft=T[ue])!=null?ft:T[0])!=null?Ce:zt,Fe=(at=(ve=Y[ue])!=null?ve:Y[0])!=null?at:Bt;return Math.round((S-R*192)/192*4*60*60/Fe+q)})].sort().join(",")).join("")+"|",Pe=()=>nt(Ee(),"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306Bdos\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002"),ot=()=>{!ge||(l(10,je=((G.currentTime-oe)*h/60/4-.5)*192),je>192&&(qe(),I()),requestAnimationFrame(ot))},I=()=>{if(ge&&qe(),re){const _=((n-i-.5)*4*60*60/h+y-200)/60,S=_<0?-_:0;Ie.gain.value=W,ye=G.createBufferSource(),ye.buffer=se,ye.playbackRate.value=Ne,ye.connect(Ie),oe=G.currentTime+S,ye.start(oe+S,Math.max(_,0)),requestAnimationFrame(ot),ge=!0}else se?l(7,O="\u518D\u751F\u6E96\u5099\u304C\u672A\u5B8C\u4E86\u3067\u3059\u3002"):l(7,O="\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u304C\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"),l(8,g=be.error)},qe=()=>{ye.stop(),l(10,je=-1),ge=!1},He=()=>{ge?qe():I()},Se=()=>{Ie.gain.value=W},Qe=()=>{ye.playbackRate.value=Ne,ge&&I()},Ft=c=>{if(l(7,O=""),c.target.checked)l(48,j=[...j,n]),l(49,T=[...T,Math.round(d)]),l(50,Y=[...Y,h]);else{const _=f;l(48,j=j.filter((S,K)=>_!==K)),l(49,T=T.filter((S,K)=>_!==K)),l(50,Y=Y.filter((S,K)=>_!==K))}},gt=c=>{l(7,O="");const _=c.target.value;isNaN(_)||l(49,T[f]=parseFloat(_),T)},Ot=c=>{l(7,O="");const _=c.target.value;isNaN(_)||l(50,Y[f]=parseFloat(_),Y)},mt=c=>{c.preventDefault(),l(9,x=!0),l(7,O="")},ie=c=>{c.preventDefault(),l(9,x=!1),l(7,O="")},vt=c=>{if(c.stopPropagation(),c.preventDefault(),l(9,x=!1),l(7,O=""),!c.dataTransfer||!c.dataTransfer.files)return;const _=c.dataTransfer.files;if(_.length===0)return;const S=_[0];if(S.type.match(/^audio/)){re=!1;const K=new FileReader;K.onload=()=>{G.decodeAudioData(K.result,Q=>{se=Q,l(7,O="\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002"),l(8,g=be.success),re=!0})},K.readAsArrayBuffer(S)}else if(S.type==="text/plain"){const K=new FileReader;K.onload=()=>{_e(K.result)},K.readAsText(S)}else l(7,O="\u975E\u5BFE\u5FDC\u306E\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30D7\u3067\u3059("+S.type+")"),l(8,g=be.error)},We={ArrowUp:we,ArrowDown:$,ArrowLeft:Ye,ArrowRight:pe,KeyE:we,KeyD:$,KeyS:Ye,KeyF:pe,KeyB:we,Space:$,Digit1:de(4),Digit2:de(8),Digit3:de(16),Digit4:de(12),Digit5:de(24),Digit6:de(48),KeyR:de(32),Digit7:M(0),Digit8:M(1),Digit9:M(2),Digit0:M(3),Minus:M(4),KeyU:M(5),KeyI:M(6),KeyO:M(7),KeyP:M(8),KeyJ:M(9),KeyK:M(10),KeyL:M(11),Semicolon:M(12),KeyN:M(13),KeyM:M(14),Comma:M(15),Period:M(16),Slash:M(17),Delete:Ge,Backspace:me,Enter:He},st={},kt=c=>{if(c.target.type!=="number"){const _=c.ctrlKey?st:We;_[c.code]&&(_[c.code](),c.preventDefault())}},fe=c=>{c.deltaY>0?$():c.deltaY<0&&we()},bt=c=>{c.preventDefault(),c.returnValue="\u30DA\u30FC\u30B8\u3092\u79FB\u52D5\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F\u73FE\u5728\u7DE8\u96C6\u4E2D\u306E\u30C7\u30FC\u30BF\u306F\u5931\u308F\u308C\u307E\u3059\u3002"},Xe=c=>H(n*192+c);function rt(){W=Ht(this.value),l(11,W)}function wt(){Ne=Ht(this.value),l(12,Ne)}const ae=()=>l(7,O="");return e.$$.update=()=>{var c,_,S,K,Q,ue;e.$$.dirty[0]&1&&l(4,n=Math.floor(B/192)),e.$$.dirty[0]&16|e.$$.dirty[1]&131072&&l(52,o=Math.max(...j.filter(R=>n>=R))),e.$$.dirty[1]&2228224&&l(51,f=j.findIndex(R=>R===o)),e.$$.dirty[1]&1179648&&l(6,i=(_=(c=j[f])!=null?c:j[0])!=null?_:dl),e.$$.dirty[1]&1310720&&l(5,y=(K=(S=T[f])!=null?S:T[0])!=null?K:zt),e.$$.dirty[1]&1572864&&l(3,h=(ue=(Q=Y[f])!=null?Q:Y[0])!=null?ue:Bt),e.$$.dirty[0]&105&&l(13,d=(B-i*192)/192*4*60*60/h+y),e.$$.dirty[0]&5&&l(17,N=z.map((R,q)=>R.includes(B)?k[X[q]]:k[0])),e.$$.dirty[0]&20&&l(16,A=z.map(R=>R.map(q=>q-n*192).filter(q=>q>=0&&q<192))),e.$$.dirty[0]&5&&l(15,F=z.map(R=>R.map(q=>B-q).filter(q=>q>0&&q<=Ue))),e.$$.dirty[0]&2&&l(14,P=new Array(V).fill(0).map((R,q)=>192/V*q))},[B,V,z,h,n,y,i,O,g,x,je,W,Ne,d,P,F,A,N,192,C,v,k,X,ze,H,we,$,Ye,pe,de,M,Ge,me,ht,yt,Pe,He,Se,Qe,Ft,gt,Ot,mt,ie,vt,kt,fe,bt,j,T,Y,f,o,Xe,rt,wt,ae]}class Zl extends Hl{constructor(t){super(),Gl(this,t,Xl,Ql,Kl,{},null,[-1,-1,-1,-1])}}new Zl({target:document.getElementById("app")});
