## GET

```js
npm install koa2-formidable --save
```

## API

```js
const formidable = require('koa2-formidableV3')
const Koa = require('koa')
const app = new Koa()
app.use(formidable())

```
opt is [formidable](https://github.com/node-formidable/formidable) options.

## Use

```js
let { body, files } = ctx.request
``` 
## LICENSE
[MIT](./LICENSE)
