import { type Metadata } from 'next'
import Link from 'next/link'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/dsgvo/CookieBanner'
import Footer from '@/components/dsgvo/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description: 'A modern Next.js starter template with authentication, DSGVO compliance, and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="de">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col  px-10 `}>
          <header className="flex justify-between items-center p-4gap-4 h-16">
            <Link href="/dashboard">
              <h1 className="text-xl font-semibold cursor-pointer">Starter-Template</h1>
            </Link>
            <SignedOut>
              <div className='flex gap-2'>
              <SignInButton>
                <button className="rounded-md bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="rounded-md bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700">
                  Sign up
                </button>
              </SignUpButton>
              </div>
            </SignedOut>
            
            <SignedIn>
              <UserButton />
            </SignedIn>

          </header>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  )
}