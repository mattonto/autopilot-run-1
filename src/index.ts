import { Hono } from 'hono';

export type Env = {
  TODO_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/health', (c) => {
  return c.json({ status: 'ok' });
});

export default app;
