(()=>{"use strict";var e={606:(e,n,t)=>{function r(e,n){return new Promise((t=>{e.addEventListener("message",(function r({data:o}){null!=o&&o.type===n&&(e.removeEventListener("message",r),t(o))}))}))}let o;async function a(e,n,a){const i={type:"wasm_bindgen_worker_init",module:e,memory:n,receiver:a.receiver()};o=await Promise.all(Array.from({length:a.numThreads()},(async()=>{const e=new Worker(new URL(t.p+t.u(606),t.b),{type:void 0});return e.postMessage(i),await r(e,"wasm_bindgen_worker_ready"),e}))),a.build()}t.d(n,{Q:()=>a}),r(self,"wasm_bindgen_worker_init").then((async e=>{const n=await t.e(166).then(t.bind(t,166));await n.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),n.wbg_rayon_start_worker(e.receiver)}))},166:(e,n,t)=>{t.r(n),t.d(n,{WebAnalyzation:()=>S,default:()=>W,initSync:()=>j,initThreadPool:()=>E,wbg_rayon_PoolBuilder:()=>P,wbg_rayon_start_worker:()=>k});var r=t(606);let o;const a=new Array(32).fill(void 0);function i(e){return a[e]}a.push(void 0,null,!0,!1);let s=a.length;function _(e){const n=i(e);return function(e){e<36||(a[e]=s,s=e)}(e),n}function c(e){s===a.length&&a.push(a.length+1);const n=s;return s=a[n],a[n]=e,n}const u=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});let b;function w(){return b.buffer!==o.memory.buffer&&(b=new Uint8Array(o.memory.buffer)),b}function f(e,n){return u.decode(w().slice(e,e+n))}u.decode();let l=0;const g=new TextEncoder("utf-8");function d(e,n,t){if(void 0===t){const t=g.encode(e),r=n(t.length);return w().subarray(r,r+t.length).set(t),l=t.length,r}let r=e.length,o=n(r);const a=w();let i=0;for(;i<r;i++){const n=e.charCodeAt(i);if(n>127)break;a[o+i]=n}if(i!==r){0!==i&&(e=e.slice(i)),o=t(o,r,r=i+3*e.length);const n=function(e,n){const t=g.encode(e);return n.set(t),{read:e.length,written:t.length}}(e,w().subarray(o+i,o+r));i+=n.written}return l=i,o}let p,m;function y(){return p.buffer!==o.memory.buffer&&(p=new Int32Array(o.memory.buffer)),p}function h(e,n,t,r){const a={a:e,b:n,cnt:1,dtor:t},i=(...e)=>{a.cnt++;const n=a.a;a.a=0;try{return r(n,a.b,...e)}finally{0==--a.cnt?o.__wbindgen_export_3.get(a.dtor)(n,a.b):a.a=n}};return i.original=a,i}function v(e,n,t){o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8c43bd11fcb9bc93(e,n,c(t))}function A(e,n){try{return e.apply(this,n)}catch(e){o.__wbindgen_exn_store(c(e))}}function E(e){return _(o.initThreadPool(e))}function k(e){o.wbg_rayon_start_worker(e)}class S{static __wrap(e){const n=Object.create(S.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_webanalyzation_free(e)}static new(e){const n=function(e,n){const t=n(4*e.length),r=(m.buffer!==o.memory.buffer&&(m=new Uint32Array(o.memory.buffer)),m);for(let n=0;n<e.length;n++)r[t/4+n]=c(e[n]);return l=e.length,t}(e,o.__wbindgen_malloc),t=l;return _(o.webanalyzation_new(n,t))}get_graph(){try{const t=o.__wbindgen_add_to_stack_pointer(-16);o.webanalyzation_get_graph(t,this.ptr);var e=y()[t/4+0],n=y()[t/4+1];if(y()[t/4+2])throw _(n);return _(e)}finally{o.__wbindgen_add_to_stack_pointer(16)}}get_edges(e,n,t){try{const i=o.__wbindgen_add_to_stack_pointer(-16),s=d(e,o.__wbindgen_malloc,o.__wbindgen_realloc),c=l,u=d(n,o.__wbindgen_malloc,o.__wbindgen_realloc),b=l;o.webanalyzation_get_edges(i,this.ptr,s,c,u,b,t);var r=y()[i/4+0],a=y()[i/4+1];if(y()[i/4+2])throw _(a);return _(r)}finally{o.__wbindgen_add_to_stack_pointer(16)}}}class P{static __wrap(e){const n=Object.create(P.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}function T(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(e){_(e)},e.wbg.__wbg_webanalyzation_new=function(e){return c(S.__wrap(e))},e.wbg.__wbg_title_d04bb8def28b5049=function(e,n){const t=d(i(n).title,o.__wbindgen_malloc,o.__wbindgen_realloc),r=l;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_url_bbb36d4b4ca7d7a7=function(e,n){const t=d(i(n).url,o.__wbindgen_malloc,o.__wbindgen_realloc),r=l;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_visitcount_92397da46723acdb=function(e){return i(e).visitCount},e.wbg.__wbg_new_68adb0d58759a4ed=function(){return c(new Object)},e.wbg.__wbindgen_number_new=function(e){return c(e)},e.wbg.__wbg_set_2e79e744454afade=function(e,n,t){i(e)[_(n)]=_(t)},e.wbg.__wbindgen_string_new=function(e,n){return c(f(e,n))},e.wbg.__wbindgen_object_clone_ref=function(e){return c(i(e))},e.wbg.__wbindgen_is_undefined=function(e){return void 0===i(e)},e.wbg.__wbindgen_string_get=function(e,n){const t=i(n),r="string"==typeof t?t:void 0;var a=null==r?0:d(r,o.__wbindgen_malloc,o.__wbindgen_realloc),s=l;y()[e/4+1]=s,y()[e/4+0]=a},e.wbg.__wbindgen_cb_drop=function(e){const n=_(e).original;return 1==n.cnt--&&(n.a=0,!0)},e.wbg.__wbg_waitAsync_330eb512f6e175f6=function(){return c(Atomics.waitAsync)},e.wbg.__wbg_waitAsync_dba9c16a554f262d=function(e,n,t){return c(Atomics.waitAsync(i(e),n,t))},e.wbg.__wbg_async_9bae62b1ade37fe2=function(e){return i(e).async},e.wbg.__wbg_value_2bd01c1356da77f6=function(e){return c(i(e).value)},e.wbg.__wbg_data_751f064cdd700ef0=function(e){return c(i(e).data)},e.wbg.__wbg_setonmessage_a3c3e221c33219db=function(e,n){i(e).onmessage=i(n)},e.wbg.__wbg_new_072d8a04b23f519d=function(){return A((function(e,n){return c(new Worker(f(e,n)))}),arguments)},e.wbg.__wbg_postMessage_5b2760aaaa9d1284=function(){return A((function(e,n){i(e).postMessage(i(n))}),arguments)},e.wbg.__wbg_new_2ab697f1555e0dbc=function(){return c(new Array)},e.wbg.__wbg_new_f0540490a24a79bb=function(){return c(new Map)},e.wbg.__wbg_encodeURIComponent_8bdf87f4b3f85256=function(e,n){return c(encodeURIComponent(f(e,n)))},e.wbg.__wbg_of_891992dde2057125=function(e,n,t){return c(Array.of(i(e),i(n),i(t)))},e.wbg.__wbg_push_811c8b08bf4ff9d5=function(e,n){return i(e).push(i(n))},e.wbg.__wbg_call_9855a4612eb496cb=function(){return A((function(e,n,t){return c(i(e).call(i(n),i(t)))}),arguments)},e.wbg.__wbg_set_e44d2fe94a18567f=function(e,n,t){return c(i(e).set(i(n),i(t)))},e.wbg.__wbg_new_78403b138428b684=function(e,n){try{var t={a:e,b:n};const r=new Promise(((e,n)=>{const r=t.a;t.a=0;try{return function(e,n,t,r){o.wasm_bindgen__convert__closures__invoke2_mut__h607bc3ac1309d673(e,n,c(t),c(r))}(r,t.b,e,n)}finally{t.a=r}}));return c(r)}finally{t.a=t.b=0}},e.wbg.__wbg_resolve_f269ce174f88b294=function(e){return c(Promise.resolve(i(e)))},e.wbg.__wbg_then_1c698eedca15eed6=function(e,n){return c(i(e).then(i(n)))},e.wbg.__wbg_buffer_de1150f91b23aa89=function(e){return c(i(e).buffer)},e.wbg.__wbg_new_c5909f2edcd0f06c=function(e){return c(new Int32Array(i(e)))},e.wbg.__wbindgen_throw=function(e,n){throw new Error(f(e,n))},e.wbg.__wbindgen_rethrow=function(e){throw _(e)},e.wbg.__wbindgen_module=function(){return c(R.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return c(o.memory)},e.wbg.__wbg_startWorkers_04f63eca19916b8f=function(e,n,t){return c((0,r.Q)(_(e),_(n),P.__wrap(t)))},e.wbg.__wbindgen_closure_wrapper172=function(e,n,t){return c(h(e,n,33,v))},e.wbg.__wbindgen_closure_wrapper173=function(e,n,t){return c(h(e,n,33,v))},e}function M(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function O(e,n){return o=e.exports,R.__wbindgen_wasm_module=n,p=new Int32Array(o.memory.buffer),m=new Uint32Array(o.memory.buffer),b=new Uint8Array(o.memory.buffer),o.__wbindgen_start(),o}function j(e,n){const t=T();M(t,n);const r=new WebAssembly.Module(e);return O(new WebAssembly.Instance(r,t),r)}async function R(e,n){void 0===e&&(e=new URL(t(133),t.b));const r=T();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),M(r,n);const{instance:o,module:a}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,r);return O(o,a)}const W=R},133:(e,n,t)=>{e.exports=t.p+"fad63c2668884ed6f130.wasm"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[])),t.u=e=>e+".js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{t.b=self.location+"";var e={228:1,348:1,166:1,606:1};t.f.i=(n,r)=>{e[n]||importScripts(t.p+t.u(n))};var n=self.webpackChunkWeb_nav_Extension=self.webpackChunkWeb_nav_Extension||[],r=n.push.bind(n);n.push=n=>{var[o,a,i]=n;for(var s in a)t.o(a,s)&&(t.m[s]=a[s]);for(i&&i(t);o.length;)e[o.pop()]=1;r(n)}})(),(()=>{const e=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,i=new Map([["proxy",{canHandle:n=>a(n)&&n[e],serialize(e){const{port1:n,port2:t}=new MessageChannel;return s(e,n),[t,[t]]},deserialize:e=>(e.start(),u(e,[],undefined))}],["throw",{canHandle:e=>a(e)&&o in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function s(n,t=self){t.addEventListener("message",(function r(a){if(!a||!a.data)return;const{id:i,type:c,path:u}=Object.assign({path:[]},a.data),b=(a.data.argumentList||[]).map(l);let g;try{const t=u.slice(0,-1).reduce(((e,n)=>e[n]),n),r=u.reduce(((e,n)=>e[n]),n);switch(c){case"GET":g=r;break;case"SET":t[u.slice(-1)[0]]=l(a.data.value),g=!0;break;case"APPLY":g=r.apply(t,b);break;case"CONSTRUCT":g=function(n){return Object.assign(n,{[e]:!0})}(new r(...b));break;case"ENDPOINT":{const{port1:e,port2:t}=new MessageChannel;s(n,t),g=function(e,n){return w.set(e,n),e}(e,[e])}break;case"RELEASE":g=void 0;break;default:return}}catch(e){g={value:e,[o]:0}}Promise.resolve(g).catch((e=>({value:e,[o]:0}))).then((e=>{const[n,o]=f(e);t.postMessage(Object.assign(Object.assign({},n),{id:i}),o),"RELEASE"===c&&(t.removeEventListener("message",r),_(t))}))})),t.start&&t.start()}function _(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function c(e){if(e)throw new Error("Proxy has been released and is not useable")}function u(e,t=[],o=function(){}){let a=!1;const i=new Proxy(o,{get(n,o){if(c(a),o===r)return()=>g(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{_(e),a=!0}));if("then"===o){if(0===t.length)return{then:()=>i};const n=g(e,{type:"GET",path:t.map((e=>e.toString()))}).then(l);return n.then.bind(n)}return u(e,[...t,o])},set(n,r,o){c(a);const[i,s]=f(o);return g(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:i},s).then(l)},apply(r,o,i){c(a);const s=t[t.length-1];if(s===n)return g(e,{type:"ENDPOINT"}).then(l);if("bind"===s)return u(e,t.slice(0,-1));const[_,w]=b(i);return g(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:_},w).then(l)},construct(n,r){c(a);const[o,i]=b(r);return g(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},i).then(l)}});return i}function b(e){const n=e.map(f);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const w=new WeakMap;function f(e){for(const[n,t]of i)if(t.canHandle(e)){const[r,o]=t.serialize(e);return[{type:"HANDLER",name:n,value:r},o]}return[{type:"RAW",value:e},w.get(e)||[]]}function l(e){switch(e.type){case"HANDLER":return i.get(e.name).deserialize(e.value);case"RAW":return e.value}}function g(e,n,t){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===o&&(e.removeEventListener("message",n),r(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},n),t)}))}var d,p=t(166);s({init:async function(e){await p.default(),await p.initThreadPool(navigator.hardwareConcurrency);const n=performance.now();d=await p.WebAnalyzation.new(e);const t=performance.now();console.log(`Initialization took ${t-n} milliseconds.`)},getEdges:function(e){return d.get_edges(e.title,e.url,e.visitCount)}})})()})();