<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# broadcastArrays

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Broadcast [ndarrays][@stdlib/ndarray/base/ctor] to a common shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import broadcastArrays from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-arrays@deno/mod.js';
```

#### broadcastArrays( arrays )

Broadcasts a list of [ndarrays][@stdlib/ndarray/base/ctor] to a common shape.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Create a 2x2x2 ndarray:
var y = zeros( [ 2, 2, 2 ] );
// returns <ndarray>

// Broadcast to a common shape:
var out = broadcastArrays( [ x, y ] );
// returns [ <ndarray>, <ndarray> ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function throws an error if provided [broadcast-incompatible][@stdlib/ndarray/base/broadcast-shapes] ndarrays.
-   Returned [ndarrays][@stdlib/ndarray/base/ctor] are views on their respective underlying data buffers. The views are typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a returned [ndarray][@stdlib/ndarray/base/ctor], copy the [ndarray][@stdlib/ndarray/base/ctor] **before** performing operations which may mutate elements.
-   Returned [ndarrays][@stdlib/ndarray/base/ctor] are "base" [ndarrays][@stdlib/ndarray/base/ctor], and, thus, the returned [ndarrays][@stdlib/ndarray/base/ctor] do not perform bounds checking or afford any of the guarantees of the non-base [ndarray][@stdlib/ndarray/ctor] constructor. The primary intent of this function is to broadcast ndarray-like objects within internal implementations and to do so with minimal overhead.
-   The function always returns new [ndarray][@stdlib/ndarray/base/ctor] instances even if an input [ndarray][@stdlib/ndarray/base/ctor] shape and the broadcasted shape are the same.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';
import numel from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@deno/mod.js';
import ind2sub from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@deno/mod.js';
import broadcastArrays from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-arrays@deno/mod.js';

// Create a 2x2 array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Create a 3x2x2 array:
var y = zeros( [ 3, 2, 2 ] );
// returns <ndarray>

// Broadcast the arrays to a common shape:
var out = broadcastArrays( [ x, y ] );
// returns [ <ndarray>, <ndarray> ]

// Retrieve the common shape:
var sh = out[ 0 ].shape;
// returns [ 3, 2, 2 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var i;
for ( i = 0; i < N; i++ ) {
    console.log( 'X[%s] = %d', ind2sub( sh, i ).join( ', ' ), out[ 0 ].iget( i ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-broadcast-arrays.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-broadcast-arrays

[test-image]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-broadcast-arrays/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-broadcast-arrays?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-broadcast-arrays.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-broadcast-arrays/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-broadcast-arrays/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor/tree/deno

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

</section>

<!-- /.links -->
