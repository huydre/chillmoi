import './globals.css'


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
      <head>
        <link rel="icon"
              href="/icon?<generated>"
              type="image/<generated>"
              sizes="<generated>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
