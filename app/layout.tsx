import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mahmoud-amr.vercel.app/'

// JSON-LD Structured Data for better Google Search visibility
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Mahmoud Amr',
      alternateName: ['Mahmoud', 'محمود عمرو'],
      jobTitle: 'AI & Machine Learning Engineer',
      description: 'Computer Science student specializing in AI, Machine Learning, Deep Learning, Computer Vision, and NLP',
      url: siteUrl,
      sameAs: [
        'http://www.linkedin.com/in/mahmoud-amr21',
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Python',
        'PyTorch',
        'TensorFlow',
        'scikit-learn',
        'Pandas',
        'NumPy',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Giza',
        addressCountry: 'Egypt',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: 'Mahmoud Amr Portfolio',
      description: 'Portfolio of Mahmoud Amr - AI & Machine Learning Engineer',
      publisher: {
        '@id': `${siteUrl}#person`,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': siteUrl,
      url: siteUrl,
      name: 'Mahmoud Amr | AI & Machine Learning Engineer',
      isPartOf: {
        '@id': `${siteUrl}#website`,
      },
      about: {
        '@id': `${siteUrl}#person`,
      },
      mainEntity: {
        '@id': `${siteUrl}#person`,
      },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mahmoud Amr | AI & Machine Learning Engineer',
    template: '%s | Mahmoud Amr',
  },
  description: 'Mahmoud Amr - AI & Machine Learning Engineer specializing in Python, PyTorch, TensorFlow, scikit-learn, Computer Vision, and NLP. Building intelligent solutions with data science.',
  keywords: [
    'Mahmoud Amr',
    'Mahmoud',
    'محمود عمرو',
    'AI Engineer',
    'Machine Learning Engineer',
    'Data Scientist',
    'Python Developer',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'PyTorch',
    'TensorFlow',
    'scikit-learn',
    'AI Engineer Egypt',
    'ML Engineer Egypt',
    'Data Scientist Egypt',
    'Portfolio',
  ],
  authors: [{ name: 'Mahmoud Amr', url: siteUrl }],
  creator: 'Mahmoud Amr',
  publisher: 'Mahmoud Amr',
  generator: 'Next.js',
  applicationName: 'Mahmoud Amr Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mahmoud Amr - AI & Machine Learning Engineer',
    title: 'Mahmoud Amr | AI & Machine Learning Engineer',
    description: 'Mahmoud Amr - AI & ML Engineer specializing in Python, PyTorch, TensorFlow, Computer Vision, and NLP.',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
