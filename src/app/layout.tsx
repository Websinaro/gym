import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FORGE GYM — Forge Your Best Self',
  description: 'Premium gym and fitness facility. Personal training, group classes, nutrition coaching. No excuses — just results.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
