import Navigation from './components/Nav'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
          <Navigation />
        {children}
        </body>
    </html>
  )
}
