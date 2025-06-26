import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if(url.pathname.includes('rewrite-page')) {
    url.pathname = '/ok';
    return NextResponse.rewrite(url, {
      request: { headers: request.headers },
    });
  }
  if(url.pathname.includes('redirect-page')) {
    url.pathname = '/ok';
    return NextResponse.redirect(url);
  }
  if(url.pathname.includes('rewrite-app')) {
    url.pathname = '/app/en/test/plop';
    return NextResponse.rewrite(url, {
      request: { headers: request.headers },
    });
  }
  if(url.pathname.includes('redirect-app')) {
    url.pathname = '/app/en/test/plop';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - 404, 500 (error pages)
     * - favicon.ico, robots.txt, sitemap.xml and all sitemap subpages (metadata files)
     * - static folders like .well-known, images, locales, static
     */
    {
      source:
        '/((?!api|_next/static|404|500|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-.*.xml|.well-known|locales|images|static).*)',
    },
    // Force the home path somehow excluded by the previous matcher
    {
      source: '/',
    },
  ],
};
