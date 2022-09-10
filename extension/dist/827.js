(()=>{"use strict";var e,n,t,r,o={827:(e,n,t)=>{t.a(e,(async(e,n)=>{try{var r,o=t(375),_=t(166);async function a(e){const n=performance.now();r=await _.WebAnalyzation.new(e);const t=performance.now();console.log(`Initialization took ${t-n} milliseconds.`)}async function i(e){console.log("Searching");const n=performance.now();let t=await r.get_search_results(e);const o=performance.now();return console.log(`Search took ${o-n} milliseconds.`),t}function c(e,n,t,r){return r.get_edges(e,n,t)}await _.default(),await _.initThreadPool(navigator.hardwareConcurrency);const s={init:a,search:i,getEdges:c};o.Jj(s),n()}catch(u){n(u)}}),1)},606:(e,n,t)=>{function r(e,n){return new Promise((t=>{e.addEventListener("message",(function r({data:o}){null!=o&&o.type===n&&(e.removeEventListener("message",r),t(o))}))}))}let o;async function _(e,n,_){const a={type:"wasm_bindgen_worker_init",module:e,memory:n,receiver:_.receiver()};o=await Promise.all(Array.from({length:_.numThreads()},(async()=>{const e=new Worker(new URL(t.p+t.u(606),t.b),{type:void 0});return e.postMessage(a),await r(e,"wasm_bindgen_worker_ready"),e}))),_.build()}t.d(n,{Q:()=>_}),r(self,"wasm_bindgen_worker_init").then((async e=>{const n=await t.e(166).then(t.bind(t,166));await n.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),n.wbg_rayon_start_worker(e.receiver)}))},166:(e,n,t)=>{t.r(n),t.d(n,{WasmBindgenTestContext:()=>R,WebAnalyzation:()=>L,__wbgtest_console_debug:()=>P,__wbgtest_console_error:()=>O,__wbgtest_console_info:()=>j,__wbgtest_console_log:()=>T,__wbgtest_console_warn:()=>M,default:()=>q,get_search_results:()=>E,initSync:()=>B,initThreadPool:()=>C,wbg_rayon_PoolBuilder:()=>I,wbg_rayon_start_worker:()=>W});var r=t(606);let o;const _=new Array(32).fill(void 0);function a(e){return _[e]}_.push(void 0,null,!0,!1);let i=_.length;function c(e){const n=a(e);return function(e){e<36||(_[e]=i,i=e)}(e),n}function s(e){i===_.length&&_.push(_.length+1);const n=i;return i=_[n],_[n]=e,n}const u=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});let b;function w(){return b.buffer!==o.memory.buffer&&(b=new Uint8Array(o.memory.buffer)),b}function l(e,n){return u.decode(w().slice(e,e+n))}u.decode();let f=0;const g=new TextEncoder("utf-8");function d(e,n,t){if(void 0===t){const t=g.encode(e),r=n(t.length);return w().subarray(r,r+t.length).set(t),f=t.length,r}let r=e.length,o=n(r);const _=w();let a=0;for(;a<r;a++){const n=e.charCodeAt(a);if(n>127)break;_[o+a]=n}if(a!==r){0!==a&&(e=e.slice(a)),o=t(o,r,r=a+3*e.length);const n=function(e,n){const t=g.encode(e);return n.set(t),{read:e.length,written:t.length}}(e,w().subarray(o+a,o+r));a+=n.written}return f=a,o}let p,m;function y(){return p.buffer!==o.memory.buffer&&(p=new Int32Array(o.memory.buffer)),p}function h(e,n,t,r){const _={a:e,b:n,cnt:1,dtor:t},a=(...e)=>{_.cnt++;const n=_.a;_.a=0;try{return r(n,_.b,...e)}finally{0==--_.cnt?o.__wbindgen_export_3.get(_.dtor)(n,_.b):_.a=n}};return a.original=_,a}function v(e,n,t){o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8c43bd11fcb9bc93(e,n,s(t))}function k(e,n){const t=n(4*e.length),r=(m.buffer!==o.memory.buffer&&(m=new Uint32Array(o.memory.buffer)),m);for(let n=0;n<e.length;n++)r[t/4+n]=s(e[n]);return f=e.length,t}function E(e,n){!function(e,n){if(!(e instanceof n))throw new Error(`expected instance of ${n.name}`);e.ptr}(e,L);const t=d(n,o.__wbindgen_malloc,o.__wbindgen_realloc),r=f;return c(o.get_search_results(e.ptr,t,r))}function A(e,n){try{return e.apply(this,n)}catch(e){o.__wbindgen_exn_store(s(e))}}let S=32;function x(e){if(1==S)throw new Error("out of js stack");return _[--S]=e,S}function T(e){try{o.__wbgtest_console_log(x(e))}finally{_[S++]=void 0}}function P(e){try{o.__wbgtest_console_debug(x(e))}finally{_[S++]=void 0}}function j(e){try{o.__wbgtest_console_info(x(e))}finally{_[S++]=void 0}}function M(e){try{o.__wbgtest_console_warn(x(e))}finally{_[S++]=void 0}}function O(e){try{o.__wbgtest_console_error(x(e))}finally{_[S++]=void 0}}function C(e){return c(o.initThreadPool(e))}function W(e){o.wbg_rayon_start_worker(e)}class R{static __wrap(e){const n=Object.create(R.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wasmbindgentestcontext_free(e)}constructor(){const e=o.wasmbindgentestcontext_new();return R.__wrap(e)}args(e){const n=k(e,o.__wbindgen_malloc),t=f;o.wasmbindgentestcontext_args(this.ptr,n,t)}run(e){const n=k(e,o.__wbindgen_malloc),t=f;return c(o.wasmbindgentestcontext_run(this.ptr,n,t))}}class L{static __wrap(e){const n=Object.create(L.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_webanalyzation_free(e)}static new(e){const n=k(e,o.__wbindgen_malloc),t=f;return c(o.webanalyzation_new(n,t))}get_search_results(e){const n=d(e,o.__wbindgen_malloc,o.__wbindgen_realloc),t=f;return c(o.webanalyzation_get_search_results(this.ptr,n,t))}get_graph(){try{const t=o.__wbindgen_add_to_stack_pointer(-16);o.webanalyzation_get_graph(t,this.ptr);var e=y()[t/4+0],n=y()[t/4+1];if(y()[t/4+2])throw c(n);return c(e)}finally{o.__wbindgen_add_to_stack_pointer(16)}}get_edges(e,n,t){try{const a=o.__wbindgen_add_to_stack_pointer(-16),i=d(e,o.__wbindgen_malloc,o.__wbindgen_realloc),s=f,u=d(n,o.__wbindgen_malloc,o.__wbindgen_realloc),b=f;o.webanalyzation_get_edges(a,this.ptr,i,s,u,b,t);var r=y()[a/4+0],_=y()[a/4+1];if(y()[a/4+2])throw c(_);return c(r)}finally{o.__wbindgen_add_to_stack_pointer(16)}}}class I{static __wrap(e){const n=Object.create(I.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}function z(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(e){c(e)},e.wbg.__wbg_webanalyzation_new=function(e){return s(L.__wrap(e))},e.wbg.__wbg_title_d04bb8def28b5049=function(e,n){const t=d(a(n).title,o.__wbindgen_malloc,o.__wbindgen_realloc),r=f;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_url_bbb36d4b4ca7d7a7=function(e,n){const t=d(a(n).url,o.__wbindgen_malloc,o.__wbindgen_realloc),r=f;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_visitcount_92397da46723acdb=function(e){return a(e).visitCount},e.wbg.__wbg_new_68adb0d58759a4ed=function(){return s(new Object)},e.wbg.__wbindgen_number_new=function(e){return s(e)},e.wbg.__wbg_set_2e79e744454afade=function(e,n,t){a(e)[c(n)]=c(t)},e.wbg.__wbindgen_string_new=function(e,n){return s(l(e,n))},e.wbg.__wbindgen_object_clone_ref=function(e){return s(a(e))},e.wbg.__wbindgen_is_undefined=function(e){return void 0===a(e)},e.wbg.__wbindgen_string_get=function(e,n){const t=a(n),r="string"==typeof t?t:void 0;var _=null==r?0:d(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=f;y()[e/4+1]=i,y()[e/4+0]=_},e.wbg.__wbindgen_cb_drop=function(e){const n=c(e).original;return 1==n.cnt--&&(n.a=0,!0)},e.wbg.__wbg_waitAsync_330eb512f6e175f6=function(){return s(Atomics.waitAsync)},e.wbg.__wbg_waitAsync_dba9c16a554f262d=function(e,n,t){return s(Atomics.waitAsync(a(e),n,t))},e.wbg.__wbg_async_9bae62b1ade37fe2=function(e){return a(e).async},e.wbg.__wbg_value_2bd01c1356da77f6=function(e){return s(a(e).value)},e.wbg.__wbg_data_751f064cdd700ef0=function(e){return s(a(e).data)},e.wbg.__wbg_setonmessage_a3c3e221c33219db=function(e,n){a(e).onmessage=a(n)},e.wbg.__wbg_new_072d8a04b23f519d=function(){return A((function(e,n){return s(new Worker(l(e,n)))}),arguments)},e.wbg.__wbg_postMessage_5b2760aaaa9d1284=function(){return A((function(e,n){a(e).postMessage(a(n))}),arguments)},e.wbg.__wbg_new_2ab697f1555e0dbc=function(){return s(new Array)},e.wbg.__wbg_newnoargs_fc5356289219b93b=function(e,n){return s(new Function(l(e,n)))},e.wbg.__wbg_new_f0540490a24a79bb=function(){return s(new Map)},e.wbg.__wbg_call_4573f605ca4b5f10=function(){return A((function(e,n){return s(a(e).call(a(n)))}),arguments)},e.wbg.__wbg_self_ba1ddafe9ea7a3a2=function(){return A((function(){return s(self.self)}),arguments)},e.wbg.__wbg_window_be3cc430364fd32c=function(){return A((function(){return s(window.window)}),arguments)},e.wbg.__wbg_globalThis_56d9c9f814daeeee=function(){return A((function(){return s(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_8c35aeee4ac77f2b=function(){return A((function(){return s(t.g.global)}),arguments)},e.wbg.__wbg_encodeURIComponent_8bdf87f4b3f85256=function(e,n){return s(encodeURIComponent(l(e,n)))},e.wbg.__wbg_forEach_672aa2f33eb5e5dd=function(e,n,t){try{var r={a:n,b:t};a(e).forEach(((e,n,t)=>{const _=r.a;r.a=0;try{return function(e,n,t,r,_){o.wasm_bindgen__convert__closures__invoke3_mut__h0a6d76949ceafbd9(e,n,s(t),r,s(_))}(_,r.b,e,n,t)}finally{r.a=_}}))}finally{r.a=r.b=0}},e.wbg.__wbg_of_891992dde2057125=function(e,n,t){return s(Array.of(a(e),a(n),a(t)))},e.wbg.__wbg_push_811c8b08bf4ff9d5=function(e,n){return a(e).push(a(n))},e.wbg.__wbg_message_136debd54c3edfe4=function(e){return s(a(e).message)},e.wbg.__wbg_name_d0cc50bf0e4abe7f=function(e){return s(a(e).name)},e.wbg.__wbg_call_9855a4612eb496cb=function(){return A((function(e,n,t){return s(a(e).call(a(n),a(t)))}),arguments)},e.wbg.__wbg_set_e44d2fe94a18567f=function(e,n,t){return s(a(e).set(a(n),a(t)))},e.wbg.__wbg_new_78403b138428b684=function(e,n){try{var t={a:e,b:n};const r=new Promise(((e,n)=>{const r=t.a;t.a=0;try{return function(e,n,t,r){o.wasm_bindgen__convert__closures__invoke2_mut__h607bc3ac1309d673(e,n,s(t),s(r))}(r,t.b,e,n)}finally{t.a=r}}));return s(r)}finally{t.a=t.b=0}},e.wbg.__wbg_resolve_f269ce174f88b294=function(e){return s(Promise.resolve(a(e)))},e.wbg.__wbg_then_1c698eedca15eed6=function(e,n){return s(a(e).then(a(n)))},e.wbg.__wbg_buffer_de1150f91b23aa89=function(e){return s(a(e).buffer)},e.wbg.__wbg_new_c5909f2edcd0f06c=function(e){return s(new Int32Array(a(e)))},e.wbg.__wbindgen_throw=function(e,n){throw new Error(l(e,n))},e.wbg.__wbindgen_rethrow=function(e){throw c(e)},e.wbg.__wbindgen_module=function(){return s($.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return s(o.memory)},e.wbg.__wbg_log_9f62f7aec2239134=function(e,n){console.log(l(e,n))},e.wbg.__wbg_static_accessor_document_a252bc3cc050bdfa=function(){return s(document)},e.wbg.__wbg_self_92db31f523365103=function(e){return s(a(e).self)},e.wbg.__wbindgen_jsval_eq=function(e,n){return a(e)===a(n)},e.wbg.__wbg_String_c0b54d8ed9bd74fb=function(e,n){const t=d(String(a(n)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=f;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_new_693216e109162396=function(){return s(new Error)},e.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,n){const t=d(a(n).stack,o.__wbindgen_malloc,o.__wbindgen_realloc),r=f;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_error_09919627ac0992f5=function(e,n){try{console.error(l(e,n))}finally{o.__wbindgen_free(e,n)}},e.wbg.__wbg_getElementById_78ca18146344bdb4=function(e,n,t){return s(a(e).getElementById(l(n,t)))},e.wbg.__wbg_settextcontent_b58240082f76d75b=function(e,n,t){a(e).textContent=l(n,t)},e.wbg.__wbg_textcontent_cd585fbf65e7a2ac=function(e,n){const t=d(a(n).textContent,o.__wbindgen_malloc,o.__wbindgen_realloc),r=f;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_stack_029d3b83ccf4329d=function(e){return s(a(e).stack)},e.wbg.__wbg_stack_e6358f0668598d8f=function(e,n){const t=d(a(n).stack,o.__wbindgen_malloc,o.__wbindgen_realloc),r=f;y()[e/4+1]=r,y()[e/4+0]=t},e.wbg.__wbg_startWorkers_04f63eca19916b8f=function(e,n,t){return s((0,r.Q)(c(e),c(n),I.__wrap(t)))},e.wbg.__wbindgen_closure_wrapper242=function(e,n,t){return s(h(e,n,49,v))},e.wbg.__wbindgen_closure_wrapper243=function(e,n,t){return s(h(e,n,49,v))},e}function U(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function N(e,n){return o=e.exports,$.__wbindgen_wasm_module=n,p=new Int32Array(o.memory.buffer),m=new Uint32Array(o.memory.buffer),b=new Uint8Array(o.memory.buffer),o.__wbindgen_start(),o}function B(e,n){const t=z();U(t,n);const r=new WebAssembly.Module(e);return N(new WebAssembly.Instance(r,t),r)}async function $(e,n){void 0===e&&(e=new URL(t(133),t.b));const r=z();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),U(r,n);const{instance:o,module:_}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,r);return N(o,_)}const q=$},133:(e,n,t)=>{e.exports=t.p+"c3850d6400c6729b99c5.wasm"},375:(e,n,t)=>{t.d(n,{Jj:()=>s});const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),_=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),i=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>i(e)&&e[r],serialize(e){const{port1:n,port2:t}=new MessageChannel;return s(e,n),[t,[t]]},deserialize:e=>(e.start(),w(e,[],undefined))}],["throw",{canHandle:e=>i(e)&&a in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function s(e,n=self){n.addEventListener("message",(function t(o){if(!o||!o.data)return;const{id:_,type:i,path:c}=Object.assign({path:[]},o.data),b=(o.data.argumentList||[]).map(d);let w;try{const n=c.slice(0,-1).reduce(((e,n)=>e[n]),e),t=c.reduce(((e,n)=>e[n]),e);switch(i){case"GET":w=t;break;case"SET":n[c.slice(-1)[0]]=d(o.data.value),w=!0;break;case"APPLY":w=t.apply(n,b);break;case"CONSTRUCT":w=function(e){return Object.assign(e,{[r]:!0})}(new t(...b));break;case"ENDPOINT":{const{port1:n,port2:t}=new MessageChannel;s(e,t),w=function(e,n){return f.set(e,n),e}(n,[n])}break;case"RELEASE":w=void 0;break;default:return}}catch(e){w={value:e,[a]:0}}Promise.resolve(w).catch((e=>({value:e,[a]:0}))).then((e=>{const[r,o]=g(e);n.postMessage(Object.assign(Object.assign({},r),{id:_}),o),"RELEASE"===i&&(n.removeEventListener("message",t),u(n))}))})),n.start&&n.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function b(e){if(e)throw new Error("Proxy has been released and is not useable")}function w(e,n=[],t=function(){}){let r=!1;const a=new Proxy(t,{get(t,o){if(b(r),o===_)return()=>p(e,{type:"RELEASE",path:n.map((e=>e.toString()))}).then((()=>{u(e),r=!0}));if("then"===o){if(0===n.length)return{then:()=>a};const t=p(e,{type:"GET",path:n.map((e=>e.toString()))}).then(d);return t.then.bind(t)}return w(e,[...n,o])},set(t,o,_){b(r);const[a,i]=g(_);return p(e,{type:"SET",path:[...n,o].map((e=>e.toString())),value:a},i).then(d)},apply(t,_,a){b(r);const i=n[n.length-1];if(i===o)return p(e,{type:"ENDPOINT"}).then(d);if("bind"===i)return w(e,n.slice(0,-1));const[c,s]=l(a);return p(e,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:c},s).then(d)},construct(t,o){b(r);const[_,a]=l(o);return p(e,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:_},a).then(d)}});return a}function l(e){const n=e.map(g);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const f=new WeakMap;function g(e){for(const[n,t]of c)if(t.canHandle(e)){const[r,o]=t.serialize(e);return[{type:"HANDLER",name:n,value:r},o]}return[{type:"RAW",value:e},f.get(e)||[]]}function d(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function p(e,n,t){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===o&&(e.removeEventListener("message",n),r(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},n),t)}))}}},_={};function a(e){var n=_[e];if(void 0!==n)return n.exports;var t=_[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(o,_,a)=>{var i;a&&((i=[]).d=1),i&&(i.moduleId=o.id);var c,s,u,b=new Set,w=o.exports,l=new Promise(((e,n)=>{u=n,s=e}));l[n]=w,l[e]=e=>(i&&e(i),b.forEach(e),l.catch((e=>{}))),l.moduleId=o.id,o.exports=l,_((o=>{var _;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var _=[];_.d=0,o.then((e=>{a[n]=e,r(_)}),(e=>{a[t]=e,r(_)}));var a={};return a[e]=e=>e(_),a}}var i={};return i[e]=e=>{},i[n]=o,i})))(o);var a=()=>c.map((e=>{if(e[t])throw e[t];return e[n]})),s=new Promise((n=>{(_=()=>n(a)).r=0;var t=e=>e!==i&&!b.has(e)&&(b.add(e),e&&!e.d&&(_.r++,e.push(_)));c.map((n=>n[e](t)))}));return _.r?s:a()}),(e=>(e?u(l[t]=e):s(w),r(i)))),i&&(i.d=0)},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((n,t)=>(a.f[t](e,n),n)),[])),a.u=e=>e+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=self.location+"";var e={827:1,348:1,166:1,606:1};a.f.i=(n,t)=>{e[n]||importScripts(a.p+a.u(n))};var n=self.webpackChunkWeb_nav_Extension=self.webpackChunkWeb_nav_Extension||[],t=n.push.bind(n);n.push=n=>{var[r,o,_]=n;for(var i in o)a.o(o,i)&&(a.m[i]=o[i]);for(_&&_(a);r.length;)e[r.pop()]=1;t(n)}})(),a(827)})();