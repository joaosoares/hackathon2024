"use strict";(self.webpackChunkui_react=self.webpackChunkui_react||[]).push([[3291],{15393:(e,t,s)=>{s.d(t,{Aq:()=>q,CR:()=>C,J8:()=>c,PG:()=>u,Ps:()=>w,R5:()=>b,Vg:()=>v,Vs:()=>p,_F:()=>y,eP:()=>h,hF:()=>k,jT:()=>R,jg:()=>g,pY:()=>P,rH:()=>f,vp:()=>m,y5:()=>T,zS:()=>j,zh:()=>_});var i=s(71050),n=s(17301),o=s(4669),r=s(5976),l=s(1432),a=s(5635);function c(e){return!!e&&"function"==typeof e.then}function u(e){const t=new i.AU,s=e(t.token),o=new Promise(((e,i)=>{const o=t.token.onCancellationRequested((()=>{o.dispose(),i(new n.FU)}));Promise.resolve(s).then((s=>{o.dispose(),t.dispose(),e(s)}),(e=>{o.dispose(),t.dispose(),i(e)}))}));return new class{cancel(){t.cancel(),t.dispose()}then(e,t){return o.then(e,t)}catch(e){return this.then(void 0,e)}finally(e){return o.finally(e)}}}function h(e,t,s){return new Promise(((i,n)=>{const o=t.onCancellationRequested((()=>{o.dispose(),i(s)}));e.then(i,n).finally((()=>o.dispose()))}))}class d{constructor(){this.isDisposed=!1,this.activePromise=null,this.queuedPromise=null,this.queuedPromiseFactory=null}queue(e){if(this.isDisposed)return Promise.reject(new Error("Throttler is disposed"));if(this.activePromise){if(this.queuedPromiseFactory=e,!this.queuedPromise){const e=()=>{if(this.queuedPromise=null,this.isDisposed)return;const e=this.queue(this.queuedPromiseFactory);return this.queuedPromiseFactory=null,e};this.queuedPromise=new Promise((t=>{this.activePromise.then(e,e).then(t)}))}return new Promise(((e,t)=>{this.queuedPromise.then(e,t)}))}return this.activePromise=e(),new Promise(((e,t)=>{this.activePromise.then((t=>{this.activePromise=null,e(t)}),(e=>{this.activePromise=null,t(e)}))}))}dispose(){this.isDisposed=!0}}class m{constructor(e){this.defaultDelay=e,this.deferred=null,this.completionPromise=null,this.doResolve=null,this.doReject=null,this.task=null}trigger(e,t=this.defaultDelay){this.task=e,this.cancelTimeout(),this.completionPromise||(this.completionPromise=new Promise(((e,t)=>{this.doResolve=e,this.doReject=t})).then((()=>{if(this.completionPromise=null,this.doResolve=null,this.task){const e=this.task;return this.task=null,e()}})));const s=()=>{var e;this.deferred=null,null===(e=this.doResolve)||void 0===e||e.call(this,null)};return this.deferred=t===a.n?(e=>{let t=!0;return queueMicrotask((()=>{t&&(t=!1,e())})),{isTriggered:()=>t,dispose:()=>{t=!1}}})(s):((e,t)=>{let s=!0;const i=setTimeout((()=>{s=!1,t()}),e);return{isTriggered:()=>s,dispose:()=>{clearTimeout(i),s=!1}}})(t,s),this.completionPromise}isTriggered(){var e;return!!(null===(e=this.deferred)||void 0===e?void 0:e.isTriggered())}cancel(){var e;this.cancelTimeout(),this.completionPromise&&(null===(e=this.doReject)||void 0===e||e.call(this,new n.FU),this.completionPromise=null)}cancelTimeout(){var e;null===(e=this.deferred)||void 0===e||e.dispose(),this.deferred=null}dispose(){this.cancel()}}class f{constructor(e){this.delayer=new m(e),this.throttler=new d}trigger(e,t){return this.delayer.trigger((()=>this.throttler.queue(e)),t)}cancel(){this.delayer.cancel()}dispose(){this.delayer.dispose(),this.throttler.dispose()}}function p(e,t){return t?new Promise(((s,i)=>{const o=setTimeout((()=>{r.dispose(),s()}),e),r=t.onCancellationRequested((()=>{clearTimeout(o),r.dispose(),i(new n.FU)}))})):u((t=>p(e,t)))}function v(e,t=0,s){const i=setTimeout((()=>{e(),s&&n.dispose()}),t),n=(0,r.OF)((()=>{clearTimeout(i),null==s||s.deleteAndLeak(n)}));return null==s||s.add(n),n}function w(e,t=(e=>!!e),s=null){let i=0;const n=e.length,o=()=>{if(i>=n)return Promise.resolve(s);const r=e[i++];return Promise.resolve(r()).then((e=>t(e)?Promise.resolve(e):o()))};return o()}class y{constructor(e,t){this._isDisposed=!1,this._token=-1,"function"==typeof e&&"number"==typeof t&&this.setIfNotSet(e,t)}dispose(){this.cancel(),this._isDisposed=!0}cancel(){-1!==this._token&&(clearTimeout(this._token),this._token=-1)}cancelAndSet(e,t){if(this._isDisposed)throw new n.he("Calling 'cancelAndSet' on a disposed TimeoutTimer");this.cancel(),this._token=setTimeout((()=>{this._token=-1,e()}),t)}setIfNotSet(e,t){if(this._isDisposed)throw new n.he("Calling 'setIfNotSet' on a disposed TimeoutTimer");-1===this._token&&(this._token=setTimeout((()=>{this._token=-1,e()}),t))}}class _{constructor(){this.disposable=void 0,this.isDisposed=!1}cancel(){var e;null===(e=this.disposable)||void 0===e||e.dispose(),this.disposable=void 0}cancelAndSet(e,t,s=globalThis){if(this.isDisposed)throw new n.he("Calling 'cancelAndSet' on a disposed IntervalTimer");this.cancel();const i=s.setInterval((()=>{e()}),t);this.disposable=(0,r.OF)((()=>{s.clearInterval(i),this.disposable=void 0}))}dispose(){this.cancel(),this.isDisposed=!0}}class P{constructor(e,t){this.timeoutToken=-1,this.runner=e,this.timeout=t,this.timeoutHandler=this.onTimeout.bind(this)}dispose(){this.cancel(),this.runner=null}cancel(){this.isScheduled()&&(clearTimeout(this.timeoutToken),this.timeoutToken=-1)}schedule(e=this.timeout){this.cancel(),this.timeoutToken=setTimeout(this.timeoutHandler,e)}get delay(){return this.timeout}set delay(e){this.timeout=e}isScheduled(){return-1!==this.timeoutToken}onTimeout(){this.timeoutToken=-1,this.runner&&this.doRun()}doRun(){var e;null===(e=this.runner)||void 0===e||e.call(this)}}let g,T;T="function"!=typeof globalThis.requestIdleCallback||"function"!=typeof globalThis.cancelIdleCallback?(e,t)=>{(0,l.fn)((()=>{if(s)return;const e=Date.now()+15,i={didTimeout:!0,timeRemaining:()=>Math.max(0,e-Date.now())};t(Object.freeze(i))}));let s=!1;return{dispose(){s||(s=!0)}}}:(e,t,s)=>{const i=e.requestIdleCallback(t,"number"==typeof s?{timeout:s}:void 0);let n=!1;return{dispose(){n||(n=!0,e.cancelIdleCallback(i))}}},g=e=>T(globalThis,e);class k{constructor(e,t){this._didRun=!1,this._executor=()=>{try{this._value=t()}catch(e){this._error=e}finally{this._didRun=!0}},this._handle=T(e,(()=>this._executor()))}dispose(){this._handle.dispose()}get value(){if(this._didRun||(this._handle.dispose(),this._executor()),this._error)throw this._error;return this._value}get isInitialized(){return this._didRun}}class b extends k{constructor(e){super(globalThis,e)}}class C{get isRejected(){var e;return 1===(null===(e=this.outcome)||void 0===e?void 0:e.outcome)}get isSettled(){return!!this.outcome}constructor(){this.p=new Promise(((e,t)=>{this.completeCallback=e,this.errorCallback=t}))}complete(e){return new Promise((t=>{this.completeCallback(e),this.outcome={outcome:0,value:e},t()}))}error(e){return new Promise((t=>{this.errorCallback(e),this.outcome={outcome:1,value:e},t()}))}cancel(){return this.error(new n.FU)}}var R;!function(e){e.settled=async function(e){let t;const s=await Promise.all(e.map((e=>e.then((e=>e),(e=>{t||(t=e)})))));if(void 0!==t)throw t;return s},e.withAsyncBody=function(e){return new Promise((async(t,s)=>{try{await e(t,s)}catch(e){s(e)}}))}}(R||(R={}));class q{static fromArray(e){return new q((t=>{t.emitMany(e)}))}static fromPromise(e){return new q((async t=>{t.emitMany(await e)}))}static fromPromises(e){return new q((async t=>{await Promise.all(e.map((async e=>t.emitOne(await e))))}))}static merge(e){return new q((async t=>{await Promise.all(e.map((async e=>{for await(const s of e)t.emitOne(s)})))}))}constructor(e,t){this._state=0,this._results=[],this._error=null,this._onReturn=t,this._onStateChanged=new o.Q5,queueMicrotask((async()=>{const t={emitOne:e=>this.emitOne(e),emitMany:e=>this.emitMany(e),reject:e=>this.reject(e)};try{await Promise.resolve(e(t)),this.resolve()}catch(e){this.reject(e)}finally{t.emitOne=void 0,t.emitMany=void 0,t.reject=void 0}}))}[Symbol.asyncIterator](){let e=0;return{next:async()=>{for(;;){if(2===this._state)throw this._error;if(e<this._results.length)return{done:!1,value:this._results[e++]};if(1===this._state)return{done:!0,value:void 0};await o.ju.toPromise(this._onStateChanged.event)}},return:async()=>{var e;return null===(e=this._onReturn)||void 0===e||e.call(this),{done:!0,value:void 0}}}}static map(e,t){return new q((async s=>{for await(const i of e)s.emitOne(t(i))}))}map(e){return q.map(this,e)}static filter(e,t){return new q((async s=>{for await(const i of e)t(i)&&s.emitOne(i)}))}filter(e){return q.filter(this,e)}static coalesce(e){return q.filter(e,(e=>!!e))}coalesce(){return q.coalesce(this)}static async toPromise(e){const t=[];for await(const s of e)t.push(s);return t}toPromise(){return q.toPromise(this)}emitOne(e){0===this._state&&(this._results.push(e),this._onStateChanged.fire())}emitMany(e){0===this._state&&(this._results=this._results.concat(e),this._onStateChanged.fire())}resolve(){0===this._state&&(this._state=1,this._onStateChanged.fire())}reject(e){0===this._state&&(this._state=2,this._error=e,this._onStateChanged.fire())}}q.EMPTY=q.fromArray([]);class S extends q{constructor(e,t){super(t),this._source=e}cancel(){this._source.cancel()}}function j(e){const t=new i.AU,s=e(t.token);return new S(t,(async e=>{const i=t.token.onCancellationRequested((()=>{i.dispose(),t.dispose(),e.reject(new n.FU)}));try{for await(const i of s){if(t.token.isCancellationRequested)return;e.emitOne(i)}i.dispose(),t.dispose()}catch(s){i.dispose(),t.dispose(),e.reject(s)}}))}},53060:(e,t,s)=>{s.d(t,{Ag:()=>c,Cg:()=>d,KN:()=>r,Q$:()=>h,T4:()=>u,mP:()=>l,oq:()=>a});var i=s(79579);const n="undefined"!=typeof Buffer;new i.o((()=>new Uint8Array(256)));let o;class r{static wrap(e){return n&&!Buffer.isBuffer(e)&&(e=Buffer.from(e.buffer,e.byteOffset,e.byteLength)),new r(e)}constructor(e){this.buffer=e,this.byteLength=this.buffer.byteLength}toString(){return n?this.buffer.toString():(o||(o=new TextDecoder),o.decode(this.buffer))}}function l(e,t){return(e[t+0]|0)>>>0|e[t+1]<<8>>>0}function a(e,t,s){e[s+0]=255&t,t>>>=8,e[s+1]=255&t}function c(e,t){return e[t]*2**24+65536*e[t+1]+256*e[t+2]+e[t+3]}function u(e,t,s){e[s+3]=t,t>>>=8,e[s+2]=t,t>>>=8,e[s+1]=t,t>>>=8,e[s]=t}function h(e,t){return e[t]}function d(e,t,s){e[s]=t}}}]);