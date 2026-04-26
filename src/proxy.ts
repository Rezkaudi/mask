import { type NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
}

export default function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization')
    const url = req.nextUrl

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1]
        const [user, pwd] = atob(authValue).split(':')

        if (user === 'mask' && pwd === 'mask') {
            return NextResponse.next()
        }
    }
    url.pathname = '/api/auth'

    return NextResponse.rewrite(url)
}