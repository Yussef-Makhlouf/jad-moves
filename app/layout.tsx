import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import FloatingButtons from '@/components/FloatingButtons'

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'نقل بلا حدود | خدمات نقل الأثاث والعفش المبتكرة في الرياض',
  description: 'شركة رائدة في نقل الأثاث والعفش في الرياض. نقدم حلولًا مبتكرة وخدمات استثنائية لضمان تجربة نقل سلسة وآمنة.',
  keywords: 'نقل عفش, نقل أثاث, الرياض, شركة نقل, فك وتركيب, تغليف, تخزين أثاث, نقل منازل, نقل مكاتب, خدمات مبتكرة',
  authors: [{ name: 'شركة نقل الاثاث في الرياض' }],
  creator: 'شركة نقل  الاثاث في الرياض',
  publisher: 'شركة نقل  الاثاث في الرياض',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'نقل بلا حدود | خدمات نقل الأثاث في الرياض',
    description: 'شركة رائدة في نقل الأثاث والعفش في الرياض. نقدم حلولًا مبتكرة وخدمات استثنائية.',
    url: 'https://your-domain.com',
    siteName: 'نقل بلا حدود',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'نقل بلا حدود - خدمات نقل الأثاث في الرياض',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نقل بلا حدود | خدمات نقل الأثاث في الرياض',
    description: 'شركة رائدة في نقل الأثاث والعفش في الرياض',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'خدمات نقل الأثاث',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111827" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${cairo.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}