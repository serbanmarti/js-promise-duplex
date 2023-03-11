# promise-duplex

This is a fork from
[promise-duplex](https://github.com/dex4er/js-promise-duplex) by Piotr Roszatycki!

This module allows to convert
[`Duplex`](https://nodejs.org/api/stream.html#stream_class_stream_duplex) stream
into its promisified version, which returns
[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
object fulfilled when stream's events occurred.

The module combines
[`promise-readable`](https://www.npmjs.com/package/promise-readable) and
[`promise-writable`](https://www.npmjs.com/package/promise-writable) in one.

## Requirements

This module requires Node >= 18.

## Installation

```shell
npm install @serban.marti/promise-duplex
```

## Usage

```js
const {PromiseDuplex} = require("@serban.marti/promise-duplex")
```

_Typescript_:

```ts
import PromiseDuplex from "@serban.marti/promise-duplex"
// or
import {PromiseDuplex} from "@serban.marti/promise-duplex"
```

### constructor

```js
const promiseDuplex = new PromiseDuplex(stream)
```

`PromiseDuplex` object requires `Duplex` object to work.

_Example:_

```js
const net = require("net")
const {PromiseDuplex} = require("@serban.marti/promise-duplex")

const stream = new net.Socket()

const promiseDuplex = new PromiseDuplex(stream)
```

_Typescript:_

```ts
import net from "net"
import PromiseDuplex from "@serban.marti/promise-duplex"

const stream = new net.Socket()

const promiseDuplex = new PromiseDuplex(stream)
```

### stream

```js
const stream = promiseDuplex.stream
```

Original stream object.

_Example:_

```js
console.log(promiseDuplex.stream.localAddress)
```

### read

```js
const chunk = await promiseDuplex.read(chunkSize)
```

Check
[`PromiseReadable.read`](https://www.npmjs.com/package/promise-readable#read)
for details.

### readAll

```js
const content = await promiseDuplex.readAll()
```

Check
[`PromiseReadable.readAll`](https://www.npmjs.com/package/promise-readable#readall)
for details.

### iterate

```js
for await (const chunk of promiseDuplex.iterate(chunkSize)) {
}
```

Check
[`PromiseReadable.iterate`](https://www.npmjs.com/package/promise-readable#iterate)
for details.

### Symbol.asyncIterator

```js
for await (const chunk of promiseDuplex.iterate(chunkSize)) {
}
```

Check
[`PromiseReadable[Symbol.asyncIterator]`](https://www.npmjs.com/package/promise-readable#symbolasynciterator)
for details.

### setEncoding

```js
promiseDuplex = await promiseDuplex.setEncoding(encoding)
```

Check
[`PromiseReadable.setEncoding`](https://www.npmjs.com/package/promise-readable#setencoding)
for details.

### write

```js
await promiseDuplex.write(chunk)
```

Check
[`PromiseWritable.write`](https://www.npmjs.com/package/promise-writable#write)
for details.

### writeAll

```js
await promiseDuplex.writeAll(content, chunkSize)
```

Check
[`PromiseWritable.writeAll`](https://www.npmjs.com/package/promise-writable#writeall)
for details.

### end

```js
await promiseDuplex.end()
```

Check
[`PromiseWritable.once`](https://www.npmjs.com/package/promise-writable#end)
for details.

### once

```js
const result = await promiseDuplex.once(event)
```

Check
[`PromiseReadable.once`](https://www.npmjs.com/package/promise-readable#once)
and
[`PromiseWritable.once`](https://www.npmjs.com/package/promise-writable#once)
for details.

### destroy

```js
promiseDuplex.destroy()
```

This method calls destroy method on stream and cleans up all own handlers.

## See also

[`PromiseReadable`](https://www.npmjs.com/package/promise-readable),
[`PromiseWritable`](https://www.npmjs.com/package/promise-writable),
[`PromiseSocket`](https://www.npmjs.com/package/promise-socket),
[`PromisePiping`](https://www.npmjs.com/package/promise-piping).

## License

[MIT](https://opensource.org/licenses/MIT)
