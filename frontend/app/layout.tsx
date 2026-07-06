import type { Metadata } from 'next'
import './styles/globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'School Pulse - منصة نبض المدارس',
  description: 'منصة حكومية متقدمة لإدارة التواصل بين مديري المدارس والإدارة العامة',
  keywords: ['school', 'education', 'management', 'dashboard', 'arabic'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 dark:bg-gray-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}