"use client"
import './globals.css'
import { Montserrat } from 'next/font/google'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Chillmoi | Web xem phim số 1 Việt Nam',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ProgressBar
          height="4px"
          color="#5179FF"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  )
}
