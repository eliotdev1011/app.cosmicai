import{p as re,q as Te,r as P}from"./index-24bd1783.js";var q={exports:{}},A=typeof Reflect=="object"?Reflect:null,z=A&&typeof A.apply=="function"?A.apply:function(e,n,r){return Function.prototype.apply.call(e,n,r)},B;A&&typeof A.ownKeys=="function"?B=A.ownKeys:Object.getOwnPropertySymbols?B=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:B=function(e){return Object.getOwnPropertyNames(e)};function xe(t){console&&console.warn&&console.warn(t)}var ie=Number.isNaN||function(e){return e!==e};function h(){h.init.call(this)}q.exports=h;q.exports.once=Be;h.EventEmitter=h;h.prototype._events=void 0;h.prototype._eventsCount=0;h.prototype._maxListeners=void 0;var K=10;function I(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(h,"defaultMaxListeners",{enumerable:!0,get:function(){return K},set:function(t){if(typeof t!="number"||t<0||ie(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");K=t}});h.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};h.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||ie(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function oe(t){return t._maxListeners===void 0?h.defaultMaxListeners:t._maxListeners}h.prototype.getMaxListeners=function(){return oe(this)};h.prototype.emit=function(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var s=e==="error",i=this._events;if(i!==void 0)s=s&&i.error===void 0;else if(!s)return!1;if(s){var a;if(n.length>0&&(a=n[0]),a instanceof Error)throw a;var f=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw f.context=a,f}var v=i[e];if(v===void 0)return!1;if(typeof v=="function")z(v,this,n);else for(var u=v.length,m=ue(v,u),r=0;r<u;++r)z(m[r],this,n);return!0};function se(t,e,n,r){var s,i,a;if(I(n),i=t._events,i===void 0?(i=t._events=Object.create(null),t._eventsCount=0):(i.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),i=t._events),a=i[e]),a===void 0)a=i[e]=n,++t._eventsCount;else if(typeof a=="function"?a=i[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),s=oe(t),s>0&&a.length>s&&!a.warned){a.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=t,f.type=e,f.count=a.length,xe(f)}return t}h.prototype.addListener=function(e,n){return se(this,e,n,!1)};h.prototype.on=h.prototype.addListener;h.prototype.prependListener=function(e,n){return se(this,e,n,!0)};function Se(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function ae(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},s=Se.bind(r);return s.listener=n,r.wrapFn=s,s}h.prototype.once=function(e,n){return I(n),this.on(e,ae(this,e,n)),this};h.prototype.prependOnceListener=function(e,n){return I(n),this.prependListener(e,ae(this,e,n)),this};h.prototype.removeListener=function(e,n){var r,s,i,a,f;if(I(n),s=this._events,s===void 0)return this;if(r=s[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete s[e],s.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(i=-1,a=r.length-1;a>=0;a--)if(r[a]===n||r[a].listener===n){f=r[a].listener,i=a;break}if(i<0)return this;i===0?r.shift():je(r,i),r.length===1&&(s[e]=r[0]),s.removeListener!==void 0&&this.emit("removeListener",e,f||n)}return this};h.prototype.off=h.prototype.removeListener;h.prototype.removeAllListeners=function(e){var n,r,s;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var i=Object.keys(r),a;for(s=0;s<i.length;++s)a=i[s],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(s=n.length-1;s>=0;s--)this.removeListener(e,n[s]);return this};function ce(t,e,n){var r=t._events;if(r===void 0)return[];var s=r[e];return s===void 0?[]:typeof s=="function"?n?[s.listener||s]:[s]:n?Ce(s):ue(s,s.length)}h.prototype.listeners=function(e){return ce(this,e,!0)};h.prototype.rawListeners=function(e){return ce(this,e,!1)};h.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):fe.call(t,e)};h.prototype.listenerCount=fe;function fe(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}h.prototype.eventNames=function(){return this._eventsCount>0?B(this._events):[]};function ue(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function je(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function Ce(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function Be(t,e){return new Promise(function(n,r){function s(a){t.removeListener(e,i),r(a)}function i(){typeof t.removeListener=="function"&&t.removeListener("error",s),n([].slice.call(arguments))}le(t,e,i,{once:!0}),e!=="error"&&Ie(t,s,{once:!0})})}function Ie(t,e,n){typeof t.on=="function"&&le(t,"error",e,n)}function le(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function s(i){r.once&&t.removeEventListener(e,s),n(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var J=q.exports;const jt=re(J),De=t=>JSON.stringify(t,(e,n)=>typeof n=="bigint"?n.toString()+"n":n),Me=t=>{const e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,n=t.replace(e,'$1"$2n"$3');return JSON.parse(n,(r,s)=>typeof s=="string"&&s.match(/^\d+n$/)?BigInt(s.substring(0,s.length-1)):s)};function Ne(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return Me(t)}catch{return t}}function X(t){return typeof t=="string"?t:De(t)||""}const Ue="PARSE_ERROR",Fe="INVALID_REQUEST",He="METHOD_NOT_FOUND",qe="INVALID_PARAMS",he="INTERNAL_ERROR",$="SERVER_ERROR",Je=[-32700,-32600,-32601,-32602,-32603],S={[Ue]:{code:-32700,message:"Parse error"},[Fe]:{code:-32600,message:"Invalid Request"},[He]:{code:-32601,message:"Method not found"},[qe]:{code:-32602,message:"Invalid params"},[he]:{code:-32603,message:"Internal error"},[$]:{code:-32e3,message:"Server error"}},de=$;function $e(t){return Je.includes(t)}function k(t){return Object.keys(S).includes(t)?S[t]:S[de]}function Ve(t){const e=Object.values(S).find(n=>n.code===t);return e||S[de]}function Ge(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var We={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var N=function(t,e){return N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)r.hasOwnProperty(s)&&(n[s]=r[s])},N(t,e)};function ze(t,e){N(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var U=function(){return U=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},U.apply(this,arguments)};function Ke(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xe(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var f=t.length-1;f>=0;f--)(a=t[f])&&(i=(s<3?a(i):s>3?a(e,n,i):a(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}function ke(t,e){return function(n,r){e(n,r,t)}}function Qe(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function Ye(t,e,n,r){function s(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function f(m){try{u(r.next(m))}catch(_){a(_)}}function v(m){try{u(r.throw(m))}catch(_){a(_)}}function u(m){m.done?i(m.value):s(m.value).then(f,v)}u((r=r.apply(t,e||[])).next())})}function Ze(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,a;return a={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function f(u){return function(m){return v([u,m])}}function v(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=u[0]&2?s.return:u[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,u[1])).done)return i;switch(s=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,s=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(m){u=[6,m],s=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function et(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function tt(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function F(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function pe(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),s,i=[],a;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(f){a={error:f}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function nt(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(pe(arguments[e]));return t}function rt(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),s=0,e=0;e<n;e++)for(var i=arguments[e],a=0,f=i.length;a<f;a++,s++)r[s]=i[a];return r}function j(t){return this instanceof j?(this.v=t,this):new j(t)}function it(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(y){r[y]&&(s[y]=function(w){return new Promise(function(p,T){i.push([y,w,p,T])>1||f(y,w)})})}function f(y,w){try{v(r[y](w))}catch(p){_(i[0][3],p)}}function v(y){y.value instanceof j?Promise.resolve(y.value.v).then(u,m):_(i[0][2],y)}function u(y){f("next",y)}function m(y){f("throw",y)}function _(y,w){y(w),i.shift(),i.length&&f(i[0][0],i[0][1])}}function ot(t){var e,n;return e={},r("next"),r("throw",function(s){throw s}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(s,i){e[s]=t[s]?function(a){return(n=!n)?{value:j(t[s](a)),done:s==="return"}:i?i(a):a}:i}}function st(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof F=="function"?F(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(a){return new Promise(function(f,v){a=t[i](a),s(f,v,a.done,a.value)})}}function s(i,a,f,v){Promise.resolve(v).then(function(u){i({value:u,done:f})},a)}}function at(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function ct(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function ft(t){return t&&t.__esModule?t:{default:t}}function ut(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function lt(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const ht=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return U},__asyncDelegator:ot,__asyncGenerator:it,__asyncValues:st,__await:j,__awaiter:Ye,__classPrivateFieldGet:ut,__classPrivateFieldSet:lt,__createBinding:et,__decorate:Xe,__exportStar:tt,__extends:ze,__generator:Ze,__importDefault:ft,__importStar:ct,__makeTemplateObject:at,__metadata:Qe,__param:ke,__read:pe,__rest:Ke,__spread:nt,__spreadArrays:rt,__values:F},Symbol.toStringTag,{value:"Module"})),dt=Te(ht);var R={},Q;function pt(){if(Q)return R;Q=1,Object.defineProperty(R,"__esModule",{value:!0}),R.isBrowserCryptoAvailable=R.getSubtleCrypto=R.getBrowerCrypto=void 0;function t(){return(P===null||P===void 0?void 0:P.crypto)||(P===null||P===void 0?void 0:P.msCrypto)||{}}R.getBrowerCrypto=t;function e(){const r=t();return r.subtle||r.webkitSubtle}R.getSubtleCrypto=e;function n(){return!!t()&&!!e()}return R.isBrowserCryptoAvailable=n,R}var O={},Y;function yt(){if(Y)return O;Y=1,Object.defineProperty(O,"__esModule",{value:!0}),O.isBrowser=O.isNode=O.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}O.isReactNative=t;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}O.isNode=e;function n(){return!t()&&!e()}return O.isBrowser=n,O}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=dt;e.__exportStar(pt(),t),e.__exportStar(yt(),t)})(We);function ye(t=3){const e=Date.now()*Math.pow(10,t),n=Math.floor(Math.random()*Math.pow(10,t));return e+n}function vt(t=6){return BigInt(ye(t))}function mt(t,e,n){return{id:n||ye(),jsonrpc:"2.0",method:t,params:e}}function Ct(t,e){return{id:t,jsonrpc:"2.0",result:e}}function bt(t,e,n){return{id:t,jsonrpc:"2.0",error:gt(e,n)}}function gt(t,e){return typeof t>"u"?k(he):(typeof t=="string"&&(t=Object.assign(Object.assign({},k($)),{message:t})),typeof e<"u"&&(t.data=e),$e(t.code)&&(t=Ve(t.code)),t)}class ve{}class Bt extends ve{constructor(e){super()}}class _t extends ve{constructor(){super()}}class wt extends _t{constructor(e){super()}}const Et="^https?:",Rt="^wss?:";function Ot(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function me(t,e){const n=Ot(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function Z(t){return me(t,Et)}function It(t){return me(t,Rt)}function Dt(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function be(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function Mt(t){return be(t)&&"method"in t}function Lt(t){return be(t)&&(Pt(t)||ge(t))}function Pt(t){return"result"in t}function ge(t){return"error"in t}class Nt extends wt{constructor(e){super(e),this.events=new J.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(mt(e.method,e.params||[],e.id||vt().toString()),n)}async requestStrict(e,n){return new Promise(async(r,s)=>{if(!this.connection.connected)try{await this.open()}catch(i){s(i)}this.events.on(`${e.id}`,i=>{ge(i)?s(i.error):r(i.result)});try{await this.connection.send(e,n)}catch(i){s(i)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Lt(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}var H={exports:{}};(function(t,e){var n=typeof self<"u"?self:P,r=function(){function i(){this.fetch=!1,this.DOMException=n.DOMException}return i.prototype=n,new i}();(function(i){(function(a){var f={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function v(o){return o&&DataView.prototype.isPrototypeOf(o)}if(f.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=ArrayBuffer.isView||function(o){return o&&u.indexOf(Object.prototype.toString.call(o))>-1};function _(o){if(typeof o!="string"&&(o=String(o)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(o))throw new TypeError("Invalid character in header field name");return o.toLowerCase()}function y(o){return typeof o!="string"&&(o=String(o)),o}function w(o){var c={next:function(){var l=o.shift();return{done:l===void 0,value:l}}};return f.iterable&&(c[Symbol.iterator]=function(){return c}),c}function p(o){this.map={},o instanceof p?o.forEach(function(c,l){this.append(l,c)},this):Array.isArray(o)?o.forEach(function(c){this.append(c[0],c[1])},this):o&&Object.getOwnPropertyNames(o).forEach(function(c){this.append(c,o[c])},this)}p.prototype.append=function(o,c){o=_(o),c=y(c);var l=this.map[o];this.map[o]=l?l+", "+c:c},p.prototype.delete=function(o){delete this.map[_(o)]},p.prototype.get=function(o){return o=_(o),this.has(o)?this.map[o]:null},p.prototype.has=function(o){return this.map.hasOwnProperty(_(o))},p.prototype.set=function(o,c){this.map[_(o)]=y(c)},p.prototype.forEach=function(o,c){for(var l in this.map)this.map.hasOwnProperty(l)&&o.call(c,this.map[l],l,this)},p.prototype.keys=function(){var o=[];return this.forEach(function(c,l){o.push(l)}),w(o)},p.prototype.values=function(){var o=[];return this.forEach(function(c){o.push(c)}),w(o)},p.prototype.entries=function(){var o=[];return this.forEach(function(c,l){o.push([l,c])}),w(o)},f.iterable&&(p.prototype[Symbol.iterator]=p.prototype.entries);function T(o){if(o.bodyUsed)return Promise.reject(new TypeError("Already read"));o.bodyUsed=!0}function V(o){return new Promise(function(c,l){o.onload=function(){c(o.result)},o.onerror=function(){l(o.error)}})}function _e(o){var c=new FileReader,l=V(c);return c.readAsArrayBuffer(o),l}function we(o){var c=new FileReader,l=V(c);return c.readAsText(o),l}function Ee(o){for(var c=new Uint8Array(o),l=new Array(c.length),g=0;g<c.length;g++)l[g]=String.fromCharCode(c[g]);return l.join("")}function G(o){if(o.slice)return o.slice(0);var c=new Uint8Array(o.byteLength);return c.set(new Uint8Array(o)),c.buffer}function W(){return this.bodyUsed=!1,this._initBody=function(o){this._bodyInit=o,o?typeof o=="string"?this._bodyText=o:f.blob&&Blob.prototype.isPrototypeOf(o)?this._bodyBlob=o:f.formData&&FormData.prototype.isPrototypeOf(o)?this._bodyFormData=o:f.searchParams&&URLSearchParams.prototype.isPrototypeOf(o)?this._bodyText=o.toString():f.arrayBuffer&&f.blob&&v(o)?(this._bodyArrayBuffer=G(o.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):f.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(o)||m(o))?this._bodyArrayBuffer=G(o):this._bodyText=o=Object.prototype.toString.call(o):this._bodyText="",this.headers.get("content-type")||(typeof o=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):f.searchParams&&URLSearchParams.prototype.isPrototypeOf(o)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},f.blob&&(this.blob=function(){var o=T(this);if(o)return o;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?T(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(_e)}),this.text=function(){var o=T(this);if(o)return o;if(this._bodyBlob)return we(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(Ee(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},f.formData&&(this.formData=function(){return this.text().then(Le)}),this.json=function(){return this.text().then(JSON.parse)},this}var Re=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Oe(o){var c=o.toUpperCase();return Re.indexOf(c)>-1?c:o}function L(o,c){c=c||{};var l=c.body;if(o instanceof L){if(o.bodyUsed)throw new TypeError("Already read");this.url=o.url,this.credentials=o.credentials,c.headers||(this.headers=new p(o.headers)),this.method=o.method,this.mode=o.mode,this.signal=o.signal,!l&&o._bodyInit!=null&&(l=o._bodyInit,o.bodyUsed=!0)}else this.url=String(o);if(this.credentials=c.credentials||this.credentials||"same-origin",(c.headers||!this.headers)&&(this.headers=new p(c.headers)),this.method=Oe(c.method||this.method||"GET"),this.mode=c.mode||this.mode||null,this.signal=c.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&l)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(l)}L.prototype.clone=function(){return new L(this,{body:this._bodyInit})};function Le(o){var c=new FormData;return o.trim().split("&").forEach(function(l){if(l){var g=l.split("="),b=g.shift().replace(/\+/g," "),d=g.join("=").replace(/\+/g," ");c.append(decodeURIComponent(b),decodeURIComponent(d))}}),c}function Pe(o){var c=new p,l=o.replace(/\r?\n[\t ]+/g," ");return l.split(/\r?\n/).forEach(function(g){var b=g.split(":"),d=b.shift().trim();if(d){var C=b.join(":").trim();c.append(d,C)}}),c}W.call(L.prototype);function E(o,c){c||(c={}),this.type="default",this.status=c.status===void 0?200:c.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in c?c.statusText:"OK",this.headers=new p(c.headers),this.url=c.url||"",this._initBody(o)}W.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var o=new E(null,{status:0,statusText:""});return o.type="error",o};var Ae=[301,302,303,307,308];E.redirect=function(o,c){if(Ae.indexOf(c)===-1)throw new RangeError("Invalid status code");return new E(null,{status:c,headers:{location:o}})},a.DOMException=i.DOMException;try{new a.DOMException}catch{a.DOMException=function(c,l){this.message=c,this.name=l;var g=Error(c);this.stack=g.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function D(o,c){return new Promise(function(l,g){var b=new L(o,c);if(b.signal&&b.signal.aborted)return g(new a.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function C(){d.abort()}d.onload=function(){var x={status:d.status,statusText:d.statusText,headers:Pe(d.getAllResponseHeaders()||"")};x.url="responseURL"in d?d.responseURL:x.headers.get("X-Request-URL");var M="response"in d?d.response:d.responseText;l(new E(M,x))},d.onerror=function(){g(new TypeError("Network request failed"))},d.ontimeout=function(){g(new TypeError("Network request failed"))},d.onabort=function(){g(new a.DOMException("Aborted","AbortError"))},d.open(b.method,b.url,!0),b.credentials==="include"?d.withCredentials=!0:b.credentials==="omit"&&(d.withCredentials=!1),"responseType"in d&&f.blob&&(d.responseType="blob"),b.headers.forEach(function(x,M){d.setRequestHeader(M,x)}),b.signal&&(b.signal.addEventListener("abort",C),d.onreadystatechange=function(){d.readyState===4&&b.signal.removeEventListener("abort",C)}),d.send(typeof b._bodyInit>"u"?null:b._bodyInit)})}return D.polyfill=!0,i.fetch||(i.fetch=D,i.Headers=p,i.Request=L,i.Response=E),a.Headers=p,a.Request=L,a.Response=E,a.fetch=D,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var s=r;e=s.fetch,e.default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e})(H,H.exports);var At=H.exports;const ee=re(At),Tt={Accept:"application/json","Content-Type":"application/json"},xt="POST",te={headers:Tt,method:xt},ne=10;class Ut{constructor(e,n=!1){if(this.url=e,this.disableProviderPing=n,this.events=new J.EventEmitter,this.isAvailable=!1,this.registering=!1,!Z(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=n}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const r=X(e),i=await(await ee(this.url,Object.assign(Object.assign({},te),{body:r}))).json();this.onPayload({data:i})}catch(r){this.onError(e.id,r)}}async register(e=this.url){if(!Z(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((r,s)=>{this.events.once("register_error",i=>{this.resetMaxListeners(),s(i)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return s(new Error("HTTP connection is missing or invalid"));r()})})}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const n=X({id:1,jsonrpc:"2.0",method:"test",params:[]});await ee(e,Object.assign(Object.assign({},te),{body:n}))}this.onOpen()}catch(n){const r=this.parseError(n);throw this.events.emit("register_error",r),this.onClose(),r}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?Ne(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const r=this.parseError(n),s=r.message||r.toString(),i=bt(e,s);this.events.emit("payload",i)}parseError(e,n=this.url){return Ge(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>ne&&this.events.setMaxListeners(ne)}}export{jt as E,Ut as H,Bt as I,Nt as J,X as a,Dt as b,We as c,Ge as d,J as e,bt as f,Mt as g,Lt as h,It as i,Ct as j,Pt as k,ge as l,mt as m,vt as n,ye as p,Ne as s};
