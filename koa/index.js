const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()
app.use(router.routes()).use(router.allowedMethods())

router.get('index', '/', (ctx) => {
  ctx.status = 200
  ctx.body = '<h1>INDEX PAGE</h1>'
})

router.get('about', '/about', (ctx) => {
  ctx.status = 200
  ctx.body = '<h1>WELCOME ABOUT PAGE</h1>'
})

router.get('contact', '/contact', (ctx) => {
  ctx.status = 200
  ctx.body = '<h1>WELCOME CONTACT PAGE</h1>'
})

const port = 8080
app.listen(port, () => {
  console.log(`server running on ${port}`)
})
