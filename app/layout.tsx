import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pratik-jadhav.vercel.app'),
  title: 'Pratik Vijay Jadhav - ML Engineer & AI Specialist',
  description: 'Portfolio of Pratik Vijay Jadhav - Machine Learning Engineer specializing in AI, Computer Vision, NLP, LLMs, and MLOps. Building production-ready intelligent systems.',
  keywords: 'Pratik Jadhav, Machine Learning Engineer, AI Specialist, Computer Vision, NLP, Deep Learning, MLOps, Python, TensorFlow, LLMs, RAG, Pune',
  authors: [{ name: 'Pratik Vijay Jadhav' }],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Pratik Vijay Jadhav - ML Engineer & AI Specialist',
    description: 'Portfolio showcasing AI/ML projects, production deployments, research, and expertise in intelligent systems.',
    type: 'website',
    url: 'https://pratik-jadhav.vercel.app',
    images: [{ url: '/logo.jpg', width: 1024, height: 1024, alt: 'Pratik Jadhav' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratik Vijay Jadhav - ML Engineer & AI Specialist',
    description: 'Machine Learning Engineer specializing in AI, Computer Vision, NLP, LLMs, and MLOps.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
