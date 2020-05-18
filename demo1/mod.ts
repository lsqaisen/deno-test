import { Router, Application, send } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
router.get('/test.js', (ctx: any) => {
  ctx.response.body = Deno.readFileSync('./src/test.js');
});

const app = new Application();
app.use(async (ctx: any) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/src`,
    index: 'index.html',
  });
});
app.use(router.routes());
app.use(router.allowedMethods());
console.log('http://0.0.0.0:8001');
const watcher = Deno.watchFs('./src/');
const watcherFunc = async () => {
  for await (const event of watcher) {
    console.log('>>>> event', event);
  }
};
await Promise.all([app.listen({ port: 8001 }), watcherFunc()]);
