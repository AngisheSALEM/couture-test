import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KABA — Vêtements en Pagne',
  description: 'Mode africaine contemporaine. Tissu pagne, savoir-faire artisanal, élégance intemporelle.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
