"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=n(function(d,i){
var v=require('@stdlib/ndarray-base-broadcast-shapes/dist'),p=require('@stdlib/ndarray-base-broadcast-array/dist'),c=require('@stdlib/ndarray-base-shape/dist');function h(e){var r,t,s,u,a;for(u=e.length,r=[],a=0;a<u;a++)r.push(c(e[a],!1));if(s=v(r),s===null)throw new Error("invalid arguments. Input arrays must be broadcast compatible.");for(t=[],a=0;a<u;a++)t.push(p(e[a],s));return t}i.exports=h
});var b=o();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
