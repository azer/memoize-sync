## memoize-sync [![Build Status](https://travis-ci.org/azer/memoize-sync.png)](https://travis-ci.org/azer/memoize-sync)

Returns a memoized version of a function.

### Install

```bash
$ npm install memoize-sync
```

### Usage

```js
function work(n){
    console.log("doing some work")
    return n + 10
}

var memoizedWork = memoize(myfunc)

memoizedWork(10)
// "doing some work"
// => 20

memoizedWork(10)
// => 20

memoizedWork(20);
// "doing some work"
// => 30

memoizedWork(20);
// => 30

```

#### Using Hasher

```js
var memoizedWork = memoize(work, hasher)

memoizedWork('hello', 'world')
// doing some work

memoizedWork('hello', 'world')
// => hello world

memoizedWork('hello', 'kitty')
// doing some work
// => hello kitty

memoizedWork('hello', 'kitty')
// => hello kitty

function hasher(first, last){
    return first + ', ' + last
}

function work(first, last){
    console.log('doing some work')

    return first + ', ' + last
}
```
