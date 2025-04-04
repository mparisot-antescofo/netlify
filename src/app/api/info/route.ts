import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const info = {
    Origin: req.nextUrl.origin,
    'Host from URL': req.nextUrl.host,
    Headers: Array.from(req.headers.keys())
      .filter((key) => key !== 'cookie')
      .reduce(
        (agg, key) => ({
          ...agg,
          [key]: req.headers.get(key),
        }),
        {},
      ),
    Cookies: Array.from(req.cookies)
      .filter(([, cookie]) => !cookie.name.startsWith('metronaut'))
      .reduce(
        (agg, [, cookie]) => ({
          ...agg,
          [cookie.name]: cookie.value,
        }),
        {},
      ),
    'Public environement variables': Object.keys(process.env)
      .filter((key) => key.startsWith('NEXT_PUBLIC'))
      .reduce(
        (agg, key) => ({
          ...agg,
          [key]: process.env[key],
        }),
        {},
      ),
  };

  return new Response(JSON.stringify(info, undefined, 2));
}
