"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=n(function(d,i){"use strict";var v=require("@stdlib/ndarray-base-broadcast-shapes"),p=require("@stdlib/ndarray-base-broadcast-array"),c=require("@stdlib/ndarray-base-shape");function h(e){var r,t,s,u,a;for(u=e.length,r=[],a=0;a<u;a++)r.push(c(e[a],!1));if(s=v(r),s===null)throw new Error("invalid arguments. Input arrays must be broadcast compatible.");for(t=[],a=0;a<u;a++)t.push(p(e[a],s));return t}i.exports=h});var b=o();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
