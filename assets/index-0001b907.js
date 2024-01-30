(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Ye(){}const vn=e=>e;function Wn(e){return e()}function En(){return Object.create(null)}function ut(e){e.forEach(Wn)}function an(e){return typeof e=="function"}function ul(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function al(e){return Object.keys(e).length===0}function An(e){return e??""}const Hn=typeof window<"u";let Qn=Hn?()=>window.performance.now():()=>Date.now(),yn=Hn?e=>requestAnimationFrame(e):Ye;const St=new Set;function $n(e){St.forEach(t=>{t.c(e)||(St.delete(t),t.f())}),St.size!==0&&yn($n)}function xn(e){let t;return St.size===0&&yn($n),{promise:new Promise(n=>{St.add(t={c:e,f:n})}),abort(){St.delete(t)}}}function u(e,t){e.appendChild(t)}function el(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function fl(e){const t=p("style");return cl(el(e),t),t.sheet}function cl(e,t){return u(e.head||e,t),t.sheet}function Ke(e,t,n){e.insertBefore(t,n||null)}function ge(e){e.parentNode&&e.parentNode.removeChild(e)}function et(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function N(){return T(" ")}function tl(){return T("")}function w(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function i(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function nn(e){return e===""?null:+e}function _l(e){return Array.from(e.childNodes)}function xe(e,t){t=""+t,e.data!==t&&(e.data=t)}function At(e,t){e.value=t??""}function m(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function xt(e,t,n){for(let l=0;l<e.options.length;l+=1){const o=e.options[l];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Cn(e){const t=e.querySelector(":checked");return t&&t.__value}function G(e,t,n){e.classList[n?"add":"remove"](t)}function pl(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,l,t),o}const on=new Map;let sn=0;function dl(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function hl(e,t){const n={stylesheet:fl(t),rules:{}};return on.set(e,n),n}function nl(e,t,n,l,o,a,f,d=0){const D=16.666/l;let v=`{
`;for(let g=0;g<=1;g+=D){const E=t+(n-t)*a(g);v+=g*100+`%{${f(E,1-E)}}
`}const M=v+`100% {${f(n,1-n)}}
}`,k=`__svelte_${dl(M)}_${d}`,I=el(e),{stylesheet:S,rules:A}=on.get(I)||hl(I,e);A[k]||(A[k]=!0,S.insertRule(`@keyframes ${k} ${M}`,S.cssRules.length));const C=e.style.animation||"";return e.style.animation=`${C?`${C}, `:""}${k} ${l}ms linear ${o}ms 1 both`,sn+=1,k}function dn(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?a=>a.indexOf(t)<0:a=>a.indexOf("__svelte")===-1),o=n.length-l.length;o&&(e.style.animation=l.join(", "),sn-=o,sn||gl())}function gl(){yn(()=>{sn||(on.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&ge(t)}),on.clear())})}let wn;function Ut(e){wn=e}const Mt=[],Mn=[];let Ot=[];const Sn=[],ml=Promise.resolve();let hn=!1;function vl(){hn||(hn=!0,ml.then(ll))}function Ze(e){Ot.push(e)}const _n=new Set;let Ct=0;function ll(){if(Ct!==0)return;const e=wn;do{try{for(;Ct<Mt.length;){const t=Mt[Ct];Ct++,Ut(t),yl(t.$$)}}catch(t){throw Mt.length=0,Ct=0,t}for(Ut(null),Mt.length=0,Ct=0;Mn.length;)Mn.pop()();for(let t=0;t<Ot.length;t+=1){const n=Ot[t];_n.has(n)||(_n.add(n),n())}Ot.length=0}while(Mt.length);for(;Sn.length;)Sn.pop()();hn=!1,_n.clear(),Ut(e)}function yl(e){if(e.fragment!==null){e.update(),ut(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ze)}}function wl(e){const t=[],n=[];Ot.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),Ot=t}let Jt;function ol(){return Jt||(Jt=Promise.resolve(),Jt.then(()=>{Jt=null})),Jt}function rn(e,t,n){e.dispatchEvent(pl(`${t?"intro":"outro"}${n}`))}const ln=new Set;let tt;function bl(){tt={r:0,c:[],p:tt}}function kl(){tt.r||ut(tt.c),tt=tt.p}function gn(e,t){e&&e.i&&(ln.delete(e),e.i(t))}function On(e,t,n,l){if(e&&e.o){if(ln.has(e))return;ln.add(e),tt.c.push(()=>{ln.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const il={duration:0};function sl(e,t,n){const l={direction:"in"};let o=t(e,n,l),a=!1,f,d,D=0;function v(){f&&dn(e,f)}function M(){const{delay:I=0,duration:S=300,easing:A=vn,tick:C=Ye,css:g}=o||il;g&&(f=nl(e,0,1,S,I,A,g,D++)),C(0,1);const E=Qn()+I,me=E+S;d&&d.abort(),a=!0,Ze(()=>rn(e,!0,"start")),d=xn(Le=>{if(a){if(Le>=me)return C(1,0),rn(e,!0,"end"),v(),a=!1;if(Le>=E){const De=A((Le-E)/S);C(De,1-De)}}return a})}let k=!1;return{start(){k||(k=!0,dn(e),an(o)?(o=o(l),ol().then(M)):M())},invalidate(){k=!1},end(){a&&(v(),a=!1)}}}function rl(e,t,n){const l={direction:"out"};let o=t(e,n,l),a=!0,f;const d=tt;d.r+=1;function D(){const{delay:v=0,duration:M=300,easing:k=vn,tick:I=Ye,css:S}=o||il;S&&(f=nl(e,1,0,M,v,k,S));const A=Qn()+v,C=A+M;Ze(()=>rn(e,!1,"start")),xn(g=>{if(a){if(g>=C)return I(0,1),rn(e,!1,"end"),--d.r||ut(d.c),!1;if(g>=A){const E=k((g-A)/M);I(1-E,E)}}return a})}return an(o)?ol().then(()=>{o=o(l),D()}):D(),{end(v){v&&o.tick&&o.tick(1,0),a&&(f&&dn(e,f),a=!1)}}}function Kl(e,t,n,l){const{fragment:o,after_update:a}=e.$$;o&&o.m(t,n),l||Ze(()=>{const f=e.$$.on_mount.map(Wn).filter(an);e.$$.on_destroy?e.$$.on_destroy.push(...f):ut(f),e.$$.on_mount=[]}),a.forEach(Ze)}function Dl(e,t){const n=e.$$;n.fragment!==null&&(wl(n.after_update),ut(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Nl(e,t){e.$$.dirty[0]===-1&&(Mt.push(e),vl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function El(e,t,n,l,o,a,f,d=[-1]){const D=wn;Ut(e);const v=e.$$={fragment:null,ctx:[],props:a,update:Ye,not_equal:o,bound:En(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(D?D.$$.context:[])),callbacks:En(),dirty:d,skip_bound:!1,root:t.target||D.$$.root};f&&f(v.root);let M=!1;if(v.ctx=n?n(e,t.props||{},(k,I,...S)=>{const A=S.length?S[0]:I;return v.ctx&&o(v.ctx[k],v.ctx[k]=A)&&(!v.skip_bound&&v.bound[k]&&v.bound[k](A),M&&Nl(e,k)),I}):[],v.update(),M=!0,ut(v.before_update),v.fragment=l?l(v.ctx):!1,t.target){if(t.hydrate){const k=_l(t.target);v.fragment&&v.fragment.l(k),k.forEach(ge)}else v.fragment&&v.fragment.c();t.intro&&gn(e.$$.fragment),Kl(e,t.target,t.anchor,t.customElement),ll()}Ut(D)}class Al{$destroy(){Dl(this,1),this.$destroy=Ye}$on(t,n){if(!an(n))return Ye;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!al(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function un(e,{delay:t=0,duration:n=400,easing:l=vn}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:l,css:a=>`opacity: ${a*o}`}}const Vt={"18p":{panel_num:18,panel_width:96,panel_height:96,panel_w_num:5,note_width:20,note_height:6,panel_top:[0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3],panel_left:[0,1,2,3,4,.5,1.5,2.5,3.5,.5,1.5,2.5,3.5,0,1,2,3,4],colors:["#cccccc","#9999ff","#99ffff","#ffff99","#ff9966","#ffffff"],panel_color_def:[1,2,5,3,4,1,2,3,4,1,2,3,4,1,2,5,3,4],names:"7890-UIOPJKL;NM<>/".split(""),dos_chara:"aa,ab,ac,ad,ae,ba,bb,bc,bd,ca,cb,cc,cd,da,db,dc,dd,de".split(","),key_config:"Digit7,Digit8,Digit9,Digit0,Minus,KeyU,KeyI,KeyO,KeyP,KeyJ,KeyK,KeyL,Semicolon,KeyN,KeyM,Comma,Period,Slash".split(",")},"9t":{panel_num:9,panel_width:96,panel_height:96,panel_w_num:3,note_width:30,note_height:6,panel_top:[0,0,0,1,1,1,2,2,2],panel_left:[0,1,2,0,1,2,0,1,2],colors:["#cccccc","#9999ff","#ff9999","#99ff99"],panel_color_def:[1,1,1,2,3,2,1,1,1],names:"789456123".split(""),dos_chara:"left,down,up,right,space,sleft,sdown,sup,sright".split(","),key_config:"Numpad7,Numpad8,Numpad9,Numpad4,Numpad5,Numpad6,Numpad1,Numpad2,Numpad3".split(",")},"36p":{panel_num:36,panel_width:48,panel_height:48,panel_w_num:10,note_width:15,note_height:6,panel_top:[0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3],panel_left:[0,1,2,3,4,.5,1.5,2.5,3.5,.5,1.5,2.5,3.5,0,1,2,3,4,5,6,7,8,9,5.5,6.5,7.5,8.5,5.5,6.5,7.5,8.5,5,6,7,8,9],colors:["#cccccc","#9999ff","#99ffff","#ffff99","#ff9966","#ffffff"],panel_color_def:[1,2,5,3,4,1,2,3,4,1,2,3,4,1,2,5,3,4,1,2,5,3,4,1,2,3,4,1,2,3,4,1,2,5,3,4],names:"23456WERTSDFGZXCVB7890-UIOPJKL;NM<>/".split(""),dos_chara:"aa,ab,ac,ad,ae,ba,bb,bc,bd,ca,cb,cc,cd,da,db,dc,dd,de,af,ag,ah,ai,aj,bf,bg,bh,bi,cf,cg,ch,ci,df,dg,dh,di,dj".split(","),key_config:"Digit2,Digit3,Digit4,Digit5,Digit6,KeyW,KeyE,KeyR,KeyT,KeyS,KeyD,KeyF,KeyG,KeyZ,KeyX,KeyC,KeyV,KeyB,Digit7,Digit8,Digit9,Digit0,Minus,KeyU,KeyI,KeyO,KeyP,KeyJ,KeyK,KeyL,Semicolon,KeyN,KeyM,Comma,Period,Slash".split(",")}};function Pn(e,t,n){const l=e.slice();return l[104]=t[n],l[106]=n,l}function Fn(e,t,n){const l=e.slice();return l[107]=t[n],l[109]=n,l}function Rn(e,t,n){const l=e.slice();return l[104]=t[n],l[106]=n,l}function Ln(e,t,n){const l=e.slice();return l[111]=t[n],l[109]=n,l}function Tn(e,t,n){const l=e.slice();return l[113]=t[n],l[106]=n,l}function jn(e,t,n){const l=e.slice();return l[115]=t[n],l}function Bn(e,t,n){const l=e.slice();return l[118]=t[n],l}function In(e,t,n){const l=e.slice();return l[111]=t[n],l}function Jn(e){let t,n=e[111]+"",l;return{c(){t=p("option"),l=T(n),i(t,"num",e[111]),t.__value=e[111],t.value=t.__value},m(o,a){Ke(o,t,a),u(t,l)},p:Ye,d(o){o&&ge(t)}}}function Vn(e){let t,n=e[118]+"",l;return{c(){t=p("option"),l=T(n),i(t,"ratio",e[118]),t.__value=e[118],t.value=t.__value},m(o,a){Ke(o,t,a),u(t,l)},p:Ye,d(o){o&&ge(t)}}}function Un(e){let t,n=`${e[0].panel_width-e[115]}px`,l=`${e[0].panel_height-e[115]}px`;return{c(){t=p("div"),i(t,"class","panel_back svelte-1vw65n4"),m(t,"width",n),m(t,"height",l),m(t,"background",e[0].colors[e[0].panel_color_def[e[106]]])},m(o,a){Ke(o,t,a)},p(o,a){a[0]&8388609&&n!==(n=`${o[0].panel_width-o[115]}px`)&&m(t,"width",n),a[0]&8388609&&l!==(l=`${o[0].panel_height-o[115]}px`)&&m(t,"height",l),a[0]&1&&m(t,"background",o[0].colors[o[0].panel_color_def[o[106]]])},d(o){o&&ge(t)}}}function qn(e){let t,n,l,o=e[0].names[e[106]]+"",a,f,d=`${e[0].panel_width+1}px`,D=`${e[0].panel_height+1}px`,v=`${e[0].panel_top[e[106]]*e[0].panel_height}px`,M=`${e[0].panel_left[e[106]]*e[0].panel_width}px`,k,I,S=e[23][e[106]],A=[];for(let C=0;C<S.length;C+=1)A[C]=Un(jn(e,S,C));return{c(){t=p("div");for(let C=0;C<A.length;C+=1)A[C].c();n=N(),l=p("div"),a=T(o),f=N(),i(l,"class","svelte-1vw65n4"),i(t,"class","panel svelte-1vw65n4"),m(t,"width",d),m(t,"height",D),m(t,"top",v),m(t,"left",M),m(t,"background",e[24][e[106]])},m(C,g){Ke(C,t,g);for(let E=0;E<A.length;E+=1)A[E]&&A[E].m(t,null);u(t,n),u(t,l),u(l,a),u(t,f),k||(I=w(t,"click",e[37](e[106])),k=!0)},p(C,g){if(e=C,g[0]&8388609){S=e[23][e[106]];let E;for(E=0;E<S.length;E+=1){const me=jn(e,S,E);A[E]?A[E].p(me,g):(A[E]=Un(me),A[E].c(),A[E].m(t,n))}for(;E<A.length;E+=1)A[E].d(1);A.length=S.length}g[0]&1&&o!==(o=e[0].names[e[106]]+"")&&xe(a,o),g[0]&1&&d!==(d=`${e[0].panel_width+1}px`)&&m(t,"width",d),g[0]&1&&D!==(D=`${e[0].panel_height+1}px`)&&m(t,"height",D),g[0]&1&&v!==(v=`${e[0].panel_top[e[106]]*e[0].panel_height}px`)&&m(t,"top",v),g[0]&1&&M!==(M=`${e[0].panel_left[e[106]]*e[0].panel_width}px`)&&m(t,"left",M),g[0]&16777216&&m(t,"background",e[24][e[106]])},d(C){C&&ge(t),et(A,C),k=!1,I()}}}function Xn(e){let t,n,l=`${e[0].note_width+1}px`,o=`${e[25]/e[2]*2/e[5]+1}px`,a=`${e[111]*2/e[5]}px`,f=`${e[106]*e[0].note_width}px`,d,D;function v(){return e[69](e[111])}return{c(){t=p("div"),i(t,"class",n=An(e[109]%(e[2]/4)==0?"grid4":"grid")+" svelte-1vw65n4"),m(t,"width",l),m(t,"height",o),m(t,"top",a),m(t,"left",f)},m(M,k){Ke(M,t,k),d||(D=w(t,"click",v),d=!0)},p(M,k){e=M,k[0]&4&&n!==(n=An(e[109]%(e[2]/4)==0?"grid4":"grid")+" svelte-1vw65n4")&&i(t,"class",n),k[0]&1&&l!==(l=`${e[0].note_width+1}px`)&&m(t,"width",l),k[0]&36&&o!==(o=`${e[25]/e[2]*2/e[5]+1}px`)&&m(t,"height",o),k[0]&4194336&&a!==(a=`${e[111]*2/e[5]}px`)&&m(t,"top",a),k[0]&1&&f!==(f=`${e[106]*e[0].note_width}px`)&&m(t,"left",f)},d(M){M&&ge(t),d=!1,D()}}}function Yn(e){let t,n=e[22],l=[];for(let o=0;o<n.length;o+=1)l[o]=Xn(Ln(e,n,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=tl()},m(o,a){for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(o,a);Ke(o,t,a)},p(o,a){if(a[0]&37749285|a[1]&1){n=o[22];let f;for(f=0;f<n.length;f+=1){const d=Ln(o,n,f);l[f]?l[f].p(d,a):(l[f]=Xn(d),l[f].c(),l[f].m(t.parentNode,t))}for(;f<l.length;f+=1)l[f].d(1);l.length=n.length}},d(o){et(l,o),o&&ge(t)}}}function Zn(e){let t,n=`${e[16]*2/e[5]}px`,l=`${e[0].note_width*e[0].panel_num}px`;return{c(){t=p("div"),i(t,"class","cursor_play svelte-1vw65n4"),m(t,"top",n),m(t,"width",l)},m(o,a){Ke(o,t,a)},p(o,a){a[0]&65568&&n!==(n=`${o[16]*2/o[5]}px`)&&m(t,"top",n),a[0]&1&&l!==(l=`${o[0].note_width*o[0].panel_num}px`)&&m(t,"width",l)},d(o){o&&ge(t)}}}function zn(e){let t,n=`${e[0].note_width+1}px`,l=`${e[0].note_height}px`,o=`${e[107]*2/e[5]-e[0].note_height/2}px`,a=`${e[106]*e[0].note_width}px`;return{c(){t=p("div"),i(t,"class","note svelte-1vw65n4"),m(t,"width",n),m(t,"height",l),m(t,"top",o),m(t,"left",a),m(t,"background",e[0].colors[e[0].panel_color_def[e[106]]])},m(f,d){Ke(f,t,d)},p(f,d){d[0]&1&&n!==(n=`${f[0].note_width+1}px`)&&m(t,"width",n),d[0]&1&&l!==(l=`${f[0].note_height}px`)&&m(t,"height",l),d[0]&1048609&&o!==(o=`${f[107]*2/f[5]-f[0].note_height/2}px`)&&m(t,"top",o),d[0]&1&&a!==(a=`${f[106]*f[0].note_width}px`)&&m(t,"left",a),d[0]&1&&m(t,"background",f[0].colors[f[0].panel_color_def[f[106]]])},d(f){f&&ge(t)}}}function Gn(e){let t,n=e[104],l=[];for(let o=0;o<n.length;o+=1)l[o]=zn(Fn(e,n,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=tl()},m(o,a){for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(o,a);Ke(o,t,a)},p(o,a){if(a[0]&1048609){n=o[104];let f;for(f=0;f<n.length;f+=1){const d=Fn(o,n,f);l[f]?l[f].p(d,a):(l[f]=zn(d),l[f].c(),l[f].m(t.parentNode,t))}for(;f<l.length;f+=1)l[f].d(1);l.length=n.length}},d(o){et(l,o),o&&ge(t)}}}function Cl(e){let t,n,l,o;return{c(){t=p("div"),t.textContent="ページの途中にラベルがあるため曲再生が正常にできない可能性があります。",i(t,"class","message svelte-1vw65n4"),m(t,"background",e[28].warning)},m(a,f){Ke(a,t,f),o=!0},p:Ye,i(a){o||(Ze(()=>{o&&(l&&l.end(1),n=sl(t,un,{duration:100}),n.start())}),o=!0)},o(a){n&&n.invalidate(),l=rl(t,un,{duration:300}),o=!1},d(a){a&&ge(t),a&&l&&l.end()}}}function Ml(e){let t,n,l,o,a,f,d;return{c(){t=p("div"),n=T(e[13]),i(t,"class","message svelte-1vw65n4"),m(t,"background",e[14])},m(D,v){Ke(D,t,v),u(t,n),a=!0,f||(d=w(t,"click",e[73]),f=!0)},p(D,v){(!a||v[0]&8192)&&xe(n,D[13]),v[0]&16384&&m(t,"background",D[14])},i(D){a||(Ze(()=>{a&&(o&&o.end(1),l=sl(t,un,{duration:100}),l.start())}),a=!0)},o(D){l&&l.invalidate(),o=rl(t,un,{duration:300}),a=!1},d(D){D&&ge(t),D&&o&&o.end(),f=!1,d()}}}function Sl(e){let t,n,l,o=e[8]+1+"",a,f,d=(e[1]-e[8]*192)/(e[25]/e[2])+1+"",D,v,M,k,I=Math.round(e[19])+"",S,A,C,g,E,me,Le,De,Pt,at,Ft,ke,re,R,fn,Q,Ne,L,Te,O,V,U,ve,P,q,nt,h,$,J,ue,ft,ae,ze,x,je,fe,ct,W,_t,H,Ge,ye,Rt,Pe,We,j,Be,ce,pt,Ee,Ae,ee,Ce,Ie,qt,Fe,Me,Se,Lt,Je,Oe,He,Tt,te,dt,lt,Re,ht=`${(e[1]-e[9]*e[25]*e[5])*2/e[5]}px`,ot=`${e[0].note_width*e[0].panel_num}px`,jt,gt=`${e[25]*2+10}px`,mt,_e,Xt,vt=e[17].toFixed(2)+"",Bt,Yt,we,Zt,yt=e[18].toFixed(2)+"",It,wt,be,zt,Qe,Gt,Y,Ve,Wt,Ue,Ht,qe,Qt,Xe,s,c,K,b,pe,X,$t,it,Z,z,bn,bt,st,kn,rt,B,cn,Kn,kt=e[26],ne=[];for(let r=0;r<kt.length;r+=1)ne[r]=Jn(In(e,kt,r));let Kt=e[27],le=[];for(let r=0;r<Kt.length;r+=1)le[r]=Vn(Bn(e,Kt,r));let Dt=e[3],oe=[];for(let r=0;r<Dt.length;r+=1)oe[r]=qn(Tn(e,Dt,r));let Nt=e[20],ie=[];for(let r=0;r<Nt.length;r+=1)ie[r]=Yn(Rn(e,Nt,r));let de=e[16]>=0&&Zn(e),Et=e[20],se=[];for(let r=0;r<Et.length;r+=1)se[r]=Gn(Pn(e,Et,r));const Dn=[Ml,Cl],$e=[];function Nn(r,y){return r[13]!==""?0:r[21]?1:-1}return~(Z=Nn(e))&&(z=$e[Z]=Dn[Z](e)),{c(){t=p("main"),n=p("div"),l=p("div"),a=T(o),f=T("小節目, "),D=T(d),v=T("/"),M=T(e[2]),k=T(" ("),S=T(I),A=T("f)"),C=N(),g=p("div"),E=p("input"),Le=N(),De=p("label"),De.textContent="この小節で設定変更",Pt=T(` |\r
      `),at=p("label"),at.textContent="開始フレーム:",Ft=N(),ke=p("input"),re=N(),R=p("label"),R.textContent="BPM:",fn=N(),Q=p("input"),Ne=T(` |\r
      `),L=p("input"),Te=N(),O=p("label"),O.textContent="パネル表示を逆転(R)",V=p("br"),U=T(`\r
      1ページの小節数\r
      `),ve=p("select");for(let r=0;r<ne.length;r+=1)ne[r].c();P=T(`\r
      | パネル表示倍率\r
      `),q=p("select");for(let r=0;r<le.length;r+=1)le[r].c();nt=N(),h=p("div"),$=p("input"),J=N(),ue=p("input"),ft=N(),ae=p("input"),ze=N(),x=p("input"),je=N(),fe=p("input"),ct=N(),W=p("input"),_t=N(),H=p("input"),Ge=N(),ye=p("input"),Rt=N(),Pe=p("input"),We=N(),j=p("input"),Be=N(),ce=p("input"),pt=N(),Ee=p("input"),Ae=N(),ee=p("input"),Ce=N(),Ie=p("input"),qt=N(),Fe=p("input"),Me=N(),Se=p("input"),Lt=N(),Je=p("div"),Oe=p("div");for(let r=0;r<oe.length;r+=1)oe[r].c();Tt=N(),te=p("div");for(let r=0;r<ie.length;r+=1)ie[r].c();dt=N(),de&&de.c(),lt=N(),Re=p("div"),jt=N();for(let r=0;r<se.length;r+=1)se[r].c();mt=N(),_e=p("div"),Xt=T("音量("),Bt=T(vt),Yt=T(`)\r
      `),we=p("input"),Zt=T(`\r
      速度(`),It=T(yt),wt=T(`)\r
      `),be=p("input"),zt=N(),Qe=p("div"),Qe.textContent="画面にファイルをドロップしてセーブデータ/音楽ファイルを読み込み",Gt=N(),Y=p("div"),Ve=p("input"),Wt=N(),Ue=p("input"),Ht=N(),qe=p("input"),Qt=N(),Xe=p("input"),s=N(),c=p("input"),K=N(),b=p("input"),pe=T(`\r
      譜面番号`),X=p("input"),$t=N(),it=p("div"),z&&z.c(),bn=N(),bt=p("footer"),st=p("a"),st.textContent="使用しているソフトウェアのライセンス表示",kn=T(` |\r
      `),rt=p("a"),rt.textContent=`Pun◇Pane Editor Ver.${mn}`,i(E,"type","checkbox"),E.checked=me=e[11]===e[8],i(E,"id","fix"),i(De,"for","fix"),i(De,"class","svelte-1vw65n4"),i(at,"for","begin_frame"),i(at,"class","svelte-1vw65n4"),i(ke,"type","number"),ke.value=e[10],i(ke,"id","begin_frame"),i(ke,"class","svelte-1vw65n4"),i(R,"for","bpm"),i(R,"class","svelte-1vw65n4"),i(Q,"type","number"),Q.value=e[7],i(Q,"step","0.01"),i(Q,"min","0.01"),i(Q,"id","bpm"),i(Q,"class","svelte-1vw65n4"),i(L,"type","checkbox"),i(L,"id","panel_reverse"),i(O,"for","panel_reverse"),i(O,"title","Rキー: カーソルより前のパネルを表示するか後のパネルを表示するかの切り替え"),i(O,"class","svelte-1vw65n4"),i(ve,"class","svelte-1vw65n4"),e[5]===void 0&&Ze(()=>e[67].call(ve)),i(q,"class","svelte-1vw65n4"),e[6]===void 0&&Ze(()=>e[68].call(q)),i(g,"class","main_input svelte-1vw65n4"),i($,"type","button"),$.value="4",i($,"title","1キー: カーソル移動間隔を4分に変更"),i($,"class","svelte-1vw65n4"),G($,"selected",e[2]===4),i(ue,"type","button"),ue.value="8",i(ue,"title","2キー: カーソル移動間隔を8分に変更"),i(ue,"class","svelte-1vw65n4"),G(ue,"selected",e[2]===8),i(ae,"type","button"),ae.value="16",i(ae,"title","3キー: カーソル移動間隔を16分に変更"),i(ae,"class","svelte-1vw65n4"),G(ae,"selected",e[2]===16),i(x,"type","button"),x.value="32",i(x,"title","Rキー: カーソル移動間隔を32分に変更"),i(x,"class","svelte-1vw65n4"),G(x,"selected",e[2]===32),i(fe,"type","button"),fe.value="12",i(fe,"title","4キー: カーソル移動間隔を12分(8分3連)に変更"),i(fe,"class","svelte-1vw65n4"),G(fe,"selected",e[2]===12),i(W,"type","button"),W.value="24",i(W,"title","5キー: カーソル移動間隔を24分(16分3連)に変更"),i(W,"class","svelte-1vw65n4"),G(W,"selected",e[2]===24),i(H,"type","button"),H.value="48",i(H,"title","6キー: カーソル移動間隔を48分(32分3連)に変更"),i(H,"class","svelte-1vw65n4"),G(H,"selected",e[2]===48),i(ye,"type","button"),ye.value="←",i(ye,"title","左矢印キー: 前のページに移動"),i(ye,"class","svelte-1vw65n4"),i(Pe,"type","button"),Pe.value="↑",i(Pe,"title","上矢印/E/B: カーソルを上に移動"),i(Pe,"class","svelte-1vw65n4"),i(j,"type","button"),j.value="↓",i(j,"title","下矢印/D/スペース: カーソルを下に移動"),i(j,"class","svelte-1vw65n4"),i(ce,"type","button"),ce.value="→",i(ce,"title","右矢印キー: 次のページに移動"),i(ce,"class","svelte-1vw65n4"),i(Ee,"type","button"),Ee.value="BS",i(Ee,"title","Backspace: カーソルを前に移動してパネルを削除"),i(Ee,"class","svelte-1vw65n4"),i(ee,"type","button"),ee.value="Del",i(ee,"title","Delete: カーソルのある行のパネルを削除"),i(ee,"class","svelte-1vw65n4"),i(Ie,"type","button"),Ie.value="↶",i(Ie,"title","Z: 元に戻す"),i(Ie,"class","svelte-1vw65n4"),i(Fe,"type","button"),Fe.value="↷",i(Fe,"title","Y: やり直す"),i(Fe,"class","svelte-1vw65n4"),i(Se,"type","button"),Se.value="♪",i(Se,"title","Enter: 曲再生の開始/停止"),i(Se,"class","svelte-1vw65n4"),i(h,"class","main_buttons svelte-1vw65n4"),i(Oe,"class","panels svelte-1vw65n4"),i(Oe,"style",He=`left: ${e[0].note_width*e[0].panel_num+20}px; width: ${e[0].panel_width*5}px;`),i(Re,"class","cursor svelte-1vw65n4"),m(Re,"top",ht),m(Re,"width",ot),i(te,"class","notes svelte-1vw65n4"),i(Je,"class","punpane_editor svelte-1vw65n4"),m(Je,"height",gt),i(we,"type","range"),i(we,"min","0"),i(we,"max","1"),i(we,"step","0.01"),i(be,"type","range"),i(be,"min","0.1"),i(be,"max","1.5"),i(be,"step","0.1"),i(_e,"class","music_control svelte-1vw65n4"),i(Qe,"class","drop_area svelte-1vw65n4"),G(Qe,"dragover",e[15]),i(Ve,"type","button"),Ve.value="新規作成",i(Ve,"title","編集中の譜面データを初期化します"),i(Ve,"class","svelte-1vw65n4"),i(Ue,"type","button"),Ue.value="コピー(C)",i(Ue,"title","C: 現在のページ内容をクリップボードにコピーします。"),i(Ue,"class","svelte-1vw65n4"),i(qe,"type","button"),qe.value="カット(X)",i(qe,"title","X: 現在のページ内容をクリップボードに切り取ります。"),i(qe,"class","svelte-1vw65n4"),i(Xe,"type","button"),Xe.value="貼付/読込(V)",i(Xe,"title","V: コピーした内容を貼り付けます。クリップボードにセーブデータがある場合、それを読み込みます。"),i(Xe,"class","svelte-1vw65n4"),i(c,"type","button"),c.value="セーブ(S)",i(c,"title","S: セーブデータをクリップボードにコピーします。"),i(c,"class","svelte-1vw65n4"),i(b,"type","button"),b.value="dos出力(D)",i(b,"title","D: dosデータをクリップボードにコピーします。"),i(b,"class","svelte-1vw65n4"),i(X,"type","number"),i(X,"min","1"),i(X,"class","svelte-1vw65n4"),i(Y,"class","save_buttons svelte-1vw65n4"),i(it,"class","message_container svelte-1vw65n4"),i(st,"href","./thirdparty_license.txt"),i(st,"target","_blank"),i(st,"rel","noopener noreferrer"),i(st,"class","svelte-1vw65n4"),i(rt,"href","https://github.com/suzme/punpane-editor"),i(rt,"target","_blank"),i(rt,"rel","noopener noreferrer"),i(rt,"class","svelte-1vw65n4"),i(bt,"class","svelte-1vw65n4"),i(n,"class","container svelte-1vw65n4"),G(n,"dragover",e[15]),m(n,"width",`${e[0].note_width*e[0].panel_num+20+e[0].panel_width*e[0].panel_w_num}px`)},m(r,y){Ke(r,t,y),u(t,n),u(n,l),u(l,a),u(l,f),u(l,D),u(l,v),u(l,M),u(l,k),u(l,S),u(l,A),u(n,C),u(n,g),u(g,E),u(g,Le),u(g,De),u(g,Pt),u(g,at),u(g,Ft),u(g,ke),u(g,re),u(g,R),u(g,fn),u(g,Q),u(g,Ne),u(g,L),L.checked=e[4],u(g,Te),u(g,O),u(g,V),u(g,U),u(g,ve);for(let F=0;F<ne.length;F+=1)ne[F]&&ne[F].m(ve,null);xt(ve,e[5],!0),u(g,P),u(g,q);for(let F=0;F<le.length;F+=1)le[F]&&le[F].m(q,null);xt(q,e[6],!0),u(n,nt),u(n,h),u(h,$),u(h,J),u(h,ue),u(h,ft),u(h,ae),u(h,ze),u(h,x),u(h,je),u(h,fe),u(h,ct),u(h,W),u(h,_t),u(h,H),u(h,Ge),u(h,ye),u(h,Rt),u(h,Pe),u(h,We),u(h,j),u(h,Be),u(h,ce),u(h,pt),u(h,Ee),u(h,Ae),u(h,ee),u(h,Ce),u(h,Ie),u(h,qt),u(h,Fe),u(h,Me),u(h,Se),u(n,Lt),u(n,Je),u(Je,Oe);for(let F=0;F<oe.length;F+=1)oe[F]&&oe[F].m(Oe,null);u(Je,Tt),u(Je,te);for(let F=0;F<ie.length;F+=1)ie[F]&&ie[F].m(te,null);u(te,dt),de&&de.m(te,null),u(te,lt),u(te,Re),u(te,jt);for(let F=0;F<se.length;F+=1)se[F]&&se[F].m(te,null);u(n,mt),u(n,_e),u(_e,Xt),u(_e,Bt),u(_e,Yt),u(_e,we),At(we,e[17]),u(_e,Zt),u(_e,It),u(_e,wt),u(_e,be),At(be,e[18]),u(n,zt),u(n,Qe),u(n,Gt),u(n,Y),u(Y,Ve),u(Y,Wt),u(Y,Ue),u(Y,Ht),u(Y,qe),u(Y,Qt),u(Y,Xe),u(Y,s),u(Y,c),u(Y,K),u(Y,b),u(Y,pe),u(Y,X),At(X,e[12]),u(n,$t),u(n,it),~Z&&$e[Z].m(it,null),u(n,bn),u(n,bt),u(bt,st),u(bt,kn),u(bt,rt),B=!0,cn||(Kn=[w(window,"beforeunload",e[57]),w(window,"keydown",e[55]),w(window,"wheel",e[56]),w(window,"drop",e[54]),w(window,"dragover",e[52]),w(window,"dragleave",e[53]),w(E,"change",e[49]),w(ke,"change",e[50]),w(Q,"change",e[51]),w(L,"change",e[66]),w(ve,"change",e[67]),w(q,"change",e[68]),w($,"click",e[36](4)),w(ue,"click",e[36](8)),w(ae,"click",e[36](16)),w(x,"click",e[36](32)),w(fe,"click",e[36](12)),w(W,"click",e[36](24)),w(H,"click",e[36](48)),w(ye,"click",e[34]),w(Pe,"click",e[32]),w(j,"click",e[33]),w(ce,"click",e[35]),w(Ee,"click",e[39]),w(ee,"click",e[38]),w(Ie,"click",e[29]),w(Fe,"click",e[30]),w(Se,"click",e[46]),w(we,"change",e[70]),w(we,"input",e[70]),w(we,"input",e[47]),w(be,"change",e[71]),w(be,"input",e[71]),w(be,"input",e[48]),w(Ve,"click",e[40]),w(Ue,"click",e[41]),w(qe,"click",e[42]),w(Xe,"click",e[44]),w(c,"click",e[43]),w(b,"click",e[45]),w(X,"input",e[72])],cn=!0)},p(r,y){if((!B||y[0]&256)&&o!==(o=r[8]+1+"")&&xe(a,o),(!B||y[0]&262)&&d!==(d=(r[1]-r[8]*192)/(r[25]/r[2])+1+"")&&xe(D,d),(!B||y[0]&4)&&xe(M,r[2]),(!B||y[0]&524288)&&I!==(I=Math.round(r[19])+"")&&xe(S,I),(!B||y[0]&2304&&me!==(me=r[11]===r[8]))&&(E.checked=me),(!B||y[0]&1024&&ke.value!==r[10])&&(ke.value=r[10]),(!B||y[0]&128&&Q.value!==r[7])&&(Q.value=r[7]),y[0]&16&&(L.checked=r[4]),y[0]&67108864){kt=r[26];let _;for(_=0;_<kt.length;_+=1){const he=In(r,kt,_);ne[_]?ne[_].p(he,y):(ne[_]=Jn(he),ne[_].c(),ne[_].m(ve,null))}for(;_<ne.length;_+=1)ne[_].d(1);ne.length=kt.length}if(y[0]&67108896&&xt(ve,r[5]),y[0]&134217728){Kt=r[27];let _;for(_=0;_<Kt.length;_+=1){const he=Bn(r,Kt,_);le[_]?le[_].p(he,y):(le[_]=Vn(he),le[_].c(),le[_].m(q,null))}for(;_<le.length;_+=1)le[_].d(1);le.length=Kt.length}if(y[0]&134217792&&xt(q,r[6]),(!B||y[0]&4)&&G($,"selected",r[2]===4),(!B||y[0]&4)&&G(ue,"selected",r[2]===8),(!B||y[0]&4)&&G(ae,"selected",r[2]===16),(!B||y[0]&4)&&G(x,"selected",r[2]===32),(!B||y[0]&4)&&G(fe,"selected",r[2]===12),(!B||y[0]&4)&&G(W,"selected",r[2]===24),(!B||y[0]&4)&&G(H,"selected",r[2]===48),y[0]&25165833|y[1]&64){Dt=r[3];let _;for(_=0;_<Dt.length;_+=1){const he=Tn(r,Dt,_);oe[_]?oe[_].p(he,y):(oe[_]=qn(he),oe[_].c(),oe[_].m(Oe,null))}for(;_<oe.length;_+=1)oe[_].d(1);oe.length=Dt.length}if((!B||y[0]&1&&He!==(He=`left: ${r[0].note_width*r[0].panel_num+20}px; width: ${r[0].panel_width*5}px;`))&&i(Oe,"style",He),y[0]&38797861|y[1]&1){Nt=r[20];let _;for(_=0;_<Nt.length;_+=1){const he=Rn(r,Nt,_);ie[_]?ie[_].p(he,y):(ie[_]=Yn(he),ie[_].c(),ie[_].m(te,dt))}for(;_<ie.length;_+=1)ie[_].d(1);ie.length=Nt.length}if(r[16]>=0?de?de.p(r,y):(de=Zn(r),de.c(),de.m(te,lt)):de&&(de.d(1),de=null),y[0]&546&&ht!==(ht=`${(r[1]-r[9]*r[25]*r[5])*2/r[5]}px`)&&m(Re,"top",ht),y[0]&1&&ot!==(ot=`${r[0].note_width*r[0].panel_num}px`)&&m(Re,"width",ot),y[0]&1048609){Et=r[20];let _;for(_=0;_<Et.length;_+=1){const he=Pn(r,Et,_);se[_]?se[_].p(he,y):(se[_]=Gn(he),se[_].c(),se[_].m(te,null))}for(;_<se.length;_+=1)se[_].d(1);se.length=Et.length}(!B||y[0]&131072)&&vt!==(vt=r[17].toFixed(2)+"")&&xe(Bt,vt),y[0]&131072&&At(we,r[17]),(!B||y[0]&262144)&&yt!==(yt=r[18].toFixed(2)+"")&&xe(It,yt),y[0]&262144&&At(be,r[18]),(!B||y[0]&32768)&&G(Qe,"dragover",r[15]),y[0]&4096&&nn(X.value)!==r[12]&&At(X,r[12]);let F=Z;Z=Nn(r),Z===F?~Z&&$e[Z].p(r,y):(z&&(bl(),On($e[F],1,1,()=>{$e[F]=null}),kl()),~Z?(z=$e[Z],z?z.p(r,y):(z=$e[Z]=Dn[Z](r),z.c()),gn(z,1),z.m(it,null)):z=null),(!B||y[0]&32768)&&G(n,"dragover",r[15]),y[0]&1&&m(n,"width",`${r[0].note_width*r[0].panel_num+20+r[0].panel_width*r[0].panel_w_num}px`)},i(r){B||(gn(z),B=!0)},o(r){On(z),B=!1},d(r){r&&ge(t),et(ne,r),et(le,r),et(oe,r),et(ie,r),de&&de.d(),et(se,r),~Z&&$e[Z].d(),cn=!1,ut(Kn)}}}const mn="20240131-0",Ol=100,pn=0,en=200,tn=160;function Pl(e,t,n){let l,o,a,f,d,D,v,M,k,I,S,A,C,g,E,me,Le,De,Pt;const Ft=[1,2,4],ke=["1/4","1/2","1","2","4"],re={success:"#99ccff",error:"#ffcccc",warning:"#ffffcc"};let R={};const Q=new URL(document.location).searchParams.get("key");Q&&Vt[Q]?(R={...Vt[Q]},R.key=Q):(R={...Vt["18p"]},R.key="18p");let Ne=1,L=0,Te=16,O=[0],V=[en],U=[tn],ve=null,P="",q=re.success,nt=!1,h=new Array(R.panel_num).fill([]),$,J=1,ue="1",ft,ae=-1,ze=1,x=1;const je=new AudioContext,fe=je.createGain();fe.connect(je.destination);let ct,W,_t=!1,H=!1,Ge=[],ye=[];const Rt=()=>{const s=Ge.pop();s&&(s.undo?s.undo():(n(13,P="不正なコマンドです。"),n(14,q=re.error),console.log(s)),ye.push(s))},Pe=()=>{const s=ye.pop();s&&(s.redo?s.redo():commando.do?s.do():(n(13,P="不正なコマンドです。"),n(14,q=re.error),console.log(s)),Ge.push(s))},We=s=>{s.do?(ye=[],Ge.push(s),s.do()):(n(13,P="不正なコマンドです。"),n(14,q=re.error),console.log(s))},j=s=>{n(13,P=""),H&&Math.floor(s/192)!==Math.floor(L/192)&&setTimeout(gt,0),n(1,L=s)},Be=()=>j(L-3*64/Te),ce=()=>j(L+3*64/Te),pt=()=>j((o-1)*J*192),Ee=()=>j((o+1)*J*192),Ae=s=>()=>{n(13,P=""),n(2,Te=s),n(1,L=Math.floor(L/(192/s))*(192/s))},ee=(s,c)=>{n(3,h[s]=[...h[s],c],h)},Ce=(s,c)=>{n(3,h[s]=h[s].filter(K=>K!==c),h)},Ie=(s,c)=>{We({do:()=>{ee(s,c)},redo:()=>{ee(s,c),j(c)},undo:()=>{Ce(s,c),j(c)}})},qt=(s,c)=>{We({do:()=>{Ce(s,c)},redo:()=>{Ce(s,c),j(c)},undo:()=>{ee(s,c),j(c)}})},Fe=s=>()=>{n(13,P=""),h[s].includes(L)?qt(s,L):Ie(s,L),ve===null&&(ve=setTimeout(()=>{ve=null,ce()},Ol))},Me=(s,c)=>{s.forEach((K,b)=>{K.forEach(pe=>{c(b,pe)})})},Se=()=>{n(13,P="");const s=L,c=h.map(K=>K.filter(b=>b===s));We({do:()=>{Me(c,Ce)},redo:()=>{Me(c,Ce),j(s)},undo:()=>{Me(c,ee),j(s)}})},Lt=()=>{Be(),Se()},Je=()=>{confirm("現在編集中のデータは失われます。よろしいですか？")!==!1&&(n(3,h=new Array(R.panel_num).fill([])),Ge=[],ye=[],n(58,O=[]),n(59,V=[]),n(60,U=[]),n(12,Ne=1),n(1,L=0),n(13,P=""))},Oe=(s,c="クリップボードにコピーしました。")=>{navigator.clipboard?(navigator.clipboard.writeText(s),n(13,P=c),n(14,q=re.success)):prompt("コピーして保存してください。",s)},He=()=>{Oe(JSON.stringify({title:"punpane-editor-copy",editor_version:mn,copy_data_version:1,resolution:192,key:R.key,panels:me}),"クリップボードに現在のページをコピーしました。")},Tt=()=>{He();const s=o*J*192,c=h.map(K=>K.filter(b=>o*J*192<=b&&b<(o+1)*J*192));We({do:()=>{apply(Ce)},redo:()=>{Me(c,Ce),j(s)},undo:()=>{Me(c,ee),j(s)}}),n(13,P="クリップボードに現在のページをコピーしました。")},te=()=>JSON.stringify({title:"punpane-editor-save",key:R.key,panels:h,label_measures:O,begin_frames:V,bpms:U,resolution:192,chart_num:Ne,editor_version:mn,save_data_version:2}),dt=()=>Oe(te(),"クリップボードにセーブデータをコピーしました。"),lt=s=>{let c;try{c=JSON.parse(s)}catch(K){console.log(K),n(13,P="セーブデータの読み込みに失敗しました。"),n(14,q=re.error);return}if(c.title==="punpane-editor-copy"){const K=c.panels,b=o*J*192;We({do:()=>{Me(K,(pe,X)=>ee(pe,X+b))},redo:()=>{Me(K,(pe,X)=>ee(pe,X+b)),j(b)},undo:()=>{Me(K,(pe,X)=>Ce(pe,X+b)),j(b)}});return}if(c.save_data_version!==1&&c.title!=="punpane-editor-save"){n(13,P="セーブデータの形式が不正です"),n(14,q=re.error);return}confirm("セーブデータを読み込むと現在編集中のデータは失われます。よろしいですか？")!==!1&&(c.key?(n(0,R={...Vt[c.key]}),n(0,R.key=c.key,R)):(n(0,R={...Vt["18p"]}),n(0,R.key="18p",R)),n(1,L=0),n(3,h=c.panels??new Array(R.panel_num).fill([])),Ge=[],ye=[],n(58,O=c.label_measures??[]),n(59,V=c.begin_frames??[]),n(60,U=c.bpms??[]),n(12,Ne=c.chart_num),n(13,P="セーブデータを読み込みました。"))},Re=()=>{if(navigator.clipboard)navigator.clipboard.readText().then(s=>lt(s));else{const s=prompt("セーブデータを貼り付けてください。");s&&s!==""&&lt(s)}},ht=()=>h.map((s,c)=>`|${R.dos_chara[c]}${Ne!==1?Ne:""}_data=`+[...s.map(K=>{const b=Math.floor(K/192),pe=Math.max(...O.filter(z=>b>=z)),X=O.findIndex(z=>z===pe),$t=O[X]??O[0]??pn,it=V[X]??V[0]??en,Z=U[X]??U[0]??tn;return Math.round((K-$t*192)/192*4*60*60/Z+it)})].sort().join(",")).join("")+"|",ot=()=>Oe(ht(),"クリップボードにdosをコピーしました。"),jt=()=>{H&&(n(16,ae=((je.currentTime-ft)*S*x/60/4-.5)*192),ae>192*J&&(mt(),gt()),requestAnimationFrame(jt))},gt=()=>{if(H&&mt(),_t){const c=((o*J-M-.5)*4*60*60/A+I-200)/60,K=c<0?-c:0;fe.gain.value=ze,W=je.createBufferSource(),W.buffer=ct,W.playbackRate.value=x,W.connect(fe),ft=je.currentTime+K,W.start(ft+K,Math.max(c,0)),requestAnimationFrame(jt),H=!0}else ct?n(13,P="再生準備が未完了です。"):n(13,P="音楽ファイルが入力されていません。"),n(14,q=re.error)},mt=()=>{W.stop(),n(16,ae=-1),H=!1},_e=()=>{H?mt():gt()},Xt=()=>{fe.gain.value=ze},vt=()=>{W.playbackRate.value=x,H&&gt()},Bt=s=>{if(n(13,P=""),s.target.checked)n(58,O=[...O,l]),n(59,V=[...V,Math.round(C)]),n(60,U=[...U,S]);else{const c=d;n(58,O=O.filter((K,b)=>c!==b)),n(59,V=V.filter((K,b)=>c!==b)),n(60,U=U.filter((K,b)=>c!==b))}},Yt=s=>{n(13,P="");const c=s.target.value;let K;try{K=parseFloat(c)}catch(b){console.log(b),b.target.value=V[d];return}Number.isNaN(K)?s.target.value=V[d]:n(59,V[d]=K,V)},we=s=>{n(13,P="");const c=s.target.value;let K;try{K=parseFloat(c)}catch(b){console.log(b),b.target.value=U[d];return}Number.isNaN(K)||K<=0?s.target.value=U[d]:n(60,U[d]=K,U)},Zt=s=>{s.preventDefault(),n(15,nt=!0),n(13,P="")},yt=s=>{s.preventDefault(),n(15,nt=!1),n(13,P="")},It=s=>{if(s.stopPropagation(),s.preventDefault(),n(15,nt=!1),n(13,P=""),!s.dataTransfer||!s.dataTransfer.files)return;const c=s.dataTransfer.files;if(c.length===0)return;const K=c[0];if(K.type.match(/^audio/)){_t=!1;const b=new FileReader;b.onload=()=>{je.decodeAudioData(b.result,pe=>{ct=pe,n(13,P="音楽ファイルの読み込みが完了しました。"),n(14,q=re.success),_t=!0})},b.readAsArrayBuffer(K)}else if(K.type==="text/plain"){const b=new FileReader;b.onload=()=>{lt(b.result)},b.readAsText(K)}else n(13,P="非対応のファイルタイプです("+K.type+")"),n(14,q=re.error)},wt={ArrowUp:Be,ArrowDown:ce,ArrowLeft:pt,ArrowRight:Ee,KeyE:Be,KeyD:ce,KeyS:pt,KeyF:Ee,KeyB:Be,Space:ce,Digit1:Ae(4),Digit2:Ae(8),Digit3:Ae(16),Digit4:Ae(12),Digit5:Ae(24),Digit6:Ae(48),KeyR:Ae(32),Delete:Se,Backspace:Lt,KeyR:()=>n(4,$=!$),Enter:_e,KeyZ:Rt,KeyY:Pe,KeyC:He,KeyX:Tt,KeyV:Re,KeyS:dt,KeyD:ot},be=Object.assign({},wt);R.key_config.forEach((s,c)=>wt[s]=Fe(c));const zt=s=>{if(s.target.type!=="number"){const c=s.ctrlKey?be:wt;c[s.code]&&(c[s.code](),s.preventDefault())}},Qe=s=>{s.deltaY>0?ce():s.deltaY<0&&Be()},Gt=s=>{s.preventDefault(),s.returnValue="ページを移動してよろしいですか？現在編集中のデータは失われます。"};function Y(){$=this.checked,n(4,$)}function Ve(){J=Cn(this),n(5,J),n(26,Ft)}function Wt(){ue=Cn(this),n(6,ue),n(27,ke)}const Ue=s=>j(o*192*J+s);function Ht(){ze=nn(this.value),n(17,ze)}function qe(){x=nn(this.value),n(18,x)}function Qt(){Ne=nn(this.value),n(12,Ne)}const Xe=()=>n(13,P="");return e.$$.update=()=>{e.$$.dirty[0]&2&&n(8,l=Math.floor(L/192)),e.$$.dirty[0]&34&&n(9,o=Math.floor(L/192/J)),e.$$.dirty[0]&256|e.$$.dirty[1]&134217728&&n(65,a=Math.max(...O.filter(s=>l>=s))),e.$$.dirty[0]&544|e.$$.dirty[1]&134217728&&n(64,f=Math.max(...O.filter(s=>o*J>=s))),e.$$.dirty[1]&134217728|e.$$.dirty[2]&8&&n(61,d=O.findIndex(s=>s===a)),e.$$.dirty[1]&134217728|e.$$.dirty[2]&4&&n(63,D=O.findIndex(s=>s===f)),e.$$.dirty[1]&1207959552&&n(11,v=O[d]??O[0]??pn),e.$$.dirty[1]&134217728|e.$$.dirty[2]&2&&(M=O[D]??O[0]??pn),e.$$.dirty[1]&1342177280&&n(10,k=V[d]??V[0]??en),e.$$.dirty[1]&268435456|e.$$.dirty[2]&2&&(I=V[D]??V[0]??en),e.$$.dirty[1]&1610612736&&n(7,S=U[d]??U[0]??tn),e.$$.dirty[1]&536870912|e.$$.dirty[2]&2&&(A=U[D]??U[0]??tn),e.$$.dirty[0]&3202&&n(19,C=(L-v*192)/192*4*60*60/S+k),e.$$.dirty[0]&64&&n(62,g=(()=>{const s=ue.split("/");return s.length===1?parseFloat(s[0]):parseFloat(s[0])/parseFloat(s[1])})()),e.$$.dirty[0]&11&&n(24,E=h.map((s,c)=>s.includes(L)?R.colors[R.panel_color_def[c]]:R.colors[0])),e.$$.dirty[0]&552&&n(20,me=h.map(s=>s.map(c=>c-o*J*192).filter(c=>c>=0&&c<192*J))),e.$$.dirty[0]&26|e.$$.dirty[2]&1&&n(23,Le=h.map(s=>$?s.map(c=>(c-L)*g).filter(c=>c>0&&c<=96):s.map(c=>(L-c)*g).filter(c=>c>0&&c<=96))),e.$$.dirty[0]&36&&n(22,De=new Array(Te*J).fill(0).map((s,c)=>192/Te*c)),e.$$.dirty[0]&544|e.$$.dirty[1]&134217728&&n(21,Pt=O.filter(s=>o*J<s&&s<(o+1)*J).length>0)},[R,L,Te,h,$,J,ue,S,l,o,k,v,Ne,P,q,nt,ae,ze,x,C,me,Pt,De,Le,E,192,Ft,ke,re,Rt,Pe,j,Be,ce,pt,Ee,Ae,Fe,Se,Lt,Je,He,Tt,dt,Re,ot,_e,Xt,vt,Bt,Yt,we,Zt,yt,It,zt,Qe,Gt,O,V,U,d,g,D,f,a,Y,Ve,Wt,Ue,Ht,qe,Qt,Xe]}class Fl extends Al{constructor(t){super(),El(this,t,Pl,Sl,ul,{},null,[-1,-1,-1,-1])}}new Fl({target:document.getElementById("app")});
