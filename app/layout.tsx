import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Treazure Yaad — Cars, Homes, Rentals & More',
  description: 'Browse cars, homes, rentals and more for sale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
