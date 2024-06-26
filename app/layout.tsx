import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Chandana | Portfolio",
  description: 'I am Chandana a master`s student from Pennsylvania State University and also had a 3 years of experience as Software Engineer from Optum.',
}
//fbe2e2
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}
    bg-stone-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#f1c3c3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#c0baf1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

      <ActiveSectionContextProvider>

        <Header />
        {children}
        <Footer />
        <Toaster position='top-center' />
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
