## memoize-sync

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

![](https://dl.dropbox.com/s/9q2p5mrqnajys22/npmel.jpg?token_hash=AAHqttN9DiGl63ma8KRw-G0cdalaiMzrvrOPGnOfDslDjw)
