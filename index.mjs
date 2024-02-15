// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.1.0-esm/index.mjs";function a(a){var e,n,d,i,o;for(i=a.length,e=[],o=0;o<i;o++)e.push(t(a[o],!1));if(null===(d=r(e)))throw new Error("invalid arguments. Input arrays must be broadcast compatible.");for(n=[],o=0;o<i;o++)n.push(s(a[o],d));return n}export{a as default};
//# sourceMappingURL=index.mjs.map
