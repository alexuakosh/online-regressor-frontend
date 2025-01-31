import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Nunito } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { GoogleAnalytics } from '@next/third-parties/google'
// * ========================================================================

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Datarminism',
  description: 'The website of Datarminism company which provides services in financial and investment analysis, business consulting and data analysis techniques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className={`root-container`}>
          <Header logoHeight={24} logoWidth={24} logoText={'DATARMINISM'} />
          <main className={twMerge(`flex flex-col items-center justify-between p-2 h-max flex-grow`)}>
            {children}
          </main>
          <Footer addClassName={`mt-4 text-white bg-black h-[70px] flex justify-center gap-8 md:justify-evenly items-center`} />
        </div>
        <GoogleAnalytics gaId="G-KGK61BRKZG" />
      </body>
    </html>
  )
}
