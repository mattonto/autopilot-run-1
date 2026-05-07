import { describe, it, expect } from 'vitest';
import { SELF } from 'cloudflare:test';

describe('Health check', () => {
  it('AC0: GET /health returns 200 with status ok', async () => {
    const res = await SELF.fetch('https://example.com/health');
    expect(res.status).toBe(200);
    const body = await res.json() as { status: string };
    expect(body.status).toBe('ok');
  });

  it('returns 404 for unknown routes', async () => {
    const res = await SELF.fetch('https://example.com/unknown');
    expect(res.status).toBe(404);
  });
});
