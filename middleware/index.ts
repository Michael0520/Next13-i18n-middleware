import { NextRequest, NextResponse } from 'next/server'

// lang list
// let locales = ['en', 'es', 'id'];
export let defaultLocale = 'en';

export function middleware(request: NextRequest) {
    // let locale = getLocale(request) ?? defaultLocale
    let locale = defaultLocale
    const pathname = request.nextUrl.pathname

    const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.rewrite(newUrl)
}