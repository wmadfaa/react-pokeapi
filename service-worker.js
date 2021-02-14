var l=(b,R,d)=>new Promise((u,f)=>{var x=T=>{try{$(d.next(T))}catch(g){f(g)}},P=T=>{try{$(d.throw(T))}catch(g){f(g)}},$=T=>T.done?u(T.value):Promise.resolve(T.value).then(x,P);$((d=d.apply(b,R)).next())});(function(b){var R={};function d(u){if(R[u])return R[u].exports;var f=R[u]={i:u,l:!1,exports:{}};return b[u].call(f.exports,f,f.exports,d),f.l=!0,f.exports}return d.m=b,d.c=R,d.d=function(u,f,x){d.o(u,f)||Object.defineProperty(u,f,{enumerable:!0,get:x})},d.r=function(u){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},d.t=function(u,f){if(f&1&&(u=d(u)),f&8||f&4&&typeof u=="object"&&u&&u.__esModule)return u;var x=Object.create(null);if(d.r(x),Object.defineProperty(x,"default",{enumerable:!0,value:u}),f&2&&typeof u!="string")for(var P in u)d.d(x,P,function($){return u[$]}.bind(null,P));return x},d.n=function(u){var f=u&&u.__esModule?function(){return u.default}:function(){return u};return d.d(f,"a",f),f},d.o=function(u,f){return Object.prototype.hasOwnProperty.call(u,f)},d.p="/pokeapi-challenge/",d(d.s=5)})([function(b,R,d){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(u){}},function(b,R,d){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(u){}},function(b,R,d){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(u){}},function(b,R,d){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(u){}},function(b,R,d){"use strict";try{self["workbox:expiration:5.1.4"]&&_()}catch(u){}},function(b,R,d){"use strict";d.r(R);var u=d(0);const f=null,x={"invalid-value":({paramName:s,validValueDescription:e,value:t})=>{if(!s||!e)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${s}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(t)}.`},"not-an-array":({moduleName:s,className:e,funcName:t,paramName:r})=>{if(!s||!e||!t||!r)throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${r}' passed into '${s}.${e}.${t}()' must be an array.`},"incorrect-type":({expectedType:s,paramName:e,moduleName:t,className:r,funcName:n})=>{if(!s||!e||!t||!n)throw new Error("Unexpected input to 'incorrect-type' error.");return`The parameter '${e}' passed into '${t}.${r?r+".":""}${n}()' must be of type ${s}.`},"incorrect-class":({expectedClass:s,paramName:e,moduleName:t,className:r,funcName:n,isReturnValueProblem:a})=>{if(!s||!t||!n)throw new Error("Unexpected input to 'incorrect-class' error.");return a?`The return value from '${t}.${r?r+".":""}${n}()' must be an instance of class ${s.name}.`:`The parameter '${e}' passed into '${t}.${r?r+".":""}${n}()' must be an instance of class ${s.name}.`},"missing-a-method":({expectedMethod:s,paramName:e,moduleName:t,className:r,funcName:n})=>{if(!s||!e||!t||!r||!n)throw new Error("Unexpected input to 'missing-a-method' error.");return`${t}.${r}.${n}() expected the '${e}' parameter to expose a '${s}' method.`},"add-to-cache-list-unexpected-type":({entry:s})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(s)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:s,secondEntry:e})=>{if(!s||!e)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${s._entryId} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownError:s})=>{if(!s)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${s.message}'.`},"invalid-cache-name":({cacheNameId:s,value:e})=>{if(!s)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${s}: '...'}). Received a value of '${JSON.stringify(e)}'`},"unregister-route-but-not-found-with-method":({method:s})=>{if(!s)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${s}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:s})=>`Replaying the background sync queue '${s}' failed.`,"duplicate-queue-name":({name:s})=>`The Queue name '${s}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:s,paramName:e})=>`The '${s}()' method can only be used when the '${e}' is used in the constructor.`,"unsupported-route-type":({moduleName:s,className:e,funcName:t,paramName:r})=>`The supplied '${r}' parameter was an unsupported type. Please check the docs for ${s}.${e}.${t} for valid input types.`,"not-array-of-class":({value:s,expectedClass:e,moduleName:t,className:r,funcName:n,paramName:a})=>`The supplied '${a}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(s)},'. Please check the call to ${t}.${r}.${n}() to fix the issue.`,"max-entries-or-age-required":({moduleName:s,className:e,funcName:t})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${s}.${e}.${t}`,"statuses-or-headers-required":({moduleName:s,className:e,funcName:t})=>`You must define either config.statuses or config.headersin ${s}.${e}.${t}`,"invalid-string":({moduleName:s,funcName:e,paramName:t})=>{if(!t||!s||!e)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${t}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${s}.${e}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:s})=>{if(!s)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${s}"`},"single-range-only":({normalizedRangeHeader:s})=>{if(!s)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${s}"`},"invalid-range-values":({normalizedRangeHeader:s})=>{if(!s)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${s}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:s,start:e,end:t})=>`The start (${e}) and end (${t}) values in the Range are not satisfiable by the cached response, which is ${s} bytes.`,"attempt-to-cache-non-get-request":({url:s,method:e})=>`Unable to cache '${s}' because it is a '${e}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:s})=>`There was an attempt to cache '${s}' but the response was not defined.`,"no-response":({url:s,error:e})=>{let t=`The strategy could not generate a response for '${s}'.`;return e&&(t+=` The underlying error is ${e}.`),t},"bad-precaching-response":({url:s,status:e})=>`The precaching request for '${s}' failed with an HTTP status of ${e}.`,"non-precached-url":({url:s})=>`createHandlerBoundToURL('${s}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:s})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${s} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:s,url:e})=>`Unable to find a precached response in ${s} for ${e}.`},P=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},$=(s,e={})=>{const t=x[s];if(!t)throw new Error(`Unable to find message for code '${s}'.`);return t(e)},T=P;class g extends Error{constructor(e,t){const r=T(e,t);super(r);this.name=e,this.details=t}}const We=(s,e)=>{if(!Array.isArray(s))throw new g("not-an-array",e)},Me=(s,e,t)=>{if(typeof s[e]!=="function")throw t.expectedMethod=e,new g("missing-a-method",t)},Ke=(s,e,t)=>{if(typeof s!==e)throw t.expectedType=e,new g("incorrect-type",t)},Fe=(s,e,t)=>{if(!(s instanceof e))throw t.expectedClass=e,new g("incorrect-class",t)},qe=(s,e,t)=>{if(!e.includes(s))throw t.validValueDescription=`Valid values are ${JSON.stringify(e)}.`,new g("invalid-value",t)},je=(s,e,t)=>{const r=new g("not-array-of-class",t);if(!Array.isArray(s))throw r;for(const n of s)if(!(n instanceof e))throw r},He=null,I=new Set;function te(s){I.add(s)}const C={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},M=s=>[C.prefix,s,C.suffix].filter(e=>e&&e.length>0).join("-"),se=s=>{for(const e of Object.keys(C))s(e)},y={updateDetails:s=>{se(e=>{typeof s[e]=="string"&&(C[e]=s[e])})},getGoogleAnalyticsName:s=>s||M(C.googleAnalytics),getPrecacheName:s=>s||M(C.precache),getPrefix:()=>C.prefix,getRuntimeName:s=>s||M(C.runtime),getSuffix:()=>C.suffix};function re(){return l(this,null,function*(){for(const s of I)yield s()})}const B=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),""),K={filter:(s,e)=>s.filter(t=>e in t)},G=r=>l(this,[r],function*({request:s,mode:e,plugins:t=[]}){const n=K.filter(t,"cacheKeyWillBeUsed");let a=s;for(const i of n)a=yield i.cacheKeyWillBeUsed.call(i,{mode:e,request:a}),typeof a=="string"&&(a=new Request(a));return a}),ne=n=>l(this,[n],function*({request:s,response:e,event:t,plugins:r=[]}){let a=e,i=!1;for(const c of r)if("cacheWillUpdate"in c&&(i=!0,a=yield c.cacheWillUpdate.call(c,{request:s,response:a,event:t}),!a))break;return i||(a=a&&a.status===200?a:void 0),a||null}),V=a=>l(this,[a],function*({cacheName:s,request:e,event:t,matchOptions:r,plugins:n=[]}){const i=yield self.caches.open(s),c=yield G({plugins:n,request:e,mode:"read"});let o=yield i.match(c,r);for(const h of n)"cachedResponseWillBeUsed"in h&&(o=yield h.cachedResponseWillBeUsed.call(h,{cacheName:s,event:t,matchOptions:r,cachedResponse:o,request:c}));return o}),U={put:i=>l(this,[i],function*({cacheName:s,request:e,response:t,event:r,plugins:n=[],matchOptions:a}){const c=yield G({plugins:n,request:e,mode:"write"});if(!t)throw new g("cache-put-with-no-response",{url:B(c.url)});const o=yield ne({event:r,plugins:n,response:t,request:c});if(!o)return;const h=yield self.caches.open(s),p=K.filter(n,"cacheDidUpdate"),w=p.length>0?yield V({cacheName:s,matchOptions:a,request:c}):null;try{yield h.put(c,o)}catch(m){throw m.name==="QuotaExceededError"&&(yield re()),m}for(const m of p)yield m.cacheDidUpdate.call(m,{cacheName:s,event:r,oldResponse:w,newResponse:o,request:c})}),match:V};let v;function Be(){if(v===void 0)try{new ReadableStream({start(){}}),v=!0}catch(s){v=!1}return v}let N;function ae(){if(N===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),N=!0}catch(e){N=!1}N=!1}return N}function J(s){s.then(()=>{})}class F{constructor(e,t,{onupgradeneeded:r,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=r,this._onversionchange=n||(()=>this.close())}get db(){return this._db}open(){return l(this,null,function*(){if(!this._db)return this._db=yield new Promise((e,t)=>{let r=!1;setTimeout(()=>{r=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=a=>{r?(n.transaction.abort(),n.result.close()):typeof this._onupgradeneeded=="function"&&this._onupgradeneeded(a)},n.onsuccess=()=>{const a=n.result;r?a.close():(a.onversionchange=this._onversionchange.bind(this),e(a))}}),this})}getKey(e,t){return l(this,null,function*(){return(yield this.getAllKeys(e,t,1))[0]})}getAll(e,t,r){return l(this,null,function*(){return yield this.getAllMatching(e,{query:t,count:r})})}getAllKeys(e,t,r){return l(this,null,function*(){return(yield this.getAllMatching(e,{query:t,count:r,includeKeys:!0})).map(a=>a.key)})}getAllMatching(c){return l(this,arguments,function*(e,{index:t,query:r=null,direction:n="next",count:a,includeKeys:i=!1}={}){return yield this.transaction([e],"readonly",(o,h)=>{const p=o.objectStore(e),w=t?p.index(t):p,m=[],D=w.openCursor(r,n);D.onsuccess=()=>{const W=D.result;W?(m.push(i?W:W.value),a&&m.length>=a?h(m):W.continue()):h(m)}})})}transaction(e,t,r){return l(this,null,function*(){return yield this.open(),yield new Promise((n,a)=>{const i=this._db.transaction(e,t);i.onabort=()=>a(i.error),i.oncomplete=()=>n(),r(i,c=>n(c))})})}_call(e,t,r,...n){return l(this,null,function*(){const a=(i,c)=>{const o=i.objectStore(t),h=o[e].apply(o,n);h.onsuccess=()=>c(h.result)};return yield this.transaction([t],r,a)})}close(){this._db&&(this._db.close(),this._db=null)}}F.prototype.OPEN_TIMEOUT=2e3;const ie={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[s,e]of Object.entries(ie))for(const t of e)t in IDBObjectStore.prototype&&(F.prototype[t]=function(r,...n){return l(this,null,function*(){return yield this._call(t,r,s,...n)})});class Ge{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const oe=s=>l(this,null,function*(){yield new Promise((e,t)=>{const r=indexedDB.deleteDatabase(s);r.onerror=()=>{t(r.error)},r.onblocked=()=>{t(new Error("Delete blocked"))},r.onsuccess=()=>{e()}})}),L={fetch:n=>l(this,[n],function*({request:s,fetchOptions:e,event:t,plugins:r=[]}){if(typeof s=="string"&&(s=new Request(s)),t instanceof FetchEvent&&t.preloadResponse){const o=yield t.preloadResponse;if(o)return o}const a=K.filter(r,"fetchDidFail"),i=a.length>0?s.clone():null;try{for(const o of r)if("requestWillFetch"in o){const h=o.requestWillFetch,p=s.clone();s=yield h.call(o,{request:p,event:t})}}catch(o){throw new g("plugin-error-request-will-fetch",{thrownError:o})}const c=s.clone();try{let o;s.mode==="navigate"?o=yield fetch(s):o=yield fetch(s,e);for(const h of r)"fetchDidSucceed"in h&&(o=yield h.fetchDidSucceed.call(h,{event:t,request:c,response:o}));return o}catch(o){for(const h of a)yield h.fetchDidFail.call(h,{error:o,event:t,originalRequest:i.clone(),request:c.clone()});throw o}})};function ce(s){return new Promise(e=>setTimeout(e,s))}const le=2e3;function Je(s){return l(this,null,function*(){if(!s)return;let e=yield self.clients.matchAll({type:"window"});const t=new Set(e.map(a=>a.id));let r;const n=performance.now();for(;performance.now()-n<le&&(e=yield self.clients.matchAll({type:"window"}),r=e.find(a=>s?a.id===s:!t.has(a.id)),!r);)yield ce(100);return r})}const Ye={get googleAnalytics(){return y.getGoogleAnalyticsName()},get precache(){return y.getPrecacheName()},get prefix(){return y.getPrefix()},get runtime(){return y.getRuntimeName()},get suffix(){return y.getSuffix()}};function he(s,e){return l(this,null,function*(){const t=s.clone(),r={headers:new Headers(t.headers),status:t.status,statusText:t.statusText},n=e?e(r):r,a=ae()?t.body:yield t.blob();return new Response(a,n)})}function ue(){self.addEventListener("activate",()=>self.clients.claim())}function Qe(s){y.updateDetails(s)}function Xe(){self.addEventListener("install",()=>self.skipWaiting())}var Ze=d(4);const fe="workbox-expiration",O="cache-entries",Y=s=>{const e=new URL(s,location.href);return e.hash="",e.href};class de{constructor(e){this._cacheName=e,this._db=new F(fe,1,{onupgradeneeded:t=>this._handleUpgrade(t)})}_handleUpgrade(e){const r=e.target.result.createObjectStore(O,{keyPath:"id"});r.createIndex("cacheName","cacheName",{unique:!1}),r.createIndex("timestamp","timestamp",{unique:!1}),oe(this._cacheName)}setTimestamp(e,t){return l(this,null,function*(){e=Y(e);const r={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)};yield this._db.put(O,r)})}getTimestamp(e){return l(this,null,function*(){return(yield this._db.get(O,this._getId(e))).timestamp})}expireEntries(e,t){return l(this,null,function*(){const r=yield this._db.transaction(O,"readwrite",(a,i)=>{const o=a.objectStore(O).index("timestamp").openCursor(null,"prev"),h=[];let p=0;o.onsuccess=()=>{const w=o.result;if(w){const m=w.value;m.cacheName===this._cacheName&&(e&&m.timestamp<e||t&&p>=t?h.push(w.value):p++),w.continue()}else i(h)}}),n=[];for(const a of r)yield this._db.delete(O,a.id),n.push(a.url);return n})}_getId(e){return this._cacheName+"|"+Y(e)}}class pe{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new de(e)}expireEntries(){return l(this,null,function*(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=yield this._timestampModel.expireEntries(e,this._maxEntries),r=yield self.caches.open(this._cacheName);for(const n of t)yield r.delete(n);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,J(this.expireEntries()))})}updateTimestamp(e){return l(this,null,function*(){yield this._timestampModel.setTimestamp(e,Date.now())})}isURLExpired(e){return l(this,null,function*(){if(this._maxAgeSeconds){const t=yield this._timestampModel.getTimestamp(e),r=Date.now()-this._maxAgeSeconds*1e3;return t<r}else return!1})}delete(){return l(this,null,function*(){this._rerunRequested=!1,yield this._timestampModel.expireEntries(Infinity)})}}class ge{constructor(e={}){this.cachedResponseWillBeUsed=i=>l(this,[i],function*({event:t,request:r,cacheName:n,cachedResponse:a}){if(!a)return null;const c=this._isResponseDateFresh(a),o=this._getCacheExpiration(n);J(o.expireEntries());const h=o.updateTimestamp(r.url);if(t)try{t.waitUntil(h)}catch(p){}return c?a:null}),this.cacheDidUpdate=n=>l(this,[n],function*({cacheName:t,request:r}){const a=this._getCacheExpiration(t);yield a.updateTimestamp(r.url),yield a.expireEntries()}),this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&te(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===y.getRuntimeName())throw new g("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new pe(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(t===null)return!0;const r=Date.now();return t>=r-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}deleteCacheAndMetadata(){return l(this,null,function*(){for(const[e,t]of this._cacheExpirations)yield self.caches.delete(e),yield t.delete();this._cacheExpirations=new Map})}}var ze=d(1);const Q=[],X={get(){return Q},add(s){Q.push(...s)}};function et(s){X.add(s)}const me="__WB_REVISION__";function we(s){if(!s)throw new g("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const a=new URL(s,location.href);return{cacheKey:a.href,url:a.href}}const{revision:e,url:t}=s;if(!t)throw new g("add-to-cache-list-unexpected-type",{entry:s});if(!e){const a=new URL(t,location.href);return{cacheKey:a.href,url:a.href}}const r=new URL(t,location.href),n=new URL(t,location.href);return r.searchParams.set(me,e),{cacheKey:r.href,url:n.href}}const ye=(s,e)=>{f.groupCollapsed(s);for(const t of e)f.log(t);f.groupEnd()};function tt(s){const e=s.length;e>0&&(f.groupCollapsed(`During precaching cleanup, ${e} cached request${e===1?" was":"s were"} deleted.`),ye("Deleted Cache Requests",s),f.groupEnd())}function Z(s,e){if(e.length!==0){f.groupCollapsed(s);for(const t of e)f.log(t);f.groupEnd()}}function st(s,e){const t=s.length,r=e.length;if(t||r){let n=`Precaching ${t} file${t===1?"":"s"}.`;r>0&&(n+=` ${r} file${r===1?" is":"s are"} already cached.`),f.groupCollapsed(n),Z("View newly precached URLs.",s),Z("View previously precached URLs.",e),f.groupEnd()}}class _e{constructor(e){this._cacheName=y.getPrecacheName(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const r of e){typeof r=="string"?t.push(r):r&&r.revision===void 0&&t.push(r.url);const{cacheKey:n,url:a}=we(r),i=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==n)throw new g("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:n});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(n)&&this._cacheKeysToIntegrities.get(n)!==r.integrity)throw new g("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(n,r.integrity)}if(this._urlsToCacheKeys.set(a,n),this._urlsToCacheModes.set(a,i),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(){return l(this,arguments,function*({event:e,plugins:t}={}){const r=[],n=[],i=yield(yield self.caches.open(this._cacheName)).keys(),c=new Set(i.map(p=>p.url));for(const[p,w]of this._urlsToCacheKeys)c.has(w)?n.push(p):r.push({cacheKey:w,url:p});const o=r.map(({cacheKey:p,url:w})=>{const m=this._cacheKeysToIntegrities.get(p),D=this._urlsToCacheModes.get(w);return this._addURLToCache({cacheKey:p,cacheMode:D,event:e,integrity:m,plugins:t,url:w})});return yield Promise.all(o),{updatedURLs:r.map(p=>p.url),notUpdatedURLs:n}})}activate(){return l(this,null,function*(){const e=yield self.caches.open(this._cacheName),t=yield e.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)r.has(a.url)||(yield e.delete(a),n.push(a.url));return{deletedURLs:n}})}_addURLToCache(c){return l(this,arguments,function*({cacheKey:e,url:t,cacheMode:r,event:n,plugins:a,integrity:i}){const o=new Request(t,{integrity:i,cache:r,credentials:"same-origin"});let h=yield L.fetch({event:n,plugins:a,request:o}),p;for(const m of a||[])"cacheWillUpdate"in m&&(p=m);if(!(p?yield p.cacheWillUpdate({event:n,request:o,response:h}):h.status<400))throw new g("bad-precaching-response",{url:t,status:h.status});h.redirected&&(h=yield he(h)),yield U.put({event:n,plugins:a,response:h,request:e===t?o:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}matchPrecache(e){return l(this,null,function*(){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(yield self.caches.open(this._cacheName)).match(r)})}createHandler(e=!0){return r=>l(this,[r],function*({request:t}){try{const n=yield this.matchPrecache(t);if(n)return n;throw new g("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}})}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new g("non-precached-url",{url:e});const n=this.createHandler(t),a=new Request(e);return()=>n({request:a})}}let q;const E=()=>(q||(q=new _e),q);function Re(s,e=[]){for(const t of[...s.searchParams.keys()])e.some(r=>r.test(t))&&s.searchParams.delete(t);return s}function*xe(s,{ignoreURLParametersMatching:e,directoryIndex:t,cleanURLs:r,urlManipulation:n}={}){const a=new URL(s,location.href);a.hash="",yield a.href;const i=Re(a,e);if(yield i.href,t&&i.pathname.endsWith("/")){const c=new URL(i.href);c.pathname+=t,yield c.href}if(r){const c=new URL(i.href);c.pathname+=".html",yield c.href}if(n){const c=n({url:a});for(const o of c)yield o.href}}const be=(s,e)=>{const r=E().getURLsToCacheKeys();for(const n of xe(s,e)){const a=r.get(n);if(a)return a}},Te=({ignoreURLParametersMatching:s=[/^utm_/],directoryIndex:e="index.html",cleanURLs:t=!0,urlManipulation:r}={})=>{const n=y.getPrecacheName();self.addEventListener("fetch",a=>{const i=be(a.request.url,{cleanURLs:t,directoryIndex:e,ignoreURLParametersMatching:s,urlManipulation:r});if(!i)return;let c=self.caches.open(n).then(o=>o.match(i)).then(o=>o||fetch(i));a.respondWith(c)})};let z=!1;function Ce(s){z||(Te(s),z=!0)}const Ue="-precache-",Ee=(t,...r)=>l(this,[t,...r],function*(s,e=Ue){const a=(yield self.caches.keys()).filter(i=>i.includes(e)&&i.includes(self.registration.scope)&&i!==s);return yield Promise.all(a.map(i=>self.caches.delete(i))),a});function rt(){self.addEventListener("activate",s=>{const e=y.getPrecacheName();s.waitUntil(Ee(e).then(t=>{}))})}function nt(s=!0){return E().createHandler(s)}function Pe(s){return E().createHandlerBoundToURL(s)}function at(s){return E().getCacheKeyForURL(s)}function it(s){return E().matchPrecache(s)}const $e=s=>{const e=E(),t=X.get();s.waitUntil(e.install({event:s,plugins:t}).catch(r=>{throw r}))},Oe=s=>{const e=E();s.waitUntil(e.activate())};function Ne(s){E().addToCacheList(s),s.length>0&&(self.addEventListener("install",$e),self.addEventListener("activate",Oe))}function Le(s,e){Ne(s),Ce(e)}var ot=d(2);const Se="GET",ct=["DELETE","GET","HEAD","PATCH","POST","PUT"],j=s=>s&&typeof s=="object"?s:{handle:s};class S{constructor(e,t,r=Se){this.handler=j(t),this.match=e,this.method=r}}class lt extends S{constructor(e,{allowlist:t=[/./],denylist:r=[]}={}){super(n=>this._match(n),e);this._allowlist=t,this._denylist=r}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const r=e.pathname+e.search;for(const n of this._denylist)if(n.test(r))return!1;return!!this._allowlist.some(n=>n.test(r))}}class ke extends S{constructor(e,t,r){const n=({url:a})=>{const i=e.exec(a.href);if(!!i&&!(a.origin!==location.origin&&i.index!==0))return i.slice(1)};super(n,t,r)}}class ve{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,r=Promise.all(t.urlsToCache.map(n=>{typeof n=="string"&&(n=[n]);const a=new Request(...n);return this.handleRequest({request:a})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const{params:n,route:a}=this.findMatchingRoute({url:r,request:e,event:t});let i=a&&a.handler;const c=[];if(!i&&this._defaultHandler&&(i=this._defaultHandler),!i)return;let o;try{o=i.handle({url:r,request:e,event:t,params:n})}catch(h){o=Promise.reject(h)}return o instanceof Promise&&this._catchHandler&&(o=o.catch(h=>this._catchHandler.handle({url:r,request:e,event:t}))),o}findMatchingRoute({url:e,request:t,event:r}){const n=this._routes.get(t.method)||[];for(const a of n){let i;const c=a.match({url:e,request:t,event:r});if(c)return i=c,(Array.isArray(c)&&c.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(i=void 0),{route:a,params:i}}return{}}setDefaultHandler(e){this._defaultHandler=j(e)}setCatchHandler(e){this._catchHandler=j(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new g("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new g("unregister-route-route-not-registered")}}let k;const H=()=>(k||(k=new ve,k.addFetchListener(),k.addCacheListener()),k);function ee(s,e,t){let r;if(typeof s=="string"){const a=new URL(s,location.href),i=({url:c})=>c.href===a.href;r=new S(i,e,t)}else if(s instanceof RegExp)r=new ke(s,e,t);else if(typeof s=="function")r=new S(s,e,t);else if(s instanceof S)r=s;else throw new g("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return H().registerRoute(r),r}function ht(s){H().setCatchHandler(s)}function ut(s){H().setDefaultHandler(s)}var ft=d(3);const dt={strategyStart:(s,e)=>`Using ${s} to respond to '${B(e.url)}'`,printFinalResponse:s=>{s&&(f.groupCollapsed("View the final response here."),f.log(s||"[No response returned]"),f.groupEnd())}};class pt{constructor(e={}){this._cacheName=y.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}handle(r){return l(this,arguments,function*({event:e,request:t}){const n=[];typeof t=="string"&&(t=new Request(t));let a=yield U.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins}),i;if(!a)try{a=yield this._getFromNetwork(t,e)}catch(c){i=c}if(!a)throw new g("no-response",{url:t.url,error:i});return a})}_getFromNetwork(e,t){return l(this,null,function*(){const r=yield L.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=r.clone(),a=U.put({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(a)}catch(i){}return r})}}class gt{constructor(e={}){this._cacheName=y.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._matchOptions=e.matchOptions}handle(r){return l(this,arguments,function*({event:e,request:t}){typeof t=="string"&&(t=new Request(t));const n=yield U.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(!n)throw new g("no-response",{url:t.url});return n})}}const A={cacheWillUpdate:e=>l(this,[e],function*({response:s}){return s.status===200||s.status===0?s:null})};class mt{constructor(e={}){if(this._cacheName=y.getRuntimeName(e.cacheName),e.plugins){const t=e.plugins.some(r=>!!r.cacheWillUpdate);this._plugins=t?e.plugins:[A,...e.plugins]}else this._plugins=[A];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}handle(r){return l(this,arguments,function*({event:e,request:t}){const n=[];typeof t=="string"&&(t=new Request(t));const a=[];let i;if(this._networkTimeoutSeconds){const{id:h,promise:p}=this._getTimeoutPromise({request:t,event:e,logs:n});i=h,a.push(p)}const c=this._getNetworkPromise({timeoutId:i,request:t,event:e,logs:n});a.push(c);let o=yield Promise.race(a);if(o||(o=yield c),!o)throw new g("no-response",{url:t.url});return o})}_getTimeoutPromise({request:e,logs:t,event:r}){let n;return{promise:new Promise(i=>{const c=()=>l(this,null,function*(){i(yield this._respondFromCache({request:e,event:r}))});n=setTimeout(c,this._networkTimeoutSeconds*1e3)}),id:n}}_getNetworkPromise(a){return l(this,arguments,function*({timeoutId:e,request:t,logs:r,event:n}){let i,c;try{c=yield L.fetch({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(o){i=o}if(e&&clearTimeout(e),i||!c)c=yield this._respondFromCache({request:t,event:n});else{const o=c.clone(),h=U.put({cacheName:this._cacheName,request:t,response:o,event:n,plugins:this._plugins});if(n)try{n.waitUntil(h)}catch(p){}}return c})}_respondFromCache({event:e,request:t}){return U.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}class wt{constructor(e={}){this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions}handle(r){return l(this,arguments,function*({event:e,request:t}){typeof t=="string"&&(t=new Request(t));let n,a;try{a=yield L.fetch({request:t,event:e,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(i){n=i}if(!a)throw new g("no-response",{url:t.url,error:n});return a})}}class Ae{constructor(e={}){if(this._cacheName=y.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(r=>!!r.cacheWillUpdate);this._plugins=t?e.plugins:[A,...e.plugins]}else this._plugins=[A];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}handle(r){return l(this,arguments,function*({event:e,request:t}){const n=[];typeof t=="string"&&(t=new Request(t));const a=this._getFromNetwork({request:t,event:e});let i=yield U.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins}),c;if(i){if(e)try{e.waitUntil(a)}catch(o){}}else try{i=yield a}catch(o){c=o}if(!i)throw new g("no-response",{url:t.url,error:c});return i})}_getFromNetwork(r){return l(this,arguments,function*({request:e,event:t}){const n=yield L.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),a=U.put({cacheName:this._cacheName,request:e,response:n.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(a)}catch(i){}return n})}}ue(),Le([{'revision':'7f89e4151f29344fedda69d3abdd9577','url':'/pokeapi-challenge/index.html'},{'revision':null,'url':'/pokeapi-challenge/static/css/main.2be12d48.chunk.css'},{'revision':null,'url':'/pokeapi-challenge/static/js/2.5d0e016a.chunk.js'},{'revision':null,'url':'/pokeapi-challenge/static/js/3.44f0489a.chunk.js'},{'revision':null,'url':'/pokeapi-challenge/static/js/main.0592c503.chunk.js'},{'revision':null,'url':'/pokeapi-challenge/static/js/runtime-main.2f46b2fe.js'}]);const De=new RegExp("/[^/?]+\\.[^/]+$");ee(({request:s,url:e})=>!(s.mode!=="navigate"||e.pathname.startsWith("/_")||e.pathname.match(De)),Pe("/pokeapi-challenge/index.html")),ee(({url:s})=>s.origin===self.location.origin&&s.pathname.endsWith(".png"),new Ae({cacheName:"images",plugins:[new ge({maxEntries:50})]})),self.addEventListener("message",s=>{s.data&&s.data.type==="SKIP_WAITING"&&self.skipWaiting()})}]);

//# sourceMappingURL=service-worker.js.map