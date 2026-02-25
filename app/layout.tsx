import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Sajjad Rafique Portfolio',
  description: 'Junior DevOps & Cloud Engineer Portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-white shadow p-5">
          <h1 className="text-2xl font-bold">Sajjad Rafique</h1>
        </header>
        <main className="container mx-auto p-5">{children}</main>
        <footer className="text-center p-5 text-gray-500">
          © 2026 Sajjad Rafique
        </footer>
      </body>
    </html>
  )
}
