# koa-queryparams
A lightweight query parameter middleware for Koa 2.

## Installation
`npm i koa-queryparams`

## Usage

```js
import queryParams from "koa-queryparams";

app.use(queryParams);

// http://localhost/?foo=bar
router.get("/", async (ctx, next) => {
    console.log(ctx.queryParams.foo); // bar
});
```
