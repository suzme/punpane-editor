(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();function rt(){}const zt=e=>e;function bl(e){return e()}function xt(){return Object.create(null)}function Be(e){e.forEach(bl)}function Ot(e){return typeof e=="function"}function Rl(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Sl(e){return Object.keys(e).length===0}const vl=typeof window<"u";let wl=vl?()=>window.performance.now():()=>Date.now(),Vt=vl?e=>requestAnimationFrame(e):rt;const st=new Set;function kl(e){st.forEach(t=>{t.c(e)||(st.delete(t),t.f())}),st.size!==0&&Vt(kl)}function Nl(e){let t;return st.size===0&&Vt(kl),{promise:new Promise(l=>{st.add(t={c:e,f:l})}),abort(){st.delete(t)}}}function i(e,t){e.appendChild(t)}function Dl(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Fl(e){const t=_("style");return Ll(Dl(e),t),t.sheet}function Ll(e,t){return i(e.head||e,t),t.sheet}function Ke(e,t,l){e.insertBefore(t,l||null)}function ue(e){e.parentNode&&e.parentNode.removeChild(e)}function it(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function _(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function N(){return B(" ")}function Al(){return B("")}function b(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function s(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Mt(e){return e===""?null:+e}function Ol(e){return Array.from(e.childNodes)}function Re(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function lt(e,t){e.value=t??""}function g(e,t,l,n){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}function J(e,t,l){e.classList[l?"add":"remove"](t)}function Tl(e,t,{bubbles:l=!1,cancelable:n=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,l,n,t),o}const St=new Map;let Ft=0;function Bl(e){let t=5381,l=e.length;for(;l--;)t=(t<<5)-t^e.charCodeAt(l);return t>>>0}function jl(e,t){const l={stylesheet:Fl(t),rules:{}};return St.set(e,l),l}function El(e,t,l,n,o,r,f,m=0){const y=16.666/n;let h=`{
`;for(let c=0;c<=1;c+=y){const k=t+(l-t)*r(c);h+=c*100+`%{${f(k,1-k)}}
`}const E=h+`100% {${f(l,1-l)}}
}`,K=`__svelte_${Bl(E)}_${m}`,O=Dl(e),{stylesheet:R,rules:M}=St.get(O)||jl(O,e);M[K]||(M[K]=!0,R.insertRule(`@keyframes ${K} ${E}`,R.cssRules.length));const D=e.style.animation||"";return e.style.animation=`${D?`${D}, `:""}${K} ${n}ms linear ${o}ms 1 both`,Ft+=1,K}function Jt(e,t){const l=(e.style.animation||"").split(", "),n=l.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),o=l.length-n.length;o&&(e.style.animation=n.join(", "),Ft-=o,Ft||Il())}function Il(){Vt(()=>{Ft||(St.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&ue(t)}),St.clear())})}let Yt;function gt(e){Yt=e}const ot=[],el=[],Ct=[],tl=[],ql=Promise.resolve();let Ut=!1;function Jl(){Ut||(Ut=!0,ql.then(Kl))}function at(e){Ct.push(e)}const jt=new Set;let nt=0;function Kl(){if(nt!==0)return;const e=Yt;do{try{for(;nt<ot.length;){const t=ot[nt];nt++,gt(t),Ul(t.$$)}}catch(t){throw ot.length=0,nt=0,t}for(gt(null),ot.length=0,nt=0;el.length;)el.pop()();for(let t=0;t<Ct.length;t+=1){const l=Ct[t];jt.has(l)||(jt.add(l),l())}Ct.length=0}while(ot.length);for(;tl.length;)tl.pop()();Ut=!1,jt.clear(),gt(e)}function Ul(e){if(e.fragment!==null){e.update(),Be(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(at)}}let ht;function Ml(){return ht||(ht=Promise.resolve(),ht.then(()=>{ht=null})),ht}function Lt(e,t,l){e.dispatchEvent(Tl(`${t?"intro":"outro"}${l}`))}const Pt=new Set;let Se;function zl(){Se={r:0,c:[],p:Se}}function Vl(){Se.r||Be(Se.c),Se=Se.p}function Rt(e,t){e&&e.i&&(Pt.delete(e),e.i(t))}function ll(e,t,l,n){if(e&&e.o){if(Pt.has(e))return;Pt.add(e),Se.c.push(()=>{Pt.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}const Cl={duration:0};function Yl(e,t,l){const n={direction:"in"};let o=t(e,l,n),r=!1,f,m,y=0;function h(){f&&Jt(e,f)}function E(){const{delay:O=0,duration:R=300,easing:M=zt,tick:D=rt,css:c}=o||Cl;c&&(f=El(e,0,1,R,O,M,c,y++)),D(0,1);const k=wl()+O,Q=k+R;m&&m.abort(),r=!0,at(()=>Lt(e,!0,"start")),m=Nl(G=>{if(r){if(G>=Q)return D(1,0),Lt(e,!0,"end"),h(),r=!1;if(G>=k){const P=M((G-k)/R);D(P,1-P)}}return r})}let K=!1;return{start(){K||(K=!0,Jt(e),Ot(o)?(o=o(n),Ml().then(E)):E())},invalidate(){K=!1},end(){r&&(h(),r=!1)}}}function Gl(e,t,l){const n={direction:"out"};let o=t(e,l,n),r=!0,f;const m=Se;m.r+=1;function y(){const{delay:h=0,duration:E=300,easing:K=zt,tick:O=rt,css:R}=o||Cl;R&&(f=El(e,1,0,E,h,K,R));const M=wl()+h,D=M+E;at(()=>Lt(e,!1,"start")),Nl(c=>{if(r){if(c>=D)return O(0,1),Lt(e,!1,"end"),--m.r||Be(m.c),!1;if(c>=M){const k=K((c-M)/E);O(1-k,k)}}return r})}return Ot(o)?Ml().then(()=>{o=o(n),y()}):y(),{end(h){h&&o.tick&&o.tick(1,0),r&&(f&&Jt(e,f),r=!1)}}}function Hl(e,t,l,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,l),n||at(()=>{const f=e.$$.on_mount.map(bl).filter(Ot);e.$$.on_destroy?e.$$.on_destroy.push(...f):Be(f),e.$$.on_mount=[]}),r.forEach(at)}function Ql(e,t){const l=e.$$;l.fragment!==null&&(Be(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Wl(e,t){e.$$.dirty[0]===-1&&(ot.push(e),Jl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Xl(e,t,l,n,o,r,f,m=[-1]){const y=Yt;gt(e);const h=e.$$={fragment:null,ctx:[],props:r,update:rt,not_equal:o,bound:xt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(y?y.$$.context:[])),callbacks:xt(),dirty:m,skip_bound:!1,root:t.target||y.$$.root};f&&f(h.root);let E=!1;if(h.ctx=l?l(e,t.props||{},(K,O,...R)=>{const M=R.length?R[0]:O;return h.ctx&&o(h.ctx[K],h.ctx[K]=M)&&(!h.skip_bound&&h.bound[K]&&h.bound[K](M),E&&Wl(e,K)),O}):[],h.update(),E=!0,Be(h.before_update),h.fragment=n?n(h.ctx):!1,t.target){if(t.hydrate){const K=Ol(t.target);h.fragment&&h.fragment.l(K),K.forEach(ue)}else h.fragment&&h.fragment.c();t.intro&&Rt(e.$$.fragment),Hl(e,t.target,t.anchor,t.customElement),Kl()}gt(y)}class Zl{$destroy(){Ql(this,1),this.$destroy=rt}$on(t,l){if(!Ot(l))return rt;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!Sl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nl(e,{delay:t=0,duration:l=400,easing:n=zt}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:l,easing:n,css:r=>`opacity: ${r*o}`}}const dt={"18p":{panel_num:18,panel_width:96,panel_height:96,note_width:20,note_height:6,panel_top:[0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3],panel_left:[0,1,2,3,4,.5,1.5,2.5,3.5,.5,1.5,2.5,3.5,0,1,2,3,4],colors:["#cccccc","#9999ff","#99ffff","#ffff99","#ff9966","#ffffff"],panel_color_def:[1,2,5,3,4,1,2,3,4,1,2,3,4,1,2,5,3,4],names:"7890-UIOPJKL;NM<>/".split(""),dos_chara:"aa,ab,ac,ad,ae,ba,bb,bc,bd,ca,cb,cc,cd,da,db,dc,dd,de".split(","),key_config:"Digit7,Digit8,Digit9,Digit0,Minus,KeyU,KeyI,KeyO,KeyP,KeyJ,KeyK,KeyL,Semicolon,KeyN,KeyM,Comma,Period,Slash".split(",")},"9t":{panel_num:9,panel_width:96,panel_height:96,note_width:30,note_height:6,panel_top:[0,0,0,1,1,1,2,2,2],panel_left:[0,1,2,0,1,2,0,1,2],colors:["#cccccc","#9999ff","#ff9999","#99ff99"],panel_color_def:[1,1,1,2,3,2,1,1,1],names:"789456123".split(""),dos_chara:"left,down,up,right,space,sleft,sdown,sup,sright".split(","),key_config:"Numpad7,Numpad8,Numpad9,Numpad4,Numpad5,Numpad6,Numpad1,Numpad2,Numpad3".split(",")}};function ol(e,t,l){const n=e.slice();return n[80]=t[l],n[82]=l,n}function sl(e,t,l){const n=e.slice();return n[83]=t[l],n[85]=l,n}function il(e,t,l){const n=e.slice();return n[80]=t[l],n[82]=l,n}function rl(e,t,l){const n=e.slice();return n[87]=t[l],n}function al(e,t,l){const n=e.slice();return n[90]=t[l],n[82]=l,n}function fl(e,t,l){const n=e.slice();return n[92]=t[l],n}function ul(e){let t,l=`${e[0].panel_width-e[92]}px`,n=`${e[0].panel_height-e[92]}px`;return{c(){t=_("div"),s(t,"class","panel_back svelte-2scaft"),g(t,"width",l),g(t,"height",n),g(t,"background",e[0].colors[e[0].panel_color_def[e[82]]])},m(o,r){Ke(o,t,r)},p(o,r){r[0]&262145&&l!==(l=`${o[0].panel_width-o[92]}px`)&&g(t,"width",l),r[0]&262145&&n!==(n=`${o[0].panel_height-o[92]}px`)&&g(t,"height",n),r[0]&1&&g(t,"background",o[0].colors[o[0].panel_color_def[o[82]]])},d(o){o&&ue(t)}}}function cl(e){let t,l,n,o=e[0].names[e[82]]+"",r,f,m=`${e[0].panel_width+1}px`,y=`${e[0].panel_height+1}px`,h=`${e[0].panel_top[e[82]]*e[0].panel_height}px`,E=`${e[0].panel_left[e[82]]*e[0].panel_width}px`,K,O,R=e[18][e[82]],M=[];for(let D=0;D<R.length;D+=1)M[D]=ul(fl(e,R,D));return{c(){t=_("div");for(let D=0;D<M.length;D+=1)M[D].c();l=N(),n=_("div"),r=B(o),f=N(),s(n,"class","svelte-2scaft"),s(t,"class","panel svelte-2scaft"),g(t,"width",m),g(t,"height",y),g(t,"top",h),g(t,"left",E),g(t,"background",e[20][e[82]])},m(D,c){Ke(D,t,c);for(let k=0;k<M.length;k+=1)M[k].m(t,null);i(t,l),i(t,n),i(n,r),i(t,f),K||(O=b(t,"click",e[28](e[82])),K=!0)},p(D,c){if(e=D,c[0]&262145){R=e[18][e[82]];let k;for(k=0;k<R.length;k+=1){const Q=fl(e,R,k);M[k]?M[k].p(Q,c):(M[k]=ul(Q),M[k].c(),M[k].m(t,l))}for(;k<M.length;k+=1)M[k].d(1);M.length=R.length}c[0]&1&&o!==(o=e[0].names[e[82]]+"")&&Re(r,o),c[0]&1&&m!==(m=`${e[0].panel_width+1}px`)&&g(t,"width",m),c[0]&1&&y!==(y=`${e[0].panel_height+1}px`)&&g(t,"height",y),c[0]&1&&h!==(h=`${e[0].panel_top[e[82]]*e[0].panel_height}px`)&&g(t,"top",h),c[0]&1&&E!==(E=`${e[0].panel_left[e[82]]*e[0].panel_width}px`)&&g(t,"left",E),c[0]&1048576&&g(t,"background",e[20][e[82]])},d(D){D&&ue(t),it(M,D),K=!1,O()}}}function pl(e){let t,l=`${e[0].note_width+1}px`,n=`${e[21]/e[2]*2+1}px`,o=`${e[87]*2}px`,r=`${e[82]*e[0].note_width}px`,f,m;function y(){return e[53](e[87])}return{c(){t=_("div"),s(t,"class","grid svelte-2scaft"),g(t,"width",l),g(t,"height",n),g(t,"top",o),g(t,"left",r)},m(h,E){Ke(h,t,E),f||(m=b(t,"click",y),f=!0)},p(h,E){e=h,E[0]&1&&l!==(l=`${e[0].note_width+1}px`)&&g(t,"width",l),E[0]&4&&n!==(n=`${e[21]/e[2]*2+1}px`)&&g(t,"height",n),E[0]&131072&&o!==(o=`${e[87]*2}px`)&&g(t,"top",o),E[0]&1&&r!==(r=`${e[82]*e[0].note_width}px`)&&g(t,"left",r)},d(h){h&&ue(t),f=!1,m()}}}function _l(e){let t,l=e[17],n=[];for(let o=0;o<l.length;o+=1)n[o]=pl(rl(e,l,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=Al()},m(o,r){for(let f=0;f<n.length;f+=1)n[f].m(o,r);Ke(o,t,r)},p(o,r){if(r[0]&6422597){l=o[17];let f;for(f=0;f<l.length;f+=1){const m=rl(o,l,f);n[f]?n[f].p(m,r):(n[f]=pl(m),n[f].c(),n[f].m(t.parentNode,t))}for(;f<n.length;f+=1)n[f].d(1);n.length=l.length}},d(o){it(n,o),o&&ue(t)}}}function hl(e){let t,l=`${e[13]*2}px`,n=`${e[0].note_width*e[0].panel_num}px`;return{c(){t=_("div"),s(t,"class","cursor_play svelte-2scaft"),g(t,"top",l),g(t,"width",n)},m(o,r){Ke(o,t,r)},p(o,r){r[0]&8192&&l!==(l=`${o[13]*2}px`)&&g(t,"top",l),r[0]&1&&n!==(n=`${o[0].note_width*o[0].panel_num}px`)&&g(t,"width",n)},d(o){o&&ue(t)}}}function dl(e){let t,l=`${e[0].note_width+1}px`,n=`${e[0].note_height}px`,o=`${e[83]*2-e[0].note_height/2}px`,r=`${e[82]*e[0].note_width}px`;return{c(){t=_("div"),s(t,"class","note svelte-2scaft"),g(t,"width",l),g(t,"height",n),g(t,"top",o),g(t,"left",r),g(t,"background",e[0].colors[e[0].panel_color_def[e[82]]])},m(f,m){Ke(f,t,m)},p(f,m){m[0]&1&&l!==(l=`${f[0].note_width+1}px`)&&g(t,"width",l),m[0]&1&&n!==(n=`${f[0].note_height}px`)&&g(t,"height",n),m[0]&524289&&o!==(o=`${f[83]*2-f[0].note_height/2}px`)&&g(t,"top",o),m[0]&1&&r!==(r=`${f[82]*f[0].note_width}px`)&&g(t,"left",r),m[0]&1&&g(t,"background",f[0].colors[f[0].panel_color_def[f[82]]])},d(f){f&&ue(t)}}}function gl(e){let t,l=e[80],n=[];for(let o=0;o<l.length;o+=1)n[o]=dl(sl(e,l,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=Al()},m(o,r){for(let f=0;f<n.length;f+=1)n[f].m(o,r);Ke(o,t,r)},p(o,r){if(r[0]&524289){l=o[80];let f;for(f=0;f<l.length;f+=1){const m=sl(o,l,f);n[f]?n[f].p(m,r):(n[f]=dl(m),n[f].c(),n[f].m(t.parentNode,t))}for(;f<n.length;f+=1)n[f].d(1);n.length=l.length}},d(o){it(n,o),o&&ue(t)}}}function ml(e){let t,l,n,o,r,f,m;return{c(){t=_("div"),l=B(e[10]),s(t,"class","message svelte-2scaft"),g(t,"background",e[11])},m(y,h){Ke(y,t,h),i(t,l),r=!0,f||(m=b(t,"click",e[57]),f=!0)},p(y,h){(!r||h[0]&1024)&&Re(l,y[10]),h[0]&2048&&g(t,"background",y[11])},i(y){r||(at(()=>{o&&o.end(1),n=Yl(t,nl,{duration:100}),n.start()}),r=!0)},o(y){n&&n.invalidate(),o=Gl(t,nl,{duration:300}),r=!1},d(y){y&&ue(t),y&&o&&o.end(),f=!1,m()}}}function $l(e){let t,l,n,o=e[6]+1+"",r,f,m=(e[1]-e[6]*192)/(e[21]/e[2])+1+"",y,h,E,K,O=Math.round(e[16])+"",R,M,D,c,k,Q,G,P,ye,T,I,S,je,F,be,U,j,W,Ie,re,Me,v,z,Fe,te,ce,le,pe,V,ve,Y,qe,ne,ae,fe,mt,_e,Je,he,yt,de,bt,we,Ue,ke,vt,Ne,ft,ie,ze,ge,De,Ve,wt,H,ut,ct,Ae,Ye=`${(e[1]-e[6]*e[21])*2}px`,Le=`${e[0].note_width*e[0].panel_num}px`,kt,Tt=`${e[21]*2+10}px`,Nt,oe,Dt,Ge=e[14].toFixed(2)+"",pt,At,se,Et,u=e[15].toFixed(2)+"",p,C,A,He,me,Kt,X,Ce,Qe,We,Gt,Xe,Ht,Ze,Qt,Ee,Wt,_t,Xt,$e,Oe,Zt,Te,L,Bt,$t,xe=e[3],Z=[];for(let a=0;a<xe.length;a+=1)Z[a]=cl(al(e,xe,a));let et=e[19],$=[];for(let a=0;a<et.length;a+=1)$[a]=_l(il(e,et,a));let x=e[13]>=0&&hl(e),tt=e[19],ee=[];for(let a=0;a<tt.length;a+=1)ee[a]=gl(ol(e,tt,a));let q=e[10]!==""&&ml(e);return{c(){t=_("main"),l=_("div"),n=_("div"),r=B(o),f=B("小節目, "),y=B(m),h=B("/"),E=B(e[2]),K=B(" ("),R=B(O),M=B("f)"),D=N(),c=_("div"),k=_("input"),G=N(),P=_("label"),P.textContent="この小節で設定変更",ye=B(` |\r
      `),T=_("label"),T.textContent="開始フレーム:",I=N(),S=_("input"),je=N(),F=_("label"),F.textContent="BPM:",be=N(),U=_("input"),j=B(` |\r
      `),W=_("input"),Ie=N(),re=_("label"),re.textContent="パネル表示を逆転",Me=N(),v=_("div"),z=_("input"),Fe=N(),te=_("input"),ce=N(),le=_("input"),pe=N(),V=_("input"),ve=N(),Y=_("input"),qe=N(),ne=_("input"),ae=N(),fe=_("input"),mt=N(),_e=_("input"),Je=N(),he=_("input"),yt=N(),de=_("input"),bt=N(),we=_("input"),Ue=N(),ke=_("input"),vt=N(),Ne=_("input"),ft=N(),ie=_("input"),ze=N(),ge=_("div"),De=_("div");for(let a=0;a<Z.length;a+=1)Z[a].c();wt=N(),H=_("div");for(let a=0;a<$.length;a+=1)$[a].c();ut=N(),x&&x.c(),ct=N(),Ae=_("div"),kt=N();for(let a=0;a<ee.length;a+=1)ee[a].c();Nt=N(),oe=_("div"),Dt=B("音量("),pt=B(Ge),At=B(`)\r
      `),se=_("input"),Et=B(`\r
      速度(`),p=B(u),C=B(`)\r
      `),A=_("input"),He=N(),me=_("div"),me.textContent="画面にファイルをドロップしてセーブデータ/音楽ファイルを読み込み",Kt=N(),X=_("div"),Ce=_("input"),Qe=N(),We=_("input"),Gt=N(),Xe=_("input"),Ht=N(),Ze=_("input"),Qt=B(`\r
      譜面番号`),Ee=_("input"),Wt=N(),_t=_("div"),q&&q.c(),Xt=N(),$e=_("footer"),Oe=_("a"),Oe.textContent="使用しているソフトウェアのライセンス表示",Zt=B(` |\r
      `),Te=_("a"),Te.textContent=`Pun◇Pane Editor Ver.${Pl}`,s(k,"type","checkbox"),k.checked=Q=e[8]===e[6],s(k,"id","fix"),s(P,"for","fix"),s(P,"class","svelte-2scaft"),s(T,"for","begin_frame"),s(T,"class","svelte-2scaft"),s(S,"type","number"),S.value=e[7],s(S,"id","begin_frame"),s(S,"class","svelte-2scaft"),s(F,"for","bpm"),s(F,"class","svelte-2scaft"),s(U,"type","number"),U.value=e[5],s(U,"step","0.01"),s(U,"min","0.01"),s(U,"id","bpm"),s(U,"class","svelte-2scaft"),s(W,"type","checkbox"),s(W,"id","panel_reverse"),s(re,"for","panel_reverse"),s(re,"title","Rキー: カーソルより前のパネルを表示するか後のパネルを表示するかの切り替え"),s(re,"class","svelte-2scaft"),s(c,"class","main_input svelte-2scaft"),s(z,"type","button"),z.value="4",s(z,"title","1キー: カーソル移動間隔を4分に変更"),s(z,"class","svelte-2scaft"),J(z,"selected",e[2]===4),s(te,"type","button"),te.value="8",s(te,"title","2キー: カーソル移動間隔を8分に変更"),s(te,"class","svelte-2scaft"),J(te,"selected",e[2]===8),s(le,"type","button"),le.value="16",s(le,"title","3キー: カーソル移動間隔を16分に変更"),s(le,"class","svelte-2scaft"),J(le,"selected",e[2]===16),s(V,"type","button"),V.value="32",s(V,"title","Rキー: カーソル移動間隔を32分に変更"),s(V,"class","svelte-2scaft"),J(V,"selected",e[2]===32),s(Y,"type","button"),Y.value="12",s(Y,"title","4キー: カーソル移動間隔を12分(8分3連)に変更"),s(Y,"class","svelte-2scaft"),J(Y,"selected",e[2]===12),s(ne,"type","button"),ne.value="24",s(ne,"title","5キー: カーソル移動間隔を24分(16分3連)に変更"),s(ne,"class","svelte-2scaft"),J(ne,"selected",e[2]===24),s(fe,"type","button"),fe.value="48",s(fe,"title","6キー: カーソル移動間隔を48分(32分3連)に変更"),s(fe,"class","svelte-2scaft"),J(fe,"selected",e[2]===48),s(_e,"type","button"),_e.value="←",s(_e,"title","左矢印キー: 前の小節に移動"),s(_e,"class","svelte-2scaft"),s(he,"type","button"),he.value="↑",s(he,"title","上矢印/E/B: カーソルを上に移動"),s(he,"class","svelte-2scaft"),s(de,"type","button"),de.value="↓",s(de,"title","下矢印/D/スペース: カーソルを下に移動"),s(de,"class","svelte-2scaft"),s(we,"type","button"),we.value="→",s(we,"title","右矢印キー: 次の小節に移動"),s(we,"class","svelte-2scaft"),s(ke,"type","button"),ke.value="BS",s(ke,"title","Backspace: カーソルを前に移動してパネルを削除"),s(ke,"class","svelte-2scaft"),s(Ne,"type","button"),Ne.value="DEL",s(Ne,"title","Delete: カーソルのある行のパネルを削除"),s(Ne,"class","svelte-2scaft"),s(ie,"type","button"),ie.value="Enter",s(ie,"title","Enter: 曲再生の開始/停止"),s(ie,"class","svelte-2scaft"),s(v,"class","main_buttons svelte-2scaft"),s(De,"class","panels svelte-2scaft"),s(De,"style",Ve=`left: ${e[0].note_width*e[0].panel_num+20}px; width: ${e[0].panel_width*5}px;`),s(Ae,"class","cursor svelte-2scaft"),g(Ae,"top",Ye),g(Ae,"width",Le),s(H,"class","notes svelte-2scaft"),s(ge,"class","punpane_editor svelte-2scaft"),g(ge,"height",Tt),s(se,"type","range"),s(se,"min","0"),s(se,"max","1"),s(se,"step","0.01"),s(A,"type","range"),s(A,"min","0.1"),s(A,"max","1.5"),s(A,"step","0.1"),s(oe,"class","music_control svelte-2scaft"),s(me,"class","drop_area svelte-2scaft"),J(me,"dragover",e[12]),s(Ce,"type","button"),Ce.value="新規作成",s(Ce,"class","svelte-2scaft"),s(We,"type","button"),We.value="クリップボードから読み込み",s(We,"class","svelte-2scaft"),s(Xe,"type","button"),Xe.value="セーブデータの保存",s(Xe,"class","svelte-2scaft"),s(Ze,"type","button"),Ze.value="dosの保存",s(Ze,"class","svelte-2scaft"),s(Ee,"type","number"),s(Ee,"min","1"),s(Ee,"class","svelte-2scaft"),s(X,"class","save_buttons svelte-2scaft"),s(_t,"class","message_container svelte-2scaft"),s(Oe,"href","./thirdparty_license.txt"),s(Oe,"target","_blank"),s(Oe,"rel","noopener noreferrer"),s(Oe,"class","svelte-2scaft"),s(Te,"href","https://github.com/suzme/punpane-editor"),s(Te,"target","_blank"),s(Te,"rel","noopener noreferrer"),s(Te,"class","svelte-2scaft"),s($e,"class","svelte-2scaft"),s(l,"class","container svelte-2scaft"),J(l,"dragover",e[12]),g(l,"width",`${e[0].note_width*e[0].panel_num+20+e[0].panel_width*5}px`)},m(a,w){Ke(a,t,w),i(t,l),i(l,n),i(n,r),i(n,f),i(n,y),i(n,h),i(n,E),i(n,K),i(n,R),i(n,M),i(l,D),i(l,c),i(c,k),i(c,G),i(c,P),i(c,ye),i(c,T),i(c,I),i(c,S),i(c,je),i(c,F),i(c,be),i(c,U),i(c,j),i(c,W),W.checked=e[4],i(c,Ie),i(c,re),i(l,Me),i(l,v),i(v,z),i(v,Fe),i(v,te),i(v,ce),i(v,le),i(v,pe),i(v,V),i(v,ve),i(v,Y),i(v,qe),i(v,ne),i(v,ae),i(v,fe),i(v,mt),i(v,_e),i(v,Je),i(v,he),i(v,yt),i(v,de),i(v,bt),i(v,we),i(v,Ue),i(v,ke),i(v,vt),i(v,Ne),i(v,ft),i(v,ie),i(l,ze),i(l,ge),i(ge,De);for(let d=0;d<Z.length;d+=1)Z[d].m(De,null);i(ge,wt),i(ge,H);for(let d=0;d<$.length;d+=1)$[d].m(H,null);i(H,ut),x&&x.m(H,null),i(H,ct),i(H,Ae),i(H,kt);for(let d=0;d<ee.length;d+=1)ee[d].m(H,null);i(l,Nt),i(l,oe),i(oe,Dt),i(oe,pt),i(oe,At),i(oe,se),lt(se,e[14]),i(oe,Et),i(oe,p),i(oe,C),i(oe,A),lt(A,e[15]),i(l,He),i(l,me),i(l,Kt),i(l,X),i(X,Ce),i(X,Qe),i(X,We),i(X,Gt),i(X,Xe),i(X,Ht),i(X,Ze),i(X,Qt),i(X,Ee),lt(Ee,e[9]),i(l,Wt),i(l,_t),q&&q.m(_t,null),i(l,Xt),i(l,$e),i($e,Oe),i($e,Zt),i($e,Te),L=!0,Bt||($t=[b(window,"beforeunload",e[46]),b(window,"keydown",e[44]),b(window,"wheel",e[45]),b(window,"drop",e[43]),b(window,"dragover",e[41]),b(window,"dragleave",e[42]),b(k,"change",e[38]),b(S,"change",e[39]),b(U,"change",e[40]),b(W,"change",e[52]),b(z,"click",e[27](4)),b(te,"click",e[27](8)),b(le,"click",e[27](16)),b(V,"click",e[27](32)),b(Y,"click",e[27](12)),b(ne,"click",e[27](24)),b(fe,"click",e[27](48)),b(_e,"click",e[25]),b(he,"click",e[23]),b(de,"click",e[24]),b(we,"click",e[26]),b(ke,"click",e[30]),b(Ne,"click",e[29]),b(ie,"click",e[35]),b(se,"change",e[54]),b(se,"input",e[54]),b(se,"input",e[36]),b(A,"change",e[55]),b(A,"input",e[55]),b(A,"input",e[37]),b(Ce,"click",e[31]),b(We,"click",e[33]),b(Xe,"click",e[32]),b(Ze,"click",e[34]),b(Ee,"input",e[56])],Bt=!0)},p(a,w){if((!L||w[0]&64)&&o!==(o=a[6]+1+"")&&Re(r,o),(!L||w[0]&70)&&m!==(m=(a[1]-a[6]*192)/(a[21]/a[2])+1+"")&&Re(y,m),(!L||w[0]&4)&&Re(E,a[2]),(!L||w[0]&65536)&&O!==(O=Math.round(a[16])+"")&&Re(R,O),(!L||w[0]&320&&Q!==(Q=a[8]===a[6]))&&(k.checked=Q),(!L||w[0]&128&&S.value!==a[7])&&(S.value=a[7]),(!L||w[0]&32&&U.value!==a[5])&&(U.value=a[5]),w[0]&16&&(W.checked=a[4]),(!L||w[0]&4)&&J(z,"selected",a[2]===4),(!L||w[0]&4)&&J(te,"selected",a[2]===8),(!L||w[0]&4)&&J(le,"selected",a[2]===16),(!L||w[0]&4)&&J(V,"selected",a[2]===32),(!L||w[0]&4)&&J(Y,"selected",a[2]===12),(!L||w[0]&4)&&J(ne,"selected",a[2]===24),(!L||w[0]&4)&&J(fe,"selected",a[2]===48),w[0]&269746185){xe=a[3];let d;for(d=0;d<xe.length;d+=1){const Pe=al(a,xe,d);Z[d]?Z[d].p(Pe,w):(Z[d]=cl(Pe),Z[d].c(),Z[d].m(De,null))}for(;d<Z.length;d+=1)Z[d].d(1);Z.length=xe.length}if((!L||w[0]&1&&Ve!==(Ve=`left: ${a[0].note_width*a[0].panel_num+20}px; width: ${a[0].panel_width*5}px;`))&&s(De,"style",Ve),w[0]&6946885){et=a[19];let d;for(d=0;d<et.length;d+=1){const Pe=il(a,et,d);$[d]?$[d].p(Pe,w):($[d]=_l(Pe),$[d].c(),$[d].m(H,ut))}for(;d<$.length;d+=1)$[d].d(1);$.length=et.length}if(a[13]>=0?x?x.p(a,w):(x=hl(a),x.c(),x.m(H,ct)):x&&(x.d(1),x=null),w[0]&66&&Ye!==(Ye=`${(a[1]-a[6]*a[21])*2}px`)&&g(Ae,"top",Ye),w[0]&1&&Le!==(Le=`${a[0].note_width*a[0].panel_num}px`)&&g(Ae,"width",Le),w[0]&524289){tt=a[19];let d;for(d=0;d<tt.length;d+=1){const Pe=ol(a,tt,d);ee[d]?ee[d].p(Pe,w):(ee[d]=gl(Pe),ee[d].c(),ee[d].m(H,null))}for(;d<ee.length;d+=1)ee[d].d(1);ee.length=tt.length}(!L||w[0]&16384)&&Ge!==(Ge=a[14].toFixed(2)+"")&&Re(pt,Ge),w[0]&16384&&lt(se,a[14]),(!L||w[0]&32768)&&u!==(u=a[15].toFixed(2)+"")&&Re(p,u),w[0]&32768&&lt(A,a[15]),(!L||w[0]&4096)&&J(me,"dragover",a[12]),w[0]&512&&Mt(Ee.value)!==a[9]&&lt(Ee,a[9]),a[10]!==""?q?(q.p(a,w),w[0]&1024&&Rt(q,1)):(q=ml(a),q.c(),Rt(q,1),q.m(_t,null)):q&&(zl(),ll(q,1,1,()=>{q=null}),Vl()),(!L||w[0]&4096)&&J(l,"dragover",a[12]),w[0]&1&&g(l,"width",`${a[0].note_width*a[0].panel_num+20+a[0].panel_width*5}px`)},i(a){L||(Rt(q),L=!0)},o(a){ll(q),L=!1},d(a){a&&ue(t),it(Z,a),it($,a),x&&x.d(),it(ee,a),q&&q.d(),Bt=!1,Be($t)}}}const Pl="20230215-0",xl=100,yl=0,It=200,qt=160;function en(e,t,l){let n,o,r,f,m,y,h,E,K,O,R;const D={success:"#99ccff",error:"#ffcccc"};let c={};const Q=new URL(document.location).searchParams.get("key");Q&&dt[Q]?(c={...dt[Q]},c.key=Q):(c={...dt["18p"]},c.key="18p");let G=1,P=0,ye=16,T=[0],I=[It],S=[qt],je=null,F="",be=D.success,U=!1,j=new Array(c.panel_num).fill([]),W,Ie,re=-1,Me=1,v=1;const z=new AudioContext,Fe=z.createGain();Fe.connect(z.destination);let te,ce,le=!1,pe=!1;const V=u=>{l(10,F=""),pe&&Math.floor(u/192)!==Math.floor(P/192)&&setTimeout(ie,0),l(1,P=u)},ve=()=>V(P-3*64/ye),Y=()=>V(P+3*64/ye),qe=()=>V((n-1)*192),ne=()=>V((n+1)*192),ae=u=>()=>{l(10,F=""),l(2,ye=u),l(1,P=Math.floor(P/(192/u))*(192/u))},fe=(u,p)=>{l(3,j[u]=[...j[u],p],j)},mt=(u,p)=>{l(3,j[u]=j[u].filter(C=>C!==p),j)},_e=u=>()=>{l(10,F=""),j[u].includes(P)?mt(u,P):fe(u,P),je===null&&(je=setTimeout(()=>{je=null,Y()},xl))},Je=()=>{l(10,F=""),l(3,j=j.map(u=>u.filter(p=>p!==P)))},he=()=>{ve(),Je()},yt=()=>{confirm("現在編集中のデータは失われます。よろしいですか？")!==!1&&(l(3,j=new Array(c.panel_num).fill([])),l(47,T=[]),l(48,I=[]),l(49,S=[]),l(9,G=1),l(1,P=0),l(10,F=""))},de=(u,p="クリップボードにコピーしました。")=>{navigator.clipboard?(navigator.clipboard.writeText(u),l(10,F=p),l(11,be=D.success)):prompt("コピーして保存してください。",u)},bt=()=>JSON.stringify({key:c.key,panels:j,label_measures:T,begin_frames:I,bpms:S,resolution:192,chart_num:G,editor_version:Pl,save_data_version:1}),we=()=>de(bt(),"クリップボードにセーブデータをコピーしました。"),Ue=u=>{let p;if(confirm("セーブデータを読み込むと現在編集中のデータは失われます。よろしいですか？")!==!1){try{p=JSON.parse(u)}catch(C){console.log(C),l(10,F="セーブデータの読み込みに失敗しました。"),l(11,be=D.error);return}p.key?(l(0,c={...dt[p.key]}),l(0,c.key=p.key,c)):(l(0,c={...dt["18p"]}),l(0,c.key="18p",c)),l(1,P=0),l(3,j=p.panels??new Array(c.panel_num).fill([])),l(47,T=p.label_measures??[]),l(48,I=p.begin_frames??[]),l(49,S=p.bpms??[]),l(9,G=p.chart_num),l(10,F="セーブデータを読み込みました。")}},ke=()=>{if(navigator.clipboard)navigator.clipboard.readText().then(u=>Ue(u));else{const u=prompt("セーブデータを貼り付けてください。");u&&u!==""&&Ue(u)}},vt=()=>j.map((u,p)=>`|${c.dos_chara[p]}${G!==1?G:""}_data=`+[...u.map(C=>{const A=Math.floor(C/192),He=Math.max(...T.filter(Qe=>A>=Qe)),me=T.findIndex(Qe=>Qe===He),Kt=T[me]??T[0]??yl,X=I[me]??I[0]??It,Ce=S[me]??S[0]??qt;return Math.round((C-Kt*192)/192*4*60*60/Ce+X)})].sort().join(",")).join("")+"|",Ne=()=>de(vt(),"クリップボードにdosをコピーしました。"),ft=()=>{pe&&(l(13,re=((z.currentTime-Ie)*y*v/60/4-.5)*192),re>192&&(ze(),ie()),requestAnimationFrame(ft))},ie=()=>{if(pe&&ze(),le){const p=((n-f-.5)*4*60*60/y+m-200)/60,C=p<0?-p:0;Fe.gain.value=Me,ce=z.createBufferSource(),ce.buffer=te,ce.playbackRate.value=v,ce.connect(Fe),Ie=z.currentTime+C,ce.start(Ie+C,Math.max(p,0)),requestAnimationFrame(ft),pe=!0}else te?l(10,F="再生準備が未完了です。"):l(10,F="音楽ファイルが入力されていません。"),l(11,be=D.error)},ze=()=>{ce.stop(),l(13,re=-1),pe=!1},ge=()=>{pe?ze():ie()},De=()=>{Fe.gain.value=Me},Ve=()=>{ce.playbackRate.value=v,pe&&ie()},wt=u=>{if(l(10,F=""),u.target.checked)l(47,T=[...T,n]),l(48,I=[...I,Math.round(h)]),l(49,S=[...S,y]);else{const p=r;l(47,T=T.filter((C,A)=>p!==A)),l(48,I=I.filter((C,A)=>p!==A)),l(49,S=S.filter((C,A)=>p!==A))}},H=u=>{l(10,F="");const p=u.target.value;let C;try{C=parseFloat(p)}catch(A){console.log(A),A.target.value=I[r];return}Number.isNaN(C)?u.target.value=I[r]:l(48,I[r]=C,I)},ut=u=>{l(10,F="");const p=u.target.value;let C;try{C=parseFloat(p)}catch(A){console.log(A),A.target.value=S[r];return}Number.isNaN(C)||C<=0?u.target.value=S[r]:l(49,S[r]=C,S)},ct=u=>{u.preventDefault(),l(12,U=!0),l(10,F="")},Ae=u=>{u.preventDefault(),l(12,U=!1),l(10,F="")},Ye=u=>{if(u.stopPropagation(),u.preventDefault(),l(12,U=!1),l(10,F=""),!u.dataTransfer||!u.dataTransfer.files)return;const p=u.dataTransfer.files;if(p.length===0)return;const C=p[0];if(C.type.match(/^audio/)){le=!1;const A=new FileReader;A.onload=()=>{z.decodeAudioData(A.result,He=>{te=He,l(10,F="音楽ファイルの読み込みが完了しました。"),l(11,be=D.success),le=!0})},A.readAsArrayBuffer(C)}else if(C.type==="text/plain"){const A=new FileReader;A.onload=()=>{Ue(A.result)},A.readAsText(C)}else l(10,F="非対応のファイルタイプです("+C.type+")"),l(11,be=D.error)},Le={ArrowUp:ve,ArrowDown:Y,ArrowLeft:qe,ArrowRight:ne,KeyE:ve,KeyD:Y,KeyS:qe,KeyF:ne,KeyB:ve,Space:Y,Digit1:ae(4),Digit2:ae(8),Digit3:ae(16),Digit4:ae(12),Digit5:ae(24),Digit6:ae(48),KeyR:ae(32),Delete:Je,Backspace:he,KeyR:()=>l(4,W=!W),Enter:ge};c.key_config.forEach((u,p)=>Le[u]=_e(p));const kt={},Tt=u=>{if(u.target.type!=="number"){const p=u.ctrlKey?kt:Le;p[u.code]&&(p[u.code](),u.preventDefault())}},Nt=u=>{u.deltaY>0?Y():u.deltaY<0&&ve()},oe=u=>{u.preventDefault(),u.returnValue="ページを移動してよろしいですか？現在編集中のデータは失われます。"};function Dt(){W=this.checked,l(4,W)}const Ge=u=>V(n*192+u);function pt(){Me=Mt(this.value),l(14,Me)}function At(){v=Mt(this.value),l(15,v)}function se(){G=Mt(this.value),l(9,G)}const Et=()=>l(10,F="");return e.$$.update=()=>{e.$$.dirty[0]&2&&l(6,n=Math.floor(P/192)),e.$$.dirty[0]&64|e.$$.dirty[1]&65536&&l(51,o=Math.max(...T.filter(u=>n>=u))),e.$$.dirty[1]&1114112&&l(50,r=T.findIndex(u=>u===o)),e.$$.dirty[1]&589824&&l(8,f=T[r]??T[0]??yl),e.$$.dirty[1]&655360&&l(7,m=I[r]??I[0]??It),e.$$.dirty[1]&786432&&l(5,y=S[r]??S[0]??qt),e.$$.dirty[0]&418&&l(16,h=(P-f*192)/192*4*60*60/y+m),e.$$.dirty[0]&11&&l(20,E=j.map((u,p)=>u.includes(P)?c.colors[c.panel_color_def[p]]:c.colors[0])),e.$$.dirty[0]&72&&l(19,K=j.map(u=>u.map(p=>p-n*192).filter(p=>p>=0&&p<192))),e.$$.dirty[0]&26&&l(18,O=j.map(u=>W?u.map(p=>p-P).filter(p=>p>0&&p<=96):u.map(p=>P-p).filter(p=>p>0&&p<=96))),e.$$.dirty[0]&4&&l(17,R=new Array(ye).fill(0).map((u,p)=>192/ye*p))},[c,P,ye,j,W,y,n,m,f,G,F,be,U,re,Me,v,h,R,O,K,E,192,V,ve,Y,qe,ne,ae,_e,Je,he,yt,we,ke,Ne,ge,De,Ve,wt,H,ut,ct,Ae,Ye,Tt,Nt,oe,T,I,S,r,o,Dt,Ge,pt,At,se,Et]}class tn extends Zl{constructor(t){super(),Xl(this,t,en,$l,Rl,{},null,[-1,-1,-1,-1])}}new tn({target:document.getElementById("app")});
